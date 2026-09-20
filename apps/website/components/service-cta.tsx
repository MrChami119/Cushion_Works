"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServiceCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-4">
            Start Your Project
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Vehicle’s Interior?</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your project or book an appointment for a consultation. Our team is ready to
            bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/appointment">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
              >
                Book Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 backdrop-blur-sm bg-background/30 hover:bg-background/50"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
