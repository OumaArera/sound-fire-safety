import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import Industries from '@/pages/Industries';
import WhyChooseUs from '@/pages/WhyChooseUs';
import Leadership from '@/pages/Leadership';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="industries" element={<Industries />} />
        <Route path="why-choose-us" element={<WhyChooseUs />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
