import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HeroEntranceStagger, HeroItem } from '../components/ui/hero-entrance';
import SEO from '../components/SEO';

const DigitalMarketing = () => {
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
        title="Digital Marketing Company in Bhubaneswar | SEO Services - Orbit Softworks" 
        description="Drive more leads with Orbit Softworks, the leading digital marketing company in Bhubaneswar. We provide expert SEO, local SEO, and performance marketing."
      />
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex flex-col items-center justify-center overflow-hidden bg-surface-container-lowest">
        <HeroEntranceStagger className="relative z-10 text-center max-w-4xl px-4">
          <HeroItem>
            <h1 className="text-on-surface leading-tight mb-6" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
              Data-Driven <span className="text-primary">Digital Marketing</span>
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg mb-8">
              Turn your website into a lead generation machine. We specialize in Local SEO for Bhubaneswar businesses, content strategy, and search engine optimization.
            </p>
          </HeroItem>
        </HeroEntranceStagger>
      </section>

      {/* Details Section */}
      <section ref={addRevealRef} className="reveal-on-scroll py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="glass-card p-12 rounded-[2rem] bg-surface-container">
           <h2 className="text-3xl font-bold mb-6 text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif' }}>
             Rank Higher, Grow Faster
           </h2>
           <p className="text-on-surface-variant mb-6 text-lg">
             Building software is only half the battle. Our digital marketing strategies ensure that your business is easily discoverable by customers in Khandagiri, Saheed Nagar, and across Odisha.
           </p>
           <ul className="space-y-4 mb-8">
             <li className="flex items-center gap-3 text-on-surface-variant">
               <span className="material-symbols-outlined text-primary">check_circle</span>
               <span>Search Engine Optimization (SEO)</span>
             </li>
             <li className="flex items-center gap-3 text-on-surface-variant">
               <span className="material-symbols-outlined text-primary">check_circle</span>
               <span>Local SEO (Google Business Profile)</span>
             </li>
             <li className="flex items-center gap-3 text-on-surface-variant">
               <span className="material-symbols-outlined text-primary">check_circle</span>
               <span>Performance & Content Marketing</span>
             </li>
           </ul>
           <Link to="/contact">
             <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg">
               Start Your Campaign
             </button>
           </Link>
         </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
