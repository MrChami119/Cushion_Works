import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const apiOrigin = process.env.API_INTERNAL_URL ?? "http://localhost:3002"

  try {
    const response = await fetch(`${apiOrigin}/api/auth/me`, {
      headers: { cookie: request.headers.get("cookie") ?? "" },
      cache: "no-store",
    })

    if (response.ok) return NextResponse.next()
  } catch {
    // If the API is unavailable, keep the protected dashboard closed.
  }

  const loginUrl = new URL("/login", request.url)
  loginUrl.searchParams.set("next", request.nextUrl.pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ["/((?!login|api|_next/static|_next/image|favicon.ico).*)"],
}
