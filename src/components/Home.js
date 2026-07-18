import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* =========================================================
   FONT AWESOME ICONS
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
   CONFIGURATION
========================================================= */

const WEBSITE_URL = "https://smyvisiontechnologies.vercel.app";

const PHONE_NUMBER = "8500352005";

const PHONE_LINK = "+918500352005";

const EMAIL = "smyvisiontechnologies@gmail.com";

const PROJECT_CHANGE_TIME = 7000;

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: <FaLaptopCode />,

    image: "/images/web.png",

    title: "Website Development",

    description:
      "Professional websites built to establish trust, present your services clearly and help potential customers connect with your business.",

    features: [
      "Business Websites",
      "Corporate Websites",
      "Responsive Web Design",
      "SEO-Ready Development",
    ],
  },

  {
    icon: <FaBarsProgress />,

    image: "/images/auto.png",

    title: "Business Automation",

    description:
      "Custom automation solutions designed to simplify repetitive operations, improve efficiency and create better digital workflows.",

    features: [
      "Workflow Automation",
      "Custom Dashboards",
      "Business Management Systems",
      "Process Automation",
    ],
  },

  {
    icon: <FaBrain />,

    image: "/images/chat.png",

    title: "AI & Chatbot Solutions",

    description:
      "Smart AI-powered solutions that help businesses automate communication, manage enquiries and deliver faster customer experiences.",

    features: [
      "AI Chatbots",
      "Customer Support",
      "Lead Automation",
      "Smart Business Tools",
    ],
  },
];

/* =========================================================
   GENERAL MARQUEE
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
   BENEFITS
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
   PROJECTS
========================================================= */

const projects = [
  {
    title: "NKR Car Rentals",

    category: "Car Rental Website",

    image: "/images/nkr.png",

    url: "https://www.nkrselfdrivecarrentals.in/",

    description:
      "A modern car rental website designed to present services clearly, provide easy customer navigation and create a professional mobile experience.",
  },

  {
    title: "Bindiya Beauty Salon",

    category: "Beauty & Salon Website",

    image: "/images/beauty.png",

    url: "https://www.bindiyazbeautysalon.in/",

    description:
      "A premium salon website created to showcase services, strengthen brand identity and provide customers with a smooth digital experience.",
  },

  {
    title: "Happy Organize",

    category: "Home Services Website",

    image: "/images/home.png",

    url: "https://www.happyorganize.com/",

    description:
      "A professional home services website designed with clear service presentation, responsive layouts and customer-focused navigation.",
  },

  {
    title: "Arvis Fertilizers",

    category: "Agriculture Business Website",

    image: "/images/arvis.png",

    url: "https://www.arvisfertilizers.com/",

    description:
      "A modern agriculture-focused digital platform developed to strengthen business presentation and communicate products professionally.",
  },
];

/* =========================================================
   PROJECT MARQUEE ITEMS
========================================================= */

const projectMarqueeRowOne = [
  {
    title: "NKR Car Rentals",

    image: "/images/nkr.png",

    category: "Car Rental",
  },

  {
    title: "Bindiya Beauty Salon",

    image: "/images/beauty.png",

    category: "Beauty & Salon",
  },

  {
    title: "Happy Organize",

    image: "/images/home.png",

    category: "Home Services",
  },

  {
    title: "Arvis Fertilizers",

    image: "/images/arvis.png",

    category: "Agriculture",
  },
];

const projectMarqueeRowTwo = [
  {
    title: "Arvis Fertilizers",

    image: "/images/arvis.png",

    category: "Agriculture",
  },

  {
    title: "Happy Organize",

    image: "/images/home.png",

    category: "Home Services",
  },

  {
    title: "Bindiya Beauty Salon",

    image: "/images/beauty.png",

    category: "Beauty & Salon",
  },

  {
    title: "NKR Car Rentals",

    image: "/images/nkr.png",

    category: "Car Rental",
  },
];

/* =========================================================
   REVIEWS
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

    review:
      "Super happy with the work. Highly recommend it!",
  },

  {
    name: "Arvis Fertilizers",

    role: "Agriculture Business",

    review:
      "The team delivered a professional digital platform with a clean structure and responsive design that supports our business presentation.",
  },
];

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  {
    icon: <FaReact />,

    name: "React JS",

    description: "Modern interactive user interfaces",
  },

  {
    icon: <SiJavascript />,

    name: "JavaScript",

    description: "Dynamic frontend functionality",
  },

  {
    icon: <FaHtml5 />,

    name: "HTML5",

    description: "Semantic modern web structure",
  },

  {
    icon: <FaCss3Alt />,

    name: "CSS3",

    description: "Responsive modern styling",
  },

  {
    icon: <FaPython />,

    name: "Python",

    description: "Powerful backend development",
  },

  {
    icon: <SiDjango />,

    name: "Django",

    description: "Secure business applications",
  },

  {
    icon: <FaNodeJs />,

    name: "Node.js",

    description: "Scalable backend applications",
  },

  {
    icon: <SiMysql />,

    name: "MySQL",

    description: "Reliable structured databases",
  },

  {
    icon: <SiPostgresql />,

    name: "PostgreSQL",

    description: "Advanced database solutions",
  },

  {
    icon: <SiMongodb />,

    name: "MongoDB",

    description: "Flexible modern databases",
  },

  {
    icon: <SiFirebase />,

    name: "Firebase",

    description: "Cloud-powered applications",
  },

  {
    icon: <FaCloud />,

    name: "Cloud Solutions",

    description: "Modern scalable infrastructure",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",

    icon: <FaComments />,

    title: "Discovery",

    description:
      "We begin by understanding your business, goals, customers and exact project requirements.",
  },

  {
    number: "02",

    icon: <FaSitemap />,

    title: "Strategy",

    description:
      "We organize the project structure, user journey, pages and technical requirements.",
  },

  {
    number: "03",

    icon: <FaWandMagicSparkles />,

    title: "Design",

    description:
      "We create a modern visual direction focused on professionalism, usability and your business identity.",
  },

  {
    number: "04",

    icon: <FaCode />,

    title: "Development",

    description:
      "The approved design is transformed into a responsive and functional digital experience.",
  },

  {
    number: "05",

    icon: <FaShieldHalved />,

    title: "Testing",

    description:
      "We carefully test responsiveness, usability and functionality across different screen sizes.",
  },

  {
    number: "06",

    icon: <FaRocket />,

    title: "Launch",

    description:
      "Your completed digital solution is prepared and launched for your customers to experience.",
  },
];

/* =========================================================
   FAQ QUESTIONS
========================================================= */

