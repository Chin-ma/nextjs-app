'use client'

import { ParallaxProvider, useParallax } from 'react-scroll-parallax'

export function ParallaxSection({ children, speed }) {
  const parallax = useParallax({
    speed: speed,
  })

  return (
    <section ref={parallax.ref} className="py-16">
      {children}
    </section>
  )
}

export default function ClientWrapper({ children }) {
  return (
    <ParallaxProvider>
      <div id="home" className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-900">
        {children}
      </div>
    </ParallaxProvider>
  )
} 