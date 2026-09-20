import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/database/mongodb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, vehicle, rating, review } = body

    // Validate required fields
    if (!name || !email || !vehicle || !rating || !review) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    // Save review to database
    const result = await db.collection("reviews").insertOne({
      name,
      email,
      vehicle,
      rating,
      review,
      createdAt: new Date(),
      approved: false,
    })

    return NextResponse.json({ success: true, reviewId: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("Error saving review:", error)
    return NextResponse.json({ error: "Failed to save review" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { db } = await connectToDatabase()

    // Get approved reviews
    const reviews = await db.collection("reviews").find({ approved: true }).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(reviews)
  } catch (error) {
    console.error("Error fetching reviews:", error)
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}
