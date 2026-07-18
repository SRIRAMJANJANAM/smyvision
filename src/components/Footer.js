import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowUp,
  FaBriefcase,
  FaCheck,
  FaChevronRight,
  FaClock,
  FaCode,
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaShieldHalved,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

/* =========================================================
   CONFIGURATION
========================================================= */

const WEBSITE_URL =
  "https://smyvisiontechnologies.vercel.app";

const PHONE_NUMBER =
  "8500352005";

const PHONE_LINK =
  "+918500352005";

const EMAIL =
  "smyvisiontechnologies@gmail.com";

/* =========================================================
   FOOTER DATA
========================================================= */

const quickLinks = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About Us",
    path: "/about",
  },

  {
    name: "Services",
    path: "/services",
  },

  {
    name: "Careers",
    path: "/careers",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

const services = [
  {
    name: "Website Development",
    path: "/services",
  },

  {
    name: "Business Automation",
    path: "/services",
  },

  {
    name: "AI Chatbot Solutions",
    path: "/services",
  },

  {
    name: "Custom Web Applications",
    path: "/services",
  },

  {
    name: "Website Redesign",
    path: "/services",
  },

  {
    name: "SEO-Ready Development",
    path: "/services",
  },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,

    url:
      "https://www.facebook.com/share/1AAbW51BTs/",

    label:
      "SMYVISION TECHNOLOGIES on Facebook",
  },

  {
    icon: <FaLinkedinIn />,

    url:
      "https://linkedin.com/company/smyvisiontechnologies",

    label:
      "SMYVISION TECHNOLOGIES on LinkedIn",
  },

  {
    icon: <FaInstagram />,

    url:
      "https://instagram.com/smyvisiontechnologies",

    label:
      "SMYVISION TECHNOLOGIES on Instagram",
  },

  {
    icon: <FaYoutube />,

    url:
      "https://youtube.com/@smyvisiontechnologies",

    label:
      "SMYVISION TECHNOLOGIES on YouTube",
  },
];

/* =========================================================
   FOOTER COMPONENT
========================================================= */

