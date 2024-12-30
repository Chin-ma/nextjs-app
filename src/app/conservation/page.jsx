// import { Button } from "@/components/ui/button"

export default function ConservationSection() {
  return (
    <div id="conservation" className="py-16 bg-emerald-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-emerald-100">Forest Conservation</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-emerald-200 mb-4">
              Forests play a crucial role in maintaining the Earth's ecological balance. They absorb carbon dioxide, provide
              habitat for countless species, and help regulate the global climate. However, these vital ecosystems are under
              threat from deforestation, climate change, and other human activities.
            </p>
            <p className="text-emerald-200 mb-6">
              Join us in our mission to protect and preserve the world's forests for future generations. Together, we can make
              a difference through sustainable practices, reforestation efforts, and education.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white">Learn More About Conservation</button>
          </div>
          <div className="relative h-auto md:h-96">
            <img
              src="/images/forest-conservation.jpg"
              alt="Forest conservation efforts"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

