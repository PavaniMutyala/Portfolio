import { useState, useEffect, useRef } from "react";
import { certificationsList } from "../data.js";
import { Maximize2, X, Award, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

// Brand colors per issuer
const issuerMeta = {
  AWS: { color: "#D4AF37", textColor: "#D4AF37" }, // Metallic Gold
  Oracle: { color: "#B8860B", textColor: "#B8860B" }, // Deep Bronze
  IBM: { color: "#F4D03F", textColor: "#F4D03F" }, // Shimmering Gold
  Google: { color: "#F4D03F", textColor: "#F4D03F" }, // Shimmering Gold
  Deloitte: { color: "#B8860B", textColor: "#B8860B" }, // Vegas Gold
  TATA: { color: "#AA7C11", textColor: "#AA7C11" }, // Dark Gold
  MongoDB: { color: "#E5C058", textColor: "#E5C058" }, // Pale Gold
};

function getIssuerMeta(issuer) {
  for (const key of Object.keys(issuerMeta)) {
    if (issuer.includes(key)) return issuerMeta[key];
  }
  return { color: "#D4AF37", textColor: "#D4AF37" };
}

function getDriveImageUrl(url) {
  if (!url) return null;
  const match = url.match(/\/d\/([^\/]+)/) || url.match(/id=([^\&]+)/);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  return url;
}

export default function Certifications() {
  const [gridVisible, setGridVisible] = useState(false);
  const [activeCert, setActiveCert] = useState(null);
  const gridRef = useRef(null);

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

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="cert-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-num">06 // VERIFICATION</span>
          <h2 className="section-title">
            Certifications &amp; <span className="logo-highlight">Achievements</span>
          </h2>
          <div className="section-underline" />
          <p className="section-subtitle">
            Industry-recognised certifications from global tech leaders — displayed directly below with full verification credentials.
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="cert-cards-grid" ref={gridRef}>
          {certificationsList.map((cert, idx) => {
            const meta = getIssuerMeta(cert.issuer);
            const imageUrl = getDriveImageUrl(cert.certificateUrl);

            return (
              <motion.div
                key={cert.id}
                className="cert-card"
                whileHover={{ y: -8, boxShadow: `0 15px 30px -10px ${meta.color}40`, borderColor: meta.color }}
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.92)",
                  transition: `opacity 0.55s ease ${idx * 0.08}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${idx * 0.08}s`,
                  willChange: "transform, opacity",
                  "--accent": meta.color,
                }}
              >
                {/* Certificate Image */}
                <div
                  className="cert-card-img-wrapper"
                  onClick={() => imageUrl && setActiveCert({ ...cert, imageUrl, meta })}
                  title="Click to enlarge certificate"
                >
                  {imageUrl ? (
                    <>
                      <img
                        src={imageUrl}
                        alt={cert.title + " Certificate"}
                        className="cert-card-img"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const fileId = cert.certificateUrl?.match(/\/d\/([^\/]+)/)?.[1];
                          if (fileId && !e.target.dataset.tried) {
                            e.target.dataset.tried = "true";
                            e.target.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
                          }
                        }}
                      />
                      <div className="cert-img-overlay">
                        <Maximize2 size={22} className="cert-overlay-icon" />
                        <span className="cert-overlay-text">Click to Enlarge</span>
                      </div>
                    </>
                  ) : (
                    <div className="cert-card-img-placeholder">
                      <Award size={40} style={{ color: meta.color, opacity: 0.5 }} />
                      <span>Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Enlarge Button Only */}
                {cert.certificateUrl && (
                  <div style={{ display: "flex", marginTop: "10px" }}>
                    <button
                      type="button"
                      className="cert-quick-view-btn"
                      onClick={() => setActiveCert({ ...cert, imageUrl, meta })}
                      style={{
                        background: `linear-gradient(135deg, ${meta.color}cc, ${meta.color}99)`,
                        boxShadow: `0 3px 12px ${meta.color}28`,
                        flex: 1,
                      }}
                    >
                      <Maximize2 size={13} />
                      Enlarge Certificate
                    </button>
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-small-open-btn"
                      style={{
                        color: meta.color,
                        marginLeft: "8px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "4px",
                        borderRadius: "4px",
                        background: `rgba(255,255,255,0.08)`,
                        border: `1px solid ${meta.color}44`,
                      }}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}

        </div>

      </div>

      {/* Lightbox Modal for Full Screen Image & Matter Viewing */}
      {activeCert && (
        <div className="cert-lightbox-backdrop" onClick={() => setActiveCert(null)}>
          <div className="cert-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-lightbox-header">
              <div className="cert-lightbox-title-area">
                <span className="cert-lightbox-issuer" style={{ color: activeCert.meta?.color }}>
                  {activeCert.issuer}
                </span>
                <h3 className="cert-lightbox-title">{activeCert.title}</h3>
              </div>
              <button
                className="cert-lightbox-close"
                onClick={() => setActiveCert(null)}
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
            </div>

            <div className="cert-lightbox-body">
              {activeCert.description && (
                <div className="cert-lightbox-desc-box" style={{ borderLeftColor: activeCert.meta?.color || "#D4AF37" }}>
                  <p className="cert-lightbox-desc">{activeCert.description}</p>
                </div>
              )}
              <img
                src={activeCert.imageUrl}
                alt={activeCert.title}
                className="cert-lightbox-img"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="cert-lightbox-footer">
              <span className="cert-lightbox-hint">
                Showing full verification view
              </span>
              {activeCert.certificateUrl && (
                <a
                  href={activeCert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-lightbox-drive-btn"
                  style={{
                    background: `linear-gradient(135deg, ${activeCert.meta?.color || "#D4AF37"}, ${activeCert.meta?.color || "#D4AF37"}cc)`,
                  }}
                >
                  <ExternalLink size={14} />
                  Open Original Document (Google Drive)
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

