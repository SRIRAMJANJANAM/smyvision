import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Import Lucide React Icons
import { 
  Rocket, Zap, Globe, Search, TrendingUp, Award, Smartphone, 
  BarChart3, Code2, Workflow, Bot, Building2, Target, Clock,
  CheckCircle, Calendar, Phone, ArrowRight, Sparkles, Shield,
  Cloud, Users, Cpu, Palette, Server, Lock, MessageSquare,
  LineChart, ShieldCheck, ZapOff, Infinity as InfinityIcon,
  DollarSign, Target as TargetIcon, Eye, Globe2
} from 'lucide-react';

// Import React Icons for variety
import { 
  FaLightbulb, FaChartLine, FaMobileAlt, FaRobot,
  FaGoogle, FaRegClock, FaStar, FaCrown,
  FaNetworkWired, FaDatabase, FaRocket, FaRegHandshake
} from 'react-icons/fa';

// SEO Structured Data Component (Hidden)
const SEOStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebDevelopmentCompany",
        "@id": "https://smyvision.com/#company",
        "name": "SMYVISION TECHNOLOGIES",
        "description": "Top web development company in Vijayawada, Hyderabad, and Bangalore offering professional website development, automation solutions, and chatbot development services.",
        "url": "https://smyvision.com",
        "logo": "https://smyvision.com/logo.png",
        "founder": "Sri Ram Janjanam",
        "foundingDate": "2026",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vijayawada",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "520001",
          "addressCountry": "India",
          "streetAddress": "Vijayawada"
        },
        "serviceArea": {
          "@type": "Place",
          "name": "Vijayawada, Hyderabad, Bangalore, Andhra Pradesh, Telangana, Karnataka"
        },
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
        "makesOffer": [
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
        ],
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
      },
      {
        "@type": "WebPage",
        "@id": "https://smyvision.com/#webpage",
        "url": "https://smyvision.com",
        "name": "Top Web Development Company in Vijayawada, Hyderabad, Bangalore | SMYVISION",
        "description": "Professional web development services in Vijayawada, Hyderabad, and Bangalore. Custom website development, automation solutions, and chatbot development.",
        "isPartOf": {
          "@id": "https://smyvision.com/#website"
        },
        "inLanguage": "en-IN",
        "potentialAction": [{
          "@type": "ReadAction",
          "target": ["https://smyvision.com"]
        }]
      },
      {
        "@type": "Service",
        "name": "Website Development",
        "serviceType": "WebDevelopment",
        "provider": {
          "@id": "https://smyvision.com/#company"
        },
        "areaServed": "Vijayawada, Hyderabad, Bangalore",
        "description": "Professional website development services for businesses in Vijayawada, Hyderabad, and Bangalore"
      },
      {
        "@type": "Service",
        "name": "Automation Solutions",
        "serviceType": "BusinessAutomation",
        "provider": {
          "@id": "https://smyvision.com/#company"
        },
        "areaServed": "Vijayawada, Hyderabad, Bangalore",
        "description": "Business automation solutions for companies in South India"
      },
      {
        "@type": "Service",
        "name": "Chatbot Development",
        "serviceType": "SoftwareDevelopment",
        "provider": {
          "@id": "https://smyvision.com/#company"
        },
        "areaServed": "Vijayawada, Hyderabad, Bangalore",
        "description": "AI-powered chatbot development services"
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

// Hidden SEO Text Component for Home Page
const HiddenSEOText = () => {
  return (
    <div style={{
      position: 'absolute',
      left: '-9999px',
      top: '-9999px',
      height: '1px',
      width: '1px',
      overflow: 'hidden',
      opacity: '0',
      pointerEvents: 'none'
    }}>
      <p>SMYVISION TECHNOLOGIES - Top Web Development Company in Vijayawada, Hyderabad, Bangalore</p>
      <h2>Best Website Development Services | Web Developers in South India</h2>
      
      <p>SMYVISION TECHNOLOGIES is the leading web development company serving businesses in Vijayawada, Hyderabad, and Bangalore. We provide comprehensive digital solutions including professional website development, business automation, and AI chatbot development.</p>
      
      <h3>Web Development Services in Vijayawada</h3>
      <p>As one of the top web development companies in Vijayawada, we offer customized website solutions for local businesses. Our expert team in Vijayawada specializes in responsive web design, e-commerce development, and SEO-optimized websites that drive results.</p>
      
      <h3>Website Development Company in Hyderabad</h3>
      <p>Our Hyderabad-based web development team provides cutting-edge digital solutions for businesses across Telangana. We are recognized as a premier website development company in Hyderabad for our innovative approach and proven results.</p>
      
      <h3>Best Web Developers in Bangalore</h3>
      <p>With a strong presence in Bangalore, we deliver world-class web development services for startups and enterprises. Our Bangalore team excels in creating scalable web applications, automation systems, and intelligent chatbot solutions.</p>
      
      <h3>Our Core Services:</h3>
      <ul>
        <li>Custom Website Development in Vijayawada</li>
        <li>Professional Web Development Services in Hyderabad</li>
        <li>Enterprise Web Solutions in Bangalore</li>
        <li>E-commerce Website Development</li>
        <li>Business Process Automation</li>
        <li>AI Chatbot Development</li>
        <li>Mobile Responsive Web Design</li>
        <li>SEO-Optimized Websites</li>
        <li>Digital Transformation Solutions</li>
      </ul>
      
      <h3>Why Choose Our Web Development Company?</h3>
      <p>We stand out as the best web development company for businesses in Vijayawada, Hyderabad, and Bangalore because we offer:</p>
      <ul>
        <li>Expert web developers with years of experience</li>
        <li>Affordable web development packages</li>
        <li>Timely project delivery and 24/7 support</li>
        <li>Cutting-edge technology stack</li>
        <li>Client-centric approach and transparent communication</li>
        <li>Proven track record across multiple industries</li>
      </ul>
      
      <h3>Industries We Serve:</h3>
      <p>Our web development services cater to various industries including healthcare, education, retail, manufacturing, hospitality, technology startups, and more across Vijayawada, Hyderabad, and Bangalore.</p>
      
      <h3>Contact Information:</h3>
      <p>For professional web development services in Vijayawada, Hyderabad, or Bangalore, contact us today:</p>
      <ul>
        <li>Phone: 8500352005</li>
        <li>Email: info@smyvision.com</li>
        <li>Service Areas: Vijayawada, Hyderabad, Bangalore, Andhra Pradesh, Telangana, Karnataka</li>
      </ul>
      
      <h4>Keywords: top web development companies in vijayawada, website development company hyderabad, best web developers in bangalore, web development services vijayawada, hyderabad web development company, bangalore website developers, affordable web development vijayawada, professional website developers hyderabad, custom web development bangalore, e-commerce website development south india, web development company vijayawada, hyderabad website developers, bangalore web development services, responsive web design vijayawada, digital solutions hyderabad, software development bangalore</h4>
    </div>
  );
};

// Extract CSS to a separate constant for better organization
const globalStyles = `
  /* Enhanced 3D Animations & Effects - Refined */
  .perspective-1000 {
    perspective: 1000px;
  }

  .preserve-3d {
    transform-style: preserve-3d;
  }

  /* Floating particles background - Subtler */
  .particles-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-300), var(--secondary-300));
    opacity: 0.05;
    animation: float-particle 25s infinite linear;
  }

  @keyframes float-particle {
    0% {
      transform: translateY(100vh) translateX(0) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 0.05;
    }
    90% {
      opacity: 0.05;
    }
    100% {
      transform: translateY(-100px) translateX(100px) rotate(360deg);
      opacity: 0;
    }
  }

  /* Subtle 3D Card Hover Effect */
  .card-3d {
    transform-style: preserve-3d;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card-3d:hover {
    transform: translateY(-8px) rotateX(2deg) rotateY(2deg);
  }

  /* Icon Animation Classes */
  .icon-float {
    animation: icon-float 3s ease-in-out infinite;
  }

  .icon-spin {
    animation: icon-spin 20s linear infinite;
  }

  .icon-pulse {
    animation: icon-pulse 2s ease-in-out infinite;
  }

  .icon-bounce {
    animation: icon-bounce 2s ease infinite;
  }

  .icon-wave {
    animation: icon-wave 1.5s ease-in-out infinite;
  }

  @keyframes icon-float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes icon-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes icon-pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  @keyframes icon-bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @keyframes icon-wave {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    25% {
      transform: translateY(-5px) rotate(5deg);
    }
    75% {
      transform: translateY(-5px) rotate(-5deg);
    }
  }

  /* Icon Container Styles */
  .icon-container {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon-glow {
    filter: drop-shadow(0 0 8px currentColor);
  }

  .icon-gradient {
    background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Enhanced Icon Backgrounds */
  .icon-bg-primary {
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(168, 85, 247, 0.1));
  }

  .icon-bg-success {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1));
  }

  .icon-bg-warning {
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(249, 115, 22, 0.1));
  }

  .icon-bg-danger {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(244, 63, 94, 0.1));
  }

  .icon-bg-purple {
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.1));
  }

  .icon-bg-pink {
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(244, 114, 182, 0.1));
  }

  .icon-bg-indigo {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(129, 140, 248, 0.1));
  }

  /* Subtle Glow Effects */
  .glow {
    position: relative;
  }

  .glow::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: inherit;
    background: linear-gradient(45deg, var(--primary-400), var(--secondary-400));
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
    filter: blur(8px);
  }

  .glow:hover::after {
    opacity: 0.15;
  }

  /* Color Variables - Professional Palette */
  :root {
    /* Primary Color Palette - More Professional */
    --primary-50: #f0f9ff;
    --primary-100: #e0f2fe;
    --primary-200: #bae6fd;
    --primary-300: #7dd3fc;
    --primary-400: #38bdf8;
    --primary-500: #0ea5e9;
    --primary-600: #0284c7;
    --primary-700: #0369a1;
    --primary-800: #075985;
    --primary-900: #0c4a6e;
    
    /* Secondary Color Palette */
    --secondary-50: #faf5ff;
    --secondary-100: #f3e8ff;
    --secondary-200: #e9d5ff;
    --secondary-300: #d8b4fe;
    --secondary-400: #c084fc;
    --secondary-500: #a855f7;
    --secondary-600: #9333ea;
    --secondary-700: #7e22ce;
    --secondary-800: #6b21a8;
    --secondary-900: #581c87;
    
    /* Neutral Colors */
    --neutral-50: #f8fafc;
    --neutral-100: #f1f5f9;
    --neutral-200: #e2e8f0;
    --neutral-300: #cbd5e1;
    --neutral-400: #94a3b8;
    --neutral-500: #64748b;
    --neutral-600: #475569;
    --neutral-700: #334155;
    --neutral-800: #1e293b;
    --neutral-900: #0f172a;
    
    /* Semantic Colors */
    --success-500: #10b981;
    --warning-500: #f59e0b;
    --danger-500: #ef4444;
    
    /* Typography */
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    
    /* Spacing - Consistent scale */
    --spacing-0: 0rem;
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-8: 2rem;
    --spacing-10: 2.5rem;
    --spacing-12: 3rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --spacing-24: 6rem;
    --spacing-32: 8rem;
    
    /* Border Radius */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    --radius-3xl: 2rem;
    --radius-full: 9999px;
    
    /* Shadows - Subtler */
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
    
    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Z-indices */
    --z-base: 0;
    --z-elevated: 10;
    --z-sticky: 100;
    --z-modal: 1000;
    --z-max: 9999;
  }

  /* Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: var(--font-sans);
    color: var(--neutral-800);
    background-color: var(--neutral-50);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "ss01", "ss02", "cv01", "cv02";
  }

  /* Typography Scale */
  h1, h2, h3, h4, h5, h6 {
    font-weight: var(--font-weight-bold);
    line-height: 1.2;
    color: var(--neutral-900);
    letter-spacing: -0.025em;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: var(--spacing-6);
    letter-spacing: -0.05em;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 2.75rem);
    margin-bottom: var(--spacing-5);
    letter-spacing: -0.025em;
  }

  h3 {
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    margin-bottom: var(--spacing-4);
    letter-spacing: -0.01em;
  }

  p {
    font-size: clamp(1rem, 1.5vw, 1.125rem);
    color: var(--neutral-600);
    margin-bottom: var(--spacing-6);
    line-height: 1.7;
  }

  .text-lead {
    font-size: clamp(1.125rem, 2vw, 1.25rem);
    color: var(--neutral-600);
    line-height: 1.8;
  }

  /* Layout Components */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-4);
  }

  .section {
    padding: var(--spacing-24) 0;
    position: relative;
  }

  .section-tight {
    padding: var(--spacing-16) 0;
  }

  /* Enhanced Hero Section */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, var(--neutral-50) 0%, var(--neutral-100) 100%);
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%);
    z-index: 1;
    pointer-events: none;
  }

  .hero-content {
    position: relative;
    z-index: 2;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-2);
    padding: var(--spacing-2) var(--spacing-4);
    border-radius: var(--radius-full);
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(168, 85, 247, 0.1));
    color: var(--primary-700);
    font-size: 0.875rem;
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--spacing-6);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(14, 165, 233, 0.2);
    transition: all var(--transition-normal);
  }

  .hero-badge:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  /* Enhanced Stats Section */
  .stats-container {
    margin-top: calc(-1 * var(--spacing-16));
    position: relative;
    z-index: var(--z-sticky);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-6);
    background: white;
    backdrop-filter: blur(12px);
    border-radius: var(--radius-2xl);
    padding: var(--spacing-10);
    box-shadow: var(--shadow-xl);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .stat-item {
    text-align: center;
    perspective: 1000px;
  }

  .stat-icon {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: var(--radius-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin: 0 auto var(--spacing-6);
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(168, 85, 247, 0.1));
    color: var(--primary-600);
    transform-style: preserve-3d;
    transition: all var(--transition-normal);
  }

  .stat-number {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: var(--font-weight-bold);
    color: var(--neutral-900);
    margin-bottom: var(--spacing-2);
    line-height: 1;
  }

  .stat-label {
    font-size: 0.9375rem;
    color: var(--neutral-600);
    font-weight: var(--font-weight-medium);
  }

  /* Enhanced Benefits Section */
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-8);
  }

  .benefit-card {
    background: white;
    backdrop-filter: blur(12px);
    border-radius: var(--radius-xl);
    padding: var(--spacing-8);
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-normal);
    border: 1px solid rgba(255, 255, 255, 0.3);
    height: 100%;
    transform-style: preserve-3d;
    position: relative;
    overflow: hidden;
  }

  .benefit-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-500), var(--secondary-500));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-normal);
  }

  .benefit-card:hover::before {
    transform: scaleX(1);
  }

  .benefit-card:hover {
    border-color: transparent;
    box-shadow: var(--shadow-xl);
    transform: translateY(-4px);
  }

  .benefit-icon {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: var(--spacing-6);
    transform-style: preserve-3d;
    transition: all var(--transition-normal);
  }

  .benefit-stat {
    display: inline-block;
    padding: var(--spacing-1) var(--spacing-3);
    border-radius: var(--radius-full);
    font-size: 0.8125rem;
    font-weight: var(--font-weight-semibold);
    margin: var(--spacing-4) 0;
    backdrop-filter: blur(8px);
    letter-spacing: 0.02em;
  }

  /* Enhanced Services Section */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-8);
  }

  .service-card {
    background: white;
    backdrop-filter: blur(12px);
    border-radius: var(--radius-xl);
    padding: var(--spacing-8);
    text-align: center;
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-normal);
    border: 1px solid rgba(255, 255, 255, 0.3);
    height: 100%;
    transform-style: preserve-3d;
    position: relative;
    overflow: hidden;
  }

  .service-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.03), rgba(168, 85, 247, 0.03));
    opacity: 0;
    transition: opacity var(--transition-normal);
    pointer-events: none;
  }

  .service-card:hover::after {
    opacity: 1;
  }

  .service-card:hover {
    border-color: transparent;
    box-shadow: var(--shadow-xl);
    transform: translateY(-4px);
  }

  .service-icon {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: var(--radius-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 0 auto var(--spacing-6);
    background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
    color: white;
    transform-style: preserve-3d;
    transition: all var(--transition-normal);
  }

  .features-list {
    margin-top: var(--spacing-6);
  }

  .feature-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2);
    margin-bottom: var(--spacing-3);
    font-size: 0.9375rem;
    color: var(--neutral-600);
  }

  /* Enhanced Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.875rem 2rem;
    border-radius: var(--radius-lg);
    font-weight: var(--font-weight-semibold);
    font-size: 1rem;
    text-decoration: none;
    transition: all var(--transition-normal);
    cursor: pointer;
    border: 1px solid transparent;
    outline: none;
    position: relative;
    overflow: hidden;
    min-height: 3rem;
    letter-spacing: 0.01em;
  }

  .btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  .btn:hover::after {
    transform: translateX(100%);
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
    color: white;
    box-shadow: 0 4px 16px rgba(2, 132, 199, 0.2);
  }

  .btn-primary:hover {
    background: linear-gradient(135deg, var(--primary-700), var(--primary-800));
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(2, 132, 199, 0.3);
  }

  .btn-secondary {
    background: transparent;
    color: var(--primary-600);
    border-color: var(--primary-300);
  }

  .btn-secondary:hover {
    background: var(--primary-50);
    border-color: var(--primary-600);
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(2, 132, 199, 0.1);
  }

  .btn-white {
    background: white;
    color: var(--neutral-900);
    border-color: var(--neutral-200);
  }

  .btn-white:hover {
    background: var(--neutral-50);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  .btn-group {
    display: flex;
    gap: var(--spacing-4);
    flex-wrap: wrap;
    justify-content: center;
  }

  /* Enhanced CTA Sections */
  .cta-section {
    background: linear-gradient(135deg, #929292 0%, #203a43 50%, #929292 100%);
    color: white;
    text-align: center;
    padding: var(--spacing-24) 0;
    position: relative;
    overflow: hidden;
    border-radius: 2rem;
  }

  .cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .cta-content {
    position: relative;
    z-index: 1;
  }

  .cta-section h2,
  .cta-section p {
    color: white;
  }

  .price-tag {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-2);
    background: rgba(255, 255, 255, 0.95);
    color: var(--primary-700);
    padding: var(--spacing-4) var(--spacing-8);
    border-radius: var(--radius-full);
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    font-weight: var(--font-weight-bold);
    margin: var(--spacing-8) 0;
    box-shadow: var(--shadow-xl);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all var(--transition-normal);
  }

  .price-tag:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: var(--shadow-2xl);
  }

  /* Enhanced Final CTA */
  .final-cta {
    background: linear-gradient(135deg, #929292 0%, #203a43 50%, #929292 100%);
    color: white;
    text-align: center;
    padding: var(--spacing-24) 0;
    position: relative;
    overflow: hidden;
    border-radius: 2rem;
    margin-top: 1rem;
  }

  .final-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .final-cta h2,
  .final-cta p {
    color: white;
  }

  .consultation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-8);
    max-width: 800px;
    margin: var(--spacing-12) auto;
  }

  .consultation-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border-radius: var(--radius-xl);
    padding: var(--spacing-8);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.15);
    transition: all var(--transition-normal);
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .consultation-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  }

  .consultation-card:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  /* Enhanced Divider */
  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--neutral-300), transparent);
    margin: var(--spacing-12) auto;
    max-width: 800px;
    position: relative;
    overflow: hidden;
  }

  .divider::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, var(--primary-500), transparent);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  /* Animations */
  @keyframes float {
    0%, 100% { 
      transform: translateY(0px); 
    }
    50% { 
      transform: translateY(-10px); 
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  /* Utility Classes */
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .max-w-xs { max-width: 20rem; }
  .max-w-sm { max-width: 24rem; }
  .max-w-md { max-width: 28rem; }
  .max-w-lg { max-width: 32rem; }
  .max-w-xl { max-width: 36rem; }
  .max-w-2xl { max-width: 42rem; }
  .max-w-3xl { max-width: 48rem; }
  .max-w-4xl { max-width: 56rem; }
  .max-w-5xl { max-width: 64rem; }
  .max-w-6xl { max-width: 72rem; }
  .max-w-7xl { max-width: 80rem; }
  .max-w-full { max-width: 100%; }

  .mt-0 { margin-top: 0; }
  .mt-2 { margin-top: var(--spacing-2); }
  .mt-4 { margin-top: var(--spacing-4); }
  .mt-6 { margin-top: var(--spacing-6); }
  .mt-8 { margin-top: var(--spacing-8); }
  .mt-12 { margin-top: var(--spacing-12); }

  .mb-0 { margin-bottom: 0; }
  .mb-2 { margin-bottom: var(--spacing-2); }
  .mb-4 { margin-bottom: var(--spacing-4); }
  .mb-6 { margin-bottom: var(--spacing-6); }
  .mb-8 { margin-bottom: var(--spacing-8); }
  .mb-12 { margin-bottom: var(--spacing-12); }

  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .items-center { align-items: center; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .gap-2 { gap: var(--spacing-2); }
  .gap-4 { gap: var(--spacing-4); }
  .gap-6 { gap: var(--spacing-6); }
  .gap-8 { gap: var(--spacing-8); }

  /* Accessibility */
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

  :focus-visible {
    outline: 2px solid var(--primary-500);
    outline-offset: 2px;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .section {
      padding: var(--spacing-16) 0;
    }
    
    .section-tight {
      padding: var(--spacing-12) 0;
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
      padding: var(--spacing-8);
      gap: var(--spacing-4);
    }

    .stats-container {
      margin-top: calc(-1 * var(--spacing-19));
    }

    .benefits-grid,
    .services-grid,
    .consultation-grid {
      gap: var(--spacing-6);
    }

    .benefit-card,
    .service-card,
    .consultation-card {
      padding: var(--spacing-6);
    }

    .btn-group {
      flex-direction: column;
    }

    .btn {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    .container {
      padding: 0 var(--spacing-4);
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .hero {
      min-height: 90vh;
    }

    h1 {
      font-size: clamp(2rem, 4vw, 2.5rem);
    }

    h2 {
      font-size: clamp(1.75rem, 3vw, 2rem);
    }
  }

  /* Print Styles */
  @media print {
    .btn::after,
    .hero::before,
    .cta-section::before,
    .final-cta::before,
    .divider::after,
    .particles-container {
      display: none;
    }

    .benefit-card,
    .service-card,
    .consultation-card {
      break-inside: avoid;
      box-shadow: none;
      border: 1px solid var(--neutral-300);
    }

    .cta-section,
    .final-cta {
      background: white !important;
      color: var(--neutral-900) !important;
    }
  }
`;

// Animated Icon Components
const AnimatedRocket = () => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <Rocket className="icon-glow" color="var(--primary-500)" size={24} />
  </motion.div>
);