const faqItems = [
  {
    question: "What types of websites do you develop?",

    answer:
      "We develop professional business websites, corporate websites, service websites, portfolio websites, e-commerce platforms, landing pages, custom portals and web applications according to business requirements.",
  },

  {
    question: "Do you create mobile-responsive websites?",

    answer:
      "Yes. Every website we develop is designed to work smoothly across smartphones, tablets, laptops and desktop devices.",
  },

  {
    question: "Will my website be SEO-friendly?",

    answer:
      "We build websites with SEO-friendly technical foundations including clean page structure, semantic HTML, heading hierarchy, metadata support, responsive design and performance-focused development.",
  },

  {
    question: "Can you redesign my existing website?",

    answer:
      "Yes. We can redesign an existing website with a more modern interface, improved mobile responsiveness, better content structure and a stronger user experience.",
  },

  {
    question: "How long does website development take?",

    answer:
      "Development time depends on the size and complexity of the project. A standard business website can usually be completed faster than a custom application or advanced business portal.",
  },

  {
    question: "Do you provide custom web application development?",

    answer:
      "Yes. We can develop custom web-based systems including dashboards, management platforms, customer portals and business automation solutions.",
  },

  {
    question: "Can you integrate WhatsApp into the website?",

    answer:
      "Yes. We can integrate WhatsApp buttons and direct enquiry options so customers can quickly communicate with your business.",
  },

  {
    question: "Do you develop e-commerce websites?",

    answer:
      "Yes. We can build e-commerce solutions that allow businesses to display products, manage catalogues and provide online shopping experiences.",
  },

  {
    question: "Can you develop AI chatbot solutions?",

    answer:
      "Yes. We provide chatbot and AI automation solutions for customer enquiries, lead generation, support and business communication.",
  },

  {
    question: "Do you provide business automation solutions?",

    answer:
      "Yes. We can create custom digital workflows and management systems that reduce repetitive work and help businesses manage operations more efficiently.",
  },

  {
    question: "Will I be able to update my website later?",

    answer:
      "The ability to update content depends on the type of website and management system selected. We can develop solutions with administrative features when required.",
  },

  {
    question: "Do you provide support after website development?",

    answer:
      "We provide technical guidance and support based on the project requirements and agreed service scope.",
  },

  {
    question: "Can you help businesses build a complete digital presence?",

    answer:
      "Yes. Along with website development, we can help businesses implement automation, chatbot solutions and other digital systems required for their operations.",
  },

  {
    question: "How can I get a quotation for my project?",

    answer:
      "You can contact us through the website, WhatsApp or phone and share your requirements. We will understand your project and provide a suitable quotation.",
  },

  {
    question: "How do I start a project with SMYVISION TECHNOLOGIES?",

    answer:
      "Simply contact our team and tell us about your business and project idea. We will discuss your requirements, understand your goals and recommend the right solution.",
  },
];

/* =========================================================
   WHY CHOOSE US
========================================================= */

const reasons = [
  {
    icon: <FaBullseye />,

    title: "Business-First Thinking",

    description:
      "We understand your business objectives before deciding how technology should solve the problem.",
  },

  {
    icon: <FaRocket />,

    title: "Modern Technologies",

    description:
      "We use reliable modern technologies to build scalable and professional digital solutions.",
  },

  {
    icon: <FaHeadset />,

    title: "Clear Communication",

    description:
      "We keep project communication simple so you can understand each important stage of development.",
  },

  {
    icon: <FaShieldHalved />,

    title: "Quality Focus",

    description:
      "Our development process focuses on responsiveness, usability and professional presentation.",
  },

  {
    icon: <FaBolt />,

    title: "Performance Mindset",

    description:
      "We focus on smooth user experiences and efficient development practices.",
  },

  {
    icon: <FaUsers />,

    title: "Built Around Your Needs",

    description:
      "Every project is developed according to the actual requirements and goals of the business.",
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  "Healthcare",
  "Education",
  "Real Estate",
  "Restaurants",
  "Agriculture",
  "Beauty & Salons",
  "Travel & Rentals",
  "Home Services",
  "Startups",
  "Retail Businesses",
];

/* =========================================================
   FAQ SCHEMA
========================================================= */

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: faqItems.map((item) => ({
    "@type": "Question",

    name: item.question,

    acceptedAnswer: {
      "@type": "Answer",

      text: item.answer,
    },
  })),
};

/* =========================================================
   SEO SCHEMA
   LOCATION TERMS ONLY INSIDE SEO
========================================================= */

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "ProfessionalService",

      "@id": `${WEBSITE_URL}/#organization`,

      name: "SMYVISION TECHNOLOGIES",

      alternateName: "SMYVISION",

      url: WEBSITE_URL,

      logo: `${WEBSITE_URL}/logo.png`,

      image: `${WEBSITE_URL}/logo.png`,

      description:
        "SMYVISION TECHNOLOGIES is a professional web development company in Vijayawada providing website development, responsive web design, SEO-friendly websites, custom web applications, business automation and AI chatbot solutions across Vijayawada and Andhra Pradesh.",

      telephone: PHONE_LINK,

      email: EMAIL,

      address: {
        "@type": "PostalAddress",

        addressLocality: "Vijayawada",

        addressRegion: "Andhra Pradesh",

        addressCountry: "IN",
      },

      areaServed: [
        {
          "@type": "City",

          name: "Vijayawada",
        },

        {
          "@type": "State",

          name: "Andhra Pradesh",
        },
      ],

      contactPoint: {
        "@type": "ContactPoint",

        telephone: PHONE_LINK,

        contactType: "customer service",

        areaServed: "IN",

        availableLanguage: ["English", "Telugu"],
      },
    },

    {
      "@type": "WebSite",

      "@id": `${WEBSITE_URL}/#website`,

      name: "SMYVISION TECHNOLOGIES",

      url: WEBSITE_URL,

      publisher: {
        "@id": `${WEBSITE_URL}/#organization`,
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "WebPage",

      "@id": `${WEBSITE_URL}/#webpage`,

      url: WEBSITE_URL,

      name:
        "Web Development Services in Vijayawada | Best Website Development Company",

      description:
        "Professional web development services in Vijayawada by SMYVISION TECHNOLOGIES. Get responsive websites, custom web applications, SEO-friendly website development, AI solutions and business automation services across Andhra Pradesh.",

      isPartOf: {
        "@id": `${WEBSITE_URL}/#website`,
      },

      about: {
        "@id": `${WEBSITE_URL}/#organization`,
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "Service",

      name: "Web Development Services in Vijayawada",

      serviceType: "Web Development",

      description:
        "Professional web development services including business websites, responsive web design, custom web applications and SEO-friendly website development in Vijayawada and Andhra Pradesh.",

      provider: {
        "@id": `${WEBSITE_URL}/#organization`,
      },

      areaServed: [
        {
          "@type": "City",

          name: "Vijayawada",
        },

        {
          "@type": "State",

          name: "Andhra Pradesh",
        },
      ],
    },
  ],
};

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,

    y: 35,
  },

  visible: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 0.65,

      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   HOME
