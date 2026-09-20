import { ModeToggle } from "@/components/mode-toggle"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <Navbar />
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-4">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or ready to start your project? Reach out to our team for expert assistance and guidance.
          </p>
        </div>
      </section>
      <section className="py-12 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