const AnimatedSparkle = () => (
  <motion.div
    initial={{ scale: 0.8, rotate: 0 }}
    animate={{ scale: [0.8, 1.2, 0.8], rotate: 360 }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
  >
    <Sparkles className="icon-glow" color="var(--secondary-500)" size={20} />
  </motion.div>
);

const AnimatedShield = () => (
  <motion.div
    animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0, -5, 0]
    }}
    transition={{ duration: 3, repeat: Infinity }}
  >
    <ShieldCheck className="icon-glow" color="var(--success-500)" size={22} />
  </motion.div>
);

const Home = () => {
  const [stats, setStats] = useState({ projects: 0, industries: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();
  
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const benefitsRef = useRef(null);
  const servicesRef = useRef(null);

  // Set up SEO meta tags on component mount
  useEffect(() => {
    // Set page title with SEO keywords
    document.title = 'Top Web Development Company in Vijayawada, Hyderabad, Bangalore | SMYVISION';
    
    // Set meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'SMYVISION TECHNOLOGIES - Top web development company in Vijayawada, Hyderabad, Bangalore offering professional website development, automation solutions, and chatbot development services.';
    document.head.appendChild(metaDescription);
    
    // Set keywords meta
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'top web development companies in vijayawada, website development company hyderabad, best web developers in bangalore, web development services vijayawada, hyderabad web development company, bangalore website developers, affordable web development vijayawada, professional website developers hyderabad, custom web development bangalore, e-commerce website development south india, web development company vijayawada, hyderabad website developers, bangalore web development services';
    document.head.appendChild(metaKeywords);
    
    // Set location meta tags
    const metaRegion = document.createElement('meta');
    metaRegion.name = 'geo.region';
    metaRegion.content = 'IN-AP, IN-TG, IN-KA';
    document.head.appendChild(metaRegion);
    
    const metaPlacename = document.createElement('meta');
    metaPlacename.name = 'geo.placename';
    metaPlacename.content = 'Vijayawada, Hyderabad, Bangalore';
    document.head.appendChild(metaPlacename);
    
    // Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Top Web Development Company in Vijayawada, Hyderabad, Bangalore | SMYVISION';
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Professional web development services in Vijayawada, Hyderabad, and Bangalore. Custom website development, automation solutions, and chatbot development.';
    document.head.appendChild(ogDescription);
    

    
    return () => {
      // Clean up meta tags on unmount
      document.querySelectorAll('[name="description"], [name="keywords"], [name="geo.region"], [name="geo.placename"], [property="og:title"], [property="og:description"]').forEach(el => el.remove());
    };
  }, []);

  // Animation controls
  const heroControls = useAnimation();
  const statsControls = useAnimation();
  const benefitsControls = useAnimation();
  const servicesControls = useAnimation();

  // Initialize particles for background
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 8 + 3,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: Math.random() * 25 + 15,
      });
    }
    setParticles(newParticles);
  }, []);

  // Animate stats counter
  useEffect(() => {
    const animateStats = () => {
      let projects = 0;
      let industries = 0;
      const duration = 1500;
      const steps = 50;
      const interval = duration / steps;
      
      const projectStep = 15 / steps;
      const industryStep = 3 / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        projects += projectStep;
        industries += industryStep;
        currentStep++;
        
        if (currentStep >= steps) {
          projects = 15;
          industries = 3;
          clearInterval(timer);
        }
        
        setStats({ 
          projects: Math.floor(projects), 
          industries: Math.floor(industries) 
        });
      }, interval);
    };

    const timer = setTimeout(animateStats, 300);
    return () => clearTimeout(timer);
  }, []);

  // Button click handlers
  const handleStartJourney = () => navigate('/contact');
  const handleExploreServices = () => navigate('/services');
  const handleGetFreeQuote = () => navigate('/contact');
  const handleViewPortfolio = () => navigate('/about');
  const handleBookNow = () => navigate('/contact');
  const handleCallToday = () => window.location.href = 'tel:8500352005';

  // Updated Benefits with better icons and animations
  const benefits = [
    {
      icon: <Globe2 className="icon-wave" size={24} />,
      title: "24/7 Availability",
      description: "Your website works around the clock, allowing customers to discover and purchase anytime.",
      stat: "+247% sales increase",
      color: "#0ea5e9",
      bgClass: "icon-bg-primary",
      animation: "icon-pulse"
    },
    {
      icon: <Search className="icon-float" size={24} />,
      title: "Search Engine Visibility",
      description: "81% of consumers research online before purchasing. SEO optimization puts you on Google's first page.",
      stat: "93% search traffic",
      color: "#10b981",
      bgClass: "icon-bg-success",
      animation: "icon-bounce"
    },
    {
      icon: (
        <motion.div
          className="flex items-center justify-center"
          animate={{
            y: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span 
            style={{ 
              fontSize: '26px', 
              fontWeight: 'bold',
              color: '#a855f7',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              display: 'inline-block'
            }}
          >
            ₹
          </span>
        </motion.div>
      ),
      title: "Cost-Effective",
      description: "Websites cost 60% less than traditional ads while reaching 10x more customers.",
      stat: "62% lower costs",
      color: "#a855f7",
      bgClass: "icon-bg-purple",
      animation: "icon-float"
    },
    {
      icon: <Award className="icon-float" size={24} />,
      title: "Professional Presence",
      description: "75% of consumers judge credibility by website design. Professional sites increase trust.",
      stat: "88% higher trust",
      color: "#f59e0b",
      bgClass: "icon-bg-warning",
      animation: "icon-float"
    },
    {
      icon: <Smartphone className="icon-bounce" size={24} />,
      title: "Mobile Responsive",
      description: "Break geographical barriers. 68% of traffic comes from mobile devices.",
      stat: "68% mobile traffic",
      color: "#ec4899",
      bgClass: "icon-bg-pink",
      animation: "icon-pulse"
    },
    {
      icon: <BarChart3 className="icon-float" size={24} />,
      title: "Data-Driven",
      description: "Track every visitor with analytics. Data-driven optimization leads to higher conversion rates.",
      stat: "64% higher conversions",
      color: "#6366f1",
      bgClass: "icon-bg-indigo",
      animation: "icon-wave"
    }
  ];

  // Updated Services with better icons
  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
      animation: "icon-float"
    },
    {
      icon: <Workflow size={28} />,
      title: "Automation",
      description: "Streamline your business processes with intelligent automation solutions.",
      features: ["Process Optimization", "Workflow Automation", "Integration"],
      animation: "icon-wave"
    },
    {
      icon: <Bot size={28} />,
      title: "Chatbots",
      description: "Chat systems with conversation flows you design and control.",
      features: ["24/7 Support", "Instant Connect", "Help Visitors"],
      animation: "icon-bounce"
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const cardHover = {
    rest: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.02,
      rotateX: 2,
      rotateY: 2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const buttonHover = {
    rest: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    tap: {
      scale: 0.98,
      y: 1
    }
  };

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  return (
    <>
      {/* SEO Meta Tags and Structured Data */}
      <Helmet>
        <html lang="en" prefix="og: https://ogp.me/ns#" />
        <title>Top Web Development Company in Vijayawada, Hyderabad, Bangalore | SMYVISION</title>
        <meta name="description" content="SMYVISION TECHNOLOGIES - Top web development company in Vijayawada, Hyderabad, Bangalore offering professional website development, automation solutions, and chatbot development services." />
        <meta name="keywords" content="top web development companies in vijayawada, website development company hyderabad, best web developers in bangalore, web development services vijayawada, hyderabad web development company, bangalore website developers, affordable web development vijayawada, professional website developers hyderabad, custom web development bangalore, e-commerce website development south india" />
        <meta name="author" content="SMYVISION TECHNOLOGIES" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Location Meta Tags */}
        <meta name="geo.region" content="IN-AP, IN-TG, IN-KA" />
        <meta name="geo.placename" content="Vijayawada, Hyderabad, Bangalore" />
        <meta name="geo.position" content="16.5062;80.6480" />
        <meta name="ICBM" content="16.5062, 80.6480" />
        <meta name="location" content="Vijayawada, Hyderabad, Bangalore, India" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Top Web Development Company in Vijayawada, Hyderabad, Bangalore | SMYVISION" />
        <meta property="og:description" content="Professional web development services in Vijayawada, Hyderabad, and Bangalore. Custom website development, automation solutions, and chatbot development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smyvision.com" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="te_IN" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Web Development Company | Vijayawada Hyderabad Bangalore" />
        <meta name="twitter:description" content="Best web development services in Vijayawada, Hyderabad, Bangalore. Professional website solutions for businesses." />
        
        {/*  Alternate Links */}
        <link rel="alternate" hrefLang="en-in" href="https://smyvision.com" />
        <link rel="alternate" hrefLang="te-in" href="https://smyvision.com/te" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="utf-8" />
      </Helmet>
      
      {/* Hidden SEO Structured Data */}
      <SEOStructuredData />
      
      <style jsx global>{globalStyles}</style>
      
      <div className="home">
        {/* Hidden SEO Text (for search engines only) */}
        <HiddenSEOText />
        
        {/* Floating Particles Background - Subtle */}
        <div className="particles-container">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.left}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="hero" ref={heroRef} itemScope itemType="https://schema.org/WebPage">
          <div className="container">
            <motion.div 
              className="hero-content max-w-3xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={slideUp}>
                <div className="mb-6">
                  <motion.span 
                    className="hero-badge"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AnimatedRocket />
                    <span className="ml-2">Transform Your Digital Presence</span>
                  </motion.span>
                </div>
                
                <motion.h1 
                  className="mb-6"
                  variants={fadeIn}
                >
                  Intelligent Digital Solutions for Modern Businesses
                </motion.h1>
                
                <motion.p 
                  className="text-lead mb-8 text-neutral-600"
                  variants={fadeIn}
                >
                  SMYVISION TECHNOLOGIES builds intelligent digital platforms that streamline business operations, enhance customer engagement, and automate processes to drive growth and efficiency..
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="btn-group"
                variants={staggerContainer}
              >
                <motion.button 
                  className="btn btn-primary"
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleStartJourney}
                >
                  Start Your Journey 
                  <ArrowRight className="ml-2" size={18} />
                </motion.button>
                <motion.button 
                  className="btn btn-secondary"
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleExploreServices}
                >
                  Explore Services
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <div className="container stats-container" ref={statsRef}>
          <motion.div 
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="stat-item card-3d"
              variants={slideUp}
              whileHover="hover"
            >
              <motion.div 
                className="stat-icon icon-bg-primary"
                variants={floatAnimation}
                animate="animate"
              >
                <Building2 size={24} color="var(--primary-600)" />
              </motion.div>
              <motion.div 
                className="stat-number"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {stats.projects}+
              </motion.div>
              <div className="stat-label">Industries Serving</div>
            </motion.div>
            
            <motion.div 
              className="stat-item card-3d"
              variants={slideUp}
              whileHover="hover"
            >
              <motion.div 
                className="stat-icon icon-bg-purple"
                variants={floatAnimation}
                animate="animate"
              >
                <TargetIcon size={24} color="var(--secondary-600)" />
              </motion.div>
              <motion.div 
                className="stat-number"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                {stats.industries}+
              </motion.div>
              <div className="stat-label">Services We Offer</div>
            </motion.div>
            
            <motion.div 
              className="stat-item card-3d"
              variants={slideUp}
              whileHover="hover"
            >
              <motion.div 
                className="stat-icon icon-bg-success"
                variants={floatAnimation}
                animate="animate"
              >
                <Clock size={24} color="var(--success-500)" />
              </motion.div>
              <motion.div 
                className="stat-number"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                24/7
              </motion.div>
              <div className="stat-label">Support Available</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <section className="section bg-neutral-50" ref={benefitsRef}>
          <div className="container">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
            >
              <h2 className="mb-6">
                Why Your Business Needs a Digital Presence
              </h2>
              <p className="max-w-2xl mx-auto text-neutral-600">
                In today's digital-first world, your online presence is your most valuable asset
              </p>
            </motion.div>
            
            <motion.div 
              className="benefits-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="benefit-card"
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <motion.div 
                    className={`benefit-icon ${benefit.bgClass} ${benefit.animation}`}
                    style={{color: benefit.color}}
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  <h3 className="mb-4">{benefit.title}</h3>
                  
                  <motion.div 
                    className="benefit-stat"
                    style={{background: `${benefit.color}10`, color: benefit.color}}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {benefit.stat}
                  </motion.div>
                  
                  <p className="text-neutral-600">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Services Section */}
        <section className="section" ref={servicesRef}>
          <div className="container">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
            >
              <h2 className="mb-6">Our Core Services</h2>
              <p className="max-w-2xl mx-auto text-neutral-600">
                Comprehensive solutions designed to elevate your business to new heights
              </p>
            </motion.div>
            
            <motion.div 
              className="services-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="service-card"
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div 
                    className="service-icon icon-float"
                    whileHover={{ rotateY: 180, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="mb-4">{service.title}</h3>
                  
                  <p className="mb-6 text-neutral-600">{service.description}</p>
                  
                  <div className="features-list">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="feature-item"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * idx }}
                      >
                        <CheckCircle className="text-success-500 mr-2" size={16} />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <motion.div 
              className="cta-content max-w-2xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="mb-6"
                variants={slideUp}
              >
                Ready to Build Your Digital Presence?
              </motion.h2>
              
              <motion.p 
                className="mb-8 opacity-90"
                variants={slideUp}
              >
                Get a professional, high-converting website that grows with your business
              </motion.p>
              
              <motion.div 
                className="price-tag"
                variants={slideUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Sparkles className="mr-2" size={20} />
                Starting from ₹2,999/-
              </motion.div>
              
              <motion.div 
                className="btn-group"
                variants={staggerContainer}
              >
                <motion.button 
                  className="btn btn-white"
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleGetFreeQuote}
                >
                  Get Free Quote
                </motion.button>
                <motion.button 
                  className="btn btn-secondary"
                  style={{background: 'transparent', borderColor: 'white', color: 'white'}}
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleViewPortfolio}
                >
                  View Portfolio
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="mb-6"
                variants={slideUp}
              >
                Transform Your Business Today
              </motion.h2>
              
              <motion.p 
                className="mb-12 opacity-90"
                variants={slideUp}
              >
                Let's create something extraordinary together. Schedule a consultation with our experts.
              </motion.p>
              
              <motion.div 
                className="consultation-grid"
                variants={staggerContainer}
              >
                <motion.div 
                  className="consultation-card glow"
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <div className="mb-6">
                    <motion.div
                      className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Calendar size={40} className="text-primary-300" />
                    </motion.div>
                  </div>
                  <h3 className="mb-4">Schedule Consultation</h3>
                  <p className="mb-6 opacity-90">Free 30-minute strategy session</p>
                  <motion.button 
                    className="btn btn-primary flex items-center justify-center gap-3 mx-auto min-w-[180px]"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 12px 28px rgba(2, 132, 199, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBookNow}
                  >
                    <div className="bg-white/20 p-1.5 rounded-lg">
                      <Calendar size={18} className="text-white" />
                    </div>
                    <span>Book Now</span>
                  </motion.button>
                </motion.div>
                
                <motion.div 
                  className="consultation-card glow"
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <div className="mb-6">
                    <motion.div
                      className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-success-500/20 to-emerald-500/20"
                      animate={{
                        y: [0, -8, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Phone size={40} className="text-success-300" />
                    </motion.div>
                  </div>
                  <h3 className="mb-4">Call Now</h3>
                  <p className="mb-6 opacity-90">Speak directly with our experts</p>
                  <motion.button 
                    className="btn btn-primary flex items-center justify-center gap-3 mx-auto min-w-[180px]"
                    style={{ 
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 12px 28px rgba(16, 185, 129, 0.6)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCallToday}
                  >
                    <motion.div
                      className="bg-white/20 p-1.5 rounded-lg"
                      animate={{
                        rotate: [0, 15, 0, -15, 0]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Phone size={18} className="text-white" />
                    </motion.div>
                    <span>Call Today</span>
                  </motion.button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-8 mt-16 text-sm"
                variants={fadeIn}
              >
                {[
                  { 
                    icon: <Shield size={20} />, 
                    text: 'End-to-End Solutions',
                    color: 'var(--primary-300)',
                    bg: 'from-primary-500/10 to-blue-500/10'
                  },
                  { 
                    icon: <TrendingUp size={20} />, 
                    text: 'Proven Results',
                    color: 'var(--success-300)',
                    bg: 'from-success-500/10 to-emerald-500/10'
                  },
                  { 
                    icon: <Users size={20} />, 
                    text: 'Strategic Guidance',
                    color: 'var(--secondary-300)',
                    bg: 'from-secondary-500/10 to-purple-500/10'
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex flex-col items-center gap-3"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.bg} backdrop-blur-sm`}>
                      <div style={{ color: item.color }}>
                        {item.icon}
                      </div>
                    </div>
                    <span className="text-white/80 font-medium text-base">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;