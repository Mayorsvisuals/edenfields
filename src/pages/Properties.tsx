import { useSiteData } from '../context/DataContext';

export default function Properties() {
  const { data } = useSiteData();
  
  if (!data) return null;

  return (
    <div style={{ paddingTop: '100px' }}>
      <section id="properties" className="section-padding properties-section">
          <div className="container">
              <div className="section-title">
                  <h2>Featured Properties</h2>
                  <p>Explore our carefully curated selection of high-yield properties positioned for massive ROI.</p>
              </div>

              <div className="properties-grid">
                  {data.properties.map((prop: any) => (
                    <div className="property-card" key={prop.id}>
                        <div className="property-img-wrapper">
                            <span className="property-status" style={{ background: prop.statusColor, color: prop.statusTextColor || 'var(--bg-white)' }}>{prop.status}</span>
                            <img src={prop.imageUrl} alt={prop.title} />
                            <div className="property-price">{prop.price} <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>{prop.unit}</span></div>
                        </div>
                        <div className="property-details">
                            <h3 className="property-title">{prop.title}</h3>
                            <p className="property-location"><i className="fas fa-map-marker-alt"></i> {prop.location}</p>
                            
                            <div className="property-features">
                                {prop.features.map((feat: any, idx: number) => (
                                  <div className="feature" key={idx}>
                                      <i className={`fas ${feat.icon}`}></i>
                                      <span>{feat.label}</span>
                                  </div>
                                ))}
                            </div>
                            
                            <a href={`${data.contact.whatsappUrl}?text=I am interested in ${prop.title}`} className="btn btn-outline" style={{ color: 'var(--primary-green)', borderColor: 'var(--primary-green)', width: '100%' }}>Request Brochure</a>
                        </div>
                    </div>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
}
