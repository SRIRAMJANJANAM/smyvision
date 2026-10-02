import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* =========================================================
   FONT AWESOME ICONS (UNCHANGED)
========================================================= */

import {
  FaArrowRight,
  FaArrowLeft,
  FaArrowUpRightFromSquare,
  FaBarsProgress,
  FaBolt,
  FaBrain,
  FaBriefcase,
  FaBuilding,
  FaBullseye,
  FaCheck,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaCircleCheck,
  FaCloud,
  FaCode,
  FaComments,
  FaComputer,
  FaDatabase,
  FaGlobe,
  FaHeadset,
  FaLaptopCode,
  FaLightbulb,
  FaMagnifyingGlass,
  FaMobileScreenButton,
  FaQuoteLeft,
  FaRocket,
  FaServer,
  FaShieldHalved,
  FaSitemap,
  FaStar,
  FaUsers,
  FaWandMagicSparkles,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

/* =========================================================
   CONFIGURATION (UNCHANGED)
========================================================= */

const WEBSITE_URL = "https://smyvisiontechnologies.com";

const PHONE_NUMBER = "8500352005";

const PHONE_LINK = "+918500352005";

const EMAIL = "smyvisiontechnologies@gmail.com";


/* =========================================================
   SERVICES (UNCHANGED)
========================================================= */

const services = [
  {
    icon: <FaLaptopCode />,
    image: "/images/web.webp",
    fallback: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
    title: "Premium Website Development",
    description:
      "High-end business websites designed to build trust, communicate clearly and convert visitors into genuine enquiries.",
    features: ["Business Websites", "Corporate Websites", "Responsive Design", "SEO-Ready Structure"],
  },
  {
    icon: <FaCode />,
    image: "/images/cust.webp",
    fallback: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
    title: "Custom Web Development",
    description:
      "Purpose-built web platforms created around your exact workflows, customers and long-term business requirements.",
    features: ["Custom Portals", "Management Systems", "Client Dashboards", "Web Applications"],
  },
  {
    icon: <FaGlobe />,
    image: "/images/ecomm.webp",
    fallback: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    title: "Custom E-commerce Solutions",
    description:
      "Premium online stores with product management, smooth shopping journeys and scalable functionality built for your brand.",
    features: ["Product Catalogues", "Custom Storefronts", "Order Workflows", "Payment Integration"],
  },
  {
    icon: <FaBarsProgress />,
    image: "/images/auto.webp",
    fallback: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    title: "Business Automation",
    description:
      "Custom automation systems that reduce repetitive work, simplify operations and connect important business processes.",
    features: ["Workflow Automation", "Custom Dashboards", "Business Systems", "Process Automation"],
  },
  {
    icon: <FaBrain />,
    image: "/images/chat.webp",
    fallback: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=85",
    title: "Chatbot Solutions(Coming Soon)",
    description:
      "Smart experiences for customer enquiries, lead handling and business communication without unnecessary complexity.",
    features: ["Chatbots", "Lead Automation", "Customer Support", "Smart Business Tools"],
  },
];

/* =========================================================
   GENERAL MARQUEE (UNCHANGED)
========================================================= */

const marqueeItems = [
  "Professional Business Websites",
  "Affordable Website Solutions",
  "Responsive Web Development",
  "SEO-Friendly Websites",
  "Custom Web Applications",
  "Business Automation",
  "AI Chatbot Development",
  "Website Redesign",
  "E-commerce Development",
  "Landing Page Development",
  "Fast Loading Websites",
  "Digital Business Solutions",
];

/* =========================================================
   BENEFITS (UNCHANGED)
========================================================= */

const benefits = [
  {
    icon: <FaMagnifyingGlass />,
    title: "SEO-Ready Foundation",
    description:
      "Clean development, semantic structure, optimized headings and technical foundations that support better search visibility.",
  },
  {
    icon: <FaMobileScreenButton />,
    title: "Responsive Experience",
    description:
      "Every website is built to deliver a professional experience across smartphones, tablets, laptops and desktop devices.",
  },
  {
    icon: <FaBolt />,
    title: "Performance Focused",
    description:
      "Modern layouts and optimized development practices help create faster and smoother website experiences.",
  },
  {
    icon: <FaBullseye />,
    title: "Conversion Focused",
    description:
      "Clear content structure and strategic calls-to-action help guide visitors towards enquiries and business actions.",
  },
];

/* =========================================================
   PROJECTS (UNCHANGED)
========================================================= */

const projects = [
  {
    title: "NKR Car Rentals",
    category: "Car Rental Website",
    image: "/images/nkr.webp",
    fallback: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=85",
    url: "https://www.nkrselfdrivecarrentals.in/",
    description:
      "A modern car rental website designed to present services clearly, provide easy customer navigation and create a professional mobile experience.",
  },
  {
    title: "Bindiya Beauty Salon",
    category: "Beauty & Salon Website",
    image: "/images/beauty.webp",
    fallback: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
    url: "https://www.bindiyazbeautysalon.in/",
    description:
      "A premium salon website created to showcase services, strengthen brand identity and provide customers with a smooth digital experience.",
  },
  {
    title: "Happy Organize",
    category: "Home Services Website",
    image: "/images/home.webp",
    fallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    url: "https://www.happyorganize.com/",
    description:
      "A professional home services website designed with clear service presentation, responsive layouts and customer-focused navigation.",
  },
  {
    title: "Arvis Fertilizers",
    category: "Agriculture Business Website",
    image: "/images/arvis.webp",
    fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    url: "https://www.arvisfertilizers.com/",
    description:
      "A modern agriculture-focused digital platform developed to strengthen business presentation and communicate products professionally.",
  },
  {
    title: "Yatheendra Engineering Works",
    category: "Engineering Works Website",
    image: "/images/yath.webp",
    fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    url: "https://yatheendraengineeringworks.vercel.app/",
    description:
      "A modern industrial fabrication platform developed to strengthen business presentation and communicate welding services professionally.",
  },
  {
  title: "AK Paul Electronics",
  category: "Home Appliance Repair Website",
  image: "/images/ak-paul-electronics.webp",
  fallback: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85",
  url: "https://www.customerserviceonline.co.in/",
  description:
    "A professional home appliance repair platform developed to showcase AC, washing machine and refrigerator repair services and help customers across Kolkata easily connect for affordable service.",
},
{
  title: "JK Decors & Events",
  category: "Event Decoration & Management Website",
  image: "/images/jkdecors.webp",
  fallback: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
  url: "https://www.jkdecors.com/",
  description:
    "A premium event decoration platform developed to showcase weddings, receptions, engagements, birthdays and celebration services while helping customers easily explore completed events and connect with JK Decors & Events.",
},
];

/* =========================================================
   PROJECT MARQUEE ITEMS (UNCHANGED)
========================================================= */

const projectMarqueeRowOne = [
  { title: "NKR Car Rentals", image: "/images/nkr.webp",
    fallback: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=85", category: "Car Rental" },
  { title: "Bindiya Beauty Salon", image: "/images/beauty.webp",
    fallback: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85", category: "Beauty & Salon" },
  { title: "Happy Organize", image: "/images/home.webp",
    fallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85", category: "Home Services" },
  { title: "Arvis Fertilizers", image: "/images/arvis.webp",
    fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", category: "Agriculture" },
  { title: "Yatheendra Engineering Works", image: "/images/yath.webp",
    fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", category: "Engineering Works" },
    { title: "Daiva Pesticides", image: "/images/daiva.webp",
    fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", category: "Engineering Works" },
    { title: "My Dentist Banglore", image: "/images/mydentist.webp",
    fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", category: "Hospitals" },
];

const projectMarqueeRowTwo = [
  { 
  title: "JK Decors & Events", 
  image: "/images/jkdecors.webp",
  fallback: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85", 
  category: "Event Decoration & Management" 
},
{ 
  title: "AK Paul Electronics", 
  image: "/images/ak-paul-electronics.webp",
  fallback: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85", 
  category: "Home Appliance Repair Services" 
},
  { title: "Aditya Car AC", image: "/images/aditya.webp",
    fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", category: "Car Ac Specialist" },
  { title: "Yatheendra Engineering Works", image: "/images/yath.webp",
    fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", category: "Engineering Works" },
  { title: "Arvis Fertilizers", image: "/images/arvis.webp",
    fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", category: "Agriculture" },
  { title: "Happy Organize", image: "/images/home.webp",
    fallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85", category: "Home Services" },
  { title: "Bindiya Beauty Salon", image: "/images/beauty.webp",
    fallback: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85", category: "Beauty & Salon" },
  { title: "NKR Car Rentals", image: "/images/nkr.webp",
    fallback: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=85", category: "Car Rental" },
];

/* =========================================================
   REVIEWS (UNCHANGED)
========================================================= */

const reviews = [
  {
    name: "NKR Car Rentals",
    role: "Car Rental Business",
    review:
      "I am extremely satisfied with the website design. The work was done neatly and exactly according to my requirements.Thank you so much SMYVISION TECHNOLOGIES entire team for the great support and service.",
  },
  {
    name: "Bindiya Beauty Salon",
    role: "Beauty & Salon",
    review:
      "SMYVISION TECHNOLOGIES understood our requirements and created a beautiful website that represents our salon professionally.",
  },
  {
    name: "Happy Organize",
    role: "Home Services",
    review: "Super happy with the work. Highly recommend it!",
  },
  {
    name: "Arvis Fertilizers",
    role: "Agriculture Business",
    review:
      "The team delivered a professional digital platform with a clean structure and responsive design that supports our business presentation.",
  },
];

/* =========================================================
   PROCESS (UNCHANGED)
========================================================= */

const processSteps = [
  { number: "01", icon: <FaComments />, title: "Discovery", description: "We begin by understanding your business, goals, customers and exact project requirements." },
  { number: "02", icon: <FaSitemap />, title: "Strategy", description: "We organize the project structure, user journey, pages and technical requirements." },
  { number: "03", icon: <FaWandMagicSparkles />, title: "Design", description: "We create a modern visual direction focused on professionalism, usability and your business identity." },
  { number: "04", icon: <FaCode />, title: "Development", description: "The approved design is transformed into a responsive and functional digital experience." },
  { number: "05", icon: <FaShieldHalved />, title: "Testing", description: "We carefully test responsiveness, usability and functionality across different screen sizes." },
  { number: "06", icon: <FaRocket />, title: "Launch", description: "Your completed digital solution is prepared and launched for your customers to experience." },
];

/* =========================================================
   FAQ QUESTIONS (UNCHANGED)
========================================================= */

const faqItems = [
  {
    question: "What types of websites do you develop?",
    answer: "We develop professional business websites, corporate websites, service websites, portfolio websites, e-commerce platforms, landing pages, custom portals and web applications according to business requirements.",
  },
  {
    question: "Do you create mobile-responsive websites?",
    answer: "Yes. Every website we develop is designed to work smoothly across smartphones, tablets, laptops and desktop devices.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer: "We build websites with SEO-friendly technical foundations including clean page structure, semantic HTML, heading hierarchy, metadata support, responsive design and performance-focused development.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes. We can redesign an existing website with a more modern interface, improved mobile responsiveness, better content structure and a stronger user experience.",
  },
  {
    question: "How long does website development take?",
    answer: "Development time depends on the size and complexity of the project. A standard business website can usually be completed faster than a custom application or advanced business portal.",
  },
  {
    question: "Do you provide custom web application development?",
    answer: "Yes. We can develop custom web-based systems including dashboards, management platforms, customer portals and business automation solutions.",
  },
  {
    question: "Can you integrate WhatsApp into the website?",
    answer: "Yes. We can integrate WhatsApp buttons and direct enquiry options so customers can quickly communicate with your business.",
  },
  {
    question: "Do you develop e-commerce websites?",
    answer: "Yes. We can build e-commerce solutions that allow businesses to display products, manage catalogues and provide online shopping experiences.",
  },
  {
    question: "Can you develop AI chatbot solutions?",
    answer: "Yes. We provide chatbot and AI automation solutions for customer enquiries, lead generation, support and business communication.",
  },
  {
    question: "Do you provide business automation solutions?",
    answer: "Yes. We can create custom digital workflows and management systems that reduce repetitive work and help businesses manage operations more efficiently.",
  },
  {
    question: "Will I be able to update my website later?",
    answer: "The ability to update content depends on the type of website and management system selected. We can develop solutions with administrative features when required.",
  },
  {
    question: "Do you provide support after website development?",
    answer: "We provide technical guidance and support based on the project requirements and agreed service scope.",
  },
  {
    question: "Can you help businesses build a complete digital presence?",
    answer: "Yes. Along with website development, we can help businesses implement automation, chatbot solutions and other digital systems required for their operations.",
  },
  {
    question: "How can I get a quotation for my project?",
    answer: "You can contact us through the website, WhatsApp or phone and share your requirements. We will understand your project and provide a suitable quotation.",
  },
  {
    question: "How do I start a project with SMYVISION TECHNOLOGIES?",
    answer: "Simply contact our team and tell us about your business and project idea. We will discuss your requirements, understand your goals and recommend the right solution.",
  },
  {
    question: "Do you provide professional website development services?",
    answer: "Yes. SMYVISION TECHNOLOGIES develops responsive business websites, corporate websites, custom web applications, website redesigns and related digital solutions for businesses with different requirements.",
  },
  {
    question: "Can you build a website for a local business?",
    answer: "Yes. We build professional, mobile-responsive websites for local businesses that clearly present services, strengthen online visibility and make customer enquiries easier.",
  },
  {
    question: "Do you provide custom web development?",
    answer: "Yes. SMYVISION TECHNOLOGIES provides custom web development for businesses that need more than a standard website, including customer portals, management systems, dashboards, workflow tools and custom web applications.",
  },
  {
    question: "Can SMYVISION TECHNOLOGIES develop custom web applications?",
    answer: "Yes. SMYVISION TECHNOLOGIES develops custom web applications including business dashboards, management portals, customer-facing platforms and workflow automation systems designed around specific business requirements.",
  },
  {
    question: "What should I look for when choosing a web development company?",
    answer: "Look for a web development company that can show real project work, build responsive and search-friendly websites, explain the development process clearly, support your business goals and provide suitable post-launch guidance. SMYVISION TECHNOLOGIES focuses on these areas for every project.",
  },
  {
    question: "Can SMYVISION TECHNOLOGIES build e-commerce websites?",
    answer: "Yes. We develop custom e-commerce websites with product catalogues, responsive storefronts, order workflows and payment integration based on project requirements.",
  },
  {
    question: "Do you provide website development services in Vijayawada?",
    answer: "Yes. SMYVISION TECHNOLOGIES provides professional website development, custom web development, e-commerce and web application development services for businesses in Vijayawada.",
  },
  {
    question: "Can you build a website for a local business in Vijayawada?",
    answer: "Yes. We develop responsive business websites for local businesses in Vijayawada, with clear service presentation, enquiry options and SEO-ready technical foundations.",
  },
  {
    question: "How can I start a website project with SMYVISION TECHNOLOGIES?",
    answer: "Contact SMYVISION TECHNOLOGIES by phone, WhatsApp or through our website and share your requirements. We will discuss your business goals, required features and suitable website solution.",
  },
];

/* =========================================================
   WHY CHOOSE US (UNCHANGED)
========================================================= */

const reasons = [
  { icon: <FaBullseye />, title: "Business-First Thinking", description: "We understand your business objectives before deciding how technology should solve the problem." },
  { icon: <FaRocket />, title: "Modern Technologies", description: "We use reliable modern technologies to build scalable and professional digital solutions." },
  { icon: <FaHeadset />, title: "Clear Communication", description: "We keep project communication simple so you can understand each important stage of development." },
  { icon: <FaShieldHalved />, title: "Quality Focus", description: "Our development process focuses on responsiveness, usability and professional presentation." },
  { icon: <FaBolt />, title: "Performance Mindset", description: "We focus on smooth user experiences and efficient development practices." },
  { icon: <FaUsers />, title: "Built Around Your Needs", description: "Every project is developed according to the actual requirements and goals of the business." },
];

/* =========================================================
   INDUSTRIES (UNCHANGED)
========================================================= */

const industries = [
  "Healthcare", "Education", "Real Estate", "Restaurants", "Agriculture",
  "Beauty & Salons", "Travel & Rentals", "Home Services", "Startups", "Retail Businesses",
];

/* =========================================================
   TECHNICAL SEO + LOCAL SEO + AEO/GEO ENTITY STRUCTURED DATA
   Clean factual entities; no keyword-stuffed alternate names
========================================================= */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${WEBSITE_URL}/#organization`,
      "name": "SMYVISION TECHNOLOGIES",
      "alternateName": "SMYVISION",
      "url": `${WEBSITE_URL}/`,
      "logo": {
        "@type": "ImageObject",
        "@id": `${WEBSITE_URL}/#logo`,
        "url": `${WEBSITE_URL}/Logo.png`,
        "contentUrl": `${WEBSITE_URL}/Logo.png`,
        "caption": "SMYVISION TECHNOLOGIES"
      },
      "image": { "@id": `${WEBSITE_URL}/#logo` },
      "description": "SMYVISION TECHNOLOGIES is a web development company in Vijayawada providing website development, web design, custom web development, business website development, custom web applications, e-commerce website development, business automation and digital solutions.",
      "foundingDate": "2026",
      "telephone": PHONE_LINK,
      "email": EMAIL,
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
        "Website Designers in Vijayawada",
        "Website Developers in Vijayawada",
        "Custom Web Development in Vijayawada",
        "Custom Web Application Development in Vijayawada",
        "E-commerce Website Development in Vijayawada",
        "Responsive Web Design in Vijayawada",
        "Business Website Development in Vijayawada",
        "Professional Website Development in Vijayawada",
        "Local Business Website Development in Vijayawada",
        "Business Automation",
        "Management Portals",
        "Business Dashboards",
        "SEO-ready Web Development"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": PHONE_LINK,
        "contactType": "sales and customer enquiries",
        "areaServed": "IN",
        "availableLanguage": ["English", "Telugu", "Hindi"]
      },
      "sameAs": [
        "https://www.facebook.com/share/1AAbW51BTs/",
        "https://linkedin.com/company/smyvisiontechnologies",
        "https://instagram.com/smyvisiontechnologies",
        "https://youtube.com/@smyvisiontechnologies"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development and Digital Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `${WEBSITE_URL}/#website-development-service`,
              "name": "Website Development in Vijayawada",
              "serviceType": "Website Development",
              "description": "Responsive business website development in Vijayawada for startups, local businesses and growing companies.",
              "areaServed": { "@type": "City", "name": "Vijayawada" },
              "provider": { "@id": `${WEBSITE_URL}/#organization` }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `${WEBSITE_URL}/#custom-web-development-service`,
              "name": "Custom Web Development in Vijayawada",
              "serviceType": "Custom Web Development",
              "description": "Custom web development services in Vijayawada for businesses that need purpose-built portals, management systems, dashboards, web platforms and workflow-based digital solutions.",
              "areaServed": { "@type": "City", "name": "Vijayawada" },
              "provider": { "@id": `${WEBSITE_URL}/#organization` }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `${WEBSITE_URL}/#custom-web-application-service`,
              "name": "Custom Web Application Development in Vijayawada",
              "serviceType": "Custom Web Application Development",
              "description": "Custom web applications in Vijayawada including business dashboards, management portals and workflow systems built around specific business requirements.",
              "areaServed": [
                { "@type": "City", "name": "Vijayawada" },
                { "@type": "State", "name": "Andhra Pradesh" }
              ],
              "provider": { "@id": `${WEBSITE_URL}/#organization` }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `${WEBSITE_URL}/#ecommerce-service`,
              "name": "E-commerce Website Development in Vijayawada",
              "serviceType": "E-commerce Website Development",
              "description": "Custom e-commerce website development in Vijayawada with product catalogues, responsive storefronts, order workflows and payment integration.",
              "areaServed": { "@type": "City", "name": "Vijayawada" },
              "provider": { "@id": `${WEBSITE_URL}/#organization` }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `${WEBSITE_URL}/#business-automation-service`,
              "name": "Business Automation in Vijayawada",
              "serviceType": "Business Automation",
              "description": "Custom workflow automation, dashboards and digital business systems in Vijayawada designed to reduce repetitive work.",
              "areaServed": { "@type": "City", "name": "Vijayawada" },
              "provider": { "@id": `${WEBSITE_URL}/#organization` }
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": `${WEBSITE_URL}/#custom-web-development-vijayawada`,
      "name": "Custom Web Development in Vijayawada",
      "serviceType": "Custom Web Development",
      "description": "Purpose-built custom web development services in Vijayawada including business portals, management systems, dashboards, workflow tools and custom web applications.",
      "provider": { "@id": `${WEBSITE_URL}/#organization` },
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
      "@type": "WebSite",
      "@id": `${WEBSITE_URL}/#website`,
      "url": `${WEBSITE_URL}/`,
      "name": "SMYVISION TECHNOLOGIES",
      "description": "Web development in Vijayawada, website design, custom web applications, e-commerce website development and digital business solutions from SMYVISION TECHNOLOGIES.",
      "publisher": { "@id": `${WEBSITE_URL}/#organization` },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": `${WEBSITE_URL}/#webpage`,
      "url": `${WEBSITE_URL}/`,
      "name": "Web Development Company in Vijayawada | SMYVISION TECHNOLOGIES",
      "headline": "Web Development Company in Vijayawada",
      "description": "SMYVISION TECHNOLOGIES provides website development, custom web development, custom web applications, e-commerce and business automation services in Vijayawada, Andhra Pradesh.",
      "keywords": [
        "Web Development Company in Vijayawada",
        "Website Development Company in Vijayawada",
        "Website Development in Vijayawada",
        "Web Design Company in Vijayawada",
        "Website Designers in Vijayawada",
        "Website Developers in Vijayawada",
        "Custom Web Development in Vijayawada",
        "Custom Web Application Development in Vijayawada",
        "E-commerce Website Development in Vijayawada",
        "Responsive Web Design in Vijayawada",
        "Business Website Development in Vijayawada",
        "Professional Website Development in Vijayawada",
        "Local Business Website Development in Vijayawada",
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
      "isPartOf": { "@id": `${WEBSITE_URL}/#website` },
      "about": { "@id": `${WEBSITE_URL}/#organization` },
      "mainEntity": { "@id": `${WEBSITE_URL}/#organization` },
      "mentions": { "@id": `${WEBSITE_URL}/#custom-web-development-vijayawada` },
      "primaryImageOfPage": { "@id": `${WEBSITE_URL}/#logo` },
      "inLanguage": "en-IN"
    }
  ]
};

/* =========================================================
   ANIMATION VARIANTS (UNCHANGED)
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
   HOME COMPONENT
========================================================= */

const Home = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const goToContact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToProjects = () => {
    navigate("/portfolio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi SMYVISION TECHNOLOGIES, I would like to discuss a website or digital solution for my business. Please share more details."
    );
    window.open(`https://wa.me/91${PHONE_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const callNow = () => {
    window.location.href = `tel:${PHONE_LINK}`;
  };

  const toggleFaq = (index) => {
    setActiveFaq((current) => (current === index ? null : index));
  };

  const openFullscreenImage = (src, alt) => {
    setFullscreenImage({ src, alt });
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  useEffect(() => {
    if (!fullscreenImage) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeFullscreenImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullscreenImage]);

  return (
    <>
      {/* =====================================================
          ✅ SEO OPTIMIZED HELMET
          TECHNICAL SEO + CUSTOM WEB APP ENTITY SIGNALS
          INCLUDES COMMON MISSPELLINGS FOR MAXIMUM CAPTURE
      ====================================================== */}

      <Helmet>
        <html lang="en-IN" />

        <title>Web Development Company in Vijayawada | SMYVISION TECHNOLOGIES</title>
        <meta
          name="description"
          content="SMYVISION TECHNOLOGIES is a web development company in Vijayawada offering website development, web design, custom web development, e-commerce website development, web application development and business automation solutions."
        />

        <meta name="author" content="SMYVISION TECHNOLOGIES" />
        <meta name="publisher" content="SMYVISION TECHNOLOGIES" />
        <meta name="application-name" content="SMYVISION TECHNOLOGIES" />
        <meta
          name="keywords"
          content="web development company in Vijayawada, website development company in Vijayawada, website development Vijayawada, web design company in Vijayawada, website designers in Vijayawada, website developers in Vijayawada, custom web development Vijayawada, custom web application development Vijayawada, e-commerce website development Vijayawada, responsive web design Vijayawada, business website development Vijayawada, professional website development Vijayawada, local business website development Vijayawada"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={`${WEBSITE_URL}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${WEBSITE_URL}/`} />
        <meta property="og:site_name" content="SMYVISION TECHNOLOGIES" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:title" content="Web Development Company in Vijayawada | SMYVISION TECHNOLOGIES" />
        <meta property="og:description" content="Website development, web design, custom web applications, e-commerce website development and business automation services in Vijayawada by SMYVISION TECHNOLOGIES." />
        <meta property="og:image" content={`${WEBSITE_URL}/Logo.png`} />
        <meta property="og:image:alt" content="SMYVISION TECHNOLOGIES web development company in Vijayawada" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Company in Vijayawada | SMYVISION TECHNOLOGIES" />
        <meta name="twitter:description" content="Website development, web design, custom web applications, e-commerce and business automation solutions for businesses in Vijayawada and across India." />
        <meta name="twitter:image" content={`${WEBSITE_URL}/Logo.png`} />
        <meta name="twitter:image:alt" content="SMYVISION TECHNOLOGIES web development company in Vijayawada" />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <style>{styles}</style>

      {/* =====================================================
          ALL UI REMAINS 100% UNCHANGED BELOW
      ====================================================== */}

      <main className="smy-home">
        {/* PREMIUM WHITE SPLIT CONVERSION HERO */}
        <section className="hero-section">
          <div className="hero-bg-dots hero-bg-dots-left" aria-hidden="true" />
          <div className="hero-bg-dots hero-bg-dots-right" aria-hidden="true" />
          <motion.div
            className="hero-soft-shape hero-soft-shape-one"
            aria-hidden="true"
            animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="hero-soft-shape hero-soft-shape-two"
            aria-hidden="true"
            animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          />

        <div className="container hero-split-layout">
  <motion.div
    className="hero-left"
    initial="hidden"
    animate="visible"
    variants={stagger}
  >
    {/* LOCAL SEO / PRIMARY SERVICE SIGNAL */}
    <motion.div className="hero-split-kicker" variants={fadeUp}>
      <span /> WEB DEVELOPMENT COMPANY IN VIJAYAWADA
    </motion.div>

    {/* MAIN H1 */}
    <motion.h1 variants={fadeUp}>
      Professional Websites
      <span>That Turn Visitors</span>
      <strong>Into Paying Clients.</strong>
    </motion.h1>

    <motion.div className="hero-accent-line" variants={fadeUp} />

    {/* SEO + USER-FOCUSED DESCRIPTION */}
    <motion.p className="hero-split-copy" variants={fadeUp}>
      SMYVISION TECHNOLOGIES provides professional website development,
      custom web development and e-commerce solutions for businesses in
      Vijayawada and across India.
    </motion.p>

    <motion.div className="hero-benefit-row" variants={fadeUp}>
      <div className="hero-benefit-item">
        <div className="hero-benefit-icon">
          <FaBullseye />
        </div>
        <div>
          <strong>Goal Focused</strong>
          <span>Built around your business goals</span>
        </div>
      </div>

      <div className="hero-benefit-item">
        <div className="hero-benefit-icon">
          <FaRocket />
        </div>
        <div>
          <strong>High Performance</strong>
          <span>Fast, polished and conversion ready</span>
        </div>
      </div>

      <div className="hero-benefit-item">
        <div className="hero-benefit-icon">
          <FaShieldHalved />
        </div>
        <div>
          <strong>Reliable Support</strong>
          <span>Support that keeps you moving forward</span>
        </div>
      </div>
    </motion.div>

    <motion.div className="hero-split-actions" variants={fadeUp}>
      <button
        type="button"
        className="hero-primary-cta"
        onClick={goToContact}
      >
        Get Free Consultation <FaArrowRight />
      </button>

      <button
        type="button"
        className="hero-outline-cta"
        onClick={() => navigate("/portfolio")}
      >
        View Our Work <FaArrowUpRightFromSquare />
      </button>
    </motion.div>

    <motion.button
      className="hero-whatsapp-link"
      type="button"
      onClick={openWhatsApp}
      variants={fadeUp}
    >
      <FaWhatsapp /> Chat with us on WhatsApp
    </motion.button>
  </motion.div>

  {/* RIGHT SIDE */}
  <motion.div
    className="hero-right"
    initial={{ opacity: 0, x: 55, scale: 0.96 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{
      duration: 0.9,
      delay: 0.12,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <div className="hero-image-frame">
      <motion.img
        src="/images/vijaywada.webp"
        alt="SMYVISION TECHNOLOGIES web development company in Vijayawada"
        onError={(event) => {
          const fallback =
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=88";

          if (event.currentTarget.src !== fallback) {
            event.currentTarget.src = fallback;
          }
        }}
        animate={{ scale: [1, 1.025, 1] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="hero-image-overlay" />
    </div>

    <motion.div
      className="hero-result-card"
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="result-card-head">
        <div>
          <span>RESULTS THAT MATTER</span>
          <strong>Built to support enquiries.</strong>
        </div>

        <div className="result-live">
          <i /> LIVE
        </div>
      </div>

      <p>Clear message. Better experience. Stronger action.</p>

      <svg
        viewBox="0 0 320 86"
        role="img"
        aria-label="Illustrative rising conversion path"
      >
        <defs>
          <linearGradient
            id="heroLineFill"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#1767f2"
              stopOpacity=".22"
            />
            <stop
              offset="100%"
              stopColor="#1767f2"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <path
          className="result-area"
          d="M6,75 C45,72 59,54 91,58 C126,64 140,43 169,46 C205,50 215,29 243,31 C275,34 288,17 314,9 L314,86 L6,86 Z"
        />

        <motion.path
          className="result-line"
          d="M6,75 C45,72 59,54 91,58 C126,64 140,43 169,46 C205,50 215,29 243,31 C275,34 288,17 314,9"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.circle
          cx="314"
          cy="9"
          r="5"
          className="result-point"
          animate={{ r: [4, 7, 4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </svg>
    </motion.div>

    <motion.div
      className="hero-image-tag"
      animate={{ x: [0, 7, 0] }}
      transition={{
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <FaCircleCheck />
      <span>
        <strong>Custom-built</strong> for your brand
      </span>
    </motion.div>
  </motion.div>
</div>
        </section>

        {/* PROJECT MARQUEE - DIRECTLY AFTER HERO */}
        <section className="hero-projects-section">
          <div className="container hero-projects-heading">
            <span>Websites We’ve Built For Businesses Across Industries</span>
            <div className="hero-projects-heading-line"><i /><FaArrowRight /><i /></div>
          </div>
          <div className="hero-project-marquee"><div className="hero-project-track">
            {[...projectMarqueeRowOne, ...projectMarqueeRowOne, ...projectMarqueeRowOne].map((project, index) => (
              <ProjectMarqueeCard
                project={project}
                key={`${project.title}-hero-${index}`}
                onImageClick={openFullscreenImage}
              />
            ))}
          </div></div>
          <div className="hero-project-marquee reverse"><div className="hero-project-track">
            {[...projectMarqueeRowTwo, ...projectMarqueeRowTwo, ...projectMarqueeRowTwo].map((project, index) => (
              <ProjectMarqueeCard
                project={project}
                key={`${project.title}-hero-2-${index}`}
                onImageClick={openFullscreenImage}
              />
            ))}
          </div></div>
        </section>

        {/* INTRODUCTION - UNCHANGED */}
        <section className="section intro-section">
          <div className="container intro-layout">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span className="eyebrow" variants={fadeUp}>WEBSITE DEVELOPMENT IN VIJAYAWADA</motion.span>
              <motion.h2 variants={fadeUp}>Professional Website & Custom Web Development in Vijayawada.</motion.h2>
              <motion.p variants={fadeUp}>SMYVISION TECHNOLOGIES provides professional website development and custom web development services in Vijayawada for startups, local businesses and growing companies.</motion.p>
              <motion.p variants={fadeUp}>Our services include business websites, corporate websites, custom web applications, e-commerce development, website redesign and business automation solutions.</motion.p>
              <motion.p variants={fadeUp}>Every project is built around your business goals, customer journey and future growth with responsive design, SEO-ready development and modern technology.</motion.p>
              <motion.button variants={fadeUp} type="button" className="primary-button intro-button" onClick={goToContact}>
                Discuss Your Project<FaArrowRight />
              </motion.button>
            </motion.div>
            <motion.div className="intro-visual-card" initial={{ opacity: 0, rotateY: 12, scale: 0.94 }} whileInView={{ opacity: 1, rotateY: 0, scale: 1 }} viewport={{ once: true }}>
              <div className="intro-icon"><FaGlobe /></div>
              <span>ONE DIGITAL PARTNER</span>
              <h3>From Your First Idea to a Complete Digital Solution.</h3>
              <div className="intro-points">
                {["Professional brand presentation", "Responsive customer experiences", "Smart business automation", "Modern technology stack", "SEO-ready development", "AI-powered solutions", "Clear customer journeys", "Scalable digital systems"].map((item, index) => (
                  <motion.div
                    className="intro-point-item"
                    key={item}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -42 : 42, scale: .96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: .35 }}
                    transition={{ duration: .62, delay: index * .07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.span
                      className="intro-tick"
                      animate={{ scale: [1, 1.22, 1], opacity: [1, .55, 1] }}
                      transition={{ duration: 1.55, repeat: Infinity, delay: index * .16, ease: "easeInOut" }}
                    >
                      <FaCheck />
                    </motion.span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA STRIP - UNCHANGED */}
        <section className="quote-strip-section">
          <div className="container">
            <motion.div className="quote-strip" whileInView={{ opacity: [0, 1], y: [30, 0] }} viewport={{ once: true }}>
              <div className="quote-strip-icon"><FaLightbulb /></div>
              <div>
                <span>HAVE AN IDEA?</span>
                <h2>Let's Explore the Right Digital Solution for Your Business.</h2>
                <p>Share your requirements and get a free initial project consultation.</p>
              </div>
              <button type="button" onClick={goToContact}>Get a Free Quote<FaArrowRight /></button>
            </motion.div>
          </div>
        </section>

        {/* SERVICES - UNCHANGED */}
        <section className="section services-section">
          <div className="container">
            <SectionHeader eyebrow="PREMIUM DIGITAL SERVICES" title="Custom Digital Solutions Built Around Your Business" text="From premium business websites to custom web development, e-commerce, automation and AI solutions — every project is shaped around your real requirements." />
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.article className="service-card" key={service.title} initial={{ opacity: 0, y: 40, rotateX: 5 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <div className="service-image-wrap">
                    <img
                      src={service.image}
                      alt={`${service.title} service by SMYVISION TECHNOLOGIES`}
                      onClick={(event) =>
                        openFullscreenImage(
                          event.currentTarget.currentSrc || event.currentTarget.src,
                          `${service.title} service by SMYVISION TECHNOLOGIES`
                        )
                      }
                      onError={(event) => {
                        if (service.fallback && event.currentTarget.src !== service.fallback) {
                          event.currentTarget.src = service.fallback;
                        }
                      }}
                    />
                    <div className="service-icon">{service.icon}</div>
                  </div>
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-features">
                      {service.features.map((feature) => (
                        <span key={feature}><FaCircleCheck />{feature}</span>
                      ))}
                    </div>
                    <button type="button" onClick={goToContact}>Explore This Service<FaArrowRight /></button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS - UNCHANGED */}
        <section className="section benefits-section">
          <div className="container benefits-layout">
            <div>
              <span className="eyebrow">CREATED FOR BETTER RESULTS</span>
              <h2>Every Detail of Your Digital Experience Matters.</h2>
              <p>We focus on creating websites and digital solutions that are professional, practical and easy for customers to use.</p>
              <button type="button" className="primary-button" onClick={goToContact}>Start Your Project<FaArrowRight /></button>
            </div>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <motion.div className="benefit-card" key={benefit.title} whileInView={{ opacity: [0, 1], y: [25, 0] }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -8 }}>
                  <div>{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK - UNCHANGED */}
        <section className="section process-section">
          <div className="container">
            <SectionHeader eyebrow="HOW WE WORK" title="A Clear Path From Your Business Idea to a Digital Solution" text="Our structured process keeps every stage organized while giving each project the flexibility it needs." />
            <div className="process-path">
              <div className="process-path-line" />
              {processSteps.map((step, index) => (
                <motion.div
                  className={`process-path-item ${index % 2 === 0 ? "left-side" : "right-side"}`}
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -90 : 90, y: 28, scale: .96, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: .78, delay: index * .05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="process-content">
                    <span>STEP {step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <motion.div
                    className="process-center-icon"
                    whileInView={{ scale: [0.55, 1.18, 1], rotate: [0, index % 2 === 0 ? -8 : 8, 0] }}
                    animate={{ boxShadow: ["0 0 0 0 rgba(7,88,232,.18)", "0 0 0 12px rgba(7,88,232,0)", "0 0 0 0 rgba(7,88,232,0)"] }}
                    transition={{ scale: { duration: .7 }, rotate: { duration: .7 }, boxShadow: { duration: 2.6, repeat: Infinity, delay: index * .22 } }}
                    viewport={{ once: true }}
                  >{step.icon}</motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US - UNCHANGED */}
        <section className="section why-section">
          <div className="container">
            <SectionHeader eyebrow="WHY SMYVISION" title="A Digital Partner Focused on Your Business Goals" text="Our goal is to combine technology and practical thinking to create solutions that genuinely support your business." />
            <div className="why-grid">
              {reasons.map((reason, index) => (
                <motion.div className="why-card" key={reason.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -10 }}>
                  <div>{reason.icon}</div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES - UNCHANGED */}
        <section className="industries-section">
          <div className="container industries-layout">
            <div>
              <span className="eyebrow">INDUSTRIES WE SUPPORT</span>
              <h2>Digital Solutions Adapted to Different Business Industries.</h2>
              <p>Different industries have different customers, workflows and challenges. Our approach is built around understanding those differences.</p>
            </div>
            <div className="industry-tags">
              {industries.map((industry, index) => (
                <motion.span
                  className="industry-chip"
                  key={industry}
                  initial={{ opacity: 0, y: 24, scale: .9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: .45 }}
                  transition={{ duration: .55, delay: index * .055, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.07, y: -5 }}
                ><motion.span className="industry-spark" animate={{ rotate: [0, 12, -10, 0], scale: [1, 1.18, 1] }} transition={{ duration: 2.4, repeat: Infinity, delay: index * .12 }}><FaWandMagicSparkles /></motion.span>{industry}</motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS - UNCHANGED */}
        <section className="section reviews-section">
          <div className="container">
            <SectionHeader eyebrow="CLIENT EXPERIENCES" title="What Businesses Say About Working With Us" text="Every project begins with understanding the business and ends with creating a digital experience designed around its requirements." />
            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <motion.article className="review-card" key={review.name} initial={{ opacity: 0, rotateY: 8, y: 30 }} whileInView={{ opacity: 1, rotateY: 0, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <div className="review-header">
                    <div className="quote-icon"><FaQuoteLeft /></div>
                    <div className="stars">{[1, 2, 3, 4, 5].map((star, starIndex) => (
                      <motion.span
                        className="animated-star"
                        key={star}
                        animate={{ scale: [1, 1.28, 1], rotate: [0, -7, 7, 0], filter: ["drop-shadow(0 0 0 rgba(243,170,22,0))", "drop-shadow(0 0 8px rgba(243,170,22,.65))", "drop-shadow(0 0 0 rgba(243,170,22,0))"] }}
                        transition={{ duration: 1.7, repeat: Infinity, delay: starIndex * .16 + index * .08, ease: "easeInOut" }}
                      ><FaStar /></motion.span>
                    ))}</div>
                  </div>
                  <p>"{review.review}"</p>
                  <div className="review-user">
                    <div>{review.name.charAt(0)}</div>
                    <span><strong>{review.name}</strong><small>{review.role}</small></span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* MORE CONTENT - UNCHANGED */}
        <section className="section digital-growth-section">
          <div className="container digital-growth-layout">
            <div>
              <span className="eyebrow">YOUR WEBSITE DEVELOPMENT PARTNER</span>
              <h2>Helping Vijayawada Businesses Build a Professional Online Presence.</h2>
              <p>Businesses in Vijayawada and across India increasingly rely on their online presence to help customers understand their services, view their work and make enquiries. We build responsive websites designed to make that experience simple and professional.</p>
              <p>SMYVISION TECHNOLOGIES helps businesses create responsive websites, custom web applications and digital systems that support enquiries, customer communication and day-to-day operations.</p>
              <p>Whether you are launching a new business website or improving an existing digital platform, we focus on clean structure, strong usability, SEO-ready development and room for future growth.</p>
              <button type="button" className="primary-button" onClick={goToContact}>Build Your Digital Presence<FaArrowRight /></button>
            </div>
            <div className="growth-cards">
              <motion.div whileHover={{ y: -8 }}><FaBuilding /><h3>For Growing Businesses</h3><p>Build a professional digital foundation that strengthens your business presence.</p></motion.div>
              <motion.div whileHover={{ y: -8 }}><FaBriefcase /><h3>For Established Companies</h3><p>Modernize existing processes and digital experiences with smarter solutions.</p></motion.div>
              <motion.div whileHover={{ y: -8 }}><FaLightbulb /><h3>For New Ideas</h3><p>Turn an idea into a functional website, platform or digital business solution.</p></motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq-section">
          <div className="container faq-layout">
            <div className="faq-heading">
              <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2>Questions Before You Start? We’ve Got Answers.</h2>
              <p>Find answers to common questions about website development, responsive design, custom web applications, automation and our project process.</p>
              <button type="button" className="faq-whatsapp-button" onClick={openWhatsApp}><FaWhatsapp />Ask Us on WhatsApp</button>
            </div>
            <div className="faq-list">
              {faqItems.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <motion.div className={`faq-item ${isOpen ? "active" : ""}`} key={faq.question} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <button type="button" className="faq-question" onClick={() => toggleFaq(index)} aria-expanded={isOpen}>
                      <span><small>{String(index + 1).padStart(2, "0")}</small>{faq.question}</span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><FaChevronDown /></motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                          <p>{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FREE QUOTE - UNCHANGED */}
        <section className="big-quote-section">
          <div className="container big-quote-layout">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span>READY TO START?</span>
              <h2>Let's Turn Your Next Business Idea Into Something Powerful.</h2>
              <p>Tell us what you want to build. We will understand your requirements and help you explore the right solution.</p>
              <div className="quote-checks">
                <span><FaCircleCheck />Free initial discussion</span>
                <span><FaCircleCheck />Requirement analysis</span>
                <span><FaCircleCheck />Suitable solution recommendation</span>
              </div>
            </motion.div>
            <motion.div className="quote-action-card" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div><FaRocket /></div>
              <h3>Start Your Project Today</h3>
              <p>Share your business requirements and get started with a free project discussion.</p>
              <button type="button" className="white-button" onClick={goToContact}>Get a Free Quote<FaArrowRight /></button>
              <button type="button" className="whatsapp-button" onClick={openWhatsApp}><FaWhatsapp />WhatsApp Us</button>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA - UNCHANGED */}
        <section className="final-cta">
          <div className="container">
            <motion.div className="final-cta-content" whileInView={{ opacity: [0, 1], y: [35, 0] }} viewport={{ once: true }}>
              <motion.div className="final-icon" animate={{ y: [0, -8, 0], rotate: [0, 4, 0, -4, 0] }} transition={{ duration: 4, repeat: Infinity }}><FaRocket /></motion.div>
              <span>LET'S BUILD SOMETHING GREAT</span>
              <h2>Ready to Build the Next Stage of Your Digital Business?</h2>
              <p>Let's create a professional digital experience designed around your business, your customers and your future goals.</p>
              <div className="final-buttons">
                <button type="button" className="white-button" onClick={goToContact}>Get Your Free Quote<FaArrowRight /></button>
                <button type="button" className="whatsapp-button" onClick={openWhatsApp}><FaWhatsapp />WhatsApp Us</button>
                <button type="button" className="call-button" onClick={callNow}>Call {PHONE_NUMBER}</button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            className="image-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={closeFullscreenImage}
            role="dialog"
            aria-modal="true"
            aria-label="Full screen image preview"
          >
            <button
              type="button"
              className="image-lightbox-close"
              onClick={(event) => {
                event.stopPropagation();
                closeFullscreenImage();
              }}
              aria-label="Close full screen image"
            >
              ×
            </button>

            <motion.img
              src={fullscreenImage.src}
              alt={fullscreenImage.alt}
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={closeFullscreenImage}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* =========================================================
   SECTION HEADER COMPONENT (UNCHANGED)
========================================================= */

const SectionHeader = ({ eyebrow, title, text }) => {
  return (
    <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
      <motion.span variants={fadeUp}>{eyebrow}</motion.span>
      <motion.h2 variants={fadeUp}>{title}</motion.h2>
      <motion.p variants={fadeUp}>{text}</motion.p>
    </motion.div>
  );
};

/* =========================================================
   PROJECT MARQUEE CARD (UNCHANGED)
========================================================= */

const ProjectMarqueeCard = ({ project, onImageClick }) => {
  return (
    <div className="project-marquee-card">
      <img
        src={project.image}
        alt={`${project.title} project`}
        onClick={(event) => {
          if (onImageClick) {
            onImageClick(
              event.currentTarget.currentSrc || event.currentTarget.src,
              `${project.title} project`
            );
          }
        }}
        onError={(event) => {
          if (project.fallback && event.currentTarget.src !== project.fallback) {
            event.currentTarget.src = project.fallback;
          }
        }}
      />
      <div>
        <strong>{project.title}</strong>
        <span>{project.category}</span>
      </div>
    </div>
  );
};

/* =========================================================
   CSS (UNCHANGED)
========================================================= */

const styles = `
  :root {
    --primary: #0758e8;
    --secondary: #6d28d9;
    --heading: #07162d;
    --text: #607086;
    --light: #f7f9fd;
    --border: #e2e8f2;
    --green: #13a976;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: var(--text);
    background: white;
    -webkit-font-smoothing: antialiased;
  }

  button,
  a {
    font: inherit;
  }

  button {
    border: 0;
  }

  .smy-home {
    overflow: hidden;
  }

  .container {
    width: min(1180px, calc(100% - 40px));
    margin: auto;
  }

  .section {
    padding: 110px 0;
  }

  .eyebrow {
    display: inline-block;
    margin-bottom: 14px;
    color: var(--primary);
    font-size: 11px;
    font-weight: 850;
    letter-spacing: .15em;
  }

  /* =========================================================
     COMMON
  ========================================================= */

  .section-header {
    max-width: 780px;
    margin: 0 auto 60px;
    text-align: center;
  }

  .section-header > span {
    display: inline-block;
    margin-bottom: 14px;
    color: var(--primary);
    font-size: 11px;
    font-weight: 850;
    letter-spacing: .15em;
  }

  .section-header h2,
  .intro-layout h2,
  .benefits-layout > div:first-child h2,
  .digital-growth-layout h2,
  .faq-heading h2 {
    margin: 0 0 18px;
    color: var(--heading);
    font-size: clamp(2.1rem, 4vw, 3.5rem);
    line-height: 1.07;
    letter-spacing: -.045em;
  }

  .section-header p {
    margin: 0;
    font-size: 16px;
    line-height: 1.8;
  }

  .primary-button,
  .secondary-button {
    min-height: 54px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 0 24px;
    border-radius: 13px;
    font-weight: 750;
    cursor: pointer;
    transition: .3s;
  }

  .primary-button {
    color: white;
    background: linear-gradient(135deg, #0758e8, #6338db);
    box-shadow: 0 14px 30px rgba(7,88,232,.25);
  }

  .secondary-button {
    color: var(--heading);
    background: white;
    border: 1px solid #dce4ef;
  }

  .primary-button:hover,
  .secondary-button:hover {
    transform: translateY(-4px) scale(1.02);
  }

  /* =========================================================
     PREMIUM WHITE SPLIT CONVERSION HERO — REFERENCE MATCH
  ========================================================= */
  .hero-section {
    position: relative;
    min-height: 620px;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 102px 0 58px;
    isolation: isolate;
    background:
      radial-gradient(circle at 2% 78%, rgba(39,106,242,.075), transparent 18%),
      radial-gradient(circle at 96% 8%, rgba(78,92,255,.08), transparent 20%),
      linear-gradient(180deg,#ffffff 0%,#ffffff 78%,#f8fbff 100%);
    border-bottom: 1px solid #edf2f8;
  }

  .hero-bg-dots {
    position:absolute; width:128px; height:128px; z-index:-2; opacity:.38; pointer-events:none;
    background-image:radial-gradient(circle,#82adf8 1.35px,transparent 1.55px);
    background-size:14px 14px;
  }
  .hero-bg-dots-left { left:-18px; top:158px; }
  .hero-bg-dots-right { right:10px; bottom:50px; }

  .hero-soft-shape {
    position:absolute; z-index:-3; pointer-events:none; border-radius:36px;
    background:linear-gradient(145deg,rgba(45,112,255,.105),rgba(108,86,245,.025));
  }
  .hero-soft-shape-one { width:145px;height:145px;left:-80px;bottom:35px;transform:rotate(28deg); }
  .hero-soft-shape-two { width:105px;height:105px;right:45px;top:80px;transform:rotate(18deg); }

  .hero-split-layout {
    position:relative; z-index:2; display:grid;
    grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr);
    align-items:center; gap:52px;
  }
  .hero-left { min-width:0; }

  .hero-split-kicker {
    display:inline-flex; align-items:center; gap:9px; margin-bottom:18px;
    color:#1f63cd; font-size:9px; font-weight:850; letter-spacing:.145em; text-transform:uppercase;
  }
  .hero-split-kicker > span {
    width:8px;height:8px;border-radius:50%;background:#1767f2;box-shadow:0 0 0 5px rgba(23,103,242,.08);
  }

  .hero-left h1 {
    margin:0; max-width:650px; color:#071a35;
    font-size:clamp(2.7rem,4.1vw,4.45rem);
    line-height:1.015; letter-spacing:-.052em; font-weight:850; text-wrap:balance;
  }
  .hero-left h1 > span { display:block;color:#071a35; }
  .hero-left h1 > strong {
    display:block;font:inherit;color:#1264ef;
    background:linear-gradient(100deg,#1264ef,#256cf4 55%,#4d46e7);
    -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
  }

  .hero-accent-line {
    width:42px;height:4px;border-radius:99px;margin:19px 0 17px;
    background:linear-gradient(90deg,#1264ef,#5d3be6);box-shadow:0 4px 12px rgba(18,100,239,.15);
  }

  .hero-split-copy {
    max-width:570px;margin:0;color:#63748b;font-size:14px;line-height:1.72;
  }

  .hero-benefit-row {
    display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-top:22px;max-width:620px;
  }
  .hero-benefit-item {
    min-width:0;display:grid;grid-template-columns:38px 1fr;align-items:center;gap:9px;padding:9px 4px 9px 0;
  }
  .hero-benefit-icon {
    width:38px;height:38px;border:1px solid #e2eaf5;border-radius:11px;display:grid;place-items:center;
    color:#1767f2;background:#fff;box-shadow:0 8px 20px rgba(35,75,135,.075);font-size:15px;
  }
  .hero-benefit-item strong { display:block;color:#102642;font-size:10.5px;line-height:1.35; }
  .hero-benefit-item span { display:block;margin-top:2px;color:#7a899d;font-size:8.5px;line-height:1.45; }

  .hero-split-actions { display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin-top:23px; }
  .hero-primary-cta,.hero-outline-cta {
    min-height:49px;padding:0 21px;border-radius:11px;display:inline-flex;align-items:center;justify-content:center;gap:9px;
    font-size:12px;font-weight:800;cursor:pointer;transition:.28s ease;
  }
  .hero-primary-cta { color:#fff;background:linear-gradient(135deg,#0d62ed,#5138e8);box-shadow:0 13px 27px rgba(22,92,218,.20); }
  .hero-outline-cta { color:#1256c8;background:#fff;border:1px solid #9fbfff;box-shadow:0 9px 21px rgba(36,80,145,.045); }
  .hero-primary-cta:hover,.hero-outline-cta:hover { transform:translateY(-3px); }
  .hero-primary-cta svg,.hero-outline-cta svg { transition:transform .25s ease; }
  .hero-primary-cta:hover svg,.hero-outline-cta:hover svg { transform:translate(3px,-1px); }

  .hero-whatsapp-link {
    margin-top:13px;padding:0;background:transparent;color:#40536e;display:inline-flex;align-items:center;gap:7px;
    font-weight:700;font-size:11px;cursor:pointer;border-bottom:1px solid #c7d3e2;
  }
  .hero-whatsapp-link svg { color:#13a976;font-size:17px; }

  .hero-right {
    position:relative;min-width:0;min-height:470px;display:flex;align-items:center;justify-content:center;
  }
  .hero-image-frame {
    position:absolute;inset:0 0 0 10px;overflow:hidden;background:#eaf2ff;
    border-radius:78px 24px 84px 30px;
    clip-path:polygon(20% 0,100% 0,100% 84%,88% 100%,13% 100%,0 74%,8% 19%);
    box-shadow:0 28px 62px rgba(30,72,135,.13);
  }
  .hero-image-frame::before {
    content:"";position:absolute;inset:12px;z-index:3;pointer-events:none;border:1px solid rgba(255,255,255,.62);
    border-radius:66px 18px 70px 24px;
  }
  .hero-image-frame img { width:100%;height:100%;object-fit:cover;display:block;transform-origin:center; }
  .hero-image-overlay { position:absolute;inset:0;background:linear-gradient(120deg,rgba(12,73,178,.055),transparent 46%,rgba(255,255,255,.04)); }

  .hero-right::before {
    content:"";position:absolute;left:-24px;top:64px;width:5px;height:310px;border-radius:999px;
    background:linear-gradient(180deg,transparent,#1767f2 18%,#1767f2 80%,transparent);
    transform:rotate(24deg);z-index:4;box-shadow:0 0 23px rgba(23,103,242,.18);
  }

  .hero-result-card {
    position:absolute;right:20px;bottom:18px;z-index:6;width:min(292px,54%);padding:15px 15px 10px;
    border:1px solid rgba(213,225,243,.95);border-radius:16px;background:rgba(255,255,255,.94);
    box-shadow:0 18px 42px rgba(20,54,104,.16);backdrop-filter:blur(14px);
  }
  .result-card-head { display:flex;justify-content:space-between;align-items:flex-start;gap:10px; }
  .result-card-head span { display:block;color:#2e5f9c;font-size:6.5px;font-weight:900;letter-spacing:.15em; }
  .result-card-head strong { display:block;margin-top:4px;color:#102642;font-size:11.5px; }
  .result-live { display:flex;align-items:center;gap:5px;color:#1767f2;font-size:6.5px;font-weight:900;letter-spacing:.11em; }
  .result-live i { width:6px;height:6px;border-radius:50%;background:#1767f2;box-shadow:0 0 0 4px rgba(23,103,242,.08); }
  .hero-result-card p { margin:6px 0 3px;color:#718197;font-size:8px;line-height:1.4; }
  .hero-result-card svg { width:100%;height:66px;display:block;overflow:visible; }
  .result-area { fill:url(#heroLineFill); }
  .result-line { fill:none;stroke:#1767f2;stroke-width:3;stroke-linecap:round; }
  .result-point { fill:#1767f2; }

  .hero-image-tag {
    position:absolute;left:-2px;bottom:39px;z-index:7;display:flex;align-items:center;gap:7px;padding:9px 11px;
    border:1px solid #e2eaf6;border-radius:11px;background:rgba(255,255,255,.96);
    box-shadow:0 12px 29px rgba(30,70,125,.11);color:#1767f2;backdrop-filter:blur(12px);
  }
  .hero-image-tag span { color:#61728a;font-size:8px; }
  .hero-image-tag strong { color:#102642; }

  /* =========================================================
     TWO-LANE PROJECT MARQUEE - DIRECTLY AFTER HERO
  ========================================================= */
  .hero-projects-section {
    padding: 26px 0 32px;
    overflow: hidden;
    border-bottom: 1px solid #edf1f7;
    background: linear-gradient(180deg,#f8fbff 0%,#ffffff 100%);
  }

  .hero-projects-heading {
    display:flex;align-items:center;gap:22px;margin-bottom:10px;color:#155fd9;font-size:11px;font-weight:800;
  }
  .hero-projects-heading-line { display:flex;align-items:center;gap:10px;flex:1;max-width:260px;color:#6d9df1; }
  .hero-projects-heading-line i { display:block;height:1px;flex:1;background:#a8c2eb; }
  .hero-projects-heading-line svg { font-size:10px; }

  .hero-project-marquee {
    overflow: hidden;
    padding: 6px 0;
  }

  .hero-project-track {
    display: flex;
    width: max-content;
    gap: 12px;
    animation: heroProjects 30s linear infinite;
  }

  .hero-project-marquee.reverse .hero-project-track {
    animation-direction: reverse;
    animation-duration: 34s;
  }

  .hero-project-marquee:hover .hero-project-track {
    animation-play-state: paused;
  }

  .hero-projects-section .project-marquee-card {
    width: 292px;
    padding: 8px;
    border: 1px solid #e1e8f2;
    border-radius: 9px;
    box-shadow: none;
    background: #fff;
    transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
  }

  .hero-projects-section .project-marquee-card:hover {
    transform: translateY(-4px);
    border-color: #b9cce8;
    box-shadow: 0 12px 32px rgba(9,39,83,.07);
  }

  .hero-projects-section .project-marquee-card img {
    border-radius: 6px;
  }

  @keyframes heroProjects {
    from { transform: translateX(0); }
    to { transform: translateX(-33.333%); }
  }

  /* =========================================================
     INTRO
  ========================================================= */

  .intro-layout {
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    gap: 80px;
    align-items: center;
  }

  .intro-layout p {
    font-size: 16px;
    line-height: 1.8;
  }

  .intro-button {
    margin-top: 15px;
  }

  .intro-visual-card {
    padding: 38px;
    background:
      radial-gradient(circle at 85% 10%,rgba(109,40,217,.1),transparent 35%),
      linear-gradient(145deg,#f3f7ff,#fff);
    border: 1px solid var(--border);
    border-radius: 28px;
    box-shadow: 0 25px 70px rgba(10,39,82,.08);
  }

  .intro-icon {
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    margin-bottom: 22px;
    color: white;
    background: linear-gradient(135deg,var(--primary),var(--secondary));
    border-radius: 16px;
    font-size: 24px;
  }

  .intro-visual-card > span {
    color: var(--primary);
    font-size: 10px;
    font-weight: 850;
    letter-spacing: .15em;
  }

  .intro-visual-card h3 {
    color: var(--heading);
    font-size: 25px;
  }

  .intro-points {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 15px;
  }

  .intro-point-item {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 42px;
    padding: 10px 12px;
    font-size: 12px;
    color: #314761;
    background: rgba(255,255,255,.68);
    border: 1px solid rgba(214,225,240,.78);
    border-radius: 13px;
    box-shadow: 0 8px 24px rgba(8,31,72,.035);
    backdrop-filter: blur(8px);
  }

  .intro-tick {
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    display: grid;
    place-items: center;
    color: white;
    background: linear-gradient(135deg,#16b77f,#0b9d70);
    border-radius: 50%;
    box-shadow: 0 5px 14px rgba(19,169,118,.22);
  }

  .intro-tick svg {
    font-size: 11px;
  }

  /* =========================================================
     QUOTE STRIP
  ========================================================= */

  .quote-strip-section {
    padding-bottom: 100px;
  }

  .quote-strip {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 25px;
    align-items: center;
    padding: 32px 38px;
    color: white;
    background: linear-gradient(120deg,#07182f,#0e376f);
    border-radius: 25px;
  }

  .quote-strip-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: rgba(255,255,255,.1);
    border-radius: 17px;
    font-size: 25px;
  }

  .quote-strip span {
    color: #78adff;
    font-size: 9px;
    font-weight: 850;
    letter-spacing: .14em;
  }

  .quote-strip h2 {
    margin: 7px 0;
    color: white;
    font-size: 24px;
  }

  .quote-strip p {
    margin: 0;
    color: #b5c5dc;
    font-size: 12px;
  }

  .quote-strip button {
    min-height: 50px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 20px;
    color: var(--heading);
    background: white;
    border-radius: 12px;
    font-weight: 750;
    cursor: pointer;
  }

  /* =========================================================
     SERVICES
  ========================================================= */

  .services-section {
    background: #f7f9fd;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 24px;
  }

  .service-card {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    background: rgba(255,255,255,.96);
    border: 1px solid var(--border);
    border-radius: 25px;
    box-shadow: 0 14px 40px rgba(9,35,77,.055);
    transform: translateZ(0);
    transition:
      transform .5s cubic-bezier(.22,1,.36,1),
      box-shadow .5s cubic-bezier(.22,1,.36,1),
      border-color .4s ease;
  }

  .service-card::before {
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
        rgba(7,88,232,.085) 38%,
        rgba(109,40,217,.11) 50%,
        rgba(7,88,232,.065) 62%,
        transparent 82%
      );
    transform: translateX(-70%);
    transition:
      opacity .35s ease,
      transform .9s cubic-bezier(.22,1,.36,1);
  }

  .service-card:hover {
    transform: translateY(-12px) scale(1.022);
    border-color: rgba(7,88,232,.34);
    box-shadow:
      0 34px 75px rgba(9,35,77,.17),
      0 12px 30px rgba(7,88,232,.10),
      0 0 0 1px rgba(7,88,232,.07),
      0 0 42px rgba(7,88,232,.08);
  }

  .service-card:hover::before {
    opacity: 1;
    transform: translateX(70%);
  }

  .service-image-wrap {
    height: 220px;
    position: relative;
    overflow: hidden;
    background: #f2f6ff;
  }

  .service-image-wrap::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(
        180deg,
        rgba(255,255,255,0) 42%,
        rgba(6,29,65,.10) 72%,
        rgba(6,29,65,.24) 100%
      );
    transition: opacity .45s ease;
  }

  .service-image-wrap img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    cursor: pointer;
    transform: scale(1.01) translateY(0);
    transition:
      transform .85s cubic-bezier(.22,1,.36,1),
      filter .55s ease;
  }

  .service-card:hover .service-image-wrap img {
    transform: scale(1.085) translateY(-5px);
    filter: saturate(1.10) brightness(1.025) contrast(1.025);
  }

  .service-icon {
    width: 55px;
    height: 55px;
    position: absolute;
    left: 23px;
    bottom: 20px;
    z-index: 2;
    display: grid;
    place-items: center;
    color: white;
    background: linear-gradient(135deg,var(--primary),var(--secondary));
    border: 1px solid rgba(255,255,255,.42);
    border-radius: 16px;
    font-size: 24px;
    box-shadow: 0 10px 24px rgba(7,88,232,.22);
    transition:
      transform .48s cubic-bezier(.22,1,.36,1),
      box-shadow .48s ease;
  }

  .service-card:hover .service-icon {
    transform: translateY(-10px) scale(1.045);
    box-shadow:
      0 20px 38px rgba(7,88,232,.38),
      0 0 0 8px rgba(7,88,232,.085);
  }

  .service-card .service-body {
    position: relative;
    z-index: 1;
    transition: transform .48s cubic-bezier(.22,1,.36,1);
  }

  .service-card:hover .service-body {
    transform: translateY(-4px);
  }

  .service-card .service-body h3,
  .service-card .service-body p,
  .service-card .service-features,
  .service-card .service-body button {
    transition:
      transform .42s cubic-bezier(.22,1,.36,1),
      color .3s ease;
  }

  .service-card:hover .service-body h3 {
    transform: translateY(-1px);
  }

  .service-card:hover .service-body button {
    transform: translateX(8px);
  }

  .service-card:hover .service-features span svg {
    transform: scale(1.08);
  }

  .service-features span svg {
    transition: transform .32s ease;
  }

  .service-body {
    position: relative;
    padding: 30px;
  }

  .service-count {
    display: none;
    position: absolute;
    right: 25px;
    top: 25px;
    color: #dce4f1;
    font-size: 30px;
    font-weight: 850;
  }

  .service-body h3 {
    color: var(--heading);
  }

  .service-body p {
    min-height: 105px;
    font-size: 14px;
    line-height: 1.75;
  }

  .service-features {
    display: grid;
    gap: 10px;
  }

  .service-features span {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
  }

  .service-features svg {
    color: var(--green);
  }

  .service-body button {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 25px;
    padding: 0;
    color: var(--primary);
    background: transparent;
    font-weight: 750;
    cursor: pointer;
  }

  /* =========================================================
     BENEFITS
  ========================================================= */

  .benefits-layout {
    display: grid;
    grid-template-columns: .78fr 1.22fr;
    gap: 70px;
  }

  .benefits-layout > div:first-child p {
    line-height: 1.8;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 20px;
  }

  .benefit-card {
    padding: 30px;
    border: 1px solid var(--border);
    border-radius: 22px;
    background: white;
    transition: .3s;
  }

  .benefit-card > div {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    color: var(--primary);
    background: rgba(7,88,232,.08);
    border-radius: 14px;
    font-size: 21px;
    animation: premiumIconPulse 2.8s ease-in-out infinite;
  }

  .benefit-card h3 {
    color: var(--heading);
  }

  .benefit-card p {
    font-size: 13px;
    line-height: 1.7;
  }

  /* =========================================================
     PROJECTS
  ========================================================= */

  .projects-section {
    background:
      radial-gradient(circle at 10% 15%,rgba(7,88,232,.08),transparent 30%),
      #f6f9fe;
  }

  .project-showcase {
    position: relative;
  }

  .project-main-card {
    overflow: hidden;
    background: white;
    border: 1px solid var(--border);
    border-radius: 30px;
    box-shadow: 0 30px 90px rgba(7,31,72,.13);
  }

  .project-main-layout {
    display: grid;
    grid-template-columns: 1.15fr .85fr;
  }

  .project-image-side {
    padding: 18px;
    background: linear-gradient(145deg,#edf4ff,#f4efff);
  }

  .project-browser {
    overflow: hidden;
    border-radius: 20px;
    background: #111d32;
  }

  .project-browser-top {
    height: 45px;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0 15px;
  }

  .project-browser-top div {
    display: flex;
    gap: 6px;
  }

  .project-browser-top span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,.4);
  }

  .project-browser-top p {
    color: #9eabc0;
    font-size: 8px;
  }

  .project-browser img {
    width: 100%;
    height: 430px;
    object-fit: cover;
    object-position: top;
  }

  .project-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 50px;
  }

  .project-info > span {
    padding: 7px 11px;
    color: var(--primary);
    background: rgba(7,88,232,.08);
    border-radius: 50px;
    font-size: 9px;
    font-weight: 850;
  }

  .project-info h3 {
    margin: 18px 0;
    color: var(--heading);
    font-size: clamp(2rem,4vw,3.4rem);
    line-height: 1;
  }

  .project-info p {
    font-size: 14px;
    line-height: 1.75;
  }

  .project-info a {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
    padding: 13px 18px;
    color: white;
    background: linear-gradient(135deg,var(--primary),var(--secondary));
    border-radius: 11px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 750;
  }

  .project-progress {
    height: 4px;
    background: #e8edf5;
  }

  .project-progress div {
    width: 100%;
    height: 100%;
    transform-origin: left;
    background: linear-gradient(90deg,var(--primary),var(--secondary));
  }

  .project-arrow {
    width: 48px;
    height: 48px;
    position: absolute;
    z-index: 5;
    top: 50%;
    display: grid;
    place-items: center;
    background: white;
    border-radius: 50%;
    box-shadow: 0 12px 35px rgba(8,30,66,.15);
    cursor: pointer;
  }

  .project-arrow.left {
    left: -24px;
  }

  .project-arrow.right {
    right: -24px;
  }

  /* =========================================================
     PROJECT DUAL MARQUEE
  ========================================================= */

  .project-marquee-area {
    margin-top: 55px;
    display: grid;
    gap: 18px;
  }

  .project-marquee {
    overflow: hidden;
    padding: 5px 0;
  }

  .project-marquee-track {
    display: flex;
    gap: 16px;
    width: max-content;
  }

  .marquee-left-right .project-marquee-track {
    animation: projectsLeftRight 28s linear infinite;
  }

  .marquee-right-left .project-marquee-track {
    animation: projectsRightLeft 28s linear infinite;
  }

  .project-marquee:hover .project-marquee-track {
    animation-play-state: paused;
  }

  .project-marquee-card {
    width: 275px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 9px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 17px;
    box-shadow: 0 10px 35px rgba(8,31,72,.07);
  }

  .project-marquee-card img {
    width: 95px;
    height: 68px;
    object-fit: cover;
    border-radius: 11px;
  }

  .project-marquee-card div {
    display: flex;
    flex-direction: column;
  }

  .project-marquee-card strong {
    color: var(--heading);
    font-size: 12px;
  }

  .project-marquee-card span {
    margin-top: 4px;
    font-size: 9px;
  }

  @keyframes projectsLeftRight {
    from { transform: translateX(-33.333%); }
    to { transform: translateX(0); }
  }

  @keyframes projectsRightLeft {
    from { transform: translateX(0); }
    to { transform: translateX(-33.333%); }
  }

  /* =========================================================
     PROCESS PATH
  ========================================================= */

  .process-section {
    background: #f7f9fd;
  }

  .process-path {
    max-width: 950px;
    position: relative;
    margin: 30px auto 0;
  }

  .process-path-line {
    width: 4px;
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(
      to bottom,
      var(--primary),
      var(--secondary),
      var(--primary)
    );
    border-radius: 50px;
  }

  .process-path-item {
    min-height: 190px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 90px 1fr;
    align-items: center;
  }

  .process-content {
    padding: 28px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 22px;
    box-shadow: 0 15px 45px rgba(8,31,72,.06);
  }

  .left-side .process-content {
    grid-column: 1;
    text-align: right;
  }

  .right-side .process-content {
    grid-column: 3;
  }

  .process-content span {
    color: var(--primary);
    font-size: 9px;
    font-weight: 850;
    letter-spacing: .12em;
  }

  .process-content h3 {
    margin: 8px 0;
    color: var(--heading);
    font-size: 20px;
  }

  .process-content p {
    margin: 0;
    font-size: 12px;
    line-height: 1.7;
  }

  .process-center-icon {
    width: 58px;
    height: 58px;
    position: absolute;
    left: 50%;
    z-index: 3;
    display: grid;
    place-items: center;
    transform: translateX(-50%);
    color: white;
    background: linear-gradient(135deg,var(--primary),var(--secondary));
    border: 7px solid #f7f9fd;
    border-radius: 50%;
    font-size: 19px;
  }

  /* =========================================================
     WHY
  ========================================================= */

  .why-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 22px;
  }

  .why-card {
    padding: 34px;
    text-align: center;
    border: 1px solid var(--border);
    border-radius: 22px;
    transition: .3s;
  }

  .why-card > div {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    margin: 0 auto 20px;
    color: white;
    background: linear-gradient(135deg,var(--primary),var(--secondary));
    border-radius: 17px;
    font-size: 23px;
  }

  .why-card h3 {
    color: var(--heading);
  }

  .why-card p {
    font-size: 13px;
    line-height: 1.7;
  }

  /* =========================================================
     INDUSTRIES
  ========================================================= */

  .industries-section {
    padding: 80px 0;
    color: white;
    background: #08172f;
  }

  .industries-layout {
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 70px;
    align-items: center;
  }

  .industries-layout h2 {
    color: white;
    font-size: clamp(2rem,4vw,3.2rem);
  }

  .industries-layout p {
    color: #a9b9d0;
    line-height: 1.8;
  }

  .industry-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 11px;
  }

  .industry-tags > .industry-chip {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 13px 17px;
    overflow: hidden;
    background: linear-gradient(120deg,rgba(255,255,255,.06),rgba(255,255,255,.11),rgba(255,255,255,.06));
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 999px;
    font-size: 11px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
    animation: industryFloat 4.2s ease-in-out infinite;
  }

  .industry-tags > .industry-chip:nth-child(2n) { animation-delay: -.9s; }
  .industry-tags > .industry-chip:nth-child(3n) { animation-delay: -1.7s; }

  .industry-chip::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-130%);
    background: linear-gradient(100deg,transparent,rgba(255,255,255,.14),transparent);
    animation: industrySheen 4.8s ease-in-out infinite;
  }

  .industry-spark {
    position: relative;
    z-index: 1;
    display: inline-grid;
    place-items: center;
    color: #84aaff;
  }

  /* =========================================================
     REVIEWS
  ========================================================= */

  .reviews-grid {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 23px;
  }

  .review-card {
    padding: 34px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 24px;
    box-shadow: 0 15px 50px rgba(8,31,72,.05);
  }

  .review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .quote-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    color: var(--primary);
    background: rgba(7,88,232,.08);
    border-radius: 14px;
  }

  .stars {
    display: flex;
    gap: 4px;
    color: #f3aa16;
  }

  .animated-star {
    display: inline-grid;
    place-items: center;
    color: #f4b21d;
    transform-origin: center;
  }

  .animated-star svg {
    fill: currentColor;
  }

  .review-card > p {
    min-height: 105px;
    margin: 24px 0;
    font-size: 14px;
    line-height: 1.8;
  }

  .review-user {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
  }

  .review-user > div {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    color: white;
    background: linear-gradient(135deg,var(--primary),var(--secondary));
    border-radius: 50%;
    font-weight: 850;
  }

  .review-user span {
    display: flex;
    flex-direction: column;
  }

  .review-user strong {
    color: var(--heading);
    font-size: 13px;
  }

  .review-user small {
    font-size: 10px;
  }

  /* =========================================================
     DIGITAL GROWTH
  ========================================================= */

  .digital-growth-section {
    background: #f7f9fd;
  }

  .digital-growth-layout {
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    gap: 70px;
    align-items: center;
  }

  .digital-growth-layout p {
    font-size: 15px;
    line-height: 1.8;
  }

  .growth-cards {
    display: grid;
    gap: 15px;
  }

  .growth-cards > div {
    padding: 25px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 20px;
  }

  .growth-cards svg {
    color: var(--primary);
    font-size: 23px;
  }

  .growth-cards h3 {
    color: var(--heading);
  }

  .growth-cards p {
    margin: 0;
    font-size: 12px;
  }

  /* =========================================================
     FAQ
  ========================================================= */

  .faq-section {
    background: white;
  }

  .faq-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 38px;
  }

  .faq-heading {
    position: static;
    width: min(760px, 100%);
    margin: 0 auto;
    text-align: center;
  }

  .faq-heading h2 {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }

  .faq-heading p {
    max-width: 660px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.8;
  }

  .faq-whatsapp-button {
    min-height: 52px;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-top: 20px;
    padding: 0 20px;
    color: white;
    background: #16a66f;
    border-radius: 13px;
    font-weight: 750;
    cursor: pointer;
  }

  .faq-whatsapp-button svg {
    font-size: 21px;
  }

  .faq-heading .faq-whatsapp-button {
    margin-left: auto;
    margin-right: auto;
  }

  .faq-list {
    width: min(900px, 100%);
    margin: 0 auto;
    display: grid;
    gap: 12px;
  }

  .faq-item {
    overflow: hidden;
    background: #fafcff;
    border: 1px solid var(--border);
    border-radius: 17px;
    transition: .3s;
  }

  .faq-item.active {
    background: white;
    border-color: rgba(7,88,232,.28);
    box-shadow: 0 15px 40px rgba(8,31,72,.07);
  }

  .faq-question {
    width: 100%;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 16px 21px;
    text-align: left;
    color: var(--heading);
    background: transparent;
    font-weight: 750;
    cursor: pointer;
  }

  .faq-question > span {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .faq-question small {
    color: var(--primary);
    font-size: 9px;
  }

  .faq-question svg {
    color: var(--primary);
  }

  .faq-answer {
    overflow: hidden;
  }

  .faq-answer p {
    margin: 0;
    padding: 0 55px 22px;
    font-size: 13px;
    line-height: 1.8;
  }

  /* =========================================================
     BIG QUOTE
  ========================================================= */

  .big-quote-section {
    padding: 100px 0;
    color: white;
    background:
      radial-gradient(circle at 10% 20%,rgba(27,104,255,.25),transparent 30%),
      linear-gradient(135deg,#07172e,#0b2854);
  }

  .big-quote-layout {
    display: grid;
    grid-template-columns: 1.15fr .85fr;
    gap: 70px;
    align-items: center;
  }

  .big-quote-layout > div:first-child > span {
    color: #75a8ff;
    font-size: 10px;
    font-weight: 850;
    letter-spacing: .15em;
  }

  .big-quote-layout h2 {
    color: white;
    font-size: clamp(2.4rem,4.5vw,4rem);
    line-height: 1.04;
  }

  .big-quote-layout p {
    color: #b3c4dc;
    line-height: 1.8;
  }

  .quote-checks {
    display: grid;
    gap: 11px;
    margin-top: 25px;
  }

  .quote-checks span {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
  }

  .quote-checks svg {
    color: #70a8ff;
  }

  .quote-action-card {
    padding: 36px;
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 25px;
  }

  .quote-action-card > div {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg,#2278ff,#7651e6);
    border-radius: 17px;
    font-size: 25px;
  }

  .quote-action-card h3 {
    color: white;
  }

  .white-button,
  .whatsapp-button,
  .call-button {
    min-height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 0 20px;
    border-radius: 12px;
    font-weight: 750;
    cursor: pointer;
  }

  .white-button {
    width: 100%;
    color: var(--heading);
    background: white;
  }

  .whatsapp-button {
    width: 100%;
    margin-top: 10px;
    color: white;
    background: #15a66f;
  }

  .whatsapp-button svg {
    font-size: 20px;
  }

  /* =========================================================
     FINAL CTA
  ========================================================= */

  .final-cta {
    padding: 110px 0;
    text-align: center;
    color: white;
    background: #06152c;
  }

  .final-cta-content {
    max-width: 850px;
    margin: auto;
  }

  .final-icon {
    width: 65px;
    height: 65px;
    display: grid;
    place-items: center;
    margin: 0 auto 20px;
    background: linear-gradient(135deg,#2778ff,#7652e8);
    border-radius: 19px;
    font-size: 27px;
  }

  .final-cta-content > span {
    color: #76a9ff;
    font-size: 10px;
    font-weight: 850;
    letter-spacing: .15em;
  }

  .final-cta h2 {
    margin: 15px 0;
    color: white;
    font-size: clamp(2.5rem,5vw,4.2rem);
    line-height: 1.04;
  }

  .final-cta p {
    color: #afc0d8;
    line-height: 1.8;
  }

  .final-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 11px;
    margin-top: 30px;
  }

  .final-buttons .white-button,
  .final-buttons .whatsapp-button,
  .final-buttons .call-button {
    width: auto;
    margin: 0;
  }

  .call-button {
    color: white;
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.15);
  }

  @keyframes premiumIconPulse {
    0%,100% { transform: translateY(0) scale(1); box-shadow: 0 0 0 0 rgba(7,88,232,0); }
    50% { transform: translateY(-3px) scale(1.04); box-shadow: 0 0 0 8px rgba(7,88,232,.035); }
  }

  @keyframes industryFloat {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes industrySheen {
    0%,55% { transform: translateX(-130%); }
    78%,100% { transform: translateX(130%); }
  }

  /* =========================================================
     TABLET
  ========================================================= */

  @media (max-width: 1024px) {
    .hero-layout,
    .intro-layout,
    .benefits-layout,
    .digital-growth-layout,
    .faq-layout,
    .big-quote-layout {
      grid-template-columns: 1fr;
    }

    .hero-growth-visual {
      width: 100%;
      max-width: 720px;
      margin: 15px auto 0;
    }

    .hero-content {
      max-width: 820px;
    }

    .hero-stage {
      transform: none;
    }

    .services-grid {
      grid-template-columns: repeat(2,1fr);
    }

    .project-main-layout {
      grid-template-columns: 1fr;
    }

    .why-grid {
      grid-template-columns: repeat(2,1fr);
    }

    .industries-layout {
      grid-template-columns: 1fr;
    }

    .faq-heading {
      position: static;
    }
  }

  /* =========================================================
     MOBILE
  ========================================================= */

  @media (max-width: 768px) {
    .container {
      width: min(100% - 28px,1180px);
    }

    .section {
      padding: 75px 0;
    }

    /* PREMIUM MOBILE INTRO */
    .intro-layout { gap: 42px; }
    .intro-layout > div:first-child {
      text-align: center;
      padding: 0 4px;
    }
    .intro-layout > div:first-child .eyebrow {
      margin-left: auto;
      margin-right: auto;
    }
    .intro-layout > div:first-child h2 {
      max-width: 520px;
      margin-left: auto;
      margin-right: auto;
      font-size: clamp(2rem,9vw,2.75rem);
      line-height: 1.05;
    }
    .intro-layout > div:first-child p {
      max-width: 570px;
      margin-left: auto;
      margin-right: auto;
      font-size: 15px;
      line-height: 1.82;
    }
    .intro-button {
      display: inline-flex !important;
      width: auto !important;
      min-width: 220px;
      margin: 20px auto 0 !important;
    }
    .intro-visual-card {
      text-align: center;
      padding: 30px 22px;
    }
    .intro-icon {
      margin: 0 auto 20px;
    }
    .intro-points {
      max-width: 540px;
      margin: 22px auto 0;
      text-align: left;
    }
    .benefit-card { text-align: center; }
    .benefit-card > div { margin-left: auto; margin-right: auto; }
    .quote-icon { margin-left: auto; margin-right: auto; }
    .review-header { align-items: center; }

    .hero-section { padding:105px 0 34px; }
    .hero-copy { max-width:720px; }
    .hero-eyebrow { font-size:7px; gap:9px; line-height:1.55; }
    .hero-eyebrow span { width:22px; }
    .hero-copy h1 { font-size:clamp(2.65rem,12vw,4.65rem); line-height:.96; }
    .hero-description { max-width:620px; font-size:15px; line-height:1.72; padding:0 4px; }
    .hero-actions { flex-direction:column; gap:13px; }
    .hero-main-cta { width:100%; max-width:390px; }
    .hero-link-cta { margin-left:auto; margin-right:auto; }
    .hero-microcopy { max-width:390px; margin-left:auto; margin-right:auto; line-height:1.5; }
    .hero-stage { height:470px; margin-top:42px; }
    .line-one { width:92vw; height:340px; }
    .line-two { width:75vw; height:280px; }
    .stage-card-left { left:-11%; top:105px; width:43vw; min-width:165px; max-width:240px; height:270px; border-radius:15px; }
    .stage-card-right { right:-11%; top:105px; width:43vw; min-width:165px; max-width:240px; height:270px; border-radius:15px; }
    .stage-card-main { top:25px; width:min(74vw,390px); height:385px; border-radius:18px; }
    .stage-card-top { min-height:38px; padding:0 11px; }
    .stage-card-top span,.stage-card-top small { font-size:5.5px; }
    .stage-card-caption { left:10px; right:10px; bottom:10px; min-height:62px; padding:10px 10px 10px 13px; border-radius:12px; }
    .stage-card-caption strong { font-size:12px; }
    .stage-card-caption button { width:36px; height:36px; }
    .hero-stage-badge { padding:9px 10px; border-radius:11px; }
    .hero-stage-badge span { font-size:8px; }
    .hero-stage-badge > svg { font-size:14px; }
    .badge-left { left:2px; bottom:17px; }
    .badge-right { right:2px; bottom:38px; }
    .hero-portfolio-link { margin-top:0; }
    .hero-projects-section { padding:38px 0 44px; }
    .hero-projects-section .project-marquee-card { width:245px; }
    .portfolio-link-wrap { justify-content:center; }
    .portfolio-text-link { margin-left:auto; margin-right:auto; }

    /* MOBILE CTA / LINK ALIGNMENT */
    .primary-button,
    .secondary-button,
    .intro-button,
    .service-body button,
    .benefits-layout > div:first-child .primary-button,
    .project-info a,
    .faq-whatsapp-button,
    .white-button,
    .whatsapp-button,
    .call-button {
      margin-left:auto;
      margin-right:auto;
      justify-content:center;
    }

    .service-body,
    .benefits-layout > div:first-child,
    .faq-heading,
    .digital-growth-layout > div:first-child {
      text-align:center;
    }

    .quote-strip {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .quote-strip-icon {
      margin: auto;
    }

    .quote-strip button {
      justify-content: center;
    }

    .services-grid,
    .benefits-grid,
    .reviews-grid,
    .why-grid {
      grid-template-columns: 1fr;
    }

    .project-browser img {
      height: 270px;
    }

    .project-info {
      padding: 30px 24px;
    }

    .project-arrow.left {
      left: -5px;
    }

    .project-arrow.right {
      right: -5px;
    }

    .process-path-line {
      left: 29px;
    }

    .process-path-item {
      min-height: auto;
      display: block;
      margin-bottom: 25px;
      padding-left: 70px;
    }

    .process-content {
      text-align: left !important;
    }

    .process-center-icon {
      left: 29px;
      top: 28px;
    }

    .industries-layout {
      text-align: center;
    }

    .industry-tags {
      justify-content: center;
    }

    .faq-answer p {
      padding: 0 20px 20px;
    }

    .final-buttons {
      flex-direction: column;
    }

    .final-buttons .white-button,
    .final-buttons .whatsapp-button,
    .final-buttons .call-button {
      width: 100%;
    }
  }

  /* =========================================================
     SMALL MOBILE
  ========================================================= */

  @media (max-width: 480px) {
    .hero-content h1 { font-size:2.55rem; }
    .hero-kicker { max-width:92%; }
    .hero-main-cta { min-height:56px; padding:0 17px; font-size:13px; }
    .hero-art { min-height:455px; }
    .hero-art-canvas { width:100%; min-height:390px; border-radius:20px; }
    .canvas-topbar { min-height:64px; padding:0 15px; }
    .canvas-status { display:none; }
    .canvas-body { min-height:270px; grid-template-columns:1.08fr .92fr; gap:9px; padding:22px 14px 18px; }
    .canvas-eyebrow { font-size:6px; }
    .canvas-copy h2 { font-size:1.75rem; }
    .canvas-copy-lines { margin:16px 0; }
    .visual-blue-card { inset:15px 0 10px 11px; padding:16px; border-radius:18px; }
    .visual-blue-card strong { font-size:17px; }
    .visual-ring { width:43px; height:43px; font-size:17px; }
    .visual-glass-card { min-width:98px; padding:9px; font-size:7px; }
    .glass-one { left:-12px; top:30px; }
    .glass-two { right:-7px; bottom:28px; }
    .canvas-footer { gap:8px; padding:0 9px; font-size:6px; }
    .hero-floating-chip { padding:9px 10px; gap:8px; }
    .hero-floating-chip strong { font-size:7px; }
    .hero-floating-chip small { font-size:5px; }
    .chip-icon { width:29px; height:29px; }
    .chip-design { left:-7px; top:71px; }
    .chip-convert { right:-6px; bottom:48px; }
    .hero-proof { gap:9px 12px; }

    .stats-grid div {
      padding: 20px 8px;
    }

    .intro-points {
      grid-template-columns: 1fr;
      gap: 10px;
    }
    .intro-point-item {
      justify-content: flex-start;
      min-height: 46px;
      padding: 10px 12px;
      font-size: 11.5px;
    }
    .intro-visual-card h3 {
      font-size: 22px;
      line-height: 1.2;
    }

    .project-marquee-card {
      width: 220px;
    }

    .project-marquee-card img {
      width: 75px;
      height: 58px;
    }

    .service-image-wrap {
      height: 190px;
    }

    .review-card,
    .why-card,
    .benefit-card {
      padding: 25px;
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

  @media (max-width: 480px) {
    .hero-section { padding-top:126px; }
    .hero-copy h1 { font-size:clamp(2.35rem,12.8vw,3.55rem); }
    .hero-description { font-size:14px; }
    .hero-stage { height:410px; margin-top:34px; }
    .stage-card-main { width:78vw; height:330px; }
    .stage-card-left,.stage-card-right { width:42vw; min-width:145px; height:225px; top:95px; }
    .stage-card-left { left:-15%; }
    .stage-card-right { right:-15%; }
    .hero-stage-badge { display:none; }
    .line-one { height:280px; }
    .line-two { height:225px; }
    .hero-microcopy i { display:none; }
    .hero-microcopy { gap:7px 12px; }
  }

  /* =========================================================
     WHITE SPLIT HERO — RESPONSIVE ON EVERY SCREEN
  ========================================================= */
  @media (max-width: 1180px) {
    .hero-split-layout { grid-template-columns:minmax(0,.96fr) minmax(0,1.04fr);gap:36px; }
    .hero-left h1 { font-size:clamp(2.6rem,4vw,3.95rem); }
    .hero-right { min-height:440px; }
    .hero-result-card { width:min(275px,56%); }
  }

  @media (max-width: 1024px) {
    .hero-section { padding:100px 0 54px; }
    .hero-left h1 { font-size:clamp(2.55rem,4.6vw,3.7rem); }
    .hero-split-copy { font-size:13.5px; }
    .hero-benefit-item { grid-template-columns:36px 1fr;gap:7px; }
    .hero-benefit-icon { width:36px;height:36px; }
    .hero-right { min-height:410px; }
  }

  @media (max-width: 900px) {
    .hero-section { padding:104px 0 50px;min-height:auto; }
    .hero-split-layout { grid-template-columns:1fr;gap:40px; }
    .hero-left { text-align:center;max-width:760px;margin:0 auto; }
    .hero-split-kicker { justify-content:center; }
    .hero-left h1 { max-width:680px;margin:0 auto;font-size:clamp(2.65rem,7vw,3.75rem); }
    .hero-split-copy { max-width:590px;margin-left:auto;margin-right:auto; }
    .hero-accent-line { margin-left:auto;margin-right:auto; }
    .hero-benefit-row { max-width:620px;margin-left:auto;margin-right:auto; }
    .hero-split-actions { justify-content:center; }
    .hero-whatsapp-link { margin-left:auto;margin-right:auto; }
    .hero-right { width:min(720px,100%);min-height:455px;margin:0 auto; }
    .hero-image-frame { inset:0 22px; }
    .hero-right::before { left:10px;height:285px; }
    .hero-image-tag { left:20px; }
  }

  @media (max-width: 768px) {
    .hero-section { padding:128px 0 44px; }
    .hero-bg-dots { opacity:.26; }
    .hero-soft-shape { opacity:.72; }
    .hero-split-kicker { font-size:8px;letter-spacing:.12em;margin:10px 0 16px; }
    .hero-left h1 { font-size:clamp(2.35rem,9.6vw,3.25rem);line-height:1.02;letter-spacing:-.048em; }
    .hero-accent-line { width:38px;margin-top:16px;margin-bottom:14px; }
    .hero-split-copy { font-size:13.5px;line-height:1.65;padding:0 8px; }
    .hero-benefit-row { grid-template-columns:repeat(3,minmax(0,1fr));max-width:610px;gap:5px;margin-top:18px; }
    .hero-benefit-item { grid-template-columns:1fr;text-align:center;justify-items:center;gap:6px;padding:8px 3px; }
    .hero-benefit-item strong { font-size:10px; }
    .hero-benefit-item span { font-size:8px; }
    .hero-split-actions { margin-top:19px;justify-content:center; }
    .hero-primary-cta,.hero-outline-cta { min-height:48px;padding:0 18px;font-size:11.5px; }
    .hero-right { min-height:400px; }
    .hero-image-frame { inset:0 7px;border-radius:52px 18px 57px 22px;clip-path:polygon(14% 0,100% 0,100% 85%,89% 100%,8% 100%,0 78%,5% 17%); }
    .hero-right::before { display:none; }
    .hero-result-card { right:15px;bottom:11px;width:min(280px,68%); }
    .hero-image-tag { left:14px;bottom:32px; }
    .hero-projects-heading { justify-content:center;text-align:center;font-size:10px;flex-wrap:wrap;gap:8px;margin-bottom:8px; }
    .hero-projects-heading-line { display:none; }
    .hero-projects-section { padding:22px 0 27px; }
    .hero-projects-section .project-marquee-card { width:235px; }

    .faq-layout { gap:28px; }
    .faq-heading { width:100%; text-align:center; }
    .faq-heading h2 { font-size:clamp(2rem,8vw,2.65rem); line-height:1.08; }
    .faq-heading p { font-size:14px; line-height:1.7; padding:0 4px; }
    .faq-list { width:100%; max-width:720px; }
    .faq-question { min-height:64px; padding:15px 17px; }
  }

  @media (max-width: 600px) {
    .hero-section { padding:126px 0 40px; }
    .hero-left h1 { font-size:clamp(2.15rem,10.7vw,2.85rem); }
    .hero-benefit-row { grid-template-columns:1fr;max-width:360px;gap:0; }
    .hero-benefit-item { grid-template-columns:38px 1fr;text-align:left;justify-items:stretch;padding:7px 8px; }
    .hero-benefit-item strong { font-size:11px; }
    .hero-benefit-item span { font-size:9px; }
    .hero-split-actions { flex-direction:column;width:100%;gap:9px; }
    .hero-primary-cta,.hero-outline-cta { width:min(360px,100%); }
    .hero-right { min-height:350px; }
    .hero-result-card { width:69%;right:7px;bottom:7px;padding:11px;border-radius:13px; }
    .faq-section { padding-top:68px; padding-bottom:68px; }
    .faq-layout { gap:24px; }
    .faq-whatsapp-button { width:auto; min-height:50px; padding:0 18px; }
    .faq-question > span { gap:9px; }
    .faq-question > span small { min-width:20px; }
    .result-card-head span { font-size:5.8px; }
    .result-card-head strong { font-size:9.5px; }
    .hero-result-card p { font-size:7px; }
    .hero-result-card svg { height:50px; }
    .hero-image-tag { left:8px;bottom:22px;padding:7px 8px; }
    .hero-image-tag span { font-size:7px; }
  }

  @media (max-width: 480px) {
    .container { width:min(100% - 24px,1180px); }
    .hero-section { padding:126px 0 36px; }
    .hero-split-kicker { font-size:7px;gap:7px;white-space:normal;text-align:center;line-height:1.45; }
    .hero-split-kicker > span { width:7px;height:7px;flex:0 0 7px; }
    .hero-left h1 { font-size:clamp(2rem,10.5vw,2.55rem);line-height:1.035;letter-spacing:-.044em; }
    .hero-split-copy { font-size:13px;padding:0; }
    .hero-whatsapp-link { font-size:10.5px; }
    .hero-right { min-height:305px; }
    .hero-image-frame { inset:0;border-radius:34px 12px 38px 15px;clip-path:polygon(10% 0,100% 0,100% 88%,92% 100%,7% 100%,0 81%,4% 14%); }
    .hero-image-frame::before { inset:7px;border-radius:29px 9px 32px 12px; }
    .hero-result-card { width:72%;padding:9px; }
    .result-card-head strong { font-size:8.5px; }
    .result-live { display:none; }
    .hero-result-card svg { height:42px; }
    .hero-image-tag { display:none; }
    .hero-projects-section .project-marquee-card { width:210px; }
  }

  @media (max-width: 380px) {
    .hero-section { padding-top:122px; }
    .hero-left h1 { font-size:1.95rem; }
    .hero-split-copy { font-size:12.5px; }
    .hero-benefit-row { max-width:320px; }
    .hero-primary-cta,.hero-outline-cta { min-height:46px;font-size:11px; }
    .hero-right { min-height:270px; }
    .hero-result-card { width:74%; }
  }

  @media (min-width: 1500px) {
    .container { width:min(1280px,calc(100% - 56px)); }
    .hero-section { min-height:660px; }
    .hero-left h1 { font-size:4.55rem; }
    .hero-right { min-height:500px; }
  }

  @media (prefers-reduced-motion: reduce) {
    * { animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;scroll-behavior:auto !important; }
  }


  /* =========================================================
     FULLSCREEN IMAGE PREVIEW
     No tap hint, no fullscreen symbol, no visible close icon.
  ========================================================= */

  .service-image-wrap img,
  .project-marquee-card img {
    -webkit-tap-highlight-color: transparent;
  }

  .project-marquee-card img {
    cursor: pointer;
  }

  .image-lightbox {
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: grid;
    place-items: center;
    padding: clamp(12px, 3vw, 34px);
    background: rgba(4,14,31,.92);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    cursor: zoom-out;
  }

  .image-lightbox::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at 15% 18%, rgba(7,88,232,.20), transparent 28%),
      radial-gradient(circle at 85% 82%, rgba(109,40,217,.15), transparent 30%);
  }

  .image-lightbox-close {
    position: fixed;
    top: clamp(16px, 3vw, 30px);
    right: clamp(16px, 3vw, 30px);
    z-index: 3;
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    padding: 0;
    border: 2px solid rgba(255,255,255,.92);
    border-radius: 50%;
    outline: none;
    color: #fff;
    background: #e53935;
    box-shadow:
      0 10px 28px rgba(229,57,53,.34),
      0 0 0 6px rgba(229,57,53,.11);
    font-family: Arial, sans-serif;
    font-size: 31px;
    font-weight: 400;
    line-height: 1;
    cursor: pointer;
    transition:
      transform .22s ease,
      background .22s ease,
      box-shadow .22s ease;
  }

  .image-lightbox-close:hover {
    transform: scale(1.08);
    background: #c62828;
    box-shadow:
      0 13px 34px rgba(229,57,53,.44),
      0 0 0 8px rgba(229,57,53,.12);
  }

  .image-lightbox-close:active {
    transform: scale(.94);
  }

  .image-lightbox img {
    position: relative;
    z-index: 1;
    display: block;
    max-width: min(1500px, 96vw);
    max-height: 92vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: clamp(12px, 1.4vw, 22px);
    box-shadow:
      0 35px 100px rgba(0,0,0,.42),
      0 0 0 1px rgba(255,255,255,.12);
    cursor: zoom-out;
    user-select: none;
    -webkit-user-drag: none;
  }

  @media (hover: none) {
    .service-card:hover {
      transform: none;
    }

    .service-card:hover .service-image-wrap img,
    .service-card:hover .service-icon,
    .service-card:hover .service-body h3,
    .service-card:hover .service-body button {
      transform: none;
    }
  }

  @media (max-width: 600px) {
    .image-lightbox {
      padding: 10px;
    }

    .image-lightbox img {
      max-width: 100%;
      max-height: 94dvh;
      border-radius: 14px;
    }
  }

`;

export default Home;