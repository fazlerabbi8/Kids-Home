
import { getProducts } from "@/actions/server/products";
import ProductCard from "../Card/ProductCard";
const Products = async() => {
      const products = await getProducts();
  return (
    <div>
      <h3 className="text-4xl text-center font-semibold mb-2">Our Products</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-11/12 mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
