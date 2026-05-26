import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../context/DataContext';

export default function Home() {
  const { data } = useSiteData();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!data?.home?.heroImages) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.home.heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);

  if (!data) return null;

  return (
    <>
      <section id="home" className="hero">
          <div className="hero-slider">
              {data.home.heroImages.map((img: string, idx: number) => (
                  <div key={idx} className={`slide ${idx === currentSlide ? 'active' : ''}`} style={{ backgroundImage: `url('${img}')` }}></div>
              ))}
          </div>
          
          <div className="hero-overlay"></div>

          <div className="hero-content container">
              <span className="hero-subtitle">{data.home.subtitle}</span>
              <h1 className="hero-title">{data.home.title}</h1>
              <p className="hero-desc">{data.home.description}</p>
              <div className="hero-btns">
                  <Link to="/properties" className="btn btn-primary">Explore Properties</Link>
                  <a href={data.contact.whatsappUrl} className="btn btn-outline"><i className="fab fa-whatsapp"></i> Chat on WhatsApp</a>
              </div>
          </div>
      </section>

      <section id="why-us" className="section-padding">
          <div className="container">
              <div className="section-title">
                  <h2>Why Choose Edenfields</h2>
                  <p>We eliminate the risks associated with real estate investment in Nigeria, providing a seamless path to ownership.</p>
              </div>

              <div className="why-us-grid">
                  <div className="feature-card">
                      <div className="icon-box"><i className="fas fa-shield-alt"></i></div>
                      <h4>Verified Documentation</h4>
                      <p>Every plot we sell undergoes rigorous legal checks. We only deal in lands with clean, verifiable titles free from government encumbrances and Omo-onile issues.</p>
                  </div>
                  <div className="feature-card">
                      <div className="icon-box"><i className="fas fa-map-marked-alt"></i></div>
                      <h4>Strategic Locations</h4>
                      <p>We don't just sell land; we sell foresight. Our estates are positioned in the path of major infrastructural developments ensuring rapid appreciation.</p>
                  </div>
                  <div className="feature-card">
                      <div className="icon-box"><i className="fas fa-hand-holding-usd"></i></div>
                      <h4>Flexible Payment Plans</h4>
                      <p>We believe wealth creation should be accessible. Enjoy convenient installment payment structures spread across 3 to 12 months with zero hidden charges.</p>
                  </div>
                  <div className="feature-card">
                      <div className="icon-box"><i className="fas fa-chart-line"></i></div>
                      <h4>Fast Appreciation</h4>
                      <p>Our strategic acquisitions guarantee high ROI. Clients who invest with Edenfields see their property values double within incredibly short timeframes.</p>
                  </div>
                  <div className="feature-card">
                      <div className="icon-box"><i className="fas fa-user-tie"></i></div>
                      <h4>Professional Guidance</h4>
                      <p>Our team of expert realtors and legal advisors walk you through the entire process, providing transparent, data-driven investment advice.</p>
                  </div>
                  <div className="feature-card">
                      <div className="icon-box"><i className="fas fa-handshake"></i></div>
                      <h4>Trusted Transactions</h4>
                      <p>Registered with the Corporate Affairs Commission (RC: 8943212), our corporate integrity is our greatest asset. Your investment is 100% secure.</p>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
