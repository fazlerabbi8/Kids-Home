import { getCartData } from "@/actions/server/cart";
import CartItemActions from "@/components/CartItemActions/CartItemActions";
import Image from "next/image";

const CartPage = async () => {
  const cartItems = await getCartData();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-10 text-center text-gray-500">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-semibold mb-6">
        Your Cart ({cartItems.length})
      </h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item._id.toString()}
            className="flex items-center gap-4 border rounded-lg p-4"
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
              <CartItemActions item={{ ...item, _id: item._id.toString() }} />
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

      <div className="mt-6 flex justify-end border-t pt-4">
        <div className="text-right">
          <p className="text-sm text-gray-500">Subtotal</p>
          <p className="text-xl font-bold">৳{subtotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;