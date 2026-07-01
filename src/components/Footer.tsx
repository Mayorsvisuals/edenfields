import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../context/DataContext';
import { MapPin, Phone, Mail, ArrowRight, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { data } = useSiteData();
  const [email, setEmail] = useState('');
  
  if (!data) return null;

  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12 border-t-[12px] border-brand-secondary">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
                <div className="lg:col-span-1">
                    <img src={data.site.logoUrl} alt="Logo" className="h-16 rounded-xl mb-6 bg-white/10 p-2 backdrop-blur-sm" />
                    <h3 className="text-2xl font-heading font-bold mb-4 tracking-tight">{data.site.logoText} <span className="font-light">{data.site.logoSubtext}</span></h3>
                    <p className="text-white/70 text-lg leading-relaxed mb-8">
                        Delivering trusted real estate opportunities that create lasting value for individuals, families, and investors across Nigeria.
                    </p>
                    <div className="flex gap-4">
                        <a href={data.contact.facebookUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-brand-secondary hover:text-white hover:border-transparent transition-all duration-300">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href={data.contact.instagramUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-brand-secondary hover:text-white hover:border-transparent transition-all duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href={data.contact.whatsappUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#25D366] hover:text-white hover:border-transparent transition-all duration-300">
                            <MessageCircle className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-xl font-heading font-semibold mb-8 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
                        Quick Links
                    </h4>
                    <ul className="space-y-4">
                        <li><Link to="/about" className="text-white/70 hover:text-brand-secondary transition-colors text-lg flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" /> About Us</Link></li>
                        <li><Link to="/why-choose-us" className="text-white/70 hover:text-brand-secondary transition-colors text-lg flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Why Choose Us</Link></li>
                        <li><Link to="/properties" className="text-white/70 hover:text-brand-secondary transition-colors text-lg flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Properties</Link></li>
                        <li><Link to="/gallery" className="text-white/70 hover:text-brand-secondary transition-colors text-lg flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Gallery</Link></li>
                        <li><Link to="/contact" className="text-white/70 hover:text-brand-secondary transition-colors text-lg flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Contact Us</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-xl font-heading font-semibold mb-8 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
                        Insights & Guides
                    </h4>
                    <ul className="space-y-4">
                        <li><Link to="/investment-centre" className="text-white/70 hover:text-brand-secondary transition-colors text-lg flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Investment Centre</Link></li>
                        <li><Link to="/buying-guide" className="text-white/70 hover:text-brand-secondary transition-colors text-lg flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Buying Guide</Link></li>
                        <li><Link to="/blog" className="text-white/70 hover:text-brand-secondary transition-colors text-lg flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Recent Articles</Link></li>
                        <li><Link to="/news" className="text-white/70 hover:text-brand-secondary transition-colors text-lg flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Company News</Link></li>
                        <li><Link to="/faqs" className="text-white/70 hover:text-brand-secondary transition-colors text-lg flex items-center gap-2 group"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" /> FAQs</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-heading font-semibold mb-8 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
                        Contact Info
                    </h4>
                    <ul className="space-y-5 mb-8">
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-brand-secondary mt-1">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <span className="text-white/80 text-lg leading-relaxed">{data.contact.address.replace('\\n', ' ')}</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-brand-secondary">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span className="text-white/80 text-lg">{data.contact.phone}</span>
                        </li>
                    </ul>
                    
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h5 className="font-semibold mb-2">Subscribe to our Newsletter</h5>
                        <p className="text-white/60 text-sm mb-4">Get the latest property updates and investment tips.</p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-secondary transition-colors"
                            />
                            <button type="submit" className="bg-brand-secondary hover:bg-white hover:text-brand-primary text-white px-4 py-2 rounded-lg transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-white/50 text-base">&copy; {new Date().getFullYear()} {data.site.logoText} {data.site.logoSubtext}. All Rights Reserved.</p>
                <div className="flex items-center gap-6 text-white/50 text-sm">
                    <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/about" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </div>
    </footer>
  );
}
