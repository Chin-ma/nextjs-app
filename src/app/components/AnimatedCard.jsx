"use client"

import { memo } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

const AnimatedCard = memo(({ title, description, imageUrl }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const imageVariants = {
    hover: { scale: 1.05 }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-emerald-800/30 rounded-lg overflow-hidden"
    >
      <motion.div
        variants={imageVariants}
        whileHover="hover"
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Image 
          src={imageUrl} 
          alt={title} 
          width={400}
          height={300}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="p-4">       
        <h3 className="text-xl font-semibold mb-2 text-emerald-200">{title}</h3>
        <p className="text-emerald-300">{description}</p>
      </div>
    </motion.div>
  )
})

AnimatedCard.displayName = 'AnimatedCard'
export default AnimatedCard




