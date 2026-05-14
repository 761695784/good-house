"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, ArrowUp } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-[#0F172A] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1E293B] transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <Link
          href="https://wa.me/221709660806?text=Bonjour,%20je%20souhaite%20réserver%20un%20logement%20chez%20Résidence%20Good%20House"
          target="_blank"
          className="group relative flex items-center"
        >
          {/* Tooltip */}
          <span className="absolute right-16 bg-white text-[#0F172A] px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Contactez-nous sur WhatsApp
          </span>
          
          {/* Button */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:bg-[#1da851] transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}
