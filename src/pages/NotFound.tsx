import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Map } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="font-sans text-brand-dark bg-brand-background pt-32 pb-24 min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="w-24 h-24 rounded-[2rem] bg-white text-brand-secondary flex items-center justify-center mx-auto mb-10 shadow-sm border border-gray-100">
            <Map className="w-12 h-12" />
          </div>
          <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">Error 404</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-primary mb-6 leading-tight">
            Page Not Found
          </h1>
          <p className="text-brand-muted text-xl font-light leading-relaxed mb-12">
            The destination you are looking for does not exist in our directory. Let us guide you back to our digital headquarters.
          </p>
          <div className="flex justify-center">
            <Link to="/" className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-5 px-12 rounded-xl transition-all duration-300 shadow-xl text-lg">
              Return to Reception <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
