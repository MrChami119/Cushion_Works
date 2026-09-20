"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-primary/10 shadow-xl">
              <Image
                src="/placeholder.svg"
                alt="Edirisinghe Cushion Works"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 backdrop-blur-sm bg-background/30 rounded-lg border border-primary/10">
                <p className="text-sm font-medium">Crafting premium interiors since 1995</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.span
                variants={itemVariants}
                className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-4"
              >
                About Us
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
                Redefining Vehicle Interior Excellence
              </motion.h2>
              <motion.p variants={itemVariants} className="text-muted-foreground mb-6">
                Edirisinghe Cushion Works has been at the forefront of vehicle interior customization for over two
                decades. Our journey began with a simple mission: to transform ordinary vehicle interiors into
                extraordinary experiences.
              </motion.p>
              <motion.p variants={itemVariants} className="text-muted-foreground mb-6">
                Today, we are proud to be the preferred choice for discerning vehicle owners who demand nothing but the
                best. Our team of skilled craftsmen combines traditional techniques with cutting-edge technology to
                deliver interiors that exceed expectations.
              </motion.p>
            </div>

            <motion.div variants={itemVariants}>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-primary/20 backdrop-blur-sm bg-background/30 hover:bg-background/50"
                >
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
