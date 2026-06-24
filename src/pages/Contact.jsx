import { useEffect, useRef, useState } from 'react';
import { HeroEntranceStagger, HeroItem } from '../components/ui/hero-entrance';
import mapImg from '../assets/contact/map-bhubaneswar.jpg';
import SEO from '../components/SEO';

const Contact = () => {
  const revealRefs = useRef([]);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    brief: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.brief) {
      setStatus({ type: 'error', message: 'Please fill in all required fields (Full Name, Email Address, and Project Brief).' });
      return;
    }

    const apiUrl = import.meta.env.VITE_CONTACT_FORM_API_URL;

    // Fallback: If no API URL is defined, use a mailto link pre-filled with details
    if (!apiUrl) {
      setStatus({ type: 'loading', message: 'Opening your default mail client...' });

      const recipient = "subhamswain277@gmail.com";
      const subject = encodeURIComponent(`Project Brief from ${formData.fullName}`);
      const body = encodeURIComponent(
        `Hello Orbit Softworks team,\n\n` +
        `Here is my project brief details:\n` +
        `- Full Name: ${formData.fullName}\n` +
        `- Company: ${formData.company || 'N/A'}\n` +
        `- Email: ${formData.email}\n` +
        `- Phone: ${formData.phone || 'N/A'}\n` +
        `- Service: ${formData.service || 'N/A'}\n` +
        `- Budget: ${formData.budget || 'N/A'}\n\n` +
        `Project Brief:\n${formData.brief}\n`
      );

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setStatus({ type: 'success', message: 'Mail client opened successfully. Please review and send the email.' });
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          brief: ''
        });
      }, 1000);
      return;
    }

    setStatus({ type: 'loading', message: 'Sending your project brief...' });

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your project brief has been sent successfully. We will get back to you soon.' });
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          brief: ''
        });
      } else {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        setStatus({ type: 'error', message: `Failed to send: ${errorText || 'Please try again later.'}` });
      }
    } catch (err) {
      console.error('API Send Exception:', err);
      setStatus({ type: 'error', message: 'An error occurred while sending your message. Please check your network connection.' });
    }
  };

  return (
    <div className="relative">
      <SEO 
        title="Contact Orbit Softworks | Get a Free Software Project Quote" 
        description="Contact Orbit Softworks in Bhubaneswar. We serve Khandagiri, Kalinga Vihar, Patrapada and nearby areas with custom software, websites, and apps."
      />
      {/* ATMOSPHERIC BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary/10 rounded-full blur-[120px]"></div>
        <div className="orbital-ring w-[600px] h-[600px] top-1/4 -left-[300px] animate-orbit"></div>
        <div className="orbital-ring w-[800px] h-[800px] top-1/2 -right-[400px] animate-orbit" style={{ animationDirection: 'reverse' }}></div>
      </div>

      {/* HERO SECTION */}
      <section className="h-[409px] min-h-[400px] flex flex-col items-center justify-center text-center px-grid-margin">
        <HeroEntranceStagger className="flex flex-col items-center gap-4">
          <HeroItem>
            <span className="font-label-xs text-secondary uppercase tracking-[0.2em]">Contact Our Mission Control</span>
          </HeroItem>
          <HeroItem>
            <h1 className="text-on-surface" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>Let's Build Something Great Together.</h1>
          </HeroItem>
          <HeroItem>
            <p className="mt-stack-md text-on-surface-variant font-body-lg text-body-lg max-w-2xl">
              Ready to launch your next digital frontier? Our team of architects and engineers are standing by.
            </p>
          </HeroItem>
        </HeroEntranceStagger>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section ref={addRevealRef} className="reveal-on-scroll max-w-7xl mx-auto px-grid-margin py-section-v-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
          {/* LEFT: Details Card */}
          <div className="lg:col-span-5 space-y-stack-lg">
            <div className="glass-card p-10 rounded-xl">
              <h2 className="text-[32px] text-primary mb-8" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Reach Out</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-xs text-on-surface-variant mb-1">HEADQUARTERS</p>
                    <p className="font-body-lg text-body-lg">Khandagiri, Bhubaneswar</p>
                    <p className="font-body-sm text-on-surface-variant mt-1">Odisha, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-label-xs text-on-surface-variant mb-1">EMAIL US</p>
                    <p className="font-body-lg text-body-lg">hello@orbitsoftworks.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-label-xs text-on-surface-variant mb-1">PHONE</p>
                    <p className="font-body-lg text-body-lg">+91 7205525289</p>
                    <p className="font-body-lg text-body-lg">+91 7978010840</p>
                    
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-12 border-t border-outline-variant/20">
                <p className="text-[24px] mb-6" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Why talk to us?</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    Free architectural consultation
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    Detailed proposal within 48 hours
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    Direct access to senior engineering leads
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* RIGHT: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-10 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100%]"></div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10" onSubmit={handleSubmit}>
                <div className="md:col-span-1">
                  <label className="block font-label-xs text-on-surface-variant mb-2">FULL NAME *</label>
                  <input
                    className="w-full bg-surface-container text-on-surface border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 outline-none transition-all"
                    placeholder="Enter your full name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block font-label-xs text-on-surface-variant mb-2">COMPANY</label>
                  <input
                    className="w-full bg-surface-container text-on-surface border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 outline-none transition-all"
                    placeholder="Enter your company name (optional)"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block font-label-xs text-on-surface-variant mb-2">EMAIL ADDRESS *</label>
                  <input
                    className="w-full bg-surface-container text-on-surface border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 outline-none transition-all"
                    placeholder="Enter your email address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block font-label-xs text-on-surface-variant mb-2">PHONE NUMBER</label>
                  <input
                    className="w-full bg-surface-container text-on-surface border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 outline-none transition-all"
                    placeholder="Enter your phone number (optional)"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block font-label-xs text-on-surface-variant mb-2">SERVICE INTERESTED IN</label>
                  <select
                    className="w-full bg-surface-container text-on-surface border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 outline-none transition-all"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Business Websites">Business Websites</option>
                    <option value="E-Commerce Development">E-Commerce Development</option>
                    <option value="ERP Solutions">ERP Solutions</option>
                    <option value="POS & Billing Software">POS & Billing Software</option>
                    <option value="Inventory Management Systems">Inventory Management Systems</option>
                    <option value="Android App Development">Android App Development</option>
                    <option value="Dashboard & Analytics Systems">Dashboard & Analytics Systems</option>
                    <option value="Automation Solutions">Automation Solutions</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className="block font-label-xs text-on-surface-variant mb-2">ESTIMATED BUDGET</label>
                  <select
                    className="w-full bg-surface-container text-on-surface border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 outline-none transition-all"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select a budget range...</option>
