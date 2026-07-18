import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaArrowRight,
  FaBars,
  FaBriefcase,
  FaChevronDown,
  FaCode,
  FaEnvelope,
  FaGlobe,
  FaHouse,
  FaPhone,
  FaRobot,
  FaUsers,
  FaWandMagicSparkles,
  FaWhatsapp,
  FaXmark,
  FaGears,
} from "react-icons/fa6";

/* =========================================================
   CONFIG
========================================================= */

const PHONE_NUMBER = "8500352005";

const PHONE_LINK = "+918500352005";

/* =========================================================
   NAVIGATION DATA
========================================================= */

const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: <FaHouse />,
  },

  {
    name: "About",
    path: "/about",
    icon: <FaUsers />,
  },

  {
    name: "Careers",
    path: "/careers",
    icon: <FaBriefcase />,
  },
];

const services = [
  {
    title: "Website Development",

    description:
      "Professional, responsive and conversion-focused websites built for modern businesses.",

    icon: <FaGlobe />,

    path: "/services",
  },

  {
    title: "Business Automation",

    description:
      "Smart automation systems designed to simplify workflows and improve business efficiency.",

    icon: <FaGears />,

    path: "/services",
  },

  {
    title: "AI Chatbot Solutions",

    description:
      "Intelligent chatbot solutions for customer communication, enquiries and lead generation.",

    icon: <FaRobot />,

    path: "/services",
  },

  {
    title: "Custom Digital Solutions",

    description:
      "Explore scalable digital solutions created around your unique business requirements.",

    icon: <FaWandMagicSparkles />,

    path: "/services",
  },
];

/* =========================================================
   NAVBAR COMPONENT
========================================================= */

