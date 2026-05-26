import { useState } from 'react';
import { useSiteData } from '../context/DataContext';

export default function Faqs() {
  const { data } = useSiteData();
  const [activeId, setActiveId] = useState<string | null>(null);
  
  if (!data) return null;

  return (
    <div style={{ paddingTop: '100px' }}>
      <section id="faqs" className="section-padding faq-section">
          <div className="container">
              <div className="section-title">
                  <h2>Frequently Asked Questions</h2>
                  <p>Everything you need to know about investing with Edenfields Realty LTD.</p>
              </div>

              <div className="faq-container">
                  {data.faqs.map((faq: any) => (
                      <div className={`faq-item ${activeId === faq.id ? 'active' : ''}`} key={faq.id}>
                          <div className="faq-question" onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}>
                              {faq.question}
                              <i className="fas fa-chevron-down faq-icon"></i>
                          </div>
                          <div className="faq-answer">
                              <p>{faq.answer}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
}
