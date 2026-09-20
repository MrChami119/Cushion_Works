"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-8"
    >
      <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10 p-6 md:p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Our Location</h3>
              <p className="text-muted-foreground">123 Workshop Street, Colombo, Sri Lanka</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Phone Number</h3>
              <p className="text-muted-foreground">
                <Link href="tel:+94123456789" className="hover:text-primary transition-colors">
                  +94 123 456 789
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Email Address</h3>
              <p className="text-muted-foreground">
                <Link href="mailto:info@ecw.com" className="hover:text-primary transition-colors">
                  info@ecw.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 2:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10 p-6 md:p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
        <div className="flex space-x-4">
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
          >
            <Facebook className="h-5 w-5 text-primary" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
          >
            <Instagram className="h-5 w-5 text-primary" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
          >
            <Twitter className="h-5 w-5 text-primary" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
          >
            <Youtube className="h-5 w-5 text-primary" />
          </Link>
        </div>
      </div>

      <div className="relative h-[300px] rounded-xl overflow-hidden border border-primary/10 shadow-lg">
        <Image src="/placeholder.svg" alt="Map" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-4 bg-background/80 backdrop-blur-md rounded-lg border border-primary/10">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="font-medium text-center">Our Workshop</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
