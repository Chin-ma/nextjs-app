'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ParallaxProvider>
        <body className={`${inter.className} bg-forest-pattern bg-fixed`}>
          <div className="relative z-10">
            {children}
          </div>
        </body>
      </ParallaxProvider>
    </html>
  )
}
