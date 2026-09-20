import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/database/mongodb"

export async function GET() {
  try {
    const { db } = await connectToDatabase()
    const gallery = await db.collection("gallery").find({}).sort({ createdAt: -1 }).toArray()
    return NextResponse.json(gallery)
  } catch (error) {
    console.error("Error fetching gallery items:", error)
    return NextResponse.json({ error: "Failed to fetch gallery items" }, { status: 500 })
  }
}
