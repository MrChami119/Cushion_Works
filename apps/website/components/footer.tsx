import Link from "next/link"
import { BrandWordmark } from "@cushion/ui/brand-wordmark"
import {
  ArrowRight,
  CalendarDays,
  Facebook,
  Instagram,
  MapPin,
  Music2,
  Phone,
  Youtube,
} from "lucide-react"

import { cn } from "@/lib/utils"

const exploreLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Project Gallery", href: "/gallery" },
  { name: "Customer Reviews", href: "/reviews" },
  { name: "Frequently Asked Questions", href: "/faq" },
]

const services = [
  "Custom seat covers",
  "Interior modifications",
  "Dashboard restoration",
  "Roof lining and carpeting",
  "Commercial vehicle interiors",
]

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/edirisinghacushionworks/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/edirisinghacushionworks_/",
    icon: Instagram,
  },
  { name: "TikTok", href: "https://www.tiktok.com/@edirisinghacushionworks", icon: Music2 },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCn197-G5lqhFHCtq1xm98Lw",
    icon: Youtube,
  },
]

const footerHeadingClass =
  "text-sm font-semibold uppercase tracking-[0.16em] text-zinc-950 dark:text-white"

const footerLinkClass =
  "text-sm text-zinc-600 transition-colors hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-500"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={cn(
        "border-t border-zinc-200 bg-[#f7f7f5] text-zinc-900",
        "dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border-b border-zinc-200/80 bg-white/70 backdrop-blur-xl",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]",
          "dark:border-white/15 dark:bg-zinc-900/75",
          "dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-r",
            "from-white/80 via-white/30 to-red-100/70",
            "dark:from-white/[0.05] dark:via-transparent dark:to-red-950/60",
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute -right-16 -top-24 size-64 rounded-full",
            "bg-red-400/20 blur-3xl dark:bg-red-600/20",
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute -bottom-28 -left-20 size-56 rounded-full",
            "bg-white/60 blur-3xl dark:bg-white/[0.06]",
          )}
        />
        <div
          className={cn(
            "relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6",
            "md:flex-row md:items-center md:justify-between lg:px-8",
          )}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:text-white/75">
              Start your transformation
            </p>
            <h2 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white sm:text-3xl">
              Ready to upgrade your vehicle interior?
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className={cn(
                "inline-flex h-11 items-center justify-center rounded-md border px-5 text-sm font-semibold",
                "border-zinc-300 bg-white/30 text-zinc-900 transition-colors hover:bg-white/80",
                "dark:border-white/35 dark:bg-transparent dark:text-white dark:hover:bg-white/10",
              )}
            >
              Contact Us
            </Link>
            <Link
              href="/appointment"
              className={cn(
                "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold",
                "bg-red-600 text-white shadow-sm transition-colors hover:bg-red-700",
                "dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100",
              )}
            >
              <CalendarDays className="size-4" aria-hidden="true" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1.35fr]">
          <div>
            <Link href="/" className="group inline-flex" aria-label="Edirisingha Cushion Works home">
              <BrandWordmark />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Specialist craftsmanship for vehicle interiors, upholstery, restoration, and
              complete custom modifications.
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Edirisingha on ${name}`}
                  className={cn(
                    "inline-flex size-10 items-center justify-center rounded-full border",
                    "border-zinc-300 text-zinc-600 transition-colors",
                    "hover:border-red-600 hover:bg-red-600 hover:text-white",
                    "dark:border-white/10 dark:text-zinc-400",
                  )}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={footerHeadingClass}>Explore</h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={footerHeadingClass}>What We Do</h3>
            <ul className="mt-5 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <Link
              href="/services"
              className={cn(
                "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-red-600",
                "hover:text-red-700 dark:text-red-500 dark:hover:text-red-400",
              )}
            >
              View all services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div>
            <h3 className={footerHeadingClass}>Visit or Call</h3>
            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-red-500" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-zinc-950 dark:text-white">Head Office</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    A1, Pasyala 11890, Sri Lanka
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-red-500" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-zinc-950 dark:text-white">Negombo Branch</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Colombo Road, Kurana, Negombo
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-red-500" aria-hidden="true" />
                <div className="space-y-1">
                  <a href="tel:+94770103434" className={cn("block", footerLinkClass)}>
                    +94 77 010 3434
                  </a>
                  <a href="tel:+94334466729" className={cn("block", footerLinkClass)}>
                    +94 33 446 6729
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-xs text-zinc-500",
            "dark:border-white/10 sm:flex-row sm:items-center sm:justify-between",
          )}
        >
          <p>&copy; {currentYear} Edirisingha Cushion Works (Pvt) Ltd. All rights reserved.</p>
          <p>Vehicle interior specialists since 1997.</p>
        </div>
      </div>
    </footer>
  )
}
