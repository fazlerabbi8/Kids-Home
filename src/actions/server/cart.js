"use server";

import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import Swal from "sweetalert2";

export const handleCart = async ({ product, increment = true }) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return { success: false, message: "User is not logged in" };
    }

    const cartCollection = await dbConnect(collections.CART);

    const { email, name: username } = session.user;
    const query = { email, productId: product._id };

    const isAdded = await cartCollection.findOne(query);

    if (isAdded) {
      const result = await cartCollection.updateOne(query, {
        $inc: { quantity: increment ? 1 : -1 },
      });
      return { success: result.modifiedCount > 0 };
    }

    const newData = {
      productId: product._id,
      email,
      title: product.title,
      quantity: 1,
      image: product.image,
      price: product.price - (product.price * (product.discount || 0)) / 100,
      username,
    };

    const result = await cartCollection.insertOne(newData);
    return { success: result.acknowledged };
  } catch (err) {
    console.error("handleCart error:", err);
    return { success: false, message: err.message };
  }
};

export const getCartData = async () => {
  try {
    const cartCollection = await dbConnect(collections.CART);
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return [];
    }

    const { email } = session.user;
    const result = await cartCollection.find({ email }).toArray();
    return result;
  } catch (error) {
    console.error("Get cart error:", error);
    return [];
  }
};