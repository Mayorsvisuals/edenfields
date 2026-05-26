import { useState, useRef, useEffect } from 'react';
import { useSiteData } from '../context/DataContext';

export default function Chatbot() {
  const [active, setActive] = useState(false);
  const [messages, setMessages] = useState<{sender: 'bot'|'user', text: string, options?: any[]}[]>([]);
  const { data } = useSiteData();
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            sender: 'bot',
            text: 'Welcome to Edenfields Realty LTD! 👋 How can we help you build your legacy today?',
            options: [
              { label: 'Available Lands', action: 'lands' },
              { label: 'Pricing & Payments', action: 'pricing' },
              { label: 'Site Inspection', action: 'inspection' },
              { label: 'Documentation', action: 'docs' }
            ]
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
            opt.action === 'escalate' ? null : { label: 'Speak to Agent', action: 'escalate' },
            { label: 'Main Menu', action: 'main' }
        ].filter(Boolean);
      } else if (opt.action === 'escalate') {
        botResponse = 'Great! A human representative can assist you better. Please click the button below to connect with us instantly on WhatsApp.';
        nextOptions = [{ label: 'Main Menu', action: 'main' }];
      } else if (opt.action === 'main') {
        botResponse = 'What else would you like to know?';
        nextOptions = [
            { label: 'Available Lands', action: 'lands' },
            { label: 'Pricing & Payments', action: 'pricing' },
            { label: 'Site Inspection', action: 'inspection' },
            { label: 'Documentation', action: 'docs' }
        ];
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse, options: nextOptions }]);
    }, 800);
  };

  if (!data) return null;

  return (
    <>
      <a href={data.contact.whatsappUrl} className="floating-wa" target="_blank" rel="noreferrer" title="Chat on WhatsApp">
          <i className="fab fa-whatsapp"></i>
      </a>

      <div className="chatbot-widget">
          <button className="chatbot-toggle" onClick={() => setActive(!active)}>
              <i className="fas fa-comment-dots"></i>
          </button>

          <div className={`chatbot-window ${active ? 'active' : ''}`}>
              <div className="chat-header">
                  <div className="chat-header-info">
                      <div className="chat-avatar"><i className="fas fa-robot"></i></div>
                      <div>
                          <div className="chat-title">Edenfields Assistant</div>
                          <div className="chat-status"><span className="status-dot"></span> Online</div>
                      </div>
                  </div>
                  <button className="close-chat" onClick={() => setActive(false)}><i className="fas fa-times"></i></button>
              </div>
              
              <div className="chat-body" ref={bodyRef}>
                  {messages.map((msg, idx) => (
                    <div key={idx}>
                      <div className={`chat-msg ${msg.sender === 'bot' ? 'msg-bot' : 'msg-user'}`}>
                        {msg.text}
                      </div>
                      {msg.options && msg.options.length > 0 && (
                        <div className="chat-options">
                          {msg.options.map((opt: any, i: number) => (
                            <button key={i} className="chat-btn" onClick={() => handleUserOption(opt)}>
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>

              <div className="chat-footer">
                  <a href={data.contact.whatsappUrl} className="wa-escalate" target="_blank" rel="noreferrer">
                      <i className="fab fa-whatsapp"></i> Speak to Human Agent
                  </a>
              </div>
          </div>
      </div>
    </>
  );
}