<option value="Under ₹25,000">Under ₹25,000</option>
<option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
<option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
<option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000</option>
<option value="₹3,00,000+">₹3,00,000+</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block font-label-xs text-on-surface-variant mb-2">PROJECT BRIEF *</label>
                  <textarea
                    className="w-full bg-surface-container text-on-surface border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 outline-none transition-all"
                    placeholder="Enter details about your project, goals, and requirements..."
                    rows="5"
                    name="brief"
                    value={formData.brief}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`md:col-span-2 p-4 rounded-lg text-sm font-semibold transition-all ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-400' :
                      status.type === 'error' ? 'bg-red-500/10 border border-red-500/20 text-red-400' :
                        'bg-primary/10 border border-primary/20 text-primary animate-pulse'
                    }`}>
                    {status.message}
                  </div>
                )}

                <div className="md:col-span-2 mt-4">
                  <button
                    className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-body-lg flex items-center justify-center gap-2 glow-cyan hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100 disabled:active:scale-100 transition-all"
                    type="submit"
                    disabled={status.type === 'loading'}
                  >
                    {status.type === 'loading' ? 'Sending...' : 'Send My Project Brief'}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section ref={addRevealRef} className="reveal-on-scroll w-full h-[500px] mt-section-v-desktop relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10 pointer-events-none"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="glass-card px-8 py-6 rounded-xl flex items-center gap-4 animate-bob">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>location_on</span>
            <span className="text-[20px]" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>Orbit Softworks HQ</span>
          </div>
        </div>
        <img className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-700 group-hover:scale-110" src={mapImg} />
      </section>
    </div>
  );
};

export default Contact;