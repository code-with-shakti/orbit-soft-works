import { motion } from "framer-motion";

/**
 * HeroEntrance — wraps any hero section content with a staggered
 * fade-up entrance animation that plays once on first load.
 *
 * Usage:
 *   <HeroEntrance>
 *     <h1>...</h1>
 *     <p>...</p>
 *   </HeroEntrance>
 *
 * Each direct child gets its own staggered delay automatically.
 * Pass `className` to style the wrapper div.
 */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 48, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * HeroEntrance — animates the whole block as one unit (fade + slide up).
 * Use this when you want the entire hero to animate in together.
 */
export const HeroEntrance = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 56, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * HeroEntranceStagger — animates each direct child with a stagger.
 * Use this when you want each element (badge, h1, p, buttons) to
 * animate in one after another.
 */
export const HeroEntranceStagger = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

/**
 * HeroItem — individual staggered child. Wrap each element inside
 * HeroEntranceStagger with this.
 */
export const HeroItem = ({ children, className = "" }) => {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
};
