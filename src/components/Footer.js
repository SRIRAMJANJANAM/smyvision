import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaChevronRight, 
  FaArrowUp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaRocket,
  FaChartLine,
  FaLightbulb,
  FaShieldAlt
} from 'react-icons/fa';
import { FiMail, FiCheckCircle } from 'react-icons/fi';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Add your subscription logic here
      console.log('Subscribed:', email);
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'Website Development', path: '/services', icon: <FaRocket /> },
    { name: 'Business Automation', path: '/services', icon: <FaLightbulb /> },
    // { name: 'Digital Marketing', path: '/services/marketing', icon: <FaChartLine /> },
    // { name: 'Security Solutions', path: '/services/security', icon: <FaShieldAlt /> }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/share/1AAbW51BTs/', label: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com/smyvisiontech', label: 'Twitter' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com/company/smyvisiontechnologies', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://instagram.com/smyvisiontechnologies', label: 'Instagram' },
    { icon: <FaYoutube />, url: 'https://youtube.com/@smyvisiontechnologies', label: 'YouTube' }
  ];

  return (
    <footer style={styles.footer}>
      {/* Newsletter Section */}
      <div style={styles.newsletterSection}>
        <div style={styles.newsletterContent}>
          <div style={styles.newsletterText}>
            <h3 style={styles.newsletterTitle}>
              <FiMail style={styles.newsletterIcon} />
              Stay Ahead with Digital Insights
            </h3>
            <p style={styles.newsletterDescription}>
              Subscribe to our newsletter for tech trends, business growth tips, and exclusive offers.
            </p>
          </div>
          <form onSubmit={handleSubscribe} style={styles.newsletterForm}>
            <div style={styles.inputWrapper}>
              <input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.emailInput}
                required
              />
              <button 
                type="submit" 
                style={styles.subscribeButton}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {subscribed ? <FiCheckCircle /> : 'Subscribe'}
              </button>
            </div>
            {subscribed && (
              <div style={styles.successMessage}>
                ✓ Thank you for subscribing! Check your email.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div style={styles.mainContent}>
        {/* Company Info */}
        <div style={styles.section}>
          <div style={styles.companyInfo}>
            <h2 style={styles.companyName}>
              <span style={styles.gradientText}>SMYVISION</span>
              <span style={styles.companySubtitle}>TECHNOLOGIES</span>
            </h2>
            <p style={styles.companyTagline}>
              Pioneering the future with innovative technology solutions that transform businesses and drive digital excellence worldwide.
            </p>
            <div style={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  style={styles.socialIcon}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Quick Navigation</h3>
          <nav aria-label="Footer Navigation">
            <ul style={styles.list}>
              {quickLinks.map((link, index) => (
                <li key={index} style={styles.listItem}>
                  <FaChevronRight style={styles.chevron} />
                  <Link
                    to={link.path}
                    style={styles.link}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.paddingLeft = '15px';
                      e.currentTarget.style.color = styles.colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.paddingLeft = '8px';
                      e.currentTarget.style.color = styles.colors.text;
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Services */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Our Expertise</h3>
          <ul style={styles.list}>
            {services.map((service, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.serviceIcon}>{service.icon}</span>
                <Link
                  to={service.path}
                  style={styles.link}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = '15px';
                    e.currentTarget.style.color = styles.colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = '8px';
                    e.currentTarget.style.color = styles.colors.text;
                  }}
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Get In Touch</h3>
          <ul style={styles.contactList}>
            <li style={styles.contactItem}>
              <FaEnvelope style={styles.contactIcon} />
              <a 
                href="mailto:smyvisiontechnologies@gmail.com"
                style={styles.contactLink}
              >
                smyvisiontechnologies@gmail.com
              </a>
            </li>
            <li style={styles.contactItem}>
              <FaPhone style={styles.contactIcon} />
              <a 
                href="tel:+918500352005"
                style={styles.contactLink}
              >
                +91 8500352005
              </a>
            </li>
            <li style={styles.contactItem}>
              <FaMapMarkerAlt style={styles.contactIcon} />
              <span style={styles.contactText}>India • Global Services</span>
            </li>
            <li style={styles.contactItem}>
              <FaClock style={styles.contactIcon} />
              <span style={styles.contactText}>Mon - Fri: 9AM - 7PM IST</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <div style={styles.bottomContent}>
          <div style={styles.copyrightSection}>
            <p style={styles.copyright}>
              © {new Date().getFullYear()} SMYVISION TECHNOLOGIES. All rights reserved.
            </p>
            <p style={styles.seoText}>
              Digital Transformation • Web Development • Business Automation • SEO Optimization • Chatbots
            </p>
          </div>
          <div style={styles.legalLinks}>
            <Link to="/" style={styles.legalLink}>Privacy Policy</Link>
            <span style={styles.separator}>•</span>
            <Link to="/" style={styles.legalLink}>Terms of Service</Link>
            <span style={styles.separator}>•</span>
            <a
  href="/sitemap.xml"
  style={styles.legalLink}
  target="_blank"
  rel="noopener noreferrer"
>
  Sitemap
</a>

          </div>
        </div>
      </div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SMYVISION Technologies",
            "url": "https://smyvision.vercel.app",
            "logo": "https://smyvision.vercel.app/logo.png",
            "description": "Leading technology solutions provider specializing in digital transformation, web development, and business automation.",
            "email": "smyvisiontechnologies@gmail.com",
            "telephone": "+91-8500352005",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India"
            },
            "openingHours": "Mo-Fr 09:00-19:00",
            "sameAs": socialLinks.map(s => s.url)
          })
        }}
      />

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.scrollTop}
          aria-label="Scroll to top"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(59, 130, 246, 0.3)';
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}

