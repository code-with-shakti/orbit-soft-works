import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HeroEntranceStagger, HeroItem } from '../components/ui/hero-entrance';
import SEO from '../components/SEO';

const CustomSoftware = () => {
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
    <div className="relative w-full">
      <SEO 
        title="Custom Software Development Company in Bhubaneswar | Orbit Softworks" 
        description="Looking for a custom software development company in Bhubaneswar? Orbit Softworks builds scalable and secure custom management systems, dashboards, and SaaS platforms."
      />
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex flex-col items-center justify-center overflow-hidden bg-surface-container-lowest">
        <HeroEntranceStagger className="relative z-10 text-center max-w-4xl px-4">
          <HeroItem>
            <h1 className="text-on-surface leading-tight mb-6" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
              Tailor-Made <span className="text-secondary">Custom Software</span>
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg mb-8">
              Off-the-shelf software doesn't fit every workflow. We build custom management systems, SaaS applications, and administrative dashboards that fit your business perfectly.
            </p>
          </HeroItem>
        </HeroEntranceStagger>
      </section>

      {/* Details Section */}
      <section ref={addRevealRef} className="reveal-on-scroll py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="glass-card p-12 rounded-[2rem] bg-surface-container">
           <h2 className="text-3xl font-bold mb-6 text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif' }}>
             Transform Your Operations
           </h2>
           <p className="text-on-surface-variant mb-6 text-lg">
             We architect solutions from scratch using robust technologies like Node.js, Express, and PostgreSQL to ensure absolute security and high performance.
           </p>
           <ul className="space-y-4 mb-8">
             <li className="flex items-center gap-3 text-on-surface-variant">
               <span className="material-symbols-outlined text-secondary">check_circle</span>
               <span>Custom Management Systems & Workflows</span>
             </li>
             <li className="flex items-center gap-3 text-on-surface-variant">
               <span className="material-symbols-outlined text-secondary">check_circle</span>
               <span>Internal Admin & Analytics Dashboards</span>
             </li>
             <li className="flex items-center gap-3 text-on-surface-variant">
               <span className="material-symbols-outlined text-secondary">check_circle</span>
               <span>Cloud-Native SaaS Product Development</span>
             </li>
           </ul>
           <Link to="/contact">
             <button className="bg-secondary text-on-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg">
               Start Your Project
             </button>
           </Link>
         </div>
      </section>
    </div>
  );
};

export default CustomSoftware;
