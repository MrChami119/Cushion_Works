import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/database/mongodb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, vehicle, serviceType, date, time, message } = body

    // Validate required fields
    if (!name || !email || !phone || !vehicle || !serviceType || !date || !time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    // Save appointment to database
    const result = await db.collection("appointments").insertOne({
      name,
      email,
      phone,
      vehicle,
      serviceType,
      date,
      time,
      message,
      createdAt: new Date(),
      status: "pending",
    })

    return NextResponse.json({ success: true, appointmentId: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("Error saving appointment:", error)
    return NextResponse.json({ error: "Failed to save appointment" }, { status: 500 })
  }
}
