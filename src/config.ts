import { MongoClient } from "mongodb";

const DB_URI = process.env["DB_URI"];
let mongo: Promise<MongoClient> | null = null;
export async function connectToMongo() {
  if (!DB_URI) throw new Error("There is no db uri");
  if (!mongo) mongo = MongoClient.connect(DB_URI);
  return mongo;
}

export const env = {};
