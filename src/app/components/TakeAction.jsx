"use client"

import { motion } from "framer-motion"

const actions = [
  {
    title: "Plant Trees",
    description: "Join local tree planting initiatives or start your own",
    link: "https://nelda.org.in",
    icon: "🌱"
  },
  {
    title: "Reduce Paper Use",
    description: "Switch to digital alternatives when possible",
    link: "https:/rescript.in",
    icon: "📱"
  },
  {
    title: "Support Conservation",
    description: "Donate to forest conservation organizations",
    link: "https://www.savegreen.in",
    icon: "💚"  
  }
]

export default function TakeAction() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-emerald-100">
          Take Action Today
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-emerald-800/30 p-6 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">{action.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-200">
                {action.title}
              </h3>
              <p className="text-emerald-300 mb-4">{action.description}</p>
              <a
                href={action.link}
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}