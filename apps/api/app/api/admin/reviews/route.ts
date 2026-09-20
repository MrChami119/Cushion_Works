import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/database/mongodb"
import { auth } from "@/lib/auth/session"
import { ObjectId } from "mongodb"

export async function GET() {
  try {
    // Check authentication
    const session = await auth()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { db } = await connectToDatabase()

    // Get all reviews
    const reviews = await db.collection("reviews").find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(reviews)
  } catch (error) {
    console.error("Error fetching reviews:", error)
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    // Check authentication
    const session = await auth()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { reviewId, approved } = body

    if (!reviewId || !ObjectId.isValid(reviewId)) {
      return NextResponse.json({ error: "Review ID is required" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    // Update review approval status
    await db.collection("reviews").updateOne({ _id: new ObjectId(reviewId) }, { $set: { approved } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating review:", error)
    return NextResponse.json({ error: "Failed to update review" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    // Check authentication
    const session = await auth()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const reviewId = searchParams.get("id")

    if (!reviewId || !ObjectId.isValid(reviewId)) {
      return NextResponse.json({ error: "Review ID is required" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    // Delete review
    await db.collection("reviews").deleteOne({ _id: new ObjectId(reviewId) })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting review:", error)
    return NextResponse.json({ error: "Failed to delete review" }, { status: 500 })
  }
}
