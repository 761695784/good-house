"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Amadou Diallo",
    role: "Homme d'affaires",
    content:
      "Sejour exceptionnel ! L'appartement etait impeccable, moderne et tres bien situe. Le service client est remarquable. Je recommande vivement pour les COJOJ.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marie Ndiaye",
    role: "Touriste",
    content:
      "Un vrai havre de paix au coeur de Dakar. La cuisine equipee et la climatisation sont parfaites. Rapport qualite-prix imbattable !",
    rating: 5,
  },
  {
    id: 3,
    name: "Pierre Mendy",
    role: "Sportif professionnel",
    content:
      "Parfait pour mon entrainement avant les competitions. WiFi rapide, espace confortable et quartier calme. Je reviendrai certainement !",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC]">
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
            Temoignages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-3 sm:mb-4 text-balance">
            Ce que disent nos <span className="text-[#D4A373]">clients</span>
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Decouvrez les experiences de nos hotes satisfaits
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 sm:-top-4 right-4 sm:right-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D4A373] rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-[#D4A373] text-[#D4A373]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D4A373]/20 flex items-center justify-center">
                  <span className="text-[#D4A373] font-bold text-sm sm:text-base">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748B]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
