import type React from "react"

export const metadata = {
  title: "Cushion Works API",
  description: "Backend API for the Cushion Works platform",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
