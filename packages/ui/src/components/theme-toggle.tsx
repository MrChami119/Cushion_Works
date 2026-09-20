"use client"

import * as React from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "../lib/utils"
import { Button } from "./button"

const themes = ["light", "dark", "system"] as const
type ThemeName = (typeof themes)[number]

const themeIcons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
}

export type ThemeToggleProps = Omit<React.ComponentProps<typeof Button>, "children" | "onClick">

export function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const currentTheme: ThemeName = mounted && themes.includes(theme as ThemeName) ? (theme as ThemeName) : "system"
  const currentIndex = themes.indexOf(currentTheme)
  const nextTheme = themes[(currentIndex + 1) % themes.length]
  const ThemeIcon = themeIcons[currentTheme]

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("border-primary/20 bg-background/30 backdrop-blur-md", className)}
      onClick={() => setTheme(nextTheme)}
      aria-label={`Current theme: ${currentTheme}. Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      {...props}
    >
      <ThemeIcon className="size-[1.2rem] transition-transform duration-200" aria-hidden="true" />
    </Button>
  )
}
