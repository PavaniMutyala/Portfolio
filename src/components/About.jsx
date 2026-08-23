import { Brain, Zap, Cpu, Lightbulb, Sparkles, FolderGit2, Award, Briefcase, Trophy, Calendar } from "lucide-react";
import { motion } from "motion/react";
import profilePicDark from "../assets/images/profile_pic_about.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-num">01 // PROFILE</span>
          <h2 className="section-title">
            About <span className="logo-highlight">me</span>
          </h2>
          <div className="section-underline"></div>
        </div>

        {/* Layout Grid */}
        <div className="about-grid" style={{ alignItems: "center", gap: "50px" }}>
          {/* Left Column: Image wrapper */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div className="about-image-wrapper">
              {/* Spinning glow ring behind image */}
              <div className="about-glow-ring" />
              <div className="about-glow-ring-outer" />

              {/* Main photo card */}
              <div className="about-photo-card">
                {/* Corner accents */}
                <span className="about-corner about-corner-tl" />
                <span className="about-corner about-corner-tr" />
                <span className="about-corner about-corner-bl" />
                <span className="about-corner about-corner-br" />

                {/* Scan line sweep */}
                <div className="about-scan-line" />

                <img
                  src={profilePicDark}
                  alt="Pavani Mutyala"
                  className="about-image"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom name tag */}
                <div className="about-name-tag">
                  <span className="about-name-dot" />
                  <span>Pavani Mutyala</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Matter about Pavani & Mini Floating Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div className="about-info" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h3 style={{
                color: "#F4D03F",
                fontSize: "1.6rem",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                textShadow: "0 0 25px rgba(244, 208, 63, 0.6), 0 0 10px rgba(212, 175, 55, 0.4)"
              }}>
                Full Stack Developer &amp; Generative AI Engineer
              </h3>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--color-text-light)" }}>
                I build software that thinks and scales. As a final-year <strong style={{ color: "#fff" }}>B.Tech Computer Science &amp; Technology</strong> student at Sasi Institute of Technology &amp; Engineering, I specialize in engineering autonomous, AI-powered full-stack systems—bridging the gap between high-performance MERN architectures and complex multi-agent LLM pipelines driven by RAG, Pinecone vector embeddings, and AWS cloud infrastructures.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--color-text-light)" }}>
                My engineering philosophy centers on absolute product ownership: writing clean code that remains invisible to the end user yet transformative in execution. Whether architecting database indexing pipelines, optimizing low-latency stateful React UIs, or deploying containerized microservices across hackathon stages and real-world internships, I turn high-ambition concepts into production-ready digital products.
              </p>
            </div>

            {/* Separate Mini Floating Cards */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "8px" }}>
              {[
                { text: "Systems Thinker", icon: Brain },
                { text: "Rapid Learner", icon: Zap },
                { text: "AI Engineer", icon: Cpu },
                { text: "Product Mindset", icon: Lightbulb },
                { text: "Gen AI Architect", icon: Sparkles }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    whileHover={{
                      y: -6,
                      scale: 1.03,
                      boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.4), 0 8px 10px -6px rgba(212, 175, 55, 0.2)",
                      borderColor: "rgba(212, 175, 55, 0.6)",
                      color: "#F4D03F",
                      textShadow: "0 0 10px rgba(244, 208, 63, 0.3)"
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "rgba(212, 175, 55, 0.05)",
                      border: "1px solid rgba(212, 175, 55, 0.2)",
                      padding: "10px 16px",
                      borderRadius: "10px",
                      color: "rgba(255, 255, 255, 0.85)",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      cursor: "default",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <IconComponent size={16} style={{ color: "#F4D03F" }} />
                    <span>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Centered stats bar inside About section */}
        <div className="about-stats-bar">
          <div className="about-stat">
            <span className="about-stat-num">4+</span>
            <span className="about-stat-label">Internships</span>
          </div>
          <div className="about-stat-divider" />
          <div className="about-stat">
            <span className="about-stat-num">10+</span>
            <span className="about-stat-label">Projects</span>
          </div>
          <div className="about-stat-divider" />
          <div className="about-stat">
            <span className="about-stat-num">5+</span>
            <span className="about-stat-label">Hackathons</span>
          </div>
          <div className="about-stat-divider" />
          <div className="about-stat">
            <span className="about-stat-num">8.7+</span>
            <span className="about-stat-label">CGPA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
