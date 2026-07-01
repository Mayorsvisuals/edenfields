import React, { useState } from 'react';
import { useSiteData } from '../context/DataContext';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';

export default function Gallery() {
  const { data } = useSiteData();
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  if (!data) return null;

  const categories = ['All', 'Properties', 'Site Inspections', 'Office', 'Infrastructure', 'Events'];

  // Add dummy categories to existing gallery data for filtering purposes if missing
  const galleryData = data.gallery.map((item: any, idx: number) => ({
    ...item,
    category: item.category || categories[(idx % (categories.length - 1)) + 1]
  }));

  const filteredGallery = activeCategory === 'All' 
    ? galleryData 
    : galleryData.filter((item: any) => item.category === activeCategory);

  return (
    <div className="font-sans text-brand-dark bg-brand-background pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-6 block">Visuals</span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-brand-primary mb-8 leading-tight">
              Our Gallery
            </h1>
            <p className="text-brand-muted text-xl font-light leading-relaxed">
              Glimpses of our premium estates, site allocations, physical inspections, and the vibrant communities we are building.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${activeCategory === cat ? 'bg-brand-primary text-white shadow-lg' : 'bg-white text-brand-muted border border-gray-200 hover:border-brand-secondary hover:text-brand-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((img: any, idx: number) => (
              <motion.div 
                layout
                key={img.id || idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative group overflow-hidden rounded-[2rem] aspect-[4/3] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                onClick={() => setLightboxImg(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 via-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 md:p-10">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="text-white font-bold text-2xl block mb-2 font-heading">{img.caption}</span>
                    <span className="text-brand-secondary text-sm font-bold uppercase tracking-widest block mb-6">{img.category}</span>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full backdrop-blur-md"
              onClick={() => setLightboxImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={lightboxImg} 
                alt="Fullscreen" 
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
