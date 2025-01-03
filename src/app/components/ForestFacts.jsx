"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const facts = [
  {
    title: "Amazon Rainforest",
    fact: "The Amazon produces about 20% of Earth's oxygen",
    icon: "🌳"
  },
  {
    title: "Biodiversity",
    fact: "A single hectare of rainforest may contain over 42,000 different species of insects",
    icon: "🪲"
  },
  {
    title: "Carbon Storage",
    fact: "Forests store about 45% of Earth's terrestrial carbon",
    icon: "🌍"
  },
  {
    title: "Ancient Trees",
    fact: "The oldest known living tree is over 5,000 years old",
    icon: "🌲"
  }
]

export default function ForestFacts() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="py-16 bg-emerald-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-100">
          Fascinating Forest Facts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-800/40 p-6 rounded-lg cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="text-4xl mb-4">{fact.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-200">
                {fact.title}
              </h3>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  height: activeIndex === index ? "auto" : 0
                }}
                className="text-emerald-300"
              >
                {fact.fact}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}