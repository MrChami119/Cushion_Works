import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import "./custom.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "Edirisinghe Cushion Works",
  description: "High-end vehicle interior and cushion modification company",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${playfair.variable}`}
        style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
