import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaArrowRight,
  FaAward,
  FaBolt,
  FaBriefcase,
  FaBullseye,
  FaCheck,
  FaCircleCheck,
  FaCode,
  FaComments,
  FaGlobe,
  FaHeart,
  FaLightbulb,
  FaRocket,
  FaShieldHalved,
  FaStar,
  FaUsers,
  FaWandMagicSparkles,
  FaWhatsapp,
} from "react-icons/fa6";

/* =========================================================
   CONFIGURATION
========================================================= */

const WEBSITE_URL = "https://smyvisiontechnologies.com";

const ABOUT_URL = `${WEBSITE_URL}/about`;

const PHONE_NUMBER = "8500352005";

const PHONE_LINK = "+918500352005";

const EMAIL = "smyvisiontechnologies@gmail.com";

/* =========================================================
   COMPANY VALUES (UNCHANGED)
========================================================= */

const values = [
  {
    icon: <FaShieldHalved />,
    title: "Integrity First",
    description:
      "We believe strong partnerships begin with honest communication, clear expectations and transparent processes.",
  },
  {
    icon: <FaLightbulb />,
    title: "Practical Innovation",
    description:
      "We use technology with purpose, focusing on practical solutions that solve real business challenges.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Focused Thinking",
    description:
      "Every project starts with understanding the business, the customer journey and the outcome that matters most.",
  },
  {
    icon: <FaAward />,
    title: "Commitment to Quality",
    description:
      "We focus on professional presentation, responsive development, usability and long-term digital value.",
  },
];

/* =========================================================
   WHAT WE DO (UNCHANGED)
========================================================= */

const services = [
  {
    icon: <FaGlobe />,
    image: "/images/web.png",
    title: "Premium Website Development",
    description:
      "High-end business websites designed to build trust, communicate clearly and convert visitors into genuine enquiries.",
    points: [
      "Business & corporate websites",
      "Responsive user experiences",
      "SEO-ready development",
      "Modern website redesign",
    ],
  },
  {
    icon: <FaCode />,
    image: "/images/cust.png",
    title: "Custom Web Development",
    description:
      "Purpose-built web platforms created around your exact workflows, customers and long-term business requirements.",
    points: [
      "Custom portals",
      "Management systems",
      "Client dashboards",
      "Web applications",
    ],
  },
  {
    icon: <FaGlobe />,
    image: "/images/ecomm.png",
    title: "Custom E-commerce Solutions",
    description:
      "Premium online stores with product management, smooth shopping journeys and scalable functionality built for your brand.",
    points: [
      "Product catalogues",
      "Custom storefronts",
      "Order workflows",
      "Payment integration",
    ],
  },
  {
    icon: <FaBolt />,
    image: "/images/auto.png",
    title: "Business Automation",
    description:
      "Custom automation systems that reduce repetitive work, simplify operations and connect important business processes.",
    points: [
      "Workflow automation",
      "Custom dashboards",
      "Business systems",
      "Process optimization",
    ],
  },
  {
    icon: <FaComments />,
    image: "/images/chat.png",
    title: "Chatbot Solutions (Coming Soon)",
    description:
      "Smart experiences for customer enquiries, lead handling and business communication without unnecessary complexity.",
    points: [
      "Chatbots",
      "Lead automation",
      "Customer support",
      "Smart business tools",
    ],
  },
];

/* =========================================================
   BUSINESS ADVANTAGES (UNCHANGED)
========================================================= */

const advantages = [
  {
    icon: <FaBullseye />,
    title: "Business-First Approach",
    description:
      "We understand your goals before recommending the right digital solution.",
  },
  {
    icon: <FaCode />,
    title: "Modern Development",
    description:
      "We build professional digital experiences using reliable and scalable development practices.",
  },
  {
    icon: <FaRocket />,
    title: "Built for Growth",
    description:
      "Our solutions are designed to support your current requirements and future business expansion.",
  },
  {
    icon: <FaHeart />,
    title: "Focused Collaboration",
    description:
      "We work closely with businesses to keep project decisions practical, clear and aligned with real needs.",
  },
];

/* =========================================================
   BUSINESS JOURNEY (UNCHANGED)
========================================================= */

const journeySteps = [
  {
    icon: <FaComments />,
    title: "Understand",
    description:
      "We begin by understanding your business, customers, services and project goals.",
  },
  {
    icon: <FaBullseye />,
    title: "Plan",
    description:
      "We organize the structure, content direction and functionality required for your solution.",
  },
  {
    icon: <FaWandMagicSparkles />,
    title: "Create",
    description:
      "We transform the strategy into a professional, responsive and functional digital experience.",
  },
  {
    icon: <FaRocket />,
    title: "Improve",
    description:
      "We test, refine and prepare the final solution for a smooth business-ready launch.",
  },
];

/* =========================================================
   SEO + LOCAL ENTITY + AEO/GEO STRUCTURED DATA
   FACTUAL CUSTOM WEB DEVELOPMENT + VIJAYAWADA SIGNALS
========================================================= */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${ABOUT_URL}#webpage`,
      "url": ABOUT_URL,
      "name": "About SMYVISION TECHNOLOGIES | Web Development Company in Vijayawada",
      "headline": "About SMYVISION TECHNOLOGIES - Web Development Company in Vijayawada",
      "description": "Learn about SMYVISION TECHNOLOGIES, a web development company in Vijayawada building professional websites, custom web applications, e-commerce solutions and business automation systems.",
      "isPartOf": { "@id": `${WEBSITE_URL}/#website` },
      "about": { "@id": `${WEBSITE_URL}/#organization` },
      "keywords": [
        "Web Development Company in Vijayawada",
        "Website Development in Vijayawada",
        "Custom Web Development in Vijayawada",
        "Custom Web Application Development",
        "E-commerce Development in Vijayawada",
        "Business Automation"
      ],
      "spatialCoverage": {
        "@type": "City",
        "name": "Vijayawada",
        "containedInPlace": {
          "@type": "State",
          "name": "Andhra Pradesh"
        }
      },
      "inLanguage": "en-IN",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".about-hero-description"],
      },
    },
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": `${WEBSITE_URL}/#organization`,
      "name": "SMYVISION TECHNOLOGIES",
      "alternateName": "SMYVISION",
      "url": WEBSITE_URL,
      "logo": `${WEBSITE_URL}/Logo.png`,
      "image": `${WEBSITE_URL}/Logo.png`,
      "description": "SMYVISION TECHNOLOGIES is a web development company in Vijayawada providing professional websites, custom web applications, e-commerce solutions, business automation and digital systems.",
      "email": EMAIL,
      "telephone": PHONE_LINK,
      "foundingDate": "2026",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vijayawada",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "16.5062",
        "longitude": "80.6480",
      },
      "areaServed": [
        { "@type": "City", "name": "Vijayawada" },
        { "@type": "State", "name": "Andhra Pradesh" },
        { "@type": "Country", "name": "India" },
      ],
      "knowsAbout": [
        "Website Development",
        "Custom Web Development",
        "Web Design",
        "Responsive Website Development",
        "Custom Web Applications",
        "Custom Web Application Development",
        "Business Automation",
        "AI Chatbot Development",
        "SEO-Friendly Web Development",
        "Web Development Company in Vijayawada",
        "Website Development in Vijayawada",
        "Custom Web Development in Vijayawada",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": PHONE_LINK,
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Telugu", "Hindi"],
      },
      "sameAs": [
        "https://www.facebook.com/share/1AAbW51BTs/",
        "https://linkedin.com/company/smyvisiontechnologies",
        "https://instagram.com/smyvisiontechnologies",
        "https://youtube.com/@smyvisiontechnologies",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SMYVISION TECHNOLOGIES Digital Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development in Vijayawada",
              "description": "Professional business websites and responsive web development in Vijayawada designed around business goals and customer journeys.",
              "areaServed": { "@type": "City", "name": "Vijayawada" },
              "provider": { "@id": `${WEBSITE_URL}/#organization` },
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Web Application Development in Vijayawada",
              "description": "Scalable custom web applications, management dashboards and business portals in Vijayawada developed around specific business requirements.",
              "areaServed": { "@type": "City", "name": "Vijayawada" },
              "provider": { "@id": `${WEBSITE_URL}/#organization` },
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Automation",
              "description": "Workflow automation and business management systems designed to simplify repetitive business processes.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Chatbot Development",
              "description": "Intelligent AI chatbot solutions for lead generation, customer enquiries and support automation.",
            },
          },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": `${WEBSITE_URL}/#custom-web-app-service`,
      "name": "Custom Web Development in Vijayawada",
      "serviceType": "Custom Web Development",
      "description": "Purpose-built custom web development services in Vijayawada including custom web applications, business dashboards, management portals and workflow-based digital platforms.",
      "provider": { "@id": `${WEBSITE_URL}/#organization` },
      "areaServed": [
        { "@type": "City", "name": "Vijayawada" },
        { "@type": "State", "name": "Andhra Pradesh" },
      ],
    },
  ],
};

