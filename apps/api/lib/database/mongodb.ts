import { MongoClient, type Db } from "mongodb"

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  const mongodbUri = process.env.MONGODB_URI
  const mongodbDb = process.env.MONGODB_DB

  if (!mongodbUri) {
    throw new Error("Please define the MONGODB_URI environment variable")
  }

  if (!mongodbDb) {
    throw new Error("Please define the MONGODB_DB environment variable")
  }

  // If we have a cached connection, use it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  // Create a new connection
  const client = await MongoClient.connect(mongodbUri)
  const db = client.db(mongodbDb)

  // Cache the connection
  cachedClient = client
  cachedDb = db

  return { client, db }
}
