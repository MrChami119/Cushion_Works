"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Star, CheckCircle2 } from "lucide-react"

export default function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-4">
              Share Your Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leave a Review</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your feedback helps us improve our services and assists other customers in making informed decisions.
            </p>
          </div>

          <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10 p-6 md:p-8 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Thank You for Your Review!</h3>
                <p className="text-muted-foreground mb-6">
                  We appreciate you taking the time to share your experience with us. Your feedback is invaluable.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-primary/20 backdrop-blur-sm bg-background/30 hover:bg-background/50"
                >
                  Write Another Review
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required className="border-primary/20 bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="border-primary/20 bg-background/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicle">Vehicle Details</Label>
                  <Input
                    id="vehicle"
                    placeholder="e.g., Toyota Camry 2020"
                    required
                    className="border-primary/20 bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Your Rating</Label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="focus:outline-none"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                      >
                        <Star
                          className={`h-8 w-8 ${
                            star <= (hoveredRating || rating) ? "fill-primary text-primary" : "text-muted-foreground"
                          } transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="review">Your Review</Label>
                  <Textarea
                    id="review"
                    placeholder="Share your experience with our services..."
                    required
                    className="min-h-[150px] border-primary/20 bg-background/50"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || rating === 0}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
