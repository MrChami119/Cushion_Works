import { ModeToggle } from "@/components/mode-toggle"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FAQAccordion from "@/components/faq-accordion"
import FAQContact from "@/components/faq-contact"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <Navbar />
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-4">
            Help Center
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and policies.
          </p>
        </div>
      </section>
      <FAQAccordion />
      <FAQContact />
      <Footer />
    </main>
  )
}
