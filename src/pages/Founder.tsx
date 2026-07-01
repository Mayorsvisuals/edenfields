import React from 'react';
import { useSiteData } from '../context/DataContext';
import { motion } from 'motion/react';
import { User } from 'lucide-react';

export default function Founder() {
  const { data } = useSiteData();
  
  if (!data) return null;

  return (
    <div className="font-sans text-brand-dark bg-brand-background pt-32 pb-24 min-h-[80vh]">
      <section className="py-20 bg-white overflow-hidden rounded-[3rem] mx-6 lg:mx-8 shadow-2xl border border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] border border-gray-100">
                <img 
                  src={data.founder.imageUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                  alt={data.founder.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-secondary/10 rounded-full blur-2xl -z-10"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 py-12"
            >
              <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">Meet The Visionary</span>
              <h1 className="font-heading font-bold text-5xl md:text-6xl text-brand-primary mb-3">{data.founder.name}</h1>
              <p className="text-xl md:text-2xl text-brand-secondary font-medium mb-10">{data.founder.title}</p>
              
              <div className="space-y-6 text-brand-dark/80 text-lg md:text-xl font-light leading-relaxed mb-12">
                {data.founder.bioParagraphs?.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                )) || <p>As the visionary behind EdenFields Realty, Ayobami Odusote brings years of expertise in the Nigerian real estate sector, driving our mission to deliver premium, verifiable, and highly profitable properties to smart investors.</p>}
              </div>

              <blockquote className="border-l-4 border-brand-secondary pl-8 py-2 my-10 italic text-2xl text-brand-primary font-heading leading-relaxed">
                "{data.founder.quote || "Our greatest achievement is the peace of mind our investors experience when they partner with us."}"
              </blockquote>

              <div className="mt-12 flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-brand-secondary border border-gray-100 shadow-sm">
                  <User className="w-10 h-10" />
                </div>
                <div>
                  <div className="text-5xl text-brand-primary signature-font font-normal tracking-wide">A. Odusote</div>
                  <div className="text-brand-muted text-sm uppercase tracking-widest mt-2 font-bold">Founder & CEO</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
