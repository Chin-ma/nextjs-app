'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const categories = ["All", "Rainforest", "Temperate", "Boreal", "Cloud Forest"];

const images = [
  {
    src: "/images/lushForest.jpg",
    alt: "Lush green forest",
    category: "Rainforest",
    location: "Amazon, Brazil"
  },
  {
    src: "/images/misty-forest.jpg",
    alt: "Misty forest landscape",
    category: "Cloud Forest",
    location: "Costa Rica"
  },
  {
    src: "/images/sun-forest.jpg",
    alt: "Sunlight through forest canopy",
    category: "Temperate",
    location: "Pacific Northwest, USA"
  },
  {
    src: "/images/forest-waterfall.jpg",
    alt: "Forest waterfall",
    category: "Rainforest",
    location: "Hawaii, USA"
  },
  {
    src: "/images/mangroves.jpg",
    alt: "Mangroves",
    category: "Rainforest",
    location: "Sundarbans, Bangladesh"
  },
  {
    src: "/images/deciduous.jpg",
    alt: "Deciduous",
    category: "Temperate",
    location: "Vermont, USA"
  },
  {
    src: "/images/coniferous.jpg",
    alt: "Coniferous",
    category: "Boreal",
    location: "Sweden"
  },
  {
    src: "/images/himalayan.jpg",
    alt: "Himalayan",
    category: "Cloud Forest",
    location: "Nepal"
  }
];

export default function GalleryPreview() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredImage, setHoveredImage] = useState(null);

  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-emerald-100"
        >
          Forest Gallery
        </motion.h2>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50"
              } transition`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onHoverStart={() => setHoveredImage(image)}
              onHoverEnd={() => setHoveredImage(null)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
              />
              {hoveredImage === image && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-emerald-950/70 rounded-lg p-4 flex flex-col justify-end"
                >
                  <div className="text-emerald-100 font-semibold">
                    {image.category}
                  </div>
                  <div className="text-emerald-300 text-sm">
                    {image.location}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
