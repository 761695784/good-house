"use client"

import { motion } from "framer-motion"
import { Home, Users, Clock } from "lucide-react"

export function StatsCounter() {
  const stats = [
    { icon: Home, value: "3+", label: "Types de logements", suffix: "" },
    { icon: Users, value: "500", label: "Clients satisfaits", suffix: "+" },
    { icon: Clock, value: "24/7", label: "Disponibilité", suffix: "" },
  ]

  return (
    <section className="py-16 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-[#D4A373]/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-[#D4A373]" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
                <span className="text-[#D4A373]">{stat.suffix}</span>
              </div>
              <div className="text-white/60 text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
