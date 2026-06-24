import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// ── Local hero images (src/assets/hero/) ──
import imgSpaceOrbit    from '../../assets/hero/slide-01-space-orbit.jpg';
import imgMobileApp     from '../../assets/hero/slide-02-mobile-app.jpg';
import imgAiAutomation  from '../../assets/hero/slide-03-ai-automation.jpg';
import imgEnterpriseCity from '../../assets/hero/slide-04-enterprise-city.jpg';
import imgCodeDev       from '../../assets/hero/slide-05-code-dev.jpg';
import imgDashboard     from '../../assets/hero/slide-06-dashboard.jpg';

const slides = [
  {
    image: imgSpaceOrbit,
    eyebrow: 'Custom Software',
    headline: 'Engineered',
    highlight: 'to Scale.',
    sub: 'Enterprise-grade digital solutions built to grow your business — from day one to IPO.',
    accent: '#aec6ff',
    link: '/services/custom-software',
  },
  {
    image: imgMobileApp,
    eyebrow: 'Mobile Apps',
    headline: 'Native Feel.',
    highlight: 'Zero Compromise.',
    sub: 'Buttery-smooth iOS and Android applications that your users will love.',
    accent: '#77d2f4',
    link: '/services/app-development',
  },
  {
    image: imgCodeDev,
    eyebrow: 'Web Development',
    headline: 'Beautiful.',
    highlight: 'High-Converting.',
    sub: 'High-performance websites and e-commerce platforms that turn visitors into customers.',
    accent: '#7bd0ff',
    link: '/services/web-development',
  },
  {
    image: imgEnterpriseCity,
    eyebrow: 'Enterprise ERP',
    headline: 'Streamline',
    highlight: 'Operations.',
    sub: 'Unified platforms for inventory, HR, accounts, and lead tracking.',
    accent: '#aec6ff',
    link: '/services/erp-pos-crm',
  },
  {
    image: imgDashboard,
    eyebrow: 'POS & Billing',
    headline: 'Speedy',
    highlight: 'Checkouts.',
    sub: 'GST-ready billing systems for pharmacies, retail stores, and supermarkets.',
    accent: '#a78bfa',
    link: '/services/erp-pos-crm',
  },
  {
    image: imgAiAutomation,
    eyebrow: 'Digital Marketing',
    headline: 'Rank Higher.',
    highlight: 'Grow Faster.',
    sub: 'SEO, social media, and performance campaigns that bring real leads to your door.',
    accent: '#f472b6',
    link: '/services/digital-marketing',
  },
];

const INTERVAL = 6000;
const TRANSITION_DURATION = 0.65;

