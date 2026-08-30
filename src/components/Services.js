import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  FaSearch,
  FaClipboardList,
  FaCode,
  FaRocket,
  FaHeadset
} from 'react-icons/fa';

// Enhanced SVG Icons with light theme colors
const LightIcons = {
  Globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),
  Monitor: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  RefreshCw: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
    </svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ),
   Cogs: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
      <path d="M12 2v2"/>
      <path d="M12 22v-2"/>
      <path d="m17 20.66-1-1.73"/>
      <path d="m11 10.27-7-3.46"/>
      <path d="m20.66 17-1.73-1"/>
      <path d="m3.34 7 1.73 1"/>
      <path d="M14 12h8"/>
      <path d="M2 12h2"/>
      <path d="m20.66 7-1.73 1"/>
      <path d="m3.34 17 1.73-1"/>
      <path d="m17 3.34-1 1.73"/>
      <path d="m11 13.73-7 3.46"/>
    </svg>
  ),
};

// SEO + LOCAL ENTITY + AEO/GEO STRUCTURED DATA
const SEOStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": "https://smyvisiontechnologies.com/#organization",
        "name": "SMYVISION TECHNOLOGIES",
        "alternateName": "SMYVISION",
        "url": "https://smyvisiontechnologies.com/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://smyvisiontechnologies.com/#logo",
          "url": "https://smyvisiontechnologies.com/Logo.png",
          "contentUrl": "https://smyvisiontechnologies.com/Logo.png",
          "caption": "SMYVISION TECHNOLOGIES"
        },
        "image": { "@id": "https://smyvisiontechnologies.com/#logo" },
        "description": "SMYVISION TECHNOLOGIES is a web development company in Vijayawada providing professional website development, custom web development, custom web applications, e-commerce website development, responsive web design, business automation and digital solutions.",
        "foundingDate": "2026",
        "telephone": "+918500352005",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vijayawada",
          "addressRegion": "Andhra Pradesh",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "City", "name": "Vijayawada" },
          { "@type": "State", "name": "Andhra Pradesh" },
          { "@type": "Country", "name": "India" }
        ],
        "knowsAbout": [
          "Web Development Company in Vijayawada",
          "Website Development Company in Vijayawada",
          "Website Development in Vijayawada",
          "Web Design Company in Vijayawada",
          "Website Developers in Vijayawada",
          "Website Designers in Vijayawada",
          "Custom Web Development in Vijayawada",
          "Custom Web Application Development in Vijayawada",
          "E-commerce Website Development in Vijayawada",
          "Responsive Web Design in Vijayawada",
          "Business Website Development in Vijayawada",
          "Business Automation",
          "Management Portals",
          "Business Dashboards",
          "SEO-ready Web Development"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+918500352005",
          "contactType": "sales and customer enquiries",
          "areaServed": "IN",
          "availableLanguage": ["English", "Telugu", "Hindi"]
        },
        "sameAs": [
          "https://www.facebook.com/share/1AAbW51BTs/",
          "https://www.linkedin.com/company/smyvisiontechnologies",
          "https://instagram.com/smyvisiontechnologies",
          "https://youtube.com/@smyvisiontechnologies"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://smyvisiontechnologies.com/services#custom-web-development",
        "name": "Custom Web Development in Vijayawada",
        "serviceType": "Custom Web Development",
        "description": "Purpose-built custom web development services in Vijayawada including custom portals, management systems, dashboards, workflow tools and custom web applications.",
        "provider": { "@id": "https://smyvisiontechnologies.com/#organization" },
        "areaServed": {
          "@type": "City",
          "name": "Vijayawada",
          "containedInPlace": {
            "@type": "State",
            "name": "Andhra Pradesh"
          }
        }
      },
      {
        "@type": "Service",
        "@id": "https://smyvisiontechnologies.com/services#website-development",
        "name": "Website Development in Vijayawada",
        "serviceType": "Website Development",
        "description": "Professional responsive business website development in Vijayawada designed to strengthen digital presence, trust and customer enquiries.",
        "provider": { "@id": "https://smyvisiontechnologies.com/#organization" },
        "areaServed": { "@type": "City", "name": "Vijayawada" }
      },
      {
        "@type": "Service",
        "@id": "https://smyvisiontechnologies.com/services#ecommerce-development",
        "name": "E-commerce Website Development in Vijayawada",
        "serviceType": "E-commerce Development",
        "description": "Custom e-commerce website development in Vijayawada with product catalogues, storefronts, order workflows and payment integration.",
        "provider": { "@id": "https://smyvisiontechnologies.com/#organization" },
        "areaServed": { "@type": "City", "name": "Vijayawada" }
      },
      {
        "@type": "Service",
        "@id": "https://smyvisiontechnologies.com/services#business-automation",
        "name": "Business Automation in Vijayawada",
        "serviceType": "Business Automation",
        "description": "Custom workflow automation, dashboards and digital systems in Vijayawada designed to simplify repetitive business processes.",
        "provider": { "@id": "https://smyvisiontechnologies.com/#organization" },
        "areaServed": { "@type": "City", "name": "Vijayawada" }
      },
      {
        "@type": "WebPage",
        "@id": "https://smyvisiontechnologies.com/services#webpage",
        "url": "https://smyvisiontechnologies.com/services",
        "name": "Web Development Services in Vijayawada | SMYVISION TECHNOLOGIES",
        "headline": "Website & Custom Web Development Services in Vijayawada",
        "description": "Explore website development, custom web development, e-commerce website development and business automation services in Vijayawada from SMYVISION TECHNOLOGIES.",
        "keywords": [
          "Web Development Company in Vijayawada",
          "Website Development Company in Vijayawada",
          "Website Development in Vijayawada",
          "Web Design Company in Vijayawada",
          "Website Developers in Vijayawada",
          "Custom Web Development in Vijayawada",
          "Custom Web Application Development in Vijayawada",
          "E-commerce Website Development in Vijayawada",
          "Responsive Web Design in Vijayawada",
          "Business Website Development in Vijayawada",
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
        "about": { "@id": "https://smyvisiontechnologies.com/#organization" },
        "mentions": [
          { "@id": "https://smyvisiontechnologies.com/services#custom-web-development" },
          { "@id": "https://smyvisiontechnologies.com/services#website-development" },
          { "@id": "https://smyvisiontechnologies.com/services#ecommerce-development" },
          { "@id": "https://smyvisiontechnologies.com/services#business-automation" }
        ],
        "inLanguage": "en-IN"
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

// Floating Bubbles Background Component
const FloatingBubbles = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 60 + 20,
            height: Math.random() * 60 + 20,
            background: i % 3 === 0 ? 'rgba(79, 70, 229, 0.05)' : 
                       i % 3 === 1 ? 'rgba(245, 158, 11, 0.05)' : 'rgba(139, 92, 246, 0.05)',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
          animate={{
            x: [Math.random() * 100, Math.random() * 100 + 100],
            y: [Math.random() * 100, Math.random() * 100 + 100],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

// Animated Background Pattern
const AnimatedPattern = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `radial-gradient(circle at 20% 80%, rgba(79, 70, 229, 0.03) 0%, transparent 50%),
                   radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.03) 0%, transparent 50%)`,
      zIndex: 0
    }} />
  );
};

