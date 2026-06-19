import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navbarRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth <= 1024 && !isMenuOpen) {
        setIsServicesOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    if (isMobile) setIsMenuOpen(false);
  }, [location.pathname, isMobile]);

  const logoUrl = "/Logo.png";

  const IconHome = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );

  const IconCode = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );

  const IconUsers = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const IconBriefcase = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );

  const IconMail = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const IconGlobe = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );

  const IconCog = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  const IconSparkles = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );

  const servicesItems = [
    {
      name: "Websites",
      path: "/services",
      icon: <IconGlobe />,
      description: "Custom responsive website development & design services",
    },
    {
      name: "Automation",
      path: "/services",
      icon: <IconCog />,
      description: "Business process automation solutions for efficiency",
    },
    {
      name: "Explore All Services",
      path: "/services",
      icon: <IconSparkles />,
      description: "View all our technology and digital services",
    },
  ];

  const navLinks = [
    {
      name: "Home",
      path: "/",
      title: "Home | SMYVISION Technologies",
      icon: <IconHome />,
    },
    {
      name: "About",
      path: "/about",
      title: "About Us | SMYVISION Technologies",
      icon: <IconUsers />,
    },
    {
      name: "Careers",
      path: "/careers",
      title: "Careers | Join SMYVISION",
      icon: <IconBriefcase />,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleServices = (e) => {
    e.stopPropagation();
    setIsServicesOpen((prev) => !prev);
  };

  return (
    <header
      ref={navbarRef}
      className={`navbar-container ${isScrolled ? "scrolled" : ""}`}
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="SMYVISION Technologies" />
      <link itemProp="url" href="https://smyvisiontechnologies.vercel.app" />

      <nav
        className="navbar"
        aria-label="Main Navigation"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <Link
          to="/"
          className="logo-link"
          aria-label="SMYVISION Technologies Home"
          itemProp="url"
        >
          <div className="logo-wrapper" itemScope itemType="https://schema.org/ImageObject">
            <div className="logo-image-container">
              <img
                src={logoUrl}
                alt="SMYVISION Technologies Logo"
                className="logo-image"
                width="40"
                height="40"
                loading="lazy"
                itemProp="contentUrl"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "block";
                }}
              />
              <div className="logo-fallback" style={{ display: "none" }}>
                <div className="logo-icon">SV</div>
              </div>
            </div>

            <div className="logo-text-container">
              <h1 className="logo-main" itemProp="name">SMYVISION</h1>
              <span className="logo-tagline" itemProp="description">TECHNOLOGIES</span>
            </div>

            {isMobile && (
              <div className="mobile-company-name">
                <div className="mobile-company-main">SMYVISION</div>
                <div className="mobile-company-sub">TECHNOLOGIES</div>
              </div>
            )}
          </div>
        </Link>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              label={link.name}
              title={link.title}
              current={location.pathname === link.path}
              icon={link.icon}
            />
          ))}

          <div
            ref={servicesRef}
            className="services-container"
            onMouseEnter={() => !isMobile && setIsServicesOpen(true)}
            onMouseLeave={() => !isMobile && setIsServicesOpen(false)}
            itemScope
            itemType="https://schema.org/Service"
          >
            <button
              className={`services-trigger ${isServicesOpen ? "active" : ""} ${
                location.pathname.startsWith("/services") ? "current" : ""
              }`}
              onClick={toggleServices}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
              aria-label="Our Services"
              itemProp="name"
            >
              <span className="nav-icon desktop-icon" aria-hidden="true">
                <IconCode />
              </span>
              Services
              <svg className={`dropdown-arrow ${isServicesOpen ? "open" : ""}`} width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={`services-dropdown ${isServicesOpen ? "open" : ""}`} aria-label="Our Services Menu" role="menu">
              {servicesItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="service-item"
                  onClick={() => setIsServicesOpen(false)}
                  role="menuitem"
                  aria-label={item.description}
                  itemProp="hasOfferCatalog"
                  itemScope
                  itemType="https://schema.org/OfferCatalog"
                >
                  <span className="service-icon" aria-hidden="true">{item.icon}</span>
                  <div className="service-content">
                    <div className="service-name" itemProp="name">{item.name}</div>
                    <div className="service-description" itemProp="description">{item.description}</div>
                  </div>
                  <svg className="arrow-right" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className="contact-button"
            aria-label="Contact SMYVISION Technologies"
            title="Contact Us for Technology Solutions"
            itemProp="contactPoint"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <span className="button-icon" aria-hidden="true"><IconMail /></span>
            Get In Touch
            <svg className="button-arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 0L16 8L8 16L6.8 14.8L13.6 8L6.8 1.2L8 0Z" fill="currentColor" />
            </svg>
          </Link>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          aria-controls="mobile-menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div
          className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="mobile-menu-content">
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.path}
                  to={link.path}
                  label={link.name}
                  onClick={toggleMenu}
                  current={location.pathname === link.path}
                  icon={link.icon}
                  description={link.title}
                />
              ))}

              <div className="mobile-services-container">
                <button
                  className={`mobile-services-trigger ${isServicesOpen ? "open" : ""}`}
                  onClick={toggleServices}
                  aria-expanded={isServicesOpen}
                  aria-label="Our Services"
                >
                  <span className="mobile-service-left">
                    <span className="mobile-nav-icon" aria-hidden="true">
                      <IconCode />
                    </span>
                    Services
                  </span>

                  <svg className={`mobile-dropdown-arrow ${isServicesOpen ? "open" : ""}`} width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className={`mobile-services-dropdown ${isServicesOpen ? "open" : ""}`} role="menu">
                  {servicesItems.map((item, index) => (
                    <MobileNavLink
                      key={index}
                      to={item.path}
                      label={item.name}
                      onClick={toggleMenu}
                      current={location.pathname === item.path}
                      icon={item.icon}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="mobile-contact-button"
                onClick={toggleMenu}
                aria-label="Contact SMYVISION Technologies"
                title="Get in touch with our team"
              >
                <span className="button-icon" aria-hidden="true"><IconMail /></span>
                Get In Touch
                <svg className="mobile-button-arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 0L16 8L8 16L6.8 14.8L13.6 8L6.8 1.2L8 0Z" fill="currentColor" />
                </svg>
              </Link>
            </div>

            <div className="mobile-menu-footer">
              <div className="company-info">
                <div className="company-name" itemProp="name">SMYVISION TECHNOLOGIES</div>
                <div className="company-tagline" itemProp="description">Innovating for a better tomorrow</div>
                <div className="company-contact" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                  <meta itemProp="contactType" content="customer service" />
                  <div className="contact-info">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "4px" }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span itemProp="email">smyvisiontechnologies@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar-container {
          position: fixed;
          top: 14px;
          left: 50%;
          right: auto;
          width: min(1180px, calc(100% - 36px));
          transform: translateX(-50%);
          z-index: 1000;
          box-sizing: border-box;
          max-width: calc(100vw - 36px);
          background: linear-gradient(90deg, rgba(255,255,255,0.92), rgba(187,211,255,0.92));
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: none;
          border-radius: 999px;
          box-shadow: 0 14px 45px rgba(26, 72, 172, 0.16);
          will-change: width, top, border-radius, transform;
          transition:
            width 0.26s cubic-bezier(0.16, 1, 0.3, 1),
            top 0.26s cubic-bezier(0.16, 1, 0.3, 1),
            border-radius 0.26s cubic-bezier(0.16, 1, 0.3, 1),
            background 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;
        }

        .navbar-container.scrolled {
          top: 0;
          width: 100%;
          max-width: 100vw;
          border-radius: 0;
          border: none;
          background: linear-gradient(90deg, #bbd3ff, #ffffff);
          box-shadow: 0 4px 30px rgba(26, 72, 172, 0.25);
        }

        .navbar {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          align-items: center;
          height: 78px;
          will-change: height, padding;
          transition: height 0.22s cubic-bezier(0.16, 1, 0.3, 1), padding 0.22s ease;
        }

        .navbar-container.scrolled .navbar {
          height: 74px;
        }

        .logo-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          transition: transform 0.18s ease;
        }

        .logo-link:hover {
          transform: translateY(-1px);
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-image-container {
          position: relative;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: width 0.18s ease, height 0.18s ease;
        }

        .navbar-container.scrolled .logo-image-container {
          width: 46px;
          height: 46px;
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-top-left-radius: 10px;
          border-bottom-right-radius: 10px;
          transition: transform 0.18s ease, filter 0.18s ease;
        }

        .logo-link:hover .logo-image {
          transform: scale(1.06) rotate(-1deg);
        }

        .logo-fallback {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-icon {
          color: white;
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: 1px;
        }

        .logo-text-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .logo-main {
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
          line-height: 1;
          margin: 0;
        }

        .logo-tagline {
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .mobile-company-name {
          display: none;
          flex-direction: column;
          margin-left: 8px;
          line-height: 1.1;
        }

        .mobile-company-main {
          font-size: 1.1rem;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.3px;
          white-space: nowrap;
        }

        .mobile-company-sub {
          font-size: 0.65rem;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-top: 2px;
          white-space: nowrap;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .nav-icon,
        .button-icon {
          margin-right: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.85;
          transition: opacity 0.16s ease, transform 0.16s ease;
        }

        .services-container {
          position: relative;
        }

        .services-trigger {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.45);
          border: none;
          font-size: 1rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          padding: 10px 14px;
          border-radius: 999px;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .services-trigger:hover,
        .services-trigger.active,
        .services-trigger.current {
          color: #2563eb;
          background: rgba(59, 130, 246, 0.09);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(59, 130, 246, 0.14);
        }

        .dropdown-arrow {
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          margin-left: 2px;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .services-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          width: min(560px, calc(100vw - 32px));
          max-width: calc(100vw - 32px);
          transform: translate(-50%, 10px) scale(0.98);
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: 22px;
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.14);
          padding: 10px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          will-change: opacity, transform;
          transition:
            opacity 0.16s ease,
            visibility 0.16s ease,
            transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1000;
          border: none;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .services-dropdown::before {
          content: "";
          position: absolute;
          top: -6px;
          left: 50%;
          width: 14px;
          height: 14px;
          transform: translateX(-50%) rotate(45deg);
          background: rgba(255,255,255,0.98);
          border: none;
        }

        .services-dropdown.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translate(-50%, 0) scale(1);
        }

        .service-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 9px;
          padding: 12px;
          min-height: 128px;
          border-radius: 18px;
          text-decoration: none;
          color: #334155;
          transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #ffffff, #f8fbff);
          border: none;
          box-shadow: inset 0 0 0 1px rgba(59, 130, 246, 0.09);
          box-sizing: border-box;
        }

        .service-item::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(59,130,246,0.14), transparent 45%);
          opacity: 0;
          transition: opacity 0.16s ease;
        }

        .service-item:hover {
          transform: translateY(-3px);
          color: #2563eb;
          box-shadow:
            inset 0 0 0 1px rgba(59, 130, 246, 0.18),
            0 12px 24px rgba(59, 130, 246, 0.13);
        }

        .service-item:hover::before {
          opacity: 1;
        }

        .service-icon {
          width: 38px;
          height: 38px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #2563eb;
          background: linear-gradient(135deg, rgba(59,130,246,0.14), rgba(139,92,246,0.14));
          transition: transform 0.16s ease, background 0.16s ease;
          position: relative;
          z-index: 1;
        }

        .service-item:hover .service-icon {
          transform: rotate(-4deg) scale(1.06);
        }

        .service-content {
          position: relative;
          z-index: 1;
        }

        .service-name {
          font-weight: 800;
          font-size: 0.92rem;
          margin-bottom: 4px;
        }

        .service-description {
          font-size: 0.74rem;
          color: #64748b;
          line-height: 1.28;
        }

        .arrow-right {
          position: absolute;
          right: 12px;
          top: 14px;
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.16s ease;
          flex-shrink: 0;
          z-index: 1;
        }

        .service-item:hover .arrow-right {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-button {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          padding: 12px 24px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.24);
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .contact-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.38s ease;
        }

        .contact-button:hover::before {
          left: 120%;
        }

        .contact-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(59, 130, 246, 0.34);
        }

        .button-arrow {
          transition: transform 0.18s ease;
        }

        .contact-button:hover .button-arrow {
          transform: translateX(4px);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 32px;
          height: 24px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }

        .hamburger-line {
          width: 100%;
          height: 3px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 3px;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: left center;
        }

        .hamburger.open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(0px, -1px);
        }

        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: translateX(-10px);
        }

        .hamburger.open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(0px, 1px);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          width: 100vw;
          max-width: 400px;
          height: 100dvh;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: -10px 0 35px rgba(0, 0, 0, 0.08);
          z-index: 1000;
          transform: translateX(100%);
          will-change: transform;
          transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-content {
          min-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .mobile-nav-links {
          padding: 100px 32px 40px;
        }

        .mobile-services-container {
          border-bottom: none;
          margin-bottom: 20px;
        }

        .mobile-services-trigger {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          background: none;
          border: none;
          font-size: 1.1rem;
          font-weight: 700;
          color: #334155;
          cursor: pointer;
          transition: color 0.16s ease;
        }

        .mobile-service-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .mobile-services-trigger.open {
          color: #3b82f6;
        }

        .mobile-dropdown-arrow {
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .mobile-services-dropdown {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.24s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-services-dropdown.open {
          max-height: 460px;
        }

        .mobile-contact-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          padding: 18px 32px;
          border-radius: 18px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          margin-top: 40px;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          box-shadow: 0 14px 30px rgba(59, 130, 246, 0.22);
        }

        .mobile-contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 36px rgba(59, 130, 246, 0.3);
        }

        .mobile-button-arrow {
          transition: transform 0.18s ease;
        }

        .mobile-contact-button:hover .mobile-button-arrow {
          transform: translateX(6px);
        }

        .mobile-menu-footer {
          padding: 32px;
          border-top: 1px solid #f1f5f9;
          background: #f8fafc;
        }

        .company-info {
          text-align: center;
        }

        .company-name {
          font-size: 1.2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .company-tagline {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
          margin-bottom: 12px;
        }

        .contact-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #475569;
        }

        @media (max-width: 1024px) {
          .navbar-container {
            top: 0;
            left: 0;
            right: 0;
            width: 100vw;
            max-width: 100vw;
            transform: none;
            border-radius: 0;
            border: none;
          }

          .navbar-container.scrolled {
            top: 0;
            left: 0;
            right: 0;
            width: 100vw;
            max-width: 100vw;
            transform: none;
            border-radius: 0;
            border: none;
          }

          .desktop-nav {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .mobile-menu {
            display: block;
          }

          .navbar {
            padding: 0 14px;
            height: 70px;
          }

          .logo-main {
            font-size: 1.6rem;
          }

          .logo-image-container {
            width: 45px;
            height: 45px;
          }

          .mobile-company-name {
            display: flex;
          }

          .logo-text-container {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .mobile-menu {
            max-width: 100vw;
            width: 100vw;
          }

          .mobile-nav-links {
            padding: 90px 24px 32px;
          }

          .navbar {
            padding: 0 12px;
          }

          .logo-image-container {
            width: 40px;
            height: 40px;
          }

          .mobile-company-main {
            font-size: 0.95rem;
          }

          .mobile-company-sub {
            font-size: 0.55rem;
            letter-spacing: 0.7px;
          }
        }

        @media (max-width: 400px) {
          .mobile-company-main {
            font-size: 0.85rem;
          }

          .mobile-company-sub {
            font-size: 0.45rem;
          }

          .mobile-company-name {
            margin-left: 4px;
          }
        }


        @media (max-width: 768px) {
          .services-dropdown {
            left: 50%;
            width: calc(100vw - 24px);
            max-width: calc(100vw - 24px);
            grid-template-columns: 1fr;
            padding: 10px;
            border-radius: 22px;
          }

          .service-item {
            min-height: auto;
            flex-direction: row;
            align-items: center;
            padding: 12px;
          }

          .service-icon {
            width: 42px;
            height: 42px;
          }

          .arrow-right {
            position: static;
            margin-left: auto;
          }
        }

        @media print {
          .navbar-container {
            position: static;
            box-shadow: none;
            background: white !important;
          }

          .contact-button,
          .mobile-contact-button,
          .hamburger,
          .dropdown-arrow,
          .mobile-dropdown-arrow,
          .nav-icon,
          .button-icon {
            display: none;
          }

          .desktop-nav {
            display: flex !important;
            gap: 20px;
          }

          .services-dropdown {
            display: none;
          }

          .logo-image {
            filter: grayscale(100%);
          }

          .mobile-company-name {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

function NavLink({ to, label, current, title, icon }) {
  return (
    <Link
      to={to}
      className={`nav-link ${current ? "active" : ""}`}
      aria-current={current ? "page" : undefined}
      title={title}
      itemProp="url"
    >
      <span className="nav-icon" aria-hidden="true">{icon}</span>
      <span itemProp="name">{label}</span>
      {current && <span className="nav-indicator"></span>}
    </Link>
  );
}

function MobileNavLink({ to, label, onClick, current, icon, description }) {
  return (
    <Link
      to={to}
      className={`mobile-nav-link ${current ? "active" : ""}`}
      onClick={onClick}
      aria-current={current ? "page" : undefined}
      title={description || label}
      itemProp="url"
    >
      {icon && <span className="mobile-nav-icon" aria-hidden="true">{icon}</span>}
      <div>
        <span itemProp="name">{label}</span>
        {description && (
          <div className="mobile-nav-description" itemProp="description">
            {description}
          </div>
        )}
      </div>
      {current && <span className="mobile-nav-indicator"></span>}
    </Link>
  );
}

const styles = `
  html,
  body,
  #root {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .nav-link {
    position: relative;
    color: #475569;
    text-decoration: none;
    font-weight: 800;
    font-size: 1rem;
    padding: 10px 14px;
    border-radius: 999px;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
  }

  .nav-link:hover {
    color: #2563eb;
    background: rgba(59, 130, 246, 0.08);
    transform: translateY(-2px);
  }

  .nav-link:hover .nav-icon {
    opacity: 1;
    transform: scale(1.08);
  }

  .nav-link.active {
    color: #3b82f6;
    background: rgba(59, 130, 246, 0.08);
  }

  .nav-indicator {
    display: none;
  }

  .mobile-nav-link {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 18px 0;
    color: #334155;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    border-bottom: none;
    transition: all 0.16s ease;
    position: relative;
  }

  .mobile-nav-link:hover {
    color: #2563eb;
    transform: translateX(4px);
  }

  .mobile-nav-link.active {
    color: #3b82f6;
  }

  .mobile-nav-icon {
    width: 24px;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
    opacity: 0.85;
    transition: opacity 0.16s ease, transform 0.16s ease;
  }

  .mobile-nav-link:hover .mobile-nav-icon {
    opacity: 1;
    transform: scale(1.08);
  }

  .mobile-nav-description {
    font-size: 0.8rem;
    color: #64748b;
    margin-top: 4px;
    line-height: 1.3;
  }

  .mobile-nav-indicator {
    display: none;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .nav-link:focus,
  .services-trigger:focus,
  .contact-button:focus,
  .mobile-nav-link:focus,
  .mobile-services-trigger:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    .navbar-container,
    .services-dropdown,
    .mobile-menu,
    .hamburger-line,
    .service-item,
    .contact-button,
    .nav-link,
    .mobile-nav-link {
      transition: none !important;
      animation: none !important;
    }
  }
`;

if (typeof document !== "undefined") {
  const oldStyle = document.getElementById("navbar-extra-styles");
  if (oldStyle) oldStyle.remove();

  const styleSheet = document.createElement("style");
  styleSheet.id = "navbar-extra-styles";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default Navbar;