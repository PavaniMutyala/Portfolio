import { useState, useEffect } from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Download, 
  Terminal, 
  GraduationCap, 
  Briefcase, 
  Award, 
  X, 
  Printer, 
  FileText,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  Cpu
} from "lucide-react";
import profilePicLight from "../assets/images/profile_pic_about.jpg";
import BackgroundSnippets from "./BackgroundSnippets.jsx";

const typewriterWords = [
  "Full Stack Developer",
  "Generative AI Engineer",
  "MERN Stack Architect",
  "Agentic AI Builder",
  "Problem Solver",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => {
    const handleType = () => {
      const fullWord = typewriterWords[wordIndex];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(120);

        if (currentText === fullWord) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(60);

        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typewriterWords.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadTextResume = () => {
    const resumeText = `
=========================================
          PAVANI MUTYALA RESUME
=========================================
EMAIL: pavanimutyala44@gmail.com
LINKEDIN: https://linkedin.com
GITHUB: https://github.com/PavaniMutyala
LOCATION: Tadepalligudem, Andhra Pradesh, India

-----------------------------------------
EDUCATION
-----------------------------------------
* B.Tech in Computer Science and Technology (CST)
  Sasi Institute of Technology and Engineering
  Duration: 2022 - 2026 (Final Year)
  CGPA: 8.65 / 10.00

* Board of Intermediate Education (MPC)
  Sri Chaitanya Junior College
  Duration: 2020 - 2022
  GPA: 9.85 / 10.00

* Secondary School Certificate (SSC)
  St. Mark's High School
  Duration: Passed in 2020
  GPA: 10.0 / 10.0

-----------------------------------------
EXPERIENCE & INTERNSHIPS
-----------------------------------------
* Web Developer / AI Intern
  - Developed and customized responsive web applications.
  - Built custom server actions and leveraged AI APIs for smart search.

* Salesforce Developer Virtual Intern
  - Acquired hands-on expertise in cloud systems, Apex, and LWC.

* AWS Cloud Virtual Intern
  - Configured IAM, EC2 instances, and managed cloud deployments.

-----------------------------------------
SKILLS & TECHNOLOGY STACK
-----------------------------------------
* Front-End: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS
* Back-End: Node.js, Express.js
* Database: MongoDB, Local SQL
* Cloud/Platforms: AWS Services, Salesforce, Git/GitHub
* Programming: Java, Python

=========================================
      GENERATED VIA PORTFOLIO SECURE • 2026
=========================================
`;
    const element = document.createElement("a");
    const file = new Blob([resumeText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "Pavani_Mutyala_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="home" className="hero-section" style={{ position: "relative" }}>
      {/* Dynamic Cyber Ambient Grid Overlay */}
      <div className="hero-bg-grid"></div>

      {/* Immersive Floating Background Code Tags */}
      <BackgroundSnippets />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-wrapper">
          {/* Main Hero Content */}
          <div className="hero-content">
            <div className="hero-tag">
              <span className="hero-tag-dot"></span>
              OPEN FOR OPPORTUNITIES
            </div>

            {/* Profile Title with modern styling */}
            <div className="hero-title-area">
              <h1 className="hero-headline">
                PAVANI <span>MUTYALA</span>
              </h1>
            </div>

            {/* Subtitle / Typewriter */}
            <div className="hero-typewriter">
              <span className="typewriter-arrow">&gt;</span>
              <span style={{ color: "#fff", fontWeight: "600" }}>{currentText}</span>
              <span className="typewriter-cursor"></span>
            </div>

            {/* Biography */}
            <p className="hero-desc">
              Building <span style={{ color: "var(--color-violet)", fontWeight: "600" }}>MERN Stack</span> apps &amp;{" "}
              <span style={{ color: "var(--color-cyan)", fontWeight: "600" }}>Generative AI</span> systems —
              turning complex problems into fast, elegant digital products.
            </p>

            {/* CTA Actions */}
            <div className="hero-actions">
              <button onClick={scrollToProjects} className="btn btn-primary" id="btn-view-work">
                View My Work <ArrowRight size={14} />
              </button>
              <a
                href="https://drive.google.com/file/d/1Ssy8wCvemzcHjIYLUZhfMcaX2dX5CNLg/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                id="btn-resume-download"
              >
                <Download size={14} /> Download Resume
              </a>
            </div>

            {/* Social Networks */}
            <div className="hero-socials">
              <a
                id="linkedin-link"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                id="github-link"
                href="https://github.com/PavaniMutyala"
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                id="email-link"
                href="mailto:pavanimutyala44@gmail.com"
                className="hero-social-link"
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Right Hero decoration / Profile Photo with Continuous Breathing Glow */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div className="hero-large-profile-container">
              <div className="hero-large-profile">
                <img
                  src={profilePicLight}
                  alt="Pavani Mutyala Profile"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* --- Interactive Future Resume Modal --- */}
      {showResumeModal && (
        <div className="resume-modal-overlay" onClick={() => setShowResumeModal(false)}>
          <div className="resume-modal" onClick={(e) => e.stopPropagation()} id="resume-popup">
            
            {/* Modal Header */}
            <div className="resume-modal-header">
              <div className="resume-modal-title">
                <FileText size={22} style={{ color: "var(--color-violet)" }} />
                <div>
                  <h3 className="resume-title-text">Pavani Mutyala</h3>
                  <span className="resume-title-mono">// ACADEMIC PROFILE & STACK</span>
                </div>
              </div>
              <button 
                className="resume-close-btn" 
                onClick={() => setShowResumeModal(false)}
                title="Close Profile"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="resume-modal-body">
              <div className="resume-tabs">
                <button
                  className={`resume-tab-btn ${activeTab === "education" ? "active" : ""}`}
                  onClick={() => setActiveTab("education")}
                >
                  Education
                </button>
                <button
                  className={`resume-tab-btn ${activeTab === "experience" ? "active" : ""}`}
                  onClick={() => setActiveTab("experience")}
                >
                  Experience
                </button>
                <button
                  className={`resume-tab-btn ${activeTab === "skills" ? "active" : ""}`}
                  onClick={() => setActiveTab("skills")}
                >
                  Core Skills
                </button>
              </div>

              {/* Tab Panel Content */}
              {activeTab === "education" && (
                <div className="resume-panel">
                  <div className="resume-block">
                    <h4 className="resume-block-title">B.Tech in Computer Science and Technology (CST)</h4>
                    <span className="resume-block-sub">Sasi Institute of Technology and Engineering</span>
                    <div className="resume-block-meta">
                      <div className="resume-block-meta-item">
                        <Calendar size={13} />
                        <span>2022 - 2026 (Final Year)</span>
                      </div>
                      <div className="resume-block-meta-item">
                        <MapPin size={13} />
                        <span>Tadepalligudem, AP</span>
                      </div>
                      <div className="resume-block-meta-item">
                        <Award size={13} />
                        <span style={{ color: "#fff", fontWeight: "600" }}>CGPA: 8.65 / 10</span>
                      </div>
                    </div>
                    <ul className="resume-desc-list">
                      <li>Focusing on advanced database systems, computer networks, and full-stack software development.</li>
                      <li>Engaging in key university technical initiatives, hackathons, and innovative hands-on web design workshops.</li>
                    </ul>
                  </div>

                  <div className="resume-block">
                    <h4 className="resume-block-title">Intermediate MPC (Maths, Physics, Chemistry)</h4>
                    <span className="resume-block-sub">Sri Chaitanya Junior College</span>
                    <div className="resume-block-meta">
                      <div className="resume-block-meta-item">
                        <Calendar size={13} />
                        <span>2020 - 2022</span>
                      </div>
                      <div className="resume-block-meta-item">
                        <Award size={13} />
                        <span style={{ color: "#fff", fontWeight: "600" }}>GPA: 9.85 / 10</span>
                      </div>
                    </div>
                  </div>

                  <div className="resume-block">
                    <h4 className="resume-block-title">Secondary School Certificate (SSC)</h4>
                    <span className="resume-block-sub">St. Mark's High School</span>
                    <div className="resume-block-meta">
                      <div className="resume-block-meta-item">
                        <Calendar size={13} />
                        <span>Passed in 2020</span>
                      </div>
                      <div className="resume-block-meta-item">
                        <Award size={13} />
                        <span style={{ color: "#fff", fontWeight: "600" }}>GPA: 10.0 / 10.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div className="resume-panel">
                  <div className="resume-block">
                    <h4 className="resume-block-title">Web Developer / AI Intern</h4>
                    <span className="resume-block-sub">Remote / Hybrid Internship</span>
                    <div className="resume-block-meta">
                      <div className="resume-block-meta-item">
                        <Calendar size={13} />
                        <span>Active Term</span>
                      </div>
                      <div className="resume-block-meta-item">
                        <CheckCircle2 size={13} style={{ color: "#10b981" }} />
                        <span>Successful Complete</span>
                      </div>
                    </div>
                    <ul className="resume-desc-list">
                      <li>Engineered custom responsive interfaces utilizing modern frameworks and Tailwind styles.</li>
                      <li>Implemented server routes and optimized API query flows for fast search retrieval.</li>
                    </ul>
                  </div>

                  <div className="resume-block">
                    <h4 className="resume-block-title">Salesforce Developer Virtual Intern</h4>
                    <span className="resume-block-sub">Salesforce Academy Portal</span>
                    <div className="resume-block-meta">
                      <div className="resume-block-meta-item">
                        <CheckCircle2 size={13} style={{ color: "#10b981" }} />
                        <span>Credential Earned</span>
                      </div>
                    </div>
                    <ul className="resume-desc-list">
                      <li>Acquired advanced expertise in configuring secure cloud environments and database triggers.</li>
                      <li>Designed user experiences using APEX programming languages and custom web interfaces.</li>
                    </ul>
                  </div>

                  <div className="resume-block">
                    <h4 className="resume-block-title">AWS Cloud Virtual Intern</h4>
                    <span className="resume-block-sub">AICTE / AWS Academy</span>
                    <div className="resume-block-meta">
                      <div className="resume-block-meta-item">
                        <CheckCircle2 size={13} style={{ color: "#10b981" }} />
                        <span>Credential Earned</span>
                      </div>
                    </div>
                    <ul className="resume-desc-list">
                      <li>Practiced deployment of cloud apps, configured secured IAM access protocols, and launched EC2 instances.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="resume-panel">
                  <div className="resume-block">
                    <h4 className="resume-block-title" style={{ marginBottom: "15px" }}>Full Stack Technology Stack</h4>
                    <div className="resume-skills-grid">
                      <div className="resume-skill-card">
                        <span className="resume-skill-name">React.js</span>
                      </div>
                      <div className="resume-skill-card">
                        <span className="resume-skill-name">Node.js</span>
                      </div>
                      <div className="resume-skill-card">
                        <span className="resume-skill-name">Express.js</span>
                      </div>
                      <div className="resume-skill-card">
                        <span className="resume-skill-name">MongoDB</span>
                      </div>
                      <div className="resume-skill-card">
                        <span className="resume-skill-name">Tailwind CSS</span>
                      </div>
                      <div className="resume-skill-card">
                        <span className="resume-skill-name">JavaScript (ES6+)</span>
                      </div>
                      <div className="resume-skill-card">
                        <span className="resume-skill-name">Java</span>
                      </div>
                      <div className="resume-skill-card">
                        <span className="resume-skill-name">Python</span>
                      </div>
                      <div className="resume-skill-card">
                        <span className="resume-skill-name">Salesforce Cloud</span>
                      </div>
                      <div className="resume-skill-card">
                        <span className="resume-skill-name">AWS Services</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer with Actions */}
            <div className="resume-modal-footer">
              <a
                href="https://drive.google.com/file/d/1EZV8GeijI27mJlu4d8QJri7r5LZFk4Jm/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                title="View / Download PDF Resume"
                style={{ fontSize: "12px", padding: "8px 16px", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <Download size={14} /> Download PDF
              </a>
              <button 
                onClick={() => window.print()} 
                className="btn btn-primary"
                title="Print current resume card"
                style={{ fontSize: "12px", padding: "8px 16px" }}
              >
                <Printer size={14} /> Print Resume
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
