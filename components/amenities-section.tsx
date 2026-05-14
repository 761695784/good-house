"use client"

import { motion } from "framer-motion"
import {
  Wifi,
  Wind,
  UtensilsCrossed,
  Car,
  Shield,
  Star,
  MapPin,
  MessageCircle,
} from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    title: "WiFi Haut Débit",
    description: "Connexion internet rapide et fiable dans tous les logements",
  },
  {
    icon: Wind,
    title: "Climatisation",
    description: "Chambres et salons entièrement climatisés",
  },
  {
    icon: UtensilsCrossed,
    title: "Cuisine Équipée",
    description: "Réfrigérateur, cuisinière électrique et ustensiles",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Places de parking sécurisées disponibles",
  },
  {
    icon: Shield,
    title: "Sécurité 24/7",
    description: "Résidence surveillée et sécurisée en permanence",
  },
  {
    icon: Star,
    title: "Confort Premium",
    description: "Meubles de qualité et literie haut de gamme",
  },
  {
    icon: MapPin,
    title: "Emplacement Idéal",
    description: "Situé au cœur de Dakar, proche des sites COJOJ",
  },
  {
    icon: MessageCircle,
    title: "Réservation Rapide",
    description: "Réservez en quelques clics via WhatsApp",
  },
]

export function AmenitiesSection() {
  return (
    <section id="avantages" className="py-20 bg-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4A373] font-semibold text-sm uppercase tracking-wider mb-4">
            Nos avantages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 text-balance">
            Tout pour votre <span className="text-[#D4A373]">confort</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Des équipements modernes et des services premium pour un séjour
            inoubliable
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-[#D4A373]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D4A373] transition-colors duration-300">
                <amenity.icon className="w-7 h-7 text-[#D4A373] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                {amenity.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