// Color palette for light theme
const colors = {
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  accent: '#10b981',
  background: '#ffffff',
  surface: '#f8fafc',
  text: '#334155',
  lightText: '#64748b',
  border: '#e2e8f0',
  gradientStart: '#3b82f6',
  gradientEnd: '#8b5cf6'
};

const styles = {
  colors,
  footer: {
    backgroundColor: colors.background,
    color: colors.text,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    position: 'relative',
    overflow: 'hidden',
    borderTop: `1px solid ${colors.border}`,
    boxShadow: '0 -2px 30px rgba(0, 0, 0, 0.05)'
  },
  newsletterSection: {
    backgroundColor: colors.surface,
    padding: '50px 20px',
    borderBottom: `1px solid ${colors.border}`
  },
  newsletterContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '30px'
  },
  newsletterText: {
    flex: '1',
    minWidth: '300px'
  },
  newsletterTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: colors.text,
    margin: '0 0 10px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  newsletterIcon: {
    color: colors.primary,
    fontSize: '1.8rem'
  },
  newsletterDescription: {
    fontSize: '1rem',
    color: colors.lightText,
    lineHeight: '1.6',
    margin: '0'
  },
  newsletterForm: {
    flex: '1',
    minWidth: '300px'
  },
  inputWrapper: {
    display: 'flex',
    gap: '10px',
    position: 'relative'
  },
  emailInput: {
    flex: '1',
    padding: '15px 20px',
    fontSize: '1rem',
    border: `2px solid ${colors.border}`,
    borderRadius: '12px',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: colors.background,
    color: colors.text,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
  },
  subscribeButton: {
    padding: '15px 30px',
    backgroundColor: colors.primary,
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: `0 4px 15px ${colors.primary}40`
  },
  successMessage: {
    marginTop: '10px',
    color: colors.accent,
    fontSize: '0.9rem',
    animation: 'fadeIn 0.5s ease'
  },
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px'
  },
  
  companyInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  companyName: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  gradientText: {
    fontSize: '2rem',
    fontWeight: '800',
    background: `linear-gradient(135deg, ${colors.gradientStart}, ${colors.gradientEnd})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: '1'
  },
  companySubtitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: colors.lightText,
    letterSpacing: '2px',
    textTransform: 'uppercase'
  },
  companyTagline: {
    fontSize: '0.95rem',
    color: colors.lightText,
    lineHeight: '1.6',
    margin: '0'
  },
  socialLinks: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: colors.surface,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.text,
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: `1px solid ${colors.border}`
  },
  sectionTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: colors.text,
    margin: '0 0 20px 0',
    position: 'relative',
    paddingBottom: '10px'
  },
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    transition: 'transform 0.3s ease'
  },
  chevron: {
    color: colors.primary,
    fontSize: '0.8rem',
    transition: 'transform 0.3s ease'
  },
  serviceIcon: {
    color: colors.primary,
    fontSize: '0.9rem',
    marginRight: '10px',
    opacity: '0.8'
  },
  link: {
    color: colors.text,
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    paddingLeft: '8px'
  },
  contactList: {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '18px',
    transition: 'transform 0.3s ease',
    fontWeight:'600',
  },
  contactIcon: {
    color: colors.primary,
    fontSize: '1rem',
    marginRight: '12px',
    marginTop: '2px',
    flexShrink: '0'
  },
  contactLink: {
    color: colors.text,
    textDecoration: 'none',
    fontSize: '0.88rem',
    transition: 'color 0.3s ease',
    wordBreak: 'break-word'
  },
  contactText: {
    fontSize: '0.95rem',
    color: colors.lightText
  },
  bottomBar: {
    backgroundColor: colors.surface,
    padding: '25px 0',
    borderTop: `1px solid ${colors.border}`
  },
  bottomContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px'
  },
  copyrightSection: {
    flex: '1',
    minWidth: '300px',
  },
  copyright: {
    fontSize: '0.9rem',
    color: colors.lightText,
    margin: '0 0 8px 0',
    fontWeight: 'bolder'
  },
  seoText: {
    fontSize: '0.85rem',
    color: colors.lightText,
    margin: '0',
    opacity: '0.8'
  },
  legalLinks: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  legalLink: {
    color: colors.lightText,
    textDecoration: 'none',
    fontSize: '0.85rem',
    transition: 'color 0.3s ease'
  },
  separator: {
    color: colors.border,
    fontSize: '0.85rem'
  },
  scrollTop: {
    position: 'fixed',
    bottom: '30px',
    left: '30px',
    backgroundColor: colors.primary,
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    cursor: 'pointer',
    boxShadow: `0 5px 15px ${colors.primary}30`,
    transition: 'all 0.3s ease',
    zIndex: '1000'
  }
};

// Add animations and responsive styles
const globalStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .footer-link:hover .footer-chevron {
    transform: translateX(5px);
  }

  .footer-social-icon:hover {
    background: linear-gradient(135deg, ${colors.gradientStart}, ${colors.gradientEnd});
    color: white !important;
    transform: translateY(-5px) rotate(5deg);
  }

  .footer-contact-item:hover {
    transform: translateX(10px);
  }

  .footer-contact-link:hover {
    color: ${colors.primary} !important;
  }

  .footer-legal-link:hover {
    color: ${colors.primary} !important;
  }

  @media (max-width: 768px) {
    .footer-newsletter-content {
      flex-direction: column;
      text-align: center;
    }
    
    .footer-input-wrapper {
      flex-direction: column;
    }
    
    .footer-subscribe-button {
      width: 100%;
    }
    
    .footer-main-content {
      grid-template-columns: 1fr;
      text-align: center;
    }
    
    .footer-list-item {
      justify-content: center;
    }
    
    .footer-contact-item {
      justify-content: center;
    }
    
    .footer-bottom-content {
      flex-direction: column;
      text-align: center;
      gap: 15px;
    }
    
    .footer-scroll-top {
      bottom: 20px;
      right: 20px;
      width: 45px;
      height: 45px;
    }
  }

  @media (max-width: 480px) {
    .footer-section {
      padding: 0 10px;
    }
    
    .footer-social-links {
      justify-content: center;
    }
    
    .footer-legal-links {
      justify-content: center;
    }
  }
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = globalStyles;
  document.head.appendChild(styleSheet);
}

export default Footer;