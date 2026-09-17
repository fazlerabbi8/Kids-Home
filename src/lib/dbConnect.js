const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URI;
const dbname = process.env.DB_NAME;
const collections = {
    PRODUCTS: "products",
}
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect =(collectionName) =>{
    return client.db(dbname).collection(collectionName);
}