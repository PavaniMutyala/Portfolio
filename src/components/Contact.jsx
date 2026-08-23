import { useState, useRef } from "react";
import { Mail, Linkedin, Github, Send, Copy, Check, Loader2, CheckCircle, XCircle } from "lucide-react";
import profilePicContact from "../assets/images/profile_pic_new.jpg";

const WEB3FORMS_ACCESS_KEY = "acd6224b-4630-4359-a75e-4de79f5b79c1";

export default function Contact() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pavanimutyala44@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMsg("Please fill in all required fields (Name, Email, Message).");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: formState.subject
            ? `[Portfolio] ${formState.subject}`
            : `[Portfolio] New message from ${formState.name}`,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          from_name: formState.name,
          replyto: formState.email,
          botcheck: "",
        }),
      });

      const result = await response.json();
      console.log("Web3Forms response:", result);

      if (result.success) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(null), 8000);
      } else {
        setErrorMsg(result.message || "Submission failed. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setErrorMsg("Network error. Check your internet connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ paddingBottom: "160px" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-num">07 // COMMUNICATIONS</span>
          <h2 className="section-title">
            Let's <span className="logo-highlight">Build Together</span>
          </h2>
          <div className="section-underline"></div>
          <p className="section-subtitle" style={{ maxWidth: "560px", margin: "14px auto 0" }}>
            Got a bold idea, an engineering challenge, or a role that demands creativity and code?
            I'm all ears — let's turn it into something extraordinary.
          </p>
        </div>

        <div className="contact-grid">
          {/* ── Left Column: Info ── */}
          <div className="contact-info-panel">
            <div className="contact-heading-text">
              <h3>Ready to build something that matters?</h3>
              <p>
                I'm actively seeking <strong>full-stack engineering roles</strong>, AI-integration projects,
                and internships where I can ship real impact.
                Whether it's a startup MVP, an enterprise AI tool, or a hackathon sprint —
                I show up with full ownership and ship on time.
              </p>
            </div>

            {/* Profile Image */}
            <div style={{ display: "flex", justifyContent: "center", margin: "20px 0 25px 0" }}>
              <div className="contact-profile-pic">
                <img
                  src={profilePicContact}
                  alt="Pavani Mutyala"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    backgroundColor: "var(--color-dark)"
                  }}
                />
              </div>
            </div>

            {/* Direct Connect Cards */}
            <div className="contact-list" style={{ gap: "8px" }}>
              {/* Email */}
              <div className="glass-card contact-item" style={{ padding: "10px 14px" }}>
                <div className="contact-item-left" style={{ gap: "10px" }}>
                  <div className="contact-icon" style={{ width: "32px", height: "32px", flexShrink: 0 }}>
                    <Mail size={14} />
                  </div>
                  <div>
                    <span className="contact-label" style={{ fontSize: "8px" }}>EMAIL ADDRESS</span>
                    <div>
                      <a href="mailto:pavanimutyala44@gmail.com" className="contact-value" style={{ fontSize: "12px" }}>
                        pavanimutyala44@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <button onClick={handleCopyEmail} className="contact-copy-btn" title="Copy Email" style={{ padding: "5px 8px" }}>
                  {copied ? <Check size={12} style={{ color: "#10b981" }} /> : <Copy size={12} />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="glass-card contact-item" style={{ padding: "10px 14px" }}>
                <div className="contact-item-left" style={{ gap: "10px" }}>
                  <div className="contact-icon" style={{ width: "32px", height: "32px", flexShrink: 0 }}>
                    <Linkedin size={14} />
                  </div>
                  <div>
                    <span className="contact-label" style={{ fontSize: "8px" }}>PROFESSIONAL NETWORKS</span>
                    <div>
                      <a href="https://www.linkedin.com/in/pavani-mutyala-b93aa832a" target="_blank" rel="noreferrer" className="contact-value" style={{ fontSize: "12px" }}>
                        linkedin.com/in/pavani-mutyala
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* GitHub */}
              <div className="glass-card contact-item" style={{ padding: "10px 14px" }}>
                <div className="contact-item-left" style={{ gap: "10px" }}>
                  <div className="contact-icon" style={{ width: "32px", height: "32px", flexShrink: 0 }}>
                    <Github size={14} />
                  </div>
                  <div>
                    <span className="contact-label" style={{ fontSize: "8px" }}>DEVELOPMENT REPOSITORY</span>
                    <div>
                      <a href="https://github.com/PavaniMutyala" target="_blank" rel="noreferrer" className="contact-value" style={{ fontSize: "12px" }}>
                        github.com/PavaniMutyala
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Contact Form ── */}
          <div className="glass-card contact-form-panel">
            <div className="form-panel-header">
              <h3 className="form-panel-title">Send me a message</h3>
              <p className="form-panel-sub">// I'll reply within 24 hours</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Honeypot - hidden from humans, traps bots */}
              <input type="checkbox" name="botcheck" style={{ display: "none" }} readOnly />

              {/* Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  autoComplete="name"
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="form-control"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  autoComplete="email"
                />
              </div>

              {/* Subject */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  className="form-control"
                  placeholder="Inquiry / Opportunity / Collaboration"
                  value={formState.subject}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  className="form-control"
                  placeholder="Write your message here..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                ></textarea>
              </div>

              {/* Success Banner */}
              {status === "success" && (
                <div className="form-alert success">
                  <CheckCircle size={18} style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Message sent! 🎉</strong>
                    <div style={{ fontSize: "12px", marginTop: "3px", opacity: 0.9 }}>
                      Thanks for reaching out — I'll get back to you within 24 hours.
                    </div>
                  </div>
                </div>
              )}

              {/* Error Banner */}
              {status === "error" && (
                <div className="form-alert error">
                  <XCircle size={18} style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Couldn't send message</strong>
                    <div style={{ fontSize: "12px", marginTop: "3px", opacity: 0.9 }}>
                      {errorMsg}
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                id="contact-submit-btn"
                className="btn btn-primary btn-submit"
                disabled={status === "loading" || status === "success"}
                style={{
                  opacity: status === "loading" ? 0.7 : 1,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  width: "100%",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "14px 24px",
                  fontSize: "14px",
                }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
              </button>

              <p style={{ fontSize: "11px", color: "var(--color-text-dim)", textAlign: "center", marginTop: "10px" }}>
                Or reach me directly at{" "}
                <a href="mailto:pavanimutyala44@gmail.com" style={{ color: "var(--color-accent)", textDecoration: "none" }}>
                  pavanimutyala44@gmail.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
