import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Heart } from "lucide-react";
import FloatingHearts from "./components/FloatingHearts";
import Hero from "./components/Hero";
import Teddy from "./components/Teddy";
import Message from "./components/Message";
import LoveLetter from "./components/LoveLetter";
import { config } from "./utils/config";

function App() {
  const [isOpen, setIsOpen] = useState(false); // Has the user interacted?
  const [showLetter, setShowLetter] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleOpen = () => {
    setIsOpen(true);
    
    // Smooth scroll to next section
    const teddySection = document.getElementById("teddy-section");
    if (teddySection) {
        teddySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 text-rose-900 font-sans selection:bg-rose-200 overflow-x-hidden">
      <FloatingHearts />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-rose-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <Hero onOpen={handleOpen} />

      {/* Main Content - Only visible after interaction or just always visible but music starts later? 
          Actually, let's keep it all visible but focus on valid interaction. 
      */}
      
      <div id="teddy-section" className="relative z-10 space-y-32 pb-32">
        {/* Teddy Section */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-4xl text-center"
            >
                <Teddy />
            </motion.div>
        </section>

        {/* Message / Apology Section */}
        <Message />

        {/* Love Letter Trigger */}
        <section className="flex flex-col items-center justify-center p-12 text-center">
            <h3 className="text-3xl font-handwriting mb-8 text-rose-700">I have one more surprise for you...</h3>
            <button 
                onClick={() => setShowLetter(true)}
                className="group relative px-8 py-4 bg-rose-500 text-white text-xl font-bold rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
                <span className="relative z-10 flex items-center gap-2">
                    For You <Heart className="fill-current animate-pulse" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-rose-400 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
        </section>
        
        <footer className="text-center text-rose-400 py-8 font-light text-sm">
            Made with ❤️ for {config.herName}
        </footer>
      </div>

      {/* Modals & Overlays */}
      <LoveLetter isOpen={showLetter} onClose={() => setShowLetter(false)} />
      
    </div>
  );
}

export default App;
