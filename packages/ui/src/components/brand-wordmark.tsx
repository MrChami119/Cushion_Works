import * as React from "react"

import { cn } from "../lib/utils"

export interface BrandWordmarkProps extends React.ComponentPropsWithoutRef<"span"> {
  size?: "sm" | "md"
}

export function BrandWordmark({ size = "md", className, ...props }: BrandWordmarkProps) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)} {...props}>
      <span
        className={cn(
          "font-black tracking-[0.08em] text-red-600 transition-colors group-hover:text-red-500",
          size === "sm" ? "text-xl sm:text-2xl" : "text-2xl",
        )}
      >
        EDIRISINGHA
      </span>
      <span
        className={cn(
          "mt-1 font-semibold tracking-[0.42em] text-zinc-500 dark:text-zinc-400",
          size === "sm" ? "text-[9px]" : "text-[10px]",
        )}
      >
        SINCE 1997
      </span>
    </span>
  )
}
