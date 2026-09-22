import { getCartData } from "@/actions/server/cart";
import CartItemActions from "@/components/CartItemActions/CartItemActions";
import Image from "next/image";

const CartPage = async () => {
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
      <h1 className="text-2xl font-semibold mb-6">
        Your Cart ({cartItems.length})
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Cart items - left side */}
        <div className="flex-1 w-full space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id.toString()}
              className="flex items-center gap-4 border border-gray-400 rounded-lg p-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-md object-cover"
              />

              <div className="flex-1">
                <h2 className="font-medium">{item.title}</h2>
                <CartItemActions
                  item={{ ...item, _id: item._id.toString() }}
                />
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  ৳{(item.price * item.quantity).toFixed(2)}
                </p>
                <p className="text-xs text-gray-400">৳{item.price} each</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary - right side */}
        <div className="w-full lg:w-80 border border-gray-400 rounded-lg p-6 sticky top-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="space-y-2 text-sm">
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

          <button className="w-full mt-6 btn bg-primary text-white font-medium py-2.5 rounded-md hover:opacity-90">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;