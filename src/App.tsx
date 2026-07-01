import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Gallery from './pages/Gallery';
import Founder from './pages/Founder';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import WhyChooseUs from './pages/WhyChooseUs';
import BuyingGuide from './pages/BuyingGuide';
import InvestmentCentre from './pages/InvestmentCentre';
import Blog from './pages/Blog';
import News from './pages/News';
import { DataProvider } from './context/DataContext';

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="why-choose-us" element={<WhyChooseUs />} />
            <Route path="buying-guide" element={<BuyingGuide />} />
            <Route path="investment-centre" element={<InvestmentCentre />} />
            <Route path="properties" element={<Properties />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="founder" element={<Founder />} />
            <Route path="blog" element={<Blog />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faqs" element={<Faqs />} />
          </Route>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
