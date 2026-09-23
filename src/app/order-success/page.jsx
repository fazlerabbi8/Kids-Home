import Link from "next/link";

const OrderSuccessPage = () => {
  return (
    <div className="max-w-lg mx-auto py-20 px-4 text-center">
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-2xl font-semibold mb-2">Order Placed Successfully!</h1>
      <p className="text-gray-500 mb-8">
        Thank you for shopping with Kids Home. We've sent an order confirmation
        to your email, and your items will be on their way soon.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="btn bg-primary text-white font-medium py-2.5 px-6 rounded-md hover:opacity-90"
        >
          Continue Shopping
        </Link>
        <Link
          href="/orders"
          className="btn border border-gray-300 text-gray-700 font-medium py-2.5 px-6 rounded-md hover:bg-gray-50"
        >
          View My Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;