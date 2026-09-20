import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@cushion/ui"],
  async rewrites() {
    const apiOrigin = process.env.API_INTERNAL_URL ?? "http://localhost:3002"
    return [{ source: "/api/:path*", destination: `${apiOrigin}/api/:path*` }]
  },
}

export default nextConfig
