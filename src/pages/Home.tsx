import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../context/DataContext';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MapPin, CreditCard, ShieldCheck, ArrowRight, Star, ChevronDown, ChevronUp, Image as ImageIcon, Building, Users, Clock, Award } from 'lucide-react';

export default function Home() {
  const { data } = useSiteData();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  useEffect(() => {
    if (!data?.home?.heroImages) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.home.heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);

  if (!data) return null;

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="font-sans text-brand-dark bg-brand-background selection:bg-brand-secondary selection:text-white">
      {/* 1. Hero Section */}
      <section className="relative h-[95vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {data.home.heroImages.map((img: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === currentSlide ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${img}')` }}
            />
          ))}
          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl pt-20"
          >
            <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-8">
              Secure Your Legacy in Nigeria's Growth Corridors
            </h1>
            <p className="font-body text-xl sm:text-2xl text-brand-background/90 mb-12 font-light leading-relaxed">
              We provide exclusive access to verified, high-yield land investments with uncompromising legal transparency and structured acquisition plans.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/properties" className="bg-brand-secondary hover:bg-white hover:text-brand-primary text-white font-semibold py-5 px-10 rounded-xl transition-all duration-300 shadow-xl border border-transparent">
                Explore Portfolio
              </Link>
              <a href={data.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold py-5 px-10 rounded-xl transition-all duration-300">
                Consult an Advisor
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Indicators */}
      <section className="py-24 bg-white border-b border-brand-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
          >
            {[
              { icon: ShieldCheck, label: "Verified Documentation" },
              { icon: Building, label: "Growing Property Portfolio" },
              { icon: CreditCard, label: "Flexible Payment Options" },
              { icon: Users, label: "Professional Support" }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-[2rem] bg-brand-background flex items-center justify-center text-brand-secondary mb-6 shadow-sm border border-brand-secondary/5">
                  <stat.icon className="w-8 h-8" />
                </div>
                <p className="font-heading font-bold text-xl text-brand-primary">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Why Choose EdenFields */}
      <section className="py-32 bg-brand-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">The EdenFields Standard</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-primary mb-6">Why Choose Us</h2>
            <p className="text-brand-muted text-lg">We eliminate the risks associated with real estate investment in Nigeria, providing a seamless path to premium ownership.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: ShieldCheck, title: "Verified Documentation", desc: "Every plot we sell undergoes rigorous legal checks. We only deal in lands with clean, verifiable titles." },
              { icon: MapPin, title: "Strategic Locations", desc: "We position our estates in the path of major infrastructural developments ensuring rapid appreciation." },
              { icon: CreditCard, title: "Flexible Payments", desc: "Enjoy convenient installment payment structures spread across 3 to 12 months with zero hidden charges." },
              { icon: CheckCircle2, title: "Transparent Process", desc: "Our team of expert realtors provide transparent, data-driven investment advice every step of the way." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-secondary/20 group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-background text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4">{feature.title}</h3>
                <p className="text-brand-muted leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Featured Properties */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">Exclusive Portfolio</span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-primary mb-6">Featured Properties</h2>
              <p className="text-brand-muted text-lg">Discover our curated selection of premium lands with high appreciation potential across strategic locations.</p>
            </div>
            <Link to="/properties" className="inline-flex items-center gap-2 font-semibold text-brand-secondary hover:text-brand-primary transition-colors border-b-2 border-brand-secondary/30 hover:border-brand-primary pb-1">
              View All Properties <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.properties.slice(0, 3).map((property: any, idx: number) => (
              <motion.div 
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute top-6 left-6 z-10 bg-brand-accent/95 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold tracking-widest text-white shadow-lg uppercase">
                    {property.status}
                  </div>
                  <img 
                    src={property.imageUrl || "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                    alt={property.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-8 sm:p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6 gap-4">
                    <h3 className="font-heading font-bold text-3xl text-brand-primary">{property.title}</h3>
                    <div className="text-right whitespace-nowrap bg-brand-background px-4 py-2 rounded-2xl">
                      <span className="block font-bold text-xl text-brand-secondary">{property.price}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">{property.unit}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-brand-muted mb-8 pb-8 border-b border-gray-100">
                    <MapPin className="w-5 h-5 text-brand-secondary shrink-0" />
                    <span className="font-medium text-lg">{property.location}</span>
                  </div>
                  <div className="mt-auto">
                    <Link to="/properties" className="block w-full text-center bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg">
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Payment Plans */}
      <section className="py-32 bg-brand-primary text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-brand-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-white/60 font-semibold tracking-widest uppercase mb-4 block">Investment Simplified</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">Flexible Payment Plans</h2>
            <p className="text-brand-background/80 text-lg md:text-xl font-light">We believe premium land ownership should be accessible. Start your legacy with structured, investor-friendly payments.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              { title: "Standard Entry", deposit: "₦100,000", features: ["Access to premium estates", "Up to 6 months payment spread", "Instant allocation upon full payment", "No hidden charges"] },
              { title: "Premium Entry", deposit: "₦200,000", features: ["Priority plot selection", "Up to 12 months payment spread", "Free site inspection", "Dedicated account manager"] }
            ].map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-colors shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-secondary/30 transition-colors duration-500"></div>
                <h3 className="font-heading font-semibold text-2xl text-brand-secondary mb-3">{plan.title}</h3>
                <div className="flex items-baseline gap-3 mb-10 pb-8 border-b border-white/10">
                  <span className="text-sm font-semibold tracking-wider uppercase text-white/60">Initial Deposit</span>
                  <span className="font-heading font-bold text-5xl">{plan.deposit}</span>
                </div>
                <ul className="space-y-5 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-4 text-white/80">
                      <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={data.contact.whatsappUrl} className="block w-full text-center bg-white text-brand-primary hover:bg-brand-secondary hover:text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg">
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Investment Benefits */}
      <section className="py-32 bg-brand-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">Secure Your Future</span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-primary mb-8">Why Land is the Safest Investment</h2>
              <p className="text-brand-muted text-lg md:text-xl font-light mb-12 leading-relaxed">
                In an unpredictable economic climate, real estate remains the most proven vehicle for wealth preservation and generational transfer.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Hedge Against Inflation", desc: "Unlike cash, land values historically rise alongside inflation, protecting your purchasing power." },
                  { title: "Passive Appreciation", desc: "Watch your wealth grow without daily management. Land appreciates silently over time." },
                  { title: "Tangible Asset", desc: "A physical asset that cannot be wiped out by market crashes or cyber threats." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 text-brand-secondary flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-2xl text-brand-primary mb-3">{item.title}</h4>
                      <p className="text-brand-muted text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Real Estate Investment" 
                className="rounded-[2.5rem] shadow-2xl object-cover h-[600px] w-full border border-gray-100"
                loading="lazy"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl max-w-xs border border-gray-100 hidden md:block">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-brand-success/10 text-brand-success flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 -rotate-45" />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-3xl text-brand-primary">40%+</span>
                    <span className="text-sm font-bold uppercase tracking-wider text-brand-muted mt-1 block">Average ROI</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary mb-6">Client Success Stories</h2>
            <p className="text-brand-muted text-lg">Don't just take our word for it. Hear from investors who have secured their future with us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Olamide T.", role: "Diaspora Investor", text: "As someone living abroad, trusting a real estate company back home is hard. EdenFields made the process completely transparent. I just got my allocation!" },
              { name: "Mr. Chukwudi E.", role: "Business Owner", text: "The flexible payment plan allowed me to secure two plots at Pinnacle Courts without straining my business capital. Truly professional service." },
              { name: "Mrs. Amina B.", role: "Civil Servant", text: "I was skeptical about Omo-Onile issues, but EdenFields showed me all the verified documents. The peaceful transaction was exactly what they promised." }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-background rounded-3xl p-8"
              >
                <div className="flex gap-1 text-brand-secondary mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-brand-dark mb-8 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-heading font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-primary">{review.name}</h4>
                    <p className="text-sm text-brand-muted">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Gallery Preview */}
      <section className="py-24 bg-brand-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary mb-6">Estate Gallery</h2>
              <p className="text-brand-muted text-lg">Glimpses of our site developments, inspections, and successful allocations.</p>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 font-semibold text-brand-secondary hover:text-brand-primary transition-colors">
              View Full Gallery <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.gallery.slice(0, 4).map((item: any, idx: number) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group overflow-hidden rounded-2xl aspect-square"
              >
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">{item.caption}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Trust & Operations (New Section) */}
      <section className="py-24 bg-white border-b border-brand-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">Inside EdenFields</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary mb-6">Transparency In Action</h2>
            <p className="text-brand-muted text-lg">See how we operate, from our corporate office to successful land allocations.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {[
              { title: "Corporate Office", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-2 md:col-span-2" },
              { title: "Site Visits", img: "https://images.unsplash.com/photo-1541888081622-49817726de9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-1" },
              { title: "Professional Team", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-1" },
              { title: "Property Allocation", img: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-2 md:col-span-1" },
              { title: "Client Meetings", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-1" },
              { title: "Land Inspection", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-2 md:col-span-1" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative group overflow-hidden rounded-2xl ${item.colSpan} h-48 md:h-64`}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/20 to-transparent flex items-end p-6">
                  <span className="text-white font-heading font-semibold text-lg md:text-xl">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Latest Blog Posts */}
      <section className="py-24 bg-brand-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary mb-6">Real Estate Insights</h2>
            <p className="text-brand-muted text-lg">Expert advice, market trends, and investment strategies.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Top 5 Emerging Areas in Ibadan for Real Estate", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", date: "June 15, 2026" },
              { title: "Understanding Land Titles in Nigeria", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", date: "June 2, 2026" },
              { title: "Why Real Estate Beats Inflation Every Time", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", date: "May 20, 2026" }
            ].map((post, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-medium text-brand-secondary mb-3 block">{post.date}</span>
                <h3 className="font-heading font-bold text-xl text-brand-primary group-hover:text-brand-secondary transition-colors mb-3 leading-snug">{post.title}</h3>
                <span className="inline-flex items-center gap-1 font-semibold text-brand-primary group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Preview */}
      <section className="py-24 bg-brand-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary mb-6">Frequently Asked Questions</h2>
            <p className="text-brand-muted text-lg">Clear answers to help you make informed decisions.</p>
          </div>

          <div className="space-y-4 mb-12">
            {data.faqs.slice(0, 5).map((faq: any, idx: number) => (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-heading font-semibold text-lg text-brand-primary pr-4">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-6 h-6 text-brand-secondary shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-brand-muted shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-brand-muted border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/faqs" className="inline-flex items-center gap-2 font-semibold text-brand-secondary hover:text-brand-primary transition-colors">
              View All FAQs <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="py-40 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Real Estate Luxury" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-primary/95 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-6 block">Your Legacy Awaits</span>
            <h2 className="font-heading font-bold text-5xl md:text-6xl text-white mb-8 leading-tight">
              Ready to Secure Your Future?
            </h2>
            <p className="text-white/80 text-xl font-light mb-14 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of smart investors building wealth through EdenFields Realty. Start your journey today with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/properties" className="bg-brand-secondary hover:bg-white hover:text-brand-primary text-white font-semibold py-5 px-12 rounded-xl transition-all duration-300 shadow-xl border border-transparent hover:border-white">
                Explore Properties
              </Link>
              <a href={data.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-5 px-12 rounded-xl transition-all duration-300">
                Speak to an Advisor
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
