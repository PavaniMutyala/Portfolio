import { useEffect, useRef } from "react";
import { experienceTimeline } from "../data.js";
import { Briefcase, GraduationCap, Calendar, MapPin, TrendingUp, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); obs.unobserve(el); } },
      { threshold: 0, rootMargin: "80px 0px 0px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// Brand colors lookup for timeline certificate buttons
function getBrandColor(name) {
  const n = name.toLowerCase();
  if (n.includes("excelerate")) return "#D4AF37"; // Metallic Gold
  if (n.includes("smartbridge")) return "#B8860B"; // Deep Gold
  if (n.includes("skilldzire")) return "#F4D03F"; // Shimmer Gold
  if (n.includes("sasi")) return "#B8860B"; // Vegas Gold
  return "#D4AF37"; // default gold
}

function TimelineCard({ item, idx }) {
  const ref = useReveal();
  const isEdu = item.type === "education";
  const isLeft = idx % 2 === 0;
  const isOngoing = item.duration.toLowerCase().includes("present");
  const isEnabled = !!item.certificateUrl;
  const btnColor = getBrandColor(item.company || "");

  return (
    <div
      ref={ref}
      className={`tl-item ${isLeft ? "tl-left" : "tl-right"} ${isEdu ? "tl-edu" : "tl-intern"} reveal-fade`}
      style={{ "--delay": `${idx * 0.05}s` }}
    >
      {/* Connector dot */}
      <div className={`tl-dot ${isEdu ? "tl-dot--edu" : "tl-dot--intern"}`}>
        {isEdu ? <GraduationCap size={13} /> : <Briefcase size={13} />}
      </div>

      {/* Card */}
      <div className={`tl-card glass-card ${isEdu ? "tl-card--edu" : "tl-card--intern"}`}>
        {/* Top accent bar */}
        <div className="tl-card-bar" />

        <div className="tl-card-inner">
          {/* Header */}
          <div className="tl-header">
            <div className="tl-icon-badge">
              {isEdu ? <GraduationCap size={16} /> : <Briefcase size={16} />}
            </div>
            <div className="tl-header-text">
              <span className={`tl-type-label ${isEdu ? "tl-type-label--edu" : "tl-type-label--intern"}`}>
                {isEdu ? "🎓 Education" : "💼 Internship"}
              </span>
              <h4 className="tl-title">{item.title}</h4>
              <p className={`tl-company ${isEdu ? "tl-company--edu" : "tl-company--intern"}`}>{item.company}</p>
            </div>
          </div>

          {/* Meta row */}
          <div className="tl-meta-row">
            <span className="tl-meta-pill">
              <Calendar size={10} />
              {item.duration}
            </span>
            <span className="tl-meta-pill">
              <MapPin size={10} />
              {isEdu ? "Tadepalligudem, AP" : "Remote / Hybrid"}
            </span>
          </div>

          {/* Description */}
          <p className="tl-desc">{item.description}</p>

          {/* Tech/Skills Tags */}
          {item.tech && item.tech.length > 0 && (
            <div className="hw-tech-tags" style={{ marginTop: "4px" }}>
              {item.tech.map((techItem, tIdx) => (
                <span key={tIdx} className="hw-tech-tag">{techItem}</span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="tl-footer">
            <span className={`tl-status-badge ${isOngoing ? (isEdu ? "tl-status-badge--edu" : "tl-status-badge--intern") : "tl-status-badge--completed"}`}>
              <span className="tl-status-dot" />
              {isOngoing ? "Ongoing" : "Completed"}
            </span>

            {/* View Certificate Button for completed elements */}
            {!isOngoing ? (
              <a
                href={item.certificateUrl || "#"}
                target={isEnabled ? "_blank" : undefined}
                rel="noreferrer"
                className={`hw-cert-btn ${!isEnabled ? "hw-cert-btn--disabled" : "hw-cert-btn--themed"}`}
                onClick={!isEnabled ? (e) => e.preventDefault() : undefined}
                title={!isEnabled ? "Certificate coming soon" : "View Certificate"}
                style={{
                  padding: "6px 12px",
                  fontSize: "10px",
                  "--theme-color": btnColor
                }}
              >
                <ExternalLink size={10} />
                {isEnabled ? "Certificate" : "Coming Soon"}
              </a>
            ) : (
              <span className="tl-footer-note">
                <TrendingUp size={10} />
                {isEdu ? "CGPA on track" : "Active Engagement"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  const sparkTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  return (
    <section id="experience" className="exp-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-num">04 // JOURNEY</span>
          <h2 className="section-title">
            EXPERIENCE &amp; <span className="logo-highlight">EDUCATION</span>
          </h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            A track record of building, learning, and shipping — across internships, institutions, and competitive arenas.
          </p>
        </div>
        {/* Vertical Timeline */}
        <div className="tl-container" ref={containerRef}>
          {/* Center spine */}
          <div className="tl-spine">
            <motion.div
              style={{
                position: "absolute",
                left: "-2px",
                width: "6px",
                height: "100px",
                background: "linear-gradient(180deg, transparent 0%, rgba(212, 175, 55, 0.4) 20%, #D4AF37 50%, #FFFFFF 60%, rgba(212, 175, 55, 0.4) 80%, transparent 100%)",
                boxShadow: "0 0 25px 6px rgba(212, 175, 55, 0.75), 0 0 10px 2px rgba(255, 255, 255, 0.4)",
                borderRadius: "10px",
                top: sparkTop,
                marginTop: "-50px", // Center it vertically on the scroll anchor
                zIndex: 10
              }}
            />
          </div>

          {experienceTimeline.map((item, idx) => (
            <TimelineCard key={item.id} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
