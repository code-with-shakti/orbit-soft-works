import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HeroEntranceStagger, HeroItem } from '../components/ui/hero-entrance';
import SEO from '../components/SEO';

// ── Local service images ──
import svcWebsitesImg    from '../assets/services/service-01-websites.jpg';
import svcCustomMgmtImg  from '../assets/services/service-02-custom-mgmt.jpg';
import svcErpImg         from '../assets/services/service-03-erp.jpg';
import svcCrmImg         from '../assets/services/service-04-crm.jpg';
import svcPosImg         from '../assets/services/service-05-pos.jpg';
import svcAndroidImg     from '../assets/services/service-06-android.jpg';
import svcEcommerceImg   from '../assets/services/service-07-ecommerce.jpg';
import svcDashboardsImg  from '../assets/services/service-08-dashboards.jpg';
import svcSaasImg        from '../assets/services/service-09-saas.jpg';
import svcAutomationImg  from '../assets/services/service-10-automation.jpg';

const Services = () => {
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
    <div className="relative">
      <SEO 
        title="Our Services | Custom Software, ERP, CRM & Web Development - Orbit Softworks" 
        description="Orbit Softworks offers Custom Software Development, Website Development, Android Apps, ERP, CRM, and Digital Marketing services in Bhubaneswar."
      />
      {/* Hero Section */}
      <section className="relative min-h-[614px] flex flex-col items-center justify-center overflow-hidden px-grid-margin">
        {/* Background Orbit Ring */}
        <div className="orbital-ring w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit"></div>
        <div className="orbital-ring w-[1200px] h-[1200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '60s' }}></div>
        
        <HeroEntranceStagger className="relative z-10 text-center max-w-4xl">
          <HeroItem>
            <h1 className="text-on-surface leading-tight mb-8" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
              Software Solutions Built for <span className="text-primary">Real Business.</span>
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              From simple web presences to complex enterprise ecosystems, we engineer software that drives operational excellence and measurable growth.
            </p>
          </HeroItem>
        </HeroEntranceStagger>
        
        {/* Decorative Ambient Light */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-primary/10 to-transparent blur-3xl pointer-events-none"></div>
      </section>

      {/* Services Detail Grid */}
      <section ref={addRevealRef} className="reveal-on-scroll py-section-v-desktop max-w-7xl mx-auto px-grid-margin">
        <div className="space-y-[120px]">
          
          {/* Service 1: Business Websites */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter items-center">
            <div className="order-2 md:order-1 space-y-stack-md">
              <span className="inline-block bg-primary/15 text-primary px-3 py-1 rounded-full font-label-xs text-label-xs tracking-widest">WEB PRESENCE</span>
              <h2 className="text-[40px] text-on-surface leading-tight" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Business Websites 🌐</h2>
              <p className="text-on-surface-variant text-body-md">High-performance corporate sites, portfolios, landing pages, and websites for schools, restaurants, and manufacturers. Built for speed, premium animations, and search ranking.</p>
              <ul className="space-y-2 text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Company, Restaurant & School Sites</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> SEO Optimization & Landing Pages</li>
              </ul>
              <div className="flex flex-wrap gap-2 py-4">
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">React</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Next.js</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Node.js</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Price: ₹10k – ₹1L+</span>
              </div>
              <Link to="/services/web-development">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(174,198,255,0.4)] transition-all">Learn More</button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="glass-card rounded-2xl overflow-hidden aspect-[16/10] group">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={svcWebsitesImg} />
              </div>
            </div>
          </div>

          {/* Service 2: Custom Mgmt */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter items-center">
            <div className="order-1">
              <div className="glass-card rounded-2xl overflow-hidden aspect-[16/10] group">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={svcCustomMgmtImg} />
              </div>
            </div>
            <div className="order-2 space-y-stack-md md:pl-12">
              <span className="inline-block bg-tertiary/15 text-tertiary px-3 py-1 rounded-full font-label-xs text-label-xs tracking-widest">OPERATIONS</span>
              <h2 className="text-[40px] text-on-surface leading-tight" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Custom Management Systems 🏢</h2>
              <p className="text-on-surface-variant text-body-md">Tailored internal workflows and systems to run local businesses smoothly. Easiest tools to sell locally to automate repetitive team tracking.</p>
              <ul className="space-y-2 text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span> Employee & Attendance Management</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span> Inventory, Invoices & Customer Management</li>
              </ul>
              <div className="flex flex-wrap gap-2 py-4">
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Node.js</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Express</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">PostgreSQL</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Billing Software</span>
              </div>
              <Link to="/services/custom-software">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(174,198,255,0.4)] transition-all">Learn More</button>
              </Link>
            </div>
          </div>

          {/* Service 3: ERP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter items-center">
            <div className="order-2 md:order-1 space-y-stack-md">
              <span className="inline-block bg-primary/15 text-primary px-3 py-1 rounded-full font-label-xs text-label-xs tracking-widest">ENTERPRISE</span>
              <h2 className="text-[40px] text-on-surface leading-tight" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>ERP Solutions 📊</h2>
              <p className="text-on-surface-variant text-body-md">Modular enterprise resource planning suites designed for manufacturing plants, wholesale suppliers, and medium-sized local businesses.</p>
              <ul className="space-y-2 text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Inventory, HR Payroll & Accounts modules</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Production tracking, Sales, Purchases & Reports</li>
              </ul>
              <div className="flex flex-wrap gap-2 py-4">
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">React</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Node.js</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">PostgreSQL</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">AWS Cloud</span>
              </div>
              <Link to="/services/erp-pos-crm">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(174,198,255,0.4)] transition-all">Learn More</button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="glass-card rounded-2xl overflow-hidden aspect-[16/10] group">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={svcErpImg} />
              </div>
            </div>
          </div>

          {/* Service 4: CRM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter items-center">
            <div className="order-1">
              <div className="glass-card rounded-2xl overflow-hidden aspect-[16/10] group">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={svcCrmImg} />
              </div>
            </div>
            <div className="order-2 space-y-stack-md md:pl-12">
              <span className="inline-block bg-secondary/15 text-secondary px-3 py-1 rounded-full font-label-xs text-label-xs tracking-widest">SALES</span>
              <h2 className="text-[40px] text-on-surface leading-tight" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>CRM Software 👥</h2>
              <p className="text-on-surface-variant text-body-md">Robust customer relationship management systems built to track leads, manage conversations, and secure customer loyalty.</p>
              <ul className="space-y-2 text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> Lead Tracking, Sales Pipelines & Follow-ups</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> WhatsApp API & Email Tracking Integration</li>
              </ul>
              <div className="flex flex-wrap gap-2 py-4">
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">GraphQL</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Node.js</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">MongoDB</span>
              </div>
              <Link to="/services/erp-pos-crm">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(174,198,255,0.4)] transition-all">Learn More</button>
              </Link>
            </div>
          </div>

          {/* Service 5: POS & Billing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter items-center">
            <div className="order-2 md:order-1 space-y-stack-md">
              <span className="inline-block bg-tertiary/15 text-tertiary px-3 py-1 rounded-full font-label-xs text-label-xs tracking-widest">RETAIL</span>
              <h2 className="text-[40px] text-on-surface leading-tight" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>POS & Billing Software 🧾</h2>
              <p className="text-on-surface-variant text-body-md">Speedy point of sale software for local shops, supermarkets, pharmacies, and restaurants. Features lightning-fast checkout flows.</p>
              <ul className="space-y-2 text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span> Fast Billing, Barcodes & GST Invoicing</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span> Real-Time Stock, Inventory & Sales Reports</li>
              </ul>
              <div className="flex flex-wrap gap-2 py-4">
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">React</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">SQLite</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Electron</span>
              </div>
              <Link to="/services/erp-pos-crm">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(174,198,255,0.4)] transition-all">Learn More</button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="glass-card rounded-2xl overflow-hidden aspect-[16/10] group">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={svcPosImg} />
              </div>
            </div>
          </div>

          {/* Service 6: Android Apps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter items-center">
            <div className="order-1">
              <div className="glass-card rounded-2xl overflow-hidden aspect-[16/10] group">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={svcAndroidImg} />
              </div>
            </div>
            <div className="order-2 space-y-stack-md md:pl-12">
              <span className="inline-block bg-primary/15 text-primary px-3 py-1 rounded-full font-label-xs text-label-xs tracking-widest">MOBILE</span>
              <h2 className="text-[40px] text-on-surface leading-tight" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Android Applications 📱</h2>
              <p className="text-on-surface-variant text-body-md">Custom mobile applications for local businesses looking to build customer engagement or automate mobile field staff operations.</p>
              <ul className="space-y-2 text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Delivery Apps, Staff Trackers & Booking Apps</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> White-Label Dashboards, React Native & Flutter</li>
              </ul>
              <Link to="/services/app-development">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(174,198,255,0.4)] transition-all">Learn More</button>
              </Link>
            </div>
          </div>

          {/* Service 7: E-Commerce */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter items-center">
            <div className="order-2 md:order-1 space-y-stack-md">
              <span className="inline-block bg-secondary/15 text-secondary px-3 py-1 rounded-full font-label-xs text-label-xs tracking-widest">COMMERCE</span>
              <h2 className="text-[40px] text-on-surface leading-tight" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>E-Commerce Websites 🛒</h2>
              <p className="text-on-surface-variant text-body-md">Complete online shopping systems for local stores and emerging brands looking to sell directly to consumers.</p>
              <ul className="space-y-2 text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> Dynamic Product Catalog & Orders</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> Payment Gateway & Admin Panel Management</li>
              </ul>
              <div className="flex flex-wrap gap-2 py-4">
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Next.js</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Node.js</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Stripe / Razorpay</span>
              </div>
              <Link to="/services/web-development">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold transition-all">Learn More</button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="glass-card rounded-2xl overflow-hidden aspect-[16/10] group">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={svcEcommerceImg} />
              </div>
            </div>
          </div>

          {/* Service 8: Dashboards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter items-center">
            <div className="order-1">
              <div className="glass-card rounded-2xl overflow-hidden aspect-[16/10] group">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={svcDashboardsImg} />
              </div>
            </div>
            <div className="order-2 space-y-stack-md md:pl-12">
              <span className="inline-block bg-tertiary/15 text-tertiary px-3 py-1 rounded-full font-label-xs text-label-xs tracking-widest">DATA</span>
              <h2 className="text-[40px] text-on-surface leading-tight" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Admin Dashboards 📈</h2>
              <p className="text-on-surface-variant text-body-md">Visualize business operations and performance metrics in real-time. Make smart data-driven decisions instantly.</p>
              <ul className="space-y-2 text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span> Analytics, Charts & Custom PDF Reports</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span> Operations Monitoring & Sales Metrics</li>
              </ul>
              <div className="flex flex-wrap gap-2 py-4">
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">React</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Tailwind CSS</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Chart.js</span>
              </div>
              <Link to="/services/custom-software">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold transition-all">Learn More</button>
              </Link>
            </div>
          </div>

          {/* Service 9: SaaS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter items-center">
            <div className="order-2 md:order-1 space-y-stack-md">
              <span className="inline-block bg-primary/15 text-primary px-3 py-1 rounded-full font-label-xs text-label-xs tracking-widest">PRODUCT</span>
              <h2 className="text-[40px] text-on-surface leading-tight" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>SaaS Products ☁️</h2>
              <p className="text-on-surface-variant text-body-md">Build multi-tenant cloud software once and sell recurring subscriptions. Highly scalable recurring income streams.</p>
              <ul className="space-y-2 text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> School ERP, Gym ERP, Clinic Software</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Subscription Management & Stripe billing</li>
              </ul>
              <div className="flex flex-wrap gap-2 py-4">
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Next.js</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Node.js</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">MongoDB</span>
              </div>
              <Link to="/services/custom-software">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold transition-all">Learn More</button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="glass-card rounded-2xl overflow-hidden aspect-[16/10] group">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={svcSaasImg} />
              </div>
            </div>
          </div>

          {/* Service 10: Automation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter items-center">
            <div className="order-1">
              <div className="glass-card rounded-2xl overflow-hidden aspect-[16/10] group">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={svcAutomationImg} />
              </div>
            </div>
            <div className="order-2 space-y-stack-md md:pl-12">
              <span className="inline-block bg-secondary/15 text-secondary px-3 py-1 rounded-full font-label-xs text-label-xs tracking-widest">AUTOMATION</span>
              <h2 className="text-[40px] text-on-surface leading-tight" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Automation Solutions ⚙️</h2>
              <p className="text-on-surface-variant text-body-md">Eliminate bottlenecks and save hours of administrative labor by automating repetitive communication and scheduling.</p>
              <ul className="space-y-2 text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> WhatsApp Alert Automation & Scheduled Emails</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span> Automated Invoice Generation & PDF Reporting</li>
              </ul>
              <div className="flex flex-wrap gap-2 py-4">
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Node.js</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Python</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-lg text-label-xs text-on-surface-variant">Zapier API</span>
              </div>
              <Link to="/services/digital-marketing">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold transition-all">Learn More</button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      

    </div>
  );
};

export default Services;