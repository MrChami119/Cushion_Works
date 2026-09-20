"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "How long does a typical interior customization take?",
    answer:
      "The timeframe varies depending on the complexity of the project. Simple seat covers may take 2-3 days, while complete interior redesigns can take 1-2 weeks. We'll provide you with a specific timeline during your consultation.",
  },
  {
    question: "What materials do you use for your upholstery?",
    answer:
      "We offer a wide range of premium materials including genuine leather, synthetic leather, alcantara, suede, fabric, and specialized materials for specific needs like water-resistant or stain-resistant options. All our materials are sourced from trusted suppliers to ensure quality and durability.",
  },
  {
    question: "Can you match the original interior design of my vehicle?",
    answer:
      "Yes, our skilled craftsmen can match the original design of your vehicle's interior. We can also create custom patterns and designs based on your preferences while maintaining the original functionality and aesthetic.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Yes, we provide a 1-year warranty on craftsmanship and materials for all our services. This covers any defects in workmanship or material failure under normal use conditions. Extended warranties are also available for an additional fee.",
  },
  {
    question: "How do I care for and maintain my new interior?",
    answer:
      "We provide detailed care instructions specific to the materials used in your interior. Generally, regular cleaning with appropriate products, avoiding harsh chemicals, and protecting from prolonged sun exposure will help maintain the quality and appearance of your interior.",
  },
  {
    question: "Can you work on vintage or classic vehicles?",
    answer:
      "We specialize in both modern and vintage vehicle interiors. Our team has extensive experience in restoring and customizing classic car interiors while preserving their authentic character and increasing their value.",
  },
  {
    question: "Do I need to make an appointment for a consultation?",
    answer:
      "Yes, we recommend scheduling an appointment for a consultation to ensure that you receive our full attention and expertise. You can book an appointment through our website, by phone, or by email.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit/debit cards, bank transfers, and mobile payment options. For larger projects, we offer installment payment plans. A deposit is typically required to begin work, with the balance due upon completion.",
  },
  {
    question: "Can you customize commercial vehicle interiors?",
    answer:
      "Yes, we offer specialized services for commercial vehicles including taxis, buses, vans, and fleet vehicles. Our commercial solutions focus on durability, functionality, and brand consistency while maintaining comfort.",
  },
  {
    question: "Do you offer mobile services or do I need to bring my vehicle to your workshop?",
    answer:
      "Most of our services are performed at our workshop to ensure the highest quality results. However, we do offer limited mobile services for minor repairs or consultations. Contact us to discuss your specific needs.",
  },
]

export default function FAQAccordion() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-12 bg-background/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10 p-6 md:p-8 shadow-lg"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`} className="border-primary/10">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
