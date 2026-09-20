"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with a detailed consultation to understand your vision, preferences, and requirements for your vehicle interior.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our design team creates a customized plan, including material selection, color schemes, and technical specifications.",
  },
  {
    number: "03",
    title: "Craftsmanship",
    description:
      "Our skilled craftsmen execute the design with precision, using premium materials and techniques to ensure quality.",
  },
  {
    number: "04",
    title: "Quality Check",
    description:
      "Every project undergoes rigorous quality checks to ensure it meets our high standards before delivery.",
  },
  {
    number: "05",
    title: "Delivery",
    description: "We deliver your transformed vehicle interior, ensuring you're completely satisfied with the results.",
  },
]

export default function ServiceProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Our streamlined process ensures a seamless experience from consultation to delivery.
          </motion.p>
        </div>

        <div className="relative">
          {/* Process Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600/50 via-primary/30 to-blue-600/50 md:transform md:-translate-x-1/2" />

          {/* Process Steps */}
          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`md:grid md:grid-cols-2 md:gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`relative z-10 pl-16 md:pl-0 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="absolute left-0 top-0 md:static flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-blue-600 flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                        <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center text-xs font-bold">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    <div className="md:pr-12">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div className={`hidden md:block ${index % 2 === 0 ? "" : "md:text-right"}`}>
                    <div
                      className={`text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                        index % 2 === 0 ? "from-blue-600 to-red-600" : "from-red-600 to-blue-600"
                      } opacity-20`}
                    >
                      {step.number}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
