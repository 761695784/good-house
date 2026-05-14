"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "Logements", href: "#logements" },
  { name: "Galerie", href: "#galerie" },
  { name: "Avantages", href: "#avantages" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#D4A373] mb-4">
              Résidence Good House
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Votre destination premium pour un séjour confortable à Dakar.
            </p>
           
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#D4A373] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-1" />
                <span className="text-white/70">Ngor Almadies, Dakar, Sénégal</span>
              </li>
              <li>
                <Link
                  href="tel:+221709660806"
                  className="flex items-center gap-3 text-white/70 hover:text-[#D4A373] transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-[#D4A373]" />
                  +221 70 966 08 06
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/221709660806"
                  target="_blank"
                  className="flex items-center gap-3 text-white/70 hover:text-[#25D366] transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contact@residencegoodhouse.com"
                  className="flex items-center gap-3 text-white/70 hover:text-[#D4A373] transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-[#D4A373]" />
                  contact@residencegoodhouse.com
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Réservez maintenant</h4>
            <p className="text-white/70 mb-6">
              Contactez-nous directement sur WhatsApp pour une réponse rapide et
              personnalisée.
            </p>
            <Link
              href="https://wa.me/221709660806?text=Bonjour,%20je%20souhaite%20réserver%20un%20logement%20chez%20Résidence%20Good%20House"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1da851] transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Réserver via WhatsApp
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Résidence Good House. Tous droits réservés.
          </p>
          <p className="text-white/50 text-sm">
            Made by{" "}
            <a
              href="https://majeliconnect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A373] hover:text-[#D4A373]/80 transition-colors"
            >
              Majeli Connect
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
