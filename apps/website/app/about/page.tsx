import { ModeToggle } from "@/components/mode-toggle"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import Timeline from "@/components/timeline"
import Team from "@/components/team"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <Navbar />
      <AboutHero />
      <Timeline />
      <Team />
      <Footer />
    </main>
  )
}