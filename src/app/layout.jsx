// 'use client'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Forest Wonders - Explore Nature\'s Beauty',
  description: 'Explore the beauty and significance of forests worldwide',
  keywords: 'forests, conservation, nature, ecosystems',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-forest-pattern bg-fixed`}>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}