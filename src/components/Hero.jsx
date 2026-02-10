import { motion } from "framer-motion";
import { config } from "../utils/config";

const Hero = ({ onOpen }) => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="font-handwriting text-6xl md:text-8xl text-rose-600 mb-6 drop-shadow-lg z-10"
      >
        {config.heroTitle}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="font-sans text-xl md:text-2xl text-rose-800/80 max-w-2xl mb-12 z-10"
      >
        {config.heroSubtitle}
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 120 }}
        className="z-10"
      >
        <button
          onClick={onOpen}
          className="bg-white/80 hover:bg-white text-rose-500 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 border-2 border-rose-200 backdrop-blur-sm text-lg flex items-center gap-2 group"
        >
            <span>{config.ctaText}</span>
            <span className="group-hover:translate-x-1 transition-transform">💌</span>
        </button>
      </motion.div>

      {/* Decorative background elements dealt with in App.jsx or FloatingHearts */}
    </section>
  );
};

export default Hero;