const Navbar = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const [isMobileServicesOpen, setIsMobileServicesOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  /* =========================================================
     SCROLL EFFECT
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MENUS WHEN ROUTE CHANGES
  ========================================================= */

  useEffect(() => {
    setIsMenuOpen(false);

    setIsServicesOpen(false);

    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  /* =========================================================
     LOCK BODY WHEN MOBILE MENU OPENS
  ========================================================= */

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* =========================================================
     ACTIVE LINK
  ========================================================= */

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  /* =========================================================
     WHATSAPP
  ========================================================= */

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi SMYVISION TECHNOLOGIES, I would like to discuss a website or digital solution for my business."
    );

    window.open(
      `https://wa.me/91${PHONE_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <style>{navbarStyles}</style>

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <header
        className={`smy-navbar-wrapper ${
          isScrolled ? "navbar-scrolled" : ""
        }`}
      >
        <nav className="smy-navbar">
          {/* =================================================
              MOBILE LEFT CALL BUTTON
          ================================================= */}

          <a
            href={`tel:${PHONE_LINK}`}
            className="mobile-call-button"
            aria-label="Call SMYVISION TECHNOLOGIES"
          >
            <FaPhone />
          </a>

          {/* =================================================
              BRAND
          ================================================= */}

          <Link
            to="/"
            className="smy-brand"
            aria-label="SMYVISION TECHNOLOGIES Home"
          >
            <img
              src="/Logo.png"
              alt="SMYVISION TECHNOLOGIES"
              className="smy-logo"
            />

            <div className="smy-brand-content">
              <strong>SMYVISION</strong>

              <span>TECHNOLOGIES</span>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="smy-desktop-navigation">
            <div className="smy-nav-links">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`smy-nav-link ${
                    isActive(item.path) ? "active" : ""
                  }`}
                >
                  <span className="smy-nav-icon">
                    {item.icon}
                  </span>

                  <span>{item.name}</span>
                </Link>
              ))}

              {/* =================================================
                  SERVICES
              ================================================= */}

              <div
                className="smy-services-wrapper"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div
                  className={`smy-services-main ${
                    isActive("/services") ? "active" : ""
                  }`}
                >
                  {/* CLICK SERVICES TEXT -> SERVICES PAGE */}

                  <Link
                    to="/services"
                    className="smy-services-link"
                  >
                    <FaCode />

                    <span>Services</span>
                  </Link>

                  {/* ARROW ONLY OPENS DROPDOWN */}

                  <button
                    type="button"
                    className="smy-services-arrow-button"
                    onClick={() =>
                      setIsServicesOpen((current) => !current)
                    }
                    aria-label="Open services menu"
                    aria-expanded={isServicesOpen}
                  >
                    <FaChevronDown
                      className={
                        isServicesOpen ? "rotate" : ""
                      }
                    />
                  </button>
                </div>

                {/* =================================================
                    SERVICES DROPDOWN
                ================================================= */}

                <div
                  className={`smy-services-dropdown ${
                    isServicesOpen ? "show" : ""
                  }`}
                >
                  <div className="smy-dropdown-feature">
                    <span className="smy-dropdown-label">
                      OUR EXPERTISE
                    </span>

                    <h3>
                      Smart Digital Solutions Built for Modern Businesses.
                    </h3>

                    <p>
                      We help businesses build stronger digital
                      foundations through professional websites,
                      automation systems, AI-powered solutions and
                      custom digital experiences.
                    </p>

                    <div className="dropdown-feature-points">
                      <span>
                        <FaArrowRight />

                        Business-focused development
                      </span>

                      <span>
                        <FaArrowRight />

                        Responsive digital experiences
                      </span>

                      <span>
                        <FaArrowRight />

                        Scalable technology solutions
                      </span>
                    </div>

                    <Link
                      to="/services"
                      className="smy-dropdown-explore"
                    >
                      Explore All Services

                      <FaArrowRight />
                    </Link>
                  </div>

                  <div className="smy-dropdown-services">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.path}
                        className="smy-service-card"
                      >
                        <div className="smy-service-icon">
                          {service.icon}
                        </div>

                        <div className="service-card-content">
                          <strong>
                            {service.title}
                          </strong>

                          <p>
                            {service.description}
                          </p>
                        </div>

                        <FaArrowRight className="smy-service-arrow" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                DESKTOP ACTIONS
            ================================================= */}

            <div className="smy-nav-actions">
              <a
                href={`tel:${PHONE_LINK}`}
                className="desktop-call-button"
              >
                <FaPhone />

                <span>Call Us</span>
              </a>

              <button
                type="button"
                className="smy-whatsapp"
                onClick={openWhatsApp}
                aria-label="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </button>

              <Link
                to="/contact"
                className="smy-contact-button"
              >
                <span>Get Free Quote</span>

                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* =================================================
              MOBILE RIGHT MENU BUTTON
          ================================================= */}

          <button
            type="button"
            className={`smy-mobile-toggle ${
              isMenuOpen ? "active" : ""
            }`}
            onClick={() =>
              setIsMenuOpen((current) => !current)
            }
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FaXmark />
            ) : (
              <FaBars />
            )}
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        className={`smy-mobile-overlay ${
          isMenuOpen ? "show" : ""
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <aside
        className={`smy-mobile-menu ${
          isMenuOpen ? "show" : ""
        }`}
      >
        {/* =================================================
            MOBILE MENU HEADER
        ================================================= */}

        <div className="smy-mobile-header">
          <a
            href={`tel:${PHONE_LINK}`}
            className="mobile-menu-call"
            aria-label="Call SMYVISION TECHNOLOGIES"
          >
            <FaPhone />
          </a>

          <Link
            to="/"
            className="smy-mobile-brand"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/Logo.png"
              alt="SMYVISION TECHNOLOGIES"
            />

            <div>
              <strong>SMYVISION</strong>

              <span>TECHNOLOGIES</span>
            </div>
          </Link>

          <button
            type="button"
            className="smy-mobile-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <FaXmark />
          </button>
        </div>

        {/* =================================================
            MOBILE MENU CONTENT
        ================================================= */}

        <div className="smy-mobile-content">
          <span className="smy-mobile-label">
            NAVIGATION
          </span>

          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`smy-mobile-link ${
                isActive(item.path) ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div>
                <span className="smy-mobile-link-icon">
                  {item.icon}
                </span>

                <strong>
                  {item.name}
                </strong>
              </div>

              <FaArrowRight />
            </Link>
          ))}

          {/* =================================================
              MOBILE SERVICES
          ================================================= */}

          <div
            className={`mobile-services-main-row ${
              isActive("/services") ? "active" : ""
            }`}
          >
            <Link
              to="/services"
              className="mobile-services-direct-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <div>
                <span className="smy-mobile-link-icon">
                  <FaCode />
                </span>

                <strong>
                  Services
                </strong>
              </div>
            </Link>

            <button
              type="button"
              className="mobile-services-toggle"
              onClick={() =>
                setIsMobileServicesOpen((current) => !current)
              }
              aria-label="Open mobile services list"
              aria-expanded={isMobileServicesOpen}
            >
              <FaChevronDown
                className={
                  isMobileServicesOpen ? "rotate" : ""
                }
              />
            </button>
          </div>

          {/* =================================================
              MOBILE SERVICES LIST
          ================================================= */}

          <div
            className={`smy-mobile-services ${
              isMobileServicesOpen ? "show" : ""
            }`}
          >
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="smy-mobile-service"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>
                  {service.icon}
                </span>

                <div>
                  <strong>
                    {service.title}
                  </strong>

                  <p>
                    {service.description}
                  </p>
                </div>

                <FaArrowRight />
              </Link>
            ))}
          </div>

          {/* =================================================
              MOBILE CONTACT BOX
          ================================================= */}

          <div className="mobile-contact-box">
            <span>
              READY TO START?
            </span>

            <h3>
              Let's Discuss Your Next Digital Project.
            </h3>

            <p>
              Tell us what you are planning and let's explore
              the right digital solution for your business.
            </p>

            <div className="smy-mobile-actions">
              <a
                href={`tel:${PHONE_LINK}`}
                className="smy-mobile-call-action"
              >
                <FaPhone />

                Call {PHONE_NUMBER}
              </a>

              <Link
                to="/contact"
                className="smy-mobile-quote"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaEnvelope />

                Get a Free Quote

                <FaArrowRight />
              </Link>

              <button
                type="button"
                className="smy-mobile-whatsapp"
                onClick={openWhatsApp}
              >
                <FaWhatsapp />

                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

/* =========================================================
   COMPLETE NAVBAR CSS
========================================================= */

const navbarStyles = `
  :root {
    --smy-blue: #0758e8;
    --smy-purple: #6938dc;
    --smy-dark: #07162d;
    --smy-text: #5f6d82;
    --smy-border: #e5eaf2;
    --smy-whatsapp: #16a875;
  }

  .smy-navbar-wrapper,
  .smy-navbar-wrapper *,
  .smy-mobile-menu,
  .smy-mobile-menu * {
    box-sizing: border-box;
  }

  /* =========================================================
     MAIN NAVBAR WRAPPER
  ========================================================= */

  .smy-navbar-wrapper {
    position: fixed;
    z-index: 5000;

    top: 18px;
    left: 50%;

    width: min(
      1320px,
      calc(100% - 40px)
    );

    transform: translateX(-50%);

    background:
      rgba(
        255,
        255,
        255,
        0.96
      );

    border:
      1px solid
      rgba(
        220,
        228,
        239,
        0.95
      );

    border-radius: 24px;

    box-shadow:
      0 20px 65px
      rgba(
        8,
        30,
        65,
        0.11
      );

    backdrop-filter:
      blur(22px);

    -webkit-backdrop-filter:
      blur(22px);

    transition:
      top 0.3s ease,
      width 0.3s ease,
      border-radius 0.3s ease,
      background 0.3s ease,
      box-shadow 0.3s ease;
  }

  .smy-navbar-wrapper.navbar-scrolled {
    top: 0;

    width: 100%;

    border-radius: 0;

    border-top: 0;
    border-left: 0;
    border-right: 0;

    background:
      rgba(
        255,
        255,
        255,
        0.985
      );

    box-shadow:
      0 12px 40px
      rgba(
        8,
        30,
        65,
        0.1
      );
  }

  /* =========================================================
     NAVBAR
  ========================================================= */

  .smy-navbar {
    width:
      min(
        1320px,
        100%
      );

    min-height: 88px;

    margin: auto;

    padding:
      0 28px;

    display: flex;

    align-items: center;

    justify-content:
      space-between;

    gap: 30px;
  }

  .navbar-scrolled
  .smy-navbar {
    min-height: 80px;
  }

  /* =========================================================
     BRAND
  ========================================================= */

  .smy-brand {
    min-width: fit-content;

    display: flex;

    align-items: center;

    gap: 13px;

    color: inherit;

    text-decoration: none;
  }

  .smy-logo {
    width: 58px;

    height: 58px;

    flex-shrink: 0;

    object-fit: contain;

    transition:
      transform 0.3s ease;
  }

  .smy-brand:hover
  .smy-logo {
    transform:
      scale(1.06)
      rotate(-3deg);
  }

  .smy-brand-content {
    display: flex;

    flex-direction: column;

    gap: 2px;
  }

  .smy-brand-content
  strong {
    color:
      var(--smy-dark);

    font-size: 23px;

    font-weight: 900;

    letter-spacing:
      -0.045em;

    line-height: 1;
  }

  .smy-brand-content
  span {
    margin-top: 4px;

    color: #76849a;

    font-size: 9px;

    font-weight: 800;

    letter-spacing:
      0.24em;

    line-height: 1;
  }

  /* =========================================================
     DESKTOP
  ========================================================= */

  .smy-desktop-navigation {
    flex: 1;

    display: flex;

    align-items: center;

    justify-content:
      flex-end;

    gap: 27px;
  }

  .smy-nav-links {
    display: flex;

    align-items: center;

    gap: 6px;
  }

  .smy-nav-link {
    min-height: 50px;

    padding:
      0 16px;

    display: flex;

    align-items: center;

    gap: 9px;

    color: #526176;

    border-radius: 13px;

    font-size: 14px;

    font-weight: 720;

    text-decoration: none;

    transition:
      color 0.25s ease,
      background 0.25s ease,
      transform 0.25s ease;
  }

  .smy-nav-link:hover,
  .smy-nav-link.active {
    color:
      var(--smy-blue);

    background:
      rgba(
        7,
        88,
        232,
        0.075
      );

    transform:
      translateY(-2px);
  }

  .smy-nav-icon {
    display: flex;

    font-size: 14px;
  }

  /* =========================================================
     SERVICES MAIN LINK
  ========================================================= */

  .smy-services-wrapper {
    position: relative;
  }

  .smy-services-main {
    min-height: 50px;

    display: flex;

    align-items: center;

    overflow: hidden;

    border-radius: 13px;

    transition:
      background 0.25s ease;
  }

  .smy-services-main:hover,
  .smy-services-main.active {
    background:
      rgba(
        7,
        88,
        232,
        0.075
      );
  }

  .smy-services-link {
    min-height: 50px;

    display: flex;

    align-items: center;

    gap: 9px;

    padding:
      0 8px
      0 16px;

    color: #526176;

    font-size: 14px;

    font-weight: 720;

    text-decoration: none;
  }

  .smy-services-main:hover
  .smy-services-link,
  .smy-services-main.active
  .smy-services-link {
    color:
      var(--smy-blue);
  }

  .smy-services-arrow-button {
    width: 38px;

    min-height: 50px;

    display: grid;

    place-items: center;

    color: #7d899a;

    background: transparent;

    border: 0;

    cursor: pointer;
  }

  .smy-services-arrow-button
  svg {
    font-size: 11px;

    transition:
      transform 0.25s ease;
  }

  .rotate {
    transform:
      rotate(180deg);
  }

  /* =========================================================
     SERVICES DROPDOWN
  ========================================================= */

  .smy-services-dropdown {
    position: absolute;

    top:
      calc(
        100% + 20px
      );

    left: 50%;

    width: 840px;

    padding: 22px;

    display: grid;

    grid-template-columns:
      0.82fr
      1.18fr;

    gap: 22px;

    visibility: hidden;

    opacity: 0;

    pointer-events: none;

    transform:
      translate(
        -50%,
        14px
      )
      scale(0.98);

    background:
      rgba(
        255,
        255,
        255,
        0.995
      );

    border:
      1px solid
      var(--smy-border);

    border-radius: 26px;

    box-shadow:
      0 35px 100px
      rgba(
        8,
        30,
        65,
        0.18
      );

    transition:
      opacity 0.25s ease,
      transform 0.25s ease,
      visibility 0.25s ease;
  }

  .smy-services-dropdown.show {
    visibility: visible;

    opacity: 1;

    pointer-events: auto;

    transform:
      translate(
        -50%,
        0
      )
      scale(1);
  }

  .smy-dropdown-feature {
    padding: 32px;

    border-radius: 21px;

    background:
      radial-gradient(
        circle at 90% 10%,
        rgba(
          68,
          134,
          255,
          0.32
        ),
        transparent 35%
      ),
      linear-gradient(
        145deg,
        #06162c,
        #0d346d
      );
  }

  .smy-dropdown-label {
    color: #76a8ff;

    font-size: 9px;

    font-weight: 850;

    letter-spacing:
      0.17em;
  }

  .smy-dropdown-feature
  h3 {
    margin:
      15px 0
      13px;

    color: white;

    font-size: 27px;

    line-height: 1.15;

    letter-spacing:
      -0.04em;
  }

  .smy-dropdown-feature
  > p {
    margin: 0;

    color: #b4c4da;

    font-size: 12px;

    line-height: 1.8;
  }

  .dropdown-feature-points {
    display: grid;

    gap: 9px;

    margin-top: 21px;
  }

  .dropdown-feature-points
  span {
    display: flex;

    align-items: center;

    gap: 8px;

    color: #c5d2e4;

    font-size: 10px;
  }

  .dropdown-feature-points
  svg {
    color: #6fa7ff;

    font-size: 9px;
  }

  .smy-dropdown-explore {
    margin-top: 24px;

    display:
      inline-flex;

    align-items: center;

    gap: 9px;

    color: white;

    font-size: 11px;

    font-weight: 750;

    text-decoration: none;
  }

  .smy-dropdown-services {
    display: grid;

    grid-template-columns:
      1fr 1fr;

    gap: 12px;
  }

  .smy-service-card {
    position: relative;

    min-height: 145px;

    padding: 19px;

    display: flex;

    align-items:
      flex-start;

    gap: 13px;

    color: inherit;

    background:
      #fafcff;

    border:
      1px solid
      #e5eaf2;

    border-radius: 17px;

    text-decoration: none;

    transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      box-shadow 0.25s ease;
  }

  .smy-service-card:hover {
    transform:
      translateY(-5px);

    border-color:
      rgba(
        7,
        88,
        232,
        0.22
      );

    box-shadow:
      0 16px 40px
      rgba(
        8,
        30,
        65,
        0.1
      );
  }

  .smy-service-icon {
    width: 48px;

    height: 48px;

    flex-shrink: 0;

    display: grid;

    place-items: center;

    color:
      var(--smy-blue);

    background:
      rgba(
        7,
        88,
        232,
        0.08
      );

    border-radius: 13px;

    font-size: 19px;
  }

  .service-card-content {
    min-width: 0;
  }

  .smy-service-card
  strong {
    display: block;

    padding-right: 14px;

    color:
      var(--smy-dark);

    font-size: 13px;
  }

  .smy-service-card
  p {
    margin:
      7px 0
      0;

    color: #758297;

    font-size: 10px;

    line-height: 1.6;
  }

  .smy-service-arrow {
    position: absolute;

    top: 20px;

    right: 14px;

    color: #9da8b7;

    font-size: 9px;
  }

  /* =========================================================
     DESKTOP ACTIONS
  ========================================================= */

  .smy-nav-actions {
    display: flex;

    align-items: center;

    gap: 10px;
  }

  .desktop-call-button {
    min-height: 48px;

    display: flex;

    align-items: center;

    gap: 8px;

    padding:
      0 14px;

    color:
      var(--smy-dark);

    background:
      #f6f8fc;

    border:
      1px solid
      var(--smy-border);

    border-radius: 13px;

    font-size: 12px;

    font-weight: 720;

    text-decoration: none;

    transition:
      color 0.25s ease,
      transform 0.25s ease;
  }

  .desktop-call-button:hover {
    color:
      var(--smy-blue);

    transform:
      translateY(-2px);
  }

  .smy-whatsapp {
    width: 48px;

    height: 48px;

    display: grid;

    place-items: center;

    color:
      var(--smy-whatsapp);

    background:
      rgba(
        22,
        168,
        117,
        0.08
      );

    border:
      1px solid
      rgba(
        22,
        168,
        117,
        0.13
      );

    border-radius: 13px;

    font-size: 20px;

    cursor: pointer;

    transition:
      color 0.25s ease,
      background 0.25s ease,
      transform 0.25s ease;
  }

  .smy-whatsapp:hover {
    color: white;

    background:
      var(--smy-whatsapp);

    transform:
      translateY(-3px);
  }

  .smy-contact-button {
    min-height: 48px;

    padding:
      0 20px;

    display: flex;

    align-items: center;

    gap: 9px;

    color: white;

    background:
      linear-gradient(
        135deg,
        var(--smy-blue),
        var(--smy-purple)
      );

    border-radius: 13px;

    box-shadow:
      0 12px 28px
      rgba(
        7,
        88,
        232,
        0.24
      );

    font-size: 12px;

    font-weight: 780;

    text-decoration: none;

    transition:
      transform 0.25s ease;
  }

  .smy-contact-button:hover {
    transform:
      translateY(-3px);
  }

  /* =========================================================
     MOBILE TOP BUTTONS
  ========================================================= */

  .mobile-call-button,
  .smy-mobile-toggle {
    display: none;
  }

  /* =========================================================
     MOBILE OVERLAY
  ========================================================= */

  .smy-mobile-overlay {
    position: fixed;

    z-index: 4998;

    inset: 0;

    visibility: hidden;

    opacity: 0;

    pointer-events: none;

    background:
      rgba(
        3,
        12,
        28,
        0.58
      );

    backdrop-filter:
      blur(5px);

    transition:
      opacity 0.3s ease,
      visibility 0.3s ease;
  }

  .smy-mobile-overlay.show {
    visibility: visible;

    opacity: 1;

    pointer-events: auto;
  }

  /* =========================================================
     MOBILE MENU
  ========================================================= */

  .smy-mobile-menu {
    position: fixed;

    z-index: 5001;

    top: 0;

    right: 0;

    width:
      min(
        440px,
        100%
      );

    height: 100dvh;

    overflow-y: auto;

    background: white;

    box-shadow:
      -25px 0 80px
      rgba(
        3,
        15,
        36,
        0.22
      );

    transform:
      translateX(105%);

    transition:
      transform 0.35s
      cubic-bezier(
        0.22,
        1,
        0.36,
        1
      );
  }

  .smy-mobile-menu.show {
    transform:
      translateX(0);
  }

  /* =========================================================
     MOBILE MENU HEADER
  ========================================================= */

  .smy-mobile-header {
    min-height: 100px;

    padding:
      14px 20px;

    display: grid;

    grid-template-columns:
      60px
      1fr
      60px;

    align-items: center;

    gap: 10px;

    border-bottom:
      1px solid
      #e9edf3;
  }

  .mobile-menu-call,
  .smy-mobile-close {
    width: 56px;

    height: 56px;

    display: grid;

    place-items: center;

    border-radius: 16px;

    text-decoration: none;

    font-size: 21px;
  }

  .mobile-menu-call {
    color:
      var(--smy-blue);

    background:
      rgba(
        7,
        88,
        232,
        0.08
      );

    border:
      1px solid
      rgba(
        7,
        88,
        232,
        0.11
      );
  }

  .smy-mobile-close {
    color: white;

    background:
      linear-gradient(
        135deg,
        var(--smy-blue),
        var(--smy-purple)
      );

    border: 0;

    cursor: pointer;
  }

  .smy-mobile-brand {
    display: flex;

    align-items: center;

    justify-content: center;

    gap: 11px;

    text-decoration: none;
  }

  .smy-mobile-brand
  img {
    width: 58px;

    height: 58px;

    object-fit: contain;
  }

  .smy-mobile-brand
  div {
    display: flex;

    flex-direction: column;
  }

  .smy-mobile-brand
  strong {
    color:
      var(--smy-dark);

    font-size: 21px;

    font-weight: 900;

    letter-spacing:
      -0.04em;

    line-height: 1;
  }

  .smy-mobile-brand
  span {
    margin-top: 4px;

    color: #7c8898;

    font-size: 7px;

    font-weight: 800;

    letter-spacing:
      0.21em;
  }

  /* =========================================================
     MOBILE CONTENT
  ========================================================= */

  .smy-mobile-content {
    padding:
      32px 24px;
  }

  .smy-mobile-label {
    display: block;

    margin-bottom: 14px;

    color: #8c98a9;

    font-size: 9px;

    font-weight: 850;

    letter-spacing:
      0.17em;
  }

  .smy-mobile-link {
    width: 100%;

    min-height: 68px;

    padding:
      11px 15px;

    display: flex;

    align-items: center;

    justify-content:
      space-between;

    color: #46546a;

    border:
      1px solid
      transparent;

    border-radius: 16px;

    text-decoration: none;

    transition:
      color 0.25s ease,
      background 0.25s ease,
      transform 0.25s ease;
  }

  .smy-mobile-link:hover,
  .smy-mobile-link.active {
    color:
      var(--smy-blue);

    background:
      rgba(
        7,
        88,
        232,
        0.06
      );

    transform:
      translateX(3px);
  }

  .smy-mobile-link
  > div {
    display: flex;

    align-items: center;

    gap: 14px;
  }

  .smy-mobile-link-icon {
    width: 44px;

    height: 44px;

    display: grid;

    place-items: center;

    flex-shrink: 0;

    color:
      var(--smy-blue);

    background:
      rgba(
        7,
        88,
        232,
        0.08
      );

    border-radius: 12px;

    font-size: 17px;
  }

  .smy-mobile-link
  strong {
    font-size: 14px;
  }

  .smy-mobile-link
  > svg {
    color: #9ca8b8;

    font-size: 11px;
  }

  /* =========================================================
     MOBILE SERVICES MAIN ROW
  ========================================================= */

  .mobile-services-main-row {
    min-height: 68px;

    display: grid;

    grid-template-columns:
      1fr
      58px;

    align-items: center;

    overflow: hidden;

    border:
      1px solid
      transparent;

    border-radius: 16px;

    transition:
      background 0.25s ease;
  }

  .mobile-services-main-row:hover,
  .mobile-services-main-row.active {
    background:
      rgba(
        7,
        88,
        232,
        0.05
      );
  }

  .mobile-services-direct-link {
    min-height: 68px;

    display: flex;

    align-items: center;

    padding:
      11px 15px;

    color: #46546a;

    text-decoration: none;
  }

  .mobile-services-direct-link
  > div {
    display: flex;

    align-items: center;

    gap: 14px;
  }

  .mobile-services-direct-link
  strong {
    font-size: 14px;
  }

  .mobile-services-main-row.active
  .mobile-services-direct-link {
    color:
      var(--smy-blue);
  }

  .mobile-services-toggle {
    height: 58px;

    display: grid;

    place-items: center;

    color: #8995a6;

    background: transparent;

    border: 0;

    cursor: pointer;
  }

  .mobile-services-toggle
  svg {
    font-size: 13px;

    transition:
      transform 0.25s ease;
  }

  /* =========================================================
     MOBILE SERVICES LIST
  ========================================================= */

  .smy-mobile-services {
    max-height: 0;

    overflow: hidden;

    opacity: 0;

    transition:
      max-height 0.4s ease,
      opacity 0.3s ease,
      padding 0.3s ease;
  }

  .smy-mobile-services.show {
    max-height: 760px;

    padding:
      11px 0;

    opacity: 1;
  }

  .smy-mobile-service {
    position: relative;

    margin:
      7px 0
      7px 10px;

    padding: 15px;

    display: grid;

    grid-template-columns:
      46px
      1fr
      auto;

    align-items: start;

    gap: 12px;

    color: inherit;

    background:
      #f8fafd;

    border:
      1px solid
      #e7ebf2;

    border-radius: 15px;

    text-decoration: none;

    transition:
      transform 0.25s ease,
      border-color 0.25s ease;
  }

  .smy-mobile-service:hover {
    transform:
      translateX(3px);

    border-color:
      rgba(
        7,
        88,
        232,
        0.2
      );
  }

  .smy-mobile-service
  > span {
    width: 46px;

    height: 46px;

    display: grid;

    place-items: center;

    color:
      var(--smy-blue);

    background:
      rgba(
        7,
        88,
        232,
        0.08
      );

    border-radius: 12px;

    font-size: 18px;
  }

  .smy-mobile-service
  strong {
    color:
      var(--smy-dark);

    font-size: 13px;
  }

  .smy-mobile-service
  p {
    margin:
      6px 0
      0;

    color: #7b8798;

    font-size: 10px;

    line-height: 1.55;
  }

  .smy-mobile-service
  > svg {
    margin-top: 5px;

    color: #a2adbb;

    font-size: 10px;
  }

  /* =========================================================
     MOBILE CONTACT BOX
  ========================================================= */

  .mobile-contact-box {
    margin-top: 32px;

    padding: 27px;

    color: white;

    background:
      radial-gradient(
        circle at 90% 10%,
        rgba(
          70,
          135,
          255,
          0.25
        ),
        transparent 35%
      ),
      linear-gradient(
        145deg,
        #07182f,
        #0d346d
      );

    border-radius: 22px;
  }

  .mobile-contact-box
  > span {
    color: #76a8ff;

    font-size: 9px;

    font-weight: 850;

    letter-spacing:
      0.16em;
  }

  .mobile-contact-box
  h3 {
    margin:
      11px 0;

    color: white;

    font-size: 23px;

    line-height: 1.25;
  }

  .mobile-contact-box
  p {
    margin: 0;

    color: #afc0d8;

    font-size: 11px;

    line-height: 1.7;
  }

  .smy-mobile-actions {
    display: grid;

    gap: 10px;

    margin-top: 22px;
  }

  .smy-mobile-call-action,
  .smy-mobile-quote,
  .smy-mobile-whatsapp {
    min-height: 55px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 9px;

    padding:
      0 17px;

    border-radius: 14px;

    font-size: 12px;

    font-weight: 750;

    text-decoration: none;
  }

  .smy-mobile-call-action {
    color:
      var(--smy-dark);

    background: white;
  }

  .smy-mobile-quote {
    color: white;

    background:
      linear-gradient(
        135deg,
        #1670ff,
        #7350e4
      );
  }

  .smy-mobile-whatsapp {
    color: white;

    background:
      var(--smy-whatsapp);

    border: 0;

    cursor: pointer;
  }

  .smy-mobile-whatsapp
  svg {
    font-size: 19px;
  }

  /* =========================================================
     LARGE MOBILE / TABLET NAVBAR
  ========================================================= */

  @media (max-width: 1120px) {
    .smy-desktop-navigation {
      display: none;
    }

    .smy-navbar-wrapper {
      top: 12px;

      width:
        calc(
          100% - 20px
        );

      border-radius: 22px;

      box-shadow:
        0 16px 45px
        rgba(
          8,
          30,
          65,
          0.14
        );
    }

    .smy-navbar-wrapper.navbar-scrolled {
      top: 0;

      width: 100%;

      border-radius: 0;
    }

    /* BIG MOBILE NAVBAR */

    .smy-navbar {
      min-height: 100px;

      position: relative;

      display: grid;

      grid-template-columns:
        68px
        minmax(
          0,
          1fr
        )
        68px;

      align-items: center;

      gap: 10px;

      padding:
        0 20px;
    }

    .navbar-scrolled
    .smy-navbar {
      min-height: 92px;
    }

    /* LEFT CALL */

    .mobile-call-button {
      width: 60px;

      height: 60px;

      display: grid;

      place-items: center;

      justify-self: start;

      color:
        var(--smy-blue);

      background:
        linear-gradient(
          145deg,
          rgba(
            7,
            88,
            232,
            0.12
          ),
          rgba(
            7,
            88,
            232,
            0.05
          )
        );

      border:
        1px solid
        rgba(
          7,
          88,
          232,
          0.15
        );

      border-radius: 18px;

      box-shadow:
        0 8px 22px
        rgba(
          7,
          88,
          232,
          0.1
        );

      text-decoration: none;

      font-size: 23px;

      transition:
        transform 0.25s ease,
        background 0.25s ease;
    }

    .mobile-call-button:active {
      transform:
        scale(0.94);
    }

    /* CENTER BRAND */

    .smy-brand {
      min-width: 0;

      justify-self: center;

      display: flex;

      align-items: center;

      justify-content: center;

      gap: 12px;
    }

    .smy-logo {
      width: 64px;

      height: 64px;

      flex-shrink: 0;
    }

    .smy-brand-content {
      min-width: 0;
    }

    .smy-brand-content
    strong {
      font-size: 23px;

      white-space: nowrap;
    }

    .smy-brand-content
    span {
      margin-top: 5px;

      font-size: 8px;

      letter-spacing:
        0.22em;

      white-space: nowrap;
    }

    /* RIGHT MENU */

    .smy-mobile-toggle {
      width: 60px;

      height: 60px;

      display: grid;

      place-items: center;

      justify-self: end;

      color:
        var(--smy-dark);

      background:
        linear-gradient(
          145deg,
          #f8faff,
          #f1f5fb
        );

      border:
        1px solid
        var(--smy-border);

      border-radius: 18px;

      box-shadow:
        0 8px 22px
        rgba(
          8,
          30,
          65,
          0.07
        );

      font-size: 25px;

      cursor: pointer;

      transition:
        transform 0.25s ease,
        color 0.25s ease,
        background 0.25s ease;
    }

    .smy-mobile-toggle.active {
      color: white;

      background:
        linear-gradient(
          135deg,
          var(--smy-blue),
          var(--smy-purple)
        );
    }

    .smy-mobile-toggle:active {
      transform:
        scale(0.94);
    }
  }

  /* =========================================================
     NORMAL MOBILE
  ========================================================= */

  @media (max-width: 600px) {
    .smy-navbar-wrapper {
      width:
        calc(
          100% - 16px
        );

      top: 8px;

      border-radius: 20px;
    }

    .smy-navbar-wrapper.navbar-scrolled {
      width: 100%;

      top: 0;

      border-radius: 0;
    }

    .smy-navbar {
      min-height: 94px;

      grid-template-columns:
        62px
        minmax(
          0,
          1fr
        )
        62px;

      gap: 8px;

      padding:
        0 14px;
    }

    .navbar-scrolled
    .smy-navbar {
      min-height: 88px;
    }

    .mobile-call-button {
      width: 56px;

      height: 56px;

      border-radius: 17px;

      font-size: 21px;
    }

    .smy-brand {
      gap: 9px;
    }

    .smy-logo {
      width: 58px;

      height: 58px;
    }

    .smy-brand-content
    strong {
      font-size: 20px;
    }

    .smy-brand-content
    span {
      margin-top: 4px;

      font-size: 7px;

      letter-spacing:
        0.18em;
    }

    .smy-mobile-toggle {
      width: 56px;

      height: 56px;

      border-radius: 17px;

      font-size: 23px;
    }
  }

  /* =========================================================
     SMALL MOBILE
  ========================================================= */

  @media (max-width: 480px) {
    .smy-navbar {
      min-height: 90px;

      grid-template-columns:
        58px
        minmax(
          0,
          1fr
        )
        58px;

      gap: 6px;

      padding:
        0 11px;
    }

    .mobile-call-button,
    .smy-mobile-toggle {
      width: 53px;

      height: 53px;

      border-radius: 16px;
    }

    .mobile-call-button {
      font-size: 20px;
    }

    .smy-mobile-toggle {
      font-size: 22px;
    }

    .smy-brand {
      gap: 7px;
    }

    .smy-logo {
      width: 54px;

      height: 54px;
    }

    .smy-brand-content
    strong {
      font-size: 18px;

      letter-spacing:
        -0.04em;
    }

    .smy-brand-content
    span {
      font-size: 6.5px;

      letter-spacing:
        0.15em;
    }

    .smy-mobile-header {
      min-height: 92px;

      grid-template-columns:
        54px
        1fr
        54px;

      padding:
        12px 14px;
    }

    .mobile-menu-call,
    .smy-mobile-close {
      width: 50px;

      height: 50px;
    }

    .smy-mobile-brand
    img {
      width: 51px;

      height: 51px;
    }

    .smy-mobile-brand
    strong {
      font-size: 18px;
    }

    .smy-mobile-brand
    span {
      font-size: 6px;
    }
  }

  /* =========================================================
     VERY SMALL MOBILE
  ========================================================= */

  @media (max-width: 390px) {
    .smy-navbar {
      min-height: 86px;

      grid-template-columns:
        53px
        minmax(
          0,
          1fr
        )
        53px;

      gap: 4px;

      padding:
        0 8px;
    }

    .mobile-call-button,
    .smy-mobile-toggle {
      width: 49px;

      height: 49px;

      border-radius: 14px;
    }

    .mobile-call-button {
      font-size: 18px;
    }

    .smy-mobile-toggle {
      font-size: 20px;
    }

    .smy-brand {
      gap: 5px;
    }

    .smy-logo {
      width: 48px;

      height: 48px;
    }

    .smy-brand-content
    strong {
      font-size: 16px;
    }

    .smy-brand-content
    span {
      margin-top: 3px;

      font-size: 5.5px;

      letter-spacing:
        0.12em;
    }
  }

  /* =========================================================
     REDUCED MOTION
  ========================================================= */

  @media (
    prefers-reduced-motion:
    reduce
  ) {
    .smy-navbar-wrapper,
    .smy-nav-link,
    .smy-services-dropdown,
    .smy-service-card,
    .smy-mobile-menu,
    .smy-mobile-overlay,
    .smy-mobile-services,
    .smy-mobile-link,
    .mobile-call-button,
    .smy-mobile-toggle {
      transition:
        none !important;
    }
  }
`;

export default Navbar;