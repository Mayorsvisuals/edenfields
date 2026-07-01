import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Search, Banknote, MapPin, HeadphonesIcon, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Verified Documentation",
      desc: "Every property we offer undergoes rigorous legal verification. We provide clear titles, free from government encumbrances or family disputes, ensuring your investment is 100% secure.",
      icon: ShieldCheck
    },
    {
      title: "Transparent Process",
      desc: "No hidden fees, no surprise charges. We believe in complete transparency from the first site visit to the final allocation of your land.",
      icon: Search
    },
    {
      title: "Flexible Payment Plans",
      desc: "We understand that investing takes planning. That's why we offer structured, investor-friendly payment options that allow you to secure your future at your own pace.",
      icon: Banknote
    },
    {
      title: "Strategic Locations",
      desc: "We don't just sell land; we sell potential. Our estates are situated in high-growth corridors carefully selected for their potential for rapid appreciation and development.",
      icon: MapPin
    },
    {
      title: "Professional Support",
      desc: "Our team of dedicated real estate consultants is available to guide you through every step, ensuring you make informed decisions aligned with your goals.",
      icon: HeadphonesIcon
    },
    {
      title: "Commitment to Satisfaction",
      desc: "Our relationship doesn't end at the point of sale. We are committed to your long-term satisfaction and the continuous development of our estate infrastructures.",
      icon: ThumbsUp
    }
  ];

  return (
    <div className="font-sans text-brand-dark bg-brand-background pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-6 block">The EdenFields Advantage</span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-brand-primary mb-8 leading-tight">
              Why Choose Us
            </h1>
            <p className="text-brand-muted text-xl font-light leading-relaxed">
              We are redefining the real estate experience in Nigeria through unwavering integrity, transparency, and a commitment to securing your legacy.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-background text-brand-secondary flex items-center justify-center mb-8 shadow-inner">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">{feature.title}</h3>
              <p className="text-brand-muted text-lg leading-relaxed font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-primary text-white rounded-[3rem] p-16 md:p-24 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-6 block relative z-10">Take The Next Step</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-8 relative z-10">Ready to secure your future?</h2>
          <p className="text-white/80 text-xl mb-14 relative z-10 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the peace of mind that comes from investing with a company that prioritizes your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link to="/properties" className="bg-brand-secondary hover:bg-white hover:text-brand-primary text-white font-semibold py-5 px-12 rounded-xl transition-all duration-300 shadow-xl border border-transparent hover:border-white">
              View Properties
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-5 px-12 rounded-xl transition-all duration-300">
              Contact an Advisor
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