const Footer = () => {
  const [showScrollTop, setShowScrollTop] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(
        window.scrollY > 350
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    const message =
      encodeURIComponent(
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
      <style>
        {styles}
      </style>

      <footer className="premium-footer">
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <section className="footer-main">
          <div className="footer-grid-pattern" />

          <div className="footer-decoration footer-decoration-one" />

          <div className="footer-decoration footer-decoration-two" />

          <div className="footer-container">
            <div className="footer-grid">
              {/* =================================================
                  COMPANY INFORMATION
              ================================================= */}

              <div className="footer-company">
                <Link
                  to="/"
                  className="footer-brand"
                  aria-label="SMYVISION TECHNOLOGIES Home"
                >
                  <div className="footer-logo-icon">
                    <FaCode />
                  </div>

                  <div className="footer-brand-text">
                    <strong>
                      SMYVISION
                    </strong>

                    <span>
                      TECHNOLOGIES
                    </span>
                  </div>
                </Link>

                <p className="footer-description">
                  We create professional
                  websites, smart automation
                  systems and intelligent
                  digital experiences designed
                  to help businesses establish
                  trust, improve customer
                  communication and grow with
                  confidence.
                </p>

                <div className="footer-trust-list">
                  <span>
                    <FaCheck />

                    Professional Website Development
                  </span>

                  <span>
                    <FaCheck />

                    Business-Focused Digital Solutions
                  </span>

                  <span>
                    <FaCheck />

                    Responsive Customer Experiences
                  </span>
                </div>

                <div className="footer-socials">
                  {socialLinks.map(
                    (social) => (
                      <a
                        key={
                          social.label
                        }
                        href={
                          social.url
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                          social.label
                        }
                      >
                        {
                          social.icon
                        }
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* =================================================
                  QUICK LINKS
              ================================================= */}

              <div className="footer-column">
                <span className="footer-column-label">
                  NAVIGATION
                </span>

                <h3>
                  Quick Links
                </h3>

                <nav
                  aria-label="Footer Navigation"
                >
                  <ul className="footer-link-list">
                    {quickLinks.map(
                      (link) => (
                        <li
                          key={
                            link.name
                          }
                        >
                          <Link
                            to={
                              link.path
                            }
                          >
                            <FaChevronRight />

                            <span>
                              {
                                link.name
                              }
                            </span>
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              </div>

              {/* =================================================
                  SERVICES
              ================================================= */}

              <div className="footer-column">
                <span className="footer-column-label">
                  WHAT WE DO
                </span>

                <h3>
                  Our Services
                </h3>

                <ul className="footer-link-list">
                  {services.map(
                    (service) => (
                      <li
                        key={
                          service.name
                        }
                      >
                        <Link
                          to={
                            service.path
                          }
                        >
                          <FaChevronRight />

                          <span>
                            {
                              service.name
                            }
                          </span>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* =================================================
                  CONTACT
              ================================================= */}

              <div className="footer-column footer-contact-column">
                <span className="footer-column-label">
                  LET'S CONNECT
                </span>

                <h3>
                  Get In Touch
                </h3>

                <div className="footer-contact-list">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="footer-contact-card"
                  >
                    <div>
                      <FaEnvelope />
                    </div>

                    <span>
                      <small>
                        Email Us
                      </small>

                      <strong>
                        {EMAIL}
                      </strong>
                    </span>
                  </a>

                  <a
                    href={`tel:${PHONE_LINK}`}
                    className="footer-contact-card"
                  >
                    <div>
                      <FaPhone />
                    </div>

                    <span>
                      <small>
                        Call Us
                      </small>

                      <strong>
                        +91{" "}
                        {
                          PHONE_NUMBER
                        }
                      </strong>
                    </span>
                  </a>

                  <button
                    type="button"
                    className="footer-contact-card footer-whatsapp-card"
                    onClick={
                      openWhatsApp
                    }
                  >
                    <div>
                      <FaWhatsapp />
                    </div>

                    <span>
                      <small>
                        Quick Chat
                      </small>

                      <strong>
                        WhatsApp Us
                      </strong>
                    </span>
                  </button>

                  <div className="footer-contact-card footer-hours-card">
                    <div>
                      <FaClock />
                    </div>

                    <span>
                      <small>
                        Working Hours
                      </small>

                      <strong>
                        Monday - Saturday
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                PREMIUM HIGHLIGHT STRIP
            ================================================= */}

            <div className="footer-highlight-strip">
              <div className="footer-highlight-item">
                <div className="footer-highlight-icon">
                  <FaGlobe />
                </div>

                <span>
                  <strong>
                    Modern Digital Solutions
                  </strong>

                  Built for businesses that
                  are ready to grow.
                </span>
              </div>

              <div className="footer-highlight-item">
                <div className="footer-highlight-icon">
                  <FaShieldHalved />
                </div>

                <span>
                  <strong>
                    Professional Development
                  </strong>

                  Quality-focused digital
                  experiences.
                </span>
              </div>

              <div className="footer-highlight-item">
                <div className="footer-highlight-icon">
                  <FaBriefcase />
                </div>

                <span>
                  <strong>
                    Business-First Approach
                  </strong>

                  Technology designed around
                  real requirements.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}

        <section className="footer-bottom">
          <div className="footer-container footer-bottom-layout">
            <div className="footer-copyright">
              <p>
                ©{" "}
                {new Date().getFullYear()}{" "}
                <strong>
                  SMYVISION TECHNOLOGIES
                </strong>
                . All rights reserved.
              </p>

              <span>
                Website Development • Business
                Automation • AI Solutions •
                Digital Experiences
              </span>
            </div>

            <div className="footer-legal">
              <Link to="/privacy-policy">
                Privacy Policy
              </Link>

              <span />

              <Link to="/terms">
                Terms
              </Link>

              <span />

              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sitemap
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            STRUCTURED DATA FOR SEO
        ====================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                {
                  "@context":
                    "https://schema.org",

                  "@type":
                    "ProfessionalService",

                  "@id":
                    `${WEBSITE_URL}/#organization`,

                  name:
                    "SMYVISION TECHNOLOGIES",

                  alternateName:
                    "SMYVISION",

                  url:
                    WEBSITE_URL,

                  logo:
                    `${WEBSITE_URL}/logo.png`,

                  description:
                    "SMYVISION TECHNOLOGIES is a professional web development company in Vijayawada providing website development, responsive web design, custom web applications, business automation and AI chatbot solutions across Vijayawada and Andhra Pradesh.",

                  email:
                    EMAIL,

                  telephone:
                    PHONE_LINK,

                  address: {
                    "@type":
                      "PostalAddress",

                    addressLocality:
                      "Vijayawada",

                    addressRegion:
                      "Andhra Pradesh",

                    addressCountry:
                      "IN",
                  },

                  areaServed: [
                    {
                      "@type":
                        "City",

                      name:
                        "Vijayawada",
                    },

                    {
                      "@type":
                        "State",

                      name:
                        "Andhra Pradesh",
                    },
                  ],

                  sameAs:
                    socialLinks.map(
                      (
                        social
                      ) =>
                        social.url
                    ),

                  contactPoint: {
                    "@type":
                      "ContactPoint",

                    telephone:
                      PHONE_LINK,

                    contactType:
                      "customer service",

                    availableLanguage: [
                      "English",

                      "Telugu",
                    ],

                    areaServed:
                      "IN",
                  },
                }
              ),
          }}
        />

        {/* =====================================================
            SCROLL TO TOP
        ====================================================== */}

        {showScrollTop && (
          <button
            type="button"
            className="footer-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <FaArrowUp />
          </button>
        )}
      </footer>
    </>
  );
};

/* =========================================================
   COMPLETE PREMIUM FOOTER CSS
========================================================= */

const styles = `
  .premium-footer {
    position: relative;

    overflow: hidden;

    font-family:
      Inter,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;

    background: #06142a;
  }

  .footer-container {
    width:
      min(
        1180px,
        calc(100% - 40px)
      );

    margin: 0 auto;
  }

  /* =========================================================
     MAIN FOOTER
  ========================================================= */

  .footer-main {
    position: relative;

    overflow: hidden;

    padding:
      90px 0
      55px;

    color: white;

    background:
      radial-gradient(
        circle at 14% 18%,
        rgba(
          21,
          94,
          239,
          0.16
        ),
        transparent 28%
      ),
      radial-gradient(
        circle at 90% 80%,
        rgba(
          109,
          40,
          217,
          0.14
        ),
        transparent 31%
      ),
      linear-gradient(
        145deg,
        #06142a 0%,
        #081a36 55%,
        #07152d 100%
      );
  }

  .footer-grid-pattern {
    position: absolute;

    inset: 0;

    pointer-events: none;

    opacity: 0.24;

    background-image:
      linear-gradient(
        rgba(
          255,
          255,
          255,
          0.024
        )
        1px,
        transparent
        1px
      ),
      linear-gradient(
        90deg,
        rgba(
          255,
          255,
          255,
          0.024
        )
        1px,
        transparent
        1px
      );

    background-size:
      48px
      48px;

    mask-image:
      linear-gradient(
        to bottom,
        black,
        transparent
      );
  }

  .footer-decoration {
    position: absolute;

    pointer-events: none;

    border-radius: 50%;

    filter:
      blur(
        80px
      );
  }

  .footer-decoration-one {
    width: 320px;

    height: 320px;

    top: -160px;

    left: -100px;

    background:
      rgba(
        30,
        112,
        255,
        0.12
      );
  }

  .footer-decoration-two {
    width: 350px;

    height: 350px;

    right: -140px;

    bottom: -170px;

    background:
      rgba(
        109,
        40,
        217,
        0.14
      );
  }

  .footer-grid {
    position: relative;

    z-index: 2;

    display: grid;

    grid-template-columns:
      1.35fr
      0.7fr
      0.95fr
      1.15fr;

    gap: 50px;
  }

  /* =========================================================
     BRAND
  ========================================================= */

  .footer-brand {
    width: fit-content;

    display: flex;

    align-items: center;

    gap: 13px;

    margin-bottom: 23px;

    text-decoration: none;
  }

  .footer-logo-icon {
    width: 50px;

    height: 50px;

    display: grid;

    place-items: center;

    color: white;

    background:
      linear-gradient(
        135deg,
        #176fff,
        #6d39df
      );

    border:
      1px solid
      rgba(
        255,
        255,
        255,
        0.12
      );

    border-radius: 15px;

    box-shadow:
      0 12px 30px
      rgba(
        19,
        91,
        230,
        0.24
      );

    font-size: 20px;

    transition:
      transform
      0.3s ease,
      box-shadow
      0.3s ease;
  }

  .footer-brand:hover
  .footer-logo-icon {
    transform:
      translateY(
        -4px
      )
      rotate(
        4deg
      );

    box-shadow:
      0 18px 38px
      rgba(
        19,
        91,
        230,
        0.34
      );
  }

  .footer-brand-text {
    display: flex;

    flex-direction: column;

    gap: 3px;
  }

  .footer-brand-text strong {
    color: white;

    font-size: 22px;

    font-weight: 900;

    letter-spacing:
      -0.04em;
  }

  .footer-brand-text span {
    color: #7891b8;

    font-size: 9px;

    font-weight: 750;

    letter-spacing:
      0.24em;
  }

  .footer-description {
    max-width: 360px;

    margin:
      0 0
      24px;

    color: #8fa3c0;

    font-size: 13px;

    line-height: 1.85;
  }

  .footer-trust-list {
    display: grid;

    gap: 10px;

    margin-bottom: 27px;
  }

  .footer-trust-list span {
    display: flex;

    align-items: center;

    gap: 8px;

    color: #b5c4da;

    font-size: 11px;

    font-weight: 600;
  }

  .footer-trust-list svg {
    color: #2cd391;

    font-size: 10px;
  }

  .footer-socials {
    display: flex;

    flex-wrap: wrap;

    gap: 9px;
  }

  .footer-socials a {
    width: 41px;

    height: 41px;

    display: grid;

    place-items: center;

    color: #afc0d8;

    background:
      rgba(
        255,
        255,
        255,
        0.055
      );

    border:
      1px solid
      rgba(
        255,
        255,
        255,
        0.09
      );

    border-radius: 11px;

    text-decoration: none;

    transition:
      transform
      0.25s ease,
      color
      0.25s ease,
      background
      0.25s ease,
      box-shadow
      0.25s ease;
  }

  .footer-socials a:hover {
    color: white;

    background:
      linear-gradient(
        135deg,
        #176fff,
        #6c3ae2
      );

    transform:
      translateY(
        -5px
      )
      rotate(
        4deg
      );

    box-shadow:
      0 14px 30px
      rgba(
        17,
        87,
        225,
        0.25
      );
  }

  /* =========================================================
     FOOTER COLUMNS
  ========================================================= */

  .footer-column-label {
    display: inline-block;

    margin-bottom: 9px;

    color: #4e8ef8;

    font-size: 8px;

    font-weight: 850;

    letter-spacing:
      0.16em;
  }

  .footer-column h3 {
    margin:
      0 0
      25px;

    color: white;

    font-size: 17px;

    letter-spacing:
      -0.02em;
  }

  .footer-link-list {
    display: grid;

    gap: 14px;

    margin: 0;

    padding: 0;

    list-style: none;
  }

  .footer-link-list a {
    display: flex;

    align-items: center;

    gap: 8px;

    color: #8fa3c0;

    font-size: 12px;

    font-weight: 600;

    text-decoration: none;

    transition:
      color
      0.25s ease,
      transform
      0.25s ease;
  }

  .footer-link-list a svg {
    color: #376fce;

    font-size: 8px;

    transition:
      transform
      0.25s ease;
  }

  .footer-link-list a:hover {
    color: white;

    transform:
      translateX(
        5px
      );
  }

  .footer-link-list a:hover svg {
    transform:
      translateX(
        2px
      );
  }

  /* =========================================================
     CONTACT CARDS
  ========================================================= */

  .footer-contact-list {
    display: grid;

    gap: 10px;
  }

  .footer-contact-card {
    width: 100%;

    min-width: 0;

    display: flex;

    align-items: center;

    gap: 12px;

    padding: 12px;

    color: inherit;

    text-align: left;

    background:
      rgba(
        255,
        255,
        255,
        0.035
      );

    border:
      1px solid
      rgba(
        255,
        255,
        255,
        0.07
      );

    border-radius: 13px;

    text-decoration: none;

    cursor: pointer;

    transition:
      transform
      0.25s ease,
      background
      0.25s ease,
      border-color
      0.25s ease;
  }

  .footer-contact-card:hover {
    transform:
      translateX(
        5px
      );

    background:
      rgba(
        255,
        255,
        255,
        0.06
      );

    border-color:
      rgba(
        70,
        139,
        255,
        0.26
      );
  }

  .footer-contact-card > div {
    width: 36px;

    height: 36px;

    display: grid;

    place-items: center;

    flex-shrink: 0;

    color: #66a0ff;

    background:
      rgba(
        48,
        119,
        239,
        0.1
      );

    border-radius: 10px;
  }

  .footer-whatsapp-card > div {
    color: #2fd28e;

    background:
      rgba(
        27,
        189,
        119,
        0.1
      );
  }

  .footer-contact-card span {
    min-width: 0;

    display: flex;

    flex-direction: column;

    gap: 3px;
  }

  .footer-contact-card small {
    color: #6e82a2;

    font-size: 8px;

    font-weight: 700;

    text-transform: uppercase;

    letter-spacing:
      0.09em;
  }

  .footer-contact-card strong {
    max-width: 200px;

    overflow: hidden;

    color: #c2d0e4;

    font-size: 10px;

    font-weight: 650;

    white-space: nowrap;

    text-overflow: ellipsis;
  }

  /* =========================================================
     HIGHLIGHT STRIP
  ========================================================= */

  .footer-highlight-strip {
    position: relative;

    z-index: 2;

    display: grid;

    grid-template-columns:
      repeat(
        3,
        1fr
      );

    gap: 15px;

    margin-top: 55px;

    padding: 17px;

    background:
      rgba(
        255,
        255,
        255,
        0.025
      );

    border:
      1px solid
      rgba(
        255,
        255,
        255,
        0.065
      );

    border-radius: 18px;
  }

  .footer-highlight-item {
    display: flex;

    align-items: center;

    gap: 12px;

    padding: 11px;

    border-radius: 13px;

    transition:
      background
      0.25s ease,
      transform
      0.25s ease;
  }

  .footer-highlight-item:hover {
    background:
      rgba(
        255,
        255,
        255,
        0.035
      );

    transform:
      translateY(
        -3px
      );
  }

  .footer-highlight-icon {
    width: 42px;

    height: 42px;

    display: grid;

    place-items: center;

    flex-shrink: 0;

    color: #5c99ff;

    background:
      rgba(
        44,
        112,
        227,
        0.1
      );

    border-radius: 12px;

    font-size: 18px;
  }

  .footer-highlight-item span {
    display: flex;

    flex-direction: column;

    gap: 3px;

    color: #7188a8;

    font-size: 9px;

    line-height: 1.5;
  }

  .footer-highlight-item strong {
    color: #d5dfed;

    font-size: 11px;
  }

  /* =========================================================
     BOTTOM FOOTER
  ========================================================= */

  .footer-bottom {
    padding:
      22px 0;

    background: #041023;

    border-top:
      1px solid
      rgba(
        255,
        255,
        255,
        0.05
      );
  }

  .footer-bottom-layout {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 25px;
  }

  .footer-copyright p {
    margin:
      0 0
      4px;

    color: #7084a3;

    font-size: 10px;
  }

  .footer-copyright strong {
    color: #a9bad1;
  }

  .footer-copyright > span {
    color: #526985;

    font-size: 8px;

    letter-spacing:
      0.05em;
  }

  .footer-legal {
    display: flex;

    align-items: center;

    gap: 12px;
  }

  .footer-legal a {
    color: #7084a3;

    font-size: 9px;

    text-decoration: none;

    transition:
      color
      0.25s ease;
  }

  .footer-legal a:hover {
    color: white;
  }

  .footer-legal > span {
    width: 3px;

    height: 3px;

    background: #3b4f6d;

    border-radius: 50%;
  }

  /* =========================================================
     SCROLL TO TOP
  ========================================================= */

  .footer-scroll-top {
    width: 47px;

    height: 47px;

    position: fixed;

    z-index: 999;

    left: 25px;

    bottom: 25px;

    display: grid;

    place-items: center;

    color: white;

    background:
      linear-gradient(
        135deg,
        #0758e8,
        #6338dc
      );

    border: 0;

    border-radius: 14px;

    box-shadow:
      0 15px 35px
      rgba(
        7,
        88,
        232,
        0.3
      );

    cursor: pointer;

    animation:
      scrollButtonIn
      0.35s ease;

    transition:
      transform
      0.25s ease,
      box-shadow
      0.25s ease;
  }

  .footer-scroll-top:hover {
    transform:
      translateY(
        -5px
      )
      scale(
        1.05
      );

    box-shadow:
      0 20px 42px
      rgba(
        7,
        88,
        232,
        0.4
      );
  }

  @keyframes scrollButtonIn {
    from {
      opacity: 0;

      transform:
        translateY(
          15px
        )
        scale(
          0.85
        );
    }

    to {
      opacity: 1;

      transform:
        translateY(
          0
        )
        scale(
          1
        );
    }
  }

  /* =========================================================
     TABLET
  ========================================================= */

  @media (
    max-width:
    1050px
  ) {
    .footer-grid {
      grid-template-columns:
        1.3fr
        0.7fr
        1fr;

      gap: 40px;
    }

    .footer-contact-column {
      grid-column:
        1 / -1;
    }

    .footer-contact-list {
      grid-template-columns:
        repeat(
          4,
          1fr
        );
    }
  }

  /* =========================================================
     MOBILE
  ========================================================= */

  @media (
    max-width:
    768px
  ) {
    .footer-container {
      width:
        min(
          100% - 28px,
          1180px
        );
    }

    .footer-main {
      padding:
        75px 0
        45px;
    }

    .footer-grid {
      grid-template-columns:
        repeat(
          2,
          1fr
        );

      gap:
        45px
        30px;
    }

    .footer-company {
      grid-column:
        1 / -1;

      text-align: center;
    }

    .footer-brand {
      margin:
        0 auto
        23px;
    }

    .footer-description {
      margin:
        0 auto
        24px;
    }

    .footer-trust-list {
      width: fit-content;

      margin:
        0 auto
        27px;

      text-align: left;
    }

    .footer-socials {
      justify-content: center;
    }

    .footer-contact-column {
      grid-column:
        1 / -1;
    }

    .footer-contact-list {
      grid-template-columns:
        repeat(
          2,
          1fr
        );
    }

    .footer-highlight-strip {
      grid-template-columns:
        1fr;
    }

    .footer-bottom-layout {
      flex-direction: column;

      text-align: center;
    }
  }

  /* =========================================================
     SMALL MOBILE
  ========================================================= */

  @media (
    max-width:
    500px
  ) {
    .footer-main {
      padding-top: 65px;
    }

    .footer-grid {
      grid-template-columns:
        1fr;

      text-align: center;
    }

    .footer-column,
    .footer-contact-column {
      grid-column: auto;
    }

    .footer-link-list a {
      justify-content: center;
    }

    .footer-contact-list {
      grid-template-columns:
        1fr;

      text-align: left;
    }

    .footer-highlight-item {
      align-items: flex-start;

      text-align: left;
    }

    .footer-legal {
      flex-wrap: wrap;

      justify-content: center;
    }

    .footer-scroll-top {
      width: 44px;

      height: 44px;

      left: 15px;

      bottom: 18px;
    }
  }

  @media (
    prefers-reduced-motion:
    reduce
  ) {
    * {
      scroll-behavior: auto !important;
    }
  }
`;

export default Footer;