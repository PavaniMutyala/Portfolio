import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import HackathonsWorkshops from "./components/HackathonsWorkshops.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import IntroSplash from "./components/IntroSplash.jsx";
import FloatingDock from "./components/FloatingDock.jsx";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isClickable = !!(
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList?.contains("clickable") ||
        target.classList?.contains("logo")
      );

      const isCard = !!(
        target.classList?.contains("glass-card") ||
        target.closest(".glass-card")
      );

      setIsHovered(isClickable);
      setIsCardHovered(isCard && !isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    // Add custom-cursor-active class to body
    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => {
      sec.classList.add("scroll-reveal");
      observer.observe(sec);
    });

    return () => {
      sections.forEach((sec) => {
        observer.unobserve(sec);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="portfolio-root" style={{ position: "relative", minHeight: "100vh", backgroundColor: "#050505" }}>
      {/* Intro Splash Screen */}
      {showIntro && <IntroSplash onFinish={() => {
        setShowIntro(false);
        document.body.classList.add("intro-done");
      }} />}

      {/* Dark Cinematic Ambient Background Canvas */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
        background: "#050505"
      }}>
        {/* Subtle tech grid overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(212, 175, 55, 0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.35
        }} />

        {/* Dark cinematic ambient orbs */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <motion.div
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 50, -70, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          style={{
            position: "absolute",
            top: "40%",
            right: "5%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(184, 134, 11, 0.14) 0%, transparent 70%)",
            filter: "blur(110px)",
          }}
        />
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, 40, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          style={{
            position: "absolute",
            bottom: "5%",
            left: "20%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(229, 9, 20, 0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Glowing Custom Cursor */}
      {isVisible && (
        <>
          <div
            className={`custom-cursor-dot ${isHovered ? "hovered" : ""} ${isCardHovered ? "card-hovered" : ""}`}
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
            }}
          />
          <div
            className={`custom-cursor-circle ${isHovered ? "hovered" : ""} ${isCardHovered ? "card-hovered" : ""}`}
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
            }}
          />
        </>
      )}

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <HackathonsWorkshops />
        <Certifications />
        <Contact />
      </main>

      {/* Dark Theme Footer */}
      <footer style={{ padding: "48px 0 120px 0", borderTop: "1px solid rgba(255,255,255,0.06)", backgroundColor: "#050505" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", textAlign: "center" }}>
          <span className="footer-copy" style={{ fontSize: "14px", fontWeight: "600", color: "rgba(255,255,255,0.75)", letterSpacing: "0.3px" }}>
            © 2026 Pavani Mutyala. All rights reserved.
          </span>
          <span className="footer-decor" style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "#D4AF37" }}>
            &lt;Built with Passion /&gt;
          </span>
        </div>
      </footer>

      {/* Glassmorphism Floating Bottom Navigation Dock */}
      <FloatingDock />

      {/* Scroll to Top Trigger */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          className="scroll-top-btn"
          onClick={scrollToTop}
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
