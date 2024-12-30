import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/lushForest.jpg", alt: "Lush green forest" },
  { src: "/images/misty-forest.jpg", alt: "Misty forest landscape" },
  { src: "/images/sun-forest.jpg", alt: "Sunlight through forest canopy" },
  { src: "/images/forest-waterfall.jpg", alt: "Forest waterfall" },
  { src: "/images/mangroves.jpg", alt: "Mangroves" },
  { src: "/images/deciduous.jpg", alt: "Deciduous" },
  { src: "/images/coniferous.jpg", alt: "Coniferous" },
  { src: "/images/himalayan.jpg", alt: "Himalayan" },
];

export default function GalleryPreview() {
  return (
    <div id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-emerald-100">Forest Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
