import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroEntranceStagger, HeroItem } from '../components/ui/hero-entrance';

const projects = [
  {
    id: 1,
    category: 'ERP Systems',
    title: 'Aryan Industries ERP',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtnkSuQsBT9VbBfBp-2VfCDXzyPL00KYMv1RqxNqJAopgKSakFI83fyieaChLSDy0ZKyPN7dwtJH1IfPSI54ox2mb9m-ieg-dJPC8VStQ0OIUzVEFwcTPvrVRa5q6ZypTClDiUMqrRTBcRXXSDlY2P8ZpTeKr87PtPC9fb-PvZaI5TA1IB0He93LiH0DRBFZwZIPZNeFmDMg0szozKxeypxgK6vMDrEBUfxB3TegTbSfy91aP7KNLxU1aTnVxGbys1rOKslXWpPIM',
    aspect: 'aspect-video',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    label: 'Industrial ERP',
    caseStudyUrl: '/portfolio/aryan-industries-erp',
  },
  {
    id: 2,
    category: 'Retail POS',
    title: 'Masala House POS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApRf15ZYNyG8X-gbsCuOgllq9Dm_AO4glK3z2xPT09ADULkRRb759aIhWbSBz3Sm9Ol7ippzZPbqkXTRl1nTLmjdX-5DPBzsI7A42slNuKzjIEzEG91j8qHK3hZylCLRQsBZC4_KePnwZOFNPssFXPLwYxkST1lc-oPpkH1rpJDIR3C0u8YSG7-jJFi3tPOHM3dM8AagnpBWDRbi_yt3laL8HUmoL-lzeyrBNQEO2Y_IQ_DrK_3hDub26kWEwqi6ZYNrbPqN7V0nA',
    aspect: 'aspect-square',
    tags: ['Flutter', 'Firebase'],
    label: 'Hospitality',
    caseStudyUrl: '/portfolio/masala-house-pos',
  },
  {
    id: 3,
    category: 'Education Portals',
    title: 'ABC Public School Portal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_7Gd48d1nnZj8iRJ0bg-2lL-PaXaW-b0h9s0V8ZXj5FGHeaXJnQgZrFEdI6dlA2dOoRolzaYKRs58cB9rpoBxarlghbKKsTHakLz_qcwazCWiXkRnKgJOPegUYQggoVPYfF7By2fyNR6auWJhtuc5MygB6Hi4QgH7xqc_UapZ4vncu62XipYO5ifMmKM8Ol58KlDMHvIk5i4jIXC29pFvZTJuayg-5K_SFkfleuEVR32ibFmsMuzajJvnKnBGn1jmrD4cHeF2BN8',
    aspect: 'aspect-[3/4]',
    tags: ['Next.js', 'AWS'],
    label: 'Education',
    caseStudyUrl: '/portfolio/abc-school-portal',
  },
  {
    id: 4,
    category: 'Websites',
    title: 'Global Trade Hub',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqF1n7AYhZqyJZYo6g_2D7Zs_SRMWKYpygvB4o85j7auSRIgDnrdMRFlJAUfhTJefZStdMv8uguwlKMYlpav2mnArU1iowrTmahdMtG_4vs5EwMyUHTSwwKs4347A7dFV16pACH6FhqWYCAVCp4otN5Nj24aeAnUyLWGmAG1qLqU5ZiIDQr55VeUsP80cyZ3agMB-h99Jl9tf0Uhm26paL-lN5xBmlPncY8dSz4zSb1E-m5e4b3nF9qcbd2gg-tr7CDzeCEyOewPQ',
    aspect: 'aspect-video',
    tags: ['Python', 'Redis'],
    label: 'FinTech',
    caseStudyUrl: '/portfolio/global-trade-hub',
  },
  {
    id: 5,
    category: 'Mobile Apps',
    title: 'SwiftRoute Tracker',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4FimiCjL0WvjF4juSTUgjmKTZQctclk9fLWO4SWKhjf4oB_iM5kBnvua8qTOjfbSk6McbV9cdFSFyFoBafm612SIHlMXzdYsHs7wP54SQgcP1zMdm5shAiSyBw6lZuleA2V7V7KymflUwnstJbBN9YyvT-7PY7XZ70LZY9GRVDq_wty26wEXJ21qbALLtPb7lsxj36sK5zc28k5E2ZXNEwC1pTmEIRCW-3tNLZ16k90NWYOc_b1PdFK6Tl2vZm0SPu4fEjaUqgCw',
    aspect: 'aspect-square',
    tags: ['React Native', 'Go'],
    label: 'Logistics',
    caseStudyUrl: '/portfolio/swiftroute-tracker',
  },
  {
    id: 6,
    category: 'Websites',
    title: 'PulseHealth CMS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYvuO_HdvVCH0goZ6ye63O5vfBb4FJeW_WJY4-aZ5-_beCUOeovY6DFKbVpw5-rHPu3_ATPz-x-HnNndMtCsPwgCnuhDMF6wwW-PN6bkXQO3EVSv8PWMKEEjUpinw6kT0_Nb2_XCbP0UuDCCKcYgQA_lxHvQB8OrD1cOUErW1Z_OE2XO_-L8EWWeSPe6mV5dXU8phyi6meWJWQYphKNNYNQbvauFExuAUJTeMn6Y6yIiIuvqJvPKOOFCv9txxeW9ZN28jsRtfAXLs',
    aspect: 'aspect-[3/4]',
    tags: ['Vue.js', 'GraphQL'],
    label: 'HealthCare',
    caseStudyUrl: '/portfolio/pulsehealth-cms',
  },
];

