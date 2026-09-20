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

    // Get all appointments
    const appointments = await db.collection("appointments").find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(appointments)
  } catch (error) {
    console.error("Error fetching appointments:", error)
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 })
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
    const { appointmentId, status } = body

    if (!appointmentId || !status || !ObjectId.isValid(appointmentId)) {
      return NextResponse.json({ error: "Appointment ID and status are required" }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    // Update appointment status
    await db.collection("appointments").updateOne({ _id: new ObjectId(appointmentId) }, { $set: { status } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating appointment:", error)
    return NextResponse.json({ error: "Failed to update appointment" }, { status: 500 })
  }
}
