export default function ProductDetailsSkeleton() {
  return (
    <div className="max-w-5xl mx-auto p-4 animate-pulse">
      {/* Main Product Card */}
      <div className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-5 md:p-8">
          {/* Image Skeleton */}
          <div>
            <div className="skeleton w-full h-[350px] md:h-[450px] rounded-2xl" />
          </div>

          {/* Product Info Skeleton */}
          <div>
            {/* Title */}
            <div className="skeleton h-8 w-4/5 mb-2" />
            <div className="skeleton h-4 w-2/5" />

            {/* Rating */}
            <div className="flex gap-3 mt-5">
              <div className="skeleton h-4 w-10" />
              <div className="skeleton h-4 w-20" />
              <div className="skeleton h-4 w-16" />
            </div>

            <div className="divider my-3" />

            {/* Price */}
            <div className="flex gap-3 items-center">
              <div className="skeleton h-9 w-28" />
              <div className="skeleton h-5 w-20" />
            </div>

            <div className="skeleton h-4 w-32 mt-2" />

            {/* Description */}
            <div className="mt-5">
              <div className="skeleton h-6 w-28 mb-3" />

              <div className="space-y-2">
                <div className="skeleton h-3 w-full" />
                <div className="skeleton h-3 w-full" />
                <div className="skeleton h-3 w-11/12" />
                <div className="skeleton h-3 w-4/5" />
                <div className="skeleton h-3 w-3/4" />
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-5">
              <div className="skeleton h-6 w-40 mb-3" />

              <div className="space-y-2">
                <div className="skeleton h-3 w-4/5" />
                <div className="skeleton h-3 w-3/4" />
                <div className="skeleton h-3 w-4/5" />
                <div className="skeleton h-3 w-2/3" />
              </div>
            </div>

            {/* Button */}
            <div className="skeleton h-12 w-full mt-6" />
          </div>
        </div>
      </div>

      {/* Q&A Skeleton */}
      <div className="card bg-base-100 shadow-lg border border-base-200 mt-8">
        <div className="card-body">
          <div className="skeleton h-7 w-52 mb-4" />

          <div className="space-y-2">
            <div className="skeleton h-14 w-full" />
            <div className="skeleton h-14 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
