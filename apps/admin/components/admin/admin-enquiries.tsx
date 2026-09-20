"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Search, Trash, CheckCircle } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function AdminEnquiries() {
  interface Message {
    _id: string
    name: string
    email: string
    subject: string
    message: string
    phone?: string
    read: boolean
    createdAt: string
  }

  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/admin/enquiries")

      if (!response.ok) {
        throw new Error("Failed to fetch messages")
      }

      const data = await response.json()
      setMessages(data)
    } catch (error) {
      console.error("Error fetching messages:", error)
    } finally {
      setLoading(false)
    }
  }

  const markAsRead = async (messageId: string) => {
    try {
      const response = await fetch("/api/admin/enquiries", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageId, read: true }),
      })

      if (!response.ok) {
        throw new Error("Failed to update message")
      }

      // Update local state
      setMessages(messages.map((msg) => (msg._id === messageId ? { ...msg, read: true } : msg)))
    } catch (error) {
      console.error("Error updating message:", error)
    }
  }

  const deleteMessage = async (messageId: string) => {
    // In a real application, you would implement this functionality
    console.log("Delete message:", messageId)
  }

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "unread") return !message.read && matchesSearch
    if (activeTab === "read") return message.read && matchesSearch

    return matchesSearch
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString()
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">Manage customer inquiries and messages</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search messages..."
            className="pl-8 border-primary/20 bg-background/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Messages</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="read">Read</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle>
                {activeTab === "all" ? "All Messages" : activeTab === "unread" ? "Unread Messages" : "Read Messages"}
              </CardTitle>
              <CardDescription>
                {filteredMessages.length} {filteredMessages.length === 1 ? "message" : "messages"} found
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-8">Loading messages...</div>
              ) : filteredMessages.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">No messages found</div>
              ) : (
                <div className="space-y-4">
                  {filteredMessages.map((message, index) => (
                    <motion.div
                      key={message._id || index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`p-4 rounded-lg border ${message.read ? "border-primary/10" : "border-primary/30 bg-primary/5"}`}
                    >
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{message.name}</h3>
                          {!message.read && (
                            <Badge variant="default" className="bg-primary text-primary-foreground">
                              New
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">{formatDate(message.createdAt)}</div>
                      </div>
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-2">
                        <div className="text-sm">{message.email}</div>
                        <div className="text-sm font-medium">{message.subject}</div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{message.message}</p>
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/20 bg-background/30"
                          onClick={() => setSelectedMessage(message)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        {!message.read && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary/20 bg-background/30"
                            onClick={() => markAsRead(message._id)}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Mark as Read
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-destructive/20 bg-destructive/10 hover:bg-destructive/20 text-destructive"
                          onClick={() => deleteMessage(message._id)}
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

      {/* Message Detail Dialog */}
      <Dialog
        open={!!selectedMessage}
        onOpenChange={(open) => {
          if (!open) setSelectedMessage(null)
          if (open && selectedMessage && !selectedMessage.read) {
            markAsRead(selectedMessage._id)
          }
        }}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Message Details</DialogTitle>
            <DialogDescription>
              From: {selectedMessage?.name} ({selectedMessage?.email})
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-1">Subject</h3>
              <p>{selectedMessage?.subject}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Message</h3>
              <p className="whitespace-pre-wrap">{selectedMessage?.message}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Contact Information</h3>
              <p>Email: {selectedMessage?.email}</p>
              <p>Phone: {selectedMessage?.phone || "Not provided"}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Received</h3>
              <p>{selectedMessage?.createdAt ? formatDate(selectedMessage.createdAt) : "Unknown"}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
