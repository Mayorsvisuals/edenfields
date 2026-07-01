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
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">The EdenFields Advantage</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-primary mb-6">
              Why Choose Us
            </h1>
            <p className="text-brand-muted text-lg font-light">
              We are redefining the real estate experience in Nigeria through unwavering integrity, transparency, and a commitment to securing your legacy.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center mb-8">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-dark mb-4">{feature.title}</h3>
              <p className="text-brand-muted leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-primary text-white rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 relative z-10">Ready to secure your future?</h2>
          <p className="text-white/80 text-lg mb-10 relative z-10 max-w-2xl mx-auto">
            Experience the peace of mind that comes from investing with a company that prioritizes your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link to="/properties" className="bg-white text-brand-primary hover:bg-brand-background font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg">
              View Properties
            </Link>
            <Link to="/contact" className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-10 rounded-xl transition-all duration-300">
              Contact an Advisor
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
