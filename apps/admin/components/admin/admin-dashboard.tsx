"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Calendar, ImageIcon, Star, TrendingUp, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Admin</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-primary/20 bg-background/30">
            <Clock className="mr-2 h-4 w-4" />
            Last updated: {new Date().toLocaleTimeString()}
          </Button>
          <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">
            <TrendingUp className="mr-2 h-4 w-4" />
            View Reports
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Card className="border-primary/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">New Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">12</div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">+3 since yesterday</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="border-primary/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">8</div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">+2 since yesterday</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="border-primary/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Gallery Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">36</div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <ImageIcon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">+5 this week</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="border-primary/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">24</div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <Star className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">+3 this week</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>Latest customer inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 pb-4 border-b border-primary/10 last:border-0 last:pb-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">John Doe</h4>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        I’m interested in getting custom seat covers for my SUV. Can you provide more information?
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/enquiries">
                  <Button variant="outline" className="w-full border-primary/20 bg-background/30">
                    View All Messages
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Scheduled consultations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 pb-4 border-b border-primary/10 last:border-0 last:pb-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">Sarah Williams</h4>
                        <span className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        Consultation for interior redesign of Mercedes-Benz C-Class
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/appointments">
                  <Button variant="outline" className="w-full border-primary/20 bg-background/30">
                    View All Appointments
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
