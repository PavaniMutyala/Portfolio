import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track current section intersection
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          const id = section.getAttribute("id") || "home";
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`} id="site-header">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, "#home")}>
          <span className="logo-highlight">PAVANI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="btn btn-secondary nav-cta"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Connect <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${isActive ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginTop: "12px", width: "100%" }}
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Let's Connect <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
