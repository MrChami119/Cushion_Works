import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  // Clear auth cookie
  const cookieStore = await cookies()
  cookieStore.set({
    name: "auth-token",
    value: "",
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
  })

  return NextResponse.json({ success: true })
}
