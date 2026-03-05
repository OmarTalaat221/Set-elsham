// components/Gallery/GalleryGrid.jsx

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GalleryGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden aspect-square bg-gray-200"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.alt}
                className="w-full! h-full! object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#023048]/80 via-[#023048]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-lg">{image.label}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full text-white text-2xl transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;
