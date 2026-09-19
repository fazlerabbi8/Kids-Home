import ProductCardSkeleton from '@/components/ProductSkeleton/ProductCardSkeleton';
import React from 'react';

const loading = () => {
    return (
         <div>
      <h3 className="text-4xl text-center font-semibold mb-2">Our Products</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-11/12 mx-auto">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
    );
};

export default loading;