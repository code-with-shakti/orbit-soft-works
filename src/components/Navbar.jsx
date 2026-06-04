import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import brand assets
import logoImg from '../assets/logo.jpeg';
import titleImg from '../assets/title.jpeg';

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (menuOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/95 shadow-lg shadow-black/20'
            : 'bg-surface/80'
        } backdrop-blur-xl border-b border-outline-variant/20`}
        style={{ height: '80px' }}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-full">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center group flex-shrink-0 group-hover:opacity-80 transition-opacity">
            {/* Title logo only */}
            <img
              src={titleImg}
              alt="Orbit Softworks"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`font-medium text-[15px] transition-all duration-300 hover:scale-105 ${
                  isActive(to)
                    ? 'text-primary font-bold border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* ── CTA + Hamburger ── */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:block">
              <button className="bg-primary-container text-on-primary-container px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all duration-300 glow-cyan whitespace-nowrap">
                Get Free Quote
              </button>
            </Link>

            {/* ── Hamburger — always visible on mobile ── */}
            <button
              className="flex md:hidden flex-col justify-center items-center gap-[5px] p-2 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors z-50 cursor-pointer"
              style={{ minWidth: '40px', minHeight: '40px' }}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className="block w-6 h-[2px] bg-current rounded-full transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-6 h-[2px] bg-current rounded-full transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-6 h-[2px] bg-current rounded-full transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Overlay Menu ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-surface/70 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-down drawer */}
        <div
          className={`absolute top-[80px] left-0 right-0 bg-surface-container border-b border-outline-variant/20 shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          {/* Title logo inside drawer */}
          <div className="flex items-center px-6 pt-5 pb-3 border-b border-outline-variant/10">
            <img src={titleImg} alt="Orbit Softworks" className="h-7 w-auto object-contain" />
          </div>

          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, to }, i) => (
              <Link
                key={to}
                to={to}
                className={`text-lg font-bold py-3 px-2 border-b border-outline-variant/10 transition-colors rounded-lg ${
                  isActive(to)
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                }`}
                style={{
                  transitionDelay: menuOpen ? `${i * 40}ms` : '0ms',
                }}
              >
                {label}
              </Link>
            ))}
            <Link to="/contact" className="mt-3">
              <button className="w-full bg-primary-container text-on-primary-container py-3.5 rounded-full font-bold hover:scale-[1.02] transition-all text-base">
                Get Free Quote →
              </button>
            </Link>
          </div>

          {/* Bottom contact hint */}
          <div className="px-6 py-4 border-t border-outline-variant/10">
            <p className="text-on-surface-variant text-sm text-center">
              📍 Bhubaneswar, Odisha &nbsp;·&nbsp; hello@orbitsoftworks.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;