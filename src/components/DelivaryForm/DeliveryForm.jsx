"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { createOrder } from "@/actions/server/order";

const DeliveryForm = ({ cartItems, subtotal }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const deliveryInfo = Object.fromEntries(formData.entries());

    const orderData = {
      deliveryInfo,
      cartItems,
      subtotal,
    };

    const result = await createOrder(orderData);

    setIsSubmitting(false);

    if (result.success) {
      Swal.fire({
        title: "Order placed!",
        text: "Your order has been confirmed.",
        icon: "success",
      }).then(() => {
        router.push("/order-success");
      });
    } else {
      Swal.fire({
        title: "Oops!",
        text: result.message || "Something went wrong",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex-1 w-full p-6">
      <h2 className="text-lg font-semibold mb-4">Delivery Information</h2>

      <form onSubmit={handleConfirmOrder} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter name"
            required
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="01XXXXXXXXX"
            required
            pattern="[0-9]{11}"
            title="Enter an 11-digit phone number"
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Delivery Address
          </label>
          <textarea
            name="address"
            rows={3}
            placeholder="House, Road, Area"
            required
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              placeholder="Your city"
              required
              className="w-full border rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              placeholder="Enter code"
              required
              className="w-full border rounded-md px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Order Notes (optional)
          </label>
          <textarea
            name="notes"
            rows={2}
            placeholder="Any delivery instructions..."
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 btn bg-primary text-white font-medium py-2.5 rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Placing order..." : "Confirm Order"}
        </button>
      </form>
    </div>
  );
};

export default DeliveryForm;