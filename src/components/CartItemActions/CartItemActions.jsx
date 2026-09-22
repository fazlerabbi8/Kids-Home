"use client";

import Swal from "sweetalert2";
import { decrementCart, deleteCart, incrementCart } from "@/actions/server/cart";

const CartItemActions = ({ item }) => {
  const handleIncrement = async () => {
    const res = await incrementCart(item._id);
    if (!res.success) {
      Swal.fire({ title: "Oops!", text: res.message, icon: "error" });
    }
  };

  const handleDecrement = async () => {
    const res = await decrementCart(item._id);
    if (!res.success) {
      Swal.fire({ title: "Oops!", text: res.message, icon: "error" });
    }
  };

  const handleDeleteCart = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteCart(item._id);
        if (res?.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Item removed from cart.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Oops!",
            text: "Something went wrong",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="flex items-center gap-2 mt-2">
      <button
        onClick={handleDecrement}
        disabled={item.quantity <= 1}
        className="w-7 h-7 flex items-center justify-center border rounded disabled:opacity-40 disabled:cursor-not-allowed"
      >
        -
      </button>
      <span className="w-6 text-center">{item.quantity}</span>
      <button
        onClick={handleIncrement}
        className="w-7 h-7 flex items-center justify-center border rounded"
      >
        +
      </button>

      <button
        onClick={handleDeleteCart}
        className="ml-4 btn text-sm text-white bg-primary text-primary"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItemActions;