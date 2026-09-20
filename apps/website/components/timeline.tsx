"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: "1995",
    title: "The Beginning",
    description:
      "Edirisinghe Cushion Works was founded as a small family business specializing in vehicle seat repairs.",
  },
  {
    year: "2000",
    title: "Expansion",
    description: "Expanded services to include full interior customization and opened a larger workshop facility.",
  },
  {
    year: "2008",
    title: "Innovation",
    description:
      "Introduced new materials and techniques, becoming the first in the region to offer premium leather and alcantara upholstery.",
  },
  {
    year: "2015",
    title: "Recognition",
    description:
      "Received national recognition for craftsmanship excellence and contribution to the automotive industry.",
  },
  {
    year: "2020",
    title: "Modern Era",
    description:
      "Embraced digital technology for design and customer service, launching online consultation and booking.",
  },
  {
    year: "Today",
    title: "Leading the Industry",
    description:
      "Continuing to set the standard for vehicle interior excellence with innovative designs and unmatched quality.",
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 bg-background/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-4"
          >
            Our History
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            The Journey Through Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore the key milestones that have shaped our company’s evolution and commitment to excellence.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-600/50 via-primary/30 to-blue-600/50" />

          {/* Timeline Events */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`mb-12 flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } md:flex-row-reverse md:even:flex-row`}
              >
                <div className="w-full md:w-1/2 px-4 md:px-8">
                  <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 shadow-lg">
                    <div className="text-primary font-bold text-xl mb-2">{event.title}</div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-blue-600 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-background" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 md:px-8 text-right md:text-left md:even:text-right">
                  <div className="text-3xl font-bold text-primary/80">{event.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
