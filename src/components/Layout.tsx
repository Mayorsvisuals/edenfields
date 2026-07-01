import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';
import { useSiteData } from '../context/DataContext';
import { motion } from 'motion/react';
import { AlertCircle, Loader2 } from 'lucide-react';

export default function Layout() {
  const { data, loading, error } = useSiteData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-background">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Loader2 className="w-12 h-12 text-brand-secondary animate-spin mb-6" />
          <div className="text-2xl font-heading font-bold text-brand-primary tracking-wide">EDENFIELDS</div>
          <div className="text-sm font-semibold tracking-widest text-brand-muted uppercase mt-2">Loading Headquarters...</div>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-background p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 max-w-lg text-center"
        >
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h2 className="font-heading font-bold text-3xl text-brand-primary mb-4">Connection Interrupted</h2>
          <p className="text-brand-muted text-lg font-light leading-relaxed mb-8">
            We are unable to establish a secure connection to our servers. Please verify your network connection and try again.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-4 rounded-xl transition-colors duration-300 shadow-md"
          >
            Retry Connection
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
