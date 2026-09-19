"use client";

import { FaStar, FaShoppingCart } from "react-icons/fa";

export default function ProductDetails({ product }) {
  const {
    title,
    bangla,
    image,
    price,
    percentage = 0,
    ratings,
    reviews,
    sold,
    description,
    info = [],
    qna = [],
  } = product;

  const discountedPrice = percentage
    ? Math.round(price - (price * percentage) / 100)
    : price;

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Main Product Card */}
      <div className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-5 md:p-8">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-base-200 rounded-2xl overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
            </div>

            {percentage > 0 && (
              <span className="badge badge-error text-white absolute top-4 right-4 font-semibold">
                -{percentage}%
              </span>
            )}
          </div>

          {/* Product Information */}
          <div className="flex flex-col">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                {title}
              </h1>

              {bangla && (
                <p className="text-sm text-base-content/60 mt-1">
                  {bangla}
                </p>
              )}
            </div>

            {/* Rating / Reviews / Sold */}
            <div className="flex flex-wrap items-center gap-3 mt-4 text-sm">
              <span className="flex items-center gap-1 font-medium">
                <FaStar className="text-warning" />
                {ratings}
              </span>

              <span className="text-base-content/60">
                {reviews} reviews
              </span>

              <span className="text-base-content/60">
                {sold} sold
              </span>
            </div>

            <div className="divider my-3" />

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary">
                ৳{discountedPrice}
              </span>

              {percentage > 0 && (
                <span className="text-lg line-through text-base-content/40">
                  ৳{price}
                </span>
              )}
            </div>

            {percentage > 0 && (
              <p className="text-sm text-success mt-1">
                You save ৳{price - discountedPrice}
              </p>
            )}

            {/* Description */}
            <div className="mt-5">
              <h2 className="font-semibold text-lg mb-2">
                Description
              </h2>

              <p className="text-sm leading-6 text-base-content/75 whitespace-pre-line">
                {description}
              </p>
            </div>

            {/* Product Info */}
            {info.length > 0 && (
              <div className="mt-5">
                <h2 className="font-semibold text-lg mb-2">
                  Product Information
                </h2>

                <ul className="list-disc list-inside space-y-1 text-sm text-base-content/75">
                  {info.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add To Cart */}
            <div className="mt-6">
              <button className="btn btn-primary w-full">
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Q&A Section */}
      {qna.length > 0 && (
        <div className="mt-8">
          <div className="card bg-base-100 shadow-lg border border-base-200">
            <div className="card-body">
              <h2 className="card-title text-xl">
                Questions & Answers
              </h2>

              <div className="mt-2 space-y-2">
                {qna.map((item, index) => (
                  <div
                    key={index}
                    className="collapse collapse-arrow bg-base-200"
                  >
                    <input type="checkbox" />

                    <div className="collapse-title font-medium">
                      {item.question}
                    </div>

                    <div className="collapse-content text-sm text-base-content/70">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
