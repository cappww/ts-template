import { MongoClient } from "mongodb";

export function handleError(error: any | unknown) {
  console.log(error.response.data);
  const [detail] = error.response.data.error.details;
  console.log(detail);
}

const DB_URI = process.env["DB_URI"];
let mongo: Promise<MongoClient> | null = null;
export function connectToMongo() {
  if (!DB_URI) throw new Error("There is no db uri");
  if (!mongo) mongo = MongoClient.connect(DB_URI);
  return mongo;
}

export const env = {};
