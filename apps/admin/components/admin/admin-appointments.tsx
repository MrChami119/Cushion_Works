"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Calendar, CheckCircle, Eye, Search, Trash, X } from "lucide-react"
import { JSX } from "react/jsx-runtime"

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const [activeTab, setActiveTab] = useState("all")
  const [statusUpdateLoading, setStatusUpdateLoading] = useState(false)

  useEffect(() => {
    fetchAppointments()
  }, [])

  const fetchAppointments = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/admin/appointments")

      if (!response.ok) {
        throw new Error("Failed to fetch appointments")
      }

      const data = await response.json()
      setAppointments(data)
    } catch (error) {
      console.error("Error fetching appointments:", error)
    } finally {
      setLoading(false)
    }
  }

  interface Appointment {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    vehicle?: string;
    serviceType?: string;
    message?: string;
    date: string;
    time: string;
    status: string;
    createdAt: string;
  }

  const updateAppointmentStatus = async (appointmentId: string, status: string): Promise<void> => {
    try {
      setStatusUpdateLoading(true)
      const response = await fetch("/api/admin/appointments", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ appointmentId, status }),
      })

      if (!response.ok) {
        throw new Error("Failed to update appointment")
      }

      // Update local state
      setAppointments(appointments.map((apt: Appointment) => (apt._id === appointmentId ? { ...apt, status } : apt)))

      if (selectedAppointment && selectedAppointment._id === appointmentId) {
        setSelectedAppointment({ ...selectedAppointment, status })
      }
    } catch (error) {
      console.error("Error updating appointment:", error)
    } finally {
      setStatusUpdateLoading(false)
    }
  }

  interface DeleteAppointmentParams {
    appointmentId: string;
  }

  const deleteAppointment = async ({ appointmentId }: DeleteAppointmentParams): Promise<void> => {
    // In a real application, you would implement this functionality
    console.log("Delete appointment:", appointmentId);
  }

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.vehicle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (appointment.message && appointment.message.toLowerCase().includes(searchTerm.toLowerCase()))

    if (activeTab === "all") return matchesSearch
    if (activeTab === "pending") return appointment.status === "pending" && matchesSearch
    if (activeTab === "confirmed") return appointment.status === "confirmed" && matchesSearch
    if (activeTab === "completed") return appointment.status === "completed" && matchesSearch
    if (activeTab === "cancelled") return appointment.status === "cancelled" && matchesSearch

    return matchesSearch
  })

  interface FormatDateParams {
    dateString: string | null | undefined;
  }

  const formatDate = (dateString: FormatDateParams["dateString"]): string => {
    if (!dateString) return "N/A"
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString()
  }

  interface StatusBadgeProps {
    status: "pending" | "confirmed" | "completed" | "cancelled" | string;
  }

  const getStatusBadge = (status: StatusBadgeProps["status"]): JSX.Element => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
            Pending
          </Badge>
        )
      case "confirmed":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Confirmed
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-500">
            Completed
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            Cancelled
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Appointments</h1>
          <p className="text-muted-foreground">Manage customer appointments and consultations</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search appointments..."
            className="pl-8 border-primary/20 bg-background/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle>
                {activeTab === "all"
                  ? "All Appointments"
                  : activeTab === "pending"
                    ? "Pending Appointments"
                    : activeTab === "confirmed"
                      ? "Confirmed Appointments"
                      : activeTab === "completed"
                        ? "Completed Appointments"
                        : "Cancelled Appointments"}
              </CardTitle>
              <CardDescription>
                {filteredAppointments.length} {filteredAppointments.length === 1 ? "appointment" : "appointments"} found
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-8">Loading appointments...</div>
              ) : filteredAppointments.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">No appointments found</div>
              ) : (
                <div className="space-y-4">
                  {filteredAppointments.map((appointment, index) => (
                    <motion.div
                      key={appointment._id || index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="p-4 rounded-lg border border-primary/10 bg-background/50"
                    >
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{appointment.name}</h3>
                          {getStatusBadge(appointment.status)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="inline-flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(appointment.date)} {appointment.time}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-2">
                        <div className="text-sm">{appointment.email}</div>
                        <div className="text-sm font-medium">{appointment.vehicle}</div>
                      </div>
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-3">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Service:</span> {appointment.serviceType}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Booked:</span> {formatDate(appointment.createdAt)}
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/20 bg-background/30"
                          onClick={() => setSelectedAppointment(appointment)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        {appointment.status === "pending" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-green-500/20 bg-green-500/10 hover:bg-green-500/20 text-green-500"
                            onClick={() => updateAppointmentStatus(appointment._id, "confirmed")}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Confirm
                          </Button>
                        )}
                        {appointment.status === "confirmed" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-blue-500/20 bg-blue-500/10 hover:bg-blue-500/20 text-blue-500"
                            onClick={() => updateAppointmentStatus(appointment._id, "completed")}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Mark Completed
                          </Button>
                        )}
                        {(appointment.status === "pending" || appointment.status === "confirmed") && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-red-500/20 bg-red-500/10 hover:bg-red-500/20 text-red-500"
                            onClick={() => updateAppointmentStatus(appointment._id, "cancelled")}
                          >
                            <X className="h-4 w-4 mr-1" />
                            Cancel
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-destructive/20 bg-destructive/10 hover:bg-destructive/20 text-destructive"
                          onClick={() => deleteAppointment({ appointmentId: appointment._id })}
                        >
                          <Trash className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Appointment Detail Dialog */}
      <Dialog
        open={!!selectedAppointment}
        onOpenChange={(open) => {
          if (!open) setSelectedAppointment(null)
        }}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Appointment Details</DialogTitle>
            <DialogDescription>
              Appointment for {selectedAppointment?.name} on {selectedAppointment?.date} at {selectedAppointment?.time}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1 text-muted-foreground">Customer Information</h3>
                <p className="font-medium">{selectedAppointment?.name}</p>
                <p>{selectedAppointment?.email}</p>
                <p>{selectedAppointment?.phone}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1 text-muted-foreground">Appointment Details</h3>
                <p>
                  <span className="font-medium">Date:</span> {selectedAppointment?.date}
                </p>
                <p>
                  <span className="font-medium">Time:</span> {selectedAppointment?.time}
                </p>
                <p>
                  <span className="font-medium">Status:</span>{" "}
                  {selectedAppointment?.status && getStatusBadge(selectedAppointment.status)}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1 text-muted-foreground">Vehicle Information</h3>
              <p>{selectedAppointment?.vehicle}</p>
              <p>
                <span className="font-medium">Service Type:</span> {selectedAppointment?.serviceType}
              </p>
            </div>
            {selectedAppointment?.message && (
              <div>
                <h3 className="text-sm font-medium mb-1 text-muted-foreground">Additional Information</h3>
                <p className="whitespace-pre-wrap">{selectedAppointment.message}</p>
              </div>
            )}
            <div>
              <h3 className="text-sm font-medium mb-1 text-muted-foreground">Booking Information</h3>
              <p>
                <span className="font-medium">Created:</span>{" "}
                {selectedAppointment?.createdAt && formatDate(selectedAppointment.createdAt)}
              </p>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
            {selectedAppointment?.status === "pending" && (
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => updateAppointmentStatus(selectedAppointment._id, "confirmed")}
                disabled={statusUpdateLoading}
              >
                Confirm Appointment
              </Button>
            )}
            {selectedAppointment?.status === "confirmed" && (
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => updateAppointmentStatus(selectedAppointment._id, "completed")}
                disabled={statusUpdateLoading}
              >
                Mark as Completed
              </Button>
            )}
            {(selectedAppointment?.status === "pending" || selectedAppointment?.status === "confirmed") && (
              <Button
                variant="destructive"
                onClick={() => updateAppointmentStatus(selectedAppointment._id, "cancelled")}
                disabled={statusUpdateLoading}
              >
                Cancel Appointment
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
