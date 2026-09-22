"use client";

import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";

const CartButton = ({ product }) => {
  const router = useRouter();
  const session = useSession();
  const path = usePathname();
  const isLogin = session?.status === "authenticated";

  const add2Cart = async () => {
    if (!isLogin) {
      router.push(`/login?callbackUrl=${path}`);
      return;
    }

    try {
      const result = await handleCart({
        product: {
          ...product,
          _id: product._id.toString(),
        },
        increment: true,
      });

      if (result.success) {
        Swal.fire({
          title: `${product.title} added to cart`,
          icon: "success",
          draggable: true,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.message || "Something went wrong!",
        });
      }
    } catch (error) {
      console.error("Add to cart error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.message || "Failed to add product to cart.",
      });
    }
  };

  return (
    <div>
      <button onClick={add2Cart} className="btn btn-primary w-full">
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;