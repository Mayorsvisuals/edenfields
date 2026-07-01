import React from 'react';
import { useSiteData } from '../context/DataContext';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Heart, Award, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const { data } = useSiteData();
  
  if (!data) return null;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="font-sans text-brand-dark bg-brand-background pt-24 pb-12 selection:bg-brand-secondary selection:text-white">
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden mb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.about.imageUrl || "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"} 
            alt="About EdenFields" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-6 block">Our Heritage</span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
              {data.about.title}
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed">
              Building a legacy of trust and premium real estate in Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
              <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">The Beginning</span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-primary mb-8">Our Story</h2>
              <div className="space-y-6 text-brand-muted text-lg md:text-xl font-light leading-relaxed">
                {data.about.paragraphs.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInUp} initial="initial" whileInView="whileInView"
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[600px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="EdenFields Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-10 bg-white p-8 rounded-[2rem] shadow-2xl max-w-sm border border-gray-100">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center">
                    <Award className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-3xl text-brand-primary">{data.about.experiencePercentage}</span>
                    <span className="text-sm font-bold uppercase tracking-wider text-brand-muted mt-1 block">Proven Track Record</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-32 bg-brand-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { title: "Our Mission", icon: Target, desc: "Deliver trusted real estate opportunities that create lasting value for individuals, families, and investors." },
              { title: "Our Vision", icon: ShieldCheck, desc: "Become one of Nigeria's most trusted real estate companies by combining integrity, transparency, innovation, and exceptional client experience." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white p-12 lg:p-16 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-[2rem] bg-brand-background text-brand-secondary flex items-center justify-center mb-10 shadow-inner">
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-bold text-3xl text-brand-primary mb-6">{item.title}</h3>
                <p className="text-brand-muted leading-relaxed text-lg md:text-xl font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">What Drives Us</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-primary mb-6">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Integrity", desc: "Doing the right thing, always." },
              { title: "Transparency", desc: "Clear communication, no hidden clauses." },
              { title: "Excellence", desc: "Premium quality in every interaction." },
              { title: "Customer First", desc: "Prioritizing your peace of mind." },
              { title: "Growth", desc: "Securing your legacy and financial future." },
              { title: "Innovation", desc: "Modern solutions for real estate." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-10 rounded-[2rem] bg-brand-background border border-transparent hover:border-brand-secondary/20 hover:bg-white text-center transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <h3 className="font-heading font-bold text-2xl text-brand-primary mb-4">{value.title}</h3>
                <p className="text-base md:text-lg font-light text-brand-muted">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Founder Section */}
      <section className="py-32 bg-brand-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">Leadership</span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-primary mb-3">{data.founder.name}</h2>
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
                <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-secondary border border-gray-100">
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

      {/* 5. Company Timeline / Why Clients Trust Us */}
      <section className="py-32 bg-brand-primary text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">A Heritage of Trust</h2>
            <p className="text-white/80 text-lg md:text-xl">
              We've built our reputation by consistently delivering on our promises and providing secure investment opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: "2025", title: "Company Founded", desc: "EdenFields was founded with a clear vision to revolutionize property acquisition through transparent processes." },
              { year: "2025", title: "Launch of EdenFields Realty", desc: "Officially launched our premium services, focusing on helping individuals, families, and investors acquire genuine land." },
              { year: "2025", title: "Introduction of Flexible Payment Plans", desc: "Rolled out investor-friendly payment structures to make land ownership accessible without compromising security." },
              { year: "Today", title: "Growing with Our Clients", desc: "Continuing our commitment to delivering verified, high-yield properties and exceptional customer satisfaction." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-brand-secondary font-heading font-bold text-4xl mb-4">{item.year}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call To Action */}
      <section className="py-40 bg-white text-center">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-brand-background p-16 md:p-24 rounded-[3rem] shadow-2xl border border-gray-100"
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-6 block">Your Legacy Awaits</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-primary mb-8 leading-tight">Experience the EdenFields Standard</h2>
            <p className="text-brand-muted text-xl font-light mb-14 max-w-2xl mx-auto leading-relaxed">
              Join the growing number of smart investors who trust us with their real estate portfolio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/properties" className="bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-5 px-12 rounded-xl transition-all duration-300 shadow-xl">
                Explore Properties
              </Link>
              <a href={data.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold py-5 px-12 rounded-xl transition-all duration-300 shadow-sm hover:shadow-xl">
                Speak With an Advisor
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

