import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const SPECIALIZATIONS = [
  "Automotive Parts",
  "Electrical Parts",
  "Cable Glands",
  "Flare Fittings",
  "Molding Inserts",
  "Sanitary Parts",
];

import type { Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background: royalty-free industrial workshop photo */}
      <img
        src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-[oklch(0.1_0.03_260/0.78)]" />
      {/* Industrial grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.72 0.17 70) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.17 70) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, oklch(0.25 0.06 260 / 0.45) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 md:gap-8"
        >
          {/* Brand name letterSpaced */}
          <motion.div variants={itemVariants}>
            <span
              className="text-2xl md:text-3xl font-black tracking-[0.5em] text-accent font-display uppercase"
              aria-label="Gayatri"
            >
              G A Y A T R I
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground font-display leading-tight"
          >
            Where Precision
            <br />
            <span className="text-accent">Meets Passion</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Manufacturers of Brass Precision Turned Components and all types of
            Brass Products.
            <br className="hidden sm:block" />
            <span className="inline-flex items-center gap-2 mt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" />
              ISO 9001:2015 Certified
            </span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center mt-2"
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/85 transition-all duration-200 shadow-lg hover:shadow-accent/30 hover:scale-[1.03] active:scale-[0.98]"
              data-ocid="hero.explore_products_button"
            >
              Explore Products
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-base font-semibold border border-foreground/40 text-foreground hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              data-ocid="hero.learn_more_button"
            >
              Learn More
            </a>
          </motion.div>

          {/* Specializations */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-2 max-w-3xl"
          >
            {SPECIALIZATIONS.map((spec, i) => (
              <span key={spec} className="flex items-center gap-3">
                <span className="text-sm md:text-base text-accent/80 font-medium tracking-wide">
                  {spec}
                </span>
                {i < SPECIALIZATIONS.length - 1 && (
                  <span className="text-accent/40 text-xs">|</span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
        data-ocid="hero.scroll_indicator"
      >
        <span className="text-xs tracking-widest uppercase font-body">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.4,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={22} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
