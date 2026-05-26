import { useSiteData } from '../context/DataContext';

export default function Founder() {
  const { data } = useSiteData();
  
  if (!data) return null;

  return (
    <div style={{ paddingTop: '100px' }}>
      <section id="founder" className="section-padding founder-section">
          <div className="container">
              <div className="founder-grid">
                  <div className="founder-image-wrapper">
                      <img src={data.founder.imageUrl} alt={data.founder.name} className="founder-image" />
                  </div>
                  <div className="founder-content">
                      <div className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
                          <h2>Meet The Visionary</h2>
                      </div>
                      <h3>{data.founder.name}</h3>
                      <span className="founder-title">{data.founder.title}</span>
                      
                      {data.founder.bioParagraphs.map((p: string, idx: number) => (
                          <p key={idx} className="founder-bio">{p}</p>
                      ))}
                      
                      <div className="founder-quote">
                          {data.founder.quote}
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
