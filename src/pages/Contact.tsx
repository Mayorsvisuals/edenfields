import React, { useState } from 'react';
import { useSiteData } from '../context/DataContext';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, CheckCircle2, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { data } = useSiteData();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  
  if (!data) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="font-sans text-brand-dark bg-brand-background pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">Let's Talk</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-primary mb-6">
              Get In Touch
            </h1>
            <p className="text-brand-muted text-lg md:text-xl font-light">
              Ready to secure your legacy? Our team of real estate experts is available to assist you with inquiries, inspections, and investments.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-background rounded-full translate-x-1/3 -translate-y-1/3 -z-10"></div>
            
            <h3 className="font-heading font-bold text-2xl text-brand-primary mb-10">Contact Information</h3>
            
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-brand-dark mb-2">Office Address</h4>
                  <p className="text-brand-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: data.contact.address.replace('\\n', '<br/>').replace('\n', '<br/>') }}></p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-brand-dark mb-2">Call or WhatsApp</h4>
                  <a href={`tel:${data.contact.phoneLink}`} className="text-brand-muted hover:text-brand-secondary transition-colors">{data.contact.phone}</a>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-brand-dark mb-2">Email Us</h4>
                  <a href={`mailto:${data.contact.email}`} className="text-brand-muted hover:text-brand-secondary transition-colors">{data.contact.email}</a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-gray-100">
              <h4 className="font-heading font-semibold text-brand-primary mb-6">Connect With Us</h4>
              <div className="flex gap-4">
                <a href={data.contact.facebookUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-brand-background text-brand-primary flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-all duration-300 shadow-sm">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={data.contact.instagramUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-brand-background text-brand-primary flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-all duration-300 shadow-sm">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={data.contact.whatsappUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-brand-background text-brand-primary flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-all duration-300 shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-10 md:p-12 rounded-[2rem] shadow-xl border border-gray-100"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                >
                  <div className="w-24 h-24 rounded-full bg-brand-success/10 flex items-center justify-center text-brand-success mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-brand-primary mb-4">Message Received</h3>
                  <p className="text-brand-muted text-lg">Thank you for reaching out. An EdenFields representative will contact you shortly to assist you.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <h3 className="font-heading font-bold text-2xl text-brand-primary mb-8">Send a Message</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-4 bg-brand-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-brand-dark" 
                      placeholder="e.g. Adebayo Johnson" 
                      required 
                      value={formData.name} 
                      onChange={e => setFormData({...formData, name: e.target.value})} 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-5 py-4 bg-brand-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-brand-dark" 
                      placeholder="e.g. adebayo@example.com" 
                      required 
                      value={formData.email} 
                      onChange={e => setFormData({...formData, email: e.target.value})} 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      className="w-full px-5 py-4 bg-brand-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-brand-dark" 
                      placeholder="e.g. +234 800 000 0000" 
                      required 
                      value={formData.phone} 
                      onChange={e => setFormData({...formData, phone: e.target.value})} 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">Message</label>
                    <textarea 
                      className="w-full px-5 py-4 bg-brand-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-brand-dark min-h-[150px] resize-y" 
                      placeholder="How can we help you build your legacy today?" 
                      required 
                      value={formData.message} 
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl mt-4">
                    Send Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
