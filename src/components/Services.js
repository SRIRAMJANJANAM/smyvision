import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

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

// SEO Structured Data Component (Hidden)
const SEOStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebDevelopmentCompany",
    "name": "SMYVISION TECHNOLOGIES",
    "description": "Top web development company in Vijayawada, Hyderabad, and Bangalore offering professional website development, automation solutions, and chatbot development services.",
    "url": "https://smyvision.vercel.app",
    "founder": "Sri Ram Janjanam",
    "foundingDate": "2026",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vijayawada",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "India"
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Vijayawada, Hyderabad, Bangalore, India"
    },
    "serviceType": [
      "Website Development",
      "Web Application Development",
      "Automation Solutions",
      "Chatbot Development",
      "Digital Transformation"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Vijayawada"
      },
      {
        "@type": "City",
        "name": "Hyderabad"
      },
      {
        "@type": "City",
        "name": "Bangalore"
      },
      {
        "@type": "State",
        "name": "Andhra Pradesh"
      },
      {
        "@type": "State",
        "name": "Telangana"
      },
      {
        "@type": "State",
        "name": "Karnataka"
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "3",
      "offers": [
        {
          "@type": "Offer",
          "name": "Website Development Services",
          "description": "Professional website development for businesses in Vijayawada, Hyderabad, and Bangalore"
        },
        {
          "@type": "Offer",
          "name": "Automation Development",
          "description": "Business automation solutions for companies in South India"
        },
        {
          "@type": "Offer",
          "name": "Chatbot Solutions",
          "description": "AI-powered chatbot development for enterprises"
        }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918500352005",
      "contactType": "customer service",
      "areaServed": ["IN"],
      "availableLanguage": ["English", "Telugu", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/smyvisiontechnologies",
      "https://twitter.com/smyvisiontech",
      "https://www.facebook.com/share/1AAbW51BTs/"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

// Hidden SEO Text Component
const HiddenSEOText = () => {
  return (
    <div style={{
      position: 'absolute',
      left: '-9999px',
      top: '-9999px',
      height: '1px',
      width: '1px',
      overflow: 'hidden'
    }}>
      <h1>SMYVISION TECHNOLOGIES - Top Web Development Company</h1>
      <h2>Best Website Development Services in Vijayawada, Hyderabad, Bangalore</h2>
      
      <p>SMYVISION TECHNOLOGIES is the leading web development company in Vijayawada, Hyderabad, and Bangalore. We specialize in professional website development services for businesses across South India.</p>
      
      <h3>Web Development Services in Vijayawada</h3>
      <p>As the top web development company in Vijayawada, we offer customized website solutions for local businesses. Our Vijayawada-based team provides expert web development services with 24/7 support.</p>
      
      <h3>Website Development Company in Hyderabad</h3>
      <p>We are a premier website development company in Hyderabad offering cutting-edge web solutions. Our Hyderabad office serves clients with responsive website design and development services.</p>
      
      <h3>Best Web Developers in Bangalore</h3>
      <p>Our Bangalore team provides professional web development services for startups and enterprises. We are recognized as one of the best web development companies in Bangalore for automation and chatbot solutions.</p>
      
      <h3>Services Offered:</h3>
      <ul>
        <li>Website Development in Vijayawada</li>
        <li>Web Development Company Hyderabad</li>
        <li>Bangalore Web Development Services</li>
        <li>E-commerce Website Development</li>
        <li>Custom Web Applications</li>
        <li>Business Automation Solutions</li>
        <li>AI Chatbot Development</li>
      </ul>
      
      <h3>Why Choose Our Web Development Services?</h3>
      <p>We are the preferred choice for web development in Vijayawada, Hyderabad, and Bangalore because of our:</p>
      <ul>
        <li>Expert team of web developers</li>
        <li>Affordable pricing for businesses</li>
        <li>Timely project delivery</li>
        <li>24/7 technical support</li>
        <li>Modern technology stack</li>
        <li>Client-centric approach</li>
      </ul>
      
      <p>Contact the best web development company in Vijayawada, Hyderabad, and Bangalore today. Call 8500352005 for a free consultation on website development services.</p>
      
      <h4>Keywords: top web development companies in vijayawada, website development company hyderabad, best web developers in bangalore, web development services vijayawada, hyderabad web development company, bangalore website developers, affordable web development vijayawada, professional website developers hyderabad, custom web development bangalore, e-commerce website development south india</h4>
    </div>
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

  useEffect(() => {
    // Enhanced SEO Meta tags for location-based keywords
    const metaTags = [
      { name: 'description', content: 'Top web development company in Vijayawada, Hyderabad, Bangalore. SMYVISION TECHNOLOGIES provides professional website development, automation solutions, and chatbot development services across South India.' },
      { name: 'keywords', content: 'top web development companies in vijayawada, website development company hyderabad, best web developers in bangalore, web development services vijayawada, hyderabad web development company, bangalore website developers, affordable web development vijayawada, professional website developers hyderabad, custom web development bangalore, e-commerce website development south india, web development andhra pradesh, website company telangana, bangalore web services, vijayawada website designers, hyderabad web solutions' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: 'SMYVISION TECHNOLOGIES' },
      { name: 'geo.region', content: 'IN-AP, IN-TG, IN-KA' },
      { name: 'geo.placename', content: 'Vijayawada, Hyderabad, Bangalore' },
      { name: 'geo.position', content: '16.5062;80.6480' },
      { name: 'ICBM', content: '16.5062, 80.6480' },
      
      // Open Graph Tags
      { property: 'og:title', content: 'Top Web Development Company in Vijayawada, Hyderabad, Bangalore | SMYVISION' },
      { property: 'og:description', content: 'Professional website development services in Vijayawada, Hyderabad, and Bangalore. Custom web solutions, automation, and chatbot development for businesses.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://smyvision.vercel.app/services' },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'og:locale:alternate', content: 'te_IN' },
      
      // Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Top Web Development Company | Vijayawada Hyderabad Bangalore' },
      { name: 'twitter:description', content: 'Best web development services in Vijayawada, Hyderabad, Bangalore. Professional website solutions for businesses.' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) meta.name = tag.name;
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Canonical URL
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = 'https://smyvision.vercel.app/services';
    document.head.appendChild(canonicalLink);

    // Page Title with location keywords
    document.title = 'Top Web Development Company in Vijayawada, Hyderabad, Bangalore | SMYVISION';

    // Ensure proper viewport setup
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.head.appendChild(meta);
    }

    // Reset body styles
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';
    document.body.style.width = '100%';

    return () => {
      metaTags.forEach(tag => {
        const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`;
        const element = document.querySelector(selector);
        if (element) element.remove();
      });
      
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.remove();
    };
  }, []);

  const handleCallNow = () => {
    window.location.href = 'tel:8500352005';
  };

  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  const services = [
    {
      id: 1,
      title: 'Websites Development',
      icon: <LightIcons.Globe />,
      description: 'SMYVISION TECHNOLOGIES provides affordable and professional website solutions for businesses of all sizes. A well-designed website builds trust, credibility, and a strong online presence.',
      features: ['Customized Solutions', 'Expert Implementation', '24/7 Support', 'Regular Updates'],
      color: '#4f46e5',
      bgColor: 'rgba(79, 70, 229, 0.05)'
    },
    {
      id: 2,
      title: 'Automation Development',
      icon: <LightIcons.Zap />,
      description: 'SMYVISION TECHNOLOGIES delivers reliable and affordable automation solutions to improve business efficiency. Automation reduces manual effort, minimizes errors, and saves valuable time.',
      features: ['High Accuracy & Reliability', 'Expert Implementation', 'Error Reduction & Consistency', 'Business-Specific Design'],
      color: '#008080',
      bgColor: 'rgba(245, 158, 11, 0.05)'
    },{
      id: 3,
      title: 'Smart Chatbot Solutions',
      icon: <LightIcons.Cogs />,
      description: 'SMYVISION TECHNOLOGIES creates intelligent chatbot solutions that engage customers instantly and provide accurate responses around the clock. Chatbots improve customer experience, reduce response time, and automate routine conversations.',
      features: ['24/7 Instant Customer Support',
    'Natural & Human-Like Conversations',
    'Reduced Support Workload',
    'Seamless Business Integration'],
      color: '#2b05ff',
      bgColor: 'rgba(245, 158, 11, 0.05)'
    },
    
  ];

  const whyChooseUs = [
    { icon: <LightIcons.Monitor />, title: 'Technology Expertise', desc: 'Latest tools and technologies for optimal performance', color: '#10b981' },
    { icon: <LightIcons.Users />, title: 'Client-Centric Approach', desc: 'Solutions tailored to your specific business needs', color: '#8b5cf6' },
    { icon: <LightIcons.Zap />, title: 'Cutting-edge Solutions', desc: '95% projects delivered on or before deadline', color: '#f59e0b' },
    { icon: <LightIcons.Clock />, title: 'Timely Delivery', desc: 'Consistent on-time delivery with quality assurance', color: '#ef4444' },
    { icon: <LightIcons.RefreshCw />, title: 'Ongoing Support', desc: 'Round-the-clock support with 30-minute response time', color: '#3b82f6' }
  ];

  const processSteps = [
    { number: '01', title: 'Discovery', desc: 'Understanding your business needs, goals, and challenges through in-depth consultation.' },
    { number: '02', title: 'Planning', desc: 'Designing tailored solutions and creating detailed implementation strategy.' },
    { number: '03', title: 'Development', desc: 'Building robust solutions using cutting-edge technologies and best practices.' },
    { number: '04', title: 'Deployment', desc: 'Launching solutions with seamless integration and comprehensive testing.' },
    { number: '05', title: 'Support', desc: 'Providing ongoing maintenance, updates, and optimization services.' }
  ];

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We serve a diverse range of industries including technology, healthcare, finance, e-commerce, manufacturing, and education."
    },
    {
      question: "How long does project implementation take?",
      answer: "Implementation timelines vary: websites (2-4 weeks), web apps (4-12 weeks), mobile apps (6-16 weeks)."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support packages including basic, professional, and enterprise support."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing: Fixed Price, Time & Materials, Dedicated Team, and Subscription Model."
    }
  ];

  return (
    <>
      {/* SEO Head Components */}
      <Helmet>
        <meta name="geo.region" content="IN-AP, IN-TG, IN-KA" />
        <meta name="geo.placename" content="Vijayawada, Hyderabad, Bangalore" />
        <meta name="geo.position" content="16.5062;80.6480" />
        <meta name="ICBM" content="16.5062, 80.6480" />
        <meta name="location" content="Vijayawada, Hyderabad, Bangalore, India" />
        <link rel="canonical" href="https://smyvision.vercel.app/services" />
        
        {/* Location-specific alternate URLs */}
        <link rel="alternate" hrefLang="en-in" href="https://smyvision.vercel.app/services" />
        <link rel="alternate" hrefLang="te-in" href="https://smyvision.vercel.app/te/services" />
        
        {/* Local business schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SMYVISION TECHNOLOGIES",
            "image": "https://smyvision.vercel.app/logo.png",
            "@id": "https://smyvision.vercel.app",
            "url": "https://smyvision.vercel.app",
            "telephone": "+918500352005",
            "priceRange": "2999",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Vijayawada",
              "addressLocality": "Vijayawada",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "520001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 16.5062,
              "longitude": 80.6480
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/share/1AAbW51BTs/",
              "https://twitter.com/smyvisiontech",
              "https://www.linkedin.com/company/smyvisiontechnologies"
            ]
          })}
        </script>
      </Helmet>
      
      {/* Hidden SEO Structured Data */}
      <SEOStructuredData />
      
      <div style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        maxWidth: '100%',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflowX: 'hidden',
        boxSizing: 'border-box'
      }}>
        {/* Hidden SEO Text (for search engines only) */}
        <HiddenSEOText />
        
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
                Transformative
                <span style={{
                  background: 'linear-gradient(135deg, #4f46e5, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'block',
                  marginTop: '10px'
                }}>
                  Technology Solutions
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                  color: '#64748b',
                  maxWidth: '800px',
                  margin: '0 auto 40px',
                  lineHeight: '1.6',
                  padding: '0 16px'
                }}
              >
                Discover our comprehensive suite of technology services designed to accelerate your digital transformation, enhance operational efficiency, and drive sustainable business growth.
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
                  { value: '3+', label: 'Services we offer', color: '#4f46e5' },
                  { value: '98%', label: 'Client Satisfaction', color: '#10b981' },
                  { value: '24/7', label: 'Support Available', color: '#3b82f6' }
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
                      color: '#64748b',
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
                    color: '#64748b',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6',
                    padding: '0 16px'
                  }}>
                    Comprehensive technology solutions tailored to your business needs
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
                      {/* Service Icon */}
                      <motion.div
                        animate={{
                          scale: hoveredCard === service.id ? 1.1 : 1,
                          rotate: hoveredCard === service.id ? [0, 10, -10, 0] : 0
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          width: '60px',
                          height: '60px',
                          background: hoveredCard === service.id 
                            ? `linear-gradient(135deg, ${service.color}, ${service.color}80)`
                            : service.bgColor,
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '20px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {service.icon}
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
                        color: '#64748b',
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
                    color: '#64748b',
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
                        color: '#64748b',
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
                    color: '#64748b',
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
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                          color: 'white',
                          flexShrink: 0,
                          marginRight: '20px',
                          zIndex: 2,
                          boxShadow: '0 8px 16px rgba(79, 70, 229, 0.3)'
                        }}
                      >
                        {step.number}
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
                          color: '#64748b',
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
                  background: 'linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)',
                  padding: 'clamp(40px, 8vw, 60px) clamp(16px, 4vw, 32px)',
                  borderRadius: '24px',
                  margin: 'clamp(60px, 10vw, 100px) 0',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(79, 70, 229, 0.3)',
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
                      color: '#4f46e5',
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
                    color: '#64748b',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6',
                    padding: '0 16px'
                  }}>
                    Find answers to common questions about our services
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
                              color: '#4f46e5',
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
                                color: '#64748b',
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
    </>
  );
}

export default Services;