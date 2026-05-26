import { useState } from 'react';
import { useSiteData } from '../context/DataContext';

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
    <div style={{ paddingTop: '100px' }}>
      <section id="contact" className="section-padding">
          <div className="container">
              <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>Ready to secure your legacy? Our team is available to assist you with inquiries, inspections, and purchases.</p>
              </div>

              <div className="contact-grid">
                  <div className="contact-info-card">
                      <div className="contact-item">
                          <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                          <div className="contact-text">
                              <h4>Office Address</h4>
                              <p dangerouslySetInnerHTML={{ __html: data.contact.address.replace('\\n', '<br/>').replace('\n', '<br/>') }}></p>
                          </div>
                      </div>
                      <div className="contact-item">
                          <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
                          <div className="contact-text">
                              <h4>Call or WhatsApp</h4>
                              <a href={`tel:${data.contact.phoneLink}`}>{data.contact.phone}</a>
                          </div>
                      </div>
                      <div className="contact-item">
                          <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                          <div className="contact-text">
                              <h4>Email Us</h4>
                              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
                          </div>
                      </div>

                      <div className="social-links">
                          <a href={data.contact.facebookUrl} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                          <a href={data.contact.instagramUrl} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                          <a href={data.contact.whatsappUrl} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
                      </div>
                  </div>

                  <div className="contact-form">
                      {submitted ? (
                          <div style={{ textAlign: 'center', padding: '40px 0' }}>
                              <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: 'var(--primary-green)', marginBottom: '20px' }}></i>
                              <h3 style={{ color: 'var(--primary-green)' }}>Message Sent!</h3>
                              <p>Thank you for reaching out. A representative will contact you shortly.</p>
                          </div>
                      ) : (
                          <form onSubmit={handleSubmit}>
                              <div className="form-group">
                                  <input type="text" className="form-control" placeholder="Your Full Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                              </div>
                              <div className="form-group">
                                  <input type="email" className="form-control" placeholder="Your Email Address" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                              </div>
                              <div className="form-group">
                                  <input type="tel" className="form-control" placeholder="Phone / WhatsApp Number" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                              </div>
                              <div className="form-group">
                                  <textarea className="form-control" placeholder="How can we help you build your legacy today?" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                              </div>
                              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                          </form>
                      )}
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
