"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Car, Sofa, Palette, Settings } from "lucide-react"

import { fadeUpVariants, staggerContainerVariants } from "@/lib/motion"

const services = [
  {
    icon: <Car className="h-10 w-10 text-red-600" />,
    title: "Custom Seat Covers",
    description: "Premium materials tailored to fit your vehicle perfectly, enhancing comfort and aesthetics.",
    link: "/services/seat-covers",
  },
  {
    icon: <Sofa className="h-10 w-10 text-blue-600" />,
    title: "Interior Redesign",
    description: "Complete transformation of your vehicle's interior with custom upholstery and modern designs.",
    link: "/services/interior-redesign",
  },
  {
    icon: <Palette className="h-10 w-10 text-red-600" />,
    title: "Material Upgrades",
    description: "Upgrade to premium leather, alcantara, or specialized materials for a luxury feel.",
    link: "/services/material-upgrades",
  },
  {
    icon: <Settings className="h-10 w-10 text-blue-600" />,
    title: "Restoration Services",
    description: "Bring back the original glory of vintage vehicle interiors with our expert restoration.",
    link: "/services/restoration",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 bg-background/50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Premium Vehicle Interior Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Discover our range of specialized services designed to transform your vehicle’s interior into a personalized
            masterpiece.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeUpVariants}>
              <Card className="h-full border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-md hover:shadow-primary/5 transition-all duration-300 overflow-hidden group">
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={service.link} className="w-full">
                    <Button
                      variant="ghost"
                      className="w-full justify-between group-hover:bg-primary/10 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            >
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