/* =========================================================
   ANIMATION (UNCHANGED)
========================================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* =========================================================
   SECTION HEADER (UNCHANGED)
========================================================= */

const SectionHeader = ({ eyebrow, title, description }) => {
  return (
    <motion.div
      className="about-section-header"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
    >
      <motion.span variants={fadeUp}>{eyebrow}</motion.span>
      <motion.h2 variants={fadeUp}>{title}</motion.h2>
      <motion.p variants={fadeUp}>{description}</motion.p>
    </motion.div>
  );
};

/* =========================================================
   ABOUT COMPONENT
========================================================= */

const About = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToServices = () => {
    navigate("/services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi SMYVISION TECHNOLOGIES, I would like to discuss a website or digital solution for my business."
    );
    window.open(`https://wa.me/91${PHONE_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* =====================================================
          SEO + AEO/GEO OPTIMIZED HELMET
          LOCATION-NEUTRAL VISIBLE METADATA
          FACTUAL LOCAL ENTITY SIGNALS IN JSON-LD
      ====================================================== */}

      <Helmet>
        <html lang="en-IN" />

        {/* ✅ PRIMARY TITLE - Front-loaded with "Best" + "Custom Web Applications" */}
        <title>
          About SMYVISION TECHNOLOGIES | Web Development Company in Vijayawada
        </title>

        {/* ✅ META DESCRIPTION - High CTR, includes all target keywords */}
        <meta
          name="description"
          content="Learn about SMYVISION TECHNOLOGIES, a web development company in Vijayawada building professional websites, custom web applications, e-commerce solutions and business automation systems."
        />

        <meta name="author" content="SMYVISION TECHNOLOGIES" />
        <meta name="publisher" content="SMYVISION TECHNOLOGIES" />

        {/* ✅ ROBOTS - Full indexing directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1" />

        <meta name="application-name" content="SMYVISION TECHNOLOGIES" />

        <link rel="canonical" href={ABOUT_URL} />

        {/* ✅ OPEN GRAPH - Social sharing optimized */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SMYVISION TECHNOLOGIES" />
        <meta property="og:title" content="About SMYVISION TECHNOLOGIES | Web Development Company in Vijayawada" />
        <meta property="og:description" content="Meet SMYVISION TECHNOLOGIES, a web development company in Vijayawada creating professional websites, custom web applications, e-commerce and business automation solutions." />
        <meta property="og:url" content={ABOUT_URL} />
        <meta property="og:image" content={`${WEBSITE_URL}/Logo.png`} />
        <meta property="og:image:alt" content="SMYVISION TECHNOLOGIES web development company in Vijayawada" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About SMYVISION TECHNOLOGIES | Web Development Company in Vijayawada" />
        <meta name="twitter:description" content="Learn about SMYVISION TECHNOLOGIES, our website development services in Vijayawada, custom web applications, business automation and AI solutions." />
        <meta name="twitter:image" content={`${WEBSITE_URL}/Logo.png`} />
        <meta name="twitter:image:alt" content="SMYVISION TECHNOLOGIES web development company in Vijayawada" />

        {/* ✅ STRUCTURED DATA SCRIPTS */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <style>{styles}</style>

      {/* =====================================================
          CONTENT & FUNCTIONALITY PRESERVED · HOME-THEME UI
      ====================================================== */}

      <main className="premium-about">
        {/* HERO SECTION - HOME THEME */}
        <section className="about-hero">
          <div className="about-grid-background" />
          <motion.div className="about-orb about-orb-one" animate={{ x: [0, 35, 0], y: [0, -25, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="about-orb about-orb-two" animate={{ x: [0, -30, 0], y: [0, 30, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
          <div className="about-container about-hero-layout">
            <motion.div
              className="about-hero-content"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.11,
                    delayChildren: 0.08,
                  },
                },
              }}
            >
              <motion.div className="about-hero-badge" variants={fadeUp}>
                <FaWandMagicSparkles />
                <span>Building Better Digital Experiences for Growing Businesses</span>
              </motion.div>
              <motion.h1 variants={fadeUp}>
                About SMYVISION TECHNOLOGIES
                <span> — Technology Built Around Real Business Goals.</span>
              </motion.h1>
              <motion.p className="about-hero-description" variants={fadeUp}>
                SMYVISION TECHNOLOGIES creates professional websites, custom web applications, smart automation systems and digital solutions designed around real business requirements.
              </motion.p>
              <motion.div className="about-hero-actions" variants={fadeUp}>
                <button type="button" className="about-primary-button" onClick={goToContact}>
                  Start Your Project<FaArrowRight />
                </button>
                <button type="button" className="about-secondary-button" onClick={goToServices}>
                  Explore Our Services
                </button>
              </motion.div>
              <motion.div className="about-hero-points" variants={fadeUp}>
                <span><FaCircleCheck />Business-Focused</span>
                <span><FaCircleCheck />Modern Development</span>
                <span><FaCircleCheck />Practical Solutions</span>
              </motion.div>
            </motion.div>
            <motion.div
              className="about-hero-visual"
              initial={{ opacity: 0, x: 54, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="about-visual-main-card"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="about-visual-top">
                  <span>OUR APPROACH</span>
                  <div className="about-live-dot"><i />Built for Business</div>
                </div>
                <h2>Understand.<br />Create.<br />Improve.</h2>
                <p>We combine business understanding with modern digital development to create solutions that have a clear purpose.</p>
                <div className="about-visual-metrics">
                  <div><strong>01</strong><span>Business Strategy</span></div>
                  <div><strong>02</strong><span>Digital Design</span></div>
                  <div><strong>03</strong><span>Smart Development</span></div>
                </div>
              </motion.div>
              <motion.div
                className="about-floating-card about-float-one"
                animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaBullseye /><div><strong>Goal Focused</strong><span>Built around your business</span></div>
              </motion.div>
              <motion.div
                className="about-floating-card about-float-two"
                animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaRocket /><div><strong>Growth Ready</strong><span>Designed to move forward</span></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* STATS - UNCHANGED */}
        <section className="about-stats-section">
          <div className="about-container">
            <div className="about-stats-grid">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <strong>3+</strong>
                <span>Core Digital Services</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <strong>100%</strong>
                <span>Responsive Development</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHO WE ARE - UNCHANGED */}
        <section className="about-section about-story-section">
          <div className="about-container about-story-layout">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
              <motion.span className="about-eyebrow" variants={fadeUp}>WHO WE ARE</motion.span>
              <motion.h2 variants={fadeUp}>A Digital Solutions Company Built Around Practical Business Needs.</motion.h2>
              <motion.p variants={fadeUp}>We started SMYVISION TECHNOLOGIES with a simple belief: technology should make business easier, clearer and more effective.</motion.p>
              <motion.p variants={fadeUp}>Businesses today need more than just an online page. They need a professional digital presence, better customer communication and systems that can support their day-to-day operations.</motion.p>
              <motion.p variants={fadeUp}>Our role is to understand those requirements and convert them into practical digital solutions that businesses can actually use.</motion.p>
              <motion.p variants={fadeUp}>From websites and custom platforms to automation and intelligent communication solutions, our focus remains on building technology with a clear business purpose.</motion.p>
            </motion.div>
            <motion.div className="about-story-card" initial={{ opacity: 0, scale: 0.93 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div className="story-card-icon"><FaBriefcase /></div>
              <span>OUR PURPOSE</span>
              <h3>Helping Businesses Build a Stronger Digital Foundation.</h3>
              <p>We focus on creating solutions that improve how businesses present themselves, communicate with customers and manage digital processes.</p>
              <div className="story-check-list">
                <span><FaCheck />Clear digital strategy</span>
                <span><FaCheck />Professional presentation</span>
                <span><FaCheck />Better customer experiences</span>
                <span><FaCheck />Scalable business solutions</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MISSION AND VISION - UNCHANGED */}
        <section className="about-section mission-section">
          <div className="about-container">
            <div className="mission-grid">
              <motion.article
                className="mission-card mission-blue"
                initial={{ opacity: 0, x: -90, y: 18, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mission-icon"><FaBullseye /></div>
                <span>OUR MISSION</span>
                <h2>Make Digital Solutions More Practical for Businesses.</h2>
                <p>Our mission is to understand real business challenges and create professional digital solutions that improve communication, simplify processes and support sustainable growth.</p>
              </motion.article>
              <motion.article
                className="mission-card mission-purple"
                initial={{ opacity: 0, x: 90, y: 18, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mission-icon"><FaRocket /></div>
                <span>OUR VISION</span>
                <h2>Become a Trusted Digital Partner for Growing Businesses.</h2>
                <p>Our vision is to build long-term partnerships by delivering technology that is reliable, understandable and aligned with the changing needs of modern businesses.</p>
              </motion.article>
            </div>
          </div>
        </section>

        {/* SERVICES - UNCHANGED */}
        <section className="about-section about-services-section">
          <div className="about-container">
            <SectionHeader eyebrow="WHAT WE BUILD" title="Digital Solutions Designed Around Real Business Requirements" description="Our core services focus on helping businesses build a stronger online presence, improve communication and simplify digital processes." />
            <div className="about-services-grid">
              {services.map((service, index) => (
                <motion.article
                  className="about-service-card"
                  key={service.title}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -35 : 35,
                    y: 28,
                    scale: 0.97,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    duration: 0.68,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="about-service-image">
                    <img src={service.image} alt={`${service.title} by SMYVISION TECHNOLOGIES`} loading="lazy" />
                    <div className="about-service-icon">{service.icon}</div>
                  </div>
                  <div className="about-service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="about-service-points">
                      {service.points.map((point) => (
                        <span key={point}><FaCircleCheck />{point}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES - UNCHANGED */}
        <section className="about-section values-section">
          <div className="about-container">
            <SectionHeader eyebrow="OUR VALUES" title="The Principles Behind the Way We Work" description="Our decisions, communication and development process are guided by principles that help us build better long-term business relationships." />
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.article
                  className="value-card"
                  key={value.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -45 : 45, y: 20, scale: 0.96 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.62, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8 }}
                >
                  <div>{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY / PROCESS - UNCHANGED */}
        <section className="about-section journey-section">
          <div className="about-container">
            <SectionHeader eyebrow="OUR WAY OF WORKING" title="A Clear Journey From Business Requirement to Digital Solution" description="We keep our approach simple, structured and focused on creating a solution that makes sense for the business." />
            <div className="journey-wrapper">
              <div className="journey-line" />
              {journeySteps.map((step, index) => (
                <motion.div
                  className={`journey-step ${index % 2 === 0 ? "journey-left" : "journey-right"}`}
                  key={step.title}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -80 : 80,
                    y: 24,
                    scale: 0.96,
                    filter: "blur(7px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.div
                    className="journey-icon"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(7,88,232,.16)",
                        "0 0 0 12px rgba(7,88,232,0)",
                        "0 0 0 0 rgba(7,88,232,0)",
                      ],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      delay: index * 0.22,
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  <div className="journey-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ADVANTAGES - UNCHANGED */}
        <section className="about-section advantages-section">
          <div className="about-container advantages-layout">
            <motion.div className="advantages-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span className="about-eyebrow" variants={fadeUp}>THE SMYVISION APPROACH</motion.span>
              <motion.h2 variants={fadeUp}>We Focus on the Business Before We Focus on the Technology.</motion.h2>
              <motion.p variants={fadeUp}>A good digital solution should not exist only because the technology is available. It should solve a clear problem, improve an experience or create a meaningful business opportunity.</motion.p>
              <motion.p variants={fadeUp}>That is why we begin with your requirements and build the technology around them.</motion.p>
              <motion.button type="button" className="about-primary-button" onClick={goToContact} variants={fadeUp}>
                Discuss Your Project<FaArrowRight />
              </motion.button>
            </motion.div>
            <div className="advantages-grid">
              {advantages.map((advantage, index) => (
                <motion.article
                  key={advantage.title}
                  className="advantage-card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -42 : 42, y: 18, scale: 0.96 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.62, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div>{advantage.icon}</div>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* BUSINESS CONTENT - UNCHANGED */}
        <section className="about-section about-content-section">
          <div className="about-container about-content-layout">
            <div>
              <span className="about-eyebrow">BUILT FOR MODERN BUSINESSES</span>
              <h2>Creating Digital Foundations That Can Grow With Your Business.</h2>
              <p>A business website can become the starting point for many future opportunities. It can support online marketing, customer communication, lead generation, business automation and internal management systems.</p>
              <p>That is why we focus on creating a strong digital foundation instead of simply building pages.</p>
              <p>Our goal is to help businesses use digital technology in a way that feels practical, useful and aligned with how the business actually operates.</p>
            </div>
            <div className="content-feature-grid">
              <div><FaGlobe /><h3>Stronger Digital Presence</h3><p>Present your business clearly and professionally across digital channels.</p></div>
              <div><FaBolt /><h3>Smarter Operations</h3><p>Reduce repetitive processes through practical automation solutions.</p></div>
              <div><FaUsers /><h3>Better Customer Journeys</h3><p>Make it easier for customers to understand and contact your business.</p></div>
              <div><FaRocket /><h3>Growth-Ready Solutions</h3><p>Create systems that can evolve as your business requirements change.</p></div>
            </div>
          </div>
        </section>

        {/* CTA - UNCHANGED */}
        <section className="about-final-cta">
          <div className="about-cta-orb about-cta-orb-one" />
          <div className="about-cta-orb about-cta-orb-two" />
          <div className="about-container">
            <motion.div className="about-final-content" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <motion.div className="about-final-icon" animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                <FaRocket />
              </motion.div>
              <span>LET'S MOVE YOUR IDEA FORWARD</span>
              <h2>Have a Business Idea That Needs the Right Digital Solution?</h2>
              <p>Tell us what you are planning. We will understand your requirements and help you explore a practical path forward.</p>
              <div className="about-final-actions">
                <button type="button" className="about-white-button" onClick={goToContact}>
                  Get a Free Quote<FaArrowRight />
                </button>
                <button type="button" className="about-whatsapp-button" onClick={openWhatsApp}>
                  <FaWhatsapp />WhatsApp Us
                </button>
              </div>
              <div className="about-final-trust">
                <span><FaStar />Professional Approach</span>
                <span><FaCheck />Clear Communication</span>
                <span><FaRocket />Business-Focused Solutions</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

/* =========================================================
   HOME-THEME CSS
========================================================= */

const styles = `
  :root {
    --about-primary: #0758e8;
    --about-primary-dark: #0649bd;
    --about-secondary: #4f46e5;
    --about-heading: #071a35;
    --about-text: #61728a;
    --about-muted: #8190a4;
    --about-light: #f7faff;
    --about-soft: #eef5ff;
    --about-border: #dfe8f4;
    --about-green: #13a976;
    --about-white: #ffffff;
  }

  * { box-sizing: border-box; }

  .premium-about {
    width: 100%;
    overflow: hidden;
    color: var(--about-text);
    background: #ffffff;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .about-container {
    width: min(1180px, calc(100% - 44px));
    margin: 0 auto;
  }

  .about-section {
    padding: 96px 0;
  }

  .about-eyebrow,
  .about-section-header > span {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 14px;
    color: var(--about-primary);
    font-size: 10px;
    font-weight: 850;
    letter-spacing: .16em;
  }

  .about-eyebrow::before,
  .about-section-header > span::before {
    content: "";
    width: 25px;
    height: 2px;
    border-radius: 999px;
    background: var(--about-primary);
  }

  .about-section-header {
    max-width: 760px;
    margin: 0 auto 50px;
    text-align: center;
  }

  .about-section-header > span {
    justify-content: center;
  }

  .about-section-header h2,
  .about-story-layout h2,
  .advantages-heading h2,
  .about-content-layout > div:first-child h2 {
    margin: 0 0 16px;
    color: var(--about-heading);
    font-size: clamp(2.05rem, 4vw, 3.55rem);
    line-height: 1.06;
    letter-spacing: -.045em;
  }

  .about-section-header p {
    max-width: 670px;
    margin: 0 auto;
    color: var(--about-text);
    font-size: 15px;
    line-height: 1.8;
  }

  .about-primary-button,
  .about-secondary-button,
  .about-white-button,
  .about-whatsapp-button {
    min-width: 220px;
    min-height: 57px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 0 23px;
    border-radius: 13px;
    font: inherit;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition:
      transform .25s ease,
      box-shadow .25s ease,
      border-color .25s ease;
  }

  .about-primary-button {
    color: #fff;
    border: 1px solid var(--about-primary);
    background: linear-gradient(135deg, #0d62ed, #4f46e5);
    box-shadow: 0 13px 27px rgba(22,92,218,.20);
  }

  .about-secondary-button {
    color: #1256c8;
    background: #fff;
    border: 1px solid #a9c4f5;
    box-shadow: 0 9px 21px rgba(36,80,145,.045);
  }

  .about-primary-button:hover,
  .about-secondary-button:hover,
  .about-white-button:hover,
  .about-whatsapp-button:hover {
    transform: translateY(-3px);
  }

  /* =========================================================
     HOME-THEME HERO
  ========================================================= */

  .about-hero {
    min-height: 720px;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 150px 0 92px;
    background:
      linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  }

  .about-grid-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: .72;
    background-image:
      radial-gradient(circle, rgba(7,88,232,.13) 1.2px, transparent 1.2px);
    background-size: 26px 26px;
    mask-image: linear-gradient(to bottom, black 0%, transparent 88%);
  }

  /* Remove the old large round blue/purple glow elements */
  .about-orb,
  .about-cta-orb {
    display: none !important;
  }

  .about-hero::before {
    content: "";
    position: absolute;
    width: 155px;
    height: 155px;
    left: -78px;
    bottom: 48px;
    border: 1px solid rgba(7,88,232,.13);
    border-radius: 28px;
    transform: rotate(28deg);
    background: rgba(255,255,255,.55);
  }

  .about-hero::after {
    content: "";
    position: absolute;
    width: 108px;
    height: 108px;
    right: 48px;
    top: 95px;
    border: 1px solid rgba(7,88,232,.12);
    border-radius: 23px;
    transform: rotate(18deg);
    background: rgba(238,245,255,.66);
  }

  .about-hero-layout {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.08fr .92fr;
    gap: 64px;
    align-items: center;
  }

  .about-hero-badge {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 21px;
    padding: 8px 13px;
    color: #145bcf;
    background: #f4f8ff;
    border: 1px solid #cfe0fb;
    border-radius: 10px;
    font-size: 9px;
    font-weight: 850;
    letter-spacing: .05em;
  }

  .about-hero-badge svg {
    color: var(--about-primary);
  }

  .about-hero-content h1 {
    max-width: 720px;
    margin: 0;
    color: var(--about-heading);
    font-size: clamp(2.45rem, 4.1vw, 4.15rem);
    line-height: 1.03;
    letter-spacing: -.05em;
  }

  .about-hero-content h1 span {
    display: block;
    margin-top: 8px;
    color: var(--about-primary);
    background: none;
    -webkit-text-fill-color: initial;
  }

  .about-hero-content::after {
    content: "";
    width: 74px;
    height: 3px;
    display: block;
    margin: 22px 0 19px;
    border-radius: 999px;
    background: linear-gradient(90deg, #0758e8, #4f46e5);
    transform-origin: left center;
    animation: aboutAccentLine 3.6s ease-in-out infinite;
  }

  @keyframes aboutAccentLine {
    0%, 100% { transform: scaleX(.68); opacity: .72; }
    50% { transform: scaleX(1); opacity: 1; }
  }

  .about-hero-description {
    max-width: 690px;
    margin: 0 0 27px;
    color: var(--about-text);
    font-size: 16px;
    line-height: 1.8;
  }

  .about-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .about-hero-points {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 11px;
    margin-top: 25px;
  }

  .about-hero-points span {
    min-height: 58px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px 12px;
    color: #28415f;
    background: rgba(255,255,255,.88);
    border: 1px solid #dce7f5;
    border-radius: 12px;
    font-size: 10px;
    font-weight: 750;
    box-shadow: 0 8px 20px rgba(19,55,103,.035);
  }

  .about-hero-points svg {
    flex-shrink: 0;
    color: var(--about-green);
    font-size: 13px;
  }

  /* Right visual: same clean card language as Home */
  .about-hero-visual {
    position: relative;
    min-width: 0;
    padding: 17px 12px 13px 18px;
  }

  .about-hero-visual::before {
    content: "";
    position: absolute;
    inset: 1px 22px 22px 0;
    border: 1px solid rgba(7,88,232,.18);
    border-radius: 24px;
    transform: rotate(-2deg);
    background: #edf5ff;
  }

  .about-visual-main-card {
    min-height: 445px;
    position: relative;
    z-index: 2;
    overflow: hidden;
    padding: 38px;
    color: var(--about-heading);
    background:
      linear-gradient(145deg, rgba(255,255,255,.99), rgba(245,249,255,.98));
    border: 1px solid #d7e4f3;
    border-radius: 24px;
    box-shadow: 0 28px 75px rgba(8,34,74,.12);
  }

  .about-visual-main-card::after {
    content: "";
    position: absolute;
    top: -30%;
    left: -42%;
    width: 32%;
    height: 160%;
    z-index: 1;
    pointer-events: none;
    transform: rotate(12deg);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(7,88,232,.055),
      transparent
    );
    animation: aboutCardSweep 7s ease-in-out infinite;
  }

  @keyframes aboutCardSweep {
    0%, 20% { left: -42%; opacity: 0; }
    42% { opacity: 1; }
    62% { left: 118%; opacity: .9; }
    100% { left: 118%; opacity: 0; }
  }

  .about-visual-main-card::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(7,88,232,.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(7,88,232,.035) 1px, transparent 1px);
    background-size: 34px 34px;
    mask-image: linear-gradient(to bottom, black, transparent 88%);
  }

  .about-visual-top,
  .about-visual-main-card h2,
  .about-visual-main-card > p,
  .about-visual-metrics {
    position: relative;
    z-index: 2;
  }

  .about-visual-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  .about-visual-top > span {
    color: var(--about-primary);
    font-size: 9px;
    font-weight: 850;
    letter-spacing: .15em;
  }

  .about-live-dot {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #708099;
    font-size: 9px;
    font-weight: 700;
  }

  .about-live-dot i {
    width: 7px;
    height: 7px;
    background: #13a976;
    border-radius: 50%;
    box-shadow: 0 0 0 5px rgba(19,169,118,.10);
  }

  .about-visual-main-card h2 {
    margin: 58px 0 18px;
    color: var(--about-heading);
    font-size: clamp(3rem, 5vw, 4.35rem);
    line-height: .96;
    letter-spacing: -.055em;
  }

  .about-visual-main-card > p {
    max-width: 390px;
    color: #61728a;
    font-size: 13px;
    line-height: 1.75;
  }

  .about-visual-metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 9px;
    margin-top: 42px;
  }

  .about-visual-metrics div {
    padding: 14px;
    background: #fff;
    border: 1px solid #dce7f5;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(15,49,94,.035);
  }

  .about-visual-metrics strong {
    display: block;
    margin-bottom: 4px;
    color: var(--about-primary);
    font-size: 18px;
  }

  .about-visual-metrics span {
    color: #74849a;
    font-size: 8px;
  }

  .about-floating-card {
    position: absolute;
    z-index: 4;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 13px 15px;
    background: rgba(255,255,255,.98);
    border: 1px solid #dce7f5;
    border-radius: 13px;
    box-shadow: 0 16px 38px rgba(10,38,82,.11);
  }

  .about-floating-card > svg {
    color: var(--about-primary);
  }

  .about-floating-card div {
    display: flex;
    flex-direction: column;
  }

  .about-floating-card strong {
    color: var(--about-heading);
    font-size: 10px;
  }

  .about-floating-card span {
    color: #8190a4;
    font-size: 8px;
  }

  .about-float-one {
    left: -34px;
    bottom: 64px;
  }

  .about-float-two {
    right: -28px;
    top: 68px;
  }

  /* =========================================================
     STATS
  ========================================================= */

  .about-stats-section {
    position: relative;
    z-index: 5;
    margin-top: -37px;
  }

  .about-stats-grid {
    max-width: 760px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    margin: 0 auto;
    padding: 7px;
    background: #fff;
    border: 1px solid var(--about-border);
    border-radius: 18px;
    box-shadow: 0 18px 50px rgba(8,33,73,.08);
  }

  .about-stats-grid div {
    position: relative;
    padding: 22px 18px;
    text-align: center;
  }

  .about-stats-grid > div:first-child::after {
    content: "";
    position: absolute;
    right: 0;
    top: 24%;
    width: 1px;
    height: 52%;
    background: #e4ebf4;
  }

  .about-stats-grid strong {
    display: block;
    margin-bottom: 5px;
    color: var(--about-primary);
    font-size: 29px;
    letter-spacing: -.045em;
  }

  .about-stats-grid span {
    color: #566c86;
    font-size: 10.5px;
    font-weight: 750;
  }

  /* =========================================================
     STORY
  ========================================================= */

  .about-story-section {
    background: #fff;
  }

  .about-story-layout {
    display: grid;
    grid-template-columns: 1.04fr .96fr;
    gap: 72px;
    align-items: center;
  }

  .about-story-layout p {
    margin: 0 0 15px;
    color: var(--about-text);
    font-size: 14px;
    line-height: 1.85;
  }

  .about-story-card {
    position: relative;
    overflow: hidden;
    padding: 35px;
    text-align: center;
    background: linear-gradient(145deg, #ffffff, #f7faff);
    border: 1px solid var(--about-border);
    border-radius: 22px;
    box-shadow: 0 20px 60px rgba(10,39,82,.07);
  }

  .about-story-card::after {
    content: "";
    position: absolute;
    width: 110px;
    height: 110px;
    right: -42px;
    bottom: -50px;
    border: 1px solid rgba(7,88,232,.12);
    border-radius: 24px;
    transform: rotate(22deg);
    background: rgba(237,245,255,.65);
  }

  .story-card-icon {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    margin: 0 auto 20px;
    color: #fff;
    background: linear-gradient(135deg, #0758e8, #4f46e5);
    border-radius: 14px;
    font-size: 21px;
    box-shadow: 0 12px 26px rgba(7,88,232,.20);
  }

  .about-story-card > span {
    color: var(--about-primary);
    font-size: 9px;
    font-weight: 850;
    letter-spacing: .15em;
  }

  .about-story-card h3 {
    position: relative;
    z-index: 2;
    margin: 11px 0 13px;
    color: var(--about-heading);
    font-size: 24px;
    line-height: 1.28;
  }

  .about-story-card > p {
    position: relative;
    z-index: 2;
    font-size: 13px;
    line-height: 1.8;
  }

  .story-check-list {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 11px;
    margin-top: 22px;
  }

  .story-check-list span {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #38506d;
    font-size: 11px;
    font-weight: 650;
  }

  .story-check-list svg {
    color: var(--about-green);
  }

  /* =========================================================
     MISSION / VISION - LIGHT HOME THEME
  ========================================================= */

  .mission-section {
    background: #f7faff;
  }

  .mission-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
  }

  .mission-card {
    min-height: 390px;
    position: relative;
    overflow: hidden;
    padding: 38px;
    color: var(--about-text);
    text-align: center;
    background: #fff;
    border: 1px solid var(--about-border);
    border-radius: 22px;
    box-shadow: 0 16px 45px rgba(8,28,56,.055);
    transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
  }

  .mission-card:hover {
    transform: translateY(-7px);
    border-color: rgba(7,88,232,.25);
    box-shadow: 0 27px 65px rgba(8,28,56,.10);
  }

  .mission-blue,
  .mission-purple {
    background: linear-gradient(145deg, #fff, #f8fbff);
  }

  .mission-icon {
    width: 62px;
    height: 62px;
    position: relative;
    display: grid;
    place-items: center;
    margin: 0 auto 28px;
    color: var(--about-primary);
    background: #f8fbff;
    border: 1px solid #cfe0f8;
    border-radius: 16px;
    font-size: 22px;
    box-shadow: 0 10px 26px rgba(7,88,232,.10);
    animation: missionSirenCore 1.65s ease-in-out infinite;
  }

  .mission-icon::before,
  .mission-icon::after {
    content: "";
    position: absolute;
    inset: -7px;
    pointer-events: none;
    border: 2px solid rgba(7,88,232,.28);
    border-radius: 20px;
    animation: missionSirenRing 1.65s ease-out infinite;
  }

  .mission-icon::after {
    inset: -14px;
    border-color: rgba(79,70,229,.18);
    animation-delay: .35s;
  }

  @keyframes missionSirenCore {
    0%, 100% {
      transform: scale(1);
      color: #0758e8;
      box-shadow: 0 10px 26px rgba(7,88,232,.10);
    }
    50% {
      transform: scale(1.07);
      color: #4f46e5;
      box-shadow:
        0 13px 32px rgba(7,88,232,.17),
        0 0 20px rgba(79,70,229,.12);
    }
  }

  @keyframes missionSirenRing {
    0% {
      transform: scale(.82);
      opacity: .78;
    }
    70% {
      transform: scale(1.12);
      opacity: 0;
    }
    100% {
      transform: scale(1.12);
      opacity: 0;
    }
  }

  .mission-card > span,
  .mission-purple > span {
    color: var(--about-primary);
    font-size: 9px;
    font-weight: 850;
    letter-spacing: .15em;
  }

  .mission-card h2 {
    max-width: 500px;
    margin: 12px 0 15px;
    color: var(--about-heading);
    font-size: clamp(1.9rem, 3vw, 2.65rem);
    line-height: 1.09;
    letter-spacing: -.04em;
  }

  .mission-card p {
    max-width: 540px;
    color: var(--about-text);
    font-size: 13px;
    line-height: 1.8;
  }

  /* =========================================================
     SERVICES
  ========================================================= */

  .about-services-section {
    background: #fff;
  }

  .about-services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 23px;
  }

  .about-service-card {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    background: rgba(255,255,255,.98);
    border: 1px solid var(--about-border);
    border-radius: 24px;
    box-shadow: 0 14px 40px rgba(9,35,77,.055);
    transition:
      transform .5s cubic-bezier(.22,1,.36,1),
      box-shadow .5s cubic-bezier(.22,1,.36,1),
      border-color .4s ease;
  }

  .about-service-card::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    opacity: 0;
    background:
      linear-gradient(
        115deg,
        transparent 18%,
        rgba(7,88,232,.07) 40%,
        rgba(79,70,229,.085) 51%,
        rgba(7,88,232,.055) 62%,
        transparent 82%
      );
    transform: translateX(-75%);
    transition: opacity .35s ease, transform .9s cubic-bezier(.22,1,.36,1);
  }

  .about-service-card:hover {
    transform: translateY(-10px) scale(1.012);
    border-color: rgba(7,88,232,.28);
    box-shadow:
      0 30px 70px rgba(9,35,77,.14),
      0 10px 26px rgba(7,88,232,.07);
  }

  .about-service-card:hover::before {
    opacity: 1;
    transform: translateX(75%);
  }

  .about-service-image {
    height: 220px;
    position: relative;
    overflow: hidden;
    background: #edf3fb;
  }

  .about-service-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transform: scale(1.01);
    transition:
      transform .8s cubic-bezier(.22,1,.36,1),
      filter .5s ease;
  }

  .about-service-card:hover .about-service-image img {
    transform: scale(1.075) translateY(-3px);
    filter: saturate(1.07) contrast(1.02);
  }

  .about-service-icon {
    width: 54px;
    height: 54px;
    position: absolute;
    left: 50%;
    bottom: 19px;
    transform: translateX(-50%);
    z-index: 2;
    display: grid;
    place-items: center;
    color: #fff;
    background: linear-gradient(135deg, #0758e8, #4f46e5);
    border: 1px solid rgba(255,255,255,.65);
    border-radius: 15px;
    font-size: 21px;
    box-shadow: 0 10px 24px rgba(7,88,232,.22);
    transition: transform .45s cubic-bezier(.22,1,.36,1);
  }

  .about-service-card:hover .about-service-icon {
    transform: translateX(-50%) translateY(-7px);
  }

  .about-service-content {
    position: relative;
    z-index: 1;
    padding: 28px;
    text-align: center;
  }

  .about-service-content h3 {
    margin: 0 0 11px;
    color: var(--about-heading);
    font-size: 20px;
  }

  .about-service-content > p {
    min-height: 95px;
    margin: 0 0 20px;
    color: var(--about-text);
    font-size: 13px;
    line-height: 1.75;
  }

  .about-service-points {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px 12px;
  }

  .about-service-points span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: #52667f;
    font-size: 10.5px;
    white-space: nowrap;
  }

  .about-service-points svg {
    color: var(--about-green);
  }

  /* =========================================================
     VALUES
  ========================================================= */

  .values-section {
    background: #f7faff;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }

  .value-card {
    position: relative;
    overflow: hidden;
    padding: 28px 24px;
    text-align: center;
    background: #fff;
    border: 1px solid var(--about-border);
    border-radius: 19px;
    box-shadow: 0 12px 32px rgba(8,31,72,.045);
    transition: box-shadow .3s ease, border-color .3s ease;
  }

  .value-card {
    transition:
      transform .42s cubic-bezier(.22,1,.36,1),
      box-shadow .42s ease,
      border-color .35s ease;
  }

  .value-card:hover {
    transform: translateY(-7px);
    border-color: rgba(7,88,232,.24);
    box-shadow: 0 22px 55px rgba(8,31,72,.09);
  }

  .value-card > div {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    margin: 0 auto 18px;
    color: var(--about-primary);
    background: #eef5ff;
    border: 1px solid #d7e6fb;
    border-radius: 13px;
    font-size: 19px;
  }

  .value-card h3 {
    margin: 0 0 9px;
    color: var(--about-heading);
    font-size: 17px;
  }

  .value-card p {
    margin: 0;
    color: var(--about-text);
    font-size: 12px;
    line-height: 1.75;
  }

  /* =========================================================
     JOURNEY / PROCESS - PREMIUM ALTERNATING PATH
  ========================================================= */

  .journey-section {
    background: #fff;
  }

  .journey-wrapper {
    position: relative;
    max-width: 930px;
    display: grid;
    gap: 34px;
    margin: 0 auto;
    padding: 10px 0;
  }

  .journey-line {
    position: absolute;
    top: 25px;
    bottom: 25px;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    background:
      repeating-linear-gradient(
        to bottom,
        #a9c8f7 0 11px,
        transparent 11px 20px
      );
  }

  .journey-step {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 74px 1fr;
    align-items: center;
    gap: 25px;
  }

  .journey-left .journey-content {
    grid-column: 1;
    text-align: right;
  }

  .journey-left .journey-icon {
    grid-column: 2;
  }

  .journey-right .journey-icon {
    grid-column: 2;
  }

  .journey-right .journey-content {
    grid-column: 3;
    text-align: left;
  }

  .journey-icon {
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    justify-self: center;
    color: var(--about-primary);
    background: #fff;
    border: 2px solid #91b8f4;
    border-radius: 18px;
    box-shadow:
      0 10px 27px rgba(7,88,232,.10),
      inset 0 0 0 6px #f2f7ff;
    font-size: 21px;
  }

  .journey-content {
    min-height: 128px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 26px;
    background: #fbfdff;
    border: 1px solid var(--about-border);
    border-radius: 18px;
    box-shadow: 0 12px 32px rgba(8,31,72,.04);
  }

  .journey-content h3 {
    margin: 0 0 8px;
    color: var(--about-heading);
    font-size: 18px;
  }

  .journey-content p {
    margin: 0;
    color: var(--about-text);
    font-size: 12px;
    line-height: 1.72;
  }

  /* =========================================================
     ADVANTAGES
  ========================================================= */

  .advantages-section {
    background: #f7faff;
  }

  .advantages-layout {
    display: grid;
    grid-template-columns: .88fr 1.12fr;
    gap: 64px;
    align-items: center;
  }

  .advantages-heading p {
    color: var(--about-text);
    font-size: 14px;
    line-height: 1.82;
  }

  .advantages-heading .about-primary-button {
    margin-top: 13px;
  }

  .advantages-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  .advantage-card {
    padding: 26px;
    text-align: center;
    background: #fff;
    border: 1px solid var(--about-border);
    border-radius: 18px;
    box-shadow: 0 11px 30px rgba(8,31,72,.04);
    transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
  }

  .advantage-card:hover {
    transform: translateY(-6px);
    border-color: rgba(7,88,232,.24);
    box-shadow: 0 20px 48px rgba(8,31,72,.085);
  }

  .advantage-card > div {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    margin: 0 auto;
    color: var(--about-primary);
    background: #eef5ff;
    border: 1px solid #d7e6fb;
    border-radius: 13px;
    font-size: 19px;
  }

  .advantage-card h3 {
    margin: 16px 0 8px;
    color: var(--about-heading);
    font-size: 16px;
  }

  .advantage-card p {
    margin: 0;
    color: var(--about-text);
    font-size: 12px;
    line-height: 1.7;
  }

  /* =========================================================
     BUSINESS CONTENT
  ========================================================= */

  .about-content-section {
    background: #fff;
  }

  .about-content-layout {
    display: grid;
    grid-template-columns: 1.02fr .98fr;
    gap: 65px;
    align-items: center;
  }

  .about-content-layout > div:first-child p {
    color: var(--about-text);
    font-size: 14px;
    line-height: 1.85;
  }

  .content-feature-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .content-feature-grid > div {
    padding: 25px;
    background: linear-gradient(145deg, #fff, #f8fbff);
    border: 1px solid var(--about-border);
    border-radius: 18px;
    transition: transform .3s ease, box-shadow .3s ease;
  }

  .content-feature-grid > div:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 40px rgba(8,31,72,.07);
  }

  .content-feature-grid svg {
    color: var(--about-primary);
    font-size: 22px;
  }

  .content-feature-grid h3 {
    margin: 15px 0 7px;
    color: var(--about-heading);
    font-size: 15px;
  }

  .content-feature-grid p {
    margin: 0;
    color: var(--about-text);
    font-size: 11px;
    line-height: 1.7;
  }

  /* =========================================================
     FINAL CTA - HOME-LIKE PREMIUM WHITE SECTION
  ========================================================= */

  .about-final-cta {
    position: relative;
    overflow: hidden;
    padding: 96px 0;
    color: var(--about-heading);
    background:
      linear-gradient(180deg, #f7faff 0%, #ffffff 100%);
    border-top: 1px solid #e5edf7;
  }

  .about-final-cta::before,
  .about-final-cta::after {
    content: "";
    position: absolute;
    width: 135px;
    height: 135px;
    border: 1px solid rgba(7,88,232,.12);
    border-radius: 27px;
    background: rgba(255,255,255,.55);
  }

  .about-final-cta::before {
    left: -64px;
    top: -43px;
    transform: rotate(27deg);
  }

  .about-final-cta::after {
    right: -58px;
    bottom: -50px;
    transform: rotate(-22deg);
  }

  .about-final-content {
    max-width: 850px;
    position: relative;
    z-index: 2;
    margin: auto;
    text-align: center;
  }

  .about-final-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    margin: 0 auto 19px;
    color: var(--about-primary);
    background: #eef5ff;
    border: 1px solid #d3e3fa;
    border-radius: 16px;
    font-size: 24px;
    box-shadow: 0 12px 28px rgba(7,88,232,.09);
  }

  .about-final-content > span {
    color: var(--about-primary);
    font-size: 10px;
    font-weight: 850;
    letter-spacing: .16em;
  }

  .about-final-content h2 {
    margin: 14px 0 18px;
    color: var(--about-heading);
    font-size: clamp(2.45rem, 5vw, 4.15rem);
    line-height: 1.04;
    letter-spacing: -.05em;
  }

  .about-final-content > p {
    max-width: 700px;
    margin: 0 auto 29px;
    color: var(--about-text);
    font-size: 15px;
    line-height: 1.8;
  }

  .about-final-actions {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 11px;
  }

  .about-white-button {
    color: #fff;
    border: 1px solid var(--about-primary);
    background: linear-gradient(135deg, #0d62ed, #4f46e5);
    box-shadow: 0 13px 27px rgba(22,92,218,.20);
  }

  .about-whatsapp-button {
    color: #0d8c62;
    background: #fff;
    border: 1px solid #b9e8d7;
  }

  .about-whatsapp-button svg {
    font-size: 19px;
  }

  .about-final-trust {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 22px;
    margin-top: 29px;
  }

  .about-final-trust span {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #60748d;
    font-size: 10px;
    font-weight: 650;
  }

  .about-final-trust svg {
    color: var(--about-primary);
  }


  .about-hero-actions button,
  .about-final-actions button,
  .advantages-heading .about-primary-button {
    min-width: 225px;
  }

  .about-final-actions .about-white-button,
  .about-final-actions .about-whatsapp-button {
    min-width: 240px;
  }

  /* =========================================================
     RESPONSIVE
  ========================================================= */

  @media (max-width: 1024px) {
    .about-hero-layout,
    .about-story-layout,
    .advantages-layout,
    .about-content-layout {
      grid-template-columns: 1fr;
      gap: 52px;
    }

    .about-hero-content {
      max-width: 780px;
      margin: 0 auto;
      text-align: center;
    }

    .about-hero-badge {
      margin-left: auto;
      margin-right: auto;
    }

    .about-hero-content::after {
      margin-left: auto;
      margin-right: auto;
    }

    .about-hero-description {
      margin-left: auto;
      margin-right: auto;
    }

    .about-hero-actions {
      justify-content: center;
    }

    .about-hero-points {
      max-width: 680px;
      margin-left: auto;
      margin-right: auto;
    }

    .about-hero-visual {
      max-width: 670px;
      width: 100%;
      margin: auto;
    }

    .about-services-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .about-service-card:last-child {
      grid-column: 1 / -1;
      width: calc(50% - 12px);
      justify-self: center;
    }

    .values-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .journey-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }

    .journey-line {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .about-container {
      width: min(100% - 28px, 1180px);
    }

    .about-section {
      padding: 72px 0;
    }

    .about-hero {
      min-height: auto;
      padding: 128px 0 72px;
    }

    .about-hero::before,
    .about-hero::after {
      opacity: .55;
    }

    .about-hero-content h1 {
      font-size: clamp(2.65rem, 12vw, 4.15rem);
    }

    .about-hero-description {
      font-size: 14px;
    }

    .about-hero-points {
      grid-template-columns: 1fr;
      max-width: 520px;
    }

    .about-hero-points span {
      justify-content: center;
    }

    .about-hero-actions {
      display: grid;
      width: min(100%, 480px);
      margin-left: auto;
      margin-right: auto;
    }

    .about-hero-actions button {
      width: 100%;
    }

    .about-floating-card {
      display: none;
    }

    .about-stats-grid {
      max-width: 620px;
      grid-template-columns: repeat(2, 1fr);
    }

    .mission-grid,
    .about-services-grid,
    .values-grid,
    .advantages-grid {
      grid-template-columns: 1fr;
    }

    .journey-wrapper {
      max-width: 560px;
      gap: 34px;
      padding: 8px 0;
    }

    .journey-line {
      left: 50%;
      top: 20px;
      bottom: 20px;
      transform: translateX(-50%);
    }

    .journey-step,
    .journey-left,
    .journey-right {
      display: grid;
      grid-template-columns: 1fr 64px 1fr;
      align-items: center;
      gap: 10px;
    }

    .journey-left .journey-icon,
    .journey-right .journey-icon {
      grid-column: 2;
      grid-row: 1;
    }

    .journey-left .journey-content {
      grid-column: 1;
      grid-row: 1;
      text-align: right;
    }

    .journey-right .journey-content {
      grid-column: 3;
      grid-row: 1;
      text-align: left;
    }

    .journey-icon {
      width: 56px;
      height: 56px;
      border-radius: 15px;
      font-size: 18px;
    }

    .journey-content {
      min-height: 108px;
      padding: 18px 16px;
      border-radius: 16px;
    }

    .journey-content h3 {
      font-size: 16px;
    }

    .journey-content p {
      font-size: 10.5px;
      line-height: 1.65;
    }

    .about-service-card:last-child {
      grid-column: auto;
      width: 100%;
      justify-self: stretch;
    }

    .about-service-points {
      flex-wrap: nowrap;
      justify-content: flex-start;
      gap: 10px;
      overflow-x: auto;
      padding: 3px 2px 7px;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .about-service-points::-webkit-scrollbar {
      display: none;
    }

    .about-service-points span {
      flex: 0 0 auto;
      padding: 7px 9px;
      background: #f8fbff;
      border: 1px solid #dfe8f4;
      border-radius: 9px;
      font-size: 10px;
    }

    .story-check-list,
    .content-feature-grid {
      grid-template-columns: 1fr;
    }

    .mission-card {
      min-height: auto;
    }

    .about-story-layout,
    .advantages-heading,
    .about-content-layout > div:first-child {
      text-align: center;
    }

    .about-story-layout .about-eyebrow,
    .advantages-heading .about-eyebrow,
    .about-content-layout > div:first-child .about-eyebrow {
      justify-content: center;
    }

    .about-final-actions {
      display: grid;
      max-width: 480px;
      margin-left: auto;
      margin-right: auto;
    }

    .about-final-actions button {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .about-hero {
      padding-top: 124px;
    }

    .about-primary-button,
    .about-secondary-button,
    .about-white-button,
    .about-whatsapp-button {
      width: 100%;
      min-width: 0;
    }

    .about-hero-badge {
      max-width: 100%;
      text-align: center;
      justify-content: center;
      line-height: 1.45;
    }

    .about-hero-content h1 {
      font-size: 2.2rem;
      line-height: 1.06;
    }

    .about-visual-main-card {
      min-height: 400px;
      padding: 26px 22px;
      border-radius: 20px;
    }

    .about-visual-main-card h2 {
      margin-top: 56px;
      font-size: 2.85rem;
    }

    .about-visual-metrics {
      grid-template-columns: 1fr;
      margin-top: 28px;
    }

    .about-stats-grid {
      width: 100%;
    }

    .about-stats-grid div {
      padding: 18px 7px;
    }

    .about-stats-grid strong {
      font-size: 23px;
    }

    .about-story-card,
    .mission-card,
    .value-card,
    .advantage-card,
    .content-feature-grid > div {
      padding: 24px;
    }

    .about-service-image {
      height: 190px;
    }

    .about-service-content {
      padding: 24px 21px;
    }

    .about-service-content > p {
      min-height: auto;
    }

    .journey-wrapper {
      gap: 28px;
      padding: 6px 0;
    }

    .journey-line {
      left: 50%;
      transform: translateX(-50%);
    }

    .journey-step,
    .journey-left,
    .journey-right {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .journey-left .journey-content,
    .journey-right .journey-content {
      width: calc(100% - 18px);
      max-width: 355px;
      text-align: center;
    }

    .journey-icon {
      width: 54px;
      height: 54px;
      border-radius: 15px;
      font-size: 18px;
      background: #fff;
      z-index: 3;
    }

    .journey-content {
      min-height: auto;
      padding: 20px 18px;
      border-radius: 16px;
      background: rgba(255,255,255,.97);
    }

    .journey-content h3 {
      font-size: 17px;
    }

    .journey-content p {
      max-width: 290px;
      margin: 0 auto;
      font-size: 11px;
      line-height: 1.7;
    }

    .about-final-content h2 {
      font-size: 2.5rem;
    }

    .about-final-trust {
      gap: 13px;
    }
  }

  @media (hover: none) {
    .about-service-card:hover,
    .mission-card:hover,
    .value-card:hover,
    .advantage-card:hover,
    .content-feature-grid > div:hover {
      transform: none;
    }

    .about-service-card:hover .about-service-image img {
      transform: none;
    }

    .about-service-card:hover .about-service-icon {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;


export default About;
