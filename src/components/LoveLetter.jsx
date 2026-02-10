import { motion, AnimatePresence } from "framer-motion";
import { config } from "../utils/config";
import { X } from "lucide-react";

const LoveLetter = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-[#fffdf0] w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl shadow-2xl relative p-8 md:p-12 border-8 border-rose-100"
            onClick={(e) => e.stopPropagation()}
            style={{
                backgroundImage: "linear-gradient(#e1e1e1 1px, transparent 1px)",
                backgroundSize: "100% 1.5em",
                lineHeight: "1.5em",
                paddingTop: "3em"
            }}
          >
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-rose-400 hover:text-rose-600 transition-colors"
                aria-label="Close Letter"
            >
                <X size={32} />
            </button>

            <div className="font-handwriting text-3xl md:text-4xl text-gray-800 leading-loose">
              <p className="mb-4 font-bold text-rose-600">{config.loveLetter.greeting}</p>
              
              <div className="space-y-6 whitespace-pre-wrap">
                <p>{config.loveLetter.body}</p>
                <p className="text-rose-500 font-semibold">{config.loveLetter.apology}</p>
                <p>{config.loveLetter.promise}</p>
              </div>

              <div className="mt-12 text-right">
                <p className="mb-2">{config.loveLetter.closing}</p>
                <p className="font-bold text-4xl text-rose-600 handwriting-signature">{config.loveLetter.signature}</p>
              </div>
            </div>

            {/* Decorative Stamps/Stickers */}
            <div className="absolute top-10 right-16 transform rotate-12 opacity-80 pointer-events-none hidden md:block">
                <div className="border-4 border-rose-300 p-2 rounded-lg">
                    <span className="text-4xl">🧸</span>
                </div>
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoveLetter;
