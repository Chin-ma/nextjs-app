'use client'

import { useState } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"

export default function Header() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Forest Types", href: "#forest-types" },
    { name: "Conservation", href: "#conservation" },
    { name: "Gallery", href: "#gallery" },
    { name: "Discover More", href: "#discover-more" },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-400 origin-left z-50"
        style={{ scaleX }}
      />
      <header className="sticky top-0 z-40">
        <nav className="bg-emerald-950/80 backdrop-blur-sm py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <a href="#home" className="flex items-center space-x-2 z-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span className="text-emerald-100 text-xl font-bold">
                ForestWonders
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-emerald-200 hover:text-emerald-400 transition-colors text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-emerald-200 hover:text-emerald-400 z-50"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-emerald-950/95 backdrop-blur-md md:hidden"
                  onClick={toggleMobileMenu}
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 bottom-0 w-64 bg-gradient-to-b from-emerald-950 to-emerald-900 md:hidden p-6 shadow-xl border-l border-emerald-800/50"
                >
                  <div className="flex flex-col space-y-4 mt-16">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-emerald-100 hover:text-emerald-400 transition-colors text-lg font-medium py-3 border-b border-emerald-800/50 hover:bg-emerald-800/20 px-2 rounded"
                        onClick={toggleMobileMenu}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  )
}