function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleCallNow = () => {
    window.location.href = 'tel:8500352005';
  };

  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  const openFullscreenImage = (src, alt) => {
    setFullscreenImage({ src, alt });
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  const services = [
    {
      id: 1,
      title: 'Premium Website Development',
      image: '/images/web.png',
      description: 'High-end business websites designed to build trust, communicate clearly and convert visitors into genuine enquiries.',
      features: ['Business Websites', 'Corporate Websites', 'Responsive Design', 'SEO-Ready Structure'],
      color: '#0758e8',
      bgColor: 'rgba(79, 70, 229, 0.05)'
    },
    {
      id: 2,
      title: 'Custom Web Development',
      image: '/images/cust.png',
      description: 'Purpose-built web platforms created around your exact workflows, customers and long-term business requirements.',
      features: ['Custom Portals', 'Management Systems', 'Client Dashboards', 'Web Applications'],
      color: '#0758e8',
      bgColor: 'rgba(7, 88, 232, 0.05)'
    },
    {
      id: 3,
      title: 'Custom E-commerce Solutions',
      image: '/images/ecomm.png',
      description: 'Premium online stores with product management, smooth shopping journeys and scalable functionality built for your brand.',
      features: ['Product Catalogues', 'Custom Storefronts', 'Order Workflows', 'Payment Integration'],
      color: '#6d28d9',
      bgColor: 'rgba(109, 40, 217, 0.05)'
    },
    {
      id: 4,
      title: 'Business Automation',
      image: '/images/auto.png',
      description: 'Custom automation systems that reduce repetitive work, simplify operations and connect important business processes.',
      features: ['Workflow Automation', 'Custom Dashboards', 'Business Systems', 'Process Automation'],
      color: '#008080',
      bgColor: 'rgba(0, 128, 128, 0.05)'
    },
    {
      id: 5,
      title: 'Chatbot Solutions (Coming Soon)',
      image: '/images/chat.png',
      description: 'Smart experiences for customer enquiries, lead handling and business communication without unnecessary complexity.',
      features: ['Chatbots', 'Lead Automation', 'Customer Support', 'Smart Business Tools'],
      color: '#2b05ff',
      bgColor: 'rgba(43, 5, 255, 0.05)'
    },
  ];

  const whyChooseUs = [
    { icon: <LightIcons.Monitor />, title: 'Technology Expertise', desc: 'Latest tools and technologies for optimal performance', color: '#10b981' },
    { icon: <LightIcons.Users />, title: 'Client-Centric Approach', desc: 'Solutions tailored to your specific business needs', color: '#8b5cf6' },
    { icon: <LightIcons.Zap />, title: 'Practical Solutions', desc: 'Technology chosen around real business requirements', color: '#f59e0b' },
    { icon: <LightIcons.Clock />, title: 'Timely Delivery', desc: 'Consistent on-time delivery with quality assurance', color: '#ef4444' },
    { icon: <LightIcons.RefreshCw />, title: 'Ongoing Support', desc: 'Post-launch guidance and support based on project scope', color: '#3b82f6' }
  ];

  const processSteps = [
    { icon: <FaSearch />, title: 'Discovery', desc: 'Understanding your business needs, goals, and challenges through in-depth consultation.' },
    { icon: <FaClipboardList />, title: 'Planning', desc: 'Designing tailored solutions and creating detailed implementation strategy.' },
    { icon: <FaCode />, title: 'Development', desc: 'Building robust solutions using cutting-edge technologies and best practices.' },
    { icon: <FaRocket />, title: 'Deployment', desc: 'Launching solutions with seamless integration and comprehensive testing.' },
    { icon: <FaHeadset />, title: 'Support', desc: 'Providing ongoing maintenance, updates, and optimization services.' }
  ];

  const faqs = [
    {
      question: "Do you provide custom web development?",
      answer: "Yes. SMYVISION TECHNOLOGIES provides custom web development for businesses that need purpose-built portals, management systems, dashboards, workflow tools and custom web applications."
    },
    {
      question: "What industries do you serve?",
      answer: "We work with businesses across different industries and develop websites, custom web applications, e-commerce solutions and automation systems according to their requirements."
    },
    {
      question: "How long does project implementation take?",
      answer: "Project timelines depend on scope, functionality and complexity. A standard business website usually takes less time than a custom web application, e-commerce platform or advanced business system."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes. We provide post-launch technical guidance and support according to the project requirements and agreed service scope."
    },
    {
      question: "What is your pricing model?",
      answer: "Pricing depends on the project scope, number of pages, required functionality, integrations and development complexity. Contact us with your requirements for a suitable quotation."
    }
  ];

  return (
    <>

        {/* Home.js typography + text color matching only */}
        <style>{`
          .services-page {
            font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
            color: #607086 !important;
          }

          .services-page h1,
          .services-page h2,
          .services-page h3,
          .services-page h4,
          .services-page h5,
          .services-page h6 {
            font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
            color: #07162d;
            letter-spacing: -0.035em;
          }

          .services-page p,
          .services-page li {
            color: #607086;
          }

          .services-page button,
          .services-page a,
          .services-page input,
          .services-page textarea,
          .services-page select {
            font-family: inherit;
          }
        `}</style>
      {/* SEO + AEO/GEO HEAD */}
      <Helmet>
        <html lang="en-IN" />

        <title>Web Development Services in Vijayawada | SMYVISION TECHNOLOGIES</title>

        <meta
          name="description"
          content="Explore website development, custom web development, e-commerce website development and business automation services in Vijayawada from SMYVISION TECHNOLOGIES."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="author" content="SMYVISION TECHNOLOGIES" />
        <meta name="publisher" content="SMYVISION TECHNOLOGIES" />
        <meta name="application-name" content="SMYVISION TECHNOLOGIES" />
        <meta
          name="keywords"
          content="web development company in Vijayawada, website development company in Vijayawada, website development Vijayawada, web design company in Vijayawada, website developers in Vijayawada, website designers in Vijayawada, custom web development Vijayawada, custom web application development Vijayawada, e-commerce website development Vijayawada, responsive web design Vijayawada, business website development Vijayawada"
        />

        <link rel="canonical" href="https://smyvisiontechnologies.com/services" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SMYVISION TECHNOLOGIES" />
        <meta
          property="og:title"
          content="Web Development Services in Vijayawada | SMYVISION TECHNOLOGIES"
        />
        <meta
          property="og:description"
          content="Website development, custom web applications, e-commerce website development and business automation services in Vijayawada by SMYVISION TECHNOLOGIES."
        />
        <meta property="og:url" content="https://smyvisiontechnologies.com/services" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://smyvisiontechnologies.com/Logo.png" />
        <meta
          property="og:image:alt"
          content="SMYVISION TECHNOLOGIES web development services in Vijayawada"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development Services in Vijayawada | SMYVISION TECHNOLOGIES"
        />
        <meta
          name="twitter:description"
          content="Website development, custom web applications, e-commerce and business automation solutions in Vijayawada from SMYVISION TECHNOLOGIES."
        />
        <meta name="twitter:image" content="https://smyvisiontechnologies.com/Logo.png" />
        <meta
          name="twitter:image:alt"
          content="SMYVISION TECHNOLOGIES web development services in Vijayawada"
        />
      </Helmet>

      {/* Hidden SEO Structured Data */}
      <SEOStructuredData />
      
      <div style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        maxWidth: '100%',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        overflowX: 'hidden',
        boxSizing: 'border-box'
      }}>
        <AnimatedPattern />
        <FloatingBubbles />

        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(16px, 5vw, 50px)',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {/* Hero Section with improved semantic HTML */}
          <header role="banner">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                textAlign: 'center',
                padding: 'clamp(100px, 12vw, 140px) 0 60px',
                position: 'relative',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 'min(600px, 100vw)',
                  height: 'min(600px, 100vw)',
                  background: 'radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}
              />
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  color: '#1e293b',
                  marginBottom: '20px',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  position: 'relative',
                  padding: '0 10px'
                }}
              >
                Custom Web Development
                <span style={{
                  background: 'linear-gradient(135deg, #4f46e5, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'block',
                  marginTop: '10px'
                }}>
                  That Supports Business Growth
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                  color: '#607086',
                  maxWidth: '800px',
                  margin: '0 auto 40px',
                  lineHeight: '1.6',
                  padding: '0 16px'
                }}
              >
                Explore professional website development, custom web development, e-commerce and business automation services designed around real business goals and customer needs.
              </motion.p>

              {/* Animated Stats */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'clamp(16px, 4vw, 30px)',
                flexWrap: 'wrap',
                position: 'relative',
                padding: '0 16px'
              }}>
                {[
                  { value: '3+', label: 'Services we offer', color: '#0758e8' },
                  { value: '100%', label: 'Responsive Development', color: '#10b981' },
                  { value: '5', label: 'Core Digital Solutions', color: '#3b82f6' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    style={{
                      background: 'white',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid #e2e8f0',
                      padding: 'clamp(20px, 4vw, 24px)',
                      borderRadius: '16px',
                      minWidth: '140px',
                      maxWidth: '200px',
                      flex: '1 1 0',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                      style={{
                        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                        fontWeight: '800',
                        color: stat.color,
                        marginBottom: '8px'
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div style={{
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: '#607086',
                      fontWeight: '500'
                    }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </header>

          {/* Main Content with semantic sections */}
          <main role="main">
            {/* Expert Services */}
            <section aria-labelledby="expert-services-title">
              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                style={{ marginBottom: 'clamp(60px, 10vw, 100px)', width: '100%' }}
              >
                <motion.div
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ textAlign: 'center', marginBottom: '40px' }}
                >
                  <h2 id="expert-services-title" style={{
                    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                    color: '#1e293b',
                    marginBottom: '12px',
                    fontWeight: '700'
                  }}>
                    Our Expert Services
                  </h2>
                  <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #4f46e5, #8b5cf6)',
                    margin: '0 auto 20px',
                    borderRadius: '2px'
                  }} />
                  <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    color: '#607086',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6',
                    padding: '0 16px'
                  }}>
                    Custom digital solutions tailored to your business needs
                  </p>
                </motion.div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
                  gap: 'clamp(24px, 5vw, 40px)',
                  marginBottom: '40px',
                  width: '100%'
                }}>
                  {services.map((service, index) => (
                    <motion.article
                      key={service.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      whileHover={{ y: -10 }}
                      onMouseEnter={() => setHoveredCard(service.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        background: 'white',
                        border: `1px solid ${hoveredCard === service.id ? service.color : '#e2e8f0'}`,
                        borderRadius: '20px',
                        padding: 'clamp(24px, 4vw, 32px)',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: hoveredCard === service.id 
                          ? `0 20px 40px ${service.color}20` 
                          : '0 8px 24px rgba(0, 0, 0, 0.05)',
                        width: '100%',
                        boxSizing: 'border-box'
                      }}
                    >
                      {/* Service Image */}
                      <motion.div
                        animate={{
                          scale: hoveredCard === service.id ? 1.02 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          width: '100%',
                          height: 'clamp(180px, 22vw, 230px)',
                          background: service.bgColor,
                          borderRadius: '18px',
                          overflow: 'hidden',
                          marginBottom: '22px',
                          transition: 'all 0.3s ease',
                          boxShadow: hoveredCard === service.id
                            ? `0 18px 36px ${service.color}25`
                            : '0 10px 24px rgba(0, 0, 0, 0.06)'
                        }}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          onClick={(event) =>
                            openFullscreenImage(
                              event.currentTarget.currentSrc || event.currentTarget.src,
                              service.title
                            )
                          }
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'transform 0.35s ease',
                            cursor: 'zoom-in'
                          }}
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80';
                          }}
                        />
                      </motion.div>

                      {/* Service Title */}
                      <h3 style={{
                        fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
                        color: '#1e293b',
                        marginBottom: '12px',
                        fontWeight: '600',
                        lineHeight: '1.3'
                      }}>
                        {service.title}
                      </h3>
                      
                      {/* Service Description */}
                      <p style={{
                        color: '#607086',
                        marginBottom: '20px',
                        fontSize: 'clamp(0.95rem, 2vw, 1rem)',
                        lineHeight: '1.6'
                      }}>
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '24px'
                      }}>
                        {service.features.map((feature, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            style={{
                              background: service.bgColor,
                              color: service.color,
                              padding: '6px 12px',
                              borderRadius: '16px',
                              fontSize: '0.8rem',
                              fontWeight: '500',
                              border: `1px solid ${service.color}20`,
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* Get Started Button */}
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: `0 10px 20px ${service.color}40` }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}80)`,
                          color: 'white',
                          border: 'none',
                          padding: '12px 24px',
                          borderRadius: '12px',
                          fontSize: '0.95rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          boxShadow: `0 5px 15px ${service.color}30`,
                          width: '100%',
                          maxWidth: '180px'
                        }}
                        onClick={handleGetStarted}
                      >
                        Get Started
                        <motion.span
                          animate={{ x: hoveredCard === service.id ? 5 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </motion.article>
                  ))}
                </div>
              </motion.section>
            </section>

            {/* Why Choose Us */}
            <section aria-labelledby="why-choose-us-title">
              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ marginBottom: 'clamp(60px, 10vw, 100px)', width: '100%' }}
              >
                <motion.div
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ textAlign: 'center', marginBottom: '40px' }}
                >
                  <h2 id="why-choose-us-title" style={{
                    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                    color: '#1e293b',
                    marginBottom: '12px',
                    fontWeight: '700'
                  }}>
                    Why Choose Us
                  </h2>
                  <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #10b981, #3b82f6)',
                    margin: '0 auto 20px',
                    borderRadius: '2px'
                  }} />
                  <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    color: '#607086',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6',
                    padding: '0 16px'
                  }}>
                    What sets us apart in delivering exceptional technology solutions
                  </p>
                </motion.div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
                  gap: 'clamp(16px, 4vw, 24px)',
                  width: '100%'
                }}>
                  {whyChooseUs.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      style={{
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '16px',
                        padding: 'clamp(20px, 4vw, 24px)',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                        width: '100%',
                        boxSizing: 'border-box'
                      }}
                    >
                      <motion.div
                        animate={{ 
                          rotateY: hoveredCard === index ? 360 : 0,
                          scale: hoveredCard === index ? 1.1 : 1
                        }}
                        transition={{ duration: 0.6 }}
                        style={{
                          fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
                          marginBottom: '16px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: item.color
                        }}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {item.icon}
                      </motion.div>
                      <h3 style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                        color: '#1e293b',
                        marginBottom: '8px',
                        fontWeight: '600'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        color: '#607086',
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                        lineHeight: '1.5'
                      }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </section>

            {/* Our Process */}
            <section aria-labelledby="our-process-title">
              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ marginBottom: 'clamp(60px, 10vw, 100px)', width: '100%' }}
              >
                <motion.div
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ textAlign: 'center', marginBottom: '40px' }}
                >
                  <h2 id="our-process-title" style={{
                    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                    color: '#1e293b',
                    marginBottom: '12px',
                    fontWeight: '700'
                  }}>
                    Our Process
                  </h2>
                  <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
                    margin: '0 auto 20px',
                    borderRadius: '2px'
                  }} />
                  <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    color: '#607086',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6',
                    padding: '0 16px'
                  }}>
                    A structured approach to delivering exceptional technology solutions
                  </p>
                </motion.div>

                <div style={{
                  position: 'relative',
                  maxWidth: '800px',
                  margin: '0 auto',
                  width: '100%'
                }}>
                  {/* Connecting Line */}
                  <div style={{
                    position: 'absolute',
                    left: '30px',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    background: 'linear-gradient(to bottom, #4f46e5, #8b5cf6, #3b82f6)',
                    zIndex: 0
                  }} />
                  
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '30px',
                        position: 'relative',
                        zIndex: 1,
                        width: '100%'
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        style={{
                          width: '60px',
                          height: '60px',
                          background: 'linear-gradient(135deg, #4f46e5, #8b5cf6)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.45rem',
                          fontWeight: 'bold',
                          color: 'white',
                          flexShrink: 0,
                          marginRight: '20px',
                          zIndex: 2,
                          boxShadow: '0 8px 16px rgba(79, 70, 229, 0.3)'
                        }}
                      >
                        {step.icon}
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ x: 10 }}
                        style={{
                          background: 'white',
                          border: '1px solid #e2e8f0',
                          borderRadius: '16px',
                          padding: 'clamp(16px, 4vw, 24px)',
                          flex: 1,
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                          width: 'calc(100% - 80px)',
                          boxSizing: 'border-box'
                        }}
                      >
                        <h3 style={{
                          fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                          color: '#1e293b',
                          marginBottom: '8px',
                          fontWeight: '600'
                        }}>
                          {step.title}
                        </h3>
                        <p style={{
                          color: '#607086',
                          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                          lineHeight: '1.6'
                        }}>
                          {step.desc}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </section>

            {/* CTA Section */}
            <section aria-labelledby="cta-title">
              <motion.section
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #06172f 0%, #0c2856 55%, #0758e8 100%)',
                  padding: 'clamp(40px, 8vw, 60px) clamp(16px, 4vw, 32px)',
                  borderRadius: '24px',
                  margin: 'clamp(60px, 10vw, 100px) 0',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(6, 23, 47, 0.28)',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                <motion.h2
                  id="cta-title"
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  style={{
                    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                    color: 'white',
                    marginBottom: '16px',
                    fontWeight: '700'
                  }}
                >
                  Ready to Transform Your Business?
                </motion.h2>
                <motion.p
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    maxWidth: '600px',
                    margin: '0 auto 32px',
                    lineHeight: '1.6',
                    padding: '0 16px'
                  }}
                >
                  Let our experts help you choose the right technology solutions for your specific needs.
                </motion.p>
                
                <motion.div
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'clamp(16px, 4vw, 24px)',
                    flexWrap: 'wrap',
                    width: '100%'
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: 'white',
                      color: '#0758e8',
                      border: 'none',
                      padding: 'clamp(12px, 3vw, 16px) clamp(24px, 5vw, 32px)',
                      borderRadius: '12px',
                      fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                      width: '100%',
                      maxWidth: '250px'
                    }}
                    onClick={handleGetStarted}
                  >
                    Get Free Consultation
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      border: '2px solid white',
                      padding: 'clamp(12px, 3vw, 16px) clamp(24px, 5vw, 32px)',
                      borderRadius: '12px',
                      fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      width: '100%',
                      maxWidth: '250px'
                    }}
                    onClick={handleCallNow}
                  >
                    Call Now: 8500352005
                  </motion.button>
                </motion.div>
              </motion.section>
            </section>

            {/* FAQ Section */}
            <section aria-labelledby="faq-title">
              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ marginBottom: 'clamp(60px, 10vw, 100px)', width: '100%' }}
              >
                <motion.div
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ textAlign: 'center', marginBottom: '40px' }}
                >
                  <h2 id="faq-title" style={{
                    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                    color: '#1e293b',
                    marginBottom: '12px',
                    fontWeight: '700'
                  }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #0f0bf5, #09ff00)',
                    margin: '0 auto 20px',
                    borderRadius: '2px'
                  }} />
                  <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    color: '#607086',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6',
                    padding: '0 16px'
                  }}>
                    Planning a digital project? Find clear answers about our services, process, timelines and how we can help your business move forward.
                  </p>
                </motion.div>

                <div style={{
                  maxWidth: '800px',
                  margin: '0 auto',
                  width: '100%',
                  boxSizing: 'border-box'
                }}>
                  <AnimatePresence>
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                          background: 'white',
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          marginBottom: '12px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                          width: '100%'
                        }}
                      >
                        <motion.div
                          whileHover={{ background: '#f8fafc' }}
                          style={{
                            padding: 'clamp(16px, 4vw, 20px)',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'all 0.3s ease'
                          }}
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        >
                          <h3 style={{
                            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                            color: '#1e293b',
                            fontWeight: '600',
                            marginRight: '16px',
                            flex: 1,
                            textAlign: 'left'
                          }}>
                            {faq.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: openFaq === index ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              fontSize: '1.5rem',
                              color: '#0758e8',
                              fontWeight: '300',
                              flexShrink: 0
                            }}
                          >
                            +
                          </motion.div>
                        </motion.div>
                        
                        <AnimatePresence>
                          {openFaq === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div style={{
                                padding: '0 clamp(16px, 4vw, 20px) clamp(16px, 4vw, 20px)',
                                color: '#607086',
                                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                lineHeight: '1.6',
                                borderTop: '1px solid #e2e8f0',
                                textAlign: 'left'
                              }}>
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.section>
            </section>
          </main>
        </div>
      </div>

      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeFullscreenImage}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              background: 'rgba(3, 12, 27, 0.92)',
              backdropFilter: 'blur(10px)',
              cursor: 'zoom-out'
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Full screen service image"
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                closeFullscreenImage();
              }}
              aria-label="Close full screen image"
              style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                width: '46px',
                height: '46px',
                display: 'grid',
                placeItems: 'center',
                padding: 0,
                border: '2px solid rgba(255,255,255,.92)',
                borderRadius: '50%',
                color: '#fff',
                background: '#e53935',
                fontSize: '29px',
                lineHeight: 1,
                cursor: 'pointer',
                boxShadow: '0 12px 30px rgba(229,57,53,.3)'
              }}
            >
              ×
            </button>

            <motion.img
              src={fullscreenImage.src}
              alt={fullscreenImage.alt}
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              style={{
                maxWidth: 'min(1180px, 94vw)',
                maxHeight: '88vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '18px',
                boxShadow: '0 30px 90px rgba(0,0,0,.4)'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}

export default Services;