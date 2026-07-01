import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, FileText, Clock, MapPin, AlertCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InvestmentCentre() {
  const sections = [
    {
      title: "Why Invest in Ibadan",
      icon: MapPin,
      content: "Ibadan is rapidly becoming the real estate investment destination of choice in South-West Nigeria. With massive infrastructure developments, the dry port, rail connections to Lagos, and a growing population, early investors are positioned for exceptional capital appreciation. It offers the perfect blend of affordability today and immense value tomorrow."
    },
    {
      title: "Understanding Land Titles",
      icon: FileText,
      content: "A property's title determines its security. Understanding the difference between a Registered Survey, C of O (Certificate of Occupancy), and Excision is critical. At EdenFields, we prioritize transparency, ensuring every property we offer has verifiable, secure titles free from government acquisition or familial disputes."
    },
    {
      title: "Why Buy Early",
      icon: Clock,
      content: "Real estate rewards those who act early. Buying during the pre-launch or early development phases of an estate secures the lowest possible entry price. As infrastructure (roads, electricity, security) is developed, the property's value naturally appreciates, delivering strong ROI."
    },
    {
      title: "Land Appreciation",
      icon: TrendingUp,
      content: "Unlike other assets, genuine land in strategic locations almost never depreciates. Land appreciation is driven by population growth, inflation, and infrastructural development. Investing in areas with projected governmental and commercial growth guarantees a compounding return on your investment over the years."
    },
    {
      title: "Mistakes First-Time Buyers Make",
      icon: AlertCircle,
      content: "Many first-time buyers fail to verify documentation, ignore location potential in favor of immediate cheapness, or delay their purchase waiting for the 'perfect' time. Partnering with a reputable, professional firm like EdenFields protects you from common pitfalls and fraudulent transactions."
    }
  ];

  return (
    <div className="font-sans text-brand-dark bg-brand-background pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-6 block">Education & Insights</span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-brand-primary mb-8 leading-tight">
              Investment Centre
            </h1>
            <p className="text-brand-muted text-xl font-light leading-relaxed">
              Empowering you with the knowledge to make secure, profitable real estate decisions.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col md:flex-row gap-8"
            >
              <div className="shrink-0 w-20 h-20 rounded-[2rem] bg-brand-background text-brand-secondary flex items-center justify-center shadow-inner border border-brand-secondary/5">
                <section.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl text-brand-primary mb-4">{section.title}</h3>
                <p className="text-brand-muted leading-relaxed text-lg font-light">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-background rounded-[3rem] p-16 md:p-24 text-center max-w-5xl mx-auto border border-gray-100 shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-brand-primary text-white flex items-center justify-center mx-auto mb-8 shadow-lg">
              <HelpCircle className="w-10 h-10" />
            </div>
            <h2 className="font-heading font-bold text-4xl mb-6 text-brand-primary">Frequently Asked Questions</h2>
            <p className="text-brand-muted text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Have specific questions about our estates, documentation, or payment structures? Visit our dedicated FAQ page for detailed answers.
            </p>
            <Link to="/faqs" className="inline-block bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-5 px-12 rounded-xl transition-all duration-300 shadow-xl">
              View FAQs
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