const FILTERS = ['All Projects', 'ERP Systems', 'Websites', 'Mobile Apps', 'Education Portals', 'Retail POS'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const revealRefs = useRef([]);

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    document.title = "Our Portfolio | Enterprise ERPs, Web Apps & Mobile Portfolios - Orbit Technologies";
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
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[512px] flex items-center justify-center overflow-hidden">
        <div className="nebula-glow absolute inset-0 -z-10"></div>
        <div className="orbital-ring w-[600px] h-[600px] -top-20 -left-20 animate-orbit"></div>
        <div className="orbital-ring w-[800px] h-[800px] -bottom-40 -right-20 animate-orbit" style={{ animationDirection: 'reverse' }}></div>
        <HeroEntranceStagger className="max-w-7xl mx-auto px-grid-margin text-center">
          <HeroItem>
            <h1 className="text-on-surface tracking-tighter mb-4" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
              Built With Purpose. <br />
              <span className="text-primary">Delivered With Pride.</span>
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body-lg text-body-lg">
              Explore our portfolio of high-precision software solutions designed to scale businesses into the next frontier.
            </p>
          </HeroItem>
        </HeroEntranceStagger>
      </section>

      {/* Filter Bar (Sticky) */}
      <section className="sticky top-[80px] z-40 bg-surface/90 backdrop-blur-md py-6 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary text-on-primary font-bold shadow-lg shadow-primary/20'
                    : 'glass-card text-on-surface-variant hover:border-primary/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={addRevealRef} className="reveal-on-scroll py-section-v-desktop max-w-7xl mx-auto px-grid-margin">
        {filteredProjects.length === 0 ? (
          <p className="text-center text-on-surface-variant py-20 text-body-lg">No projects in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-gutter items-start">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative glass-card rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-500">
                <div className={`relative ${project.aspect} overflow-hidden`}>
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={project.image}
                    alt={project.title}
                  />
                  {/* Hover overlay with working link */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Link to={project.caseStudyUrl}>
                      <span className="bg-surface px-6 py-3 rounded-full text-primary font-bold shadow-2xl cursor-pointer hover:bg-primary hover:text-on-primary transition-colors duration-200">
                        View Case Study
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <span className="bg-tertiary-container/30 text-tertiary font-label-xs text-label-xs px-2 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                    {project.label}
                  </span>
                  <h3 className="font-heading-md text-[24px] mb-2 text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-on-surface-variant text-[12px] bg-surface-variant px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Card-level CTA link */}
                  <Link
                    to={project.caseStudyUrl}
                    className="inline-flex items-center gap-1 text-primary text-[13px] font-semibold hover:gap-2 transition-all duration-200 mt-1"
                  >
                    View Case Study
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section ref={addRevealRef} className="reveal-on-scroll py-section-v-desktop relative overflow-hidden">
        <div className="orbital-ring w-[1000px] h-[1000px] -bottom-[500px] left-1/2 -translate-x-1/2 animate-orbit opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-grid-margin text-center relative z-10">
          <h2 className="text-on-surface mb-6" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}>
            Ready to launch your <br /> next project?
          </h2>
          <p className="text-on-surface-variant mb-10 text-body-lg font-body-lg">
            Our team of elite developers and designers is ready to take your vision into orbit. Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-body-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                Start Your Project
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;