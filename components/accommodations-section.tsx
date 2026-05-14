"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Bed,
  Bath,
  Wifi,
  Wind,
  Tv,
  UtensilsCrossed,
  Refrigerator,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
  Home,
} from "lucide-react"
import Link from "next/link"

const accommodations = [
  {
    id: 1,
    name: "Appartement Meuble",
    price: "60 000",
    priceUnit: "FCFA / jour",
    badge: "Premium",
    description:
      "Un appartement spacieux et entierement equipe pour un sejour luxueux a Dakar.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.01%20%281%29-XBpVjnhtss1zcGLITtycEjTFyzNi8k.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.04-K99pEZMdKigpXs2OSsx8PRytkGsT8Y.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.02%20%282%29-Rh8XkiWtYk4nkyJASltDbMXQXrPewj.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.01%20%282%29-uJoGb3jXWHTIJfgNQmwXbjvq2sbgSx.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.03%20%284%29-XeCMgnHb67ZLSUGOTlFNb3TPZdqQVQ.jpeg",
    ],
    features: [
      { icon: Bed, text: "3 chambres meublees spacieuses" },
      { icon: Wind, text: "Chambres et salon climatises" },
      { icon: Bath, text: "Douche moderne avec jeux de lumiere" },
      { icon: Tv, text: "Ecran plat" },
      { icon: Wifi, text: "WiFi haut debit" },
      { icon: UtensilsCrossed, text: "Cuisine moderne equipee" },
      { icon: Refrigerator, text: "Refrigerateur & cuisiniere electrique" },
      { icon: Home, text: "Balcon avec vue & espace salle a manger" },
    ],
    whatsappLink:
      "https://wa.me/221709660806?text=Bonjour,%20je%20souhaite%20reserver%20un%20Appartement%20Meuble%20chez%20Residence%20Good%20House",
  },
  {
    id: 2,
    name: "Studio Meuble",
    price: "30 000",
    priceUnit: "FCFA / nuitee",
    badge: "Populaire",
    description:
      "Un studio confortable avec tout le necessaire pour un sejour agreable.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.02-gHHWDISdJ7DZr4SJkCaXPQYjUQEkeu.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.03%20%281%29-5yndlKxQ5r4dOC6pfFydiindrFaSFL.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.01%20%285%29-1swMdA2ByYq9gRodhLNWxZrOsFhtG7.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.01%20%283%29-lmDntBIpP6fN940NORiCisu29NyyEh.jpeg",
    ],
    features: [
      { icon: Bed, text: "Chambre meublee climatisee" },
      { icon: Bath, text: "Douche interieure" },
      { icon: Tv, text: "Salon meuble avec TV" },
      { icon: UtensilsCrossed, text: "Cuisine equipee" },
      { icon: Refrigerator, text: "Refrigerateur & cuisiniere electrique" },
      { icon: Wifi, text: "WiFi inclus" },
    ],
    whatsappLink:
      "https://wa.me/221709660806?text=Bonjour,%20je%20souhaite%20reserver%20un%20Studio%20Meuble%20chez%20Residence%20Good%20House",
  },
  {
    id: 3,
    name: "Mini Studio Meuble",
    price: "20 000",
    priceUnit: "FCFA / nuitee",
    badge: "Economique",
    description:
      "Un mini studio pratique et confortable pour les courts sejours.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.02%20%284%29-dXp34ZSkTekSWbOwABGxESy0WL8rs1.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.02%20%281%29-2WSONbO6xdk6NiZrbtMDDSmqjqj1Qp.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.03-9VfQKNqdUq5nx1WOzSxXt8NoBmb3MY.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.01%20%284%29-H0MMVpXTDGO7udBYJNLZcffrlgXRUq.jpeg",
    ],
    features: [
      { icon: Bed, text: "Chambre meublee climatisee" },
      { icon: Refrigerator, text: "Refrigerateur" },
      { icon: Bath, text: "Toilette interieure" },
      { icon: Home, text: "Balcon" },
    ],
    whatsappLink:
      "https://wa.me/221709660806?text=Bonjour,%20je%20souhaite%20reserver%20un%20Mini%20Studio%20Meuble%20chez%20Residence%20Good%20House",
  },
]

function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-t-xl group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Logement"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-4 sm:w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function AccommodationsSection() {
  return (
    <section id="logements" className="py-12 sm:py-16 lg:py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-[#D4A373] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Nos logements
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 text-balance">
            Choisissez votre{" "}
            <span className="text-[#D4A373]">logement ideal</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Des appartements et studios premium pour tous les budgets, entierement
            equipes pour votre confort
          </p>
        </motion.div>

        {/* Accommodations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {accommodations.map((accommodation, index) => (
            <motion.div
              key={accommodation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image Slider */}
              <div className="relative">
                <ImageSlider images={accommodation.images} />
                {/* Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-[#D4A373] text-[#0F172A] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {accommodation.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    {accommodation.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#D4A373]">
                      {accommodation.price}
                    </span>
                    <span className="block text-xs text-[#64748B]">
                      {accommodation.priceUnit}
                    </span>
                  </div>
                </div>

                <p className="text-[#64748B] text-xs sm:text-sm mb-4 sm:mb-6">
                  {accommodation.description}
                </p>

                {/* Features */}
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {accommodation.features.slice(0, 4).map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#0F172A]"
                    >
                      <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4A373] flex-shrink-0" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                  {accommodation.features.length > 4 && (
                    <span className="text-xs text-[#D4A373] font-medium">
                      + {accommodation.features.length - 4} autres equipements
                    </span>
                  )}
                </div>

                {/* WhatsApp Button */}
                <Link
                  href={accommodation.whatsappLink}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm hover:bg-[#1da851] transition-all duration-300 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Reserver cet appartement
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
