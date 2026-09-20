"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { CalendarDays, ChevronDown, Menu, X } from "lucide-react"

import { BrandWordmark } from "@cushion/ui/brand-wordmark"
import { ThemeToggle } from "@cushion/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const primaryLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Customer Reviews", href: "/reviews" },
  { name: "FAQ", href: "/faq" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)

  const companyIsActive = companyLinks.some(({ href }) => isActive(href))

  const linkClass = (href: string) =>
    cn(
      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
      isActive(href)
        ? "bg-primary/10 text-primary"
        : "text-foreground/75 hover:bg-muted hover:text-foreground",
    )

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-all duration-300",
        scrolled
          ? "border-border/80 bg-background/95 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "border-border/50 bg-background/90 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group shrink-0" aria-label="Edirisingha Cushion Works home">
          <BrandWordmark size="sm" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex xl:translate-x-20">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.name}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "gap-1 px-3 text-sm font-medium",
                  companyIsActive ? "bg-primary/10 text-primary" : "text-foreground/75",
                )}
              >
                Company
                <ChevronDown className="size-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              {companyLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={isActive(link.href) ? "text-primary" : undefined}
                  >
                    {link.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="ml-3 bg-red-600 text-white shadow-sm hover:bg-red-700">
            <Link href="/appointment">
              <CalendarDays className="size-4" aria-hidden="true" />
              Book Appointment
            </Link>
          </Button>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-background/98 lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-5 sm:px-6">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block ${linkClass(link.href)}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <p className="px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Company
              </p>
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block ${linkClass(link.href)}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Button asChild className="mt-4 w-full bg-red-600 text-white hover:bg-red-700">
                <Link href="/appointment" onClick={() => setIsOpen(false)}>
                  <CalendarDays className="size-4" aria-hidden="true" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
