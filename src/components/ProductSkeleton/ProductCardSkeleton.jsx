const ProductCardSkeleton = () => {
  return (
    <div className="card w-72 bg-base-100 shadow-md border border-base-200">
      <div className="skeleton h-48 w-full rounded-none"></div>

      <div className="card-body p-4">
        <div className="skeleton h-4 w-3/4 mb-2"></div>
        <div className="skeleton h-4 w-1/2 mb-2"></div>

        <div className="skeleton h-3 w-1/3 mb-2"></div>
        <div className="skeleton h-3 w-1/4 mb-3"></div>

        <div className="skeleton h-8 w-full"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
