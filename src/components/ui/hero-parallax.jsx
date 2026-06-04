import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import titleImg from "../../assets/title.jpeg";

// Layout math:
// Each card row  = h-96 (384px)
// Gap between rows = mb-20 (80px)
// 3 rows total   = 384*3 + 80*2 = 1312px
//
// Cards are positioned at top: calc(100vh + 80px) — safely below
// the entire hero text + buttons area.
//
// translateY animates 0 → -1100px over the scroll range, which
// pulls all 3 rows fully into view before the section ends.
//
// Container height = 100vh (hero text) + 1312px (cards) + 200px buffer
// ≈ 100vh + 1512px  →  we use h-[calc(100vh+1600px)] so it's exact.

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smooth, no-bounce spring
  const springConfig = { stiffness: 180, damping: 45, bounce: 0 };

  // Horizontal slide
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 700]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -700]),
    springConfig
  );

  // 3D tilt flattens as you scroll
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [15, 0]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [20, 0]),
    springConfig
  );

  // Fade in
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [0.25, 1]),
    springConfig
  );

  // Cards start at 0 (their natural position below the hero text)
  // and scroll UP by 1100px — enough to show all 3 rows fully
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1100]),
    springConfig
  );

  return (
    <div
      ref={ref}
      // Height = viewport for hero text + full card travel distance
      className="h-[calc(100vh+1600px)] relative [perspective:1000px] [transform-style:preserve-3d]"
      style={{ overflow: "clip" }} // clip prevents scrollbar but allows sticky
    >
      {/* ── Hero text — sticky, vertically centered in first viewport ── */}
      <div className="sticky top-0 h-screen flex flex-col justify-center z-10 pointer-events-none">
        <HeroHeader />
      </div>

      {/* ── Card rows ──
          margin-top pushes them 80px below the viewport bottom,
          so on page load they are completely hidden under the fold
          and never overlap the buttons.                           ── */}
      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className="mt-20 px-4"
      >
        {/* Row 1 — slides right */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>

        {/* Row 2 — slides left */}
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>

        {/* Row 3 — slides right */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const HeroHeader = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Live status pill */}
      <motion.div
        className="inline-flex items-center gap-3 bg-surface-container-high/80 backdrop-blur-md px-4 py-2 rounded-full border border-outline-variant/50 mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <img src={titleImg} alt="Orbit Softworks" className="h-5 w-auto object-contain" />
        <span className="text-on-surface-variant/60">|</span>
        <span className="font-label-xs text-secondary whitespace-nowrap text-[11px] uppercase tracking-widest">
          PROJECTS: 3+
        </span>
      </motion.div>

      <motion.h1
        className="leading-tight mb-5"
        style={{
          fontFamily: "Sora, sans-serif",
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          fontWeight: 800,
          color: "#ffffff",
        }}
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        We Don't Just Build Software.
        <br />
        <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
          We Engineer Your Growth.
        </span>
      </motion.h1>

      <motion.p
        className="text-lg max-w-2xl mb-8"
        style={{ color: "#c2c6d6" }}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        Precision-engineered software solutions for visionaries. From bespoke ERPs to
        high-performance mobile apps — we launch businesses into their next orbit.
      </motion.p>

      <motion.div
        className="flex flex-wrap items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link to="/contact">
          <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg glow-cyan flex items-center gap-2">
            Start Your Project
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </Link>
        <Link to="/portfolio">
          <button
            className="border border-outline-variant px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-variant/20 transition-all flex items-center gap-2"
            style={{ color: "#ffffff" }}
          >
            View Our Work
            <span className="material-symbols-outlined">open_in_new</span>
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link to={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl"
          alt={product.title}
        />
      </Link>
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-surface-container-lowest pointer-events-none rounded-xl transition-opacity duration-300" />
      {/* Category badge */}
      {product.category && (
        <span className="absolute top-4 left-4 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
          {product.category}
        </span>
      )}
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-bold text-lg transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};
