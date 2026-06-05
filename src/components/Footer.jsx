import { Link } from 'react-router-dom';
import titleImg from '../assets/title.jpeg';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/orbitsoftworks?igsh=Njgzc2QyajMwOGoy',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
  },
  {
    label: 'Twitter',
    href: '#',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>,
  },
  // {
  //   label: 'GitHub',
  //   href: '#',
  //   icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
  // },
];

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* ── Brand ── */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-5 group w-max hover:opacity-80 transition-opacity">
              <img src={titleImg} alt="Orbit Softworks" className="h-12 md:h-20 w-auto object-contain" />
            </Link>

            <p className="text-on-surface-variant max-w-sm mb-6 text-[15px] leading-relaxed">
              Powering Business Beyond Boundaries with high-precision digital engineering and visionary design.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>

            <p className="text-on-surface-variant text-sm">
              © 2025 Orbit Softworks. All rights reserved.
            </p>
          </div>

          {/* ── Company ── */}
          <div>
            <h4 className="text-tertiary font-bold mb-4 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Our Services', to: '/services' },
                { label: 'Industries', to: '/industries' },
                { label: 'Portfolio', to: '/portfolio' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-on-surface-variant hover:text-primary transition-colors text-[15px]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Support ── */}
          <div>
            <h4 className="text-tertiary font-bold mb-4 text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-3">
              {[
                { label: 'Contact Us', to: '/contact' },
                { label: 'Privacy Policy', to: '#' },
                { label: 'Terms of Service', to: '#' },
                { label: 'Cookie Policy', to: '#' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-on-surface-variant hover:text-primary transition-colors text-[15px]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mini CTA */}
            <div className="mt-8">
              <Link to="/contact">
                <button className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-primary/20">
                  Get Free Quote →
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12 pt-8 border-t border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-on-surface-variant text-sm">
            Built with precision. Launched with pride. 🚀
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-on-surface-variant text-sm">
            <span>📍 Bhubaneswar, Odisha, India</span>
            <span className="hidden sm:inline">|</span>
            <a
              href="mailto:hello@orbitsoftworks.com"
              className="hover:text-primary transition-colors"
            >
              hello@orbitsoftworks.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;