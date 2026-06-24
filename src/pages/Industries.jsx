import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HeroEntranceStagger, HeroItem } from '../components/ui/hero-entrance';
import SEO from '../components/SEO';

// ── Local industries images ──
import heroGridMainImg        from '../assets/industries/hero-grid-main.jpg';
import heroGridTopRightImg    from '../assets/industries/hero-grid-top-right.jpg';
import heroGridBottomRightImg from '../assets/industries/hero-grid-bottom-right.jpg';
import ind01ManufacturingImg  from '../assets/industries/ind-01-manufacturing.jpg';
import ind02SchoolsImg        from '../assets/industries/ind-02-schools.jpg';
import ind03RestaurantsImg    from '../assets/industries/ind-03-restaurants.jpg';
import ind04ClinicsImg        from '../assets/industries/ind-04-clinics.jpg';
import ind05RetailImg         from '../assets/industries/ind-05-retail.jpg';
import ind06LogisticsImg      from '../assets/industries/ind-06-logistics.jpg';
import ind07GymsImg           from '../assets/industries/ind-07-gyms.jpg';

const Industries = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
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
        title="Target Industries | Custom Domain Infrastructure - Orbit Softworks" 
        description="Orbit Softworks builds specialized custom software solutions for Manufacturing, Schools, Restaurants, Clinics, Retail, Logistics, Gyms, and Wholesale industries in Bhubaneswar."
      />
      {/* Hero Section */}
      <section className="relative h-[716px] w-full flex items-center overflow-hidden bg-surface-container-lowest">
        {/* Background Orbital Effects */}
        <div className="orbital-ring w-[600px] h-[600px] -top-20 -left-20 animate-orbit"></div>
        <div className="orbital-ring w-[800px] h-[800px] -bottom-40 -right-20 animate-orbit" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute inset-0 nebula-glow pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-grid-margin w-full grid grid-cols-1 md:grid-cols-2 items-center gap-grid-gutter z-10">
          <HeroEntranceStagger className="space-y-stack-md">
            <HeroItem>
              <span className="text-primary font-label-xs text-label-xs uppercase tracking-widest block">Vertical Excellence</span>
            </HeroItem>
            <HeroItem>
              <h1 className="text-on-surface leading-tight" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
                Specialized Solutions for Every <span className="text-primary">Industry.</span>
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-lg">
                We transcend generic software. Our engineers build deep-domain infrastructure tailored to the specific operational demands of your sector.
              </p>
            </HeroItem>
          </HeroEntranceStagger>
          <div className="hidden md:grid grid-cols-3 gap-4 h-[400px]">
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-2xl border border-outline-variant/30">
              <img className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700" src={heroGridMainImg} />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-outline-variant/30">
              <img className="w-full h-full object-cover" src={heroGridTopRightImg} />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-outline-variant/30">
              <img className="w-full h-full object-cover" src={heroGridBottomRightImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <div className="w-full bg-surface">
        {/* 01 Manufacturing */}
        <section ref={addRevealRef} className="reveal-on-scroll min-h-screen py-section-v-desktop flex items-center border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 aspect-video md:aspect-square">
                <img className="w-full h-full object-cover" src={ind01ManufacturingImg} />
              </div>
            </div>
            <div className="space-y-stack-lg">
              <div className="flex items-center gap-4">
                <span className="text-primary text-6xl" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}>01</span>
                <h2 className="text-[40px] text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Manufacturing</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Real-time IoT Supply Chain Integration</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Predictive Maintenance AI Algorithms</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Automated Inventory Optimization</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Digital Twin Factory Simulations</span></li>
              </ul>
              <div className="glass-card p-6 rounded-xl inline-block border-l-4 border-l-primary">
                <div className="text-primary font-bold text-3xl">40%</div>
                <div className="text-on-surface-variant text-body-md mt-2">Increase in operational efficiency for global partners.</div>
              </div>
              <div className="pt-4">
                <Link to="/contact">
                  <button className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all font-bold">Explore This Solution</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 02 Schools */}
        <section ref={addRevealRef} className="reveal-on-scroll min-h-screen py-section-v-desktop flex items-center bg-surface-container-low border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1 space-y-stack-lg">
              <div className="flex items-center gap-4">
                <span className="text-tertiary text-6xl" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}>02</span>
                <h2 className="text-[40px] text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Schools</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Next-Gen Learning Management Systems</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Secure Multi-Campus Data Architecture</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Automated Administrative Workflows</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Real-time Student Progress Dashboards</span></li>
              </ul>
              <div className="glass-card p-6 rounded-xl inline-block border-l-4 border-l-tertiary">
                <div className="text-tertiary font-bold text-3xl">150k+</div>
                <div className="text-on-surface-variant text-body-md mt-2">Active students supported by Orbit infrastructure.</div>
              </div>
              <div className="pt-4">
                <Link to="/contact">
                  <button className="px-8 py-3 rounded-full border border-tertiary text-tertiary hover:bg-tertiary/10 transition-all font-bold">Explore This Solution</button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-tertiary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 aspect-video md:aspect-square">
                <img className="w-full h-full object-cover" src={ind02SchoolsImg} />
              </div>
            </div>
          </div>
        </section>

        {/* 03 Restaurants */}
        <section ref={addRevealRef} className="reveal-on-scroll min-h-screen py-section-v-desktop flex items-center border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 aspect-video md:aspect-square">
                <img className="w-full h-full object-cover" src={ind03RestaurantsImg} />
              </div>
            </div>
            <div className="space-y-stack-lg">
              <div className="flex items-center gap-4">
                <span className="text-primary text-6xl" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}>03</span>
                <h2 className="text-[40px] text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Restaurants</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Omnichannel Order Processing Engines</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">AI-Driven Peak Hour Forecasting</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Unified Multi-Platform Delivery Sync</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Advanced Staff Performance Analytics</span></li>
              </ul>
              <div className="glass-card p-6 rounded-xl inline-block border-l-4 border-l-primary">
                <div className="text-primary font-bold text-3xl">2.5x</div>
                <div className="text-on-surface-variant text-body-md mt-2">Average increase in kitchen throughput speed.</div>
              </div>
              <div className="pt-4">
                <Link to="/contact">
                  <button className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all font-bold">Explore This Solution</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 04 Clinics */}
        <section ref={addRevealRef} className="reveal-on-scroll min-h-screen py-section-v-desktop flex items-center bg-surface-container-low border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1 space-y-stack-lg">
              <div className="flex items-center gap-4">
                <span className="text-tertiary text-6xl" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}>04</span>
                <h2 className="text-[40px] text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Clinics</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">HIPAA-Compliant Patient Portals</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Tele-health Integrated Video Core</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Automated Insurance Billing Logic</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Smart Prescription Management Systems</span></li>
              </ul>
              <div className="glass-card p-6 rounded-xl inline-block border-l-4 border-l-tertiary">
                <div className="text-tertiary font-bold text-3xl">99.9%</div>
                <div className="text-on-surface-variant text-body-md mt-2">Data security compliance and system uptime.</div>
              </div>
              <div className="pt-4">
                <Link to="/contact">
                  <button className="px-8 py-3 rounded-full border border-tertiary text-tertiary hover:bg-tertiary/10 transition-all font-bold">Explore This Solution</button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-tertiary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 aspect-video md:aspect-square">
                <img className="w-full h-full object-cover" src={ind04ClinicsImg} />
              </div>
            </div>
          </div>
        </section>

        {/* 05 Retail */}
        <section ref={addRevealRef} className="reveal-on-scroll min-h-screen py-section-v-desktop flex items-center border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 aspect-video md:aspect-square">
                <img className="w-full h-full object-cover" src={ind05RetailImg} />
              </div>
            </div>
            <div className="space-y-stack-lg">
              <div className="flex items-center gap-4">
                <span className="text-primary text-6xl" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}>05</span>
                <h2 className="text-[40px] text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Retail</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Hyper-personalized Customer Journey Engines</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Seamless POS & E-commerce Bridges</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">AI Inventory Replenishment Forecasts</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Interactive In-Store Digital Signage</span></li>
              </ul>
              <div className="glass-card p-6 rounded-xl inline-block border-l-4 border-l-primary">
                <div className="text-primary font-bold text-3xl">35%</div>
                <div className="text-on-surface-variant text-body-md mt-2">Conversion rate increase for flagship retail clients.</div>
              </div>
              <div className="pt-4">
                <Link to="/contact">
                  <button className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all font-bold">Explore This Solution</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 06 Logistics */}
        <section ref={addRevealRef} className="reveal-on-scroll min-h-screen py-section-v-desktop flex items-center bg-surface-container-low border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1 space-y-stack-lg">
              <div className="flex items-center gap-4">
                <span className="text-tertiary text-6xl" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}>06</span>
                <h2 className="text-[40px] text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Logistics</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Global Fleet Real-time GPS Telematics</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Dynamic Route Optimization Engines</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Blockchain-based Proof of Delivery</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Automated Customs Filing Architecture</span></li>
              </ul>
              <div className="glass-card p-6 rounded-xl inline-block border-l-4 border-l-tertiary">
                <div className="text-tertiary font-bold text-3xl">22%</div>
                <div className="text-on-surface-variant text-body-md mt-2">Reduction in fuel costs via AI route steering.</div>
              </div>
              <div className="pt-4">
                <Link to="/contact">
                  <button className="px-8 py-3 rounded-full border border-tertiary text-tertiary hover:bg-tertiary/10 transition-all font-bold">Explore This Solution</button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-tertiary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 aspect-video md:aspect-square">
                <img className="w-full h-full object-cover" src={ind06LogisticsImg} />
              </div>
            </div>
          </div>
        </section>

        {/* 07 Gyms & Wellness */}
        <section ref={addRevealRef} className="reveal-on-scroll min-h-screen py-section-v-desktop flex items-center border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 aspect-video md:aspect-square">
                <img className="w-full h-full object-cover" src={ind07GymsImg} />
              </div>
            </div>
            <div className="space-y-stack-lg">
              <div className="flex items-center gap-4">
                <span className="text-primary text-6xl" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}>07</span>
                <h2 className="text-[40px] text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Gyms & Wellness</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">IoT Fitness Equipment Integration</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Predictive Churn Prevention AI</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Automated Billing & Membership Core</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Custom White-Label Mobile Athlete Apps</span></li>
              </ul>
              <div className="glass-card p-6 rounded-xl inline-block border-l-4 border-l-primary">
                <div className="text-primary font-bold text-3xl">500k+</div>
                <div className="text-on-surface-variant text-body-md mt-2">Daily workout logs managed through our cloud.</div>
              </div>
              <div className="pt-4">
                <Link to="/contact">
                  <button className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all font-bold">Explore This Solution</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 08 Wholesalers */}
        <section ref={addRevealRef} className="reveal-on-scroll min-h-screen py-section-v-desktop flex items-center bg-surface-container-low border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1 space-y-stack-lg">
              <div className="flex items-center gap-4">
                <span className="text-tertiary text-6xl" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}>08</span>
                <h2 className="text-[40px] text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Wholesalers</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Bulk Invoice & GST Billing Engine</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Multi-Warehouse Stock Synchronization</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">B2B Custom Pricing Tiers Portal</span></li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tertiary mt-1">check_circle</span><span className="text-on-surface-variant text-lg">Automated Dealer Purchase Ordering</span></li>
              </ul>
              <div className="glass-card p-6 rounded-xl inline-block border-l-4 border-l-tertiary">
                <div className="text-tertiary font-bold text-3xl">30%</div>
                <div className="text-on-surface-variant text-body-md mt-2">Reduction in order fulfillment turnaround times.</div>
              </div>
              <div className="pt-4">
                <Link to="/contact">
                  <button className="px-8 py-3 rounded-full border border-tertiary text-tertiary hover:bg-tertiary/10 transition-all font-bold">Explore This Solution</button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-tertiary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 aspect-video md:aspect-square">
                <img className="w-full h-full object-cover" src={ind06LogisticsImg} />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section ref={addRevealRef} className="reveal-on-scroll py-section-v-desktop bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 nebula-glow pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-grid-margin text-center relative z-10 space-y-stack-lg">
          <h2 className="text-on-surface" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}>Ready to Scale Your Domain?</h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg">Connect with our industry architects to build software that creates a lasting competitive advantage.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <button className="bg-primary text-on-primary font-bold py-4 px-10 rounded-full text-body-lg hover:scale-105 transition-all shadow-xl shadow-primary/20">Consult With An Expert</button>
            </Link>
            <Link to="/portfolio">
              <button className="text-on-surface border border-outline-variant/30 py-4 px-10 rounded-full text-body-lg hover:bg-surface-variant transition-all">View Portfolio</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;