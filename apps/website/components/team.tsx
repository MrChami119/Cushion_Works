"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "John Edirisinghe",
    role: "Founder & CEO",
    image: "/placeholder.svg",
    bio: "With over 30 years of experience in vehicle interior craftsmanship, John leads our team with passion and vision.",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sarah Williams",
    role: "Design Director",
    image: "/placeholder.svg",
    bio: "Sarah brings 15 years of automotive design expertise, creating innovative and ergonomic interior solutions.",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Master Craftsman",
    image: "/placeholder.svg",
    bio: "Michael's attention to detail and precision craftsmanship has been the backbone of our quality for over a decade.",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Priya Sharma",
    role: "Customer Relations",
    image: "/placeholder.svg",
    bio: "Priya ensures every client receives personalized attention and their vision is perfectly translated into reality.",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
]

export default function Team() {
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
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Meet the Experts Behind Our Craft
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Our team combines decades of experience with innovative thinking to deliver exceptional results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <Link
                      href={member.social.facebook}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href={member.social.instagram}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
