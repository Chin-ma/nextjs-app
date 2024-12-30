import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimatedCard from '../components/AnimatedCard'

export default function Ecosystems() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-nature-accent">Explore Earth's Ecosystems</h1>
        <p className="text-xl text-nature-text mb-8 text-center">
          Discover the incredible diversity of life in various ecosystems around the world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedCard
            title="Tropical Rainforests"
            description="Home to over half of the world's plant and animal species."
            imageUrl="/placeholder.svg?height=300&width=400"
          />
          <AnimatedCard
            title="Coral Reefs"
            description="Underwater ecosystems teeming with marine life and vibrant colors."
            imageUrl="/placeholder.svg?height=300&width=400"
          />
          <AnimatedCard
            title="Arctic Tundra"
            description="A harsh but beautiful landscape adapted to extreme cold."
            imageUrl="/placeholder.svg?height=300&width=400"
          />
          <AnimatedCard
            title="Grasslands"
            description="Wide open spaces supporting diverse herbivores and predators."
            imageUrl="/placeholder.svg?height=300&width=400"
          />
          <AnimatedCard
            title="Deserts"
            description="Arid regions with unique adaptations for survival in extreme heat."
            imageUrl="/placeholder.svg?height=300&width=400"
          />
          <AnimatedCard
            title="Wetlands"
            description="Critical habitats for water filtration and biodiversity."
            imageUrl="/placeholder.svg?height=300&width=400"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

