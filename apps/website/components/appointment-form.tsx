"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AppointmentForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10 p-6 md:p-8 shadow-lg"
    >
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
          <h3 className="text-2xl font-bold mb-2">Appointment Requested!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for scheduling an appointment with us. We’ll confirm your appointment shortly via email or phone.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-primary/20 backdrop-blur-sm bg-background/30 hover:bg-background/50"
          >
            Book Another Appointment
          </Button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-6">Book Your Appointment</h2>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  required
                  className="border-primary/20 bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vehicle">Vehicle Type</Label>
                <Input
                  id="vehicle"
                  placeholder="e.g., Toyota Camry 2020"
                  required
                  className="border-primary/20 bg-background/50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Service Type</Label>
              <RadioGroup defaultValue="seat-covers" className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Label
                  htmlFor="seat-covers"
                  className="flex items-center space-x-2 cursor-pointer rounded-md border border-primary/20 p-3 hover:bg-primary/5 [&:has(:checked)]:bg-primary/10"
                >
                  <RadioGroupItem id="seat-covers" value="seat-covers" />
                  <span>Custom Seat Covers</span>
                </Label>
                <Label
                  htmlFor="interior-redesign"
                  className="flex items-center space-x-2 cursor-pointer rounded-md border border-primary/20 p-3 hover:bg-primary/5 [&:has(:checked)]:bg-primary/10"
                >
                  <RadioGroupItem id="interior-redesign" value="interior-redesign" />
                  <span>Interior Redesign</span>
                </Label>
                <Label
                  htmlFor="material-upgrades"
                  className="flex items-center space-x-2 cursor-pointer rounded-md border border-primary/20 p-3 hover:bg-primary/5 [&:has(:checked)]:bg-primary/10"
                >
                  <RadioGroupItem id="material-upgrades" value="material-upgrades" />
                  <span>Material Upgrades</span>
                </Label>
                <Label
                  htmlFor="restoration"
                  className="flex items-center space-x-2 cursor-pointer rounded-md border border-primary/20 p-3 hover:bg-primary/5 [&:has(:checked)]:bg-primary/10"
                >
                  <RadioGroupItem id="restoration" value="restoration" />
                  <span>Restoration Services</span>
                </Label>
                <Label
                  htmlFor="other"
                  className="flex items-center space-x-2 cursor-pointer rounded-md border border-primary/20 p-3 hover:bg-primary/5 [&:has(:checked)]:bg-primary/10"
                >
                  <RadioGroupItem id="other" value="other" />
                  <span>Other Services</span>
                </Label>
              </RadioGroup>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal border-primary/20 bg-background/50",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Select>
                  <SelectTrigger className="border-primary/20 bg-background/50">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                    <SelectItem value="17:00">5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                placeholder="Tell us more about your requirements or any specific details about your vehicle..."
                className="min-h-[100px] border-primary/20 bg-background/50"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
            >
              {isSubmitting ? "Submitting..." : "Book Appointment"}
            </Button>
          </form>
        </>
      )}
    </motion.div>
  )
}
