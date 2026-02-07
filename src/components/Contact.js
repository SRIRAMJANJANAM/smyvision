import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced SVG Icons with light theme colors
const LightIcons = {
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
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
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  ),
  MessageCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  ),
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1 пятеро-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ),
  Whatsapp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.507 14.307l-.009.075c-.403 2.228-1.516 3.186-2.038 3.641-.639.562-1.082.602-1.61.561-.427-.035-1.368-.265-2.618-.985-2.417-1.386-3.972-4.726-4.093-4.944-.03-.056-.24-.408-.24-.776s.135-.549.24-.75c.12-.192.359-.447.6-.447s.382.005.547.288c.165.284.57 1.049.62 1.124.09.151.135.318.015.525-.105.195-.135.318-.27.477-.12.151-.256.333-.365.446-.12.124-.247.26-.106.509.12.225.539.97 1.155 1.569.788.774 1.452 1.029 1.687 1.149.18.09.391.075.541-.045.165-.135.72-.883.914-1.185s.39-.24.6-.135c.225.105 1.408.833 1.65.986.24.15.39.225.45.345.06.135.06.765-.135 1.515z"/>
      <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.496 0 .145 5.25.145 11.7c0 2.096.6 4.14 1.74 5.945L.06 24l6.84-1.801c1.74.96 3.72 1.471 5.76 1.471h.005c6.54 0 11.895-5.251 11.895-11.7 0-3.135-1.245-6.075-3.48-8.296zM12.045 22.014c-1.845 0-3.6-.511-5.145-1.471l-.39-.24-3.975 1.051 1.05-3.84-.24-.39a10.684 10.684 0 01-1.65-5.685c0-5.775 4.74-10.5 10.59-10.5 2.79 0 5.4 1.096 7.35 3.075 1.95 1.98 3.03 4.621 3.03 7.426 0 5.775-4.74 10.5-10.59 10.5z" fill="#ffffff"/>
    </svg>
  ),
  Globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  Cogs: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  ExternalLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  ),
  User: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  AtSign: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
    </svg>
  ),
  Smartphone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  ),
  Building: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <rect x="9" y="10" width="6" height="4"></rect>
      <line x1="9" y1="6" x2="9" y2="6"></line>
      <line x1="15" y1="6" x2="15" y2="6"></line>
    </svg>
  ),
  Briefcase: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
  FileText: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  ),
  // Social Media Icons
  Facebook: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  Youtube: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  Twitter: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#000000">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    service: '',
    requirements: ''
  });

  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const industries = [
    'Education',
    'Hospitals & Healthcare',
    'Startup',
    'Agriculture Services',
    'Banking & Finance',
    'E-commerce',
    'Others'
  ];

  const services = [
    'Websites Development',
    'Automation Development',
    'Smart Chatbot Solutions'
  ];

  // Validation functions
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    return nameRegex.test(name.trim());
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const validateIndianPhone = (phone) => {
    if (!phone) return true; // Phone is optional
    const indianPhoneRegex = /^(\+91[-\s]?)?[6-9]\d{9}$/;
    return indianPhoneRegex.test(phone.trim());
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    } else if (!validateName(formData.fullName)) {
      newErrors.fullName = 'Please enter a valid name (letters and spaces only, 2-50 characters)';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (formData.phone && !validateIndianPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid Indian phone number (10 digits starting with 6-9)';
    }

    // Requirements validation
    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Project requirements are required';
    } else if (formData.requirements.trim().length < 10) {
      newErrors.requirements = 'Please provide more details about your project (minimum 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitMessage('Please fix the errors in the form before submitting.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby1pdBXYPHeBeO1xwBxDVSSONCRYOJQVxigGpHW6tzoVNIEe4wezhDWESqgRZbBpVhr/exec'; // Replace with your URL
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Show success message
      setSubmitMessage('Thank you! Your message has been sent successfully. We will contact you within 24 hours.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        service: '',
        requirements: ''
      });
      
      // Clear errors
      setErrors({});
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) {
      setSubmitMessage('Please fix the errors in the form before sending via WhatsApp.');
      return;
    }
    
    const message = `New Contact Inquiry from SMYVISION Website:
    
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Industry: ${formData.industry}
Service Interested: ${formData.service}
Requirements: ${formData.requirements}

Please follow up with this lead.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/918500352005?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const stats = [
    { icon: <LightIcons.Zap />, value: '24/7', label: 'Response Time' },
    { icon: <LightIcons.Shield />, value: '100%', label: 'Confidential' },
    { icon: <LightIcons.MessageCircle />, value: 'Free', label: 'Consultation' }
  ];

  const contactInfo = [
    {
      icon: <LightIcons.Mail />,
      title: 'Email Us',
      details: 'smyvisiontechnologies@gmail.com',
      action: () => window.location.href = 'mailto:smyvisiontechnologies@gmail.com'
    },
    {
      icon: <LightIcons.Phone />,
      title: 'Call Us',
      details: '+91 8500352005',
      action: () => window.location.href = 'tel:+918500352005'
    },
    {
      icon: <LightIcons.Clock />,
      title: 'Business Hours',
      details: 'Mon - Fri: 9AM - 7PM IST'
    }
  ];

  const socialMedia = [
    { icon: <LightIcons.Facebook />, label: 'Facebook', url: 'https://facebook.com/smyvisiontechnolgies', color: '#1877F2' },
    { icon: <LightIcons.Instagram />, label: 'Instagram', url: 'intent://instagram.com/_u/smyvisiontechnologies/#Intent;package=com.instagram.android;scheme=https;end', color: 'linear-gradient(45deg, #833AB4, #FD1D1D, #F77737)' },
    { icon: <LightIcons.Youtube />, label: 'YouTube', url: 'https://www.youtube.com/@SmyvisionTechnologies', color: '#FF0000' },
    { icon: <LightIcons.Twitter />, label: 'Twitter', url: 'https://twitter.com/smyvisiontech', color: '#1DA1F2' },
    { icon: <LightIcons.Linkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/company/smyvisiontechnologies/', color: '#0A66C2' },
    { icon: <LightIcons.Whatsapp />, label: 'WhatsApp', url: 'https://wa.me/918500352005', color: '#25D366' }
  ];
                                                      
  const faqs = [
    {
      question: "How quickly will you respond to my inquiry?",
      answer: "We pride ourselves on quick response times. You'll typically receive an initial response within 2-4 business hours. For urgent matters, we offer priority support via phone at +91 8500352005. Complex project inquiries may take up to 24 hours for detailed assessment."
    },
    {
      question: "What does your consultation process involve?",
      answer: "Our consultation process includes:\n• Initial Discovery: 30-minute free consultation to understand your needs\n• Requirement Analysis: Detailed review of project specifications\n• Solution Proposal: Customized technology recommendations\n• Timeline & Budget: Transparent project plan and pricing\n• Follow-up: Ongoing communication to refine the approach"
    },
    {
      question: "What information do you need to start my project?",
      answer: "To provide an accurate proposal, we typically need:\n• Project Goals: What you want to achieve\n• Target Audience: Who will use your solution\n• Functional Requirements: Specific features and functionalities\n• Technical Preferences: Existing systems or platform preferences\n• Timeline: Desired completion date\n• Budget Range: Investment expectations\n• Reference Examples: Similar solutions you admire"
    },
    {
      question: "How long does a typical project take to complete?",
      answer: "Project timelines vary based on complexity:\n• Simple Websites: 2-4 weeks\n• Web Applications: 6-12 weeks\n• Mobile Apps: 8-16 weeks\n• Enterprise Solutions: 3-6+ months\n\nWe provide detailed project timelines during the planning phase and maintain regular progress updates."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing options:\n• Fixed Price: Ideal for projects with clear requirements\n• Time & Material: Flexible billing for evolving projects\n• Dedicated Team: Monthly billing for long-term collaboration\n\nWe provide detailed quotes with transparent breakdowns. Our pricing starts from ₹4,999 for basic websites and scales based on project requirements."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support:\n• Technical Support: 24/7 availability for critical issues\n• Regular Updates: Security patches and feature enhancements\n• Performance Monitoring: Proactive system monitoring\n• Training: Team training and documentation\n• Maintenance Plans: Customizable support packages\n\nWe offer various support tiers from basic maintenance to enterprise-grade SLAs."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern, reliable technologies:\n• Frontend: React.js, Vue.js, Angular, Next.js\n• Backend: Node.js, Python/Django, PHP/Laravel, Java/Spring\n• Mobile: React Native, Flutter, iOS Swift, Android Kotlin\n• Database: PostgreSQL, MySQL, MongoDB, Redis\n• Cloud: AWS, Azure, Google Cloud, DigitalOcean\n\nWe choose technologies based on project requirements, scalability needs, and client preferences."
    },
    {
      question: "How do you communicate progress during development?",
      answer: "We maintain transparent communication throughout:\n• Weekly Status Reports: Detailed progress updates\n• Regular Meetings: Scheduled check-ins and demos\n• Project Management Tools: Real-time tracking via our portal\n• Dedicated Account Manager: Single point of contact\n• 24/7 Support Channel: Immediate assistance when needed\n\nWe believe in collaborative development with regular client involvement."
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
              marginBottom: '16px',
              fontWeight: '800',
              lineHeight: '1.2',
              position: 'relative'
            }}
          >
            Let's Build
            <span style={{
              background: 'linear-gradient(135deg, #4f46e5, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block',
              marginTop: '8px'
            }}>
              Together
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
              margin: '0 auto 60px',
              lineHeight: '1.6'
            }}
          >
            Ready to transform your business with cutting-edge technology? Share your vision with us, and let's create something extraordinary.
          </motion.p>

          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(16px, 4vw, 30px)',
            flexWrap: 'wrap',
            position: 'relative'
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

        {/* Contact Form Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          style={{ marginBottom: 'clamp(60px, 10vw, 100px)', width: '100%' }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: 'clamp(40px, 8vw, 80px)',
            width: '100%'
          }}>
            {/* Contact Info */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                color: '#1e293b',
                marginBottom: '32px',
                fontWeight: '700'
              }}>
                Get In Touch
              </h2>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                marginBottom: '40px'
              }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      cursor: info.action ? 'pointer' : 'default',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={info.action}
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(139, 92, 246, 0.1))',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.1rem',
                        color: '#1e293b',
                        marginBottom: '4px',
                        fontWeight: '600'
                      }}>
                        {info.title}
                      </h3>
                      <p style={{
                        color: '#64748b',
                        fontSize: '0.95rem',
                        lineHeight: '1.5'
                      }}>
                        {info.details}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Icons */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  color: '#1e293b',
                  marginBottom: '20px',
                  fontWeight: '600'
                }}>
                  Follow Us
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        boxShadow: `0 8px 20px ${typeof social.color === 'string' && social.color.startsWith('#') ? `${social.color}40` : 'rgba(0,0,0,0.2)'}`
                      }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        background: social.color,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }}
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="mailto:smyvisiontechnologies@gmail.com"
                    style={{
                      background: 'linear-gradient(135deg, #4f46e5, #8b5cf6)',
                      color: 'white',
                      padding: '12px 20px',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 5px 15px rgba(79, 70, 229, 0.3)',
                      textAlign: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <LightIcons.Mail />
                    Email Your Question
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/918500352005"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#25D366',
                      color: 'white',
                      padding: '12px 20px',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 5px 15px rgba(37, 211, 102, 0.3)',
                      textAlign: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <LightIcons.Whatsapp />
                    WhatsApp Inquiry
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit}>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                  color: '#1e293b',
                  marginBottom: '32px',
                  fontWeight: '700'
                }}>
                  Send Message
                </h2>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      background: submitMessage.includes('error') ? '#ef4444' : 
                                 submitMessage.includes('fix') ? '#f59e0b' : '#10b981',
                      color: 'white',
                      padding: '16px',
                      borderRadius: '12px',
                      marginBottom: '24px',
                      fontSize: '0.95rem',
                      textAlign: 'center'
                    }}
                  >
                    {submitMessage}
                  </motion.div>
                )}

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  {/* Full Name with Icon */}
                  <div>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#1e293b',
                      marginBottom: '8px',
                      fontWeight: '500',
                      fontSize: '0.95rem'
                    }}>
                      <LightIcons.User />
                      Full Name *
                    </label>
                    <div style={{
                      position: 'relative'
                    }}>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        style={{
                          width: '100%',
                          padding: '12px 16px 12px 40px',
                          border: `1px solid ${errors.fullName ? '#ef4444' : '#e2e8f0'}`,
                          borderRadius: '12px',
                          fontSize: '0.95rem',
                          transition: 'all 0.3s ease',
                          boxSizing: 'border-box',
                          backgroundColor: errors.fullName ? '#fef2f2' : 'white'
                        }}
                      />
                      {errors.fullName && (
                        <p style={{
                          color: '#ef4444',
                          fontSize: '0.85rem',
                          marginTop: '4px',
                          marginLeft: '4px'
                        }}>
                          {errors.fullName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email with Icon */}
                  <div>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#1e293b',
                      marginBottom: '8px',
                      fontWeight: '500',
                      fontSize: '0.95rem'
                    }}>
                      <LightIcons.AtSign />
                      Email Address *
                    </label>
                    <div style={{
                      position: 'relative'
                    }}>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email address"
                        style={{
                          width: '100%',
                          padding: '12px 16px 12px 40px',
                          border: `1px solid ${errors.email ? '#ef4444' : '#e2e8f0'}`,
                          borderRadius: '12px',
                          fontSize: '0.95rem',
                          transition: 'all 0.3s ease',
                          boxSizing: 'border-box',
                          backgroundColor: errors.email ? '#fef2f2' : 'white'
                        }}
                      />
                      {errors.email && (
                        <p style={{
                          color: '#ef4444',
                          fontSize: '0.85rem',
                          marginTop: '4px',
                          marginLeft: '4px'
                        }}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone with Icon */}
                  <div>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#1e293b',
                      marginBottom: '8px',
                      fontWeight: '500',
                      fontSize: '0.95rem'
                    }}>
                      <LightIcons.Smartphone />
                      Phone Number (Indian)
                    </label>
                    <div style={{
                      position: 'relative'
                    }}>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g., 8500352005 "
                        style={{
                          width: '100%',
                          padding: '12px 16px 12px 40px',
                          border: `1px solid ${errors.phone ? '#ef4444' : '#e2e8f0'}`,
                          borderRadius: '12px',
                          fontSize: '0.95rem',
                          transition: 'all 0.3s ease',
                          boxSizing: 'border-box',
                          backgroundColor: errors.phone ? '#fef2f2' : 'white'
                        }}
                      />
                      {errors.phone && (
                        <p style={{
                          color: '#ef4444',
                          fontSize: '0.85rem',
                          marginTop: '4px',
                          marginLeft: '4px'
                        }}>
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company with Icon */}
                  <div>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#1e293b',
                      marginBottom: '8px',
                      fontWeight: '500',
                      fontSize: '0.95rem'
                    }}>
                      <LightIcons.Building />
                      Company Name
                    </label>
                    <div style={{
                      position: 'relative'
                    }}>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                        style={{
                          width: '100%',
                          padding: '12px 16px 12px 40px',
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          fontSize: '0.95rem',
                          transition: 'all 0.3s ease',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>

                  {/* Industry with Icon and Dropdown Arrow */}
                  <div>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#1e293b',
                      marginBottom: '8px',
                      fontWeight: '500',
                      fontSize: '0.95rem'
                    }}>
                      <LightIcons.Briefcase />
                      Industry
                    </label>
                    <div style={{
                      position: 'relative',
                      width: '100%'
                    }}>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px 12px 40px',
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          fontSize: '0.95rem',
                          transition: 'all 0.3s ease',
                          boxSizing: 'border-box',
                          background: 'white',
                          appearance: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="">Select your industry</option>
                        {industries.map((industry, index) => (
                          <option key={index} value={industry}>{industry}</option>
                        ))}
                      </select>
                      <div style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                        color: '#64748b'
                      }}>
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Service with Icon and Dropdown Arrow */}
                  <div>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#1e293b',
                      marginBottom: '8px',
                      fontWeight: '500',
                      fontSize: '0.95rem'
                    }}>
                      <LightIcons.Cogs />
                      Service Interested In
                    </label>
                    <div style={{
                      position: 'relative',
                      width: '100%'
                    }}>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px 12px 40px',
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          fontSize: '0.95rem',
                          transition: 'all 0.3s ease',
                          boxSizing: 'border-box',
                          background: 'white',
                          appearance: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                      <div style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                        color: '#64748b'
                      }}>
                        ▼
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements with Icon */}
                <div style={{ marginBottom: '32px' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#1e293b',
                    marginBottom: '8px',
                    fontWeight: '500',
                    fontSize: '0.95rem'
                  }}>
                    <LightIcons.FileText />
                    Project Requirements *
                  </label>
                  <div style={{
                    position: 'relative'
                  }}>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Describe your project requirements in detail..."
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: `1px solid ${errors.requirements ? '#ef4444' : '#e2e8f0'}`,
                        borderRadius: '12px',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box',
                        resize: 'vertical',
                        backgroundColor: errors.requirements ? '#fef2f2' : 'white'
                      }}
                    />
                    {errors.requirements && (
                      <p style={{
                        color: '#ef4444',
                        fontSize: '0.85rem',
                        marginTop: '4px',
                        marginLeft: '4px'
                      }}>
                        {errors.requirements}
                      </p>
                    )}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '16px',
                  flexWrap: 'wrap'
                }}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
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
                      flex: '1',
                      minWidth: '200px',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                    {!isSubmitting && <LightIcons.ExternalLink />}
                  </motion.button>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWhatsAppSubmit}
                    style={{
                      background: '#25D366',
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
                      boxShadow: '0 5px 15px rgba(37, 211, 102, 0.3)',
                      flex: '1',
                      minWidth: '200px'
                    }}
                  >
                    <LightIcons.Whatsapp />
                    Send via WhatsApp
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
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
              Find answers to common questions about our services and process
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
                          textAlign: 'left',
                          whiteSpace: 'pre-line'
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

        {/* Bottom CTA */}
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
            marginBottom: 'clamp(60px, 10vw, 100px)',
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
            Still have questions?
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
              lineHeight: '1.6'
            }}
          >
            We're here to help! Reach out to us through any channel.
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
              flexWrap: 'wrap'
            }}
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:smyvisiontechnologies@gmail.com"
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
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <LightIcons.Mail />
              Email Your Question
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/918500352005"
              target="_blank"
              rel="noopener noreferrer"
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
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <LightIcons.Whatsapp />
              WhatsApp Inquiry
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+918500352005"
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
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <LightIcons.Phone />
              Call Now
            </motion.a>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

export default Contact;