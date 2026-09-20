import { z } from "zod"

export const enquirySchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().email(),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(2),
  message: z.string().trim().min(10),
})

export const appointmentSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().email(),
  phone: z.string().trim().min(7),
  vehicle: z.string().trim().min(2),
  service: z.string().trim().min(2),
  date: z.string().min(1),
  time: z.string().min(1),
  message: z.string().trim().optional(),
})

export const reviewSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().email(),
  vehicle: z.string().trim().min(2),
  rating: z.number().int().min(1).max(5),
  review: z.string().trim().min(10),
})
