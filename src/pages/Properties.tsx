import React from 'react';
import { useSiteData } from '../context/DataContext';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Home, Trees, Shield } from 'lucide-react';

export default function Properties() {
  const { data } = useSiteData();
  
  if (!data) return null;

  return (
    <div className="font-sans text-brand-dark bg-brand-background pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">Portfolio</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-primary mb-6">
              Premium Listings
            </h1>
            <p className="text-brand-muted text-lg md:text-xl font-light">
              Explore our carefully curated selection of high-yield properties positioned for massive ROI and secure ownership.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {data.properties.map((prop: any, idx: number) => (
            <motion.div 
              key={prop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col"
            >
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <div className="absolute top-6 left-6 z-10 bg-brand-accent/95 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold tracking-widest text-white shadow-lg uppercase">
                  {prop.status}
                </div>
                <img 
                  src={prop.imageUrl || "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"} 
                  alt={prop.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-6 right-6 z-10 bg-white/95 backdrop-blur-md px-6 py-3 rounded-[1.5rem] shadow-xl">
                  <span className="block font-heading font-bold text-3xl text-brand-primary">{prop.price}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">{prop.unit}</span>
                </div>
              </div>

              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-brand-muted mb-4">
                  <MapPin className="w-5 h-5 text-brand-secondary shrink-0" />
                  <span className="text-lg font-medium">{prop.location}</span>
                </div>
                
                <h3 className="font-heading font-bold text-4xl text-brand-primary mb-8">{prop.title}</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-10 pt-8 border-t border-gray-100">
                  {prop.features.map((feat: any, fIdx: number) => {
                    // Match icons based on label
                    let Icon = Home;
                    if (feat.label.toLowerCase().includes('topography') || feat.label.toLowerCase().includes('dry')) Icon = Trees;
                    if (feat.label.toLowerCase().includes('title') || feat.label.toLowerCase().includes('document')) Icon = Shield;
                    
                    return (
                      <div className="flex flex-col gap-3" key={fIdx}>
                        <Icon className="w-7 h-7 text-brand-secondary" />
                        <span className="text-sm font-medium text-brand-dark leading-snug">{feat.label}</span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-auto pt-8">
                  <a 
                    href={`${data.contact.whatsappUrl}?text=Hello EdenFields, I am interested in the ${prop.title} property.`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-3 w-full bg-brand-primary hover:bg-white border-2 border-transparent hover:border-brand-primary text-white hover:text-brand-primary font-semibold py-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    Request Brochure <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
