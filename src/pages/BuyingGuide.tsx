import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function BuyingGuide() {
  const steps = [
    {
      step: "01",
      title: "Choose a Property",
      desc: "Browse our portfolio of verified properties. Review the estate features, location advantages, and current pricing to find the perfect fit for your investment goals."
    },
    {
      step: "02",
      title: "Book Inspection",
      desc: "Schedule a physical or virtual site inspection with our consultants. We believe you should see exactly what you are investing in, with full transparency."
    },
    {
      step: "03",
      title: "Documentation Review",
      desc: "Review the FAQ, subscription forms, and title documents. Our team is available to explain every detail, ensuring you have complete confidence in the legal standing of the property."
    },
    {
      step: "04",
      title: "Payment",
      desc: "Make your initial deposit or full payment through our secure corporate channels. We offer flexible plans tailored to make your investment journey smooth."
    },
    {
      step: "05",
      title: "Allocation",
      desc: "Upon completion of your payment, we process your physical plot allocation. We ensure a structured and orderly allocation process for all investors."
    },
    {
      step: "06",
      title: "Ownership",
      desc: "Receive your complete deed of assignment, survey plan, and other necessary documents. Your legacy is officially secured."
    }
  ];

  return (
    <div className="font-sans text-brand-dark bg-brand-background pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">The Process</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-primary mb-6">
              Buying Guide
            </h1>
            <p className="text-brand-muted text-lg font-light">
              A transparent, step-by-step roadmap to securing your property with EdenFields Realty. We make land ownership simple and secure.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-primary/10 -translate-x-1/2"></div>
          
          <div className="space-y-16 md:space-y-24">
            {steps.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Step Content */}
                <div className={`flex-1 md:w-1/2 ${idx % 2 === 1 ? 'md:text-left' : 'md:text-right'} w-full text-center`}>
                  <div className={`md:hidden font-heading font-bold text-6xl text-brand-primary/10 mb-2`}>{item.step}</div>
                  <h3 className="font-heading font-bold text-2xl text-brand-primary mb-4">{item.title}</h3>
                  <p className="text-brand-muted leading-relaxed text-lg">{item.desc}</p>
                </div>
                
                {/* Center Node */}
                <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-24 h-24 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-brand-background text-brand-primary font-heading font-bold text-xl relative z-10">
                    {item.step}
                  </div>
                  <div className="absolute inset-0 bg-brand-primary/5 rounded-full scale-150 -z-10"></div>
                </div>

                {/* Empty Space for alignment */}
                <div className="hidden md:block flex-1 md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center">
          <Link to="/contact" className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 shadow-lg">
            Start Your Journey Today
          </Link>
        </div>

      </div>
    </div>
  );
}
