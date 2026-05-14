"use client"

import { motion } from "framer-motion"
import { Building2, Users, Shield, MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-13%20at%2023.56.33%20%281%29-NOQ5hwtmMFHNK8n1G0cceGYg4w3DEz.jpeg"
                alt="Salon luxueux Residence Good House"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-[#0F172A] text-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-3xl font-bold text-[#D4A373]">10+</div>
              <div className="text-sm text-white/80">Années d&apos;expérience</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#D4A373] font-semibold text-sm uppercase tracking-wider mb-4">
              À propos de nous
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
              Une résidence de prestige au{" "}
              <span className="text-[#D4A373]">cœur de Dakar</span>
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              Résidence Good House vous accueille dans un cadre exceptionnel à
              Dakar. Nos appartements et studios meublés offrent tout le confort
              moderne pour un séjour inoubliable, que ce soit pour les COJOJ ou
              vos voyages d&apos;affaires.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Building2,
                  title: "Logements Premium",
                  desc: "Appartements modernes et équipés",
                },
                {
                  icon: Users,
                  title: "Service Personnalisé",
                  desc: "Accueil chaleureux et attentionné",
                },
                {
                  icon: Shield,
                  title: "Sécurité 24/7",
                  desc: "Résidence sécurisée et surveillée",
                },
                {
                  icon: MapPin,
                  title: "Emplacement Idéal",
                  desc: "Proche des sites des COJOJ",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4A373]/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#D4A373]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#64748B] text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
