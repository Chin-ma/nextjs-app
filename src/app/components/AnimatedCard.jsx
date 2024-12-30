

"use client"

import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"

export default function AnimatedCard({ title, description, imageUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <motion.img whileHover={{ scale: 1.05 }} transition={{type: 'spring', stiffness: 300}} src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-2xl" />
      <div className="p-4">       
        <h3 className="text-xl font-semibold mb-2 text-nature-accent">{title}</h3>
        <p className="text-nature-text">{description}</p>
      </div>
    </motion.div>
  )
}




