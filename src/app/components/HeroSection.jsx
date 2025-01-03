"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0" />
      
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: 'url("/patterns/forest-pattern.png")',
          backgroundSize: 'cover'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center space-y-6 relative z-10"
      >
        {/* Decorative Elements */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -top-16 -left-16 w-32 h-32 text-emerald-400/20"
        >
          <svg viewBox="0 0 200 200" fill="currentColor">
            <path d="M25,0 L50,50 L0,50 Z" />
          </svg>
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold text-emerald-100 leading-tight">
          Discover the Magic of{" "}
          <motion.span 
            className="text-emerald-400 inline-block"
            animate={{ 
              scale: [1, 1.02, 1],
              rotate: [-1, 1, -1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Earth's Forests
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-emerald-200"
        >
          Immerse yourself in the breathtaking beauty of our planet's diverse
          ecosystems. From ancient redwoods to tropical rainforests, explore the
          wonders that make our forests unique.
        </motion.p>

        <motion.blockquote 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl italic relative py-6 text-emerald-300"
        >
          <span className="absolute top-0 left-0 text-4xl text-emerald-400/20">"</span>
          The clearest way into the Universe is through a forest wilderness.
          <span className="absolute bottom-0 right-0 text-4xl text-emerald-400/20">"</span>
          <footer className="text-emerald-400 mt-3 text-sm font-medium">— John Muir</footer>
        </motion.blockquote>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#conservation"
            className="group relative bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg overflow-hidden"
          >
            <span className="relative z-10">Join Conservation</span>
            <motion.div
              className="absolute inset-0 bg-emerald-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ type: "tween" }}
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#gallery"
            className="group relative bg-emerald-800/50 hover:bg-emerald-800/70 text-emerald-100 px-6 py-3 rounded-lg font-medium transition shadow-lg backdrop-blur-sm"
          >
            Explore Gallery
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            />
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-3 gap-6"
        >
          {[
            { number: "3T+", label: "Trees Protected", icon: "🌳" },
            { number: "50K+", label: "Species Preserved", icon: "🦋" },
            { number: "100+", label: "Conservation Projects", icon: "🌿" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2 }}
              whileHover={{ y: -5 }}
              className="text-center p-4 rounded-lg bg-emerald-800/20 backdrop-blur-sm"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-3xl text-emerald-400 font-bold">{stat.number}</div>
              <div className="text-emerald-200 text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

