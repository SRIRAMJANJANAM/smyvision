import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced SVG Icons
const LightIcons = {
  Whatsapp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.507 14.307l-.009.075c-.403 2.228-1.516 3.186-2.038 3.641-.639.562-1.082.602-1.61.561-.427-.035-1.368-.265-2.618-.985-2.417-1.386-3.972-4.726-4.093-4.944-.03-.056-.24-.408-.24-.776s.135-.549.24-.75c.12-.192.359-.447.6-.447s.382.005.547.288c.165.284.57 1.049.62 1.124.09.151.135.318.015.525-.105.195-.135.318-.27.477-.12.151-.256.333-.365.446-.12.124-.247.26-.106.509.12.225.539.97 1.155 1.569.788.774 1.452 1.029 1.687 1.149.18.09.391.075.541-.045.165-.135.72-.883.914-1.185s.39-.24.6-.135c.225.105 1.408.833 1.65.986.24.15.39.225.45.345.06.135.06.765-.135 1.515z"/>
      <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.496 0 .145 5.25.145 11.7c0 2.096.6 4.14 1.74 5.945L.06 24l6.84-1.801c1.74.96 3.72 1.471 5.76 1.471h.005c6.54 0 11.895-5.251 11.895-11.7 0-3.135-1.245-6.075-3.48-8.296zM12.045 22.014c-1.845 0-3.6-.511-5.145-1.471l-.39-.24-3.975 1.051 1.05-3.84-.24-.39a10.684 10.684 0 01-1.65-5.685c0-5.775 4.74-10.5 10.59-10.5 2.79 0 5.4 1.096 7.35 3.075 1.95 1.98 3.03 4.621 3.03 7.426 0 5.775-4.74 10.5-10.59 10.5z" fill="#ffffff"/>
    </svg>
  ),
  Location: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  ),
  Briefcase: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  TrendingUp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  ),
  BookOpen: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  ),
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),
  Award: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  ),
  ExternalLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  ),
  ChevronDown: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  ),
  ChevronUp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
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
      {[...Array(10)].map((_, i) => (
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

function Careers() {
  const [openJob, setOpenJob] = useState(null);
  const [generalForm, setGeneralForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });
  const [generalFormErrors, setGeneralFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Google Sheet URL for job applications
  const GOOGLE_SHEET_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScel9n9kqUgJ2YbjxMoWTvZH3ZsMW1dzmSE_qgL5Q8gzLMWdg/viewform';

  // Job listings data
  const jobListings = [
    {
      id: 1,
      title: 'Business Development Executive',
      location: 'Remote',
      experience: 'Fresher',
      type: 'Internship',
      posted: '12 Jan, 2026',
      overview: 'We are looking for a motivated Business Development Executive to help grow our company by finding new clients, building strong relationships, and promoting our digital services. This role is ideal for someone who enjoys communication, sales, and business growth.',
      responsibilities: [
        'Identify and approach potential clients through calls, emails, and online platforms',
        'Understand client requirements and suggest suitable services',
        'Present company services clearly and professionally',
        'Follow up with leads and convert them into customers',
        'Maintain good relationships with existing clients',
        'Work closely with the technical and marketing teams',
        'Keep records of client interactions and sales activities',
        'Achieve monthly and quarterly business targets'
      ],
      skills: [
        'Good communication skills (English & local language preferred)',
        'Basic knowledge of sales, marketing, or business development',
        'Ability to understand client needs and explain services',
        'Confident in phone calls, meetings, and presentations',
        'Basic computer knowledge (Email, MS Excel, CRM tools)',
        'Self-motivated and goal-oriented attitude'
      ],
      benefits: [
        'Fixed salary + performance-based incentives',
        'Training and career growth opportunities',
        'Friendly and professional work environment',
        'Opportunity to work with modern digital technologies'
      ],
      howToApply: 'Interested candidates can apply through our website or contact us directly. Send your resume to smyvisiontechnologies@gmail.com with subject "Application for Business Development Executive".'
    },
    // {
    //   id: 2,
    //   title: 'Frontend Developer',
    //   location: 'Hybrid',
    //   experience: '1-3 Years',
    //   type: 'Full-time',
    //   posted: '15 Jan, 2026',
    //   overview: 'We are seeking a skilled Frontend Developer to create beautiful, responsive, and user-friendly web applications using modern technologies.',
    //   responsibilities: [
    //     'Develop responsive web applications using React.js',
    //     'Collaborate with UI/UX designers to implement designs',
    //     'Write clean, maintainable, and efficient code',
    //     'Optimize applications for maximum speed and scalability',
    //     'Implement responsive design principles',
    //     'Work with REST APIs and integrate third-party services'
    //   ],
    //   skills: [
    //     'Strong proficiency in React.js, HTML5, CSS3, JavaScript',
    //     'Experience with state management (Redux/Context API)',
    //     'Knowledge of responsive design principles',
    //     'Familiarity with version control (Git)',
    //     'Understanding of RESTful APIs',
    //     'Experience with testing frameworks'
    //   ],
    //   benefits: [
    //     'Competitive salary with performance bonuses',
    //     'Health insurance and wellness programs',
    //     'Remote work flexibility',
    //     'Learning and development budget',
    //     'Modern equipment and tools'
    //   ],
    //   howToApply: 'Submit your application through our portal with your portfolio and GitHub profile.'
    // },
    // {
    //   id: 3,
    //   title: 'Digital Marketing Specialist',
    //   location: 'Remote',
    //   experience: '2-4 Years',
    //   type: 'Full-time',
    //   posted: '18 Jan, 2026',
    //   overview: 'Join our marketing team to drive brand awareness, generate leads, and execute digital marketing campaigns across various channels.',
    //   responsibilities: [
    //     'Develop and execute digital marketing strategies',
    //     'Manage social media campaigns and content creation',
    //     'Optimize SEO and SEM strategies',
    //     'Analyze campaign performance and generate reports',
    //     'Collaborate with content creators and designers',
    //     'Manage email marketing campaigns'
    //   ],
    //   skills: [
    //     'Experience with digital marketing tools and platforms',
    //     'Strong analytical and data interpretation skills',
    //     'Knowledge of SEO, SEM, and social media marketing',
    //     'Content creation and copywriting skills',
    //     'Familiarity with marketing analytics tools',
    //     'Excellent communication and organizational skills'
    //   ],
    //   benefits: [
    //     'Performance-based incentives',
    //     'Flexible working hours',
    //     'Professional development opportunities',
    //     'Creative and dynamic work environment',
    //     'Monthly wellness allowance'
    //   ],
    //   howToApply: 'Send your resume and portfolio to smyvisiontechnologies@gmail.com'
    // }
  ];

  const stats = [
    { icon: <LightIcons.Users />, value: '1+', label: 'Open Positions' },
    { icon: <LightIcons.TrendingUp />, value: '100%', label: 'Growth Focused' },
    { icon: <LightIcons.Award />, value: '100%', label: 'Skill-Focused Roles'  }
  ];

  const benefits = [
    {
      icon: <LightIcons.TrendingUp />,
      title: 'Growth Opportunities',
      description: 'Fast-track your career with mentorship, training, and leadership opportunities'
    },
    {
      icon: <LightIcons.Clock />,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote options, and comprehensive wellness programs'
    },
    {
      icon: <LightIcons.BookOpen />,
      title: 'Learning Culture',
      description: 'Continuous learning budget for courses, certifications, and conferences'
    },
    {
      icon: <LightIcons.Zap />,
      title: 'Innovative Projects',
      description: 'Work on cutting-edge technologies and real-world digital transformation projects'
    }
  ];

  const validateGeneralForm = () => {
    const errors = {};
    
    if (!generalForm.fullName.trim()) {
      errors.fullName = 'Name is required';
    } else if (generalForm.fullName.trim().length < 2) {
      errors.fullName = 'Name must be at least 2 characters';
    }
    
    if (!generalForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(generalForm.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (generalForm.phone && !/^(\+91[\-\s]?)?[6-9]\d{9}$/.test(generalForm.phone)) {
      errors.phone = 'Please enter a valid Indian phone number';
    }
    
    if (!generalForm.position.trim()) {
      errors.position = 'Position of interest is required';
    }
    
    if (!generalForm.message.trim()) {
      errors.message = 'Please tell us about yourself';
    } else if (generalForm.message.trim().length < 10) {
      errors.message = 'Please provide more details (minimum 10 characters)';
    }
    
    return errors;
  };

  const handleGeneralFormSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateGeneralForm();
    if (Object.keys(errors).length > 0) {
      setGeneralFormErrors(errors);
      setSubmitMessage('Please fix the errors in the form.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Google Apps Script Web App URL for careers
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzMnbb23SiztJQgG-RL0WDP4z3Wldk0OYB1CjZQ2hzN_dm40NGsR8rPD9TS9K0PFKgo/exec'; // Replace with your careers script URL
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...generalForm,
          applicationType: 'General Application',
          timestamp: new Date().toISOString()
        }),
      });
      
      setSubmitMessage('Thank you! Your application has been submitted successfully. We will review it and get back to you soon.');
      
      // Reset form
      setGeneralForm({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
        resume: null
      });
      setGeneralFormErrors({});
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitMessage('There was an error submitting your application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGeneralInputChange = (e) => {
    const { name, value } = e.target;
    setGeneralForm(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (generalFormErrors[name]) {
      setGeneralFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleWhatsAppInquiry = () => {
    const message = `Interested in career opportunities at SMYVISION Technologies:
    
Name: ${generalForm.fullName || 'Not provided'}
Email: ${generalForm.email || 'Not provided'}
Phone: ${generalForm.phone || 'Not provided'}
Position of Interest: ${generalForm.position || 'General Inquiry'}

I would like to know more about career opportunities at your company.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/918500352005?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const handleApplyNow = (jobTitle) => {
    // Redirect to Google Sheet for job application
    window.open(GOOGLE_SHEET_URL, '_blank');
  };

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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              color: '#1e293b',
              marginBottom: '16px',
              fontWeight: '800',
              lineHeight: '1.2'
            }}
          >
            We're Hiring Talented Professionals
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
              lineHeight: '1.6'
            }}
          >
            Build the Future with Us. Join a team of innovators shaping the future of technology. 
            Work on cutting-edge projects that make a real impact.
          </motion.p>

          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(16px, 4vw, 30px)',
            flexWrap: 'wrap',
            marginTop: '40px'
          }}>
            {stats.map((stat, index) => (
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
                <div style={{
                  fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                  fontWeight: '800',
                  color: '#4f46e5',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  {stat.icon}
                  {stat.value}
                </div>
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

        {/* Current Opportunities Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          style={{ marginBottom: 'clamp(60px, 10vw, 100px)', width: '100%' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              color: '#1e293b',
              marginBottom: '16px',
              fontWeight: '700'
            }}>
              Current Opportunities
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
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Find your perfect role and grow with our dynamic team
            </p>
          </div>

          {/* Job Listings */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '800px',
            margin: '0 auto',
            width: '100%'
          }}>
            {jobListings.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer'
                }}
                onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
              >
                {/* Job Header */}
                <div style={{
                  padding: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '12px',
                      flexWrap: 'wrap'
                    }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        color: '#1e293b',
                        fontWeight: '700',
                        margin: 0
                      }}>
                        {job.title}
                      </h3>
                      <span style={{
                        background: '#4f46e5',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                      }}>
                        {job.type}
                      </span>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      gap: '20px',
                      flexWrap: 'wrap',
                      marginTop: '16px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <LightIcons.Location />
                        <span style={{ color: '#64748b', fontSize: '0.95rem' }}>{job.location}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <LightIcons.Briefcase />
                        <span style={{ color: '#64748b', fontSize: '0.95rem' }}>{job.experience}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <LightIcons.Calendar />
                        <span style={{ color: '#64748b', fontSize: '0.95rem' }}>Posted: {job.posted}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#4f46e5'
                  }}>
                    {openJob === job.id ? <LightIcons.ChevronUp /> : <LightIcons.ChevronDown />}
                  </div>
                </div>

                {/* Job Details (Dropdown) */}
                <AnimatePresence>
                  {openJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden', borderTop: '1px solid #e2e8f0' }}
                    >
                      <div style={{ padding: '32px' }}>
                        {/* Job Overview */}
                        <div style={{ marginBottom: '32px' }}>
                          <h4 style={{
                            fontSize: '1.1rem',
                            color: '#1e293b',
                            marginBottom: '12px',
                            fontWeight: '600'
                          }}>
                            Job Overview
                          </h4>
                          <p style={{
                            color: '#64748b',
                            lineHeight: '1.6'
                          }}>
                            {job.overview}
                          </p>
                        </div>

                        {/* Key Responsibilities */}
                        <div style={{ marginBottom: '32px' }}>
                          <h4 style={{
                            fontSize: '1.1rem',
                            color: '#1e293b',
                            marginBottom: '12px',
                            fontWeight: '600'
                          }}>
                            Key Responsibilities
                          </h4>
                          <ul style={{
                            color: '#64748b',
                            paddingLeft: '20px',
                            lineHeight: '1.6'
                          }}>
                            {job.responsibilities.map((resp, index) => (
                              <li key={index} style={{ marginBottom: '8px' }}>{resp}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Required Skills */}
                        <div style={{ marginBottom: '32px' }}>
                          <h4 style={{
                            fontSize: '1.1rem',
                            color: '#1e293b',
                            marginBottom: '12px',
                            fontWeight: '600'
                          }}>
                            Required Skills & Qualifications
                          </h4>
                          <ul style={{
                            color: '#64748b',
                            paddingLeft: '20px',
                            lineHeight: '1.6'
                          }}>
                            {job.skills.map((skill, index) => (
                              <li key={index} style={{ marginBottom: '8px' }}>{skill}</li>
                            ))}
                          </ul>
                        </div>

                        {/* What We Offer */}
                        <div style={{ marginBottom: '32px' }}>
                          <h4 style={{
                            fontSize: '1.1rem',
                            color: '#1e293b',
                            marginBottom: '12px',
                            fontWeight: '600'
                          }}>
                            What We Offer
                          </h4>
                          <ul style={{
                            color: '#64748b',
                            paddingLeft: '20px',
                            lineHeight: '1.6'
                          }}>
                            {job.benefits.map((benefit, index) => (
                              <li key={index} style={{ marginBottom: '8px' }}>{benefit}</li>
                            ))}
                          </ul>
                        </div>

                        {/* How to Apply */}
                        <div style={{ marginBottom: '32px' }}>
                          <h4 style={{
                            fontSize: '1.1rem',
                            color: '#1e293b',
                            marginBottom: '12px',
                            fontWeight: '600'
                          }}>
                            How to Apply
                          </h4>
                          <p style={{
                            color: '#64748b',
                            lineHeight: '1.6'
                          }}>
                            {job.howToApply}
                          </p>
                        </div>

                        {/* Job Summary */}
                        <div style={{
                          background: '#f8fafc',
                          padding: '24px',
                          borderRadius: '12px',
                          marginBottom: '32px'
                        }}>
                          <h4 style={{
                            fontSize: '1.1rem',
                            color: '#1e293b',
                            marginBottom: '16px',
                            fontWeight: '600'
                          }}>
                            Job Summary
                          </h4>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '16px'
                          }}>
                            <div>
                              <div style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '4px' }}>Role</div>
                              <div style={{ color: '#1e293b', fontWeight: '600' }}>{job.title}</div>
                            </div>
                            <div>
                              <div style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '4px' }}>Location</div>
                              <div style={{ color: '#1e293b', fontWeight: '600' }}>{job.location}</div>
                            </div>
                            <div>
                              <div style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '4px' }}>Experience</div>
                              <div style={{ color: '#1e293b', fontWeight: '600' }}>{job.experience}</div>
                            </div>
                            <div>
                              <div style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '4px' }}>Posted</div>
                              <div style={{ color: '#1e293b', fontWeight: '600' }}>{job.posted}</div>
                            </div>
                          </div>
                        </div>

                        {/* Apply Now Button */}
                        <div style={{
                          display: 'flex',
                          justifyContent: 'center',
                          gap: '16px',
                          flexWrap: 'wrap'
                        }}>
                          <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleApplyNow(job.title);
                            }}
                            style={{
                              background: 'linear-gradient(135deg, #4f46e5, #8b5cf6)',
                              color: 'white',
                              border: 'none',
                              padding: '14px 32px',
                              borderRadius: '12px',
                              fontSize: '1rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              boxShadow: '0 5px 15px rgba(79, 70, 229, 0.3)',
                              minWidth: '200px'
                            }}
                          >
                            Apply Now
                            <LightIcons.ExternalLink />
                          </motion.button>

                          <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href={`mailto:smyvisiontechnologies@gmail.com?subject=Application for ${job.title}&body=Hello, I am interested in the ${job.title} position at SMYVISION Technologies. Please find my application attached.`}
                            style={{
                              background: 'rgba(79, 70, 229, 0.1)',
                              color: '#4f46e5',
                              border: '2px solid #4f46e5',
                              padding: '14px 32px',
                              borderRadius: '12px',
                              fontSize: '1rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              textDecoration: 'none',
                              minWidth: '200px'
                            }}
                          >
                            <LightIcons.Mail />
                            Email Application
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose SMYVISION Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: 'clamp(60px, 10vw, 100px)', width: '100%' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              color: '#1e293b',
              marginBottom: '16px',
              fontWeight: '700'
            }}>
              Why Choose SMYVISION?
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
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Experience growth, innovation, and exceptional benefits
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  background: 'white',
                  padding: '32px 24px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(139, 92, 246, 0.1))',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <div style={{ color: '#4f46e5' }}>
                    {benefit.icon}
                  </div>
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  color: '#1e293b',
                  marginBottom: '12px',
                  fontWeight: '600'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  color: '#64748b',
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* General Application Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: 'clamp(60px, 10vw, 100px)', width: '100%' }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)',
            padding: 'clamp(40px, 8vw, 60px)',
            borderRadius: '24px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(79, 70, 229, 0.3)'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              color: 'white',
              marginBottom: '16px',
              fontWeight: '700'
            }}>
              Ready to Join Our Team?
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              Send us your resume even if you don't see the perfect role. We're always looking for talented individuals.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleApplyNow('General Application')}
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
                }}
              >
                Submit General Application
                <LightIcons.ExternalLink />
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Careers;