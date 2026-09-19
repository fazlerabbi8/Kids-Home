// import dns from "dns";
// dns.setServers(["8.8.8.8", "8.8.4.4"]);
// dns.setServers(["1.1.1.1", "1.0.0.1"])

import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DB_URI;
const dbname = process.env.DB_NAME;
export const collections = {
  PRODUCTS: "products",
};
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = (collectionName) => {
  return client.db(dbname).collection(collectionName);
};
