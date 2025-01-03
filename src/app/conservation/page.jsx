"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const conservationPoints = [
  {
    title: "Habitat Protection",
    description: "Preserving critical forest ecosystems for wildlife",
    icon: "🦁"
  },
  {
    title: "Sustainable Management",
    description: "Implementing responsible forest management practices",
    icon: "🌲"
  },
  {
    title: "Community Engagement",
    description: "Working with local communities for forest preservation",
    icon: "🤝"
  },
  {
    title: "Research & Education",
    description: "Advancing forest science and public awareness",
    icon: "🔬"
  }
]

export default function ConservationSection() {
  return (
    <div id="conservation" className="py-16 bg-emerald-900/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-emerald-100"
        >
          Forest Conservation
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-emerald-200 text-lg leading-relaxed"
            >
              Forests play a crucial role in maintaining Earth's ecological balance.
              They absorb carbon dioxide, provide habitat for countless species,
              and help regulate the global climate.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-6">
              {conservationPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-emerald-800/30 p-4 rounded-lg"
                >
                  <div className="text-3xl mb-2">{point.icon}</div>
                  <h3 className="text-emerald-200 font-semibold mb-1">
                    {point.title}
                  </h3>
                  <p className="text-emerald-300 text-sm">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex gap-4"
            >
              <a
                href="#"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg flex-1 text-center"
              >
                Join Our Efforts
              </a>
              <a
                href="#"
                className="bg-emerald-800/50 hover:bg-emerald-800/70 text-emerald-100 px-6 py-3 rounded-lg font-medium transition shadow-lg flex-1 text-center"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/forest-conservation.jpg"
              alt="Forest conservation efforts"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-950 p-6">
              <div className="text-emerald-100 font-semibold">
                Current Project: Amazon Rainforest Protection
              </div>
              <div className="text-emerald-300 text-sm">
                Protecting 100,000 hectares of primary rainforest
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

