import { useState, useEffect } from "react";
import { hackathonsList, workshopsList } from "../data.js";
import { Award, Code, Hammer, ExternalLink, Maximize2, X } from "lucide-react";
import { motion } from "motion/react";

// Brand colors lookup for certificate buttons & card highlights
function getBrandColor(name) {
  const n = name.toLowerCase();
  if (n.includes("women who master") || n.includes("women")) return "#D4AF37"; // Metallic Gold
  if (n.includes("google") || n.includes("solution challenge") || n.includes("built with ai")) return "#F4D03F"; // Shimmering Gold
  if (n.includes("intellipaat")) return "#B8860B"; // Deep Gold
  if (n.includes("purplelane")) return "#B8860B"; // Vegas Gold
  if (n.includes("coding ninjas") || n.includes("vibe2ship")) return "#AA7C11"; // Bronze Gold
  if (n.includes("india.runs") || n.includes("back2skill")) return "#E5C058"; // Lighter Gold
  if (n.includes("ai for bharat")) return "#D4AF37"; // Metallic Gold
  if (n.includes("smart india")) return "#B8860B"; // Deep Gold
  return "#D4AF37"; // default gold
}

function getDriveImageUrl(url) {
  if (!url) return null;
  const match = url.match(/\/d\/([^\/]+)/) || url.match(/id=([^\&]+)/);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  return url;
}

// Reusable Animated Hackathon Card
function HackCard({ item, index, onSelectCert }) {
  const btnColor = getBrandColor(item.name || "");
  const hasCert = !!item.certificateUrl;
  const certImgUrl = getDriveImageUrl(item.certificateUrl);

  return (
    <motion.div
      className="glass-card hw-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      {/* Media Container: Show Certificate Image if available, else Logo */}
      <div className="hw-card-media">
        {certImgUrl ? (
          <div
            className="hw-cert-img-container"
            onClick={() => onSelectCert && onSelectCert({ title: item.name, issuer: item.project || "Hackathon", certificateUrl: item.certificateUrl, imageUrl: certImgUrl, color: btnColor })}
            title="Click to view full certificate image"
          >
            <img
              src={certImgUrl}
              alt={item.name + " Certificate"}
              className="hw-cert-direct-img"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const fileId = item.certificateUrl?.match(/\/d\/([^\/]+)/)?.[1];
                if (fileId && !e.target.dataset.tried) {
                  e.target.dataset.tried = "true";
                  e.target.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
                }
              }}
            />
            <div className="hw-cert-img-overlay">
              <Maximize2 size={18} />
              <span>View Certificate Image</span>
            </div>
          </div>
        ) : item.logo ? (
          <img src={item.logo} alt={item.name} className="hw-card-media-img" />
        ) : (
          <div className="hw-card-media-fallback">
            <Award size={40} style={{ color: btnColor }} />
          </div>
        )}

        {item.year && <span className="hw-media-year-badge">{item.year}</span>}
        {item.achievement && (
          <span className="hw-media-achievement-badge">
            <span className="hw-achievement-dot" />
            {item.achievement}
          </span>
        )}
      </div>

      {/* Card Content & Info */}
      <div className="hw-card-content">
        <div className="hw-header-text">
          <h4 className="hw-item-name">{item.name}</h4>
          <span className="hw-item-tag">{item.tag}</span>
        </div>

        {item.project && (
          <div className="hw-project-row">
            <span className="hw-label">Project:</span>
            <span className="hw-project-value">{item.project}</span>
          </div>
        )}

        <p className="hw-description-2lines" title={item.description}>
          {item.description}
        </p>

        {item.tech && item.tech.length > 0 && (
          <div className="hw-tech-tags">
            {item.tech.map((techItem, tIdx) => (
              <span key={tIdx} className="hw-tech-tag">{techItem}</span>
            ))}
          </div>
        )}
      </div>

      {/* Centered View Certificate Button */}
      <div className="hw-card-footer">
        {hasCert ? (
          <div className="hw-footer-btn-group">
            <button
              type="button"
              className="hw-view-cert-btn"
              onClick={() => onSelectCert && onSelectCert({ title: item.name, issuer: item.project || "Hackathon", certificateUrl: item.certificateUrl, imageUrl: certImgUrl, color: btnColor })}
              style={{
                background: `linear-gradient(135deg, ${btnColor}, ${btnColor}cc)`,
                boxShadow: `0 4px 18px ${btnColor}44`,
              }}
            >
              <Maximize2 size={13} />
              Enlarge Certificate
            </button>
            <a
              href={item.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hw-drive-icon-btn"
              title="Open on Google Drive"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        ) : (
          <span
            className="hw-view-cert-btn hw-view-cert-btn--disabled"
            title="Certificate coming soon"
          >
            <ExternalLink size={13} />
            Certificate Coming Soon
          </span>
        )}
      </div>
    </motion.div>
  );
}

