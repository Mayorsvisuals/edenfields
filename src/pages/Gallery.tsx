import { useState } from 'react';
import { useSiteData } from '../context/DataContext';

export default function Gallery() {
  const { data } = useSiteData();
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  
  if (!data) return null;

  return (
    <div style={{ paddingTop: '100px' }}>
      <section id="gallery" className="section-padding">
          <div className="container">
              <div className="section-title">
                  <h2>Our Gallery</h2>
                  <p>Glimpses of our premium estates, site allocations, and physical inspections.</p>
              </div>

              <div className="gallery-grid">
                  {data.gallery.map((img: any) => (
                      <div className="gallery-item" key={img.id} onClick={() => setLightboxImg(img.url)}>
                          <img src={img.url} alt={img.caption} />
                          <div className="gallery-overlay"><i className="fas fa-search-plus"></i></div>
                      </div>
                  ))}
              </div>
          </div>
          
          <div className={`lightbox ${lightboxImg ? 'active' : ''}`} id="lightbox" onClick={() => setLightboxImg(null)}>
              <div className="lightbox-content">
                  <span className="lightbox-close" onClick={() => setLightboxImg(null)}>&times;</span>
                  {lightboxImg && <img src={lightboxImg} alt="Fullscreen" className="lightbox-img" />}
              </div>
          </div>
      </section>
    </div>
  );
}
