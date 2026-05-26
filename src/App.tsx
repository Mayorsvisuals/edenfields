import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { DataProvider } from './context/DataContext';

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="properties" element={<Properties />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="founder" element={<Founder />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faqs" element={<Faqs />} />
          </Route>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
