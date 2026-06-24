import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Services from './pages/Services';
import WebDevelopment from './pages/WebDevelopment';
import CustomSoftware from './pages/CustomSoftware';
import AppDevelopment from './pages/AppDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import ErpPosCrm from './pages/ErpPosCrm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="industries" element={<Industries />} />
          <Route path="services" element={<Services />} />
          <Route path="services/web-development" element={<WebDevelopment />} />
          <Route path="services/custom-software" element={<CustomSoftware />} />
          <Route path="services/app-development" element={<AppDevelopment />} />
          <Route path="services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="services/erp-pos-crm" element={<ErpPosCrm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
