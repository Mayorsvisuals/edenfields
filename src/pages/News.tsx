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
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">Stay Updated</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-primary mb-6">
              Company News
            </h1>
            <p className="text-brand-muted text-lg font-light">
              Latest announcements, property releases, and event updates from EdenFields Realty.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${idx === 0 ? 'bg-brand-primary text-white' : 'bg-white text-brand-dark border border-gray-200 hover:border-brand-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {newsItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center">
                <item.icon className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="flex items-center text-sm text-brand-muted font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-brand-muted leading-relaxed">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
