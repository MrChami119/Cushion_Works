import nextConfig from "./next.mjs"

export default [
  ...nextConfig,
  { rules: { "@next/next/no-html-link-for-pages": "off" } },
]
