"use server";

import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect";
import { transporter } from "@/lib/mailer";
import { orderInvoiceTemplate } from "@/lib/emailTemplates/orderInvoice";
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
      await cartCollection.deleteMany({ email });

      // send invoice email — don't let email failure break the order
      try {
        await transporter.sendMail({
          from: `"Kids Home" <${process.env.EMAIL_USER}>`,
          to: deliveryInfo.email || email,
          subject: `Kids Home - Order Confirmation #${result.insertedId}`,
          html: orderInvoiceTemplate({
            deliveryInfo,
            cartItems,
            subtotal,
            orderId: result.insertedId.toString(),
          }),
        });
      } catch (emailErr) {
        console.error("Order email failed:", emailErr);
        // order still succeeds even if email fails
      }
    }

    revalidatePath("/cart");
    revalidatePath("/checkout");

    return { success: result.acknowledged, orderId: result.insertedId };
  } catch (err) {
    console.error("createOrder error:", err);
    return { success: false, message: err.message };
  }
};