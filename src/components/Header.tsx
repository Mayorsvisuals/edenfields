import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSiteData } from '../context/DataContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const { data } = useSiteData();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuActive(false);

  if (!data) return null;

  return (
    <header className={scrolled ? 'scrolled' : ''} id="header">
        <div className="container nav-container">
            <Link to="/" className="logo" onClick={closeMenu}>
                <img src={data.site.logoUrl} alt="Logo" />
                <div>
                    <span className="logo-text">{data.site.logoText}</span>
                    <span className="logo-subtext">{data.site.logoSubtext}</span>
                </div>
            </Link>

            <nav className={`nav-links ${menuActive ? 'active' : ''}`} id="nav-links">
                <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/about" onClick={closeMenu} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                <Link to="/properties" onClick={closeMenu} className={location.pathname === '/properties' ? 'active' : ''}>Properties</Link>
                <Link to="/gallery" onClick={closeMenu} className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link>
                <Link to="/founder" onClick={closeMenu} className={location.pathname === '/founder' ? 'active' : ''}>Founder</Link>
                <Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                <a href={data.contact.whatsappUrl} className="btn btn-accent" style={{ color: 'white' }}>Book Inspection</a>
            </nav>

            <div className="mobile-menu-btn" id="mobile-menu-btn" onClick={() => setMenuActive(!menuActive)}>
                <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
        </div>
    </header>
  );
}
