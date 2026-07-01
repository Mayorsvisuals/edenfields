import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';
import { useSiteData } from '../context/DataContext';

export default function Layout() {
  const { data, loading, error } = useSiteData();

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-brand-background"><div className="text-2xl font-heading font-bold text-brand-primary">Loading...</div></div>;
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
