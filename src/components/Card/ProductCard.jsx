"use client";

import Link from "next/link";
import { FaStar, FaShoppingCart, FaEye } from "react-icons/fa";

export default function ProductCard({ product, index }) {
     console.log("ProductCard received:", product);
  const {
    _id,
    title,
    image,
    price,
    discount = 0,
    ratings,
    reviews,
    sold,
  } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card w-72 bg-base-100 shadow-md border border-base-200">
      {/* Image */}
      <figure className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        {discount > 0 && (
          <span className="badge badge-error absolute top-2 right-2 text-white">
            -{discount}%
          </span>
        )}
      </figure>

      <div className="card-body p-4">
        {/* Title */}
        <h2 className="text-sm font-semibold line-clamp-2">{title}</h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-1 text-sm text-base-content/70">
          <FaStar className="text-warning" />
          <span>{ratings}</span>
          <span>({reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-xs text-base-content/60">{sold} sold</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold text-primary">৳{discountedPrice}</span>
          {discount > 0 && (
            <span className="text-sm line-through text-base-content/50">
              ৳{price}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button className="btn btn-primary btn-sm mt-3 w-full">
          <FaShoppingCart className="mr-1" />
          Add to Cart
        </button>

        {/* View Details */}
        <Link href={`/products/${_id}`} className="btn btn-outline btn-sm mt-2 w-full">
          <FaEye className="mr-1" />
          View Details
        </Link>
      </div>
    </div>
  );
}