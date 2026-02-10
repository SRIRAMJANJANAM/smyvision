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

  // Check for mobile view
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
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

  // Close services dropdown when clicking outside on desktop
  useEffect(() => {
    const handleServicesClick = (e) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target) &&
        !isMobile
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleServicesClick);
    return () => document.removeEventListener("mousedown", handleServicesClick);
  }, [isMobile]);

  // Close dropdowns when navigating
  useEffect(() => {
    setIsServicesOpen(false);
    if (isMobile) setIsMenuOpen(false);
  }, [location.pathname, isMobile]);

  // Import your logo - adjust the path as needed
  const logoUrl = "/Logo.png"; // or "/public/logo.png" depending on your setup

  // SVG Icons for better quality and customization
  const IconHome = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );

  const IconCode = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );

  const IconUsers = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );

  const IconBriefcase = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  );

  const IconMail = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const IconGlobe = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );

  const IconCog = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );

  const IconSparkles = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  );

  // Services data with SEO-friendly descriptions
  const servicesItems = [
    { 
      name: "Websites", 
      path: "/services", 
      icon: <IconGlobe />,
      description: "Custom responsive website development & design services"
    },
    { 
      name: "Automation", 
      path: "/services", 
      icon: <IconCog />,
      description: "Business process automation solutions for efficiency"
    },
    { 
      name: "Explore All Services", 
      path: "/services", 
      icon: <IconSparkles />,
      description: "View all our technology and digital services"
    }
  ];

  const navLinks = [
    { 
      name: "Home", 
      path: "/", 
      title: "Home | SMYVISION Technologies",
      icon: <IconHome />
    },
    { 
      name: "About", 
      path: "/about", 
      title: "About Us | SMYVISION Technologies",
      icon: <IconUsers />
    },
    { 
      name: "Careers", 
      path: "/careers", 
      title: "Careers | Join SMYVISION",
      icon: <IconBriefcase />
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const toggleServices = (e) => {
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header 
      ref={navbarRef}
      className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}
      style={{
        background: isScrolled
  ? "linear-gradient(90deg, #bbd3ff, #ffffff)"
  : "linear-gradient(90deg, #ffffff, #bbd3ff)",
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 30px rgb(26, 72, 172)' : '0 1px 0 rgb(118, 108, 255)'
      }}
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="SMYVISION Technologies" />
      <link itemProp="url" href="https://smyvision.com" />
      
      <nav 
        className="navbar"
        aria-label="Main Navigation"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        {/* Logo with Schema.org markup */}
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
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <div className="logo-fallback" style={{display: 'none'}}>
                <div className="logo-icon">SV</div>
              </div>
            </div>
            <div className="logo-text-container">
              <h1 className="logo-main" itemProp="name">SMYVISION</h1>
              <span className="logo-tagline" itemProp="description">TECHNOLOGIES</span>
            </div>
            
            {/* Mobile-only company name text with stacked layout */}
            {isMobile && (
              <div className="mobile-company-name">
                <div className="mobile-company-main">SMYVISION</div>
                <div className="mobile-company-sub">TECHNOLOGIES</div>
              </div>
            )}
          </div>
        </Link>

        {/* Desktop Navigation */}
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
          
          {/* Services Dropdown for Desktop */}
          <div 
            ref={servicesRef}
            className="services-container"
            onMouseEnter={() => !isMobile && setIsServicesOpen(true)}
            onMouseLeave={() => !isMobile && setIsServicesOpen(false)}
            itemScope
            itemType="https://schema.org/Service"
          >
            <button
              className={`services-trigger ${isServicesOpen ? 'active' : ''} ${
                location.pathname.startsWith("/services") ? 'current' : ''
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
              <svg 
                className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`}
                width="12" 
                height="12" 
                viewBox="0 0 12 12"
                aria-hidden="true"
              >
                <path 
                  d="M2 4.5L6 8.5L10 4.5" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Services Dropdown Menu */}
            <div 
              className={`services-dropdown ${isServicesOpen ? 'open' : ''}`}
              aria-label="Our Services Menu"
              role="menu"
            >
              {servicesItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="service-item"
                  onClick={() => setIsServicesOpen(false)}
                  role="menuitem"
                  aria-label={item.description}
                  title={item.description}
                  itemProp="hasOfferCatalog"
                  itemScope
                  itemType="https://schema.org/OfferCatalog"
                >
                  <span className="service-icon" aria-hidden="true">{item.icon}</span>
                  <div>
                    <div className="service-name" itemProp="name">{item.name}</div>
                    <div className="service-description" itemProp="description">{item.description}</div>
                  </div>
                  <svg 
                    className="arrow-right"
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path 
                      d="M6 12L10 8L6 4" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
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
            <svg 
              className="button-arrow"
              width="16" 
              height="16" 
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path 
                d="M8 0L16 8L8 16L6.8 14.8L13.6 8L6.8 1.2L8 0Z" 
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          aria-controls="mobile-menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation Menu */}
        <div 
          className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
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
              
              {/* Mobile Services Accordion */}
              <div className="mobile-services-container">
                <button
                  className={`mobile-services-trigger ${isServicesOpen ? 'open' : ''}`}
                  onClick={toggleServices}
                  aria-expanded={isServicesOpen}
                  aria-label="Our Services"
                >
                  <span className="mobile-nav-icon" aria-hidden="true">
                    <IconCode />
                  </span>
                  Services
                  <svg 
                    className={`mobile-dropdown-arrow ${isServicesOpen ? 'open' : ''}`}
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                  >
                    <path 
                      d="M2 4.5L6 8.5L10 4.5" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                
                <div 
                  className={`mobile-services-dropdown ${isServicesOpen ? 'open' : ''}`}
                  role="menu"
                >
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
                <svg 
                  className="mobile-button-arrow"
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path 
                    d="M8 0L16 8L8 16L6.8 14.8L13.6 8L6.8 1.2L8 0Z" 
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>

            {/* Footer for mobile menu */}
            <div className="mobile-menu-footer">
              <div className="company-info">
                <div className="company-name" itemProp="name">SMYVISION TECHNOLOGIES</div>
                <div className="company-tagline" itemProp="description">Innovating for a better tomorrow</div>
                <div className="company-contact" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                  <meta itemProp="contactType" content="customer service" />
                  <div className="contact-info">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px'}}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span itemProp="email">info@smyvision.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* CSS Styles */}
      <style jsx>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-container.scrolled {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
        }

        .navbar {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }

        /* Logo Styles */
        .logo-link {
          text-decoration: none;
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
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
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-top-left-radius: 10px;
          border-bottom-right-radius: 10px;
          transition: transform 0.3s ease;
        }

        

        .logo-fallback {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 8px;
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

        /* Mobile-only company name with stacked layout */
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

        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        /* Navigation Icon Styles */
        .nav-icon {
          margin-right: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }

        

        .services-trigger .nav-icon {
          opacity: 0.8;
        }

        .services-trigger:hover .nav-icon,
        .services-trigger.active .nav-icon,
        .services-trigger.current .nav-icon {
          opacity: 1;
        }

        .button-icon {
          margin-right: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.9;
        }

        /* Services Dropdown */
        .services-container {
          position: relative;
        }

        .services-trigger {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          color: #475569;
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.2s ease;
          position: relative;
        }

        .services-trigger:hover,
        .services-trigger.active,
        .services-trigger.current {
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.05);
        }

        .services-trigger::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: #3b82f6;
          border-radius: 1px;
          transition: width 0.3s ease;
        }

        .services-trigger.current::after {
          width: 20px;
        }

        .dropdown-arrow {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-left: 2px;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .services-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          padding: 12px;
          min-width: 300px;
          opacity: 0;
          transform: translateY(-10px);
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .services-dropdown.open {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 12px;
          text-decoration: none;
          color: #334155;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .service-item:hover {
          background: #f8fafc;
          transform: translateX(4px);
          color: #3b82f6;
        }

        .service-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }

        .service-item:hover .service-icon {
          opacity: 1;
        }

        .service-name {
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 4px;
        }

        .service-description {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.3;
        }

        .arrow-right {
          margin-left: auto;
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .service-item:hover .arrow-right {
          opacity: 1;
          transform: translateX(0);
        }

        /* Contact Button */
        .contact-button {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          padding: 12px 28px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.2);
          position: relative;
          overflow: hidden;
        }

        .contact-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .contact-button:hover::before {
          left: 100%;
        }

        .contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.3);
        }

        .contact-button:hover .button-icon {
          animation: wiggle 0.6s ease;
        }

        .button-arrow {
          transition: transform 0.3s ease;
        }

        .contact-button:hover .button-arrow {
          transform: translateX(4px);
        }

        /* Hamburger Menu */
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
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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

        /* Mobile Menu */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 400px;
          height: 100vh;
          background: white;
          box-shadow: -20px 0 60px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .mobile-nav-links {
          padding: 100px 32px 40px;
        }

        /* Mobile Services */
        .mobile-services-container {
          border-bottom: 1px solid #f1f5f9;
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
          font-weight: 500;
          color: #334155;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .mobile-services-trigger.open {
          color: #3b82f6;
        }

        .mobile-services-trigger .mobile-nav-icon {
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }

        .mobile-services-trigger:hover .mobile-nav-icon,
        .mobile-services-trigger.open .mobile-nav-icon {
          opacity: 1;
        }

        .mobile-dropdown-arrow {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .mobile-services-dropdown {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-services-dropdown.open {
          max-height: 400px;
        }

        /* Mobile Contact Button */
        .mobile-contact-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          padding: 18px 32px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          margin-top: 40px;
          transition: transform 0.3s ease;
        }

        .mobile-contact-button:hover {
          transform: translateY(-2px);
        }

        .mobile-button-arrow {
          transition: transform 0.3s ease;
        }

        .mobile-contact-button:hover .mobile-button-arrow {
          transform: translateX(6px);
        }

        /* Mobile Menu Footer */
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

        /* Animations */
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }

        /* Responsive */
        @media (max-width: 1024px) {
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
            padding: 0 20px;
            height: 70px;
          }

          .logo-main {
            font-size: 1.6rem;
          }

          .logo-image-container {
            width: 45px;
            height: 45px;
          }
          
          .mobile-services-trigger .mobile-nav-icon {
            margin-right: 12px;
          }
          
          /* Show mobile company name in mobile view */
          .mobile-company-name {
            display: flex;
          }
          
          /* Hide the regular logo text in mobile view */
          .logo-text-container {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .mobile-company-main {
            font-size: 1rem;
          }
          
          .mobile-company-sub {
            font-size: 0.6rem;
            letter-spacing: 0.8px;
          }
          
          .mobile-company-name {
            margin-left: 6px;
          }
        }

        @media (max-width: 640px) {
          .mobile-menu {
            max-width: 100%;
          }

          .mobile-nav-links {
            padding: 90px 24px 32px;
          }

          .navbar {
            padding: 0 16px;
          }

          .mobile-company-main {
            font-size: 0.95rem;
          }
          
          .mobile-company-sub {
            font-size: 0.55rem;
            letter-spacing: 0.7px;
          }
          
          .mobile-company-name {
            margin-left: 5px;
          }
          
          .mobile-services-trigger .mobile-nav-icon {
            margin-right: 10px;
          }
          
          /* Adjust logo image size for smaller screens */
          .logo-image-container {
            width: 40px;
            height: 40px;
          }
        }
        
        @media (max-width: 480px) {
          .mobile-company-main {
            font-size: 0.9rem;
          }
          
          .mobile-company-sub {
            font-size: 0.5rem;
            letter-spacing: 0.6px;
          }
          
          .logo-wrapper {
            gap: 8px;
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

        /* Very small screens */
        @media (max-width: 360px) {
          .mobile-company-main {
            font-size: 0.8rem;
          }
          
          .mobile-company-sub {
            font-size: 0.42rem;
            letter-spacing: 0.5px;
          }
          
          .logo-image-container {
            width: 35px;
            height: 35px;
          }
        }

        /* Print Styles for SEO */
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

// Navigation Link Component with SEO
function NavLink({ to, label, current, title, icon }) {
  return (
    <Link
      to={to}
      className={`nav-link ${current ? 'active' : ''}`}
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

// Mobile Navigation Link Component with SEO
function MobileNavLink({ to, label, onClick, current, icon, description }) {
  return (
    <Link
      to={to}
      className={`mobile-nav-link ${current ? 'active' : ''}`}
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

// Additional Styles
const styles = `
  .nav-link {
    position: relative;
    color: #475569;
    text-decoration: none;
    font-weight: bolder;
    font-size: 1rem;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
  }

  

  .nav-link.active {
    color: #3b82f6;
  }

  .nav-indicator {
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background: #3b82f6;
    border-radius: 1px;
  }

  .mobile-nav-link {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 18px 0;
    color: #334155;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    border-bottom: 1px solid #f1f5f9;
    transition: all 0.2s ease;
    position: relative;
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
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }

  

  .mobile-nav-description {
    font-size: 0.8rem;
    color: #64748b;
    margin-top: 4px;
    line-height: 1.3;
  }

  .mobile-nav-indicator {
    width: 4px;
    height: 100%;
    background: #3b82f6;
    position: absolute;
    left: -24px;
    top: 0;
    border-radius: 0 2px 2px 0;
  }

  /* SEO Enhancement: Structured Data */
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

  /* Animation Keyframes for better UX */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* Focus styles for accessibility */
  .nav-link:focus,
  .services-trigger:focus,
  .contact-button:focus,
  .mobile-nav-link:focus,
  .mobile-services-trigger:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  /* Reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    .navbar-container,
    .services-dropdown,
    .mobile-menu,
    .hamburger-line,
    .service-item,
    .contact-button,
    .nav-link,
    .mobile-nav-link {
      transition: none;
    }
    
    .contact-button:hover .button-icon {
      animation: none;
    }
  }
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default Navbar;