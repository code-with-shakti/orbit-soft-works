import { useState, useEffect, useRef, useCallback } from 'react';
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
    headline: "We Don't Just Build Software.",
    highlight: 'We Engineer Your Growth.',
    sub: 'Precision-crafted digital solutions — from enterprise ERPs to high-performance mobile apps.',
    accent: '#aec6ff',
  },
  {
    image: imgMobileApp,
    headline: 'Android & iOS Apps.',
    highlight: 'Native Feel. Zero Compromise.',
    sub: 'Flutter & Kotlin apps that feel buttery smooth, look stunning, and perform at the highest level.',
    accent: '#77d2f4',
  },
  {
    image: imgCodeDev,
    headline: "Business & E-Commerce Websites.",
    highlight: "Beautiful. High-Converting. Fast.",
    sub: "High-performance websites and online stores built using React, Next.js, and Node.js. Tailored to convert visitors into customers.",
    accent: '#7bd0ff',
  },
  {
    image: imgEnterpriseCity,
    headline: "Custom ERP & CRM Solutions.",
    highlight: "Streamline Operations. Scale Fast.",
    sub: "Unified platforms integrating inventory, HR payroll, accounts, and lead tracking for local businesses, manufacturers, and gyms.",
    accent: '#aec6ff',
  },
  {
    image: imgDashboard,
    headline: "POS & Billing Software.",
    highlight: "Speedy Checkouts. GST Ready.",
    sub: "Reliable billing systems, barcode integration, inventory sync, and real-time sales reports built for local retail, pharmacies, and supermarkets.",
    accent: '#aec6ff',
  },
  {
    image: imgAiAutomation,
    headline: "SaaS & Automation Solutions.",
    highlight: "Intelligent Workflows. Passive Income.",
    sub: "WhatsApp automation, automated invoicing, and multi-tenant subscription software platforms built to scale your business recurring revenue.",
    accent: '#77d2f4',
  },
];

const INTERVAL = 3000;
const TRANSITION_DURATION = 0.65; // seconds — image crossfade

// Pre-defined particle positions so they don't shift on re-render
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

  // Set up interval that resets whenever the current slide changes
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
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: 'calc(100vh - 80px)' }}
    >
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
      <div className="absolute inset-0 z-[1] bg-[#0b1229]/50 pointer-events-none" />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 25%, rgba(11,18,41,0.72) 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-44 z-[3] pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0b1229 0%, transparent 100%)' }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-28 z-[3] pointer-events-none"
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
          style={{ background: `radial-gradient(ellipse 55% 45% at 50% 58%, ${slide.accent}16 0%, transparent 70%)` }}
        />
      </AnimatePresence>

      {/* ── Particles (stable positions, only color changes) ── */}
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
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: direction > 0 ? 36 : -36, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: direction > 0 ? -24 : 24, filter: 'blur(3px)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Headline */}
            <h1
              className="leading-[1.12] mb-4"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 800,
                color: '#ffffff',
                textShadow: '0 2px 32px rgba(0,0,0,0.55)',
              }}
            >
              {slide.headline}
              <br />
              <span
                style={{
                  background: `linear-gradient(135deg, ${slide.accent}, #77d2f4, ${slide.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {slide.highlight}
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="text-base md:text-lg max-w-xl mx-auto mb-7 leading-relaxed"
              style={{ color: 'rgba(220,225,255,0.82)' }}
            >
              {slide.sub}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <button
                  className="group relative px-7 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 overflow-hidden transition-transform duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: `linear-gradient(135deg, #1a6fe8, ${slide.accent}cc)`,
                    color: '#ffffff',
                    boxShadow: `0 0 28px ${slide.accent}38, 0 4px 18px rgba(0,0,0,0.28)`,
                  }}
                >
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-200 rounded-full" />
                </button>
              </Link>
              <Link to="/portfolio">
                <button
                  className="px-7 py-3.5 rounded-full font-bold text-sm backdrop-blur-md transition-transform duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: 'rgba(24,30,54,0.52)',
                    border: `1px solid ${slide.accent}48`,
                    color: '#ffffff',
                  }}
                >
                  View Our Work
                </button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Arrows ── */}
      {/* Left Arrow */}
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

      {/* Right Arrow */}
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
            className="relative h-[5px] rounded-full overflow-hidden transition-all duration-400"
            style={{
              width: i === current ? '34px' : '8px',
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
              {slide.headline.replace('.', '')}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
