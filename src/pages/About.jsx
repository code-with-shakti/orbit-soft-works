import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg';
import brandImg from '../assets/brand.jpeg';
import { HeroEntranceStagger, HeroItem } from '../components/ui/hero-entrance';

// ── Local about page images ──
import heroTeamImg      from '../assets/about/hero-team-collaboration.jpg';
import teamMarcusImg    from '../assets/about/team-marcus-thorne.jpg';
import teamSarahImg     from '../assets/about/team-sarah-chen.jpg';
import teamDavidImg     from '../assets/about/team-david-velez.jpg';
import teamElenaImg     from '../assets/about/team-elena-rossi.jpg';

const About = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    document.title = "About Orbit Technologies | Best Software Development Company";
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
      {/* Atmospheric Effects */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="nebula-glow absolute top-[-20%] left-[-10%] w-[60%] h-[60%] opacity-40"></div>
        <div className="nebula-glow absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] opacity-30"></div>
        <div className="orbital-ring w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit"></div>
        <div className="orbital-ring w-[1200px] h-[1200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 animate-orbit" style={{ animationDirection: 'reverse' }}></div>
      </div>

      {/* ── Hero Section ── */}
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <HeroEntranceStagger className="space-y-6">
            <HeroItem>
              <span className="font-label-xs text-secondary-fixed uppercase tracking-widest bg-secondary-container/10 px-4 py-1 rounded-full">
                Our Story
              </span>
            </HeroItem>
            <HeroItem>
              <h1
                className="text-on-surface leading-tight"
                style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}
              >
                We're Orbit Softworks. <br />
                <span className="text-primary">We Build The Future.</span>
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="text-on-surface-variant text-lg max-w-lg">
                A constellation of developers, designers, and visionaries orbiting the nexus of technology and human experience. We turn complex challenges into elegant software solutions.
              </p>
            </HeroItem>
          </HeroEntranceStagger>

          {/* ── Right: real image ── */}
          <div className="relative group">            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden glass-card aspect-video shadow-2xl">
              <img
                alt="Team Collaboration"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                src={heroTeamImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section ref={addRevealRef} className="reveal-on-scroll py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="glass-card p-12 rounded-[2rem] bg-surface-container-high border-primary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <span className="material-symbols-outlined text-primary text-[64px] opacity-20 block">rocket_launch</span>
            </div>
            <h2 className="text-3xl text-primary mb-6" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Mission</h2>
            <p className="text-lg text-on-surface leading-relaxed">
              To accelerate global innovation by engineering scalable, mission-critical software that empowers businesses to transcend their digital boundaries and achieve absolute operational excellence.
            </p>
            <Link to="/services" className="mt-8 flex items-center text-primary font-bold cursor-pointer group w-max">
              <span>Learn more about our methods</span>
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-2 block">arrow_forward</span>
            </Link>
          </div>
          {/* Vision */}
          <div className="p-12 rounded-[2rem] bg-on-surface text-surface relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <span className="material-symbols-outlined text-surface text-[64px] opacity-20 block">visibility</span>
            </div>
            <h2 className="text-3xl text-surface mb-6" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Vision</h2>
            <p className="text-lg text-surface/80 leading-relaxed">
              To become the primary gravitational center for digital transformation, where every software solution we deploy becomes a cornerstone for the future of decentralized, intelligent enterprise architecture.
            </p>
            <Link to="/portfolio" className="mt-8 flex items-center text-surface font-bold cursor-pointer group w-max">
              <span>The future of orbit</span>
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-2 block">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section ref={addRevealRef} className="reveal-on-scroll py-20 bg-surface-container-lowest/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-on-surface mb-4" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>Our Core Values</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">The principles that guide our every move through the digital cosmos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'person_check', title: 'Client-First', desc: 'Your goals are our flight path. We align our success metrics directly with your business growth.', color: 'text-primary', bg: 'bg-primary-container/20' },
              { icon: 'bolt', title: 'Speed + Quality', desc: "Rapid deployment meets rigorous testing. We don't sacrifice stability for the sake of momentum.", color: 'text-secondary', bg: 'bg-secondary-container/20' },
              { icon: 'lock_open', title: 'Trust & Transparency', desc: 'No black boxes. You have real-time visibility into every line of code and project milestone.', color: 'text-tertiary', bg: 'bg-tertiary-container/20' },
              { icon: 'handshake', title: 'Partnership', desc: "We aren't vendors; we're an extension of your team. We're in this for the entire journey.", color: 'text-on-surface', bg: 'bg-outline-variant/20' },
            ].map(({ icon, title, desc, color, bg }, i) => (
              <div key={i} className="glass-card p-8 rounded-xl hover:translate-y-[-8px] transition-transform duration-300">
                <div className={`w-12 h-12 ${bg} rounded-lg flex items-center justify-center mb-5`}>
                  <span className={`material-symbols-outlined ${color}`}>{icon}</span>
                </div>
                <h3 className="text-[22px] text-on-surface mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>{title}</h3>
                <p className="text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section ref={addRevealRef} className="reveal-on-scroll py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-on-surface" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>Meet The Crew</h2>
            <p className="text-on-surface-variant text-lg mt-2">The brilliant minds navigating Orbit Softworks toward new frontiers.</p>
          </div>
          <button className="flex items-center space-x-2 text-primary font-bold group">
            <span>View all members</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_flat</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: teamMarcusImg, name: 'Marcus Thorne', role: 'CEO & Founder', desc: 'Ex-NASA systems architect with 15 years in distributed computing.', color: 'text-primary' },
            { img: teamSarahImg, name: 'Sarah Chen', role: 'Chief Design Officer', desc: 'Award-winning interaction designer focusing on neural-interface UX.', color: 'text-secondary' },
            { img: teamDavidImg, name: 'David Velez', role: 'Head of Engineering', desc: 'Polyglot developer specialized in high-frequency trading platforms.', color: 'text-tertiary' },
            { img: teamElenaImg, name: 'Elena Rossi', role: 'Lead Strategist', desc: 'Strategist with a focus on sustainable AI scaling for global markets.', color: 'text-primary-fixed-dim' },
          ].map(({ img, name, role, desc, color }, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 glass-card border-none">
                <img alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" src={img} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
              </div>
              <h4 className="text-[20px] text-on-surface" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>{name}</h4>
              <p className={`${color} font-label-xs uppercase tracking-widest mb-2 text-xs`}>{role}</p>
              <p className="text-on-surface-variant text-sm leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tech Philosophy ── */}
      <section ref={addRevealRef} className="reveal-on-scroll py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-[100px]">
            <h2 className="text-on-surface" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>Tech Philosophy</h2>
            <p className="text-on-surface-variant text-lg mt-4">How we think about software, and why it matters for your business.</p>
          </div>
          <div className="lg:col-span-8 space-y-10 mt-8 lg:mt-0">
            {[
              { n: '01', title: 'Code is a Liability', desc: "We don't write code for the sake of it. We aim for the most efficient, minimalist logic that achieves the outcome. Less code means fewer bugs and lower maintenance costs." },
              { n: '02', title: 'User Experience is a Moral Imperative', desc: "Software should respect the user's time and cognitive load. If it's hard to use, it's broken—no matter how impressive the backend is." },
              { n: '03', title: 'Scalability is Built into the Foundation', desc: 'We never build "just for now." Every system architecture we design is pre-engineered to handle 10x growth without a full rewrite.' },
              { n: '04', title: 'The Orbit of Integration', desc: "Software doesn't exist in a vacuum. We design systems that play well with others, ensuring your entire tech stack moves in harmony." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="flex gap-6 group cursor-default">
                <div className="text-5xl lg:text-6xl text-primary/30 group-hover:text-primary transition-colors duration-500 flex-shrink-0" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}>{n}</div>
                <div className="pt-2 lg:pt-4">
                  <h3 className="text-2xl text-on-surface mb-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>{title}</h3>
                  <p className="text-on-surface-variant text-lg">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA — uses brand.jpeg as background element ── */}
      <section ref={addRevealRef} className="reveal-on-scroll py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="glass-card p-12 md:p-16 rounded-[3rem] relative overflow-hidden group border-primary/30">
          <div className="absolute inset-0 nebula-glow opacity-50 scale-150 group-hover:scale-100 transition-transform duration-1000"></div>

          {/* Brand watermark in background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <img src={brandImg} alt="" className="w-64 h-auto object-contain" />
          </div>

          {/* Logo icon above heading */}
          <div className="relative z-10 flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/20">
              <img src={logoImg} alt="Orbit icon" className="w-full h-full object-cover" />
            </div>
          </div>

          <h2 className="relative z-10 text-on-surface mb-4" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>Ready to Enter Orbit?</h2>
          <p className="relative z-10 text-on-surface-variant text-lg max-w-2xl mx-auto mb-8">
            Join the ranks of market leaders who have scaled their operations beyond expectations.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="bg-primary-container text-on-primary-container px-10 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary-container/40">
                Launch Your Project
              </button>
            </Link>
            <Link to="/services">
              <button className="glass-card text-on-surface px-10 py-5 rounded-full font-bold text-lg hover:bg-surface-variant transition-colors border border-outline-variant">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;