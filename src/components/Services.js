import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    // SEO Meta tags
    const metaTags = [
      { name: 'description', content: 'SMYVISION TECHNOLOGIES provides professional website development and automation solutions. Transform your business with our expert technology services and digital solutions.' },
      { name: 'keywords', content: 'website development, automation solutions, technology services, web development, business automation, digital transformation, SMYVISION' },
      { property: 'og:title', content: 'Technology Services | SMYVISION TECHNOLOGIES' },
      { property: 'og:description', content: 'Professional website development and automation solutions for businesses of all sizes.' },
      { property: 'og:type', content: 'website' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) meta.name = tag.name;
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    document.title = 'Technology Services | SMYVISION TECHNOLOGIES';

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
        {/* Hero Section */}
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

        {/* Expert Services */}
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
            <h2 style={{
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
              <motion.div
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
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
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
            <h2 style={{
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

        {/* Our Process */}
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
            <h2 style={{
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

        {/* CTA Section */}
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

        {/* FAQ Section */}
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
            <h2 style={{
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
      </div>
    </div>
  );
}

export default Services;