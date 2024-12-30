export default function HeroSection() {
  return (
    <div className="py-4 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-100">
          Discover the Magic of Forests
        </h2>
        <p className="text-emerald-200 leading-relaxed">
          Immerse yourself in the breathtaking beauty of our planet's diverse ecosystems. From the towering canopies of lush
          green forests to the vibrant underwater worlds of coral reefs teeming with life, nature's wonders offer an endless
          source of inspiration and serenity.
        </p>
        <blockquote className="text-emerald-300 italic text-xl">
          "The clearest way into the Universe is through a forest wilderness."
          <footer className="text-emerald-400 mt-2 text-sm">— John Muir</footer>
        </blockquote>
      </div>
    </div>
  )
}

