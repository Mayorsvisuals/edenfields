import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';
import { useSiteData } from '../context/DataContext';

export default function Layout() {
  const { data, loading, error } = useSiteData();

  if (loading) return <div className="hero"><div className="hero-content"><h2 className="hero-title" style={{color: 'var(--primary-green)'}}>Loading...</h2></div></div>;
  if (error) return <div>Error loading data...</div>;

  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