// Reusable Animated Workshop Card
function WorkshopCard({ item, index, onSelectCert }) {
  const btnColor = getBrandColor(item.name || item.organizer || "");
  const hasCert = !!item.certificateUrl;
  const certImgUrl = getDriveImageUrl(item.certificateUrl);

  return (
    <motion.div
      className="glass-card hw-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      {/* Media Container: Show Certificate Image directly if available, else Logo */}
      <div className="hw-card-media">
        {certImgUrl ? (
          <div
            className="hw-cert-img-container"
            onClick={() => onSelectCert && onSelectCert({ title: item.name, issuer: item.organizer || "Workshop", certificateUrl: item.certificateUrl, imageUrl: certImgUrl, color: btnColor })}
            title="Click to view full certificate image"
          >
            <img
              src={certImgUrl}
              alt={item.name + " Certificate"}
              className="hw-cert-direct-img"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const fileId = item.certificateUrl?.match(/\/d\/([^\/]+)/)?.[1];
                if (fileId && !e.target.dataset.tried) {
                  e.target.dataset.tried = "true";
                  e.target.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
                }
              }}
            />
            <div className="hw-cert-img-overlay">
              <Maximize2 size={18} />
              <span>View Certificate Image</span>
            </div>
          </div>
        ) : item.logo ? (
          <img src={item.logo} alt={item.name} className="hw-card-media-img" />
        ) : (
          <div className="hw-card-media-fallback">
            <Hammer size={40} style={{ color: btnColor }} />
          </div>
        )}
        {item.organizer && (
          <span className="hw-media-year-badge" style={{ borderColor: `${btnColor}66` }}>
            {item.organizer}
          </span>
        )}
      </div>

      {/* Card Content & Info */}
      <div className="hw-card-content">
        <div className="hw-header-text">
          <h4 className="hw-item-name">{item.name}</h4>
          <span className="hw-item-tag">{item.tag}</span>
        </div>

        <p className="hw-description-2lines" title={item.description}>
          {item.description}
        </p>

        {item.tech && item.tech.length > 0 && (
          <div className="hw-tech-tags">
            {item.tech.map((techItem, tIdx) => (
              <span key={tIdx} className="hw-tech-tag">{techItem}</span>
            ))}
          </div>
        )}
      </div>

      {/* Centered View Certificate Button */}
      <div className="hw-card-footer">
        {hasCert ? (
          <div className="hw-footer-btn-group">
            <button
              type="button"
              className="hw-view-cert-btn"
              onClick={() => onSelectCert && onSelectCert({ title: item.name, issuer: item.organizer || "Workshop", certificateUrl: item.certificateUrl, imageUrl: certImgUrl, color: btnColor })}
              style={{
                background: `linear-gradient(135deg, ${btnColor}, ${btnColor}cc)`,
                boxShadow: `0 4px 18px ${btnColor}44`,
              }}
            >
              <Maximize2 size={13} />
              Enlarge Certificate
            </button>
            <a
              href={item.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hw-drive-icon-btn"
              title="Open on Google Drive"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        ) : (
          <span
            className="hw-view-cert-btn hw-view-cert-btn--disabled"
            title="Certificate coming soon"
          >
            <ExternalLink size={13} />
            Certificate Coming Soon
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function HackathonsWorkshops() {
  const [activeCert, setActiveCert] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="hackathons">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-num">05 // COMMUNITY</span>
          <h2 className="section-title">
            HACKATHONS &amp; <span className="logo-highlight">WORKSHOPS</span>
          </h2>
          <div className="section-underline"></div>
        </div>

        {/* ── Hackathons Grid Section ── */}
        <div className="hw-group-section">
          <div className="hw-row-label">
            <div className="hw-col-icon"><Code size={18} /></div>
            <div>
              <span className="hw-col-title">Competitive Hackathons</span>
            </div>
          </div>

          <div className="hw-cards-grid">
            {hackathonsList.map((item, idx) => (
              <HackCard key={`hack-${item.id || idx}`} item={item} index={idx} onSelectCert={setActiveCert} />
            ))}
          </div>
        </div>

        {/* ── Workshops Grid Section ── */}
        <div className="hw-group-section" style={{ marginTop: "50px" }}>
          <div className="hw-row-label">
            <div className="hw-col-icon"><Hammer size={18} /></div>
            <div>
              <span className="hw-col-title">Technical Bootcamps &amp; Workshops</span>
            </div>
          </div>

          <div className="hw-cards-grid">
            {workshopsList.map((item, idx) => (
              <WorkshopCard key={`ws-${item.id || idx}`} item={item} index={idx} onSelectCert={setActiveCert} />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Hackathons/Workshops */}
      {activeCert && (
        <div className="cert-lightbox-backdrop" onClick={() => setActiveCert(null)}>
          <div className="cert-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-lightbox-header">
              <div className="cert-lightbox-title-area">
                <span className="cert-lightbox-issuer" style={{ color: activeCert.color || "#D4AF37" }}>
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
              <img
                src={activeCert.imageUrl}
                alt={activeCert.title}
                className="cert-lightbox-img"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="cert-lightbox-footer">
              <span className="cert-lightbox-hint">
                Full verification view
              </span>
              {activeCert.certificateUrl && (
                <a
                  href={activeCert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-lightbox-drive-btn"
                  style={{
                    background: `linear-gradient(135deg, ${activeCert.color || "#D4AF37"}, ${activeCert.color || "#D4AF37"}cc)`,
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

