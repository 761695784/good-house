"use client"

import { motion } from "framer-motion"

export function MapSection() {
  return (
    <section className="py-20 bg-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#D4A373] font-semibold text-sm uppercase tracking-wider mb-4">
            Localisation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 text-balance">
            Trouvez-nous à <span className="text-[#D4A373]">Ngor Almadies</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Idéalement situé à Ngor Almadies/Dakar, proche de la ville et de la plage
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://maps.google.com/maps?width=100%25&height=450&hl=fr&q=Ngor,%20Almadies%20Dakar,%2010700&t=&z=15&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  )
}