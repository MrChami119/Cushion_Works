"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { LayoutDashboard, MessageSquare, Calendar, ImageIcon, Star, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    href: "/",
  },
  {
    title: "Enquiries",
    icon: <MessageSquare className="h-5 w-5" />,
    href: "/enquiries",
  },
  {
    title: "Appointments",
    icon: <Calendar className="h-5 w-5" />,
    href: "/appointments",
  },
  {
    title: "Gallery",
    icon: <ImageIcon className="h-5 w-5" />,
    href: "/gallery",
  },
  {
    title: "Reviews",
    icon: <Star className="h-5 w-5" />,
    href: "/reviews",
  },
  {
    title: "Settings",
    icon: <Settings className="h-5 w-5" />,
    href: "/settings",
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/login")
    router.refresh()
  }

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 left-0 z-40 w-64 bg-background border-r border-primary/10 md:relative md:translate-x-0"
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-primary/10">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600">
                ECW Admin
              </div>
            </Link>
          </div>
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-primary/5 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </div>
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-primary/10">
            <Button
              type="button"
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start px-3 text-muted-foreground hover:bg-primary/5 hover:text-foreground"
            >
              <LogOut className="h-5 w-5" />
              <span className="ml-3">Logout</span>
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
