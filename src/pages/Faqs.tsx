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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">Knowledge Base</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-primary mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-brand-muted text-lg font-light">
              Everything you need to know about investing securely with EdenFields Realty LTD.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {data.faqs.map((faq: any, index: number) => {
              const isActive = activeId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 ${isActive ? 'border-brand-primary shadow-md' : 'border-gray-100 hover:border-gray-200'}`}
                >
                  <button 
                    onClick={() => setActiveId(isActive ? null : faq.id)}
                    className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-inset"
                  >
                    <span className={`font-heading font-semibold text-lg md:text-xl pr-8 transition-colors ${isActive ? 'text-brand-primary' : 'text-brand-dark'}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-brand-primary text-white rotate-180' : 'bg-brand-background text-brand-primary'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-2 text-brand-muted leading-relaxed text-lg border-t border-gray-50 mx-8">
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center bg-brand-primary/5 p-8 rounded-3xl"
          >
            <h3 className="font-heading font-semibold text-xl text-brand-primary mb-2">Still have questions?</h3>
            <p className="text-brand-muted mb-6">Our dedicated support team is ready to assist you.</p>
            <a href="/contact" className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
