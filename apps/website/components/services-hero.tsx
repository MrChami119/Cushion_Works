"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ServicesHero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-4"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Premium Vehicle Interior Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground mb-8"
          >
            Discover our comprehensive range of services designed to transform your vehicle’s interior into a
            personalized masterpiece that reflects your style and enhances your driving experience.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
          <Image
            src="/placeholder.svg"
            alt="Our Services"
            width={1200}
            height={500}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
