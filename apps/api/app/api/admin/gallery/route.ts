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

    // Get all gallery items
    const gallery = await db.collection("gallery").find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(gallery)
  } catch (error) {
    console.error("Error fetching gallery items:", error)
    return NextResponse.json({ error: "Failed to fetch gallery items" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // Check authentication
    const session = await auth()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { title, category, description, imageUrl } = body

    // Validate required fields
    if (!title || !category || !imageUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    // Save gallery item to database
    const result = await db.collection("gallery").insertOne({
      title,
      category,
      description,
      imageUrl,
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true, itemId: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("Error saving gallery item:", error)
    return NextResponse.json({ error: "Failed to save gallery item" }, { status: 500 })
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
    const itemId = searchParams.get("id")

    if (!itemId || !ObjectId.isValid(itemId)) {
      return NextResponse.json({ error: "Item ID is required" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    // Delete gallery item
    await db.collection("gallery").deleteOne({ _id: new ObjectId(itemId) })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting gallery item:", error)
    return NextResponse.json({ error: "Failed to delete gallery item" }, { status: 500 })
  }
}
