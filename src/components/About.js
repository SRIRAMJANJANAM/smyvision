import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const navigate = useNavigate();
  const sectionRefs = useRef([]);

  // SEO Structured Data Component (Hidden)
  const SEOStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": "https://smyvisiontechnologies.vercel.app/about#webpage",
          "url": "https://smyvisiontechnologies.vercel.app/about",
          "name": "About SMYVISION TECHNOLOGIES - Top Web Development Company in Vijayawada, Hyderabad, Bangalore",
          "description": "Learn about SMYVISION TECHNOLOGIES, the leading web development company in Vijayawada, Hyderabad, and Bangalore offering website development, automation solutions, and chatbot services.",
          "isPartOf": {
            "@id": "https://smyvisiontechnologies.vercel.app/#website"
          },
          "inLanguage": "en-IN",
          "about": {
            "@id": "https://smyvisiontechnologies.vercel.app/#company"
          }
        },
        {
          "@type": "WebDevelopmentCompany",
          "@id": "https://smyvisiontechnologies.vercel.app/#company",
          "name": "SMYVISION TECHNOLOGIES",
          "description": "Top web development company in Vijayawada, Hyderabad, and Bangalore offering professional website development, automation solutions, and chatbot development services.",
          "url": "https://smyvisiontechnologies.vercel.app",
          "logo": "https://smyvisiontechnologies.vercel.app/logo.png",
          "founder": "SMYVISION Team",
          "foundingDate": "2020",
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
          "knowsAbout": [
            "Website Development",
            "Web Application Development",
            "Business Automation",
            "Chatbot Development",
            "Digital Transformation",
            "SEO Optimization",
            "Responsive Web Design",
            "E-commerce Solutions"
          ],
          "employee": {
            "@type": "Person",
            "name": "Expert Web Development Team",
            "jobTitle": "Web Developers & Digital Solutions Experts",
            "knowsAbout": ["Website Development", "Automation", "Chatbot Solutions"]
          },
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
        }
      ]
    };

    return (
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    );
  };

  // Hidden SEO Text Component for About Page
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
        <h1>About SMYVISION TECHNOLOGIES - Top Web Development Company in Vijayawada, Hyderabad, Bangalore</h1>
        <h2>Leading Website Development Company in South India</h2>
        
        <p>SMYVISION TECHNOLOGIES is a premier web development company serving businesses in Vijayawada, Hyderabad, and Bangalore. With our headquarters in Vijayawada and strong presence across South India, we provide comprehensive digital solutions including professional website development, business automation, and AI chatbot development.</p>
        
        <h3>Our Story - Web Development Excellence in Vijayawada</h3>
        <p>Founded in Vijayawada, Andhra Pradesh, SMYVISION TECHNOLOGIES began with a vision to provide exceptional web development services to businesses across South India. As one of the top web development companies in Vijayawada, we quickly expanded our services to Hyderabad and Bangalore, becoming a trusted partner for digital transformation.</p>
        
        <h3>Our Mission as a Website Development Company</h3>
        <p>Our mission is to empower businesses with practical, reliable digital solutions that deliver real results. We focus on creating web development solutions that work perfectly every time, making technology simple and effective for businesses in Vijayawada, Hyderabad, and Bangalore.</p>
        
        <h3>Our Vision for Web Development Services</h3>
        <p>To become the most trusted digital partner for businesses who value reliability, precision, and results. We envision a world where every business in Vijayawada, Hyderabad, and Bangalore can have smart digital tools and professional websites that work exactly as intended.</p>
        
        <h3>Our Core Services - Web Development Company Expertise</h3>
        <p>SMYVISION TECHNOLOGIES offers comprehensive web development services across three major South Indian cities:</p>
        
        <h4>1. Website Development in Vijayawada, Hyderabad, Bangalore</h4>
        <p>Custom, responsive websites that combine stunning design with robust functionality. Our web development services include:</p>
        <ul>
          <li>Responsive Web Design for all devices</li>
          <li>Fast Loading Speed optimization</li>
          <li>Mobile-First Approach development</li>
          <li>SEO Optimization for better rankings</li>
          <li>E-commerce Website Development</li>
          <li>Custom Web Application Development</li>
        </ul>
        
        <h4>2. Smart Chatbot Solutions</h4>
        <p>Revolutionary visual node-based chatbot development for complex conversations. Perfect for businesses in Vijayawada, Hyderabad, and Bangalore looking to enhance customer engagement.</p>
        
        <h4>3. Business Automation Solutions</h4>
        <p>Automate repetitive tasks and save hours daily with custom 24/7 solutions tailored for businesses across South India.</p>
        
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
        
        <h3>Our Revolutionary Chatbot Approach</h3>
        <p>Our innovative visual node-based chatbot development eliminates complex coding, making chatbot creation accessible to businesses of all sizes in Vijayawada, Hyderabad, and Bangalore. This approach ensures:</p>
        <ul>
          <li>Visual Node Building without coding</li>
          <li>Precision Conversations with consistent responses</li>
          <li>Complete Control over every conversation path</li>
          <li>Easy Updates and scalability</li>
        </ul>
        
        <h3>Industries We Serve Across South India</h3>
        <p>Our web development services cater to various industries including:</p>
        <ul>
          <li>Healthcare & Medical Services</li>
          <li>Education & E-learning Platforms</li>
          <li>Retail & E-commerce Businesses</li>
          <li>Manufacturing & Industrial Companies</li>
          <li>Hospitality & Tourism</li>
          <li>Technology Startups</li>
          <li>Real Estate & Property Development</li>
          <li>Financial Services & Banking</li>
        </ul>
        
        <h3>Contact Our Web Development Company</h3>
        <p>For professional web development services in Vijayawada, Hyderabad, or Bangalore, contact us today:</p>
        <ul>
          <li>Phone: 8500352005</li>
          <li>WhatsApp: +91 85003 52005</li>
          <li>Email: smyvisiontechnologies@gmail.com</li>
          <li>Service Areas: Vijayawada, Hyderabad, Bangalore, Andhra Pradesh, Telangana, Karnataka</li>
        </ul>
        
        <h3>Our Core Values as a Web Development Company</h3>
        <p>At SMYVISION TECHNOLOGIES, we believe in:</p>
        <ul>
          <li>Integrity First - Clear communication and transparent processes</li>
          <li>Practical Innovation - Simple solutions for complex problems</li>
          <li>Client Success - Your growth is our success</li>
          <li>Excellence Commitment - Solutions that stand the test of time</li>
        </ul>
        
        <h3>SMYVISION Advantage for Businesses</h3>
        <p>Choosing our web development company gives you several advantages:</p>
        <ul>
          <li>Perfect Precision in all our web development projects</li>
          <li>Lightning Fast Development and deployment</li>
          <li>Cost-Effective Solutions with transparent pricing</li>
          <li>Total Customization to meet your specific needs</li>
          <li>24/7 Continuous Support and maintenance</li>
          <li>Guaranteed Reliability in all our solutions</li>
        </ul>
        
        <h4>Keywords: top web development companies in vijayawada, about web development company hyderabad, best web developers in bangalore, web development services vijayawada, hyderabad web development company, bangalore website developers, affordable web development vijayawada, professional website developers hyderabad, custom web development bangalore, e-commerce website development south india, web development company vijayawada, hyderabad website developers, bangalore web development services, responsive web design vijayawada, digital solutions hyderabad, software development bangalore, about smyvision technologies, chatbot development company, business automation solutions, digital transformation services</h4>
      </div>
    );
  };

  useEffect(() => {
    // Set up SEO meta tags
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'About SMYVISION TECHNOLOGIES - Top web development company in Vijayawada, Hyderabad, Bangalore offering website development, automation solutions, and chatbot services. Learn about our mission, vision, and services.';
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'top web development companies in vijayawada, about web development company hyderabad, best web developers in bangalore, web development services vijayawada, hyderabad web development company, bangalore website developers, about smyvision technologies, chatbot development company, business automation solutions';
    document.head.appendChild(metaKeywords);
    
    // Set page title
    document.title = 'About SMYVISION TECHNOLOGIES - Top Web Development Company in Vijayawada, Hyderabad, Bangalore';
    
    // Add scroll animation effect
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    };

    // Intersection Observer for more precise animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // Add a slight delay for staggered animations
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, delay);
        }
      });
    }, observerOptions);

    // Observe all animate-on-scroll elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      // Clean up meta tags
      document.querySelectorAll('[name="description"], [name="keywords"]').forEach(el => el.remove());
    };
  }, []);

  // Improved SVG Icons with better visual representation
  const Icons = {
    // Business & Technology Icons
    Building: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
        <rect x="9" y="6" width="6" height="6" rx="1"/>
        <path d="M9 12v6"/>
        <path d="M15 12v6"/>
        <path d="M8 22h8"/>
        <path d="M12 2v2"/>
      </svg>
    ),
    Target: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    Eye: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    Lightning: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    Globe: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
    ),
    // Improved Chatbot Icon
    Chatbot: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <path d="M8 10h8"/>
    <path d="M8 14h6"/>
    <circle cx="18" cy="7" r="1"/>
    <circle cx="6" cy="17" r="1"/>
    <path d="M18 10l-3-3 3-3"/>
    <path d="M6 14l3 3-3 3"/>
  </svg>
    ),
    // Improved Automation Icon
    Automation: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10"/>
    <path d="M2 12h10"/>
    <path d="M12 2v10"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="m19 5-7 7"/>
    <path d="M19 5h-3v3"/>
    <circle cx="19" cy="5" r="1"/>
  </svg>
    ),
    Clock: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    Shield: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    Users: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    Trophy: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    ),
    TrendingUp: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    Sparkles: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        <path d="M5 3v4"/>
        <path d="M19 17v4"/>
        <path d="M3 5h4"/>
        <path d="M17 19h4"/>
      </svg>
    ),
    CheckCircle: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    DollarSign: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" x2="12" y1="2" y2="22"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    Headphones: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      </svg>
    ),
    Award: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    Heart: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    ),
    Lightbulb: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
      </svg>
    ),
    ArrowRight: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"/>
        <path d="m12 5 7 7-7 7"/>
      </svg>
    ),
    History: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
        <path d="M12 7v5l4 2"/>
      </svg>
    ),
    // Vision Icon
    Vision: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    // Nodes Icon for Visual Building
    Nodes: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3"/>
        <circle cx="12" cy="19" r="3"/>
        <circle cx="5" cy="12" r="3"/>
        <circle cx="19" cy="12" r="3"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
        <line x1="5" y1="12" x2="8" y2="12"/>
        <line x1="16" y1="12" x2="19" y2="12"/>
      </svg>
    ),
    // Shield with Check
    ShieldCheck: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    // Refresh for Updates
    Refresh: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
        <path d="M21 3v5h-5"/>
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
        <path d="M8 16H3v5"/>
      </svg>
    ),
    // Badge Check
    BadgeCheck: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    // Message icon for WhatsApp
    Message: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    // Rocket for Projects
    Rocket: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
    // Trending Down for Cost Savings
    TrendingDown: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
        <polyline points="17 18 23 18 23 12"/>
      </svg>
    ),
     Monitor: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  
  Smartphone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12" y2="18"/>
    </svg>
  ),
  
  Search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  
  FileText: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
  ),
  
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  
  Link: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  };

  const stats = [
    { icon: <Icons.Rocket />, value: "3+", label: "Services We Offer", description: "Smart digital services for modern businesses" },
    { icon: <Icons.Heart />, value: "99%", label: "Client Satisfaction", description: "Happy clients" },
    { icon: <Icons.TrendingDown />, value: "40%", label: "Cost Savings", description: "Average reduction for clients" },
    { icon: <Icons.Clock />, value: "98%", label: "On-time Delivery", description: "Projects completed on schedule" }
  ];

  const services = [
  {
    icon: <Icons.Globe />,
    title: "Website Development",
    description: "Custom, responsive websites that combine stunning design with robust functionality.",
    features: [
      { text: "Responsive Design", icon: <Icons.Monitor /> },
      { text: "Fast Loading Speed", icon: <Icons.Zap /> },
      { text: "Mobile-First Approach", icon: <Icons.Smartphone /> },
      { text: "SEO Optimization", icon: <Icons.Search /> }
    ],
    color: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
  },
  {
    icon: <Icons.Chatbot />,
    title: "Smart Chatbots",
    description: "Revolutionary visual node-based chatbot development for complex conversations.",
    features: [
      { text: "Visual Node-based Builder", icon: <Icons.Nodes /> },
      { text: "Predictable, Consistent Responses", icon: <Icons.ShieldCheck /> },
      { text: "Multi-platform Ready", icon: <Icons.Globe /> },
      { text: "Easy to Modify & Scale", icon: <Icons.Refresh /> }
    ],
    color: "linear-gradient(135deg, #8b5cf6 0%, #ffd105 100%)"
  },
  {
    icon: <Icons.Automation />,
    title: "Business Automation",
    description: "Automate repetitive tasks and save hours daily with custom 24/7 solutions.",
    features: [
      { text: "Automated Data Entry & Forms", icon: <Icons.FileText /> },
      { text: "Report Generation & Emailing", icon: <Icons.Mail /> },
      { text: "Multi-Website Data Sync", icon: <Icons.Link /> },
      { text: "Process Testing & Quality Checks", icon: <Icons.CheckCircle /> }
    ],
    color: "linear-gradient(135deg, #aeb910 0%, #ffffff 100%)"
  }
];

  const values = [
    { icon: <Icons.ShieldCheck />, title: "Integrity First", description: "Clear communication and transparent processes" },
    { icon: <Icons.Lightbulb />, title: "Practical Innovation", description: "Simple solutions for complex problems" },
    { icon: <Icons.Users />, title: "Client Success", description: "Your growth is our success" },
    { icon: <Icons.Award />, title: "Excellence Commitment", description: "Solutions that stand the test of time" }
  ];

  const advantages = [
    { icon: <Icons.BadgeCheck />, text: "Perfect Precision" },
    { icon: <Icons.Lightning />, text: "Lightning Fast Development" },
    { icon: <Icons.DollarSign />, text: "Cost-Effective Solutions" },
    { icon: <Icons.Automation />, text: "Total Customization" }
  ];

  const handleStartProject = () => {
    navigate('/contact');
  };

  const handleExploreServices = () => {
    navigate('/services');
  };

  return (
    <>
      {/* SEO Meta Tags and Structured Data */}
      <Helmet>
        <html lang="en" prefix="og: https://ogp.me/ns#" />
        <title>About SMYVISION TECHNOLOGIES - Top Web Development Company in Vijayawada, Hyderabad, Bangalore</title>
        <meta name="description" content="About SMYVISION TECHNOLOGIES - Top web development company in Vijayawada, Hyderabad, Bangalore offering website development, automation solutions, and chatbot services. Learn about our mission, vision, and services." />
        <meta name="keywords" content="top web development companies in vijayawada, about web development company hyderabad, best web developers in bangalore, web development services vijayawada, hyderabad web development company, bangalore website developers, about smyvision technologies, chatbot development company, business automation solutions, digital transformation services" />
        <meta name="author" content="SMYVISION TECHNOLOGIES" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Location Meta Tags */}
        <meta name="geo.region" content="IN-AP, IN-TG, IN-KA" />
        <meta name="geo.placename" content="Vijayawada, Hyderabad, Bangalore" />
        <meta name="geo.position" content="16.5062;80.6480" />
        <meta name="ICBM" content="16.5062, 80.6480" />
        <meta name="location" content="Vijayawada, Hyderabad, Bangalore, India" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About SMYVISION TECHNOLOGIES - Top Web Development Company in Vijayawada, Hyderabad, Bangalore" />
        <meta property="og:description" content="Learn about SMYVISION TECHNOLOGIES, the leading web development company in Vijayawada, Hyderabad, and Bangalore offering website development, automation solutions, and chatbot services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smyvisiontechnologies.vercel.app/about" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="te_IN" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About SMYVISION - Web Development Company | Vijayawada Hyderabad Bangalore" />
        <meta name="twitter:description" content="Leading web development company in Vijayawada, Hyderabad, Bangalore. Professional website solutions for businesses." />
        
        {/* Canonical and Alternate Links */}
        <link rel="canonical" href="https://smyvisiontechnologies.vercel.app/about" />
        <link rel="alternate" hrefLang="en-in" href="https://smyvisiontechnologies.vercel.app/about" />
        <link rel="alternate" hrefLang="te-in" href="https://smyvisiontechnologies.vercel.app/te/about" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="utf-8" />
      </Helmet>
      
      {/* Hidden SEO Structured Data */}
      <SEOStructuredData />
      
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        overflowX: 'hidden'
      }}>
        {/* Hidden SEO Text (for search engines only) */}
        <HiddenSEOText />
        
        <style>
          {`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
            }
            
            @keyframes gradient {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
            
            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            @keyframes pulse {
              0%, 100% {
                opacity: 1;
              }
              50% {
                opacity: 0.7;
              }
            }
            
            .animate-on-scroll {
              opacity: 0;
              transform: translateY(30px);
              transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .animate-on-scroll.animated {
              opacity: 1;
              transform: translateY(0);
            }
            
            .gradient-text {
              background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            
            .hover-scale {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .hover-scale:hover {
              transform: scale(1.03);
            }
            
            .hover-lift {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .hover-lift:hover {
              transform: translateY(-5px);
            }
            
            .backdrop-blur {
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
            }
            
            .shadow-soft {
              box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
            }
            
            .shadow-hover {
              transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .shadow-hover:hover {
              box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.15);
            }
            
            .animate-gradient {
              background-size: 200% 200%;
              animation: gradient 3s ease infinite;
            }
            
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
            
            .animate-pulse-slow {
              animation: pulse 2s ease-in-out infinite;
            }
            
            .container {
              width: 100%;
              max-width: 1280px;
              margin: 0 auto;
              
            }
            
            @media (min-width: 640px) {
              .container {
                padding: 0 1.5rem;
              }
            }
            
            @media (min-width: 1024px) {
              .container {
                padding: 0 2rem;
              }
            }
            
            .grid-1 {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            
            .grid-2 {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            
            .grid-3 {
              display: grid;
              grid-template-columns: 1fr;
              gap: 3.3rem;
            }
            
            .grid-4 {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 1.5rem;
            }
            
            @media (min-width: 768px) {
              .grid-2 {
                grid-template-columns: repeat(2, 1fr);
              }
              
              .grid-3 {
                grid-template-columns: repeat(2, 1fr);
              }
              
              .grid-4 {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            
            @media (min-width: 1024px) {
              .grid-3 {
                grid-template-columns: repeat(3, 1fr);
              }
              
              .grid-4 {
                grid-template-columns: repeat(4, 1fr);
              }
            }
            
            .text-center {
              text-align: center;
            }
            
            .text-left {
              text-align: left;
            }
            
            .text-right {
              text-align: right;
            }
            
            .flex {
              display: flex;
            }
            
            .flex-col {
              flex-direction: column;
            }
            
            .items-center {
              align-items: center;
            }
            
            .justify-center {
              justify-content: center;
            }
            
            .justify-between {
              justify-content: space-between;
            }
            
            .gap-2 {
              gap: 0.5rem;
            }
            
            .gap-4 {
              gap: 1rem;
            }
            
            .gap-6 {
              gap: 1.5rem;
            }
            
            .gap-8 {
              gap: 2rem;
            }
            
            .p-4 {
              padding: 1rem;
            }
            
            .p-6 {
              padding: 1.5rem;
            }
            
            .p-8 {
              padding: 2rem;
            }
            
            .m-auto {
              margin: auto;
            }
            
            .mb-2 {
              margin-bottom: 0.5rem;
            }
            
            .mb-4 {
              margin-bottom: 1rem;
            }
            
            .mb-6 {
              margin-bottom: 1.5rem;
            }
            
            .mb-8 {
              margin-bottom: 2rem;
            }
            
            .mt-4 {
              margin-top: 1rem;
            }
            
            .mt-8 {
              margin-top: 2rem;
            }
            
            .mx-auto {
              margin-left: auto;
              margin-right: auto;
            }
            
            .w-full {
              width: 100%;
            }
            
            .max-w-sm {
              max-width: 24rem;
            }
            
            .max-w-md {
              max-width: 28rem;
            }
            
            .max-w-lg {
              max-width: 32rem;
            }
            
            .max-w-xl {
              max-width: 36rem;
            }
            
            .max-w-2xl {
              max-width: 42rem;
            }
            
            .max-w-3xl {
              max-width: 48rem;
            }
            
            .max-w-4xl {
              max-width: 56rem;
            }
            
            .max-w-5xl {
              max-width: 64rem;
            }
            
            .max-w-6xl {
              max-width: 72rem;
            }
            
            .rounded-lg {
              border-radius: 0.5rem;
            }
            
            .rounded-xl {
              border-radius: 0.75rem;
            }
            
            .rounded-2xl {
              border-radius: 1rem;
            }
            
            .rounded-3xl {
              border-radius: 1.5rem;
            }
            
            .rounded-full {
              border-radius: 9999px;
            }
            
            .bg-white {
              background-color: white;
            }
            
            .bg-blue-50 {
              background-color: #eff6ff;
            }
            
            .bg-purple-50 {
              background-color: #faf5ff;
            }
            
            .bg-gradient-to-r {
              background-image: linear-gradient(to right, var(--tw-gradient-stops));
            }
            
            .text-sm {
              font-size: 0.875rem;
            }
            
            .text-base {
              font-size: 1rem;
            }
            
            .text-lg {
              font-size: 1.125rem;
            }
            
            .text-xl {
              font-size: 1.25rem;
            }
            
            .text-2xl {
              font-size: 1.5rem;
            }
            
            .text-3xl {
              font-size: 1.875rem;
            }
            
            .text-4xl {
              font-size: 2.25rem;
            }
            
            .text-5xl {
              font-size: 3rem;
            }
            
            .text-6xl {
              font-size: 3.75rem;
            }
            
            .font-light {
              font-weight: 300;
            }
            
            .font-normal {
              font-weight: 400;
            }
            
            .font-medium {
              font-weight: 500;
            }
            
            .font-semibold {
              font-weight: 600;
            }
            
            .font-bold {
              font-weight: 700;
            }
            
            .text-gray-600 {
              color: #4b5563;
            }
            
            .text-gray-700 {
              color: #374151;
            }
            
            .text-gray-800 {
              color: #1f2937;
            }
            
            .text-gray-900 {
              color: #111827;
            }
            
            .text-blue-600 {
              color: #2563eb;
            }
            
            .text-purple-600 {
              color: #7c3aed;
            }
            
            .text-green-600 {
              color: #059669;
            }
            
            .leading-relaxed {
              line-height: 1.625;
            }
            
            .leading-tight {
              line-height: 1.25;
            }
            
            .transition-all {
              transition-property: all;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 300ms;
            }
            
            .duration-300 {
              transition-duration: 300ms;
            }
            
            .duration-500 {
              transition-duration: 500ms;
            }
            
            .cursor-pointer {
              cursor: pointer;
            }
            
            .hidden {
              display: none;
            }
            
            @media (min-width: 768px) {
              .md\:flex {
                display: flex;
              }
              
              .md\:grid-cols-2 {
                grid-template-columns: repeat(2, 1fr);
              }
              
              .md\:grid-cols-3 {
                grid-template-columns: repeat(3, 1fr);
              }
              
              .md\:grid-cols-4 {
                grid-template-columns: repeat(4, 1fr);
              }
              
              .md\:text-left {
                text-align: left;
              }
              
              .md\:text-center {
                text-align: center;
              }
              
              .md\:text-4xl {
                font-size: 2.25rem;
              }
              
              .md\:text-5xl {
                font-size: 3rem;
              }
              
              .md\:text-6xl {
                font-size: 3.75rem;
              }
              
              .md\:flex-row {
                flex-direction: row;
              }
              
              .md\:gap-8 {
                gap: 2rem;
              }
              
              .md\:p-8 {
                padding: 2rem;
              }
            }
            
            @media (min-width: 1024px) {
              .lg\:grid-cols-3 {
                grid-template-columns: repeat(3, 1fr);
              }
              
              .lg\:grid-cols-4 {
                grid-template-columns: repeat(4, 1fr);
              }
              
              .lg\:text-5xl {
                font-size: 3rem;
              }
              
              .lg\:text-6xl {
                font-size: 3.75rem;
              }
            }

            /* Enhanced Hover Effects */
            
            /* Subtle glow effect on hover */
            .hover-glow {
              transition: box-shadow 0.3s ease, transform 0.3s ease;
            }
            
            .hover-glow:hover {
              transform: translateY(-2px);
              box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15), 
                          0 0 20px rgba(139, 92, 246, 0.1);
            }
            
            /* Gradient border effect */
            .gradient-border-hover {
              position: relative;
              background: white;
              border-radius: 1rem;
            }
            
            .gradient-border-hover::before {
              content: '';
              position: absolute;
              top: -2px;
              left: -2px;
              right: -2px;
              bottom: -2px;
              background: linear-gradient(45deg, #3b82f6, #f5f5f5, #3b82f6);
              border-radius: 1rem;
              z-index: -1;
              opacity: 0;
              transition: opacity 0.3s ease;
              fontsize: 5vw;
            }
            
            .gradient-border-hover:hover::before {
              opacity: 1;
            }
            
            /* Icon animation on hover */
            .icon-hover-animate {
              transition: all 0.3s ease;
            }
            
            .icon-hover-animate:hover {
              transform: scale(1.1) rotate(5deg);
            }
            
            /* Shine effect */
            .shine-effect {
              position: relative;
              overflow: hidden;
            }
            
            .shine-effect::after {
              content: '';
              position: absolute;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              background: linear-gradient(
                to right,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.1) 50%,
                rgba(255, 255, 255, 0) 100%
              );
              transform: rotate(30deg);
              transition: transform 0.6s;
            }
            
            .shine-effect:hover::after {
              transform: translateX(100%) rotate(30deg);
            }
            
            /* Color shift on hover */
            .color-shift-hover {
              transition: all 0.3s ease;
            }
            
            .color-shift-hover:hover {
              background: linear-gradient(135deg, #3b82f6 0%, #d19aff 100%) !important;
            }
            
            .color-shift-hover:hover h3,
            .color-shift-hover:hover p {
              color: white !important;
            }
            
            /* Button hover effects */
            .btn-hover-effect {
              position: relative;
              overflow: hidden;
              transition: all 0.3s ease;
            }
            
            .btn-hover-effect::before {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              width: 0;
              height: 0;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.2);
              transform: translate(-50%, -50%);
              transition: width 0.6s, height 0.6s;
            }
            
            .btn-hover-effect:hover::before {
              width: 300px;
              height: 300px;
            }
            
            .btn-hover-effect:hover {
              transform: translateY(-3px);
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            }
            
            /* Card flip effect */
            .flip-card {
              perspective: 1000px;
              height: 180px;
            }
            
            .flip-card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              transition: transform 0.6s;
              transform-style: preserve-3d;
            }
            
            .flip-card:hover .flip-card-inner {
              transform: rotateY(180deg);
            }
            
            .flip-card-front, .flip-card-back {
              position: absolute;
              width: 100%;
              height: 100%;
              backface-visibility: hidden;
              border-radius: 0.75rem;
              padding: 1rem;
            }
            
            .flip-card-front {
              background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
            }
            
            .flip-card-back {
              background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
              transform: rotateY(180deg);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              color: white;
            }
            
            /* Pulse animation on hover */
            .hover-pulse {
              animation: pulse 2s infinite;
            }
            
            .hover-pulse:hover {
              animation: pulse 0.5s infinite;
            }
            
            /* Text reveal effect */
            .text-reveal {
              position: relative;
              overflow: hidden;
            }
            
            .text-reveal::after {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
              transition: left 0.5s ease;
            }
            
            .text-reveal:hover::after {
              left: 100%;
            }
            
            /* Border animation */
            .border-animate {
              position: relative;
            }
            
            .border-animate::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 2px;
              background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
              transform: scaleX(0);
              transform-origin: left;
              transition: transform 0.3s ease;
            }
            
            .border-animate:hover::before {
              transform: scaleX(1);
            }
            
            /* Blur in effect */
            .blur-hover {
              transition: filter 0.3s ease;
            }
            
            .blur-hover:hover {
              filter: blur(0.5px);
            }
            
            /* Multiple shadow layers on hover */
            .depth-hover {
              transition: all 0.3s ease;
            }
            
            .depth-hover:hover {
              transform: translateY(-5px);
              box-shadow: 
                0 5px 15px rgba(0, 0, 0, 0.1),
                0 15px 35px rgba(59, 130, 246, 0.1),
                0 0 0 1px rgba(59, 130, 246, 0.05);
            }
            
            /* Neon glow effect */
            .neon-hover {
              transition: all 0.3s ease;
            }
            
            .neon-hover:hover {
              box-shadow: 
                0 0 5px #3b82f6,
                0 0 10px #8b5cf6,
                0 0 15px #06b6d4,
                0 0 20px rgba(59, 130, 246, 0.5);
            }
            
            /* Underline animation */
            .underline-animate {
              position: relative;
              display: inline-block;
            }
            
            .underline-animate::after {
              content: '';
              position: absolute;
              bottom: -5px;
              left: 0;
              width: 0;
              height: 2px;
              background: linear-gradient(90deg, #3b82f6, #8b5cf6);
              transition: width 0.3s ease;
            }
            
            .underline-animate:hover::after {
              width: 100%;
            }
            
            /* Simple hover lift */
            .simple-hover-lift {
              transition: all 0.3s ease;
            }
            
            .simple-hover-lift:hover {
              transform: translateY(-5px);
              box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.15);
            }
          `}
        </style>

        {/* Hero Section */}
        <section style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)',
          paddingTop: '4rem',
          paddingBottom: '6rem'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
            animation: 'gradient 3s ease infinite'
          }} />
          
          <div className="container">
            <div className="animate-on-scroll" style={{
              textAlign: 'center',
              maxWidth: '64rem',
              margin: '0 auto',
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.7rem',
                background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: '9999px',
                marginBottom: '1.5rem',
                boxShadow: '0 20px 40px -15px rgba(59, 130, 246, 0.3)',
                animation: 'float 3s ease-in-out infinite'
              }}>
                <Icons.Building style={{ width: '2rem', height: '2rem', color: 'white' }} />
              </div>
              
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.2
              }}>
                <span>About </span>
                <span style={{ 
                  display: 'block',
                  fontSize: '2.3rem',
                  marginTop: '0.5rem',
                  color: '#111827'
                }}>
                  SMYVISION TECHNOLOGIES
                </span>
              </h1>
              
              <p style={{
                fontSize: '1rem',
                color: '#374151',
                marginBottom: '2rem',
                fontWeight: 300,
                maxWidth: '48rem',
                margin: '0 auto'
              }}>
                Building intelligent digital systems for businesses
              </p>
              
              <div className="animate-on-scroll gradient-border-hover hover-glow" style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1.5rem',
                padding: '1.2rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(229, 231, 235, 0.5)',
                animation: 'fadeInUp 0.6s ease-out 0.2s both',
                marginTop: '2rem'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <Icons.Sparkles style={{ 
                    width: '2rem', 
                    height: '2rem', 
                    color: '#f59e0b', 
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }} />
                  <h2 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#1f2937',
                    textAlign: 'center'
                  }}>
                    Where Vision Meets Digital Innovation
                  </h2>
                </div>
                <p style={{ 
                  fontSize: '1.125rem', 
                  color: '#4b5563', 
                  lineHeight: 1.75,
                  textAlign: 'center'
                }}>
                  Transforming ideas into reality through cutting-edge technology solutions. 
                  We specialize in creating robust, reliable digital systems that deliver 
                  real business value with perfect consistency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section style={{
          padding: '4rem 1rem',
          background: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)'
        }}>
          <div className="container">
            <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem',
                background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)',
                borderRadius: '9999px',
                marginBottom: '1.5rem',
                boxShadow: '0 20px 40px -15px rgba(139, 92, 246, 0.3)'
              }}>
                <Icons.History style={{ width: '2rem', height: '2rem', color: 'white' }} />
              </div>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#111827', 
                marginBottom: '0.5rem',
                lineHeight: 1.2
              }}>
                Our Story
              </h2>
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#4b5563', 
                maxWidth: '48rem', 
                margin: '0 auto',
                lineHeight: 1.6
              }}>
                From vision to reality - our journey of innovation and excellence
              </p>
            </div>

            <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
              {/* The Beginning */}
              <div className="animate-on-scroll hover-lift border-animate" style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid #f3f4f6',
                height: '100%',
                cursor: 'pointer',
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }} className="icon-hover-animate">
                  <Icons.Target style={{ width: '1.75rem', height: '1.75rem', color: '#2563eb' }} />
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold', 
                  color: '#111827', 
                  marginBottom: '0.75rem',
                  lineHeight: 1.3
                }}>The Beginning</h3>
                <p style={{ 
                  color: '#4b5563', 
                  lineHeight: 1.6,
                  fontSize: '0.95rem'
                }}>
                  SMYVISION TECHNOLOGIES was born from a simple vision: to make powerful 
                  digital tools accessible to every business. We started with a commitment 
                  to create solutions that work perfectly, every single time.
                </p>
              </div>

              {/* The Innovation */}
              <div className="animate-on-scroll hover-lift border-animate" style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid #f3f4f6',
                height: '100%',
                cursor: 'pointer'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }} className="icon-hover-animate">
                  <Icons.Lightning style={{ width: '1.75rem', height: '1.75rem', color: '#7c3aed' }} />
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold', 
                  color: '#111827', 
                  marginBottom: '0.75rem',
                  lineHeight: 1.3
                }}>The Innovation</h3>
                <p style={{ 
                  color: '#4b5563', 
                  lineHeight: 1.6,
                  fontSize: '0.95rem'
                }}>
                  We pioneered a revolutionary approach to chatbot development - building 
                  them visually by connecting nodes. This eliminated complex coding and 
                  made chatbot creation accessible to businesses of all sizes.
                </p>
              </div>

              {/* Today's Excellence */}
              <div className="animate-on-scroll hover-lift border-animate" style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid #f3f4f6',
                height: '100%',
                cursor: 'pointer'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }} className="icon-hover-animate">
                  <Icons.Trophy style={{ width: '1.75rem', height: '1.75rem', color: '#059669' }} />
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold', 
                  color: '#111827', 
                  marginBottom: '0.75rem',
                  lineHeight: 1.3
                }}>Today's Excellence</h3>
                <p style={{ 
                  color: '#4b5563', 
                  lineHeight: 1.6,
                  fontSize: '0.95rem'
                }}>
                  Today, we're recognized for creating robust, reliable digital solutions 
                  that work. Our node-based chatbots and automation systems deliver 
                  real business value with perfect consistency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section style={{
          padding: '1rem',
          background: 'linear-gradient(135deg, rgba(219, 234, 254, 0.3) 0%, rgba(186, 230, 253, 0.3) 100%)',
        }}>
          <div className="container">
            <div className="grid-2" style={{ 
              maxWidth: '72rem', 
              margin: '0 auto', 
              gap: '3.3rem',
              alignItems: 'stretch',
            }}>
              {/* Mission */}
              <div className="animate-on-scroll hover-scale color-shift-hover" style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 20px 40px -15px rgb(0, 17, 255)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '1rem',
                  flex: '0 0 auto'
                }}>
                  <div style={{
                    background: 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)',
                    padding: '0.75rem',
                    borderRadius: '0.75rem',
                    marginRight: '1rem',
                    flexShrink: 0
                  }} className="icon-hover-animate">
                    <Icons.Target style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
                  </div>
                  <h2 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#111827',
                    lineHeight: 1.3
                  }}>Our Mission</h2>
                </div>
                <p style={{ 
                  fontSize: '1rem', 
                  color: '#4b5563', 
                  lineHeight: 1.6,
                  flex: '1 1 auto'
                }}>
                  To empower businesses with practical, reliable digital solutions that deliver 
                  real results. We focus on creating tools that work perfectly every time, 
                  making technology simple and effective.
                </p>
              </div>

              {/* Vision */}
              <div className="animate-on-scroll hover-scale color-shift-hover" style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 20px 40px -15px rgb(0, 17, 255)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '1rem',
                  flex: '0 0 auto'
                }}>
                  <div style={{
                    background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)',
                    padding: '0.75rem',
                    borderRadius: '0.75rem',
                    marginRight: '1rem',
                    flexShrink: 0
                  }} className="icon-hover-animate">
                    <Icons.Vision style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
                  </div>
                  <h2 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#111827',
                    lineHeight: 1.3
                  }}>Our Vision</h2>
                </div>
                <p style={{ 
                  fontSize: '1rem', 
                  color: '#4b5563', 
                  lineHeight: 1.6,
                  flex: '1 1 auto'
                }}>
                  To become the most trusted digital partner for businesses who value 
                  reliability, precision, and results. We envision a world where every 
                  business can have smart digital tools that work exactly as intended.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section style={{ 
          padding: '4rem 1rem', 
          background: 'white',
          overflow: 'hidden'
        }}>
          <div className="container">
            <div className="animate-on-scroll" style={{ 
              textAlign: 'center', 
              marginBottom: '3rem',
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem',
                background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
                borderRadius: '9999px',
                marginBottom: '1.5rem',
                boxShadow: '0 20px 40px -15px rgba(16, 185, 129, 0.3)'
              }}>
                <Icons.Automation style={{ width: '2rem', height: '2rem', color: 'white' }} />
              </div>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#0051ff', 
                marginBottom: '0.5rem',
                lineHeight: 1.2
              }}>
                Our Core Services
              </h2>
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#4b5563', 
                lineHeight: 1.6
              }}>
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>

            <div className="grid-3" style={{ 
              maxWidth: '72rem', 
              margin: '0 auto',
              alignItems: 'stretch'
            }}>
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll hover-scale shine-effect hover-glow" 
                  data-delay={index * 100}
                  style={{
                    position: 'relative',
                    background: 'white',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    border: '1px solid #f3f4f6',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    background: service.color,
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0
                  }} className="icon-hover-animate">
                    {service.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    color: '#111827', 
                    marginBottom: '0.75rem',
                    lineHeight: 1.3,
                    flex: '0 0 auto'
                  }}>{service.title}</h3>
                  <p style={{ 
                    color: '#4b5563', 
                    marginBottom: '1rem',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                    flex: '1 1 auto'
                  }}>{service.description}</p>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: 0,
                    flex: '0 0 auto'
                  }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        color: '#374151', 
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem'
                      }}>
                        <div style={{ 
                          width: '1rem', 
                          height: '1rem', 
                          color: service.color.split(' ')[1],
                          marginRight: '0.5rem',
                          marginTop: '0.125rem',
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {feature.icon}
                        </div>
                        <span style={{ lineHeight: 1.4 }}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revolutionary Chatbot Approach */}
        <section style={{
          padding: '4rem 1rem',
          background: 'linear-gradient(135deg, rgba(245, 243, 255, 0.3) 0%, rgba(253, 242, 248, 0.3) 100%)'
        }}>
          <div className="container">
            <div className="animate-on-scroll" style={{ 
              textAlign: 'center', 
              marginBottom: '3rem',
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#111827', 
                marginBottom: '0.5rem',
                lineHeight: 1.2
              }}>
                Our Revolutionary Chatbot Approach
              </h2>
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#4b5563', 
                lineHeight: 1.6
              }}>
                Visual, precise, and completely under your control
              </p>
            </div>

            <div className="grid-3" style={{ 
              maxWidth: '72rem', 
              margin: '0 auto', 
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              <div className="animate-on-scroll blur-hover" style={{ 
                textAlign: 'center',
                background: 'white',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  boxShadow: '0 10px 30px -15px rgba(59, 130, 246, 0.3)'
                }} className="icon-hover-animate">
                  <Icons.Nodes style={{ width: '2rem', height: '2rem', color: 'white' }} />
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold', 
                  color: '#111827', 
                  marginBottom: '0.5rem',
                  lineHeight: 1.3
                }}>Visual Node Building</h3>
                <p style={{ 
                  color: '#4b5563',
                  fontSize: '0.95rem',
                  lineHeight: 1.6
                }}>
                  Build chatbots by visually connecting nodes. Each node represents a conversation 
                  piece, making chatbot creation as simple as connecting the dots. No coding required.
                </p>
              </div>

              <div className="animate-on-scroll blur-hover" style={{ 
                textAlign: 'center',
                background: 'white',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  boxShadow: '0 10px 30px -15px rgba(139, 92, 246, 0.3)'
                }} className="icon-hover-animate">
                  <Icons.Shield style={{ width: '2rem', height: '2rem', color: 'white' }} />
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold', 
                  color: '#111827', 
                  marginBottom: '0.5rem',
                  lineHeight: 1.3
                }}>Precision Conversations</h3>
                <p style={{ 
                  color: '#4b5563',
                  fontSize: '0.95rem',
                  lineHeight: 1.6
                }}>
                  Our chatbots deliver exactly what you design. Every response is precisely 
                  crafted, ensuring consistent, reliable conversations that follow your exact business logic.
                </p>
              </div>

              <div className="animate-on-scroll blur-hover" style={{ 
                textAlign: 'center',
                background: 'white',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  boxShadow: '0 10px 30px -15px rgba(16, 185, 129, 0.3)'
                }} className="icon-hover-animate">
                  <Icons.Refresh style={{ width: '2rem', height: '2rem', color: 'white' }} />
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold', 
                  color: '#111827', 
                  marginBottom: '0.5rem',
                  lineHeight: 1.3
                }}>Complete Control</h3>
                <p style={{ 
                  color: '#4b5563',
                  fontSize: '0.95rem',
                  lineHeight: 1.6
                }}>
                  Need to update your chatbot? Just rearrange the nodes! You have complete 
                  control over every conversation path. Your chatbot evolves with your business.
                </p>
              </div>
            </div>

            {/* Advantages */}
            <div className="animate-on-scroll simple-hover-lift" style={{
              background: 'white',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
              maxWidth: '64rem',
              margin: '0 auto'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                textAlign: 'center', 
                color: '#111827', 
                marginBottom: '1.5rem'
              }}>
                The SMYVISION Advantage
              </h3>
              <div className="grid-4" style={{ gap: '1rem' }}>
                {advantages.map((advantage, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    textAlign: 'center', 
                    padding: '0.75rem'
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      marginBottom: '0.5rem'
                    }} className="icon-hover-animate">
                      {advantage.icon}
                    </div>
                    <span style={{ 
                      fontWeight: 600, 
                      color: '#1f2937',
                      fontSize: '0.875rem',
                      lineHeight: 1.4
                    }}>{advantage.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{
          padding: '6rem 2rem',
          background: 'linear-gradient(90deg, #94a8ff 0%, #00949e 100%)',
          color: 'white',
          borderRadius: '3vw',
        }}>
          <div className="container">
            <div className="grid-4" style={{ 
              maxWidth: '72rem', 
              margin: '0 auto', 
              gap: '1.5rem'
            }}>
              {stats.map((stat, index) => (
                <div key={index} className="animate-on-scroll depth-hover simple-hover-lift" style={{ 
                  textAlign: 'center',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    padding: '1rem',
                    borderRadius: '1rem',
                    transition: 'background-color 0.3s ease',
                    height: '95%'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      marginBottom: '0.75rem' 
                    }} className="icon-hover-animate">
                      {stat.icon}
                    </div>
                    <div style={{ 
                      fontSize: '2rem', 
                      fontWeight: 'bold', 
                      marginBottom: '0.25rem',
                      lineHeight: 1
                    }}>{stat.value}</div>
                    <div style={{ 
                      fontSize: '0.875rem', 
                      fontWeight: 600, 
                      marginBottom: '0.25rem',
                      lineHeight: 1.2
                    }}>{stat.label}</div>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      opacity: 0.9,
                      lineHeight: 1.4
                    }}>{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{ 
          padding: '4rem', 
          background: 'white',
          overflow: 'hidden',
          
        }}>
          <div className="container">
            <div className="animate-on-scroll" style={{ 
              textAlign: 'center', 
              marginBottom: '3rem',
              maxWidth: '48rem',
              margin: '0 auto',
              
            }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#111827', 
                marginBottom: '0.5rem',
                lineHeight: 1.2
              }}>
                Why Choose Us?
              </h2>
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#4b5563', 
                lineHeight: 1.6
              }}>
                What makes us the preferred choice for digital transformation
              </p>
            </div>

            <div className="grid-4" style={{ 
              maxWidth: '72rem', 
              margin: '0 auto', 
              gap: '2.5rem',
              
            }}>
              {[
                { icon: <Icons.DollarSign />, title: "Transparent Pricing", desc: "Clear pricing with no hidden costs" },
                { icon: <Icons.Lightning />, title: "Rapid Deployment", desc: "Visual building for faster delivery" },
                { icon: <Icons.Headphones />, title: "Continuous Support", desc: "24/7 support and maintenance" },
                { icon: <Icons.Shield />, title: "Guaranteed Reliability", desc: "Solutions that work perfectly every time" }
              ].map((item, index) => (
                <div key={index} className="animate-on-scroll flip-card" style={{
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s ease',
                  border: '1px solid #002fff',
                  height: '200px',
                  cursor: 'pointer'
                }}>
                    <div className="flip-card-front" style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.75rem'
                      }} className="icon-hover-animate">
                        {item.icon}
                      </div>
                      <h3 style={{ 
                        fontSize: '1rem', 
                        fontWeight: 'bold', 
                        textAlign: 'center', 
                        color: '#111827', 
                        marginBottom: '0.25rem',
                        lineHeight: 1.3
                      }}>{item.title}</h3>
                      <p style={{ 
                        color: '#4b5563', 
                        textAlign: 'center', 
                        fontSize: '0.75rem',
                        lineHeight: 1.4
                      }}>{item.desc}</p>
                    </div>
                    <div className="flip-card-back">
                      <div style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.2)'
                      }}>
                        {item.icon}
                      </div>
                      <h3 style={{ 
                        fontSize: '1rem', 
                        fontWeight: 'bold', 
                        textAlign: 'center', 
                        marginBottom: '0.25rem',
                        lineHeight: 1.3
                      }}>{item.title}</h3>
                      <p style={{ 
                        textAlign: 'center', 
                        fontSize: '0.75rem',
                        lineHeight: 1.4,
                        padding: '0 0.5rem'
                      }}>Learn more about our {item.title.toLowerCase()}</p>
                    </div>
                  
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section style={{
          padding: '4rem 1rem',
          background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)'
        }}>
          <div className="container">
            <div className="animate-on-scroll" style={{ 
              textAlign: 'center', 
              marginBottom: '3rem',
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#111827', 
                marginBottom: '0.5rem',
                lineHeight: 1.2
              }}>
                Our Core Values
              </h2>
            </div>

            <div className="grid-4" style={{ 
              maxWidth: '72rem', 
              margin: '0 auto', 
              gap: '1rem'
            }}>
              {values.map((value, index) => (
                <div key={index} className="animate-on-scroll hover-lift neon-hover" style={{
                  background: 'white',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  boxShadow: '0 10px 25px -10px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  border: '1px solid #f3f4f6',
                 
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.75rem',
                    flexShrink: 0
                  }} className="icon-hover-animate">
                    {value.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1rem', 
                    fontWeight: 'bold', 
                    color: '#111827', 
                    marginBottom: '0.5rem',
                    lineHeight: 1.3,
                    flex: '0 0 auto'
                  }}>{value.title}</h3>
                  <p style={{ 
                    color: '#4b5563',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    flex: '1 1 auto'
                  }}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '4rem 1rem',
          background: 'linear-gradient(90deg, #94a8ff 0%, #00949e 100%)',
          color: 'white',
          overflow: 'hidden',
          borderRadius:'4vw'
        }}>
          <div className="container">
            <div className="animate-on-scroll text-reveal" style={{ 
              textAlign: 'center', 
              maxWidth: '64rem', 
              margin: '0 auto',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                marginBottom: '1.5rem'
              }}>
                <Icons.Sparkles style={{ width: '2rem', height: '2rem' }} />
              </div>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                lineHeight: 1.2
              }}>
                Ready to Experience Simpler Technology?
              </h2>
              <p style={{ 
                fontSize: '1.125rem', 
                opacity: 0.9, 
                marginBottom: '2rem', 
                maxWidth: '32rem', 
                margin: '0 auto',
                lineHeight: 1.6
              }}>
                Join businesses who've discovered that technology doesn't have to be 
                complicated to be powerful.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '2rem'
              }}>
                <button 
                  onClick={handleStartProject}
                  className="btn-hover-effect"
                  style={{
                    background: 'white',
                    color: '#3b82f6',
                    fontWeight: 600,
                    padding: '0.875rem 1.75rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
                    fontSize: '1rem',
                    width: '100%',
                    maxWidth: '16rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  Start Your Project
                  <Icons.ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
                </button>
                <button 
                  onClick={handleExploreServices}
                  className="btn-hover-effect"
                  style={{
                    background: 'transparent',
                    border: '2px solid white',
                    color: 'white',
                    fontWeight: 600,
                    padding: '0.875rem 1.75rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
                    fontSize: '1rem',
                    width: '100%',
                    maxWidth: '16rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  Explore Services
                </button>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '1.5rem',
                maxWidth: '24rem',
                margin: '0 auto'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <Icons.Message style={{ 
                    width: '1.25rem', 
                    height: '1.25rem', 
                    marginRight: '0.5rem',
                    flexShrink: 0
                  }} />
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: 600,
                    textAlign: 'center'
                  }}>WhatsApp Consultation</h3>
                </div>
                <p style={{ 
                  marginBottom: '1rem',
                  fontSize: '0.95rem',
                  lineHeight: 1.5
                }}>Have questions? Chat with us instantly</p>
                <a 
                  href="https://wa.me/918500352005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-hover-effect hover-pulse"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#22c55e',
                    color: 'white',
                    fontWeight: 600,
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s ease',
                    margin: '0 auto',
                    fontSize: '0.95rem',
                    width: '100%',
                    maxWidth: '12rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Icons.Message style={{ width: '1.125rem', height: '1.125rem', marginRight: '0.5rem' }} />
                  Chat on WhatsApp
                </a>
                <p style={{ 
                  marginTop: '0.75rem', 
                  fontSize: '0.875rem', 
                  opacity: 0.8,
                  lineHeight: 1.5
                }}>
                  Or call us: <strong>+91 85003 52005</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About SMYVISION TECHNOLOGIES",
            "description": "Learn about SMYVISION TECHNOLOGIES, a leading web development company in Vijayawada, Hyderabad, and Bangalore offering website development, automation solutions, and chatbot services.",
            "url": "https://smyvisiontechnologies.vercel.app/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "SMYVISION TECHNOLOGIES",
              "description": "Top web development company in Vijayawada, Hyderabad, and Bangalore",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vijayawada",
                "addressRegion": "Andhra Pradesh",
                "addressCountry": "India"
              },
              "serviceArea": {
                "@type": "Place",
                "name": "Vijayawada, Hyderabad, Bangalore, Andhra Pradesh, Telangana, Karnataka"
              }
            }
          })
        }} />
      </div>
    </>
  );
};

export default About;