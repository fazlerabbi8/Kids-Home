"use server";

import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const createOrder = async (payload) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return { success: false, message: "User is not logged in" };
    }

    const { email } = session.user;
    const { deliveryInfo, cartItems, subtotal } = payload;

    if (!cartItems || cartItems.length === 0) {
      return { success: false, message: "Cart is empty" };
    }

    const orderCollection = await dbConnect(collections.ORDERS);
    const cartCollection = await dbConnect(collections.CART);

    const newOrder = {
      email,
      deliveryInfo,
      items: cartItems,
      subtotal,
      status: "pending",
      createdAt: new Date(),
    };

    const result = await orderCollection.insertOne(newOrder);

    if (result.acknowledged) {
      // clear the user's cart after a successful order
      await cartCollection.deleteMany({ email });
    }

    revalidatePath("/cart");
    revalidatePath("/checkout");

    return { success: result.acknowledged, orderId: result.insertedId };
  } catch (err) {
    console.error("createOrder error:", err);
    return { success: false, message: err.message };
  }
};
