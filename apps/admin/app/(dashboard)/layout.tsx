import type React from "react"
import { ModeToggle } from "@/components/mode-toggle"
import AdminSidebar from "@/components/admin/admin-sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <div className="fixed top-4 right-4 z-50">
          <ModeToggle />
        </div>
        <main className="flex-1 p-4 pt-16 md:p-6 md:pt-16">{children}</main>
      </div>
    </div>
  )
}
