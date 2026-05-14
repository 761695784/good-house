"use client"

import { motion } from "framer-motion"
import { ArrowDown, Award } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.56.32%20%284%29-k8TNcyv77Mp1ikV9qxB2uhBIbBsnQG.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/60 to-[#0F172A]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#D4A373]/20 backdrop-blur-sm border border-[#D4A373]/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8"
        >
          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A373]" />
          <span className="text-[#D4A373] font-medium text-xs sm:text-sm">
            Disponible à Ngor Almadies
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          <span className="text-[#D4A373]">Residence</span>{" "}
          <span className="text-white">Good House</span>
        </motion.h1>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed text-balance px-2"
        >
          Votre confort{" "}
          <span className="text-[#D4A373] font-semibold">premium</span> pour un  <span className="text-[#D4A373] font-bold">séjour inoubliable</span> {" "}
          à Dakar
          
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="https://wa.me/221709660806?text=Bonjour,%20je%20souhaite%20reserver%20un%20logement%20chez%20Residence%20Good%20House"
            target="_blank"
            className="group flex items-center gap-2 bg-[#D4A373] text-[#0F172A] px-5 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-[#C4935F] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#D4A373]/25"
          >
            Reserver maintenant
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              &rarr;
            </motion.span>
          </Link>
          <Link
            href="#logements"
            className="flex items-center gap-2 border-2 border-white/30 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white/10 transition-all duration-300"
          >
            Voir les logements
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: "3", label: "Types de logements" },
            { number: "24/7", label: "Disponibilite" },
            { number: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#D4A373] mb-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs sm:text-sm">Decouvrir</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
