import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Scroll to top whenever route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Scanline overlay across all layout pages */}
      <div className="scanline-overlay" />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