const PARTICLES = Array.from({ length: 10 }, (_, i) => ({
  left: `${8 + i * 9}%`,
  top: `${12 + (i % 5) * 16}%`,
  size: 2 + (i % 3),
  duration: 3 + (i % 3),
  delay: i * 0.28,
}));

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index, dir = 1) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      const next = (current + 1) % slides.length;
      goTo(next, 1);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [current, goTo]);

  const prev = () => {
    const idx = (current - 1 + slides.length) % slides.length;
    goTo(idx, -1);
  };
  const next = () => {
    const idx = (current + 1) % slides.length;
    goTo(idx, 1);
  };

  const slide = slides[current];

  return (
    <section
      className="relative w-full flex flex-col overflow-hidden"
      style={{ height: 'calc(100vh - 80px)' }}
    >
      {/* ── SLOGAN BAR (top strip) ── */}
      <div
        className="relative z-30 w-full flex items-center justify-center py-2.5 px-4"
        style={{
          background: 'linear-gradient(90deg, rgba(26,111,232,0.15) 0%, rgba(174,198,255,0.08) 50%, rgba(26,111,232,0.15) 100%)',
          borderBottom: '1px solid rgba(174,198,255,0.12)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <span
          className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.22em] text-center"
          style={{ color: 'rgba(174,198,255,0.85)' }}
        >
          ✦&nbsp;&nbsp;We don't follow the future — We build it&nbsp;&nbsp;✦
        </span>
      </div>

      {/* ── Main hero area ── */}
      <div className="relative flex-1 flex items-center justify-center">

        {/* ── Background crossfade ── */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${current}`}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: TRANSITION_DURATION, ease: 'easeInOut' }}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {/* ── Overlays ── */}
        <div className="absolute inset-0 z-[1] bg-[#0b1229]/55 pointer-events-none" />
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, rgba(11,18,41,0.78) 100%)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-44 z-[3] pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0b1229 0%, transparent 100%)' }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-20 z-[3] pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #0b1229 0%, transparent 100%)' }}
        />

        {/* ── Accent glow ── */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`glow-${current}`}
            className="absolute inset-0 z-[2] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: 'easeInOut' }}
            style={{ background: `radial-gradient(ellipse 60% 50% at 50% 58%, ${slide.accent}18 0%, transparent 70%)` }}
          />
        </AnimatePresence>

        {/* ── Particles ── */}
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                left: p.left,
                top: p.top,
                background: slide.accent,
              }}
              animate={{ y: [0, -16, 0], opacity: [0.18, 0.45, 0.18] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
            />
          ))}
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: direction > 0 ? 40 : -40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: direction > 0 ? -28 : 28, filter: 'blur(4px)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow tag */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.4 }}
                className="flex items-center justify-center gap-2 mb-5"
              >
                <span
                  className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{
                    background: `${slide.accent}18`,
                    border: `1px solid ${slide.accent}40`,
                    color: slide.accent,
                  }}
                >
                  {slide.eyebrow}
                </span>
              </motion.div>

              {/* Headline — BIG & BOLD */}
              <h1
                className="leading-[0.98] mb-4 tracking-[-0.03em]"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: 'clamp(2.6rem, 6vw, 5.5rem)',
                  fontWeight: 900,
                  color: '#ffffff',
                  textShadow: '0 6px 48px rgba(0,0,0,0.7)',
                }}
              >
                {slide.headline}
                <br />
                <span
                  style={{
                    background: `linear-gradient(135deg, ${slide.accent}, #fff, ${slide.accent})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {slide.highlight}
                </span>
              </h1>

              {/* Divider line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
                className="mx-auto mb-6"
                style={{
                  width: '60px',
                  height: '3px',
                  borderRadius: '99px',
                  background: `linear-gradient(90deg, transparent, ${slide.accent}, transparent)`,
                  transformOrigin: 'center',
                }}
              />

              {/* Subtext */}
              <p
                className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                style={{
                  color: 'rgba(255,255,255,0.80)',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                }}
              >
                {slide.sub}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact">
                  <button
                    className="group relative px-9 py-4 rounded-full font-bold text-[15px] tracking-wide flex items-center gap-2 overflow-hidden transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
                    style={{
                      background: `linear-gradient(135deg, #1a6fe8, ${slide.accent}dd)`,
                      color: '#ffffff',
                      boxShadow: `0 0 36px ${slide.accent}45, 0 8px 28px rgba(0,0,0,0.35)`,
                    }}
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                    <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-full" />
                  </button>
                </Link>
                <Link to={slide.link}>
                  <button
                    className="px-9 py-4 rounded-full font-bold text-[15px] tracking-wide backdrop-blur-xl transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
                    style={{
                      background: 'rgba(16,20,40,0.45)',
                      border: `1px solid ${slide.accent}45`,
                      color: '#ffffff',
                    }}
                  >
                    Explore Service
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Arrows ── */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 z-20 w-11 h-11 rounded-full hidden md:flex items-center justify-center backdrop-blur-md transition-transform duration-200 hover:scale-110"
          style={{
            top: 'calc(50% - 36px)',
            background: 'rgba(24,30,54,0.58)',
            border: `1px solid ${slide.accent}30`,
            color: '#fff',
            boxShadow: '0 4px 18px rgba(0,0,0,0.28)',
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 md:right-8 z-20 w-11 h-11 rounded-full hidden md:flex items-center justify-center backdrop-blur-md transition-transform duration-200 hover:scale-110"
          style={{
            top: 'calc(50% - 36px)',
            background: 'rgba(24,30,54,0.58)',
            border: `1px solid ${slide.accent}30`,
            color: '#fff',
            boxShadow: '0 4px 18px rgba(0,0,0,0.28)',
          }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* ── Progress dots ── */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Slide ${i + 1}`}
              className="relative h-[5px] rounded-full overflow-hidden transition-all duration-500"
              style={{
                width: i === current ? '36px' : '8px',
                background: i === current ? 'transparent' : 'rgba(174,198,255,0.22)',
              }}
            >
              {i === current && (
                <>
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{ background: `${slide.accent}35` }}
                  />
                  <motion.span
                    key={`fill-${current}`}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ background: slide.accent }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                  />
                </>
              )}
            </button>
          ))}
        </div>

        {/* ── Bottom-left label strip ── */}
        <div className="absolute bottom-5 left-6 md:left-10 z-20 hidden md:flex items-center gap-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={`strip-${current}`}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.35 }}
            >
              <span className="w-7 h-[2px] rounded-full" style={{ background: slide.accent }} />
              <span
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: `${slide.accent}bb` }}
              >
                {slide.eyebrow}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Orbit Softworks branding (bottom-right) ── */}
        <div className="absolute bottom-5 right-6 md:right-10 z-20 hidden md:flex items-center gap-2">
          <span
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: 'rgba(174,198,255,0.4)' }}
          >
            Orbit Softworks
          </span>
          <span className="w-1 h-1 rounded-full bg-[#aec6ff]/40" />
        </div>
      </div>
    </section>
  );
}
