import { useState, useEffect } from "react";
import {
  Home,
  User,
  Code2,
  FolderGit2,
  Briefcase,
  LayoutGrid,
  Award,
  Mail
} from "lucide-react";

const dockItems = [
  { id: "home", label: "Home", href: "#home", icon: Home },
  { id: "about", label: "About", href: "#about", icon: User },
  { id: "skills", label: "Skills", href: "#skills", icon: Code2 },
  { id: "projects", label: "Projects", href: "#projects", icon: FolderGit2 },
  { id: "experience", label: "Experience", href: "#experience", icon: Briefcase },
  { id: "hackathons", label: "Hackathons", href: "#hackathons", icon: LayoutGrid },
  { id: "certifications", label: "Certifications", href: "#certifications", icon: Award },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail }
];

export default function FloatingDock() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = dockItems.length - 1; i >= 0; i--) {
        const item = dockItems[i];
        const section = document.querySelector(item.href);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href, id) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="floating-dock-wrapper">
      <div className="floating-dock-container glass-card">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`dock-btn ${isActive ? "active" : ""}`}
              onClick={(e) => handleClick(e, item.href, item.id)}
              title={item.label}
            >
              <Icon size={18} />
              <span className="dock-tooltip">{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
