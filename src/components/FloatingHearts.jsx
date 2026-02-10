import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingHearts = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Math.random().toString(36).substr(2, 9);
            const size = Math.random() * 20 + 10;
            const left = Math.random() * 100;
            const duration = Math.random() * 5 + 5; // 5s to 10s

            setHearts((prev) => [
                ...prev,
                { id, size, left, duration }
            ]);

            // Remove hearts after 10s to keep DOM clean
            setTimeout(() => {
                setHearts((prev) => prev.filter(h => h.id !== id));
            }, 10000);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: "100vh", opacity: 0 }}
                    animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: heart.duration,
                        ease: "easeInOut"
                    }}
                    style={{
                        left: `${heart.left}%`,
                        fontSize: `${heart.size}px`,
                        position: "absolute",
                        color: Math.random() > 0.5 ? "#fda4af" : "#fecdd3" // rose-300 or rose-200
                    }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;
