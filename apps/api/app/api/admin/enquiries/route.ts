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

    // Get all messages
    const messages = await db.collection("messages").find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(messages)
  } catch (error) {
    console.error("Error fetching messages:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
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
    const { messageId, read } = body

    if (!messageId || !ObjectId.isValid(messageId)) {
      return NextResponse.json({ error: "Message ID is required" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    // Update message read status
    await db.collection("messages").updateOne({ _id: new ObjectId(messageId) }, { $set: { read } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating message:", error)
    return NextResponse.json({ error: "Failed to update message" }, { status: 500 })
  }
}
