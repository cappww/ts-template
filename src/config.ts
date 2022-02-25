import { MongoClient } from "mongodb";

export function handleError(error: any | unknown) {
  console.log(error.response.data);
  const [detail] = error.response.data.error.details;
  console.log(detail);
}

const DB_URI = process.env["DB_URI"];
let mongoClient: MongoClient | null = null;
export function connectToMongo() {
  if (!DB_URI) throw new Error("There is no db uri");
  if (!mongoClient) mongoClient = new MongoClient(DB_URI);
  return mongo.connect();
}

export const env = {};
