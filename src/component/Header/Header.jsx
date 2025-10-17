import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/img/gsh_logo_image.png";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const sections = ["home", "about", "portfolio", "clients", "contact", "apply"];

  useEffect(() => {
    // If IntersectionObserver is available, use it — it's more reliable than calculating offsets manually.
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observerOptions = {
        root: null,
        // Treat the middle of the viewport as the trigger area:
        // when an element crosses the middle, it becomes "active".
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // entry.target.id should match one of your "sections"
            setActiveSection(entry.target.id);
          }
        });
      }, observerOptions);

      // Observe each section if it exists
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      // attempt an initial detection (in case the page loaded already scrolled)
      const initial = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });
      if (initial) setActiveSection(initial);

      return () => observer.disconnect();
    }

    // Fallback for browsers without IntersectionObserver
    const fallback = () => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        for (let i = 0; i < sections.length; i++) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const offsetTop = section.offsetTop;
            const offsetHeight = section.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    };

    return fallback();
    // Intentionally empty deps — 'sections' is static in your component.
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
  };

  return (
    <header>
      <div className="menubar">
        <nav className="navbar navbar-expand-lg fixed-top navbar-content">
          <div className="container">
            {/* Logo */}
            <a
              href={location.pathname === "/apply" ? "/#home" : "#home"}
              className="navbar-brand logo-link"
            >
              <img src={logo} alt="GSH Logo" className="logo-img" />
            </a>


            {/* Mobile toggle */}
            <button
              className={`navbar-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>


            {/* Links */}
            <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
              <ul className={`navbar-nav ms-auto ${menuOpen ? "show" : ""}`}>
                {sections.map((id) => (
                  <li key={id} className="nav-item" >
                    <a
                      href={location.pathname === "/apply" ? `/#${id}` : `#${id}`}
                      className={`nav-link ${activeSection === id ? "active" : ""}`}
                      onClick={() => {
                        handleNavClick(id);
                        setMenuOpen(false);
                      }}
                    >
                      {id === "clients"
                        ? "Our Clients"
                        : id === "contact"
                          ? "Contact Us"
                          : id === "apply"
                            ? "Apply Now"
                            : id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;