"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Comment puis-je réserver un logement ?",
    answer:
      "La réservation est simple et rapide ! Cliquez sur le bouton WhatsApp de votre logement préféré ou contactez-nous directement au +221 70 966 08 06. Notre équipe vous guidera dans le processus de réservation.",
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer:
      "Nous acceptons les paiements en espèces, par virement bancaire, Orange Money et Wave. Un acompte de 50% est demandé pour confirmer la réservation.",
  },
  {
    question: "Les logements sont-ils adaptés aux familles ?",
    answer:
      "Absolument ! Nos appartements sont parfaits pour les familles avec des espaces spacieux, des chambres confortables et des équipements adaptés aux enfants.",
  },
  {
    question: "Y a-t-il un service de ménage ?",
    answer:
      "Un nettoyage complet est effectué avant chaque arrivée. Pour les séjours prolongés, un service de ménage peut être organisé sur demande.",
  },
  {
    question: "Quelle est la politique d'annulation ?",
    answer:
      "Les annulations effectuées 48 heures avant l'arrivée sont remboursées à 100%. Pour les annulations tardives, 50% de l'acompte sera retenu.",
  },
  {
    question: "Les animaux de compagnie sont-ils acceptés ?",
    answer:
      "Pour le confort de tous nos hôtes, les animaux de compagnie ne sont pas acceptés dans nos logements.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4A373] font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Questions <span className="text-[#D4A373]">fréquentes</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[#D4A373]" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-white/70 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
