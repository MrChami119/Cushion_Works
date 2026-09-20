import { cookies } from "next/headers"
import { jwtVerify } from "jose"

function getJwtSecret() {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error("Please define the JWT_SECRET environment variable")
  }
  return new TextEncoder().encode(secret)
}

export async function auth() {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")?.value

  if (!token) {
    return null
  }

  try {
    const { payload } = await jwtVerify(token, getJwtSecret())

    return payload
  } catch (error) {
    console.error("Auth error:", error)
    return null
  }
}
