import { ModeToggle } from "@/components/mode-toggle"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicesHero from "@/components/services-hero"
import ServicesList from "@/components/services-list"
import ServiceProcess from "@/components/service-process"
import ServiceCTA from "@/components/service-cta"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <ServiceCTA />
      <Footer />
    </main>
  )
}
