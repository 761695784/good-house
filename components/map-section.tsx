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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.5584231744!2d-17.518159!3d14.753889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10a9c9c7a4c51%3A0x8f87f9b84e7b1234!2sNgor%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1703000000000!5m2!1sfr!2sfr"
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