========================================================= */

const Home = () => {
  const navigate = useNavigate();

  const [activeProject, setActiveProject] = useState(0);

  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length);
    }, PROJECT_CHANGE_TIME);

    return () => clearInterval(timer);
  }, []);

  const goToContact = () => {
    navigate("/contact");

    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  const goToProjects = () => {
    document.getElementById("our-work")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handlePreviousProject = () => {
    setActiveProject(
      (current) => (current - 1 + projects.length) % projects.length
    );
  };

  const handleNextProject = () => {
    setActiveProject((current) => (current + 1) % projects.length);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi SMYVISION TECHNOLOGIES, I would like to discuss a website or digital solution for my business. Please share more details."
    );

    window.open(
      `https://wa.me/91${PHONE_NUMBER}?text=${message}`,

      "_blank",

      "noopener,noreferrer"
    );
  };

  const callNow = () => {
    window.location.href = `tel:${PHONE_LINK}`;
  };

  const toggleFaq = (index) => {
    setActiveFaq((current) => (current === index ? null : index));
  };

  return (
    <>
      {/* =====================================================
          ADVANCED SEO
      ====================================================== */}

      <Helmet>
        <html lang="en-IN" />

        <title>
          Web Development Services in Vijayawada | Best Website Development
          Company
        </title>

        <meta
          name="description"
          content="Looking for professional web development services in Vijayawada? SMYVISION TECHNOLOGIES provides responsive website development, custom web applications, SEO-friendly websites, business automation and AI chatbot solutions across Vijayawada and Andhra Pradesh."
        />

        <meta
          name="keywords"
          content="web development services in Vijayawada, web development company in Vijayawada, best web development company Vijayawada, website development services Vijayawada, website development company Vijayawada, best website developers Vijayawada, professional website development Vijayawada, affordable web development Vijayawada, website designers Vijayawada, software company Vijayawada, web developers Andhra Pradesh, website development Andhra Pradesh, SEO friendly website development Vijayawada, AI development company Vijayawada, business automation Vijayawada"
        />

        <meta name="author" content="SMYVISION TECHNOLOGIES" />

        <meta name="publisher" content="SMYVISION TECHNOLOGIES" />

        <meta name="robots" content="index, follow" />

        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          name="bingbot"
          content="index, follow, max-image-preview:large"
        />

        <meta
          name="application-name"
          content="SMYVISION TECHNOLOGIES"
        />

        <meta name="geo.region" content="IN-AP" />

        <meta name="geo.placename" content="Vijayawada" />

        <link rel="canonical" href={WEBSITE_URL} />

        {/* OPEN GRAPH */}

        <meta property="og:type" content="website" />

        <meta property="og:url" content={WEBSITE_URL} />

        <meta
          property="og:title"
          content="Web Development Services in Vijayawada | SMYVISION TECHNOLOGIES"
        />

        <meta
          property="og:description"
          content="Professional website development, responsive web design, custom web applications, business automation and AI solutions in Vijayawada and Andhra Pradesh."
        />

        <meta
          property="og:site_name"
          content="SMYVISION TECHNOLOGIES"
        />

        <meta property="og:locale" content="en_IN" />

        {/* TWITTER / SOCIAL */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Web Development Services in Vijayawada | SMYVISION TECHNOLOGIES"
        />

        <meta
          name="twitter:description"
          content="Professional and SEO-friendly website development services in Vijayawada and Andhra Pradesh."
        />

        {/* AI SEARCH / ENTITY CONTEXT */}

        <meta
          name="subject"
          content="Website Development, Web Development, AI Solutions and Business Automation"
        />

        <meta
          name="classification"
          content="Web Development Company"
        />

        <meta
          name="coverage"
          content="Vijayawada, Andhra Pradesh, India"
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <style>{styles}</style>

      <main className="smy-home">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="hero-section">
          <div className="hero-grid" />

          <motion.div
            className="hero-orb orb-one"
            animate={{
              x: [0, 40, 0],

              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,

              repeat: Infinity,

              ease: "easeInOut",
            }}
          />

          <motion.div
            className="hero-orb orb-two"
            animate={{
              x: [0, -35, 0],

              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,

              repeat: Infinity,

              ease: "easeInOut",
            }}
          />

          <div className="container hero-layout">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div
                className="hero-badge"
                variants={fadeUp}
              >
                <FaWandMagicSparkles />

                <span>
                  Building Digital Experiences That Drive Business Forward
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp}>
                Turning Business Ideas Into
                <span> Powerful Digital Experiences.</span>
              </motion.h1>

              <motion.p
                className="hero-description"
                variants={fadeUp}
              >
                We combine modern technology, thoughtful design and smart
                digital solutions to help businesses build stronger brands,
                simplify operations and create better customer experiences.
              </motion.p>

              <motion.div
                className="hero-actions"
                variants={fadeUp}
              >
                <button
                  type="button"
                  className="primary-button"
                  onClick={goToContact}
                >
                  Get a Free Quote

                  <FaArrowRight />
                </button>

                <button
                  type="button"
                  className="secondary-button"
                  onClick={goToProjects}
                >
                  Explore Our Work

                  <FaArrowUpRightFromSquare />
                </button>
              </motion.div>

              <motion.div
                className="hero-features"
                variants={fadeUp}
              >
                <span>
                  <FaCircleCheck />

                  Professional Development
                </span>

                <span>
                  <FaCircleCheck />

                  Smart Digital Solutions
                </span>

                <span>
                  <FaCircleCheck />

                  Growth-Focused Approach
                </span>
              </motion.div>
            </motion.div>

            {/* HERO VISUAL */}

            <motion.div
              className="hero-visual"
              initial={{
                opacity: 0,

                scale: 0.9,

                rotateY: 8,
              }}
              animate={{
                opacity: 1,

                scale: 1,

                rotateY: 0,
              }}
              transition={{
                duration: 0.9,

                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="browser-card">
                <div className="browser-top">
                  <div className="browser-dots">
                    <span />

                    <span />

                    <span />
                  </div>

                  <div className="browser-url">
                    smyvisiontechnologies.vercel.app
                  </div>
                </div>

                <div className="browser-content">
                  <div className="browser-brand">
                    <FaCode />

                    <span>SMYVISION</span>
                  </div>

                  <div className="browser-main-content">
                    <span>DIGITAL INNOVATION</span>

                    <h2>
                      Create.
                      <br />
                      Transform.
                      <br />
                      Grow.
                    </h2>

                    <p>
                      Digital solutions designed around real business goals.
                    </p>

                    <div className="fake-button">
                      Start Your Project
                    </div>
                  </div>

                  <motion.div
                    className="browser-widget widget-one"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3.5,

                      repeat: Infinity,
                    }}
                  >
                    <FaRocket />

                    <div>
                      <strong>Growth Ready</strong>

                      <span>Built for business</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="browser-widget widget-two"
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,

                      repeat: Infinity,
                    }}
                  >
                    <FaBolt />

                    <div>
                      <strong>Fast Experience</strong>

                      <span>Modern performance</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="floating-card floating-one"
                animate={{
                  y: [0, -13, 0],

                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 4,

                  repeat: Infinity,
                }}
              >
                <FaMagnifyingGlass />

                <div>
                  <strong>SEO Ready</strong>

                  <small>Search-friendly foundation</small>
                </div>
              </motion.div>

              <motion.div
                className="floating-card floating-two"
                animate={{
                  y: [0, 12, 0],

                  rotate: [0, -1, 0],
                }}
                transition={{
                  duration: 5,

                  repeat: Infinity,
                }}
              >
                <FaMobileScreenButton />

                <div>
                  <strong>Responsive</strong>

                  <small>Built for every device</small>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ====================================================== */}

        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div>
                <strong>15+</strong>

                <span>Projects Worked On</span>
              </div>

              <div>
                <strong>100%</strong>

                <span>Responsive Development</span>
              </div>

              <div>
                <strong>3+</strong>

                <span>Core Digital Solutions</span>
              </div>

              <div>
                <strong>24/7</strong>

                <span>Your Digital Presence</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN MARQUEE
        ====================================================== */}

        <section className="services-marquee-section">
          <p>
            Digital solutions created for modern business growth
          </p>

          <div className="services-marquee">
            <div className="services-marquee-track">
              {[...marqueeItems, ...marqueeItems].map(
                (item, index) => (
                  <div
                    className="services-marquee-item"
                    key={`${item}-${index}`}
                  >
                    <FaWandMagicSparkles />

                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <section className="section intro-section">
          <div className="container intro-layout">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={stagger}
            >
              <motion.span
                className="eyebrow"
                variants={fadeUp}
              >
                BUILD A STRONGER DIGITAL BUSINESS
              </motion.span>

              <motion.h2 variants={fadeUp}>
                Technology Should Help Your Business Move Faster, Work Smarter
                and Connect Better.
              </motion.h2>

              <motion.p variants={fadeUp}>
                A digital presence should do more than simply display
                information. It should clearly communicate what your business
                offers and make it easy for potential customers to take the
                next step.
              </motion.p>

              <motion.p variants={fadeUp}>
                At <strong>SMYVISION TECHNOLOGIES</strong>, we create
                professional digital solutions that combine design,
                development, automation and intelligent technology.
              </motion.p>

              <motion.p variants={fadeUp}>
                Whether you need a professional website, a custom business
                platform or an intelligent automation system, we focus on
                creating practical solutions designed around your business.
              </motion.p>

              <motion.button
                variants={fadeUp}
                type="button"
                className="primary-button intro-button"
                onClick={goToContact}
              >
                Discuss Your Project

                <FaArrowRight />
              </motion.button>
            </motion.div>

            <motion.div
              className="intro-visual-card"
              initial={{
                opacity: 0,

                rotateY: 12,

                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,

                rotateY: 0,

                scale: 1,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="intro-icon">
                <FaGlobe />
              </div>

              <span>ONE DIGITAL PARTNER</span>

              <h3>
                From Your First Idea to a Complete Digital Solution.
              </h3>

              <div className="intro-points">
                {[
                  "Professional brand presentation",
                  "Responsive customer experiences",
                  "Smart business automation",
                  "Modern technology stack",
                  "SEO-ready development",
                  "AI-powered solutions",
                  "Clear customer journeys",
                  "Scalable digital systems",
                ].map((item) => (
                  <div key={item}>
                    <FaCheck />

                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            CTA STRIP
        ====================================================== */}

        <section className="quote-strip-section">
          <div className="container">
            <motion.div
              className="quote-strip"
              whileInView={{
                opacity: [0, 1],

                y: [30, 0],
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="quote-strip-icon">
                <FaLightbulb />
              </div>

              <div>
                <span>HAVE AN IDEA?</span>

                <h2>
                  Let's Explore the Right Digital Solution for Your Business.
                </h2>

                <p>
                  Share your requirements and get a free initial project
                  consultation.
                </p>
              </div>

              <button
                type="button"
                onClick={goToContact}
              >
                Get a Free Quote

                <FaArrowRight />
              </button>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section className="section services-section">
          <div className="container">
            <SectionHeader
              eyebrow="OUR DIGITAL SERVICES"
              title="Technology Solutions Built to Support Real Business Growth"
              text="We combine strategy, modern design and technology to create digital solutions that solve practical business challenges."
            />

            <div className="services-grid">
              {services.map((service, index) => (
                <motion.article
                  className="service-card"
                  key={service.title}
                  initial={{
                    opacity: 0,

                    y: 40,

                    rotateX: 5,
                  }}
                  whileInView={{
                    opacity: 1,

                    y: 0,

                    rotateX: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <div className="service-image-wrap">
                    <img
                      src={service.image}
                      alt={`${service.title} by SMYVISION TECHNOLOGIES`}
                    />

                    <div className="service-icon">
                      {service.icon}
                    </div>
                  </div>

                  <div className="service-body">
                    <span className="service-count">
                      0{index + 1}
                    </span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <div className="service-features">
                      {service.features.map((feature) => (
                        <span key={feature}>
                          <FaCircleCheck />

                          {feature}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={goToContact}
                    >
                      Explore This Service

                      <FaArrowRight />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            BENEFITS
        ====================================================== */}

        <section className="section benefits-section">
          <div className="container benefits-layout">
            <div>
              <span className="eyebrow">
                CREATED FOR BETTER RESULTS
              </span>

              <h2>
                Every Detail of Your Digital Experience Matters.
              </h2>

              <p>
                We focus on creating websites and digital solutions that are
                professional, practical and easy for customers to use.
              </p>

              <button
                type="button"
                className="primary-button"
                onClick={goToContact}
              >
                Start Your Project

                <FaArrowRight />
              </button>
            </div>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <motion.div
                  className="benefit-card"
                  key={benefit.title}
                  whileInView={{
                    opacity: [0, 1],

                    y: [25, 0],
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                >
                  <div>{benefit.icon}</div>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ====================================================== */}

        <section
          className="section projects-section"
          id="our-work"
        >
          <div className="container">
            <SectionHeader
              eyebrow="OUR SELECTED WORK"
              title="Digital Experiences Created for Real Businesses"
              text="Explore some of the websites we have designed and developed across different business industries."
            />

            <div className="project-showcase">
              <button
                className="project-arrow left"
                type="button"
                onClick={handlePreviousProject}
              >
                <FaChevronLeft />
              </button>

              <div className="project-main-card">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject}
                    className="project-main-layout"
                    initial={{
                      opacity: 0,

                      scale: 0.97,

                      x: 25,
                    }}
                    animate={{
                      opacity: 1,

                      scale: 1,

                      x: 0,
                    }}
                    exit={{
                      opacity: 0,

                      x: -25,
                    }}
                  >
                    <div className="project-image-side">
                      <div className="project-browser">
                        <div className="project-browser-top">
                          <div>
                            <span />

                            <span />

                            <span />
                          </div>

                          <p>
                            {projects[activeProject].url}
                          </p>
                        </div>

                        <img
                          src={projects[activeProject].image}
                          alt={projects[activeProject].title}
                        />
                      </div>
                    </div>

                    <div className="project-info">
                      <span>
                        {projects[activeProject].category}
                      </span>

                      <h3>
                        {projects[activeProject].title}
                      </h3>

                      <p>
                        {projects[activeProject].description}
                      </p>

                      <a
                        href={projects[activeProject].url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Live Website

                        <FaArrowUpRightFromSquare />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="project-progress">
                  <motion.div
                    key={activeProject}
                    initial={{
                      scaleX: 0,
                    }}
                    animate={{
                      scaleX: 1,
                    }}
                    transition={{
                      duration:
                        PROJECT_CHANGE_TIME / 1000,

                      ease: "linear",
                    }}
                  />
                </div>
              </div>

              <button
                className="project-arrow right"
                type="button"
                onClick={handleNextProject}
              >
                <FaChevronRight />
              </button>
            </div>

            {/* PROJECT MARQUEE ROW ONE */}

            <div className="project-marquee-area">
              <div className="project-marquee marquee-left-right">
                <div className="project-marquee-track">
                  {[
                    ...projectMarqueeRowOne,
                    ...projectMarqueeRowOne,
                    ...projectMarqueeRowOne,
                  ].map((project, index) => (
                    <ProjectMarqueeCard
                      project={project}
                      key={`${project.title}-row1-${index}`}
                    />
                  ))}
                </div>
              </div>

              {/* PROJECT MARQUEE ROW TWO */}

              <div className="project-marquee marquee-right-left">
                <div className="project-marquee-track">
                  {[
                    ...projectMarqueeRowTwo,
                    ...projectMarqueeRowTwo,
                    ...projectMarqueeRowTwo,
                  ].map((project, index) => (
                    <ProjectMarqueeCard
                      project={project}
                      key={`${project.title}-row2-${index}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY
        ====================================================== */}

        <section className="section technology-section">
          <div className="container">
            <SectionHeader
              eyebrow="OUR TECHNOLOGY STACK"
              title="Modern Technologies Behind Powerful Digital Solutions"
              text="We choose technologies according to the actual requirements of each project, focusing on performance, scalability and maintainability."
            />

            <div className="technology-grid">
              {technologies.map((technology, index) => (
                <motion.div
                  key={technology.name}
                  className="technology-card"
                  initial={{
                    opacity: 0,

                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,

                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -8,

                    scale: 1.03,
                  }}
                >
                  <div>
                    {technology.icon}
                  </div>

                  <h3>{technology.name}</h3>

                  <p>{technology.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW WE WORK PATH
        ====================================================== */}

        <section className="section process-section">
          <div className="container">
            <SectionHeader
              eyebrow="HOW WE WORK"
              title="A Clear Path From Your Business Idea to a Digital Solution"
              text="Our structured process keeps every stage organized while giving each project the flexibility it needs."
            />

            <div className="process-path">
              <div className="process-path-line" />

              {processSteps.map((step, index) => (
                <motion.div
                  className={`process-path-item ${
                    index % 2 === 0 ? "left-side" : "right-side"
                  }`}
                  key={step.number}
                  initial={{
                    opacity: 0,

                    x:
                      index % 2 === 0
                        ? -50
                        : 50,
                  }}
                  whileInView={{
                    opacity: 1,

                    x: 0,
                  }}
                  viewport={{
                    once: true,

                    amount: 0.35,
                  }}
                >
                  <div className="process-content">
                    <span>
                      STEP {step.number}
                    </span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>

                  <motion.div
                    className="process-center-icon"
                    whileInView={{
                      scale: [0.6, 1.15, 1],
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY US
        ====================================================== */}

        <section className="section why-section">
          <div className="container">
            <SectionHeader
              eyebrow="WHY SMYVISION"
              title="A Digital Partner Focused on Your Business Goals"
              text="Our goal is to combine technology and practical thinking to create solutions that genuinely support your business."
            />

            <div className="why-grid">
              {reasons.map((reason, index) => (
                <motion.div
                  className="why-card"
                  key={reason.title}
                  initial={{
                    opacity: 0,

                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,

                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                >
                  <div>
                    {reason.icon}
                  </div>

                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            INDUSTRIES
        ====================================================== */}

        <section className="industries-section">
          <div className="container industries-layout">
            <div>
              <span className="eyebrow">
                INDUSTRIES WE SUPPORT
              </span>

              <h2>
                Digital Solutions Adapted to Different Business Industries.
              </h2>

              <p>
                Different industries have different customers, workflows and
                challenges. Our approach is built around understanding those
                differences.
              </p>
            </div>

            <div className="industry-tags">
              {industries.map((industry) => (
                <motion.span
                  key={industry}
                  whileHover={{
                    scale: 1.07,

                    y: -3,
                  }}
                >
                  <FaWandMagicSparkles />

                  {industry}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            REVIEWS
        ====================================================== */}

        <section className="section reviews-section">
          <div className="container">
            <SectionHeader
              eyebrow="CLIENT EXPERIENCES"
              title="What Businesses Say About Working With Us"
              text="Every project begins with understanding the business and ends with creating a digital experience designed around its requirements."
            />

            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <motion.article
                  className="review-card"
                  key={review.name}
                  initial={{
                    opacity: 0,

                    rotateY: 8,

                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,

                    rotateY: 0,

                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <div className="review-header">
                    <div className="quote-icon">
                      <FaQuoteLeft />
                    </div>

                    <div className="stars">
                      {[1, 2, 3, 4, 5].map(
                        (star) => (
                          <FaStar key={star} />
                        )
                      )}
                    </div>
                  </div>

                  <p>
                    "{review.review}"
                  </p>

                  <div className="review-user">
                    <div>
                      {review.name.charAt(0)}
                    </div>

                    <span>
                      <strong>{review.name}</strong>

                      <small>{review.role}</small>
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            MORE CONTENT
        ====================================================== */}

        <section className="section digital-growth-section">
          <div className="container digital-growth-layout">
            <div>
              <span className="eyebrow">
                YOUR DIGITAL BUSINESS FOUNDATION
              </span>

              <h2>
                Create a Digital Presence That Continues Working for Your
                Business.
              </h2>

              <p>
                Your digital presence gives customers a place to understand who
                you are, explore your services and communicate with your
                business whenever they need you.
              </p>

              <p>
                A professional website also creates the foundation for future
                opportunities such as online marketing, customer automation,
                digital lead generation and business management systems.
              </p>

              <p>
                We focus on developing solutions that can support your business
                today while remaining flexible enough for future improvements
                and expansion.
              </p>

              <button
                type="button"
                className="primary-button"
                onClick={goToContact}
              >
                Build Your Digital Presence

                <FaArrowRight />
              </button>
            </div>

            <div className="growth-cards">
              <motion.div
                whileHover={{
                  y: -8,
                }}
              >
                <FaBuilding />

                <h3>For Growing Businesses</h3>

                <p>
                  Build a professional digital foundation that strengthens your
                  business presence.
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -8,
                }}
              >
                <FaBriefcase />

                <h3>For Established Companies</h3>

                <p>
                  Modernize existing processes and digital experiences with
                  smarter solutions.
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -8,
                }}
              >
                <FaLightbulb />

                <h3>For New Ideas</h3>

                <p>
                  Turn an idea into a functional website, platform or digital
                  business solution.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <section className="section faq-section">
          <div className="container faq-layout">
            <div className="faq-heading">
              <span className="eyebrow">
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h2>
                Questions About Working With Us?
              </h2>

              <p>
                Find answers to common questions about our website development,
                digital solutions and project process.
              </p>

              <button
                type="button"
                className="faq-whatsapp-button"
                onClick={openWhatsApp}
              >
                <FaWhatsapp />

                Ask Us on WhatsApp
              </button>
            </div>

            <div className="faq-list">
              {faqItems.map((faq, index) => {
                const isOpen =
                  activeFaq === index;

                return (
                  <motion.div
                    className={`faq-item ${
                      isOpen ? "active" : ""
                    }`}
                    key={faq.question}
                    initial={{
                      opacity: 0,

                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,

                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() =>
                        toggleFaq(index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>
                        <small>
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </small>

                        {faq.question}
                      </span>

                      <motion.div
                        animate={{
                          rotate:
                            isOpen
                              ? 180
                              : 0,
                        }}
                      >
                        <FaChevronDown />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          className="faq-answer"
                          initial={{
                            height: 0,

                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",

                            opacity: 1,
                          }}
                          exit={{
                            height: 0,

                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                        >
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

        {/* =====================================================
            FREE QUOTE
        ====================================================== */}

        <section className="big-quote-section">
          <div className="container big-quote-layout">
            <motion.div
              initial={{
                opacity: 0,

                x: -40,
              }}
              whileInView={{
                opacity: 1,

                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <span>
                READY TO START?
              </span>

              <h2>
                Let's Turn Your Next Business Idea Into Something Powerful.
              </h2>

              <p>
                Tell us what you want to build. We will understand your
                requirements and help you explore the right solution.
              </p>

              <div className="quote-checks">
                <span>
                  <FaCircleCheck />

                  Free initial discussion
                </span>

                <span>
                  <FaCircleCheck />

                  Requirement analysis
                </span>

                <span>
                  <FaCircleCheck />

                  Suitable solution recommendation
                </span>
              </div>
            </motion.div>

            <motion.div
              className="quote-action-card"
              initial={{
                opacity: 0,

                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,

                scale: 1,
              }}
              viewport={{
                once: true,
              }}
            >
              <div>
                <FaRocket />
              </div>

              <h3>
                Start Your Project Today
              </h3>

              <p>
                Share your business requirements and get started with a free
                project discussion.
              </p>

              <button
                type="button"
                className="white-button"
                onClick={goToContact}
              >
                Get a Free Quote

                <FaArrowRight />
              </button>

              <button
                type="button"
                className="whatsapp-button"
                onClick={openWhatsApp}
              >
                <FaWhatsapp />

                WhatsApp Us
              </button>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="final-cta">
          <div className="container">
            <motion.div
              className="final-cta-content"
              whileInView={{
                opacity: [0, 1],

                y: [35, 0],
              }}
              viewport={{
                once: true,
              }}
            >
              <motion.div
                className="final-icon"
                animate={{
                  y: [0, -8, 0],

                  rotate: [0, 4, 0, -4, 0],
                }}
                transition={{
                  duration: 4,

                  repeat: Infinity,
                }}
              >
                <FaRocket />
              </motion.div>

              <span>
                LET'S BUILD SOMETHING GREAT
              </span>

              <h2>
                Ready to Build the Next Stage of Your Digital Business?
              </h2>

              <p>
                Let's create a professional digital experience designed around
                your business, your customers and your future goals.
              </p>

              <div className="final-buttons">
                <button
                  type="button"
                  className="white-button"
                  onClick={goToContact}
                >
                  Get Your Free Quote

                  <FaArrowRight />
                </button>

                <button
                  type="button"
                  className="whatsapp-button"
                  onClick={openWhatsApp}
                >
                  <FaWhatsapp />

                  WhatsApp Us
                </button>

                <button
                  type="button"
                  className="call-button"
                  onClick={callNow}
                >
                  Call {PHONE_NUMBER}
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

/* =========================================================
   SECTION HEADER COMPONENT
========================================================= */

const SectionHeader = ({
  eyebrow,

  title,

  text,
}) => {
  return (
    <motion.div
      className="section-header"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      variants={stagger}
    >
      <motion.span
        variants={fadeUp}
      >
        {eyebrow}
      </motion.span>

      <motion.h2
        variants={fadeUp}
      >
        {title}
      </motion.h2>

      <motion.p
        variants={fadeUp}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

/* =========================================================
   PROJECT MARQUEE CARD
========================================================= */

const ProjectMarqueeCard = ({
  project,
}) => {
  return (
    <div className="project-marquee-card">
      <img
        src={project.image}
        alt={`${project.title} project`}
      />

      <div>
        <strong>
          {project.title}
        </strong>

        <span>
          {project.category}
        </span>
      </div>
    </div>
  );
};

/* =========================================================
   CSS
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
     HERO
  ========================================================= */

  .hero-section {
    min-height: 790px;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 120px 0 140px;
    background: linear-gradient(180deg,#fcfdff,#f2f6ff);
  }

  .hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(7,88,232,.035) 1px,transparent 1px),
      linear-gradient(90deg,rgba(7,88,232,.035) 1px,transparent 1px);
    background-size: 46px 46px;
    mask-image: linear-gradient(to bottom,black,transparent 95%);
  }

  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
  }

  .orb-one {
    width: 430px;
    height: 430px;
    left: -180px;
    top: -120px;
    background: rgba(29,110,255,.16);
  }

  .orb-two {
    width: 480px;
    height: 480px;
    right: -160px;
    bottom: -180px;
    background: rgba(109,40,217,.14);
  }

  .hero-layout {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    gap: 70px;
    align-items: center;
  }

  .hero-badge {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    margin-bottom: 25px;
    color: var(--primary);
    background: rgba(255,255,255,.9);
    border: 1px solid rgba(7,88,232,.14);
    border-radius: 999px;
    font-size: 12px;
    font-weight: 750;
  }

  .hero-content h1 {
    margin: 0 0 25px;
    color: var(--heading);
    font-size: clamp(3rem,5.3vw,5.2rem);
    line-height: 1.01;
    letter-spacing: -.06em;
  }

  .hero-content h1 span {
    color: transparent;
    background: linear-gradient(95deg,#0758e8,#7035df);
    background-clip: text;
    -webkit-background-clip: text;
  }

  .hero-description {
    max-width: 650px;
    margin: 0 0 32px;
    font-size: 18px;
    line-height: 1.75;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
  }

  .hero-features {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
  }

  .hero-features span {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 12px;
    font-weight: 650;
  }

  .hero-features svg {
    color: #13a976;
  }

  /* =========================================================
     HERO VISUAL
  ========================================================= */

  .hero-visual {
    position: relative;
    perspective: 1000px;
  }

  .browser-card {
    padding: 10px;
    background: rgba(255,255,255,.9);
    border-radius: 28px;
    box-shadow: 0 35px 100px rgba(8,31,72,.16);
  }

  .browser-top {
    height: 48px;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 15px;
  }

  .browser-dots {
    display: flex;
    gap: 6px;
  }

  .browser-dots span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #cbd5e3;
  }

  .browser-url {
    padding: 7px 15px;
    color: #8692a4;
    background: #f1f4f8;
    border-radius: 30px;
    font-size: 9px;
  }

  .browser-content {
    min-height: 430px;
    position: relative;
    overflow: hidden;
    padding: 32px;
    color: white;
    background:
      radial-gradient(circle at 85% 15%,rgba(57,125,255,.24),transparent 30%),
      linear-gradient(145deg,#06172f,#0d2854);
    border-radius: 21px;
  }

  .browser-brand {
    display: flex;
    align-items: center;
    gap: 9px;
    font-weight: 850;
  }

  .browser-main-content {
    padding-top: 65px;
  }

  .browser-main-content > span {
    color: #75a8ff;
    font-size: 9px;
    font-weight: 850;
    letter-spacing: .15em;
  }

  .browser-main-content h2 {
    margin: 14px 0;
    color: white;
    font-size: clamp(2.4rem,4vw,3.6rem);
    line-height: .95;
  }

  .browser-main-content p {
    max-width: 280px;
    color: #b3c4df;
    font-size: 12px;
  }

  .fake-button {
    width: fit-content;
    margin-top: 22px;
    padding: 11px 16px;
    background: #1768f5;
    border-radius: 9px;
    font-size: 10px;
    font-weight: 750;
  }

  .browser-widget {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 11px 13px;
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 12px;
    backdrop-filter: blur(12px);
  }

  .browser-widget div {
    display: flex;
    flex-direction: column;
  }

  .browser-widget strong {
    font-size: 9px;
  }

  .browser-widget span {
    color: #abbcd6;
    font-size: 7px;
  }

  .widget-one {
    top: 90px;
    right: 24px;
  }

  .widget-two {
    right: 30px;
    bottom: 35px;
  }

  .floating-card {
    position: absolute;
    z-index: 4;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 16px;
    background: rgba(255,255,255,.95);
    border-radius: 15px;
    box-shadow: 0 20px 50px rgba(10,31,67,.16);
  }

  .floating-card > svg {
    color: var(--primary);
  }

  .floating-card div {
    display: flex;
    flex-direction: column;
  }

  .floating-card strong {
    color: var(--heading);
    font-size: 11px;
  }

  .floating-card small {
    font-size: 8px;
  }

  .floating-one {
    left: -45px;
    bottom: 70px;
  }

  .floating-two {
    right: -35px;
    top: 65px;
  }

  /* =========================================================
     STATS
  ========================================================= */

  .stats-section {
    position: relative;
    z-index: 3;
    margin-top: -50px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    padding: 8px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 22px;
    box-shadow: 0 22px 60px rgba(8,33,73,.09);
  }

  .stats-grid div {
    padding: 25px;
    text-align: center;
  }

  .stats-grid strong {
    display: block;
    color: var(--heading);
    font-size: 27px;
  }

  .stats-grid span {
    font-size: 11px;
  }

  /* =========================================================
     SERVICES MARQUEE
  ========================================================= */

  .services-marquee-section {
    padding: 70px 0 20px;
    text-align: center;
  }

  .services-marquee-section > p {
    margin-bottom: 18px;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .15em;
    text-transform: uppercase;
  }

  .services-marquee {
    overflow: hidden;
  }

  .services-marquee-track {
    width: max-content;
    display: flex;
    gap: 15px;
    animation: serviceMarquee 30s linear infinite;
  }

  .services-marquee-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 13px 20px;
    color: #233754;
    background: #f7f9fd;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
  }

  .services-marquee-item svg {
    color: var(--primary);
  }

  @keyframes serviceMarquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
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

  .intro-points div {
    display: flex;
    gap: 8px;
    font-size: 12px;
  }

  .intro-points svg {
    color: var(--green);
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
    overflow: hidden;
    background: white;
    border: 1px solid var(--border);
    border-radius: 25px;
    box-shadow: 0 15px 50px rgba(9,35,77,.05);
    transition: .3s;
  }

  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 70px rgba(9,35,77,.12);
  }

  .service-image-wrap {
    height: 220px;
    position: relative;
  }

  .service-image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    border-radius: 16px;
    font-size: 24px;
  }

  .service-body {
    position: relative;
    padding: 30px;
  }

  .service-count {
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
    from {
      transform: translateX(-33.333%);
    }

    to {
      transform: translateX(0);
    }
  }

  @keyframes projectsRightLeft {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-33.333%);
    }
  }

  /* =========================================================
     TECHNOLOGY
  ========================================================= */

  .technology-section {
    background: white;
  }

  .technology-grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 18px;
  }

  .technology-card {
    padding: 25px;
    text-align: center;
    background: #fbfcff;
    border: 1px solid var(--border);
    border-radius: 20px;
    transition: .3s;
  }

  .technology-card > div {
    width: 55px;
    height: 55px;
    display: grid;
    place-items: center;
    margin: 0 auto 17px;
    color: var(--primary);
    background: rgba(7,88,232,.08);
    border-radius: 16px;
    font-size: 27px;
  }

  .technology-card h3 {
    margin: 0 0 7px;
    color: var(--heading);
    font-size: 15px;
  }

  .technology-card p {
    margin: 0;
    font-size: 11px;
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

  .industry-tags span {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 16px;
    background: rgba(255,255,255,.07);
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 999px;
    font-size: 11px;
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
    gap: 3px;
    color: #f3aa16;
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
    display: grid;
    grid-template-columns: .7fr 1.3fr;
    gap: 70px;
    align-items: start;
  }

  .faq-heading {
    position: sticky;
    top: 110px;
  }

  .faq-heading p {
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

  .faq-list {
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

    .hero-visual {
      max-width: 680px;
      margin: auto;
    }

    .services-grid {
      grid-template-columns: repeat(2,1fr);
    }

    .technology-grid {
      grid-template-columns: repeat(3,1fr);
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

    .hero-section {
      min-height: auto;
      padding: 90px 0 110px;
    }

    .hero-content {
      text-align: center;
    }

    .hero-badge {
      margin-left: auto;
      margin-right: auto;
    }

    .hero-content h1 {
      font-size: clamp(2.7rem,13vw,4.2rem);
    }

    .hero-description {
      font-size: 15px;
    }

    .hero-actions,
    .hero-features {
      justify-content: center;
    }

    .hero-actions button {
      width: 100%;
    }

    .floating-card {
      display: none;
    }

    .stats-grid {
      grid-template-columns: repeat(2,1fr);
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

    .technology-grid {
      grid-template-columns: repeat(2,1fr);
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
    .hero-content h1 {
      font-size: 2.65rem;
    }

    .browser-content {
      min-height: 350px;
      padding: 23px;
    }

    .browser-widget {
      display: none;
    }

    .stats-grid div {
      padding: 20px 8px;
    }

    .intro-points {
      grid-template-columns: 1fr;
    }

    .technology-grid {
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .technology-card {
      padding: 20px 10px;
    }

    .technology-card p {
      display: none;
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
`;

export default Home;