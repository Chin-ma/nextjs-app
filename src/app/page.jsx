'use client'

import Header from "./components/Header"
import Footer from "./components/Footer"
import AnimatedCard from "./components/AnimatedCard"
import HeroSection from "./components/HeroSection"
import { useParallax } from "react-scroll-parallax"
import ConservationSection from "./conservation/page"
import GalleryPreview from "./gallery/page"
import Survey from "./components/Survey"

const ParallaxSection = ({ children, speed }) => {
  const parallax = useParallax({
    speed: speed,
  })

  return (
    <section ref={parallax.ref} className="py-16">
      {children}
    </section>
  )
}

export default function ForestWonders() {
  return (
    <div id="home" className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-900">
      <Header />
      <main className="flex-grow ">
        <ParallaxSection speed={-5}>
          <div className="container mx-auto px-4">
            <HeroSection />
          </div>
        </ParallaxSection>

        <ParallaxSection speed={5}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-emerald-100">
              Explore Forest Types
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedCard
                title="Tropical Rainforests"
                description="Dense, evergreen forests with the highest biodiversity on Earth."
                imageUrl="/images/rain-forest.jpg"
              />
              <AnimatedCard
                title="Temperate Forests"
                description="Seasonal forests with diverse wildlife and distinct canopy layers."
                imageUrl="/images/temperate-forest.jpg"
              />
              <AnimatedCard
                title="Boreal Forests"
                description="Northern forests of hardy evergreen trees adapted to cold climates."
                imageUrl="/images/boreal-forest.jpg"
              />
            </div>
          </div>
        </ParallaxSection>
        <ParallaxSection speed={-3}>
          <ConservationSection />
        </ParallaxSection>
        <ParallaxSection speed={3}>
          <GalleryPreview />
        </ParallaxSection>
        <ParallaxSection speed={-2}>
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-emerald-100">
              Discover More
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-800/50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-emerald-200">Forest Ecosystems</h3>
                <p className="text-emerald-300 mb-4">
                  Explore the intricate web of life within forests, from the forest floor to the canopy. Learn about the
                  complex relationships between plants, animals, and microorganisms that make forests some of the most
                  diverse ecosystems on Earth.
                </p>
                <a href="#" className="text-emerald-400 hover:text-emerald-300 font-medium">
                  Learn more about forest ecosystems →
                </a>
              </div>
              <div className="bg-emerald-800/50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-emerald-200">Sustainable Forestry</h3>
                <p className="text-emerald-300 mb-4">
                  Discover how sustainable forestry practices are helping to preserve our forests while still meeting the
                  world's demand for wood and paper products. Learn about certification programs, selective logging, and
                  reforestation efforts.
                </p>
                <a href="#" className="text-emerald-400 hover:text-emerald-300 font-medium">
                  Explore sustainable forestry →
                </a>
              </div>
            </div>
          </div>
        </ParallaxSection>

        <ParallaxSection speed={3} id="survey">
          <div className="container mx-auto px-4">
            <Survey />
          </div>
        </ParallaxSection>
      </main>
      <Footer />
    </div>
  )
}

