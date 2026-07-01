import React from 'react';
import { motion } from 'motion/react';
import { Megaphone, Calendar, MapPin, Tag, Users } from 'lucide-react';

export default function News() {
  const categories = ["All", "New Property Releases", "Inspection Days", "Price Updates", "Allocation Events", "Company Announcements"];
  
  const newsItems = [
    {
      title: "EdenFields Announces Phase 2 Allocation for Prime Estate",
      category: "Allocation Events",
      date: "Dec 10, 2025",
      icon: Users,
      content: "We are thrilled to announce the successful physical allocation for Phase 2 of our premium estate in Ibadan. Investors received their full documentation and physically claimed their plots in a well-organized weekend event."
    },
    {
      title: "Upcoming Mega Inspection Weekend",
      category: "Inspection Days",
      date: "Dec 05, 2025",
      icon: MapPin,
      content: "Join our expert consultants this weekend for a guided tour of our latest property acquisitions. Free transportation is provided from our head office. Reserve your seat today."
    },
    {
      title: "Pre-Launch Price Ending Soon",
      category: "Price Updates",
      date: "Nov 28, 2025",
      icon: Tag,
      content: "The pre-launch promotional pricing for our newest property will end next week. Act now to secure your plot before the 20% price appreciation takes effect."
    },
    {
      title: "EdenFields Expands Portfolio with Premium Commercial Hub",
      category: "New Property Releases",
      date: "Nov 15, 2025",
      icon: Megaphone,
      content: "EdenFields Realty is proud to announce the launch of our first dedicated commercial layout, perfectly positioned to serve the growing residential communities in the area."
    }
  ];

  return (
    <div className="font-sans text-brand-dark bg-brand-background pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-6 block">Stay Updated</span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-brand-primary mb-8 leading-tight">
              Company News
            </h1>
            <p className="text-brand-muted text-xl font-light leading-relaxed">
              Latest announcements, property releases, and event updates from EdenFields Realty.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${idx === 0 ? 'bg-brand-primary text-white shadow-lg' : 'bg-white text-brand-muted border border-gray-200 hover:border-brand-secondary hover:text-brand-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {newsItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-16 rounded-[2.5rem] border border-gray-100 shadow-sm text-center max-w-3xl mx-auto mt-12"
          >
            <div className="w-20 h-20 rounded-[2rem] bg-brand-background text-brand-secondary flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Calendar className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-bold text-3xl text-brand-primary mb-4">No Recent Announcements</h3>
            <p className="text-brand-muted text-xl font-light mb-8 leading-relaxed">Our corporate communications will be updated shortly with the latest news, allocations, and events.</p>
          </motion.div>
        ) : (
          <div className="max-w-5xl mx-auto space-y-10">
            {newsItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col md:flex-row gap-10 items-start"
              >
                <div className="shrink-0 w-20 h-20 rounded-[2rem] bg-brand-background text-brand-secondary flex items-center justify-center shadow-inner border border-brand-secondary/5">
                  <item.icon className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-6 mb-6">
                    <span className="bg-brand-secondary/10 text-brand-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                      {item.category}
                    </span>
                    <div className="flex items-center text-sm text-brand-muted font-semibold uppercase tracking-widest">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary mb-6 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-brand-muted text-lg font-light leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
