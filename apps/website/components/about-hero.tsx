"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-4">
              About Us
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Journey of Excellence</h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1995, Edirisinghe Cushion Works began as a small family business with a passion for
                craftsmanship and an eye for detail. What started as a modest workshop has grown into a leading name in
                vehicle interior customization across Sri Lanka.
              </p>
              <p>
                Our founder, Mr. Edirisinghe, believed that every vehicle deserves an interior that reflects its owner’s
                personality and enhances their driving experience. This philosophy continues to guide our work today, as
                we combine traditional craftsmanship with modern techniques to create interiors that exceed
                expectations.
              </p>
              <p>
                Over the years, we have expanded our services and expertise, but our commitment to quality and customer
                satisfaction remains unchanged. Every project we undertake is approached with the same dedication to
                excellence that has defined our company for over two decades.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-primary/10 shadow-xl">
                <Image
                  src="/placeholder.svg"
                  alt="Edirisinghe Cushion Works Workshop"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
