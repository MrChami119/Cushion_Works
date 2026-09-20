import { ModeToggle } from "@/components/mode-toggle"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GalleryGrid from "@/components/gallery-grid"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <Navbar />
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-4">
            Our Work
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Gallery of Excellence</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of premium vehicle interior transformations, showcasing our craftsmanship and
            attention to detail.
          </p>
        </div>
      </section>
      <GalleryGrid />
      <Footer />
    </main>
  )
}
