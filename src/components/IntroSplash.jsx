import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// Generate 35 small blooming light dots
const lightDots = Array.from({ length: 35 }).map((_, i) => ({
  id: i,
  size: Math.random() * 4 + 2, // 2px to 6px
  x: Math.random() * 100, // 0% to 100%
  y: Math.random() * 100, // 0% to 100%
  delay: Math.random() * 1.5,
  duration: Math.random() * 2 + 2,
  color: i % 4 === 0 ? "#ffffff" : i % 4 === 1 ? "#818cf8" : i % 4 === 2 ? "#F4D03F" : "#a78bfa"
}));

export default function IntroSplash({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    if (onFinish) {
      setTimeout(onFinish, 600);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="intro-splash-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(14px) brightness(3)",
          }}
          transition={{ duration: 0.65, ease: [0.4, 0, 1, 1] }}
          onClick={handleComplete}
        >
          {/* Blooming Small Light Dots Constellation */}
          <div className="intro-dots-container">
            {lightDots.map((dot) => (
              <motion.div
                key={dot.id}
                className="intro-light-dot"
                style={{
                  width: `${dot.size}px`,
                  height: `${dot.size}px`,
                  left: `${dot.x}%`,
                  top: `${dot.y}%`,
                  backgroundColor: dot.color,
                  boxShadow: `0 0 ${dot.size * 3}px ${dot.color}`
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.9, 0.4, 1],
                  scale: [0.5, 1.3, 0.8, 1.2],
                  y: [0, -15, 0]
                }}
                exit={{
                  opacity: 0,
                  scale: 2.5,
                  y: -40
                }}
                transition={{
                  duration: dot.duration,
                  delay: dot.delay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Ambient Soft Glow Orbs */}
          <div className="intro-glow-orb orb-1" />
          <div className="intro-glow-orb orb-2" />

          {/* Intro Content Container - Only Pavani Mutyala Name */}
          <div className="intro-content">
            <motion.h1
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(12px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="intro-shining-name"
            >
              Pavani Mutyala
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
