import { Link } from 'react-router-dom';
import { useSiteData } from '../context/DataContext';

export default function Footer() {
  const { data } = useSiteData();
  
  if (!data) return null;

  return (
    <footer>
        <div className="container">
            <div className="footer-grid">
                <div className="footer-about">
                    <img src={data.site.logoUrl} alt="Logo" style={{ height: '60px', borderRadius: '5px', marginBottom: '15px' }} />
                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '5px' }}>{data.site.logoText} {data.site.logoSubtext}</h3>
                    <p>{data.home.description}</p>
                </div>
                
                <div>
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/properties">Our Properties</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/faqs">FAQs</Link></li>
                        <li><Link to="/admin/login">Admin Login</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="footer-heading">Legal</h4>
                    <ul className="footer-links">
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Payment Terms</a></li>
                        <li style={{ color: 'var(--gold-accent)', marginTop: '20px', fontWeight: 600 }}>RC: 8943212</li>
                    </ul>
                </div>

                <div>
                    <h4 className="footer-heading">Contact Info</h4>
                    <ul className="footer-contact">
                        <li><i className="fas fa-map-marker-alt"></i> {data.contact.address.replace('\\n', ' ')}</li>
                        <li><i className="fas fa-phone-alt"></i> {data.contact.phone}</li>
                        <li><i className="fas fa-envelope"></i> {data.contact.email}</li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} {data.site.logoText} {data.site.logoSubtext}. All Rights Reserved.</p>
                <div className="social-links" style={{ marginTop: 0, paddingTop: 0, border: 'none' }}>
                    <a href={data.contact.facebookUrl} target="_blank" rel="noreferrer" style={{ background: 'rgba(255,255,255,0.1)', width: '35px', height: '35px', fontSize: '1rem' }}><i className="fab fa-facebook-f"></i></a>
                    <a href={data.contact.instagramUrl} target="_blank" rel="noreferrer" style={{ background: 'rgba(255,255,255,0.1)', width: '35px', height: '35px', fontSize: '1rem' }}><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </footer>
  );
}
