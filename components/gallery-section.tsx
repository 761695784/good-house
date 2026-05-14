"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.01-qVrFe1rLYBtFpDWqif8AVJNgPcxjoW.jpeg",
    alt: "Immeuble Residence Good House",
    category: "Exterieur",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.01%20%281%29-XBpVjnhtss1zcGLITtycEjTFyzNi8k.jpeg",
    alt: "Salon luxueux cuir marron",
    category: "Salon",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.04-K99pEZMdKigpXs2OSsx8PRytkGsT8Y.jpeg",
    alt: "Salon moderne gris",
    category: "Salon",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.02%20%282%29-Rh8XkiWtYk4nkyJASltDbMXQXrPewj.jpeg",
    alt: "Chambre avec armoire en bois",
    category: "Chambre",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.03%20%284%29-XeCMgnHb67ZLSUGOTlFNb3TPZdqQVQ.jpeg",
    alt: "Cuisine equipee moderne",
    category: "Cuisine",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.01%20%284%29-H0MMVpXTDGO7udBYJNLZcffrlgXRUq.jpeg",
    alt: "Salle de bain LED",
    category: "Salle de bain",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.02-gHHWDISdJ7DZr4SJkCaXPQYjUQEkeu.jpeg",
    alt: "Salon creme avec TV",
    category: "Salon",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.03%20%281%29-5yndlKxQ5r4dOC6pfFydiindrFaSFL.jpeg",
    alt: "Salon beige elegant",
    category: "Salon",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.01%20%282%29-uJoGb3jXWHTIJfgNQmwXbjvq2sbgSx.jpeg",
    alt: "Chambre avec lumiere naturelle",
    category: "Chambre",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.03-9VfQKNqdUq5nx1WOzSxXt8NoBmb3MY.jpeg",
    alt: "Chambre avec mobilier bois",
    category: "Chambre",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.01%20%283%29-lmDntBIpP6fN940NORiCisu29NyyEh.jpeg",
    alt: "Salle a manger en bois",
    category: "Salle a manger",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.03%20%283%29-UABHWWP1Y1cJHGPKdfziwGw5SipxVm.jpeg",
    alt: "Escalier LED design",
    category: "Interieur",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.02%20%284%29-dXp34ZSkTekSWbOwABGxESy0WL8rs1.jpeg",
    alt: "Salon gris moderne",
    category: "Salon",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.01%20%285%29-1swMdA2ByYq9gRodhLNWxZrOsFhtG7.jpeg",
    alt: "Chambre lit double",
    category: "Chambre",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.02%20%285%29-ksqQXjrZPEBVaHnmZpOsgSBidRGtkM.jpeg",
    alt: "Salon marron et creme",
    category: "Salon",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.57.03%20%282%29-bLSKA3goEzZ1TqKUFSpsBSax3nPEfY.jpeg",
    alt: "Salle de bain moderne",
    category: "Salle de bain",
  },
  // Nouvelles images ajoutees
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.56.32%20%281%29-09MwEVUuhqVQQMsGESw93tsmK3HekN.jpeg",
    alt: "Salon creme avec table marbre",
    category: "Salon",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.56.33%20%281%29-NOQ5hwtmMFHNK8n1G0cceGYg4w3DEz.jpeg",
    alt: "Salon spacieux avec portes en bois",
    category: "Salon",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.56.33%20%282%29-AejQCg1ap9ks42SB5suO3zSYMLnMnW.jpeg",
    alt: "Chambre avec dressing en bois",
    category: "Chambre",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.56.33%20%283%29-zpwQ28FYqqj4mAWCuwPcXLGSu0tY4o.jpeg",
    alt: "Chambre avec lit en bois massif",
    category: "Chambre",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.56.31-0iyqaq6hi1VHV1L0bsx3sV4SaawzOD.jpeg",
    alt: "Salon elegant avec canapes creme",
    category: "Salon",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.56.32%20%282%29-7fa32oCEWGxvR7odvNDIT2131vv4LJ.jpeg",
    alt: "Salle de bain avec douche",
    category: "Salle de bain",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.56.32-tXKPpITBycfpEp7MnygO8xjcD7xInn.jpeg",
    alt: "Salon avec climatisation et TV",
    category: "Salon",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.56.33-HJ0wygxB393KcoMlQulnXzef1E7CDN.jpeg",
    alt: "Cuisine tout equipee",
    category: "Cuisine",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.56.32%20%283%29-v5nQBRxHRrqzsMv3R3pkYmhBccWnfi.jpeg",
    alt: "Salle de bain avec miroir LED bleu",
    category: "Salle de bain",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.56.32%20%284%29-k8TNcyv77Mp1ikV9qxB2uhBIbBsnQG.jpeg",
    alt: "Grand salon moderne",
    category: "Salon",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galerie" className="py-20 bg-[#F8FAFC]">
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
            Notre galerie
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 text-balance">
            Decouvrez nos <span className="text-[#D4A373]">espaces</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Des interieurs modernes et elegants concus pour votre confort
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid"
            >
              <div
                onClick={() => setSelectedImage(image.src)}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-[#D4A373] text-xs font-semibold uppercase tracking-wider">
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold">{image.alt}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#D4A373] transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="w-full rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
