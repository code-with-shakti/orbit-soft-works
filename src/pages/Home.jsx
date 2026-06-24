import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg';
import bentoWebDesignImg from '../assets/home/bento-web-design.jpg';
import { HeroSection } from '../components/ui/hero-section';
import SEO from '../components/SEO';

const Home = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <>
      <SEO 
        title="Best Software Company in Khandagiri, Bhubaneswar | Orbit Softworks" 
        description="Orbit Softworks (OrbitSoftworks) is the best software company in Khandagiri, Bhubaneswar. We build custom software, Android apps, ERP/POS systems, and business websites."
      />
      {/* ── SECTION 1: HERO ── */}
      <HeroSection />

      {/* ── SECTION 2: TECH TICKER ── */}
      <div className="bg-surface-container-lowest border-y border-outline-variant/10 py-6 overflow-hidden">
        <div className="marquee-track flex items-center gap-12 text-on-surface-variant/60 font-bold text-xl uppercase tracking-widest">
          <span>React.js · Next.js · Flutter · Node.js · AWS · MongoDB · ERP Systems · E-Commerce · AI Integration ·&nbsp;</span>
          <span>React.js · Next.js · Flutter · Node.js · AWS · MongoDB · ERP Systems · E-Commerce · AI Integration ·&nbsp;</span>
        </div>
      </div>

      {/* ── SECTION 3: SERVICES BENTO GRID ── */}
      <section ref={addRevealRef} className="reveal-on-scroll py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="font-label-xs text-primary bg-primary/10 px-4 py-1 rounded-full uppercase tracking-widest text-xs">Our Capabilities</span>
          <h2 className="font-bold text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}>Integrated Digital Solutions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 md:row-span-2 glass-card p-8 rounded-2xl flex flex-col justify-between group hover:border-primary/50 transition-all duration-500">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block">web</span>
              <h3 className="text-2xl text-on-surface mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Business Websites</h3>
              <p className="text-on-surface-variant">Conversion-focused digital storefronts for modern brands.</p>
            </div>
            <img
              alt="Web Design"
              className="rounded-xl mt-6 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              src={bentoWebDesignImg}
            />
          </div>

          <div className="md:col-span-2 glass-card p-8 rounded-2xl group hover:bg-surface-variant/20 transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">settings_suggest</span>
                <h3 className="text-2xl text-on-surface mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Custom Management</h3>
                <p className="text-on-surface-variant">Tailored software that fits your specific workflow perfectly.</p>
              </div>
              <div className="flex-1 w-full bg-surface-container p-4 rounded-lg border border-outline-variant/30">
                <div className="h-2 w-3/4 bg-primary/20 rounded-full mb-3" />
                <div className="h-2 w-1/2 bg-primary/10 rounded-full mb-3" />
                <div className="h-2 w-full bg-primary/5 rounded-full" />
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl group hover:scale-[1.02] transition-all">
            <span className="material-symbols-outlined text-4xl text-tertiary mb-4 block">smartphone</span>
            <h3 className="text-2xl text-on-surface mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Mobile Apps</h3>
            <p className="text-on-surface-variant">Native performance for Android &amp; iOS.</p>
          </div>

          <div className="md:col-span-2 glass-card p-8 rounded-2xl bg-gradient-to-br from-surface-container-high to-surface">
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: 'factory', label: 'ERP', color: 'text-primary', hover: 'hover:bg-primary/5' },
                { icon: 'groups', label: 'CRM', color: 'text-secondary', hover: 'hover:bg-secondary/5' },
                { icon: 'point_of_sale', label: 'POS', color: 'text-tertiary', hover: 'hover:bg-tertiary/5' },
              ].map(({ icon, label, color, hover }) => (
                <div key={label} className={`text-center p-4 border border-outline-variant/20 rounded-xl ${hover} transition-colors`}>
                  <span className={`material-symbols-outlined ${color} mb-2 block`}>{icon}</span>
                  <p className="text-xs font-bold uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>
            <h3 className="text-2xl text-on-surface mt-6 mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Integrated Enterprise Systems</h3>
            <p className="text-on-surface-variant">Unified platforms for billing, inventory, and operations.</p>
          </div>

          <div className="glass-card p-8 rounded-2xl flex flex-col justify-between">
            <span className="material-symbols-outlined text-4xl text-on-primary-container mb-4 block">auto_awesome</span>
            <h3 className="text-2xl text-on-surface mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Automation</h3>
            <p className="text-on-surface-variant">Eliminate repetitive tasks with intelligent workflows.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHY ORBIT ── */}
      <section ref={addRevealRef} className="reveal-on-scroll relative overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="bg-surface py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-end">
            <div className="max-w-md w-full">
              <h2 className="text-on-surface mb-8" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700 }}>Why Leading Businesses Choose Orbit Softworks.</h2>
              <div className="flex items-center gap-4 text-primary">
                <span className="w-12 h-[1px] bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">Excellence By Default</span>
              </div>
            </div>
          </div>
          <div className="bg-on-surface py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-start text-surface">
            <div className="max-w-md w-full space-y-8">
              {[
                { n: '01', title: 'Rapid Delivery', desc: 'Our agile methodology ensures your MVP is ready in record time without compromising quality.' },
                { n: '02', title: 'Security-First', desc: 'Enterprise-grade encryption and data protection protocols built into every line of code.' },
                { n: '03', title: '100% Custom', desc: 'No cookie-cutter templates. Every solution is architected from scratch for your needs.' },
              ].map(({ n, title, desc }) => (
                <div key={n} className="group cursor-default">
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-extrabold text-surface/10 group-hover:text-primary transition-colors duration-500" style={{ fontFamily: 'Sora, sans-serif' }}>{n}</span>
                    <div>
                      <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>{title}</h4>
                      <p className="text-surface/70">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: INDUSTRIES TICKER ── */}
      <section ref={addRevealRef} className="reveal-on-scroll py-20 overflow-hidden bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700 }}>Software for Every Sector</h2>
        </div>
        <div className="marquee-track flex gap-8 px-4 sm:px-6 lg:px-8" style={{ animationDuration: '30s' }}>
          {[
            { icon: 'precision_manufacturing', label: 'Manufacturers', color: 'text-primary', bg: 'bg-primary/20' },
            { icon: 'fitness_center', label: 'Gyms & Fitness', color: 'text-secondary', bg: 'bg-secondary/20' },
            { icon: 'school', label: 'Schools', color: 'text-tertiary', bg: 'bg-tertiary/20' },
            { icon: 'restaurant', label: 'Restaurants', color: 'text-primary', bg: 'bg-primary/20' },
            { icon: 'medical_services', label: 'Clinics', color: 'text-secondary', bg: 'bg-secondary/20' },
            { icon: 'storefront', label: 'Local Shops', color: 'text-tertiary', bg: 'bg-tertiary/20' },
            { icon: 'inventory', label: 'Wholesalers', color: 'text-primary', bg: 'bg-primary/20' },
            { icon: 'local_shipping', label: 'Logistics', color: 'text-secondary', bg: 'bg-secondary/20' },
            { icon: 'precision_manufacturing', label: 'Manufacturers', color: 'text-primary', bg: 'bg-primary/20' },
            { icon: 'fitness_center', label: 'Gyms & Fitness', color: 'text-secondary', bg: 'bg-secondary/20' },
            { icon: 'school', label: 'Schools', color: 'text-tertiary', bg: 'bg-tertiary/20' },
            { icon: 'restaurant', label: 'Restaurants', color: 'text-primary', bg: 'bg-primary/20' },
            { icon: 'medical_services', label: 'Clinics', color: 'text-secondary', bg: 'bg-secondary/20' },
            { icon: 'storefront', label: 'Local Shops', color: 'text-tertiary', bg: 'bg-tertiary/20' },
            { icon: 'inventory', label: 'Wholesalers', color: 'text-primary', bg: 'bg-primary/20' },
            { icon: 'local_shipping', label: 'Logistics', color: 'text-secondary', bg: 'bg-secondary/20' },
          ].map(({ icon, label, color, bg }, i) => (
            <div key={i} className="w-[220px] flex-shrink-0 glass-card p-6 rounded-2xl text-center group cursor-pointer hover:bg-primary/10 transition-colors">
              <div className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <span className={`material-symbols-outlined text-3xl ${color}`}>{icon}</span>
              </div>
              <h4 className="text-lg font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>{label}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: ORBITAL PROCESS ── */}
      <section ref={addRevealRef} className="reveal-on-scroll py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700 }}>Our Orbital Process</h2>
          <p className="text-on-surface-variant">How we take your idea from concept to countdown.</p>
        </div>
        <div className="relative">
          <svg className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none hidden md:block" fill="none" viewBox="0 0 1200 400">
            <path d="M50 200C250 50 450 350 600 200C750 50 950 350 1150 200" stroke="url(#paint0_linear)" strokeDasharray="10 10" strokeWidth="4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="50" x2="1150" y1="200" y2="200">
                <stop stopColor="#aec6ff" />
                <stop offset="1" stopColor="#77d2f4" />
              </linearGradient>
            </defs>
          </svg>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep dive into your business needs.' },
              { step: '02', title: 'Proposal', desc: 'Transparent roadmaps and pricing.', mt: true },
              { step: '03', title: 'UI/UX', desc: 'Crafting immersive experiences.' },
              { step: '04', title: 'Agile Dev', desc: 'Rapid sprints and iterations.', mt: true },
              { step: '05', title: 'Launch', desc: 'Deployment and scaling support.' },
            ].map(({ step, title, desc, mt }) => (
              <div key={step} className={`text-center group ${mt ? 'md:mt-20' : ''}`}>
                <div className="w-16 h-16 bg-surface-container-high rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-6 group-hover:border-primary transition-all">
                  <span className="font-bold text-primary" style={{ fontFamily: 'DM Sans, sans-serif' }}>{step}</span>
                </div>
                <h5 className="text-lg mb-2 font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>{title}</h5>
                <p className="text-on-surface-variant text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: STATS ── */}
      <section ref={addRevealRef} className="reveal-on-scroll bg-primary-container text-on-primary-container py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '12+', label: 'Projects Completed' },
            { value: '100%', label: 'On-Time Delivery' },
            { value: '6 wks', label: 'Avg Shipping Time' },
            { value: '4+', label: 'Industries Served' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-extrabold opacity-90 mb-2" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>{value}</p>
              <p className="text-xs font-bold uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 8: CTA BANNER ── */}
      <section ref={addRevealRef} className="reveal-on-scroll max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary-container to-tertiary-container rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent)]" />

          {/* Brand logo in CTA */}
          <div className="relative z-10 flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-on-primary-container/20">
              <img src={logoImg} alt="Orbit icon" className="w-full h-full object-cover" />
            </div>
          </div>

          <h2 className="relative z-10 text-on-primary-container mb-8" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 800 }}>
            Ready to Build Something Great?
          </h2>
          <p className="relative z-10 text-on-primary-container/80 max-w-2xl mx-auto mb-12 text-lg">
            Our team of expert engineers and designers are ready to help you navigate the digital landscape. Let's launch your next big idea together.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact">
              <button className="bg-on-primary-container text-primary-container px-10 py-5 rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-xl">
                Schedule a Consultation
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="border-2 border-on-primary-container text-on-primary-container px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
                Our Case Studies
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
