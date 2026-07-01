import React, { useState, useRef, useEffect } from 'react';
import { useSiteData } from '../context/DataContext';
import { MessageSquare, X, Bot, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Chatbot() {
  const [active, setActive] = useState(false);
  const [messages, setMessages] = useState<{sender: 'bot'|'user', text: string, options?: any[]}[]>([]);
  const { data } = useSiteData();
  const bodyRef = useRef<HTMLDivElement>(null);

  const initialOptions = [
    { label: 'Available Properties', action: 'lands' },
    { label: 'Payment Plans', action: 'pricing' },
    { label: 'Office Location', action: 'location' },
    { label: 'Book Inspection', action: 'inspection' },
    { label: 'Documentation', action: 'docs' },
    { label: 'Contact Consultant', action: 'escalate' }
  ];

  useEffect(() => {
    if (active && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            sender: 'bot',
            text: 'Welcome to the digital headquarters of EdenFields Realty. I am your virtual assistant. How may I direct your inquiry today?',
            options: initialOptions
          }
        ]);
      }, 500);
    }
  }, [active, messages.length]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleUserOption = (opt: any) => {
    setMessages(prev => [...prev.map(m => ({...m, options: []})), { sender: 'user', text: opt.label }]);
    
    setTimeout(() => {
      let botResponse = '';
      let nextOptions: any[] = [];
      
      const botConfig = data?.chatbot || [];
      const configItem = botConfig.find((c: any) => c.label === opt.label);

      if (configItem) {
        botResponse = configItem.response;
        nextOptions = [
            opt.action === 'escalate' ? null : { label: 'Connect With Advisor', action: 'escalate' },
            { label: 'Return to Directory', action: 'main' }
        ].filter(Boolean);
      } else if (opt.action === 'escalate') {
        botResponse = 'Certainly. A dedicated real estate advisor is available to assist you. Please click the button below to connect securely via WhatsApp.';
        nextOptions = [{ label: 'Return to Directory', action: 'main' }];
      } else if (opt.action === 'main') {
        botResponse = 'How else may I direct your inquiry?';
        nextOptions = initialOptions;
      } else if (opt.action === 'lands') {
          botResponse = 'We offer an exclusive portfolio of verified, premium properties in high-growth corridors. Each property is thoroughly vetted with transparent documentation.';
          nextOptions = [{ label: 'Connect With Advisor', action: 'escalate' }, { label: 'Return to Directory', action: 'main' }];
      } else if (opt.action === 'pricing') {
          botResponse = 'We provide structured payment frameworks designed for serious investors, allowing you to secure your asset with flexible milestones over 12 months.';
          nextOptions = [{ label: 'Connect With Advisor', action: 'escalate' }, { label: 'Return to Directory', action: 'main' }];
      } else if (opt.action === 'inspection') {
          botResponse = 'We facilitate both physical site tours and comprehensive virtual inspections. An advisor will be happy to schedule a private viewing.';
          nextOptions = [{ label: 'Connect With Advisor', action: 'escalate' }, { label: 'Return to Directory', action: 'main' }];
      } else if (opt.action === 'docs') {
          botResponse = 'Our legal framework ensures absolute security. We provide Registered Surveys, Certificates of Occupancy, and Governor\'s Consent. Your investment is protected.';
          nextOptions = [{ label: 'Connect With Advisor', action: 'escalate' }, { label: 'Return to Directory', action: 'main' }];
      } else if (opt.action === 'location') {
          botResponse = `Our corporate headquarters is located at: ${data?.contact?.address || 'Ibadan, Oyo State'}.`;
          nextOptions = [{ label: 'Connect With Advisor', action: 'escalate' }, { label: 'Return to Directory', action: 'main' }];
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse, options: nextOptions }]);
    }, 800);
  };

  if (!data) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a 
        href={data.contact.whatsappUrl} 
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-brand-success hover:bg-brand-success/90 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 md:bottom-8 md:right-8" 
        target="_blank" 
        rel="noreferrer" 
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Chatbot Widget */}
      <div className="fixed bottom-24 right-6 z-50 md:bottom-28 md:right-8">
        <AnimatePresence>
          {active && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-full right-0 mb-4 w-[calc(100vw-3rem)] sm:w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[500px] max-h-[80vh]"
            >
              <div className="bg-brand-primary p-5 flex items-center justify-between text-white shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg leading-tight">EdenFields Assistant</h3>
                    <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium">
                      <span className="w-2 h-2 rounded-full bg-brand-success animate-pulse"></span>
                      Online
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setActive(false)}
                  className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div 
                className="flex-1 overflow-y-auto p-5 bg-brand-background/30 scroll-smooth" 
                ref={bodyRef}
              >
                <div className="space-y-4">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex flex-col ${msg.sender === 'bot' ? 'items-start' : 'items-end'}`}>
                      <div 
                        className={`max-w-[85%] px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                          msg.sender === 'bot' 
                            ? 'bg-white text-brand-dark border border-gray-100 rounded-tl-sm' 
                            : 'bg-brand-primary text-white rounded-tr-sm'
                        }`}
                      >
                        {msg.text}
                      </div>
                      
                      {msg.options && msg.options.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2 justify-start max-w-[90%]">
                          {msg.options.map((opt: any, i: number) => (
                            <button 
                              key={i} 
                              className="bg-brand-background border border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary font-medium text-sm py-2 px-4 rounded-full transition-all duration-300"
                              onClick={() => handleUserOption(opt)}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white border-t border-gray-100 shrink-0">
                <a 
                  href={data.contact.whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-brand-success/10 hover:bg-brand-success hover:text-white text-brand-success font-semibold py-3 px-4 rounded-xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" /> 
                  Contact Consultant
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          className="w-14 h-14 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none" 
          onClick={() => setActive(!active)}
        >
          {active ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
}
