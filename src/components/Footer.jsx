import { Link } from 'react-router-dom';
import titleImg from '../assets/title.jpeg';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/orbit-softworks',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/orbitsoftworks?igsh=Njgzc2QyajMwOGoy',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
  },
];

const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden border-t border-outline-variant/10"
      style={{ background: '#070c1b' }}
    >
      {/* ── Globe / Glow Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central globe glow */}
        <div
          className="absolute"
          style={{
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            bottom: '-350px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(circle, rgba(26,111,232,0.18) 0%, rgba(119,210,244,0.08) 40%, transparent 70%)',
            filter: 'blur(2px)',
          }}
        />
        {/* Globe ring lines */}
        <div
          className="absolute"
          style={{
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            bottom: '-300px',
            left: '50%',
            transform: 'translateX(-50%)',
            border: '1px solid rgba(174,198,255,0.07)',
          }}
        />
        <div
          className="absolute"
          style={{
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            bottom: '-225px',
            left: '50%',
            transform: 'translateX(-50%)',
            border: '1px solid rgba(174,198,255,0.06)',
          }}
        />
        <div
          className="absolute"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            bottom: '-150px',
            left: '50%',
            transform: 'translateX(-50%)',
            border: '1px solid rgba(174,198,255,0.05)',
          }}
        />
        {/* Side accent glows */}
        <div
          className="absolute top-0 left-[-5%] w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(26,111,232,0.10) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
        <div
          className="absolute top-0 right-[-5%] w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(119,210,244,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── Slogan strip ── */}
        <div className="text-center mb-14">
          <p
            className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.25em] mb-3"
            style={{ color: 'rgba(174,198,255,0.4)' }}
          >
            ✦ &nbsp;We don't follow the future — We build it&nbsp; ✦
          </p>
          <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
            <img src={titleImg} alt="Orbit Softworks" className="h-10 md:h-14 w-auto object-contain mx-auto" />
          </Link>
          <p className="text-on-surface-variant text-[14px] mt-3 max-w-md mx-auto leading-relaxed">
            Powering businesses beyond boundaries with precision digital engineering.
          </p>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* ── Contact Info ── */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-5" style={{ color: '#aec6ff' }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#aec6ff] shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span className="text-on-surface-variant text-[14px] leading-snug">
                  Khandagiri, Bhubaneswar,<br />Odisha, India — 751001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#aec6ff] shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.93 6.93l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <div>
                  <a href="tel:+917978010840" className="text-on-surface-variant text-[14px] hover:text-white transition-colors block">+91 7978010840</a>
                  <a href="tel:+917205525289" className="text-on-surface-variant text-[14px] hover:text-white transition-colors block">+91 7205525289</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#aec6ff] shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <a href="mailto:hello@orbitsoftworks.com" className="text-on-surface-variant text-[14px] hover:text-white transition-colors">
                  hello@orbitsoftworks.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#aec6ff] shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.93 6.93l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 1a6 6 0 0 1 0 12"/><path d="M17.5 1.5a10 10 0 0 1 0 11"/></svg>
                </span>
                <a href="https://wa.me/917978010840" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant text-[14px] hover:text-white transition-colors">
                  WhatsApp: +91 7978010840
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-white transition-all hover:scale-110"
                  style={{ background: 'rgba(174,198,255,0.07)', border: '1px solid rgba(174,198,255,0.12)' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Company ── */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-5" style={{ color: '#aec6ff' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Our Services', to: '/services' },
                { label: 'Industries', to: '/industries' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-on-surface-variant hover:text-white transition-colors text-[14px]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-5" style={{ color: '#aec6ff' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Web Development', to: '/services/web-development' },
                { label: 'Mobile Apps', to: '/services/app-development' },
                { label: 'Custom Software', to: '/services/custom-software' },
                { label: 'ERP / POS / CRM', to: '/services/erp-pos-crm' },
                { label: 'Digital Marketing', to: '/services/digital-marketing' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-on-surface-variant hover:text-white transition-colors text-[14px]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mini CTA */}
            <div className="mt-7">
              <Link to="/contact">
                <button
                  className="px-5 py-2.5 rounded-full font-bold text-[13px] hover:scale-105 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #1a6fe8, #77d2f4aa)',
                    color: '#fff',
                    boxShadow: '0 0 20px rgba(26,111,232,0.35)',
                  }}
                >
                  Get Free Quote →
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(174,198,255,0.08)' }}
        >
          <p className="text-on-surface-variant text-[13px]">
            © 2025 Orbit Softworks. All rights reserved.
          </p>
          <p className="text-on-surface-variant text-[13px]">
            Built with precision. Launched with pride. 🚀
          </p>
          <p className="text-on-surface-variant text-[13px]">
            📍 Khandagiri, Bhubaneswar, Odisha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;