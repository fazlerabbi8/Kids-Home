import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// export const getProducts = async() =>{
//     const products = await dbConnect(collections.PRODUCTS).find().toArray();
//     return products;
// }

export const getProducts = async () => {
  const products = await dbConnect(collections.PRODUCTS).find().toArray();

  return products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));
};

export const getSingleProducts = async (id) => {
  console.log("Received id:", id, "length:", id.length);
  if (id.length != 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };

  const product = await dbConnect(collections.PRODUCTS).findOne(query);
  return { ...product, _id: product._id.toString() } || {};
};
