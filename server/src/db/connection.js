// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.ATLAS_URI || "";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// const dbName = 'pets';

// try {
//   // Connect the client to the server
//   await client.connect();
//   // Send a ping to confirm a successful connection
//   await client.db(dbName).command({ ping: 1 });
//   console.log(
//     "Pinged your deployment. You successfully connected to MongoDB!"
//   );
// } catch (err) {
//   console.error(err);
// }

// let db = client.db(dbName);

// export default db;