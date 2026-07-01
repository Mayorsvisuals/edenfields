import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSiteData } from '../context/DataContext';
import { Menu, X } from 'lucide-react';

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

  const isHome = location.pathname === '/';
  // On home page, header text is white before scroll. On other pages, we can just make it dark or keep the same logic with a dark background.
  // Actually, wait - let's make header dark text on white bg always if not on home, OR just make it premium.
  const headerBgClass = scrolled ? 'bg-white shadow-sm py-4' : (isHome ? 'bg-transparent py-6' : 'bg-brand-primary py-6');
  const textColorClass = scrolled ? 'text-brand-dark' : 'text-white';
  const logoTextColor = scrolled ? 'text-brand-primary' : 'text-white';
  const logoSubtextColor = scrolled ? 'text-brand-muted' : 'text-white/80';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBgClass}`}>
        <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 z-[60]" onClick={closeMenu}>
                <img src={data.site.logoUrl} alt="Logo" className="h-12 rounded bg-white/10 p-1" />
                <div>
                    <span className={`font-heading font-bold text-xl block leading-none transition-colors ${logoTextColor}`}>{data.site.logoText}</span>
                    <span className={`font-sans text-xs tracking-widest font-medium transition-colors ${logoSubtextColor}`}>{data.site.logoSubtext}</span>
                </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Properties', path: '/properties' },
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'Founder', path: '/founder' },
                  { name: 'Contact', path: '/contact' }
                ].map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path} 
                    className={`font-heading font-semibold text-sm uppercase tracking-wider relative group transition-colors ${location.pathname === item.path ? (scrolled ? 'text-brand-accent' : 'text-brand-secondary') : textColorClass}`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-brand-accent transform origin-left transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </Link>
                ))}
                <a href={data.contact.whatsappUrl} className="bg-brand-accent hover:bg-red-900 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm tracking-wide ml-4">
                  Book Inspection
                </a>
            </nav>

            {/* Mobile Toggle */}
            <button 
              className={`lg:hidden z-[60] focus:outline-none ${textColorClass}`}
              onClick={() => setMenuActive(!menuActive)}
            >
                {menuActive ? <X className={`w-8 h-8 ${menuActive ? 'text-brand-dark' : ''}`} /> : <Menu className="w-8 h-8" />}
            </button>

            {/* Mobile Nav Overlay */}
            <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${menuActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu}></div>

            {/* Mobile Nav Menu */}
            <div className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white z-50 shadow-2xl flex flex-col justify-center px-10 transition-transform duration-500 ease-in-out lg:hidden ${menuActive ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex flex-col gap-6">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Properties', path: '/properties' },
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'Founder', path: '/founder' },
                  { name: 'Contact', path: '/contact' }
                ].map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path} 
                    onClick={closeMenu}
                    className={`font-heading font-bold text-2xl transition-colors ${location.pathname === item.path ? 'text-brand-accent' : 'text-brand-dark hover:text-brand-primary'}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a href={data.contact.whatsappUrl} onClick={closeMenu} className="bg-brand-primary text-white text-center font-semibold py-4 rounded-xl mt-4">
                  Book Inspection
                </a>
              </div>
            </div>
        </div>
    </header>
  );
}
