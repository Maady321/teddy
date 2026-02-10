import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { config } from "../utils/config";

const Message = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const sentence = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                delay: 0.5,
                staggerChildren: 0.05
            }
        }
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0 
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="glass-card max-w-3xl w-full p-8 md:p-16 text-center shadow-2xl border-2 border-white/40"
            >
                <div className="mb-8 animate-pulse text-6xl text-rose-500 mx-auto">
                    💓
                </div>

                <motion.h2 
                    variants={sentence}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="font-handwriting text-4xl md:text-5xl text-rose-700 mb-8 leading-relaxed"
                >
                    {config.apologyMessage.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}
                </motion.h2>

                <p className="text-xl text-gray-600 font-light italic mt-12">
                     - With all my love, {config.myName}
                </p>
                
            </motion.div>
        </section>
    );
}

export default Message;
