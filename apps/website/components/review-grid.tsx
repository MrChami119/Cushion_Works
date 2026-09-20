"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

// Sample reviews data
const reviews = [
  {
    id: 1,
    name: "Michael Johnson",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "March 15, 2023",
    review:
      "Absolutely thrilled with the custom leather seats for my SUV. The craftsmanship is exceptional, and the comfort level has improved dramatically. Worth every penny!",
    vehicle: "Toyota Land Cruiser",
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "February 3, 2023",
    review:
      "I had my vintage car's interior completely restored by ECW, and I couldn't be happier with the results. They matched the original design perfectly while upgrading the materials. Exceptional work!",
    vehicle: "1965 Ford Mustang",
  },
  {
    id: 3,
    name: "David Chen",
    avatar: "/placeholder.svg",
    rating: 4,
    date: "April 20, 2023",
    review:
      "Great service and quality work on my sedan's interior redesign. The team was professional and delivered exactly what I wanted. Only reason for 4 stars is the slight delay in completion.",
    vehicle: "Honda Accord",
  },
  {
    id: 4,
    name: "Priya Patel",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "January 12, 2023",
    review:
      "The dashboard customization for my luxury car is simply stunning. The attention to detail and the quality of materials used exceeded my expectations. Highly recommend their services!",
    vehicle: "Mercedes-Benz S-Class",
  },
  {
    id: 5,
    name: "James Wilson",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "May 5, 2023",
    review:
      "Had my commercial van's interior completely redone for better functionality and comfort. The team understood my business needs perfectly and delivered a practical yet stylish solution.",
    vehicle: "Ford Transit",
  },
  {
    id: 6,
    name: "Emma Rodriguez",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "March 28, 2023",
    review:
      "The alcantara and leather combination for my sports car interior is breathtaking. The craftsmanship is impeccable, and the design is exactly what I envisioned. Thank you, ECW!",
    vehicle: "Porsche 911",
  },
  {
    id: 7,
    name: "Robert Kim",
    avatar: "/placeholder.svg",
    rating: 4,
    date: "April 10, 2023",
    review:
      "Very satisfied with the seat cover replacements for my family car. Durable, easy to clean, and much more comfortable than the originals. Great value for money.",
    vehicle: "Nissan Pathfinder",
  },
  {
    id: 8,
    name: "Lisa Thompson",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "February 22, 2023",
    review:
      "The complete interior overhaul of my classic car has transformed it completely. The team's knowledge of vintage interiors is impressive, and their work is museum quality.",
    vehicle: "1970 Chevrolet Camaro",
  },
]

export default function ReviewsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-12 bg-background/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="h-full bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10 p-6 shadow-lg flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{review.name}</h3>
                    <p className="text-xs text-muted-foreground">{review.vehicle}</p>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">{review.date}</div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm flex-grow mb-4">&ldquo;{review.review}&rdquo;</p>
                <div className="pt-4 border-t border-primary/10 mt-auto">
                  <p className="text-xs text-muted-foreground">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
