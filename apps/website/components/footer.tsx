"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Link
                href="/"
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600"
              >
                ECW
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground mb-6"
            >
              Transforming vehicle interiors with precision craftsmanship and innovative design since 1995.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4"
            >
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-4"
            >
              Quick Links
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </motion.ul>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-4"
            >
              Services
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <li>
                <Link
                  href="/services/seat-covers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Seat Covers
                </Link>
              </li>
              <li>
                <Link
                  href="/services/interior-redesign"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Interior Redesign
                </Link>
              </li>
              <li>
                <Link
                  href="/services/material-upgrades"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Material Upgrades
                </Link>
              </li>
              <li>
                <Link
                  href="/services/restoration"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Restoration Services
                </Link>
              </li>
            </motion.ul>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-4"
            >
              Contact Us
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">123 Workshop Street, Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <Link href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +94 123 456 7890
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <Link href="mailto:info@ecw.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@ecw.com
                </Link>
              </li>
            </motion.ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-primary/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Edirisinghe Cushion Works. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
