import { getSingleProducts } from "@/actions/server/products";
import ProductDetails from "@/components/ProductDetails/ProductDetails";


export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = await getSingleProducts(id);

  return <ProductDetails product={product} />;
}