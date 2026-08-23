import React, { useState, useEffect, useRef } from "react";
import { projectsData } from "../data.js";
import {
  Github, ArrowUpRight, Layers, Cpu, Globe, Utensils,
  X, Play, RefreshCw, Activity, Terminal, CheckCircle2, Zap
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const categoryIcons = {
  1: <Globe size={16} />,
  2: <Layers size={16} />,
  3: <Utensils size={16} />,
  4: <Cpu size={16} />,
};

const hexToRgb = (hex) => {
  if (!hex) return "99, 102, 241";
  const clean = hex.replace("#", "");
  return `${parseInt(clean.slice(0, 2), 16)}, ${parseInt(clean.slice(2, 4), 16)}, ${parseInt(clean.slice(4, 6), 16)}`;
};

const featuresMap = {
  1: ["Interactive map for real-time rescue centers", "Intelligent routing to nearby hospitals", "AI assistant for dispatch and volunteer matching", "Real-time updates and notifications"],
  2: ["Real-time filter with interactive map integration", "Direct messaging portal between agent and buyer", "Comprehensive property search and list system", "Verified listings and secure user login"],
  3: ["Personalized meal and recipe recommendations", "Real-time restaurant order tracking", "Search and filter by ingredients, cuisine, preferences", "Clean and responsive user interface"],
  4: ["Food image recognition and calorie estimation", "Personalized diet and nutrition recommendations", "Daily nutrition tracking and progress analytics", "Interactive charts and health insights"],
};

const projectLogsMap = {
  1: ["[SYSTEM] Initiating secure SSL handshake with server...", "[HANDSHAKE] Handshake established (TLSv1.3)", "[INFO] Initializing Mapbox Map View Instance...", "[INFO] Loading local vector data and Pinecone namespaces...", "[SUCCESS] Vector DB Connected successfully", "[INFO] Spawning Disaster Relief Agent: AIDMAP-AG-04", "[INFO] Latency test ping: 22ms", "[READY] System initialized. Interactive controls ready."],
  2: ["[SYSTEM] Initializing HOUSE HUNT MERN Server...", "[INFO] Connecting to MongoDB Atlas cluster...", "[SUCCESS] MongoDB Connection established", "[INFO] Verification check: loading 18 verified listings", "[INFO] WebSocket server active for Agent-Buyer Messaging", "[READY] Application active. Listening on port 5000."],
  3: ["[SYSTEM] Initializing READYBITE Engine...", "[INFO] Synchronizing restaurant data cache...", "[SUCCESS] Loaded 45 restaurant nodes", "[INFO] Initializing live tracking websocket channel", "[READY] ReadyBite services online."],
  4: ["[SYSTEM] Booting NUTRIWISE AI Core...", "[INFO] Loading Image Recognition weights model...", "[INFO] Connecting to Gemini API endpoint...", "[SUCCESS] Model initialized successfully", "[READY] NutriWise API standing by."],
};

// Single project row: image left, info right (alternates)
function ProjectRow({ project, idx, onLaunchDemo }) {
  const imgRef = useRef(null);
  const infoRef = useRef(null);
  const [imgIn, setImgIn] = useState(false);
  const [infoIn, setInfoIn] = useState(false);
  const isLeft = idx % 2 === 0;
  const rgbColor = hexToRgb(project.color);
  const features = featuresMap[project.id] || [];

  // Fire image fly-in the moment this row comes near the viewport
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setImgIn(true); obs.unobserve(el); } },
      { threshold: 0, rootMargin: "100px 0px 0px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Info panel follows
  useEffect(() => {
    const el = infoRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInfoIn(true); obs.unobserve(el); } },
      { threshold: 0, rootMargin: "100px 0px 0px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="pj-row"
      style={{ flexDirection: isLeft ? "row" : "row-reverse" }}
    >
      {/* Image Panel — GPU-only fly-in from its side */}
      <div
        ref={imgRef}
        className="pj-image-panel"
        style={{
          transform: imgIn ? "translateX(0) scale(1)" : isLeft ? "translateX(-120px) scale(0.88)" : "translateX(120px) scale(0.88)",
          opacity: imgIn ? 1 : 0,
          transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.55s ease",
          willChange: "transform, opacity",
        }}
      >
        {/* Project number watermark */}
        <span className="pj-num-watermark" style={{ color: `rgba(${rgbColor},0.1)` }}>
          0{project.id}
        </span>

        {/* Colored glow behind image */}
        <div
          className="pj-img-glow"
          style={{ background: `radial-gradient(ellipse at center, rgba(${rgbColor},0.18) 0%, transparent 70%)` }}
        />

        {/* Browser chrome + image */}
        <motion.div
          className="pj-browser-frame"
          style={{ borderColor: `rgba(${rgbColor},0.25)` }}
          whileHover={{
            y: -12,
            boxShadow: `0 35px 60px -15px rgba(${rgbColor},0.4)`,
            borderColor: project.color
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="pj-browser-bar">
            <span className="pj-dot" style={{ background: "#ff5f56" }} />
            <span className="pj-dot" style={{ background: "#ffbd2e" }} />
            <span className="pj-dot" style={{ background: "#27c93f" }} />
            <span className="pj-browser-url">
              <Globe size={10} />
              {project.title.toLowerCase()}.pavani.dev
            </span>
          </div>
          <div className="pj-img-wrap">
            <motion.img
              src={project.image}
              alt={project.title}
              className="pj-img"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="pj-img-overlay" style={{ background: `linear-gradient(to top, rgba(${rgbColor},0.2) 0%, transparent 60%)` }} />
          </div>
        </motion.div>

        {/* Category badge floating on image */}
        <span
          className="pj-cat-badge"
          style={{ color: project.color, border: `1px solid rgba(${rgbColor},0.3)`, background: `rgba(${rgbColor},0.08)` }}
        >
          {categoryIcons[project.id]}
          {project.category}
        </span>
      </div>

      {/* Info Panel — flies in from opposite side, 180ms after image */}
      <div
        ref={infoRef}
        className="pj-info-panel"
        style={{
          transform: infoIn ? "translateX(0) scale(1)" : isLeft ? "translateX(90px) scale(0.92)" : "translateX(-90px) scale(0.92)",
          opacity: infoIn ? 1 : 0,
          transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.18s, opacity 0.55s ease 0.18s",
          willChange: "transform, opacity",
        }}
      >
        {/* Top accent line */}
        <div className="pj-accent-line" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

        {/* Badge row */}
        <div className="pj-badge-row">
          <span className="pj-index-badge" style={{ color: project.color, background: `rgba(${rgbColor},0.08)`, border: `1px solid rgba(${rgbColor},0.25)` }}>
            PROJECT · 0{project.id}
          </span>
          <span className="pj-feature-badge" style={{ color: "#10b981", background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)" }}>
            <CheckCircle2 size={10} /> {project.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="pj-title">{project.title}</h3>

        {/* Description */}
        <p className="pj-description">{project.description}</p>

        {/* Feature list */}
        <ul className="pj-features">
          {features.map((f, i) => (
            <li key={i} className="pj-feature-item">
              <span className="pj-feature-dot" style={{ background: project.color, boxShadow: `0 0 6px ${project.color}` }} />
              {f}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="pj-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="pj-tag">{tag}</span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="pj-cta-row">
          <motion.a
            href={project.liveUrl || project.link || "#"}
            target="_blank"
            rel="noreferrer"
            className="pj-btn-demo"
            whileHover={{ scale: 1.05, boxShadow: `0 12px 25px -4px rgba(${rgbColor},0.7)` }}
            whileTap={{ scale: 0.95 }}
            style={{ background: project.color, boxShadow: `0 8px 20px -6px rgba(${rgbColor},0.4)`, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <Zap size={13} /> Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl || "https://github.com/PavaniMutyala"}
            target="_blank"
            rel="noreferrer"
            className="pj-btn-github"
            whileHover={{ scale: 1.05, backgroundColor: `rgba(${rgbColor},0.15)`, borderColor: project.color }}
            whileTap={{ scale: 0.95 }}
            style={{ border: `1.5px solid rgba(${rgbColor},0.35)`, color: project.color }}
          >
            <Github size={13} /> GitHub
          </motion.a>
          <motion.a
            href={project.liveUrl || project.link || "#"}
            target="_blank"
            rel="noreferrer"
            className="pj-btn-link"
            whileHover={{ scale: 1.15, rotate: 10, color: project.color }}
            whileTap={{ scale: 0.95 }}
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <ArrowUpRight size={15} />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeDemo, setActiveDemo] = useState(null);
  const [logs, setLogs] = useState([]);
  const [latency, setLatency] = useState(25);

  useEffect(() => {
    if (!activeDemo) { setLogs([]); return; }
    const initial = (projectLogsMap[activeDemo.id] || []).map((text, i) => ({
      time: new Date(Date.now() - (projectLogsMap[activeDemo.id].length - i) * 600).toLocaleTimeString(),
      text,
    }));
    setLogs(initial);
    const id = setInterval(() => {
      const options = [
        `[REQUEST] GET /api/v1/status - 200 OK - ${Math.floor(Math.random() * 20) + 5}ms`,
        `[METRIC] Connected users: ${Math.floor(Math.random() * 45) + 12}`,
        `[INFO] Heap: ${Math.floor(Math.random() * 40) + 30}MB`,
        `[INFO] Ping status: OK`,
      ];
      setLogs(p => [...p.slice(-30), { time: new Date().toLocaleTimeString(), text: options[Math.floor(Math.random() * options.length)] }]);
      setLatency(Math.floor(Math.random() * 15) + 12);
    }, 4000);
    return () => clearInterval(id);
  }, [activeDemo]);

  const handleAction = (type) => {
    const map = {
      1: { action1: '[MAP] Searching shelters in AP. Found: 14 active locations.', action2: '[DISPATCH] Volunteer dispatched to location #3.' },
      2: { action1: '[DB] Property query: <$800k prime district. Found: 6 matches.', action2: '[WS] Message from Buyer to Agent. Speed: 8ms.' },
      3: { action1: '[RECIPES] Vegan High Protein → Tofu Salad Bowl suggested.', action2: '[WS] Order #8282 → "Out for Delivery" — 11ms.' },
      4: { action1: '[VISION] Grilled Chicken + Brown Rice: ~450 kcal.', action2: '[AI] High fiber menu → Oatmeal with chia + berries.' },
    };
    const entry = map[activeDemo.id];
    setLogs(p => [...p, { time: new Date().toLocaleTimeString(), text: `[USER EVENT] ${type === "action1" ? "Query Search" : "Dispatch Action"}` }, { time: new Date().toLocaleTimeString(), text: entry[type] }]);
  };

  const handleRestart = () => {
    setLogs([]);
    setTimeout(() => {
      setLogs((projectLogsMap[activeDemo.id] || []).map((text, i) => ({
        time: new Date(Date.now() - (projectLogsMap[activeDemo.id].length - i) * 600).toLocaleTimeString(),
        text,
      })));
    }, 300);
  };

  return (
    <section id="projects" className="pj-section">
      {/* Ambient background orbs */}
      <div className="pj-orb pj-orb--left" />
      <div className="pj-orb pj-orb--right" />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-num">03 // SELECTED INNOVATIONS</span>
          <h2 className="section-title">
            FEATURED <span className="logo-highlight">PROJECTS</span>
          </h2>
          <div className="section-underline" />
          <p className="section-subtitle">
            End-to-end products spanning AI, full-stack web, and cloud — each built to solve real-world problems.
          </p>
        </div>

        {/* Project rows — each fires individually as user scrolls to it */}
        <div className="pj-list">
          {projectsData.map((project, idx) => (
            <ProjectRow
              key={project.id}
              project={project}
              idx={idx}
              onLaunchDemo={setActiveDemo}
            />
          ))}
        </div>
      </div>

      {/* ── Live Demo Modal ── */}
      <AnimatePresence>
        {activeDemo && (
          <motion.div
            className="demo-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDemo(null)}
          >
            <motion.div
              className="demo-modal"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Browser Header */}
              <div className="demo-browser-header">
                <div className="demo-browser-dots">
                  <span className="demo-browser-dot" style={{ background: "#ff5f56" }} />
                  <span className="demo-browser-dot" style={{ background: "#ffbd2e" }} />
                  <span className="demo-browser-dot" style={{ background: "#27c93f" }} />
                </div>
                <div className="demo-browser-address-bar">
                  <Globe size={12} />
                  <span>https://{activeDemo.title.toLowerCase()}.pavani.dev/dashboard</span>
                </div>
                <button onClick={() => setActiveDemo(null)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", display: "flex" }}>
                  <X size={18} />
                </button>
              </div>

              <div className="demo-browser-content">
                {/* Viewport pane */}
                <div className="demo-viewport-pane">
                  <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <h4 style={{ color: "#fff", margin: 0, fontSize: "15px", fontWeight: "700" }}>{activeDemo.title} Preview</h4>
                        <span style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>Simulated Application Instance</span>
                      </div>
                      <span style={{ fontSize: "11px", color: activeDemo.color, border: `1px solid ${activeDemo.color}`, padding: "2px 8px", borderRadius: "4px" }}>
                        {activeDemo.category}
                      </span>
                    </div>
                    <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <img src={activeDemo.image} alt="Dashboard" style={{ width: "100%", display: "block" }} />
                    </div>
                  </div>
                </div>

                {/* Console pane */}
                <div className="demo-console-pane">
                  <div className="demo-console-header">
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Terminal size={14} style={{ color: activeDemo.color }} /> SANDBOX TERMINAL
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                        Live
                      </span>
                      <span>{latency}ms</span>
                    </span>
                  </div>
                  <div className="demo-console-logs">
                    {logs.map((log, i) => (
                      <div key={i} className="demo-log-entry">
                        <span className="demo-log-time">{log.time}</span>
                        <span style={{ color: log.text.includes("[SUCCESS]") ? "#10b981" : log.text.includes("[ERROR]") ? "#ef4444" : "#e2e8f0" }}>
                          {log.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="demo-console-controls">
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button onClick={() => handleAction("action1")} className="btn btn-secondary" style={{ flex: 1, padding: "8px", fontSize: "11px", gap: "4px", borderRadius: "6px" }}>
                        <Play size={11} /> Simulate Search
                      </button>
                      <button onClick={() => handleAction("action2")} className="btn btn-secondary" style={{ flex: 1, padding: "8px", fontSize: "11px", gap: "4px", borderRadius: "6px" }}>
                        <Activity size={11} /> Simulate Dispatch
                      </button>
                    </div>
                    <button onClick={handleRestart} className="btn btn-secondary" style={{ padding: "8px", fontSize: "11px", gap: "4px", display: "flex", justifyContent: "center", border: "1px dashed rgba(255,255,255,0.15)", borderRadius: "6px" }}>
                      <RefreshCw size={11} /> Restart Sandbox Server
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
