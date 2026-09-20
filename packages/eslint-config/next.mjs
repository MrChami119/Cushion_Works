import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const baseDirectory = dirname(fileURLToPath(import.meta.url))
const compat = new FlatCompat({ baseDirectory })

export default [
  { ignores: ["**/.next/**", "**/node_modules/**", "**/dist/**"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
]
