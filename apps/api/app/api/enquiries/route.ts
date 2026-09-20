import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/database/mongodb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    // Save message to database
    const result = await db.collection("messages").insertOne({
      name,
      email,
      phone,
      subject,
      message,
      createdAt: new Date(),
      read: false,
    })

    return NextResponse.json({ success: true, messageId: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("Error saving contact message:", error)
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 })
  }
}
