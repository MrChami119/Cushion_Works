"use client"

import { useRef } from "react"
import Link from "next/link"
import { BrandWordmark } from "@cushion/ui/brand-wordmark"
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  MessageSquare,
  Music2,
  Phone,
  Youtube,
} from "lucide-react"
import { motion, useInView, type Variants } from "framer-motion"

import { standardEase } from "@/lib/motion"
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: standardEase },
  },
}

const footerHeadingClass =
  "text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500"

const footerLinkClass =
  "text-[13px] text-zinc-600 transition-all duration-300 hover:text-red-600 " +
  "hover:translate-x-1 dark:text-zinc-400 dark:hover:text-red-400 inline-block"

const locationCardClass =
  "group/loc flex gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-300 " +
  "hover:border-zinc-200/80 hover:bg-white/80 dark:hover:border-white/5 dark:hover:bg-white/[0.02]"

const locationIconClass =
  "flex size-9 shrink-0 items-center justify-center rounded-lg bg-red-50 dark:bg-red-950/40"

const phoneLinkClass =
  "block text-[13px] text-zinc-600 transition-colors hover:text-red-600 " +
  "dark:text-zinc-400 dark:hover:text-red-400"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const ctaRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })
  const mainInView = useInView(mainRef, { once: true, amount: 0.15 })

  return (
    <footer className="relative overflow-hidden">
      {/* ─── CTA Banner ────────────────────────────────────────────── */}
      <div
        ref={ctaRef}
        className={cn(
          "relative overflow-hidden",
          "bg-gradient-to-br from-zinc-100 via-white to-red-50",
          "dark:from-zinc-900 dark:via-zinc-900 dark:to-red-950/30",
        )}
      >
        {/* Animated background orbs */}
        <div
          className={cn(
            "pointer-events-none absolute -right-20 -top-20 size-80 rounded-full",
            "bg-gradient-to-br from-red-400/25 to-orange-300/20 blur-[100px]",
            "dark:from-red-600/20 dark:to-orange-600/15",
            "animate-pulse",
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full",
            "bg-gradient-to-tr from-red-300/20 to-rose-200/15 blur-[80px]",
            "dark:from-red-700/15 dark:to-rose-800/10",
            "animate-pulse [animation-delay:1s]",
          )}
        />
        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), " +
              "linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: standardEase }}
          className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8"
        >
          <span
            className={cn(
              "mb-4 inline-block rounded-full bg-red-500/15 px-3.5 py-1",
              "text-xs font-medium uppercase tracking-wider text-red-500",
              "dark:bg-red-500/10 dark:text-red-400",
            )}
          >
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            Ready to Transform Your Vehicle Interior?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
            Whether you have a specific project in mind or need expert advice, our team is here to
            help. Reach out to us today to discuss your vehicle interior needs.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/contact"
                className={cn(
                  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border text-sm font-semibold",
                  "border-zinc-300/80 bg-white/60 text-zinc-900 backdrop-blur-sm",
                  "transition-all duration-300 hover:border-zinc-400 hover:bg-white",
                  "hover:shadow-lg hover:shadow-zinc-200/50",
                  "dark:border-white/15 dark:bg-white/5 dark:text-white",
                  "dark:hover:border-white/30 dark:hover:bg-white/10",
                  "dark:hover:shadow-lg dark:hover:shadow-red-500/5",
                )}
              >
                <MessageSquare className="size-4" aria-hidden="true" />
                Contact Us
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/appointment"
                className={cn(
                  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold",
                  "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25",
                  "transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30 hover:scale-[1.02]",
                  "dark:from-red-600 dark:to-red-500",
                )}
              >
                <CalendarDays className="size-4" aria-hidden="true" />
                Book Appointment
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="tel:+94770103434"
                className={cn(
                  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border text-sm font-semibold",
                  "border-zinc-300/80 bg-white/60 text-zinc-900 backdrop-blur-sm",
                  "transition-all duration-300 hover:border-zinc-400 hover:bg-white",
                  "hover:shadow-lg hover:shadow-zinc-200/50",
                  "dark:border-white/15 dark:bg-white/5 dark:text-white",
                  "dark:hover:border-white/30 dark:hover:bg-white/10",
                  "dark:hover:shadow-lg dark:hover:shadow-red-500/5",
                )}
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ─── Main Footer ───────────────────────────────────────────── */}
      <div
        className={cn(
          "relative",
          "bg-zinc-50 dark:bg-[#0a0a0a]",
          "border-t border-zinc-200/60 dark:border-white/5",
        )}
      >
        {/* Decorative top gradient line */}
        <div
          className={cn(
            "absolute left-0 right-0 top-0 h-px bg-gradient-to-r",
            "from-transparent via-red-500/40 to-transparent",
          )}
        />

        {/* Background decorations */}
        <div
          className={cn(
            "pointer-events-none absolute right-0 top-0 h-full w-1/2",
            "bg-gradient-to-l from-red-50/50 to-transparent",
            "dark:from-red-950/10 dark:to-transparent",
          )}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <motion.div
          ref={mainRef}
          variants={containerVariants}
          initial="hidden"
          animate={mainInView ? "visible" : "hidden"}
          className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.35fr]">
            {/* ── Brand Column ── */}
            <motion.div variants={itemVariants}>
              <Link href="/" className="group inline-flex" aria-label="Edirisingha Cushion Works home">
                <BrandWordmark />
              </Link>
              <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-500">
                Specialist craftsmanship for vehicle interiors, upholstery, restoration, and
                complete custom modifications.
              </p>

              {/* Social Icons */}
              <div className="mt-7 flex gap-2.5">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Edirisingha on ${name}`}
                    className={cn(
                      "group/icon relative inline-flex size-10 items-center justify-center rounded-xl border",
                      "border-zinc-200/80 bg-white text-zinc-500",
                      "transition-all duration-300",
                      "hover:border-red-500/50 hover:bg-red-500 hover:text-white",
                      "hover:scale-110 hover:shadow-lg hover:shadow-red-500/20",
                      "dark:border-white/10 dark:bg-white/5 dark:text-zinc-400",
                      "dark:hover:border-red-500/40 dark:hover:bg-red-500/90 dark:hover:shadow-red-500/15",
                    )}
                  >
                    <Icon
                      className="size-4 transition-transform duration-300 group-hover/icon:scale-110"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>

              {/* Business hours badge */}
              <div
                className={cn(
                  "mt-7 inline-flex items-center gap-2 rounded-lg border px-3 py-2",
                  "border-zinc-200/60 bg-white/80 dark:border-white/5 dark:bg-white/[0.03]",
                )}
              >
                <Clock className="size-3.5 text-red-500" aria-hidden="true" />
                <span className="text-xs text-zinc-500 dark:text-zinc-500">
                  Mon – Sat · 8:00 AM – 6:00 PM
                </span>
              </div>
            </motion.div>

            {/* ── Explore Column ── */}
            <motion.div variants={itemVariants}>
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
            </motion.div>

            {/* ── Services Column ── */}
            <motion.div variants={itemVariants}>
              <h3 className={footerHeadingClass}>What We Do</h3>
              <ul className="mt-5 space-y-3">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2 text-[13px] text-zinc-500 dark:text-zinc-500"
                  >
                    <span className="size-1 rounded-full bg-red-500/60" />
                    {service}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className={cn(
                  "group/link mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold",
                  "text-red-600 transition-all duration-300 hover:gap-3",
                  "dark:text-red-400 dark:hover:text-red-300",
                )}
              >
                View all services
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover/link:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>

            {/* ── Contact Column ── */}
            <motion.div variants={itemVariants}>
              <h3 className={footerHeadingClass}>Visit or Call</h3>
              <div className="mt-5 space-y-4">
                {/* Head Office */}
                <div className={locationCardClass}>
                  <div className={locationIconClass}>
                    <MapPin className="size-4 text-red-500" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-zinc-900 dark:text-white">
                      Head Office
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                      A1, Pasyala 11890, Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Negombo Branch */}
                <div className={locationCardClass}>
                  <div className={locationIconClass}>
                    <MapPin className="size-4 text-red-500" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-zinc-900 dark:text-white">
                      Negombo Branch
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                      Colombo Road, Kurana, Negombo
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className={locationCardClass}>
                  <div className={locationIconClass}>
                    <Phone className="size-4 text-red-500" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <a
                      href="tel:+94770103434"
                      className={phoneLinkClass}
                    >
                      +94 77 010 3434
                    </a>
                    <a
                      href="tel:+94334466729"
                      className={phoneLinkClass}
                    >
                      +94 33 446 6729
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Bottom Bar ── */}
          <motion.div
            variants={itemVariants}
            className="relative mt-14"
          >
            {/* Gradient divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent dark:via-white/10" />
            <div
              className={cn(
                "flex flex-col gap-3 pt-7 text-xs text-zinc-400",
                "dark:text-zinc-600 sm:flex-row sm:items-center sm:justify-between",
              )}
            >
              <p>&copy; {currentYear} Edirisingha Cushion Works (Pvt) Ltd. All rights reserved.</p>
              <p className="flex items-center gap-1.5">
                <span className="inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Vehicle interior specialists since 1997
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
