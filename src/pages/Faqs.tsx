import React, { useState } from 'react';
import { useSiteData } from '../context/DataContext';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Faqs() {
  const { data } = useSiteData();
  const [activeId, setActiveId] = useState<string | null>(null);
  
  if (!data) return null;

  return (
    <div className="font-sans text-brand-dark bg-brand-background pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-6 block">Knowledge Base</span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-brand-primary mb-8 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-brand-muted text-xl font-light leading-relaxed">
              Everything you need to know about investing securely with EdenFields Realty LTD.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {data.faqs.map((faq: any, index: number) => {
              const isActive = activeId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`bg-white rounded-[1.5rem] overflow-hidden shadow-sm border transition-all duration-300 ${isActive ? 'border-brand-secondary/30 shadow-lg' : 'border-gray-100 hover:border-brand-primary/20 hover:shadow-md'}`}
                >
                  <button 
                    onClick={() => setActiveId(isActive ? null : faq.id)}
                    className="w-full text-left px-8 py-8 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-inset"
                  >
                    <span className={`font-heading font-semibold text-xl md:text-2xl pr-8 transition-colors ${isActive ? 'text-brand-primary' : 'text-brand-dark'}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-inner ${isActive ? 'bg-brand-secondary text-white rotate-180' : 'bg-brand-background text-brand-primary'}`}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-10 pt-2 text-brand-muted leading-relaxed text-lg md:text-xl font-light border-t border-gray-50 mx-8">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 text-center bg-brand-background border border-gray-100 p-16 rounded-[3rem] shadow-sm"
          >
            <h3 className="font-heading font-bold text-3xl text-brand-primary mb-4">Still have questions?</h3>
            <p className="text-brand-muted mb-10 text-lg font-light">Our dedicated support team is ready to assist you.</p>
            <a href="/contact" className="inline-block bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-4 px-12 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg text-lg">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
