import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* =========================================================
   FONT AWESOME ICONS
========================================================= */

import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBarsProgress,
  FaBolt,
  FaBrain,
  FaBriefcase,
  FaBuilding,
  FaBullseye,
  FaCheck,
  FaChevronDown,
  FaCircleCheck,
  FaCode,
  FaComments,
  FaComputer,
  FaGlobe,
  FaHeadset,
  FaLaptopCode,
  FaLightbulb,
  FaMagnifyingGlass,
  FaMobileScreenButton,
  FaQuoteLeft,
  FaRocket,
  FaShieldHalved,
  FaSitemap,
  FaStar,
  FaUsers,
  FaWandMagicSparkles,
  FaWhatsapp,
  FaExpand,
} from "react-icons/fa6";

/* =========================================================
   CONFIGURATION
========================================================= */

const WEBSITE_URL = "https://smyvisiontechnologies.com";
const PHONE_NUMBER = "8500352005";
const PHONE_LINK = "+918500352005";
const EMAIL = "smyvisiontechnologies@gmail.com";

/* =========================================================
   DATA ARRAYS
========================================================= */

const services = [
  { icon: <FaLaptopCode />, image: "/images/web.webp", fallback: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85", title: "Premium Website Development", description: "High-end business websites designed to build trust, communicate clearly and convert visitors into genuine enquiries.", features: ["Business Websites", "Corporate Websites", "Responsive Design", "SEO-Ready Structure"] },
  { icon: <FaCode />, image: "/images/cust.webp", fallback: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85", title: "Custom Web Development", description: "Purpose-built web platforms created around your exact workflows, customers and long-term business requirements.", features: ["Custom Portals", "Management Systems", "Client Dashboards", "Web Applications"] },
  { icon: <FaGlobe />, image: "/images/ecomm.webp", fallback: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85", title: "Custom E-commerce Solutions", description: "Premium online stores with product management, smooth shopping journeys and scalable functionality built for your brand.", features: ["Product Catalogues", "Custom Storefronts", "Order Workflows", "Payment Integration"] },
  { icon: <FaBarsProgress />, image: "/images/auto.webp", fallback: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85", title: "Business Automation", description: "Custom automation systems that reduce repetitive work, simplify operations and connect important business processes.", features: ["Workflow Automation", "Custom Dashboards", "Business Systems", "Process Automation"] },
  { icon: <FaBrain />, image: "/images/chat.webp", fallback: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=85", title: "Chatbot Solutions(Coming Soon)", description: "Smart experiences for customer enquiries, lead handling and business communication without unnecessary complexity.", features: ["Chatbots", "Lead Automation", "Customer Support", "Smart Business Tools"] },
  { icon: <FaBullseye />, image: "/images/marketing.webp", fallback: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1400&q=85", title: "Digital Marketing", description: "Digital marketing support to help businesses improve online visibility, reach the right audience and generate meaningful enquiries.", features: ["Social Media Marketing", "SEO Strategy", "Campaign Planning", "Online Brand Growth"] },
];

const benefits = [
  { icon: <FaMagnifyingGlass />, title: "SEO-Ready Foundation", description: "Clean development, semantic structure, optimized headings and technical foundations that support better search visibility." },
  { icon: <FaMobileScreenButton />, title: "Responsive Experience", description: "Every website is built to deliver a professional experience across smartphones, tablets, laptops and desktop devices." },
  { icon: <FaBolt />, title: "Performance Focused", description: "Modern layouts and optimized development practices help create faster and smoother website experiences." },
  { icon: <FaBullseye />, title: "Conversion Focused", description: "Clear content structure and strategic calls-to-action help guide visitors towards enquiries and business actions." },
];

const projects = [
  { title: "NKR Car Rentals", category: "Car Rental Website", image: "/images/nkr.webp", fallback: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=85", url: "https://www.nkrselfdrivecarrentals.in/", description: "A modern car rental website designed to present services clearly, provide easy customer navigation and create a professional mobile experience." },
  { title: "Bindiya Beauty Salon", category: "Beauty & Salon Website", image: "/images/beauty.webp", fallback: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85", url: "https://www.bindiyazbeautysalon.in/", description: "A premium salon website created to showcase services, strengthen brand identity and provide customers with a smooth digital experience." },
  { title: "Happy Organize", category: "Home Services Website", image: "/images/home.webp", fallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85", url: "https://www.happyorganize.com/", description: "A professional home services website designed with clear service presentation, responsive layouts and customer-focused navigation." },
  { title: "Arvis Fertilizers", category: "Agriculture Business Website", image: "/images/arvis.webp", fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", url: "https://www.arvisfertilizers.com/", description: "A modern agriculture-focused digital platform developed to strengthen business presentation and communicate products professionally." },
  { title: "Yatheendra Engineering Works", category: "Engineering Works Website", image: "/images/yath.webp", fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", url: "https://yatheendraengineeringworks.vercel.app/", description: "A modern industrial fabrication platform developed to strengthen business presentation and communicate welding services professionally." },
  { title: "AK Paul Electronics", category: "Home Appliance Repair Website", image: "/images/ak-paul-electronics.webp", fallback: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85", url: "https://www.customerserviceonline.co.in/", description: "A professional home appliance repair platform developed to showcase AC, washing machine and refrigerator repair services and help customers across Kolkata easily connect for affordable service." },
  { title: "JK Decors & Events", category: "Event Decoration & Management Website", image: "/images/jkdecors.webp", fallback: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85", url: "https://www.jkdecors.com/", description: "A premium event decoration platform developed to showcase weddings, receptions, engagements, birthdays and celebration services while helping customers easily explore completed events and connect with JK Decors & Events." },
  {
  title: "The Viceroy Collection",
  category: "Luxury Furniture & Woodcraft Website",
  image: "/images/viceroy.webp",
  fallback: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1200&q=85",
  url: "https://www.theviceroycollection.com/",
  description: "A premium furniture and craftsmanship platform developed to showcase handcrafted solid wood furniture, luxury doors and architectural elements crafted from fine hardwoods such as teak, mahogany and rosewood, highlighting timeless design, traditional craftsmanship and furniture built to last for generations."
},
{
  title: "Siva Pigeon Nets & Invisible Grills",
  category: "Safety Nets & Invisible Grills Website",
  image: "/images/siva.webp",
  fallback: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
  url: "https://www.sivapigeonnetsinvisiblegrills.in/",
  description: "A professional safety solutions platform developed to showcase pigeon nets, balcony safety nets, invisible grills and bird protection solutions, helping homeowners improve safety, protect balconies and easily connect for installation enquiries."
},
{
  title: "Dandeli Adventure Thrills",
  category: "Adventure Tourism & Resort Booking Website",
  image: "/images/dandeli.webp",
  fallback: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
  url: "https://www.dandeliadventurethrills.com/",
  description: "A vibrant adventure tourism platform developed to showcase Dandeli river rafting, jungle adventures, resorts, homestays, camping experiences and travel packages, helping families, friends and groups discover exciting nature escapes and easily connect for booking enquiries."
},
{
  title: "JK Scaffolding",
  category: "Scaffolding & Construction Equipment Website",
  image: "/images/scaffolding.webp",
  fallback: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
  url: "https://www.jkscaffoldings.com/",
  description: "A professional scaffolding platform developed to showcase scaffolding systems, centering materials, construction equipment, rental services and industrial support solutions, helping builders, contractors and developers explore products and easily connect for project enquiries."
},
{
  title: "Punjabi Dhol",
  category: "Event Entertainment & Dhol Booking Website",
  image: "/images/dhol.webp",
  fallback: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85",
  url: "https://www.punjabidhol.in/",
  description: "A vibrant event entertainment platform developed to showcase traditional Punjabi Dhol performances for weddings, baraats, receptions, private parties and corporate celebrations, helping customers bring energetic Punjabi beats to their special occasions and easily connect for event bookings."
},
{
  title: "Venkat Safety Nets",
  category: "Safety Nets & Protection Solutions Website",
  image: "/images/venkat.webp",
  fallback: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
  url: "https://www.venkatsafetynets.com/",
  description: "A professional safety solutions platform developed to showcase balcony safety nets, pigeon nets, sports nets, construction safety nets and other protective installations, helping homeowners and businesses explore reliable safety solutions and easily connect for installation enquiries."
},
{
  title: "My Dentist Bangalore",
  category: "Dental Care & Healthcare Website",
  image: "/images/mydentist.webp",
  fallback: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",
  url: "https://www.mydentistbangalore.com/",
  description: "A professional dental care platform developed to showcase dental treatments, clinic services and oral healthcare solutions, helping patients explore dental services, build confidence and easily connect with My Dentist Bangalore for appointments and enquiries."
},
{
  title: "RNS Safety Nets Vizag",
  category: "Safety Nets & Protection Solutions Website",
  image: "/images/rns.webp",
  fallback: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
  url: "https://www.rnssafetynetsvizag.com/",
  description: "A professional safety solutions platform developed to showcase balcony safety nets, pigeon nets, children and pet safety nets, construction nets, sports nets and industrial protection solutions, helping customers explore reliable safety installations and easily connect for service enquiries across Vizag."
},
];

const reviews = [
  { name: "NKR Car Rentals", role: "Car Rental Business", review: "I am extremely satisfied with the website design. The work was done neatly and exactly according to my requirements.Thank you so much SMYVISION TECHNOLOGIES entire team for the great support and service." },
  { name: "Bindiya Beauty Salon", role: "Beauty & Salon", review: "SMYVISION TECHNOLOGIES understood our requirements and created a beautiful website that represents our salon professionally." },
  { name: "Happy Organize", role: "Home Services", review: "Super happy with the work. Highly recommend it!" },
  { name: "Arvis Fertilizers", role: "Agriculture Business", review: "The team delivered a professional digital platform with a clean structure and responsive design that supports our business presentation." },
];

const processSteps = [
  { number: "01", icon: <FaComments />, title: "Discovery", description: "We begin by understanding your business, goals, customers and exact project requirements." },
  { number: "02", icon: <FaSitemap />, title: "Strategy", description: "We organize the project structure, user journey, pages and technical requirements." },
  { number: "03", icon: <FaWandMagicSparkles />, title: "Design", description: "We create a modern visual direction focused on professionalism, usability and your business identity." },
  { number: "04", icon: <FaCode />, title: "Development", description: "The approved design is transformed into a responsive and functional digital experience." },
  { number: "05", icon: <FaShieldHalved />, title: "Testing", description: "We carefully test responsiveness, usability and functionality across different screen sizes." },
  { number: "06", icon: <FaRocket />, title: "Launch", description: "Your completed digital solution is prepared and launched for your customers to experience." },
];

const faqItems = [
  { question: "What types of websites do you develop?", answer: "We develop professional business websites, corporate websites, service websites, portfolio websites, e-commerce platforms, landing pages, custom portals and web applications according to business requirements." },
  { question: "Do you create mobile-responsive websites?", answer: "Yes. Every website we develop is designed to work smoothly across smartphones, tablets, laptops and desktop devices." },
  { question: "Will my website be SEO-friendly?", answer: "We build websites with SEO-friendly technical foundations including clean page structure, semantic HTML, heading hierarchy, metadata support, responsive design and performance-focused development." },
  { question: "Can you redesign my existing website?", answer: "Yes. We can redesign an existing website with a more modern interface, improved mobile responsiveness, better content structure and a stronger user experience." },
  { question: "How long does website development take?", answer: "Development time depends on the size and complexity of the project. A standard business website can usually be completed faster than a custom application or advanced business portal." },
  { question: "Do you provide custom web application development?", answer: "Yes. We can develop custom web-based systems including dashboards, management platforms, customer portals and business automation solutions." },
  { question: "Can you integrate WhatsApp into the website?", answer: "Yes. We can integrate WhatsApp buttons and direct enquiry options so customers can quickly communicate with your business." },
  { question: "Do you develop e-commerce websites?", answer: "Yes. We can build e-commerce solutions that allow businesses to display products, manage catalogues and provide online shopping experiences." },
  { question: "Can you develop AI chatbot solutions?", answer: "Yes. We provide chatbot and AI automation solutions for customer enquiries, lead generation, support and business communication." },
  { question: "Do you provide business automation solutions?", answer: "Yes. We can create custom digital workflows and management systems that reduce repetitive work and help businesses manage operations more efficiently." },
  { question: "Will I be able to update my website later?", answer: "The ability to update content depends on the type of website and management system selected. We can develop solutions with administrative features when required." },
  { question: "Do you provide support after website development?", answer: "We provide technical guidance and support based on the project requirements and agreed service scope." },
  { question: "Can you help businesses build a complete digital presence?", answer: "Yes. Along with website development, we can help businesses implement automation, chatbot solutions and other digital systems required for their operations." },
  { question: "How can I get a quotation for my project?", answer: "You can contact us through the website, WhatsApp or phone and share your requirements. We will understand your project and provide a suitable quotation." },
  { question: "How do I start a project with SMYVISION TECHNOLOGIES?", answer: "Simply contact our team and tell us about your business and project idea. We will discuss your requirements, understand your goals and recommend the right solution." },
  { question: "Do you provide professional website development services?", answer: "Yes. SMYVISION TECHNOLOGIES develops responsive business websites, corporate websites, custom web applications, website redesigns and related digital solutions for businesses with different requirements." },
  { question: "Can you build a website for a local business?", answer: "Yes. We build professional, mobile-responsive websites for local businesses that clearly present services, strengthen online visibility and make customer enquiries easier." },
  { question: "Do you provide custom web development?", answer: "Yes. SMYVISION TECHNOLOGIES provides custom web development for businesses that need more than a standard website, including customer portals, management systems, dashboards, workflow tools and custom web applications." },
  { question: "Can SMYVISION TECHNOLOGIES develop custom web applications?", answer: "Yes. SMYVISION TECHNOLOGIES develops custom web applications including business dashboards, management portals, customer-facing platforms and workflow automation systems designed around specific business requirements." },
  { question: "What should I look for when choosing a web development company?", answer: "Look for a web development company that can show real project work, build responsive and search-friendly websites, explain the development process clearly, support your business goals and provide suitable post-launch guidance. SMYVISION TECHNOLOGIES focuses on these areas for every project." },
  { question: "Can SMYVISION TECHNOLOGIES build e-commerce websites?", answer: "Yes. We develop custom e-commerce websites with product catalogues, responsive storefronts, order workflows and payment integration based on project requirements." },
  { question: "Do you provide website development services in Vijayawada?", answer: "Yes. SMYVISION TECHNOLOGIES provides professional website development, custom web development, e-commerce and web application development services for businesses in Vijayawada." },
  { question: "Can you build a website for a local business in Vijayawada?", answer: "Yes. We develop responsive business websites for local businesses in Vijayawada, with clear service presentation, enquiry options and SEO-ready technical foundations." },
  { question: "How can I start a website project with SMYVISION TECHNOLOGIES?", answer: "Contact SMYVISION TECHNOLOGIES by phone, WhatsApp or through our website and share your requirements. We will discuss your business goals, required features and suitable website solution." },
];

const reasons = [
  { icon: <FaBullseye />, title: "Business-First Thinking", description: "We understand your business objectives before deciding how technology should solve the problem." },
  { icon: <FaRocket />, title: "Modern Technologies", description: "We use reliable modern technologies to build scalable and professional digital solutions." },
  { icon: <FaHeadset />, title: "Clear Communication", description: "We keep project communication simple so you can understand each important stage of development." },
  { icon: <FaShieldHalved />, title: "Quality Focus", description: "Our development process focuses on responsiveness, usability and professional presentation." },
  { icon: <FaBolt />, title: "Performance Mindset", description: "We focus on smooth user experiences and efficient development practices." },
  { icon: <FaUsers />, title: "Built Around Your Needs", description: "Every project is developed according to the actual requirements and goals of the business." },
];

const industries = ["Healthcare", "Education", "Real Estate", "Restaurants", "Agriculture", "Beauty & Salons", "Travel & Rentals", "Home Services", "Startups", "Retail Businesses"];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${WEBSITE_URL}/#organization`,
      "name": "SMYVISION TECHNOLOGIES",
      "alternateName": "SMYVISION",
      "url": `${WEBSITE_URL}/`,
      "logo": { "@type": "ImageObject", "@id": `${WEBSITE_URL}/#logo`, "url": `${WEBSITE_URL}/Logo.png`, "contentUrl": `${WEBSITE_URL}/Logo.png`, "caption": "SMYVISION TECHNOLOGIES" },
      "image": { "@id": `${WEBSITE_URL}/#logo` },
      "description": "SMYVISION TECHNOLOGIES is a web development company in Vijayawada providing website development, web design, custom web development, business website development, custom web applications, e-commerce website development, business automation and digital solutions.",
      "foundingDate": "2026",
      "telephone": PHONE_LINK,
      "email": EMAIL,
      "address": { "@type": "PostalAddress", "addressLocality": "Vijayawada", "addressRegion": "Andhra Pradesh", "addressCountry": "IN" },
      "areaServed": [{ "@type": "City", "name": "Vijayawada" }, { "@type": "State", "name": "Andhra Pradesh" }, { "@type": "Country", "name": "India" }],
      "knowsAbout": ["Web Development Company in Vijayawada", "Website Development Company in Vijayawada", "Website Development in Vijayawada", "Web Design Company in Vijayawada", "Website Designers in Vijayawada", "Website Developers in Vijayawada", "Custom Web Development in Vijayawada", "Custom Web Application Development in Vijayawada", "E-commerce Website Development in Vijayawada", "Responsive Web Design in Vijayawada", "Business Website Development in Vijayawada", "Professional Website Development in Vijayawada", "Local Business Website Development in Vijayawada", "Business Automation", "Management Portals", "Business Dashboards", "SEO-ready Web Development"],
      "contactPoint": { "@type": "ContactPoint", "telephone": PHONE_LINK, "contactType": "sales and customer enquiries", "areaServed": "IN", "availableLanguage": ["English", "Telugu", "Hindi"] },
      "sameAs": ["https://www.facebook.com/share/1AAbW51BTs/", "https://linkedin.com/company/smyvisiontechnologies", "https://instagram.com/smyvisiontechnologies", "https://youtube.com/@smyvisiontechnologies"],
    },
    { "@type": "Service", "@id": `${WEBSITE_URL}/#custom-web-development-vijayawada`, "name": "Custom Web Development in Vijayawada", "serviceType": "Custom Web Development", "description": "Purpose-built custom web development services in Vijayawada including business portals, management systems, dashboards, workflow tools and custom web applications.", "provider": { "@id": `${WEBSITE_URL}/#organization` }, "areaServed": { "@type": "City", "name": "Vijayawada", "containedInPlace": { "@type": "State", "name": "Andhra Pradesh" } } },
    { "@type": "WebSite", "@id": `${WEBSITE_URL}/#website`, "url": `${WEBSITE_URL}/`, "name": "SMYVISION TECHNOLOGIES", "description": "Web development in Vijayawada, website design, custom web applications, e-commerce website development and digital business solutions from SMYVISION TECHNOLOGIES.", "publisher": { "@id": `${WEBSITE_URL}/#organization` }, "inLanguage": "en-IN" }
  ]
};

const fadeUp = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

/* =========================================================
   LETTER-BY-LETTER ANIMATED TEXT COMPONENT
========================================================= */

const AnimatedLetters = ({ text, className = "", delay = 0, style = {} }) => {
  const letters = Array.from(text);
  return (
    <span className={className} style={{ display: "inline-block", ...style }} aria-label={text}>
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          initial={{ opacity: 0, y: 20, rotateX: -40, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: delay + index * 0.028,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: "inline-block", whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

/* =========================================================
   HOME COMPONENT
========================================================= */

const Home = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const goToContact = () => { navigate("/contact"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const openWhatsApp = () => { const m = encodeURIComponent("Hi SMYVISION, I want to discuss a website."); window.open(`https://wa.me/91${PHONE_NUMBER}?text=${m}`, "_blank"); };
  const callNow = () => { window.location.href = `tel:${PHONE_LINK}`; };
  const toggleFaq = (index) => setActiveFaq((c) => (c === index ? null : index));
  const openFullscreenImage = (src, alt) => setFullscreenImage({ src, alt });
  const closeFullscreenImage = () => setFullscreenImage(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ---------- 3D CAROUSEL LOGIC ---------- */
  const [activeIndex, setActiveIndex] = useState(Math.floor(projects.length / 2));
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const onTouchStart = (e) => { touchStartX.current = e.changedTouches[0].screenX; };
  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) handleNext();
    if (diff < -40) handlePrev();
  };

  useEffect(() => {
    if (!fullscreenImage) return undefined;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, [fullscreenImage]);

  const getCardStyle = (index) => {
    let offset = index - activeIndex;

    if (offset < -Math.floor(projects.length / 2)) offset += projects.length;
    if (offset > Math.floor(projects.length / 2)) offset -= projects.length;

    const absOffset = Math.abs(offset);
    const sign = Math.sign(offset);

    if (absOffset > 2) return { opacity: 0, pointerEvents: "none", transform: "scale(0.5)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" };

    const baseWidth = isMobile ? 280 : 440;
    const baseHeight = isMobile ? 380 : 560;

    let translateX = offset * (isMobile ? 160 : 300);
    let rotateY = offset === 0 ? 0 : sign * -25;
    let scale = offset === 0 ? 1 : 0.85;
    let zIndex = 10 - absOffset;
    let opacity = offset === 0 ? 1 : 0.7;
    let blur = offset === 0 ? 0 : 2;

    return {
      position: "absolute",
      width: baseWidth,
      height: baseHeight,
      transform: `translateX(${translateX}px) scale(${scale}) perspective(1500px) rotateY(${rotateY}deg)`,
      zIndex,
      opacity,
      filter: `blur(${blur}px)`,
      transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      pointerEvents: offset === 0 ? "auto" : "none",
    };
  };

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>Web Development Company in Vijayawada | SMYVISION TECHNOLOGIES</title>
        <meta name="description" content="SMYVISION TECHNOLOGIES is a web development company in Vijayawada offering website development, web design, custom web development, e-commerce website development, web application development and business automation solutions." />
        <meta name="author" content="SMYVISION TECHNOLOGIES" />
        <meta name="publisher" content="SMYVISION TECHNOLOGIES" />
        <meta name="application-name" content="SMYVISION TECHNOLOGIES" />
        <meta name="keywords" content="web development company in Vijayawada, website development company in Vijayawada, website development Vijayawada, web design company in Vijayawada, website designers in Vijayawada, website developers in Vijayawada, custom web development Vijayawada, custom web application development Vijayawada, e-commerce website development Vijayawada, responsive web design Vijayawada, business website development Vijayawada, professional website development Vijayawada, local business website development Vijayawada" />
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

      <main className="smy-home">
        {/* HERO */}
        <section className="hero-section">
          <div className="hero-bg-dots hero-bg-dots-left" aria-hidden="true" />
          <div className="hero-bg-dots hero-bg-dots-right" aria-hidden="true" />
          <motion.div className="hero-soft-shape hero-soft-shape-one" aria-hidden="true" animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="hero-soft-shape hero-soft-shape-two" aria-hidden="true" animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }} transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }} />

          <div className="container hero-split-layout">
            <motion.div className="hero-left" initial="hidden" animate="visible" variants={stagger}>
              <motion.div className="hero-split-kicker" variants={fadeUp}>
                <span /> WEB DEVELOPMENT COMPANY IN VIJAYAWADA
              </motion.div>
              <motion.h1 variants={fadeUp}>
                Professional Websites
                <span>That Turn Visitors</span>
                <strong>Into Paying Clients.</strong>
              </motion.h1>
              <motion.div className="hero-accent-line" variants={fadeUp} />
              <motion.p className="hero-split-copy" variants={fadeUp}>
                SMYVISION TECHNOLOGIES provides professional website development, custom web development and e-commerce solutions for businesses in Vijayawada and across India.
              </motion.p>
              <motion.div className="hero-benefit-row" variants={fadeUp}>
                <div className="hero-benefit-item">
                  <div className="hero-benefit-icon"><FaBullseye /></div>
                  <div><strong>Goal Focused</strong><span>Built around your business goals</span></div>
                </div>
                <div className="hero-benefit-item">
                  <div className="hero-benefit-icon"><FaRocket /></div>
                  <div><strong>High Performance</strong><span>Fast, polished and conversion ready</span></div>
                </div>
                <div className="hero-benefit-item">
                  <div className="hero-benefit-icon"><FaShieldHalved /></div>
                  <div><strong>Reliable Support</strong><span>Support that keeps you moving forward</span></div>
                </div>
              </motion.div>
              <motion.div className="hero-split-actions" variants={fadeUp}>
                <button type="button" className="hero-primary-cta" onClick={goToContact}>
                  Get Free Consultation <FaArrowRight />
                </button>
                <button type="button" className="hero-outline-cta" onClick={() => navigate("/portfolio")}>
                  View Our Work <FaArrowUpRightFromSquare />
                </button>
              </motion.div>
              <motion.button className="hero-whatsapp-link" type="button" onClick={openWhatsApp} variants={fadeUp}>
                <FaWhatsapp /> Chat with us on WhatsApp
              </motion.button>
            </motion.div>

            <motion.div className="hero-right" initial={{ opacity: 0, x: 55, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
              <div className="hero-image-frame">
                <motion.img src="/images/vijaywada.webp" alt="SMYVISION TECHNOLOGIES web development company in Vijayawada" onError={(event) => { const fallback = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=88"; if (event.currentTarget.src !== fallback) event.currentTarget.src = fallback; }} animate={{ scale: [1, 1.025, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
                <div className="hero-image-overlay" />
              </div>
              <motion.div className="hero-result-card" animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                <div className="result-card-head">
                  <div><span>RESULTS THAT MATTER</span><strong>Built to support enquiries.</strong></div>
                  <div className="result-live"><i /> LIVE</div>
                </div>
                <p>Clear message. Better experience. Stronger action.</p>
                <svg viewBox="0 0 320 86" role="img" aria-label="Illustrative rising conversion path">
                  <defs>
                    <linearGradient id="heroLineFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1767f2" stopOpacity=".22" />
                      <stop offset="100%" stopColor="#1767f2" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className="result-area" d="M6,75 C45,72 59,54 91,58 C126,64 140,43 169,46 C205,50 215,29 243,31 C275,34 288,17 314,9 L314,86 L6,86 Z" />
                  <motion.path className="result-line" d="M6,75 C45,72 59,54 91,58 C126,64 140,43 169,46 C205,50 215,29 243,31 C275,34 288,17 314,9" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }} />
                  <motion.circle cx="314" cy="9" r="5" className="result-point" animate={{ r: [4, 7, 4] }} transition={{ duration: 2, repeat: Infinity }} />
                </svg>
              </motion.div>
              <motion.div className="hero-image-tag" animate={{ x: [0, 7, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
                <FaCircleCheck />
                <span><strong>Custom-built</strong> for your brand</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DIGITAL IMPACT */}
        <section className="digital-impact-section">
          <div className="container">
            <motion.div className="impact-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span className="eyebrow" variants={fadeUp}>OUR DIGITAL IMPACT</motion.span>
              <motion.h2 variants={fadeUp}>Ideas turned into <span>digital experiences.</span></motion.h2>
              <motion.p variants={fadeUp}>We help businesses build a stronger online presence with thoughtful design, technology and digital strategy.</motion.p>
            </motion.div>
            <div className="impact-stats-grid">
              <ImpactCounter value={50} suffix="+" label="Websites Built" icon={<FaGlobe />} />
              <ImpactCounter value={6} suffix="+" label="Digital Services" icon={<FaRocket />} />
              <ImpactCounter value={10} suffix="+" label="Industries Served" icon={<FaBuilding />} />
            </div>
            <motion.a className="portal-feature-card" href="https://smyvisionportal.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 40, rotateX: 12 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.3 }} whileHover={{ y: -8, rotateX: 2, rotateY: -2 }} transition={{ duration: 0.65 }}>
              <div className="portal-orb" aria-hidden="true"><FaComputer /></div>
              <div className="portal-card-content">
                <span className="portal-kicker">PREMIUM DIGITAL SERVICES</span>
                <h3>SMYVISION <span>PORTAL</span></h3>
                <p>Explore our premium digital services and solutions in one place.</p>
                <span className="portal-cta">Explore Portal <FaArrowUpRightFromSquare /></span>
              </div>
              <div className="portal-card-decoration" aria-hidden="true"><i /><i /><i /></div>
            </motion.a>
          </div>
        </section>

        {/* 3D COVERFLOW CAROUSEL (Premium Dark Theme) */}
        <section className="home-3d-carousel-section">
          <div className="container">
            <motion.div className="book-heading" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <span className="eyebrow">FEATURED PROJECTS</span>
              <h2>
                <AnimatedLetters text="Real Websites. Real Businesses. Real Digital Experiences." delay={0.15} />
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Click or swipe to explore the work we've built for businesses.
              </motion.p>
            </motion.div>

            <div className="carousel-3d-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              {projects.map((project, index) => {
                const style = getCardStyle(index);
                const isCenter = index === activeIndex;

                return (
                  <div key={project.title} className={`carousel-card ${isCenter ? 'is-center' : ''}`} style={style} onClick={() => { if (!isCenter) setActiveIndex(index); }}>
                    <div className="card-image-wrap">
                      <img
                        src={project.image}
                        alt={project.title}
                        onError={(e) => { if(project.fallback) e.currentTarget.src = project.fallback; }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openFullscreenImage(e.currentTarget.currentSrc || e.currentTarget.src, project.title);
                        }}
                        style={{ cursor: "zoom-in" }}
                      />
                      <div className="card-overlay" />
                      {isCenter && (
                        <motion.span
                          className="card-tap-hint"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          <FaExpand /> Tap image to view full size
                        </motion.span>
                      )}
                    </div>
                    <div className="card-content">
                      <h3>{project.title}</h3>
                      <p>{project.category}</p>
                      {isCenter && (
                        <motion.a href={project.url} target="_blank" rel="noopener noreferrer" className="card-live-btn" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} onClick={(e) => e.stopPropagation()}>
                          Visit Live Website <FaArrowUpRightFromSquare />
                        </motion.a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="carousel-controls">
              <button onClick={handlePrev} className="carousel-nav-btn">‹</button>
              <div className="carousel-dots">
                {projects.map((_, idx) => (
                  <span key={idx} className={`dot ${idx === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(idx)} />
                ))}
              </div>
              <button onClick={handleNext} className="carousel-nav-btn">›</button>
            </div>

            <div className="marquee-portfolio-cta">
              <button type="button" onClick={() => navigate("/portfolio")}>
                View Our Work <FaArrowUpRightFromSquare />
              </button>
              <span>Explore our complete portfolio</span>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
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
                  <motion.div className="intro-point-item" key={item} initial={{ opacity: 0, x: index % 2 === 0 ? -42 : 42, scale: .96 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .62, delay: index * .07, ease: [0.22, 1, 0.36, 1] }}>
                    <motion.span className="intro-tick" animate={{ scale: [1, 1.22, 1], opacity: [1, .55, 1] }} transition={{ duration: 1.55, repeat: Infinity, delay: index * .16, ease: "easeInOut" }}><FaCheck /></motion.span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA STRIP */}
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

        {/* SERVICES */}
        <section className="section services-section">
          <div className="container">
            <SectionHeader eyebrow="PREMIUM DIGITAL SERVICES" title="Custom Digital Solutions Built Around Your Business" text="From premium business websites to custom web development, e-commerce, automation and AI solutions — every project is shaped around your real requirements." />
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.article className="service-card premium-service-card" key={service.title} initial={{ opacity: 0, y: 55, rotateX: 9, scale: .96 }} whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * 0.09, duration: .7, ease: [0.22,1,0.36,1] }} whileHover={{ y: -12, rotateY: 2, scale: 1.025, boxShadow: "0 28px 65px rgba(14,48,110,.17)" }}>
                  <div className="service-image-wrap">
                    <img src={service.image} alt={`${service.title} service`} onClick={(event) => openFullscreenImage(event.currentTarget.currentSrc || event.currentTarget.src, service.title)} onError={(event) => { if (service.fallback && event.currentTarget.src !== service.fallback) event.currentTarget.src = service.fallback; }} />
                    <div className="service-icon">{service.icon}</div>
                  </div>
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-features">
                      {service.features.map((feature) => (<span key={feature}><FaCircleCheck />{feature}</span>))}
                    </div>
                    <button type="button" onClick={goToContact}>Explore This Service<FaArrowRight /></button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
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

        {/* PROCESS */}
        <section className="section process-section">
          <div className="container">
            <SectionHeader eyebrow="HOW WE WORK" title="A Clear Path From Your Business Idea to a Digital Solution" text="Our structured process keeps every stage organized while giving each project the flexibility it needs." />
            <div className="process-path">
              <div className="process-path-line" />
              {processSteps.map((step, index) => (
                <motion.div className={`process-path-item ${index % 2 === 0 ? "left-side" : "right-side"}`} key={step.number} initial={{ opacity: 0, x: index % 2 === 0 ? -90 : 90, y: 28, scale: .96, filter: "blur(8px)" }} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.28 }} transition={{ duration: .78, delay: index * .05, ease: [0.22, 1, 0.36, 1] }}>
                  <div className="process-content">
                    <span>STEP {step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <motion.div className="process-center-icon" whileInView={{ scale: [0.55, 1.18, 1], rotate: [0, index % 2 === 0 ? -8 : 8, 0] }} animate={{ boxShadow: ["0 0 0 0 rgba(7,88,232,.18)", "0 0 0 12px rgba(7,88,232,0)", "0 0 0 0 rgba(7,88,232,0)"] }} transition={{ scale: { duration: .7 }, rotate: { duration: .7 }, boxShadow: { duration: 2.6, repeat: Infinity, delay: index * .22 } }} viewport={{ once: true }}>{step.icon}</motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
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

        {/* INDUSTRIES */}
        <section className="industries-section">
          <div className="container industries-layout">
            <div>
              <span className="eyebrow">INDUSTRIES WE SUPPORT</span>
              <h2>Digital Solutions Adapted to Different Business Industries.</h2>
              <p>Different industries have different customers, workflows and challenges. Our approach is built around understanding those differences.</p>
            </div>
            <div className="industry-tags">
              {industries.map((industry, index) => (
                <motion.span className="industry-chip" key={industry} initial={{ opacity: 0, y: 24, scale: .9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .45 }} transition={{ duration: .55, delay: index * .055, ease: [0.22, 1, 0.36, 1] }} whileHover={{ scale: 1.07, y: -5 }}>
                  <motion.span className="industry-spark" animate={{ rotate: [0, 12, -10, 0], scale: [1, 1.18, 1] }} transition={{ duration: 2.4, repeat: Infinity, delay: index * .12 }}><FaWandMagicSparkles /></motion.span>{industry}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section reviews-section">
          <div className="container">
            <SectionHeader eyebrow="CLIENT EXPERIENCES" title="What Businesses Say About Working With Us" text="Every project begins with understanding the business and ends with creating a digital experience designed around its requirements." />
            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <motion.article className="review-card premium-review-card" key={review.name} initial={{ opacity: 0, rotateY: 18, rotateX: 7, y: 45, scale: .94 }} whileInView={{ opacity: 1, rotateY: 0, rotateX: 0, y: 0, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * 0.12, duration: .8, ease: [0.22,1,0.36,1] }} whileHover={{ y: -10, rotateX: 2, rotateY: -2, scale: 1.02 }}>
                  <div className="review-header">
                    <div className="quote-icon"><FaQuoteLeft /></div>
                    <div className="stars">{[1, 2, 3, 4, 5].map((star, starIndex) => (
                      <motion.span className="animated-star" key={star} animate={{ scale: [1, 1.28, 1], rotate: [0, -7, 7, 0], filter: ["drop-shadow(0 0 0 rgba(243,170,22,0))", "drop-shadow(0 0 8px rgba(243,170,22,.65))", "drop-shadow(0 0 0 rgba(243,170,22,0))"] }} transition={{ duration: 1.7, repeat: Infinity, delay: starIndex * .16 + index * .08, ease: "easeInOut" }}><FaStar /></motion.span>
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

        {/* DIGITAL GROWTH */}
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
              <h2>Questions Before You Start? We've Got Answers.</h2>
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

        {/* FREE QUOTE */}
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

        {/* FINAL CTA */}
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
          <motion.div className="image-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.24 }} onClick={closeFullscreenImage} role="dialog" aria-modal="true">
            <button type="button" className="image-lightbox-close" onClick={(event) => { event.stopPropagation(); closeFullscreenImage(); }}>×</button>
            <motion.img src={fullscreenImage.src} alt={fullscreenImage.alt} initial={{ opacity: 0, scale: 0.94, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 10 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }} onClick={closeFullscreenImage} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* =========================================================
   IMPACT COUNTER
========================================================= */

const ImpactCounter = ({ value, suffix = "", label, icon }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const duration = 1500;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = value / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { current = value; clearInterval(timer); }
      setCount(Math.floor(current));
    }, stepTime);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <motion.div className="impact-stat-card" initial={{ opacity: 0, y: 30, rotateX: 15 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }} onViewportEnter={() => setStarted(true)} whileHover={{ y: -7, rotateY: 5 }}>
      <div className="impact-stat-icon">{icon}</div>
      <div className="impact-stat-number">{count}{suffix}</div>
      <div className="impact-stat-label">{label}</div>
    </motion.div>
  );
};

/* =========================================================
   SECTION HEADER
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
   CSS (UPDATED: Premium Dark Sapphire Theme for Carousel)
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

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    overflow-x: hidden;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: var(--text);
    background: white;
    -webkit-font-smoothing: antialiased;
  }
  button, a { font: inherit; }
  button { border: 0; }
  .smy-home { overflow: hidden; }
  .container { width: min(1180px, calc(100% - 40px)); margin: auto; }
  .section { padding: 110px 0; }
  .eyebrow {
    display: inline-block;
    margin-bottom: 14px;
    color: var(--primary);
    font-size: 11px;
    font-weight: 850;
    letter-spacing: .15em;
  }

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
  .section-header h2, .intro-layout h2, .benefits-layout > div:first-child h2, .digital-growth-layout h2, .faq-heading h2 {
    margin: 0 0 18px;
    color: var(--heading);
    font-size: clamp(2.1rem, 4vw, 3.5rem);
    line-height: 1.07;
    letter-spacing: -.045em;
  }
  .section-header p { margin: 0; font-size: 16px; line-height: 1.8; }

  .primary-button, .secondary-button {
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
  .primary-button { color: white; background: linear-gradient(135deg, #0758e8, #6338db); box-shadow: 0 14px 30px rgba(7,88,232,.25); }
  .secondary-button { color: var(--heading); background: white; border: 1px solid #dce4ef; }
  .primary-button:hover, .secondary-button:hover { transform: translateY(-4px) scale(1.02); }

  /* HERO */
  .hero-section {
    position: relative; min-height: 620px; display: flex; align-items: center; overflow: hidden; padding: 102px 0 58px; isolation: isolate;
    background: radial-gradient(circle at 2% 78%, rgba(39,106,242,.075), transparent 18%), radial-gradient(circle at 96% 8%, rgba(78,92,255,.08), transparent 20%), linear-gradient(180deg,#ffffff 0%,#ffffff 78%,#f8fbff 100%);
    border-bottom: 1px solid #edf2f8;
  }
  .hero-bg-dots { position:absolute; width:128px; height:128px; z-index:-2; opacity:.38; pointer-events:none; background-image:radial-gradient(circle,#82adf8 1.35px,transparent 1.55px); background-size:14px 14px; }
  .hero-bg-dots-left { left:-18px; top:158px; }
  .hero-bg-dots-right { right:10px; bottom:50px; }
  .hero-soft-shape { position:absolute; z-index:-3; pointer-events:none; border-radius:36px; background:linear-gradient(145deg,rgba(45,112,255,.105),rgba(108,86,245,.025)); }
  .hero-soft-shape-one { width:145px;height:145px;left:-80px;bottom:35px;transform:rotate(28deg); }
  .hero-soft-shape-two { width:105px;height:105px;right:45px;top:80px;transform:rotate(18deg); }
  .hero-split-layout { position:relative; z-index:2; display:grid; grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr); align-items:center; gap:52px; }
  .hero-left { min-width:0; }
  .hero-split-kicker { display:inline-flex; align-items:center; gap:9px; margin-bottom:18px; color:#1f63cd; font-size:9px; font-weight:850; letter-spacing:.145em; text-transform:uppercase; }
  .hero-split-kicker > span { width:8px;height:8px;border-radius:50%;background:#1767f2;box-shadow:0 0 0 5px rgba(23,103,242,.08); }
  .hero-left h1 { margin:0; max-width:650px; color:#071a35; font-size:clamp(2.7rem,4.1vw,4.45rem); line-height:1.015; letter-spacing:-.052em; font-weight:850; text-wrap:balance; }
  .hero-left h1 > span { display:block;color:#071a35; }
  .hero-left h1 > strong { display:block;font:inherit;color:#1264ef; background:linear-gradient(100deg,#1264ef,#256cf4 55%,#4d46e7); -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent; }
  .hero-accent-line { width:42px;height:4px;border-radius:99px;margin:19px 0 17px; background:linear-gradient(90deg,#1264ef,#5d3be6);box-shadow:0 4px 12px rgba(18,100,239,.15); }
  .hero-split-copy { max-width:570px;margin:0;color:#63748b;font-size:14px;line-height:1.72; }
  .hero-benefit-row { display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-top:22px;max-width:620px; }
  .hero-benefit-item { min-width:0;display:grid;grid-template-columns:38px 1fr;align-items:center;gap:9px;padding:9px 4px 9px 0; }
  .hero-benefit-icon { width:38px;height:38px;border:1px solid #e2eaf5;border-radius:11px;display:grid;place-items:center; color:#1767f2;background:#fff;box-shadow:0 8px 20px rgba(35,75,135,.075);font-size:15px; }
  .hero-benefit-item strong { display:block;color:#102642;font-size:10.5px;line-height:1.35; }
  .hero-benefit-item span { display:block;margin-top:2px;color:#7a899d;font-size:8.5px;line-height:1.45; }
  .hero-split-actions { display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin-top:23px; }
  .hero-primary-cta,.hero-outline-cta { min-height:49px;padding:0 21px;border-radius:11px;display:inline-flex;align-items:center;justify-content:center;gap:9px; font-size:12px;font-weight:800;cursor:pointer;transition:.28s ease; }
  .hero-primary-cta { color:#fff;background:linear-gradient(135deg,#0d62ed,#5138e8);box-shadow:0 13px 27px rgba(22,92,218,.20); }
  .hero-outline-cta { color:#1256c8;background:#fff;border:1px solid #9fbfff;box-shadow:0 9px 21px rgba(36,80,145,.045); }
  .hero-primary-cta:hover,.hero-outline-cta:hover { transform:translateY(-3px); }
  .hero-primary-cta svg,.hero-outline-cta svg { transition:transform .25s ease; }
  .hero-primary-cta:hover svg,.hero-outline-cta:hover svg { transform:translate(3px,-1px); }
  .hero-whatsapp-link { margin-top:13px;padding:0;background:transparent;color:#40536e;display:inline-flex;align-items:center;gap:7px; font-weight:700;font-size:11px;cursor:pointer;border-bottom:1px solid #c7d3e2; }
  .hero-whatsapp-link svg { color:#13a976;font-size:17px; }
  .hero-right { position:relative;min-width:0;min-height:470px;display:flex;align-items:center;justify-content:center; }
  .hero-image-frame { position:absolute;inset:0 0 0 10px;overflow:hidden;background:#eaf2ff; border-radius:78px 24px 84px 30px; clip-path:polygon(20% 0,100% 0,100% 84%,88% 100%,13% 100%,0 74%,8% 19%); box-shadow:0 28px 62px rgba(30,72,135,.13); }
  .hero-image-frame::before { content:"";position:absolute;inset:12px;z-index:3;pointer-events:none;border:1px solid rgba(255,255,255,.62); border-radius:66px 18px 70px 24px; }
  .hero-image-frame img { width:100%;height:100%;object-fit:cover;display:block;transform-origin:center; }
  .hero-image-overlay { position:absolute;inset:0;background:linear-gradient(120deg,rgba(12,73,178,.055),transparent 46%,rgba(255,255,255,.04)); }
  .hero-right::before { content:"";position:absolute;left:-24px;top:64px;width:5px;height:310px;border-radius:999px; background:linear-gradient(180deg,transparent,#1767f2 18%,#1767f2 80%,transparent); transform:rotate(24deg);z-index:4;box-shadow:0 0 23px rgba(23,103,242,.18); }
  .hero-result-card { position:absolute;right:20px;bottom:18px;z-index:6;width:min(292px,54%);padding:15px 15px 10px; border:1px solid rgba(213,225,243,.95);border-radius:16px;background:rgba(255,255,255,.94); box-shadow:0 18px 42px rgba(20,54,104,.16);backdrop-filter:blur(14px); }
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
  .hero-image-tag { position:absolute;left:-2px;bottom:39px;z-index:7;display:flex;align-items:center;gap:7px;padding:9px 11px; border:1px solid #e2eaf6;border-radius:11px;background:rgba(255,255,255,.96); box-shadow:0 12px 29px rgba(30,70,125,.11);color:#1767f2;backdrop-filter:blur(12px); }
  .hero-image-tag span { color:#61728a;font-size:8px; }
  .hero-image-tag strong { color:#102642; }

  /* DIGITAL IMPACT */
  .digital-impact-section { padding: 90px 0 70px; background: linear-gradient(180deg, #ffffff 0%, #f7f9fd 100%); }
  .impact-heading { max-width: 760px; margin: 0 auto 50px; text-align: center; }
  .impact-heading .eyebrow { display: inline-block; margin-bottom: 14px; color: var(--primary); font-size: 11px; font-weight: 850; letter-spacing: .15em; }
  .impact-heading h2 { margin: 0 0 16px; color: var(--heading); font-size: clamp(2.1rem, 4vw, 3.4rem); line-height: 1.07; letter-spacing: -.045em; }
  .impact-heading h2 span { color: var(--primary); }
  .impact-heading p { margin: 0; color: var(--text); font-size: 16px; line-height: 1.8; }
  .impact-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; max-width: 980px; margin: 0 auto 48px; perspective: 1200px; }
  .impact-stat-card { padding: 34px 24px; text-align: center; background: white; border: 1px solid var(--border); border-radius: 22px; box-shadow: 0 14px 40px rgba(9, 35, 77, 0.06); transition: box-shadow .3s ease; }
  .impact-stat-card:hover { box-shadow: 0 24px 55px rgba(9, 35, 77, 0.12); }
  .impact-stat-icon { width: 56px; height: 56px; display: grid; place-items: center; margin: 0 auto 18px; color: white; background: linear-gradient(135deg, var(--primary), var(--secondary)); border-radius: 16px; font-size: 23px; box-shadow: 0 10px 24px rgba(7, 88, 232, 0.22); }
  .impact-stat-number { color: var(--heading); font-size: clamp(2.2rem, 4vw, 3rem); font-weight: 900; line-height: 1; letter-spacing: -.04em; background: linear-gradient(135deg, #0758e8, #6d28d9); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  .impact-stat-label { margin-top: 8px; color: var(--text); font-size: 13px; font-weight: 700; letter-spacing: .02em; }

  .portal-feature-card { position: relative; display: flex; align-items: center; gap: 28px; max-width: 980px; margin: 0 auto; padding: 36px 40px; overflow: hidden; text-decoration: none; color: white; border-radius: 26px; background: radial-gradient(circle at 12% 0%, rgba(67, 128, 255, 0.32), transparent 42%), radial-gradient(circle at 88% 100%, rgba(140, 91, 235, 0.28), transparent 45%), linear-gradient(135deg, #071a35 0%, #0b2a5e 55%, #0d3377 100%); box-shadow: 0 26px 65px rgba(8, 28, 56, 0.22); transform-style: preserve-3d; transition: box-shadow .35s ease; }
  .portal-feature-card:hover { box-shadow: 0 36px 85px rgba(8, 28, 56, 0.32); }
  .portal-orb { position: relative; flex: 0 0 74px; width: 74px; height: 74px; display: grid; place-items: center; border-radius: 20px; color: white; background: linear-gradient(135deg, #2b7cff, #7a4ff0); font-size: 32px; box-shadow: 0 14px 32px rgba(31, 105, 240, 0.35), inset 0 1px 0 rgba(255,255,255,.35); }
  .portal-orb::after { content: ""; position: absolute; inset: -8px; border-radius: 24px; border: 1px solid rgba(120, 165, 255, 0.35); animation: portalOrbPulse 3.2s ease-in-out infinite; }
  @keyframes portalOrbPulse { 0%, 100% { transform: scale(1); opacity: .55; } 50% { transform: scale(1.1); opacity: 1; } }
  .portal-card-content { position: relative; z-index: 2; flex: 1; min-width: 0; }
  .portal-kicker { display: inline-block; color: #9cc0ff; font-size: 10px; font-weight: 850; letter-spacing: .18em; margin-bottom: 8px; }
  .portal-card-content h3 { margin: 0 0 8px; color: white; font-size: clamp(1.6rem, 3vw, 2.2rem); line-height: 1.1; letter-spacing: -.02em; }
  .portal-card-content h3 span { background: linear-gradient(90deg, #6cb0ff, #c1a8ff); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  .portal-card-content p { margin: 0 0 14px; color: #b9cae6; font-size: 14px; line-height: 1.65; }
  .portal-cta { display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; color: white; background: rgba(255, 255, 255, 0.12); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 12px; font-size: 12.5px; font-weight: 800; transition: .3s ease; }
  .portal-feature-card:hover .portal-cta { background: rgba(255, 255, 255, 0.2); transform: translateX(3px); }
  .portal-card-decoration { position: absolute; right: -40px; top: -40px; width: 200px; height: 200px; pointer-events: none; opacity: .5; }
  .portal-card-decoration i { position: absolute; border: 1px solid rgba(140, 175, 255, 0.25); border-radius: 50%; }
  .portal-card-decoration i:nth-child(1) { inset: 0; }
  .portal-card-decoration i:nth-child(2) { inset: 30px; }
  .portal-card-decoration i:nth-child(3) { inset: 60px; }

  /* PREMIUM DARK SAPPHIRE 3D CAROUSEL */
  .home-3d-carousel-section {
    position: relative;
    padding: 90px 0 100px;
    background: radial-gradient(circle at 50% 0%, rgba(30, 80, 200, 0.25) 0%, transparent 60%), linear-gradient(180deg, #0a1428 0%, #0f2557 100%);
    overflow: hidden;
    color: #ffffff;
    border-bottom: 1px solid #edf2f8;
  }
  .home-3d-carousel-section .book-heading { text-align: center; margin-bottom: 50px; }
  .home-3d-carousel-section .book-heading .eyebrow { color: #64ffda; font-weight: 850; letter-spacing: .15em; font-size: 11px; display: inline-block; margin-bottom: 14px; }
  .home-3d-carousel-section .book-heading h2 { color: #ffffff; font-size: clamp(28px, 4vw, 42px); line-height: 1.15; margin: 0 0 16px; letter-spacing: -.045em; }
  .home-3d-carousel-section .book-heading h2 span { color: #64ffda; }
  .home-3d-carousel-section .book-heading p { color: #8892b0; font-size: 16px; margin: 0; }

  .carousel-3d-stage {
    position: relative;
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1500px;
    touch-action: pan-y;
  }

  .carousel-card {
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
    background: #112240;
    cursor: pointer;
    will-change: transform, opacity, filter;
  }

  .carousel-card.is-center {
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.7), 0 0 40px rgba(100, 255, 218, 0.1), 0 0 0 1px rgba(100, 255, 218, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .card-image-wrap { position: relative; flex: 1; overflow: hidden; background: #000; }
  .card-image-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: top center; transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); cursor: zoom-in; }
  .carousel-card.is-center .card-image-wrap img { transform: scale(1.05); }
  
  .card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, #0a1428 0%, rgba(10,20,40,0.4) 50%, transparent 100%); pointer-events: none; }

  .card-tap-hint {
    position: absolute; top: 14px; right: 14px; z-index: 5;
    display: inline-flex; align-items: center; gap: 6px;
    padding: 7px 12px; border-radius: 999px;
    background: rgba(10, 20, 40, 0.65); color: #64ffda;
    border: 1px solid rgba(100, 255, 218, 0.35);
    font-size: 10px; font-weight: 700; letter-spacing: .02em;
    backdrop-filter: blur(8px);
    pointer-events: none;
  }
  .card-tap-hint svg { font-size: 11px; }

  .card-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 32px; background: linear-gradient(to top, rgba(10, 20, 40, 0.98) 0%, rgba(10, 20, 40, 0.8) 60%, transparent 100%); text-align: left; pointer-events: none; }
  .card-content h3 { margin: 0 0 6px; color: #ffffff; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
  .card-content p { margin: 0; color: #8892b0; font-size: 14px; font-weight: 600; }
  
  .card-live-btn {
    display: inline-flex; align-items: center; gap: 8px; margin-top: 18px; padding: 12px 22px;
    background: var(--primary); color: white; text-decoration: none; border-radius: 12px;
    font-size: 13px; font-weight: 800; transition: all 0.3s ease; box-shadow: 0 8px 20px rgba(7, 88, 232, 0.3);
    pointer-events: auto; position: relative; z-index: 6;
  }
  .card-live-btn:hover { background: #034ac4; transform: translateY(-2px); box-shadow: 0 12px 25px rgba(7, 88, 232, 0.5); }

  .carousel-controls { display: flex; align-items: center; justify-content: center; gap: 28px; margin-top: 40px; }
  .carousel-nav-btn {
    width: 56px; height: 56px; border-radius: 50%; border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.03); color: #fff; font-size: 32px; line-height: 1;
    display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .carousel-nav-btn:hover { background: #64ffda; color: #0a1428; border-color: #64ffda; transform: scale(1.1); box-shadow: 0 0 20px rgba(100, 255, 218, 0.4); }
  
  .carousel-dots { display: flex; gap: 10px; }
  .carousel-dots .dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255, 255, 255, 0.2); cursor: pointer; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
  .carousel-dots .dot.active { width: 32px; border-radius: 10px; background: #64ffda; box-shadow: 0 0 10px rgba(100, 255, 218, 0.5); }

  .marquee-portfolio-cta { display: flex; flex-direction: column; align-items: center; gap: 14px; margin-top: 50px; }
  .marquee-portfolio-cta button {
    min-height: 56px; padding: 0 32px; background: transparent; color: #64ffda; border: 1px solid #64ffda;
    border-radius: 14px; font-weight: 800; font-size: 14px; display: inline-flex; align-items: center; gap: 10px;
    cursor: pointer; transition: all 0.3s ease;
  }
  .marquee-portfolio-cta button:hover { background: #64ffda; color: #0a1428; box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2); transform: translateY(-3px); }
  .marquee-portfolio-cta span { color: #8892b0; font-size: 13px; font-weight: 600; }

  /* INTRO */
  .intro-layout { display: grid; grid-template-columns: 1.05fr .95fr; gap: 80px; align-items: center; }
  .intro-layout p { font-size: 16px; line-height: 1.8; }
  .intro-button { margin-top: 15px; }
  .intro-visual-card { padding: 38px; background: radial-gradient(circle at 85% 10%,rgba(109,40,217,.1),transparent 35%), linear-gradient(145deg,#f3f7ff,#fff); border: 1px solid var(--border); border-radius: 28px; box-shadow: 0 25px 70px rgba(10,39,82,.08); }
  .intro-icon { width: 56px; height: 56px; display: grid; place-items: center; margin-bottom: 22px; color: white; background: linear-gradient(135deg,var(--primary),var(--secondary)); border-radius: 16px; font-size: 24px; }
  .intro-visual-card > span { color: var(--primary); font-size: 10px; font-weight: 850; letter-spacing: .15em; }
  .intro-visual-card h3 { color: var(--heading); font-size: 25px; }
  .intro-points { display: grid; grid-template-columns: repeat(2,1fr); gap: 15px; }
  .intro-point-item { display: flex; align-items: center; gap: 10px; min-height: 42px; padding: 10px 12px; font-size: 12px; color: #314761; background: rgba(255,255,255,.68); border: 1px solid rgba(214,225,240,.78); border-radius: 13px; box-shadow: 0 8px 24px rgba(8,31,72,.035); backdrop-filter: blur(8px); }
  .intro-tick { width: 24px; height: 24px; flex: 0 0 24px; display: grid; place-items: center; color: white; background: linear-gradient(135deg,#16b77f,#0b9d70); border-radius: 50%; box-shadow: 0 5px 14px rgba(19,169,118,.22); }
  .intro-tick svg { font-size: 11px; }

  /* QUOTE STRIP */
  .quote-strip-section { padding-bottom: 100px; }
  .quote-strip { display: grid; grid-template-columns: auto 1fr auto; gap: 25px; align-items: center; padding: 32px 38px; color: white; background: linear-gradient(120deg,#07182f,#0e376f); border-radius: 25px; }
  .quote-strip-icon { width: 60px; height: 60px; display: grid; place-items: center; background: rgba(255,255,255,.1); border-radius: 17px; font-size: 25px; }
  .quote-strip span { color: #78adff; font-size: 9px; font-weight: 850; letter-spacing: .14em; }
  .quote-strip h2 { margin: 7px 0; color: white; font-size: 24px; }
  .quote-strip p { margin: 0; color: #b5c5dc; font-size: 12px; }
  .quote-strip button { min-height: 50px; display: flex; align-items: center; gap: 8px; padding: 0 20px; color: var(--heading); background: white; border-radius: 12px; font-weight: 750; cursor: pointer; }

  /* SERVICES */
  .services-section { background: #f7f9fd; }
  .services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
  .service-card { position: relative; overflow: hidden; isolation: isolate; background: rgba(255,255,255,.96); border: 1px solid var(--border); border-radius: 25px; box-shadow: 0 14px 40px rgba(9,35,77,.055); transform: translateZ(0); transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s cubic-bezier(.22,1,.36,1), border-color .4s ease; }
  .service-card:hover { transform: translateY(-12px) scale(1.022); border-color: rgba(7,88,232,.34); box-shadow: 0 34px 75px rgba(9,35,77,.17), 0 12px 30px rgba(7,88,232,.10), 0 0 0 1px rgba(7,88,232,.07), 0 0 42px rgba(7,88,232,.08); }
  .service-image-wrap { height: 220px; position: relative; overflow: hidden; background: #f2f6ff; }
  .service-image-wrap::after { content: ""; position: absolute; inset: 0; pointer-events: none; background: linear-gradient(180deg, rgba(255,255,255,0) 42%, rgba(6,29,65,.10) 72%, rgba(6,29,65,.24) 100%); }
  .service-image-wrap img { width: 100%; height: 100%; display: block; object-fit: cover; cursor: pointer; transition: transform .85s cubic-bezier(.22,1,.36,1), filter .55s ease; }
  .service-card:hover .service-image-wrap img { transform: scale(1.085) translateY(-5px); filter: saturate(1.10) brightness(1.025) contrast(1.025); }
  .service-icon { width: 55px; height: 55px; position: absolute; left: 23px; bottom: 20px; z-index: 2; display: grid; place-items: center; color: white; background: linear-gradient(135deg,var(--primary),var(--secondary)); border: 1px solid rgba(255,255,255,.42); border-radius: 16px; font-size: 24px; box-shadow: 0 10px 24px rgba(7,88,232,.22); transition: transform .48s cubic-bezier(.22,1,.36,1), box-shadow .48s ease; }
  .service-card:hover .service-icon { transform: translateY(-10px) scale(1.045); box-shadow: 0 20px 38px rgba(7,88,232,.38), 0 0 0 8px rgba(7,88,232,.085); }
  .service-body { position: relative; padding: 30px; }
  .service-body h3 { color: var(--heading); }
  .service-body p { min-height: 105px; font-size: 14px; line-height: 1.75; }
  .service-features { display: grid; gap: 10px; }
  .service-features span { display: flex; align-items: center; gap: 8px; font-size: 12px; }
  .service-features svg { color: var(--green); }
  .service-body button { display: flex; align-items: center; gap: 8px; margin-top: 25px; padding: 0; color: var(--primary); background: transparent; font-weight: 750; cursor: pointer; }

  /* BENEFITS */
  .benefits-layout { display: grid; grid-template-columns: .78fr 1.22fr; gap: 70px; }
  .benefits-layout > div:first-child p { line-height: 1.8; }
  .benefits-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; }
  .benefit-card { padding: 30px; border: 1px solid var(--border); border-radius: 22px; background: white; transition: .3s; }
  .benefit-card > div { width: 50px; height: 50px; display: grid; place-items: center; color: var(--primary); background: rgba(7,88,232,.08); border-radius: 14px; font-size: 21px; animation: premiumIconPulse 2.8s ease-in-out infinite; }
  .benefit-card h3 { color: var(--heading); }
  .benefit-card p { font-size: 13px; line-height: 1.7; }

  /* PROCESS */
  .process-section { background: #f7f9fd; }
  .process-path { max-width: 950px; position: relative; margin: 30px auto 0; }
  .process-path-line { width: 4px; position: absolute; top: 20px; bottom: 20px; left: 50%; transform: translateX(-50%); background: linear-gradient(to bottom, var(--primary), var(--secondary), var(--primary)); border-radius: 50px; }
  .process-path-item { min-height: 190px; position: relative; display: grid; grid-template-columns: 1fr 90px 1fr; align-items: center; }
  .process-content { padding: 28px; background: white; border: 1px solid var(--border); border-radius: 22px; box-shadow: 0 15px 45px rgba(8,31,72,.06); }
  .left-side .process-content { grid-column: 1; text-align: right; }
  .right-side .process-content { grid-column: 3; }
  .process-content span { color: var(--primary); font-size: 9px; font-weight: 850; letter-spacing: .12em; }
  .process-content h3 { margin: 8px 0; color: var(--heading); font-size: 20px; }
  .process-content p { margin: 0; font-size: 12px; line-height: 1.7; }
  .process-center-icon { width: 58px; height: 58px; position: absolute; left: 50%; z-index: 3; display: grid; place-items: center; transform: translateX(-50%); color: white; background: linear-gradient(135deg,var(--primary),var(--secondary)); border: 7px solid #f7f9fd; border-radius: 50%; font-size: 19px; }

  /* WHY */
  .why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
  .why-card { padding: 34px; text-align: center; border: 1px solid var(--border); border-radius: 22px; transition: .3s; }
  .why-card > div { width: 60px; height: 60px; display: grid; place-items: center; margin: 0 auto 20px; color: white; background: linear-gradient(135deg,var(--primary),var(--secondary)); border-radius: 17px; font-size: 23px; }
  .why-card h3 { color: var(--heading); }
  .why-card p { font-size: 13px; line-height: 1.7; }

  /* INDUSTRIES */
  .industries-section { padding: 80px 0; color: white; background: #08172f; }
  .industries-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: 70px; align-items: center; }
  .industries-layout h2 { color: white; font-size: clamp(2rem,4vw,3.2rem); }
  .industries-layout p { color: #a9b9d0; line-height: 1.8; }
  .industry-tags { display: flex; flex-wrap: wrap; gap: 11px; }
  .industry-tags > .industry-chip { position: relative; display: flex; align-items: center; gap: 8px; padding: 13px 17px; overflow: hidden; background: linear-gradient(120deg,rgba(255,255,255,.06),rgba(255,255,255,.11),rgba(255,255,255,.06)); border: 1px solid rgba(255,255,255,.14); border-radius: 999px; font-size: 11px; box-shadow: inset 0 1px 0 rgba(255,255,255,.08); animation: industryFloat 4.2s ease-in-out infinite; }
  .industry-tags > .industry-chip:nth-child(2n) { animation-delay: -.9s; }
  .industry-tags > .industry-chip:nth-child(3n) { animation-delay: -1.7s; }
  .industry-chip::after { content: ""; position: absolute; inset: 0; transform: translateX(-130%); background: linear-gradient(100deg,transparent,rgba(255,255,255,.14),transparent); animation: industrySheen 4.8s ease-in-out infinite; }
  .industry-spark { position: relative; z-index: 1; display: inline-grid; place-items: center; color: #84aaff; }

  /* REVIEWS */
  .reviews-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 23px; }
  .review-card { padding: 34px; background: white; border: 1px solid var(--border); border-radius: 24px; box-shadow: 0 15px 50px rgba(8,31,72,.05); }
  .review-header { display: flex; justify-content: space-between; align-items: center; }
  .quote-icon { width: 48px; height: 48px; display: grid; place-items: center; color: var(--primary); background: rgba(7,88,232,.08); border-radius: 14px; }
  .stars { display: flex; gap: 4px; color: #f3aa16; }
  .animated-star { display: inline-grid; place-items: center; color: #f4b21d; transform-origin: center; }
  .animated-star svg { fill: currentColor; }
  .review-card > p { min-height: 105px; margin: 24px 0; font-size: 14px; line-height: 1.8; }
  .review-user { display: flex; align-items: center; gap: 12px; padding-top: 20px; border-top: 1px solid var(--border); }
  .review-user > div { width: 44px; height: 44px; display: grid; place-items: center; color: white; background: linear-gradient(135deg,var(--primary),var(--secondary)); border-radius: 50%; font-weight: 850; }
  .review-user span { display: flex; flex-direction: column; }
  .review-user strong { color: var(--heading); font-size: 13px; }
  .review-user small { font-size: 10px; }

  /* DIGITAL GROWTH */
  .digital-growth-section { background: #f7f9fd; }
  .digital-growth-layout { display: grid; grid-template-columns: 1.1fr .9fr; gap: 70px; align-items: center; }
  .digital-growth-layout p { font-size: 15px; line-height: 1.8; }
  .growth-cards { display: grid; gap: 15px; }
  .growth-cards > div { padding: 25px; background: white; border: 1px solid var(--border); border-radius: 20px; }
  .growth-cards svg { color: var(--primary); font-size: 23px; }
  .growth-cards h3 { color: var(--heading); }
  .growth-cards p { margin: 0; font-size: 12px; }

  /* FAQ */
  .faq-section { background: white; }
  .faq-layout { display: flex; flex-direction: column; align-items: center; gap: 38px; }
  .faq-heading { position: static; width: min(760px, 100%); margin: 0 auto; text-align: center; }
  .faq-heading h2 { max-width: 720px; margin-left: auto; margin-right: auto; }
  .faq-heading p { max-width: 660px; margin-left: auto; margin-right: auto; line-height: 1.8; }
  .faq-whatsapp-button { min-height: 52px; display: inline-flex; align-items: center; gap: 9px; margin-top: 20px; padding: 0 20px; color: white; background: #16a66f; border-radius: 13px; font-weight: 750; cursor: pointer; }
  .faq-whatsapp-button svg { font-size: 21px; }
  .faq-heading .faq-whatsapp-button { margin-left: auto; margin-right: auto; }
  .faq-list { width: min(900px, 100%); margin: 0 auto; display: grid; gap: 12px; }
  .faq-item { overflow: hidden; background: #fafcff; border: 1px solid var(--border); border-radius: 17px; transition: .3s; }
  .faq-item.active { background: white; border-color: rgba(7,88,232,.28); box-shadow: 0 15px 40px rgba(8,31,72,.07); }
  .faq-question { width: 100%; min-height: 70px; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 16px 21px; text-align: left; color: var(--heading); background: transparent; font-weight: 750; cursor: pointer; }
  .faq-question > span { display: flex; align-items: center; gap: 14px; }
  .faq-question small { color: var(--primary); font-size: 9px; }
  .faq-question svg { color: var(--primary); }
  .faq-answer { overflow: hidden; }
  .faq-answer p { margin: 0; padding: 0 55px 22px; font-size: 13px; line-height: 1.8; }

  /* BIG QUOTE */
  .big-quote-section { padding: 100px 0; color: white; background: radial-gradient(circle at 10% 20%,rgba(27,104,255,.25),transparent 30%), linear-gradient(135deg,#07172e,#0b2854); }
  .big-quote-layout { display: grid; grid-template-columns: 1.15fr .85fr; gap: 70px; align-items: center; }
  .big-quote-layout > div:first-child > span { color: #75a8ff; font-size: 10px; font-weight: 850; letter-spacing: .15em; }
  .big-quote-layout h2 { color: white; font-size: clamp(2.4rem,4.5vw,4rem); line-height: 1.04; }
  .big-quote-layout p { color: #b3c4dc; line-height: 1.8; }
  .quote-checks { display: grid; gap: 11px; margin-top: 25px; }
  .quote-checks span { display: flex; align-items: center; gap: 8px; font-size: 12px; }
  .quote-checks svg { color: #70a8ff; }
  .quote-action-card { padding: 36px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14); border-radius: 25px; }
  .quote-action-card > div { width: 58px; height: 58px; display: grid; place-items: center; background: linear-gradient(135deg,#2278ff,#7651e6); border-radius: 17px; font-size: 25px; }
  .quote-action-card h3 { color: white; }
  .white-button, .whatsapp-button, .call-button { min-height: 52px; display: flex; align-items: center; justify-content: center; gap: 9px; padding: 0 20px; border-radius: 12px; font-weight: 750; cursor: pointer; }
  .white-button { width: 100%; color: var(--heading); background: white; }
  .whatsapp-button { width: 100%; margin-top: 10px; color: white; background: #15a66f; }
  .whatsapp-button svg { font-size: 20px; }

  /* FINAL CTA */
  .final-cta { padding: 110px 0; text-align: center; color: white; background: #06152c; }
  .final-cta-content { max-width: 850px; margin: auto; }
  .final-icon { width: 65px; height: 65px; display: grid; place-items: center; margin: 0 auto 20px; background: linear-gradient(135deg,#2778ff,#7652e8); border-radius: 19px; font-size: 27px; }
  .final-cta-content > span { color: #76a9ff; font-size: 10px; font-weight: 850; letter-spacing: .15em; }
  .final-cta h2 { margin: 15px 0; color: white; font-size: clamp(2.5rem,5vw,4.2rem); line-height: 1.04; }
  .final-cta p { color: #afc0d8; line-height: 1.8; }
  .final-buttons { display: flex; justify-content: center; flex-wrap: wrap; gap: 11px; margin-top: 30px; }
  .final-buttons .white-button, .final-buttons .whatsapp-button, .final-buttons .call-button { width: auto; margin: 0; }
  .call-button { color: white; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15); }

  @keyframes premiumIconPulse { 0%,100% { transform: translateY(0) scale(1); box-shadow: 0 0 0 0 rgba(7,88,232,0); } 50% { transform: translateY(-3px) scale(1.04); box-shadow: 0 0 0 8px rgba(7,88,232,.035); } }
  @keyframes industryFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
  @keyframes industrySheen { 0%,55% { transform: translateX(-130%); } 78%,100% { transform: translateX(130%); } }

  /* TABLET */
  @media (max-width: 1024px) {
    .hero-split-layout, .intro-layout, .benefits-layout, .digital-growth-layout, .big-quote-layout { grid-template-columns: 1fr; }
    .services-grid { grid-template-columns: repeat(2,1fr); }
    .why-grid { grid-template-columns: repeat(2,1fr); }
    .industries-layout { grid-template-columns: 1fr; }
  }

  /* MOBILE */
  @media (max-width: 768px) {
    .container { width: min(100% - 28px, 1180px); }
    .section { padding: 75px 0; }

    .intro-layout { gap: 42px; }
    .intro-layout > div:first-child { text-align: center; padding: 0 4px; }
    .intro-layout > div:first-child .eyebrow { margin-left: auto; margin-right: auto; }
    .intro-layout > div:first-child h2 { max-width: 520px; margin-left: auto; margin-right: auto; font-size: clamp(2rem,9vw,2.75rem); line-height: 1.05; }
    .intro-layout > div:first-child p { max-width: 570px; margin-left: auto; margin-right: auto; font-size: 15px; line-height: 1.82; }
    .intro-button { display: inline-flex !important; width: auto !important; min-width: 220px; margin: 20px auto 0 !important; }
    .intro-visual-card { text-align: center; padding: 30px 22px; }
    .intro-icon { margin: 0 auto 20px; }
    .intro-points { max-width: 540px; margin: 22px auto 0; text-align: left; }
    .benefit-card { text-align: center; }
    .benefit-card > div { margin-left: auto; margin-right: auto; }
    .quote-icon { margin-left: auto; margin-right: auto; }
    .review-header { align-items: center; }

    .hero-section { padding: 128px 0 44px; min-height: auto; }
    .hero-split-layout { grid-template-columns: 1fr; gap: 40px; }
    .hero-left { text-align: center; max-width: 760px; margin: 0 auto; }
    .hero-split-kicker { justify-content: center; }
    .hero-left h1 { max-width: 680px; margin: 0 auto; font-size: clamp(2.35rem,9.6vw,3.25rem); line-height: 1.02; letter-spacing: -.048em; }
    .hero-accent-line { margin-left: auto; margin-right: auto; }
    .hero-split-copy { max-width: 590px; margin-left: auto; margin-right: auto; font-size: 13.5px; }
    .hero-benefit-row { max-width: 620px; margin-left: auto; margin-right: auto; grid-template-columns: 1fr; }
    .hero-benefit-item { grid-template-columns: 36px 1fr; gap: 7px; }
    .hero-benefit-icon { width: 36px; height: 36px; }
    .hero-split-actions { justify-content: center; }
    .hero-whatsapp-link { margin-left: auto; margin-right: auto; }
    .hero-right { width: min(720px, 100%); min-height: 455px; margin: 0 auto; }
    .hero-image-frame { inset: 0 22px; }
    .hero-right::before { left: 10px; height: 285px; }
    .hero-image-tag { left: 20px; }

    .quote-strip { grid-template-columns: 1fr; text-align: center; }
    .quote-strip-icon { margin: auto; }
    .quote-strip button { justify-content: center; }

    .services-grid, .benefits-grid, .reviews-grid, .why-grid { grid-template-columns: 1fr; }

    .process-path-line { left: 29px; }
    .process-path-item { min-height: auto; display: block; margin-bottom: 25px; padding-left: 70px; }
    .process-content { text-align: left !important; }
    .process-center-icon { left: 29px; top: 28px; }

    .industries-layout { text-align: center; }
    .industry-tags { justify-content: center; }

    .faq-answer p { padding: 0 20px 20px; }

    .final-buttons { flex-direction: column; }
    .final-buttons .white-button, .final-buttons .whatsapp-button, .final-buttons .call-button { width: 100%; }

    /* MOBILE CAROUSEL */
    .carousel-3d-stage { height: 450px; }
    .card-content { padding: 20px; }
    .card-content h3 { font-size: 20px; }
    .card-live-btn { padding: 10px 16px; font-size: 12px; }
    .card-tap-hint { font-size: 9px; padding: 6px 10px; top: 10px; right: 10px; }

    .impact-stats-grid { grid-template-columns: 1fr; }
    .portal-feature-card { flex-direction: column; text-align: center; padding: 28px 22px; gap: 18px; }
  }

  @media (max-width: 480px) {
    .hero-section { padding-top: 126px; }
    .hero-left h1 { font-size: clamp(2.35rem,12.8vw,3.55rem); }
    .hero-split-copy { font-size: 14px; }
    .hero-right { min-height: 410px; }
    .intro-points { grid-template-columns: 1fr; gap: 10px; }
    .intro-point-item { justify-content: flex-start; min-height: 46px; padding: 10px 12px; font-size: 11.5px; }
    .intro-visual-card h3 { font-size: 22px; line-height: 1.2; }
    .service-image-wrap { height: 190px; }
    .review-card, .why-card, .benefit-card { padding: 25px; }
  }

  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
  }

  /* IMAGE LIGHTBOX */
  .image-lightbox {
    position: fixed; inset: 0; z-index: 9999;
    display: flex; align-items: center; justify-content: center;
    padding: 30px;
    background: rgba(3, 10, 22, 0.92);
    backdrop-filter: blur(8px);
    cursor: zoom-out;
  }
  .image-lightbox img {
    max-width: 92vw; max-height: 88vh;
    border-radius: 16px;
    box-shadow: 0 30px 80px rgba(0,0,0,.6);
    object-fit: contain;
    cursor: zoom-out;
  }
  .image-lightbox-close {
    position: absolute; top: 22px; right: 26px;
    width: 46px; height: 46px;
    display: grid; place-items: center;
    color: white; background: rgba(255,255,255,.1);
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 50%;
    font-size: 28px; line-height: 1;
    cursor: pointer;
    transition: .3s ease;
    z-index: 10;
  }
  .image-lightbox-close:hover {
    background: rgba(255,255,255,.22);
    transform: rotate(90deg) scale(1.05);
  }
  @media (max-width: 768px) {
    .image-lightbox { padding: 14px; }
    .image-lightbox img { max-width: 96vw; max-height: 82vh; border-radius: 12px; }
    .image-lightbox-close { top: 12px; right: 14px; width: 40px; height: 40px; font-size: 24px; }
  }
`;

export default Home;