export type AppointmentStatus = "pending" | "confirmed" | "completed" | "cancelled"

export interface Appointment {
  _id: string
  name: string
  email: string
  phone?: string
  vehicle: string
  service: string
  date: string
  time: string
  message?: string
  status: AppointmentStatus
  createdAt: string
}

export interface Enquiry {
  _id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  read: boolean
  createdAt: string
}

export interface Review {
  _id: string
  name: string
  vehicle: string
  rating: number
  review: string
  approved: boolean
  createdAt: string
}

export interface GalleryItem {
  _id: string
  title: string
  category: string
  description?: string
  imageUrl: string
  createdAt: string
}
