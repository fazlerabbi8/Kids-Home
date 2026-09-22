import { getProducts } from "@/actions/server/products";
import ProductCard from "@/components/Card/ProductCard";

export const metadata = {
  title: "All Products",
  description:
    "Browse our collection of educational toys and learning tools for kids.",
};

export default async function Page() {
  const products = await getProducts();

  return (
    <div>
      <h3 className="text-4xl text-center font-semibold mb-2">
        Our Products
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-11/12 mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product._id.toString()}
            product={{
              ...product,
              _id: product._id.toString(),
            }}
          />
        ))}
      </div>
    </div>
  );
}