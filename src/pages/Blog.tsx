import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  const categories = ["All", "Investment", "Buying Guides", "Company Updates", "Property News", "Market Insights"];
  
  const posts = [
    {
      title: "Why Ibadan is Nigeria's Next Real Estate Goldmine",
      category: "Market Insights",
      date: "Oct 15, 2025",
      excerpt: "An in-depth look at the infrastructure projects transforming Ibadan and how they are driving property appreciation.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Understanding Registered Surveys vs. C of O",
      category: "Buying Guides",
      date: "Nov 02, 2025",
      excerpt: "A comprehensive guide to understanding Nigerian land titles to ensure your investment is completely secure.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "5 Mistakes to Avoid When Buying Land in Nigeria",
      category: "Investment",
      date: "Nov 18, 2025",
      excerpt: "Learn the common pitfalls first-time investors make and how to protect your hard-earned money.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-6 block">Our Blog</span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-brand-primary mb-8 leading-tight">
              Insights & Articles
            </h1>
            <p className="text-brand-muted text-xl font-light leading-relaxed">
              Expert advice, market trends, and investment guides to help you build your legacy.
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold text-brand-primary uppercase tracking-widest shadow-md">
                  {post.category}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-brand-secondary font-bold uppercase tracking-widest mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-primary mb-6 leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-brand-muted mb-8 line-clamp-3 text-lg font-light leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a href="#" className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-secondary transition-colors group/link">
                    Read Article <ArrowRight className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
