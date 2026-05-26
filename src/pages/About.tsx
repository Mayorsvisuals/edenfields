import { useSiteData } from '../context/DataContext';

export default function About() {
  const { data } = useSiteData();
  
  if (!data) return null;

  return (
    <div style={{ paddingTop: '100px' }}>
      <section id="about" className="section-padding">
          <div className="container about-grid">
              <div className="about-image">
                  <img src={data.about.imageUrl} alt="About Us" />
                  <div className="experience-badge">
                      <span>{data.about.experiencePercentage}</span>
                      <p dangerouslySetInnerHTML={{ __html: data.about.experienceText.replace('\\n', '<br/>').replace('\n', '<br/>') }}></p>
                  </div>
              </div>
              <div className="about-content">
                  <div className="section-title" style={{ textAlign: 'left' }}>
                      <h2>{data.about.title}</h2>
                  </div>
                  <h3>{data.about.heading}</h3>
                  {data.about.paragraphs.map((p: string, i: number) => (
                      <p key={i}>{p}</p>
                  ))}
                  
                  <ul className="feature-list">
                      <li><i className="fas fa-check"></i> <span><strong>Mission:</strong> {data.about.mission}</span></li>
                      <li><i className="fas fa-eye"></i> <span><strong>Vision:</strong> {data.about.vision}</span></li>
                      <li><i className="fas fa-gem"></i> <span><strong>Core Values:</strong> {data.about.coreValues}</span></li>
                  </ul>
              </div>
          </div>
      </section>
    </div>
  );
}
