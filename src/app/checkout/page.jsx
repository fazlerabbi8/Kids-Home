import { getCartData } from "@/actions/server/cart";
import DeliveryForm from "@/components/DelivaryForm/DeliveryForm";
import Image from "next/image";

const CheckoutPage = async () => {
  const cartItems = await getCartData();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-10 text-center text-gray-500">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <DeliveryForm
          cartItems={cartItems.map((item) => ({
            ...item,
            _id: item._id.toString(),
          }))}
          subtotal={subtotal}
        />

        {/* Order summary - right side */}
        <div className="w-full lg:w-96 p-6 sticky top-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
            {cartItems.map((item) => (
              <div key={item._id.toString()} className="flex gap-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="text-sm font-medium">
                  ৳{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-sm border-t mt-4 pt-4">
            <div className="flex justify-between text-gray-600">
              <span>Items ({totalItems})</span>
              <span>৳{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery</span>
              <span>Free</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t mt-4 pt-4">
            <span className="font-medium">Total</span>
            <span className="text-xl font-bold">৳{subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;