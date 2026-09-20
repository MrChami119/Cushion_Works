import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Services from "@/components/services"
import AboutSection from "@/components/about-section"
import ContactCTA from "@/components/contact-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <ContactCTA />
      <Footer />
    </main>
  )
}
