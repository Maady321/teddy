import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Teddy = ({ onHug }) => {
  const [hugging, setHugging] = useState(false);

  const handleHug = () => {
    setHugging(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6b6b', '#fecdd3', '#ffffff'] // Red, Pink, White
    });
    
    if (onHug) onHug();

    setTimeout(() => {
      setHugging(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/40 backdrop-blur-sm rounded-3xl shadow-xl w-full max-w-md mx-auto transform transition-all hover:scale-105 duration-500 border border-white/50">
      <motion.div
        className="w-48 h-48 sm:w-64 sm:h-64 cursor-pointer relative"
        animate={hugging ? { scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] } : {}}
        transition={{ duration: 0.5 }}
        onClick={handleHug}
        whileHover={{ scale: 1.05 }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
          {/* Head */}
          <circle cx="100" cy="80" r="50" fill="#d2a679" />
          {/* Ears */}
          <circle cx="65" cy="50" r="18" fill="#d2a679" />
          <circle cx="65" cy="50" r="10" fill="#f4d0a8" />
          <circle cx="135" cy="50" r="18" fill="#d2a679" />
          <circle cx="135" cy="50" r="10" fill="#f4d0a8" />
          {/* Eyes */}
          <circle cx="85" cy="75" r="5" fill="#333" />
          <circle cx="115" cy="75" r="5" fill="#333" />
          {/* Snout */}
          <ellipse cx="100" cy="95" rx="18" ry="12" fill="#f4d0a8" />
          <circle cx="100" cy="90" r="4" fill="#333" />
          <path d="M100 94 L100 102 M95 102 Q100 106 105 102" stroke="#333" strokeWidth="2" fill="none" />
          {/* Body */}
          <ellipse cx="100" cy="155" rx="55" ry="60" fill="#d2a679" />
          <ellipse cx="100" cy="155" rx="30" ry="35" fill="#f4d0a8" />
          {/* Arms - Hugging or open */}
          <motion.path 
            d="M50 140 Q30 150 45 170" 
            stroke="#d2a679" 
            strokeWidth="20" 
            strokeLinecap="round"
            animate={hugging ? { d: "M50 140 Q80 140 90 150" } : { d: "M50 140 Q30 150 45 170" }}
          />
          <motion.path 
            d="M150 140 Q170 150 155 170" 
            stroke="#d2a679" 
            strokeWidth="20" 
            strokeLinecap="round"
             animate={hugging ? { d: "M150 140 Q120 140 110 150" } : { d: "M150 140 Q170 150 155 170" }}
          />
          {/* Legs */}
          <circle cx="70" cy="190" r="15" fill="#d2a679" />
          <circle cx="130" cy="190" r="15" fill="#d2a679" />
          <circle cx="70" cy="192" r="8" fill="#f4d0a8" />
          <circle cx="130" cy="192" r="8" fill="#f4d0a8" />
        </svg>
        
        {/* Floating Heart triggered by hug */}
        {hugging && (
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl"
            initial={{ y: 0, opacity: 1, scale: 0 }}
            animate={{ y: -100, opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.8 }}
          >
            ❤️
          </motion.div>
        )}
      </motion.div>

      <div className="mt-6 text-center">
        <button
          onClick={handleHug}
          className="px-8 py-3 bg-rose-500 text-white rounded-full font-bold shadow-lg shadow-rose-300/50 hover:bg-rose-600 active:scale-95 transition-all flex items-center gap-2 mx-auto"
        >
          <span>Hug Me</span>
          <span className="text-xl">🤗</span>
        </button>
        <p className="mt-4 text-rose-700 font-medium opacity-80 animate-pulse">
            {hugging ? "Sending warm hugs..." : "Wait for it..."}
        </p>
      </div>
    </div>
  );
};

export default Teddy;
