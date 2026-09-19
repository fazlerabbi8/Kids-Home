"use client";

import { FaStar, FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ product }) {
  const {
    title,
    image,
    price,
    ratings,
    reviews,
    sold,
  } = product;

  return (
    <div className="card w-72 bg-base-100 shadow-md border border-base-200">
      {/* Image */}
      <figure>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
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
        <div className="mt-1">
          <span className="text-lg font-bold text-primary">৳{price}</span>
        </div>

        {/* Add to Cart */}
        <button className="btn btn-primary btn-sm mt-3 w-full">
          <FaShoppingCart className="mr-1" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}