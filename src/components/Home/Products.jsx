import products from "@/data/toys.json";
import ProductCard from "../Card/ProductCard";
const Products = () => {
  return (
    <div>
      <h3 className="text-4xl text-center font-semibold mb-2">Our Products</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-11/12 mx-auto">
        {products.map((product, index) => (
          <ProductCard
            key={product.id ?? index}
            product={product}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
