import { useState } from "react";
import Reach from "../assets/Reach.png";
import { motion } from "framer-motion";

const StarBackground = () => {
  const [stars] = useState(() =>
    Array.from({ length: 80 }).map(() => ({
      id: Math.random(),
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 5,
      xOffset: Math.random() * 50 - 25,
      yOffset: Math.random() * 50 - 25,
    })),
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          // LIGHT MODE: bg-amber-500/40 gives a soft warm gold dust look
          // DARK MODE: dark:bg-white swaps back to cosmic white stars
          className="absolute rounded-full bg-amber-500/40 dark:bg-white shadow-[0_0_8px_rgba(245,158,11,0.3)] dark:shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            // Dynamic shadow handles both light mode glow and dark mode glow cleanly
            boxShadow: `0 0 ${star.size * 4}px rgba(245, 158, 11, 0.5)`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            x: [0, star.xOffset, 0],
            y: [0, star.yOffset, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

function HeroSection() {
  return (
    <section
      id="home"
      // LIGHT MODE: Soft alabaster gradient background with slate-900 text base
      // DARK MODE: Your exact original cosmic dark-gradient colors
      className="relative mt-6 flex min-h-[calc(100vh-120px)] w-full flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.03),_transparent_40%),linear-gradient(180deg,rgba(248,250,252,1),rgba(241,245,249,1))] text-slate-900 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_30%),linear-gradient(180deg,rgba(10,10,14,0.98),rgba(6,6,10,0.98))] dark:text-white px-4 py-8 sm:px-6 lg:px-10 lg:py-10 transition-colors duration-300"
    >
      <StarBackground />

      {/* Decorative top border line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent"
      />

      <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1fr_1.05fr_0.95fr] lg:gap-8 z-10 relative">
        {/* Left Column: Greeting & Name */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-2xl font-medium text-slate-700 dark:text-white/95 sm:text-3xl">
            Hello, I&apos;m
          </p>

          <div className="space-y-2">
            <h1 className="text-[clamp(3.3rem,7vw,6.2rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[#0f1f4f] dark:text-white space-x-px">
              Vorng
            </h1>
            <h2 className="text-[clamp(2.8rem,5.8vw,4.9rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[#0f1f4f] dark:text-white/96">
              Sovannreach
            </h2>
          </div>

          <motion.a
            href="#about"
            whileHover={{
              y: -4,
              backgroundColor: "rgba(15, 23, 42, 0.05)",
              borderColor: "rgba(15, 23, 42, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            // LIGHT MODE: Crisp slate outline button with subtle gray fill
            // DARK MODE: Translucent frosted white outline button
            className="inline-flex w-fit items-center rounded-xl border border-slate-300 bg-slate-50/50 px-6 py-3.5 text-lg font-medium text-slate-800 shadow-sm dark:border-white/28 dark:bg-white/5 dark:text-white transition duration-150"
          >
            About Me
          </motion.a>
        </motion.div>

        {/* Center Column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img
            src={Reach}
            alt="Vorng Sovannreach"
            // LIGHT MODE: Clean modern drop shadow to highlight the circular shape
            // DARK MODE: Your beautiful cosmic neon white aura glow
            className="rounded-[50%] w-full max-w-[400px] object-cover shadow-[0_20px_50px_rgba(148,163,184,0.3)] dark:shadow-[0_0px_55px_rgba(255,255,255,0.25)] border-4 border-slate-200 dark:border-transparent transition-all duration-300"
          />
        </motion.div>

        {/* Right Column: Short Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="self-center lg:pl-4"
        >
          <p className="max-w-[28rem] text-[1.15rem] leading-[1.6] text-[#1b2a5a] dark:text-white/92 sm:text-[1.25rem]">
            I am a passionate technology student with a strong interest in
            software development and web technologies. You can also check my
            personal projects here!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
