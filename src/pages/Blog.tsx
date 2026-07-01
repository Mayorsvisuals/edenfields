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
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-secondary font-semibold tracking-widest uppercase mb-4 block">Our Blog</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-primary mb-6">
              Insights & Articles
            </h1>
            <p className="text-brand-muted text-lg font-light">
              Expert advice, market trends, and investment guides to help you build your legacy.
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-brand-primary uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-brand-muted mb-4 font-medium">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-primary mb-4 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-brand-muted mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-brand-secondary font-semibold hover:text-brand-primary transition-colors">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
