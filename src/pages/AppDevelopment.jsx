import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HeroEntranceStagger, HeroItem } from '../components/ui/hero-entrance';
import SEO from '../components/SEO';

const AppDevelopment = () => {
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
        title="Android App Development Company in Bhubaneswar | Orbit Softworks" 
        description="Looking for an Android app development company in Bhubaneswar? Orbit Softworks builds high-performance native apps and cross-platform mobile solutions."
      />
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex flex-col items-center justify-center overflow-hidden bg-surface-container-lowest">
        <HeroEntranceStagger className="relative z-10 text-center max-w-4xl px-4">
          <HeroItem>
            <h1 className="text-on-surface leading-tight mb-6" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
              Premium <span className="text-tertiary">Mobile App Development</span>
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg mb-8">
              We design and develop fast, secure, and user-friendly Android & iOS applications for businesses in Bhubaneswar.
            </p>
          </HeroItem>
        </HeroEntranceStagger>
      </section>

      {/* Details Section */}
      <section ref={addRevealRef} className="reveal-on-scroll py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="glass-card p-12 rounded-[2rem] bg-surface-container">
           <h2 className="text-3xl font-bold mb-6 text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif' }}>
             Engage Users on the Go
           </h2>
           <p className="text-on-surface-variant mb-6 text-lg">
             Reach your audience wherever they are. We utilize Flutter, React Native, and native Kotlin to deliver apps with buttery-smooth performance and incredible UI/UX.
           </p>
           <ul className="space-y-4 mb-8">
             <li className="flex items-center gap-3 text-on-surface-variant">
               <span className="material-symbols-outlined text-tertiary">check_circle</span>
               <span>Android & iOS Mobile Apps</span>
             </li>
             <li className="flex items-center gap-3 text-on-surface-variant">
               <span className="material-symbols-outlined text-tertiary">check_circle</span>
               <span>Delivery Apps, Staff Trackers & Booking Systems</span>
             </li>
             <li className="flex items-center gap-3 text-on-surface-variant">
               <span className="material-symbols-outlined text-tertiary">check_circle</span>
               <span>Cross-Platform Solutions</span>
             </li>
           </ul>
           <Link to="/contact">
             <button className="bg-tertiary text-on-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg">
               Start Your Project
             </button>
           </Link>
         </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
