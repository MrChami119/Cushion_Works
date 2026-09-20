import { ModeToggle } from "@/components/mode-toggle"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Services from "@/components/services"
import AboutSection from "@/components/about-section"
import ContactCTA from "@/components/contact-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <ContactCTA />
      <Footer />
    </main>
  )
}
