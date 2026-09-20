import { ModeToggle } from "@/components/mode-toggle"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ReviewsGrid from "@/components/review-grid"
import ReviewForm from "@/components/review-form"

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <Navbar />
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-4">
            Testimonials
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with Edirisinghe Cushion Works.
          </p>
        </div>
      </section>
      <ReviewsGrid />
      <ReviewForm />
      <Footer />
    </main>
  )
}
