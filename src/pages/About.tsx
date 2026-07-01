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
    <div className="font-sans text-brand-dark bg-brand-background pt-24 pb-12">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden mb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.about.imageUrl || "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"} 
            alt="About EdenFields" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">Who We Are</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              {data.about.title}
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light">
              Building a legacy of trust and premium real estate in Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary mb-6">Our Story</h2>
              <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
                {data.about.paragraphs.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInUp} initial="initial" whileInView="whileInView"
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="EdenFields Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-2xl text-brand-primary">{data.about.experiencePercentage}</span>
                    <span className="text-sm font-medium text-brand-muted">Proven Track Record</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-24 bg-brand-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Our Mission", icon: Target, desc: "Deliver trusted real estate opportunities that create lasting value for individuals, families, and investors." },
              { title: "Our Vision", icon: ShieldCheck, desc: "Become one of Nigeria's most trusted real estate companies by combining integrity, transparency, innovation, and exceptional client experience." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-secondary/20 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-3xl text-brand-primary mb-4">{item.title}</h3>
                <p className="text-brand-muted leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">What Drives Us</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-brand-primary mb-6">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
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
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-brand-background border border-gray-100 text-center hover:border-brand-primary/30 transition-colors shadow-sm hover:shadow-md"
              >
                <h3 className="font-heading font-bold text-xl text-brand-primary mb-2">{value.title}</h3>
                <p className="text-sm text-brand-muted">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Founder Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src={data.founder.imageUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                  alt={data.founder.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-background rounded-full -z-10"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">Leadership</span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-primary mb-2">{data.founder.name}</h2>
              <p className="text-xl text-brand-muted font-medium mb-10">{data.founder.title}</p>
              
              <div className="space-y-6 text-brand-dark/80 text-lg leading-relaxed mb-10">
                {data.founder.bioParagraphs?.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                )) || <p>As the visionary behind EdenFields Realty, Ayobami Odusote brings years of expertise in the Nigerian real estate sector, driving our mission to deliver premium, verifiable, and highly profitable properties to smart investors.</p>}
              </div>

              <blockquote className="border-l-4 border-brand-accent pl-6 py-2 my-8 italic text-xl text-brand-primary font-heading font-medium">
                "{data.founder.quote || "Our greatest achievement is the peace of mind our investors experience when they partner with us."}"
              </blockquote>

              <div className="mt-12 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-4xl text-brand-primary signature-font font-normal tracking-wide">A. Odusote</div>
                  <div className="text-brand-muted text-sm uppercase tracking-wider mt-1 font-semibold">Founder & CEO</div>
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
      <section className="py-32 bg-brand-background text-center">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-white p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-100"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary mb-6">Experience the EdenFields Standard</h2>
            <p className="text-brand-muted text-lg mb-10">
              Join the growing number of smart investors who trust us with their real estate portfolio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/properties" className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Properties
              </Link>
              <a href={data.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-background font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-sm">
                Speak With an Advisor
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

