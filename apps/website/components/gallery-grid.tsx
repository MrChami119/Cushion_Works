"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample gallery items
const galleryItems = [
  {
    id: 1,
    title: "Luxury Sedan Interior",
    category: "Seat Covers",
    image: "/placeholder.svg",
    description: "Custom leather seat covers with diamond stitching for a luxury sedan.",
  },
  {
    id: 2,
    title: "Vintage Car Restoration",
    category: "Restoration",
    image: "/placeholder.svg",
    description: "Complete interior restoration of a classic vintage car.",
  },
  {
    id: 3,
    title: "SUV Premium Upgrade",
    category: "Material Upgrades",
    image: "/placeholder.svg",
    description: "Premium leather and alcantara upgrade for an SUV interior.",
  },
  {
    id: 4,
    title: "Sports Car Custom Design",
    category: "Interior Redesign",
    image: "/placeholder.svg",
    description: "Custom racing-inspired interior redesign for a sports car.",
  },
  {
    id: 5,
    title: "Commercial Van Customization",
    category: "Commercial",
    image: "/placeholder.svg",
    description: "Durable and functional interior customization for a commercial van.",
  },
  {
    id: 6,
    title: "Luxury Dashboard Upgrade",
    category: "Dashboard",
    image: "/placeholder.svg",
    description: "Premium dashboard cover with custom stitching and accents.",
  },
  {
    id: 7,
    title: "Family SUV Makeover",
    category: "Seat Covers",
    image: "/placeholder.svg",
    description: "Stain-resistant and durable seat covers for a family SUV.",
  },
  {
    id: 8,
    title: "Executive Car Interior",
    category: "Material Upgrades",
    image: "/placeholder.svg",
    description: "Executive-level interior upgrade with premium materials.",
  },
  {
    id: 9,
    title: "Pickup Truck Customization",
    category: "Interior Redesign",
    image: "/placeholder.svg",
    description: "Custom interior redesign for a pickup truck with enhanced durability.",
  },
  {
    id: 10,
    title: "Classic Car Preservation",
    category: "Protective",
    image: "/placeholder.svg",
    description: "Protective treatments for a classic car interior to preserve its condition.",
  },
  {
    id: 11,
    title: "Motorcycle Seat Customization",
    category: "Seat Covers",
    image: "/placeholder.svg",
    description: "Custom motorcycle seat with premium materials and stitching.",
  },
  {
    id: 12,
    title: "Luxury RV Interior",
    category: "Interior Redesign",
    image: "/placeholder.svg",
    description: "Complete interior redesign for a luxury recreational vehicle.",
  },
]

// Categories for filtering
const categories = [
  "All",
  "Seat Covers",
  "Interior Redesign",
  "Material Upgrades",
  "Restoration",
  "Commercial",
  "Dashboard",
  "Protective",
]

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<{
    id: number
    title: string
    category: string
    image: string
    description: string
  } | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section className="py-12 bg-background/50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 overflow-x-auto pb-4"
        >
          <div className="flex space-x-2 min-w-max">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`
                  ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
                      : "border-primary/20 backdrop-blur-sm bg-background/30 hover:bg-background/50"
                  }
                `}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for selected item */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-background rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-background/50 backdrop-blur-sm"
                  onClick={() => setSelectedItem(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-square">
                    <Image
                      src={selectedItem.image || "/placeholder.svg"}
                      alt={selectedItem.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className="inline-block px-2 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-2 w-fit">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{selectedItem.title}</h3>
                    <p className="text-muted-foreground mb-6">{selectedItem.description}</p>
                    <Button
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white w-full md:w-auto"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Inquire About This Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
