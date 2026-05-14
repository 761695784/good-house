"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "Logements", href: "#logements" },
  { name: "Galerie", href: "#galerie" },
  { name: "Avantages", href: "#avantages" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0F172A]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#accueil" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#D4A373]">
              Résidence Good House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-[#D4A373] transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/221709660806?text=Bonjour,%20je%20souhaite%20réserver%20un%20logement%20chez%20Résidence%20Good%20House"
              target="_blank"
              className="flex items-center gap-2 bg-[#D4A373] text-[#0F172A] px-5 py-2.5 rounded-full font-semibold hover:bg-[#C4935F] transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Réserver
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F172A]/95 backdrop-blur-md"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/90 hover:text-[#D4A373] transition-colors duration-300 text-lg font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://wa.me/221709660806?text=Bonjour,%20je%20souhaite%20réserver%20un%20logement%20chez%20Résidence%20Good%20House"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-[#D4A373] text-[#0F172A] px-5 py-3 rounded-full font-semibold w-full mt-4"
              >
                <Phone className="w-4 h-4" />
                Réserver maintenant
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
