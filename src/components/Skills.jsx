import React, { useState, useEffect, useRef } from "react";

// ── Technical skills (CDN logos) ─────────────────────────────────────────────
const skillsList = [
  { name: "JavaScript", key: "js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", key: "python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", key: "java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", key: "c", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "HTML5", key: "html", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", key: "css", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SQL", key: "sql", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "React JS", key: "react", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Express JS", key: "express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Git", key: "git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

// ── AI & Advanced skills (inline SVG icons) ───────────────────────────────────
const C = "#D4AF37";
const aiSkillsList = [
  {
    name: "Generative AI",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="14" y="14" width="20" height="20" rx="4" stroke={C} strokeWidth="2" />
        <circle cx="24" cy="24" r="4" stroke={C} strokeWidth="2" />
        <path d="M24 8v6M24 34v6M8 24h6M34 24h6" stroke={C} strokeWidth="2" strokeLinecap="round" />
        <path d="M13 13l4 4M31 31l4 4M13 35l4-4M31 17l4-4" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Agentic AI",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="18" r="8" stroke={C} strokeWidth="2" />
        <path d="M18 18h12M24 14v8" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="16" r="1.5" fill={C} />
        <circle cx="24" cy="22" r="1.5" fill={C} />
        <path d="M12 38c0-6.627 5.373-10 12-10s12 3.373 12 10" stroke={C} strokeWidth="2" strokeLinecap="round" />
        <path d="M20 10l-3-3M28 10l3-3" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "RAG",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="10" width="32" height="6" rx="2" stroke={C} strokeWidth="2" />
        <rect x="8" y="21" width="32" height="6" rx="2" stroke={C} strokeWidth="2" />
        <rect x="8" y="32" width="32" height="6" rx="2" stroke={C} strokeWidth="2" />
        <circle cx="38" cy="38" r="6" fill="rgba(212, 175, 55, 0.1)" stroke={C} strokeWidth="2" />
        <path d="M36 38h4M38 36v4" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Pinecone",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="4" stroke={C} strokeWidth="2" />
        <circle cx="10" cy="16" r="3" stroke={C} strokeWidth="1.5" />
        <circle cx="38" cy="16" r="3" stroke={C} strokeWidth="1.5" />
        <circle cx="10" cy="32" r="3" stroke={C} strokeWidth="1.5" />
        <circle cx="38" cy="32" r="3" stroke={C} strokeWidth="1.5" />
        <circle cx="24" cy="8" r="3" stroke={C} strokeWidth="1.5" />
        <circle cx="24" cy="40" r="3" stroke={C} strokeWidth="1.5" />
        <path d="M13 17.5l8 5M27 25.5l8 5M13 30.5l8-5M27 22.5l8-5M24 11v9M24 28v9" stroke={C} strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Machine Learning",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="10" height="10" rx="2" stroke={C} strokeWidth="2" />
        <rect x="30" y="8" width="10" height="10" rx="2" stroke={C} strokeWidth="2" />
        <rect x="8" y="30" width="10" height="10" rx="2" stroke={C} strokeWidth="2" />
        <rect x="30" y="30" width="10" height="10" rx="2" stroke={C} strokeWidth="2" />
        <rect x="19" y="19" width="10" height="10" rx="2" stroke={C} strokeWidth="2" />
        <path d="M18 13h12M18 35h12M13 18v12M35 18v12M22 19l-4-6M26 19l4-6M22 29l-4 6M26 29l4 6" stroke={C} strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Vector DBs",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="14" rx="14" ry="5" stroke={C} strokeWidth="2" />
        <path d="M10 14v8c0 2.76 6.268 5 14 5s14-2.24 14-5v-8" stroke={C} strokeWidth="2" />
        <path d="M10 22v8c0 2.76 6.268 5 14 5s14-2.24 14-5v-8" stroke={C} strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "LLMs",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M10 16c0-3.314 6.268-6 14-6s14 2.686 14 6v16c0 3.314-6.268 6-14 6S10 35.314 10 32V16z" stroke={C} strokeWidth="2" />
        <path d="M16 22h16M16 28h10" stroke={C} strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="14" r="5" fill="rgba(212, 175, 55, 0.1)" stroke={C} strokeWidth="1.5" />
        <path d="M34 14l1.5 1.5L38 12" stroke={C} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Deep Learning",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="8" cy="14" r="3" stroke={C} strokeWidth="1.8" />
        <circle cx="8" cy="24" r="3" stroke={C} strokeWidth="1.8" />
        <circle cx="8" cy="34" r="3" stroke={C} strokeWidth="1.8" />
        <circle cx="22" cy="10" r="3" stroke={C} strokeWidth="1.8" />
        <circle cx="22" cy="20" r="3" stroke={C} strokeWidth="1.8" />
        <circle cx="22" cy="30" r="3" stroke={C} strokeWidth="1.8" />
        <circle cx="22" cy="40" r="3" stroke={C} strokeWidth="1.8" />
        <circle cx="36" cy="18" r="3" stroke={C} strokeWidth="1.8" />
        <circle cx="36" cy="30" r="3" stroke={C} strokeWidth="1.8" />
        <path d="M11 14l8-4M11 14l8 6M11 14l8 16M11 24l8-14M11 24l8-4M11 24l8 6M11 24l8 16M11 34l8-24M11 34l8-14M11 34l8-4M11 34l8 6M25 10l8 8M25 20l8-2M25 20l8 10M25 30l8-12M25 30l8 0M25 40l8-22M25 40l8-10" stroke={C} strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "REST APIs",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="18" width="16" height="12" rx="3" stroke={C} strokeWidth="2" />
        <rect x="26" y="18" width="16" height="12" rx="3" stroke={C} strokeWidth="2" />
        <path d="M22 24h4" stroke={C} strokeWidth="2" strokeLinecap="round" />
        <path d="M20 22l-3-3m3 9l-3 3" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 22l3-3m-3 9l3 3" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "DSA",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="18" y="8" width="12" height="8" rx="2" stroke={C} strokeWidth="2" />
        <rect x="6" y="24" width="12" height="8" rx="2" stroke={C} strokeWidth="2" />
        <rect x="30" y="24" width="12" height="8" rx="2" stroke={C} strokeWidth="2" />
        <rect x="18" y="38" width="12" height="6" rx="2" stroke={C} strokeWidth="2" />
        <path d="M24 16v4M12 24v-4h24v4M24 32v6" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Skills() {
  const [gridVisible, setGridVisible] = useState(false);
  const [aiVisible, setAiVisible] = useState(false);
  const [clickedIdx, setClickedIdx] = useState(null);
  const [aiClickedIdx, setAiClickedIdx] = useState(null);
  const gridRef = useRef(null);
  const aiRef = useRef(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setGridVisible(true); obs.unobserve(el); } },
      { threshold: 0, rootMargin: "80px 0px 0px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = aiRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAiVisible(true); obs.unobserve(el); } },
      { threshold: 0, rootMargin: "80px 0px 0px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleClick = (i) => { setClickedIdx(i); setTimeout(() => setClickedIdx(null), 600); };
  const handleAiClick = (i) => { setAiClickedIdx(i); setTimeout(() => setAiClickedIdx(null), 600); };

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        {/* ── Technical Skills ─────────────── */}
        <div className="skills-section-header">
          <h2>Technical <span>Skills</span></h2>
          <div className="skills-underline" />
        </div>

        <div className="skills-grid-container" ref={gridRef}>
          {skillsList.map((skill, idx) => (
            <div
              key={skill.name}
              className="skill-grid-card"
              onClick={() => handleClick(idx)}
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? "translateY(0) scale(1)" : "translateY(36px) scale(0.82)",
                transition: `opacity 0.5s ease ${idx * 0.07}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${idx * 0.07}s`,
                willChange: "transform, opacity",
                cursor: "pointer",
              }}
            >
              <div className={`skill-grid-card-icon${clickedIdx === idx ? " skill-icon-clicked" : ""}`}>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  width="52"
                  height="52"
                  style={{
                    objectFit: "contain",
                    filter: skill.key === "express" ? "invert(1) brightness(0.85)" : "none",
                    display: "block",
                  }}
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>
              <span className="skill-grid-card-name">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* ── AI & Advanced Skills ─────────── */}
        <div className="skills-section-header" style={{ marginTop: "72px" }}>
          <h2 className="skills-ai-heading" style={{ textShadow: "0 0 15px rgba(212, 175, 55, 0.5)" }}>
            <span style={{ color: "#ffffff" }}>Autonomous AI</span>
            <span style={{ color: "#ffffff", padding: "0 8px" }}>&amp;</span>
            <span style={{ color: "#F4D03F" }}>Global Intelligence</span>
          </h2>
          <p className="skills-ai-subtitle" style={{ color: "var(--color-text-light)" }}>
            Pioneering next-generation AI solutions with cutting-edge technologies
          </p>
          <div className="skills-underline" style={{ background: "linear-gradient(90deg, #D4AF37, #F4D03F, #D4AF37)", marginTop: "12px", boxShadow: "0 0 10px rgba(212, 175, 55, 0.3)" }} />
        </div>

        <div className="skills-grid-container" ref={aiRef}>
          {aiSkillsList.map((skill, idx) => (
            <div
              key={skill.name}
              className="skill-grid-card"
              onClick={() => handleAiClick(idx)}
              style={{
                opacity: aiVisible ? 1 : 0,
                transform: aiVisible ? "translateY(0) scale(1)" : "translateY(36px) scale(0.82)",
                transition: `opacity 0.5s ease ${idx * 0.07}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${idx * 0.07}s`,
                willChange: "transform, opacity",
                cursor: "pointer",
              }}
            >
              <div className={`skill-grid-card-icon${aiClickedIdx === idx ? " skill-icon-clicked" : ""}`}>
                {skill.icon}
              </div>
              <span className="skill-grid-card-name">{skill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
