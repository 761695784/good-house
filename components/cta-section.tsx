"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F172A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-[#D4A373]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 sm:w-48 h-24 sm:h-48 bg-[#D4A373]/10 rounded-full blur-3xl" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#D4A373]/20 border border-[#D4A373]/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8"
          >
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-[#25D366]" />
            </span>
            <span className="text-[#D4A373] font-medium text-xs sm:text-sm">
              Disponible maintenant
            </span>
          </motion.div>

          {/* Content */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance relative"
          >
            Reservez votre logement{" "}
            <span className="text-[#D4A373]">des maintenant</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 relative px-2"
          >
            Ne manquez pas l&apos;occasion de sejourner dans l&apos;un de nos
            appartements premium pendant les COJOJ Dakar. Contactez-nous via
            WhatsApp pour une reponse rapide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 relative"
          >
            <Link
              href="https://wa.me/221709660806?text=Bonjour,%20je%20souhaite%20reserver%20un%20logement%20chez%20Residence%20Good%20House"
              target="_blank"
              className="group flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-[#1da851] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#25D366]/25"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Contacter via WhatsApp
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="tel:+221709660806"
              className="flex items-center gap-2 border-2 border-white/30 text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              +221 70 966 08 06
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
