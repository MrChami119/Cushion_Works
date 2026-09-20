"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Car, Sofa, Palette, Settings, Truck, Gauge, Shield, Sparkles } from "lucide-react"

const services = [
  {
    icon: <Car className="h-10 w-10 text-red-600" />,
    title: "Custom Seat Covers",
    description: "Premium materials tailored to fit your vehicle perfectly, enhancing comfort and aesthetics.",
    image: "/placeholder.svg",
    link: "/services/seat-covers",
  },
  {
    icon: <Sofa className="h-10 w-10 text-blue-600" />,
    title: "Interior Redesign",
    description: "Complete transformation of your vehicle's interior with custom upholstery and modern designs.",
    image: "/placeholder.svg",
    link: "/services/interior-redesign",
  },
  {
    icon: <Palette className="h-10 w-10 text-red-600" />,
    title: "Material Upgrades",
    description: "Upgrade to premium leather, alcantara, or specialized materials for a luxury feel.",
    image: "/placeholder.svg",
    link: "/services/material-upgrades",
  },
  {
    icon: <Settings className="h-10 w-10 text-blue-600" />,
    title: "Restoration Services",
    description: "Bring back the original glory of vintage vehicle interiors with our expert restoration.",
    image: "/placeholder.svg",
    link: "/services/restoration",
  },
  {
    icon: <Truck className="h-10 w-10 text-red-600" />,
    title: "Commercial Vehicle Solutions",
    description: "Specialized interiors for commercial vehicles, focusing on durability and functionality.",
    image: "/placeholder.svg",
    link: "/services/commercial",
  },
  {
    icon: <Gauge className="h-10 w-10 text-blue-600" />,
    title: "Dashboard Customization",
    description: "Custom dashboard covers and upgrades to enhance your vehicle's control center.",
    image: "/placeholder.svg",
    link: "/services/dashboard",
  },
  {
    icon: <Shield className="h-10 w-10 text-red-600" />,
    title: "Protective Treatments",
    description: "Specialized coatings and treatments to protect your interior from wear and damage.",
    image: "/placeholder.svg",
    link: "/services/protective",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-blue-600" />,
    title: "Detailing & Cleaning",
    description: "Professional deep cleaning and detailing to restore and maintain your vehicle's interior.",
    image: "/placeholder.svg",
    link: "/services/detailing",
  },
]

export default function ServicesList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-background/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group border border-primary/10 rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-4 left-4 p-2 rounded-full bg-background/70 backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link href={service.link}>
                    <Button variant="ghost" className="group-hover:bg-primary/10 transition-colors">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
