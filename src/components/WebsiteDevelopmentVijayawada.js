import React, { useState } from "react";

import { Helmet } from "react-helmet-async";

import { motion, AnimatePresence } from "framer-motion";

import { useNavigate } from "react-router-dom";



import {

  FaArrowRight,

  FaArrowUpRightFromSquare,

  FaBolt,

  FaBriefcase,

  FaBullseye,

  FaCheck,

  FaChevronDown,

  FaCircleCheck,

  FaCode,

  FaGlobe,

  FaLaptopCode,

  FaMobileScreenButton,

  FaRocket,

  FaShieldHalved,

  FaStore,

  FaWhatsapp,

  FaPhone,

  FaMagnifyingGlass,

  FaPalette,

  FaCartShopping,

  FaSitemap,

  FaComments,

} from "react-icons/fa6";


/* =========================================================
   CONFIGURATION
========================================================= */

const WEBSITE_URL = "https://smyvisiontechnologies.com";
const PAGE_URL = `${WEBSITE_URL}/website-development-vijayawada`;

const PHONE_NUMBER = "8500352005";
const PHONE_LINK = "+918500352005";
const EMAIL = "smyvisiontechnologies@gmail.com";



/* =========================================================

   ANIMATIONS

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

      staggerChildren: 0.09,

    },

  },

};



/* =========================================================

   SERVICES

========================================================= */



const services = [
  {
    icon: <FaBriefcase />,
    image: "/images/web.webp",
    fallback: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
    title: "Business Website Development",
    description:
      "Professional business websites designed to clearly present your services, build customer trust and make enquiries easier.",
    features: ["Business Websites", "Responsive Design", "SEO-Ready Structure"],
  },
  {
    icon: <FaLaptopCode />,
    image: "/images/web.webp",
    fallback: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    title: "Corporate Website Development",
    description:
      "Modern corporate websites with professional layouts, structured information and responsive experiences across devices.",
    features: ["Corporate Websites", "Service Pages", "Professional UI"],
  },
  {
    icon: <FaCode />,
    image: "/images/cust.webp",
    fallback: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
    title: "Custom Website Development",
    description:
      "Purpose-built websites developed around your specific business requirements instead of forcing your business into a standard template.",
    features: ["Custom Portals", "Web Applications", "Business Workflows"],
  },
  {
    icon: <FaCartShopping />,
    image: "/images/ecomm.webp",
    fallback: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    title: "E-commerce Website Development",
    description:
      "Responsive online stores with product catalogues, customer-friendly shopping experiences, order workflows and payment integration.",
    features: ["Product Catalogues", "Order Workflows", "Payment Integration"],
  },
  {
    icon: <FaPalette />,
    image: "/images/web.webp",
    fallback: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&q=85",
    title: "Website Redesign",
    description:
      "Modern redesign solutions for businesses that already have a website but need a stronger visual identity, mobile experience or content structure.",
    features: ["Modern UI", "Mobile Upgrade", "Content Restructure"],
  },
  {
    icon: <FaGlobe />,
    image: "/images/cust.webp",
    fallback: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=85",
    title: "Landing Page Development",
    description:
      "Focused landing pages created around a particular service, campaign or customer action with clear messaging and conversion paths.",
    features: ["Campaign Pages", "Lead Generation", "Conversion Focused"],
  },
];


/* =========================================================

   BENEFITS

========================================================= */



const benefits = [

  {

    icon: <FaMobileScreenButton />,

    title: "Mobile Responsive",

    description:

      "Your website is designed to provide a professional experience across smartphones, tablets, laptops and desktop devices.",

  },



  {

    icon: <FaBolt />,

    title: "Performance Focused",

    description:

      "We use modern development practices to create smooth and efficient website experiences.",

  },



  {

    icon: <FaMagnifyingGlass />,

    title: "SEO-Ready Structure",

    description:

      "Clean page structures, heading hierarchy, metadata support and technical foundations help search engines understand your website.",

  },



  {

    icon: <FaBullseye />,

    title: "Enquiry Focused",

    description:

      "Strategic calls-to-action, contact options and clear content journeys make it easier for visitors to take the next step.",

  },



  {

    icon: <FaShieldHalved />,

    title: "Professional Experience",

    description:

      "Every section is designed to strengthen your business presentation and make your website easier for customers to use.",

  },



  {

    icon: <FaRocket />,

    title: "Built for Growth",

    description:

      "Your website can be planned around your current requirements while leaving room for future digital growth.",

  },

];



/* =========================================================

   PROJECTS

========================================================= */



const projects = [

  {

    title: "NKR Car Rentals",

    category: "Car Rental Website",

    image: "/images/nkr.webp",

    url: "https://www.nkrselfdrivecarrentals.in/",

  },



  {

    title: "Bindiya Beauty Salon",

    category: "Beauty & Salon Website",

    image: "/images/beauty.webp",

    url: "https://www.bindiyazbeautysalon.in/",

  },



  {

    title: "Happy Organize",

    category: "Home Services Website",

    image: "/images/home.webp",

    url: "https://www.happyorganize.com/",

  },



  {

    title: "Arvis Fertilizers",

    category: "Agriculture Business Website",

    image: "/images/arvis.webp",

    url: "https://www.arvisfertilizers.com/",

  },



  {

    title: "JK Decors & Events",

    category: "Events & Decoration Website",

    image: "/images/jkdecors.webp",

    url: "https://www.jkdecors.com/",

  },



  {

    title: "AK Paul Electronics",

    category: "Home Appliance Repair Website",

    image: "/images/ak-paul-electronics.webp",

    url: "https://www.customerserviceonline.co.in/",

  },

];



/* =========================================================

   PROCESS

========================================================= */



const processSteps = [

  {

    number: "01",

    icon: <FaComments />,

    title: "Understand",

    description:

      "We understand your business, customers, services and website requirements.",

  },



  {

    number: "02",

    icon: <FaSitemap />,

    title: "Plan",

    description:

      "We organize the pages, content structure, user journey and important functionality.",

  },



  {

    number: "03",

    icon: <FaPalette />,

    title: "Design",

    description:

      "We create a professional visual direction aligned with your business and customers.",

  },



  {

    number: "04",

    icon: <FaCode />,

    title: "Develop",

    description:

      "The approved direction is transformed into a responsive and functional website.",

  },



  {

    number: "05",

    icon: <FaShieldHalved />,

    title: "Test",

    description:

      "We review responsiveness, usability and important functionality before launch.",

  },



  {

    number: "06",

    icon: <FaRocket />,

    title: "Launch",

    description:

      "The completed website is prepared and launched for your customers.",

  },

];



/* =========================================================

   FAQ

========================================================= */



const faqItems = [

  {

    question:

      "Do you provide website development services in Vijayawada?",

    answer:

      "Yes. SMYVISION TECHNOLOGIES provides professional website development services for businesses in Vijayawada, including business websites, corporate websites, custom websites, e-commerce solutions and landing pages.",

  },



  {

    question:

      "Can you build a website for a local business in Vijayawada?",

    answer:

      "Yes. We develop responsive websites for local businesses that need a professional online presence, clear service presentation and easy customer enquiry options.",

  },



  {

    question:

      "What types of websites do you develop?",

    answer:

      "We develop business websites, corporate websites, service websites, portfolio websites, e-commerce websites, landing pages and custom web solutions according to project requirements.",

  },



  {

    question:

      "Will my website work properly on mobile phones?",

    answer:

      "Yes. Our websites are developed with responsive layouts so they can provide a professional experience across smartphones, tablets, laptops and desktop devices.",

  },



  {

    question:

      "Will my website be SEO-friendly?",

    answer:

      "We build websites with SEO-ready technical foundations such as semantic structure, heading hierarchy, metadata support, responsive development and performance-focused practices. Search rankings themselves depend on many additional factors.",

  },



  {

    question:

      "Can you redesign my existing website?",

    answer:

      "Yes. We can redesign an existing website to improve its visual presentation, responsiveness, content structure and overall user experience.",

  },



  {

    question:

      "Do you develop e-commerce websites in Vijayawada?",

    answer:

      "Yes. We develop e-commerce websites with product catalogues, responsive storefronts, order workflows and payment integration based on the requirements of the project.",

  },



  {

    question:

      "Can you integrate WhatsApp into my website?",

    answer:

      "Yes. WhatsApp enquiry buttons can be integrated into your website so customers can contact your business quickly.",

  },



  {

    question:

      "How long does it take to develop a website?",

    answer:

      "Development time depends on the number of pages, required functionality, content and complexity of the project. We discuss the expected timeline after understanding your requirements.",

  },



  {

    question:

      "How do I start a website project with SMYVISION TECHNOLOGIES?",

    answer:

      "Contact us through WhatsApp, phone or our website and share your requirements. We will understand your business goals and discuss a suitable website solution.",

  },

];



/* =========================================================

   STRUCTURED DATA

========================================================= */



const structuredData = {

  "@context": "https://schema.org",



  "@graph": [

    {

      "@type": "Service",



      "@id": `${PAGE_URL}/#service`,



      name: "Website Development in Vijayawada",



      serviceType: "Website Development",



      url: PAGE_URL,



      description:

        "Professional website development services in Vijayawada including business websites, corporate websites, custom websites, e-commerce websites, website redesign and landing page development.",



      provider: {

        "@type": "Organization",

        "@id": `${WEBSITE_URL}/#organization`,

        name: "SMYVISION TECHNOLOGIES",

        url: WEBSITE_URL,

        telephone: PHONE_LINK,

        email: EMAIL,

      },



      areaServed: {

        "@type": "City",

        name: "Vijayawada",



        containedInPlace: {

          "@type": "State",

          name: "Andhra Pradesh",

        },

      },

    },



    {

      "@type": "WebPage",



      "@id": `${PAGE_URL}/#webpage`,



      url: PAGE_URL,



      name:

        "Website Development in Vijayawada | SMYVISION TECHNOLOGIES",



      headline:

        "Professional Website Development Services in Vijayawada",



      description:

        "Professional business website development, custom website development, e-commerce and website redesign services in Vijayawada by SMYVISION TECHNOLOGIES.",



      about: {

        "@id": `${PAGE_URL}/#service`,

      },



      inLanguage: "en-IN",

    },



    {

      "@type": "BreadcrumbList",



      "@id": `${PAGE_URL}/#breadcrumb`,



      itemListElement: [

        {

          "@type": "ListItem",

          position: 1,

          name: "Home",

          item: `${WEBSITE_URL}/`,

        },



        {

          "@type": "ListItem",

          position: 2,

          name: "Website Development in Vijayawada",

          item: PAGE_URL,

        },

      ],

    },

  ],

};



/* =========================================================

   COMPONENT

========================================================= */



const WebsiteDevelopmentVijayawada = () => {

  const navigate = useNavigate();



  const [activeFaq, setActiveFaq] =

    useState(null);



  const openWhatsApp = () => {

    const message = encodeURIComponent(

      "Hi SMYVISION TECHNOLOGIES, I am looking for website development services in Vijayawada. I would like to discuss my requirements."

    );



    window.open(

      `https://wa.me/91${PHONE_NUMBER}?text=${message}`,

      "_blank",

      "noopener,noreferrer"

    );

  };



  const callNow = () => {

    window.location.href =

      `tel:${PHONE_LINK}`;

  };



  const goToContact = () => {

    navigate("/contact");



    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };



  const goToPortfolio = () => {

    navigate("/portfolio");



    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };



  const toggleFaq = (index) => {

    setActiveFaq(

      activeFaq === index

        ? null

        : index

    );

  };



  return (

    <>

      {/* =====================================================

          SEO

      ====================================================== */}



      <Helmet>

        <html lang="en-IN" />



        <title>

          Website Development in Vijayawada | SMYVISION TECHNOLOGIES

        </title>



        <meta

          name="description"

          content="Professional website development in Vijayawada by SMYVISION TECHNOLOGIES. Business websites, custom websites, e-commerce development, website redesign and responsive web development."

        />



        <meta

          name="robots"

          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

        />



        <link

          rel="canonical"

          href={PAGE_URL}

        />



        <meta

          property="og:type"

          content="website"

        />



        <meta

          property="og:title"

          content="Website Development in Vijayawada | SMYVISION TECHNOLOGIES"

        />



        <meta

          property="og:description"

          content="Professional business website development, custom websites and e-commerce solutions for businesses in Vijayawada."

        />



        <meta

          property="og:url"

          content={PAGE_URL}

        />



        <meta

          property="og:image"

          content={`${WEBSITE_URL}/Logo.png`}

        />



        <meta

          name="twitter:card"

          content="summary_large_image"

        />



        <meta

          name="twitter:title"

          content="Website Development in Vijayawada | SMYVISION TECHNOLOGIES"

        />



        <meta

          name="twitter:description"

          content="Professional website development services for businesses in Vijayawada."

        />



        <meta

          name="twitter:image"

          content={`${WEBSITE_URL}/Logo.png`}

        />



        <script type="application/ld+json">

          {JSON.stringify(

            structuredData

          )}

        </script>

      </Helmet>



      <style>

        {styles}

      </style>



      <main className="vja-page">



        {/* =====================================================

            HERO

        ====================================================== */}



        <section className="vja-hero">

          <div className="vja-hero-shape shape-one" />

          <div className="vja-hero-shape shape-two" />



          <div className="vja-container vja-hero-grid">



            <motion.div

              initial="hidden"

              animate="visible"

              variants={stagger}

              className="vja-hero-content"

            >

              <motion.div

                variants={fadeUp}

                className="vja-kicker"

              >

                <span />

                WEBSITE DEVELOPMENT IN VIJAYAWADA

              </motion.div>



              <motion.h1

                variants={fadeUp}

              >

                Professional Website

                <span>

                  Development Services

                </span>

                <strong>

                  in Vijayawada.

                </strong>

              </motion.h1>



              <motion.p

                variants={fadeUp}

                className="vja-hero-copy"

              >

                SMYVISION TECHNOLOGIES

                builds professional,

                responsive and SEO-ready

                websites for businesses in

                Vijayawada — from business

                websites and e-commerce

                stores to custom digital

                solutions.

              </motion.p>



              <motion.div

                variants={fadeUp}

                className="vja-hero-checks"

              >

                <span>

                  <FaCircleCheck />

                  Responsive Development

                </span>



                <span>

                  <FaCircleCheck />

                  SEO-Ready Structure

                </span>



                <span>

                  <FaCircleCheck />

                  Business Focused

                </span>

              </motion.div>



              <motion.div

                variants={fadeUp}

                className="vja-actions"

              >

                <button

                  className="vja-primary"

                  onClick={goToContact}

                >

                  Get Free Consultation

                  <FaArrowRight />

                </button>



                <button

                  className="vja-secondary"

                  onClick={openWhatsApp}

                >

                  <FaWhatsapp />

                  WhatsApp Us

                </button>

              </motion.div>



              <motion.button

                variants={fadeUp}

                className="vja-phone"

                onClick={callNow}

              >

                <FaPhone />

                Call +91 85003 52005

              </motion.button>

            </motion.div>



            <motion.div

              className="vja-hero-visual"

              initial={{

                opacity: 0,

                x: 50,

                scale: 0.95,

              }}

              animate={{

                opacity: 1,

                x: 0,

                scale: 1,

              }}

              transition={{

                duration: 0.9,

                ease: [

                  0.22,

                  1,

                  0.36,

                  1,

                ],

              }}

            >

              <div className="vja-main-image">

                <motion.img

                  src="/images/vijaywada.webp"

                  alt="Website development services in Vijayawada by SMYVISION TECHNOLOGIES"

                  animate={{

                    scale: [

                      1,

                      1.025,

                      1,

                    ],

                  }}

                  transition={{

                    duration: 9,

                    repeat: Infinity,

                    ease: "easeInOut",

                  }}

                />



                <div className="vja-image-overlay" />

              </div>



              <motion.div

                className="vja-floating-card"

                animate={{

                  y: [

                    0,

                    -8,

                    0,

                  ],

                }}

                transition={{

                  duration: 4,

                  repeat: Infinity,

                  ease: "easeInOut",

                }}

              >

                <div className="floating-icon">

                  <FaGlobe />

                </div>



                <div>

                  <span>

                    PROFESSIONAL WEBSITES

                  </span>



                  <strong>

                    Built Around Your Business

                  </strong>

                </div>

              </motion.div>



              <motion.div

                className="vja-small-card"

                animate={{

                  x: [

                    0,

                    7,

                    0,

                  ],

                }}

                transition={{

                  duration: 5,

                  repeat: Infinity,

                  ease: "easeInOut",

                }}

              >

                <FaCircleCheck />



                <span>

                  Mobile Responsive

                </span>

              </motion.div>

            </motion.div>



          </div>

        </section>



        {/* =====================================================

            INTRO

        ====================================================== */}



        <section className="vja-section">

          <div className="vja-container vja-intro">



            <motion.div

              initial="hidden"

              whileInView="visible"

              viewport={{

                once: true,

              }}

              variants={stagger}

            >

              <motion.span

                variants={fadeUp}

                className="vja-eyebrow"

              >

                PROFESSIONAL WEBSITE DEVELOPMENT

              </motion.span>



              <motion.h2

                variants={fadeUp}

              >

                Website Development for

                Businesses in Vijayawada

              </motion.h2>



              <motion.p

                variants={fadeUp}

              >

                A website is often one of

                the first places customers

                visit before contacting a

                business. It should clearly

                explain what you do, build

                confidence and make the

                next step simple.

              </motion.p>



              <motion.p

                variants={fadeUp}

              >

                SMYVISION TECHNOLOGIES

                develops professional

                websites for startups,

                local businesses and

                growing companies in

                Vijayawada. Every website

                is planned around the

                business, its customers

                and its actual

                requirements.

              </motion.p>



              <motion.p

                variants={fadeUp}

              >

                Our approach combines

                modern design, responsive

                development, clear content

                structure and practical

                functionality to create a

                professional digital

                presence for your

                business.

              </motion.p>

            </motion.div>



            <motion.div

              className="vja-intro-card"

              initial={{

                opacity: 0,

                y: 35,

              }}

              whileInView={{

                opacity: 1,

                y: 0,

              }}

              viewport={{

                once: true,

              }}

            >

              <FaStore />



              <span>

                BUILT FOR BUSINESSES

              </span>



              <h3>

                Your Website Should Help

                Customers Understand Your

                Business.

              </h3>



              {[

                "Professional presentation",

                "Clear service information",

                "Easy customer enquiries",

                "Mobile-friendly experience",

                "SEO-ready foundations",

                "Scalable development",

              ].map((item) => (

                <div

                  className="vja-intro-point"

                  key={item}

                >

                  <FaCheck />

                  {item}

                </div>

              ))}

            </motion.div>



          </div>

        </section>



        {/* =====================================================

            SERVICES

        ====================================================== */}



        <section className="vja-section vja-light">

          <div className="vja-container">



            <SectionHeading

              eyebrow="WEBSITE SOLUTIONS"

              title="Website Development Services in Vijayawada"

              text="Choose the right website solution based on your business, customers and digital requirements."

            />



            <div className="vja-service-grid">

              {services.map(

                (service, index) => (

                  <motion.article

                    key={service.title}

                    className="vja-service-card"

                    initial={{

                      opacity: 0,

                      y: 35,

                    }}

                    whileInView={{

                      opacity: 1,

                      y: 0,

                    }}

                    viewport={{

                      once: true,

                    }}

                    transition={{

                      delay:

                        index * 0.07,

                    }}

                    whileHover={{

                      y: -8,

                    }}

                  >

                    <div className="vja-service-image-wrap">
                      <img
                        src={service.image}
                        alt={`${service.title} by SMYVISION TECHNOLOGIES`}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = service.fallback;
                        }}
                      />
                      <div className="vja-service-image-overlay" />
                      <div className="vja-service-icon">
                        {service.icon}
                      </div>
                    </div>

                    <div className="vja-service-content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>

                      <div className="vja-service-features">
                        {service.features.map((feature) => (
                          <span key={feature}>
                            <FaCheck />
                            {feature}
                          </span>
                        ))}
                      </div>

                      <button onClick={goToContact}>
                        Discuss This Service <FaArrowRight />
                      </button>
                    </div>

                  </motion.article>

                )

              )}

            </div>



          </div>

        </section>



        {/* =====================================================

            WHY WEBSITE

        ====================================================== */}



        <section className="vja-section">

          <div className="vja-container">



            <SectionHeading

              eyebrow="BUILT FOR MODERN CUSTOMERS"

              title="What Your Business Website Should Deliver"

              text="Good website development is not only about appearance. The complete experience should make your business easier to understand and contact."

            />



            <div className="vja-benefit-grid">

              {benefits.map(

                (benefit, index) => (

                  <motion.div

                    className="vja-benefit"

                    key={

                      benefit.title

                    }

                    initial={{

                      opacity: 0,

                      scale: 0.95,

                    }}

                    whileInView={{

                      opacity: 1,

                      scale: 1,

                    }}

                    viewport={{

                      once: true,

                    }}

                    transition={{

                      delay:

                        index * 0.06,

                    }}

                  >

                    <div>

                      {

                        benefit.icon

                      }

                    </div>



                    <h3>

                      {

                        benefit.title

                      }

                    </h3>



                    <p>

                      {

                        benefit.description

                      }

                    </p>

                  </motion.div>

                )

              )}

            </div>



          </div>

        </section>



        {/* =====================================================

            PROJECTS

        ====================================================== */}



        <section className="vja-section vja-light">

          <div className="vja-container">



            <SectionHeading

              eyebrow="REAL PROJECTS"

              title="Websites We’ve Developed for Businesses"

              text="Explore examples of websites developed by SMYVISION TECHNOLOGIES across different business industries."

            />



            <div className="vja-project-grid">

              {projects.map(

                (project, index) => (

                  <motion.article

                    className="vja-project"

                    key={

                      project.title

                    }

                    initial={{

                      opacity: 0,

                      y: 35,

                    }}

                    whileInView={{

                      opacity: 1,

                      y: 0,

                    }}

                    viewport={{

                      once: true,

                    }}

                    transition={{

                      delay:

                        index * 0.07,

                    }}

                  >

                    <div className="vja-project-image">

                      <img

                        src={

                          project.image

                        }

                        alt={`${project.title} website developed by SMYVISION TECHNOLOGIES`}

                      />

                    </div>



                    <div className="vja-project-body">

                      <span>

                        {

                          project.category

                        }

                      </span>



                      <h3>

                        {

                          project.title

                        }

                      </h3>



                      <a

                        href={

                          project.url

                        }

                        target="_blank"

                        rel="noopener noreferrer"

                      >

                        Visit Website

                        <FaArrowUpRightFromSquare />

                      </a>

                    </div>

                  </motion.article>

                )

              )}

            </div>



            <div className="vja-center-action">

              <button

                className="vja-secondary dark"

                onClick={

                  goToPortfolio

                }

              >

                View Complete Portfolio

                <FaArrowRight />

              </button>

            </div>



          </div>

        </section>



        {/* =====================================================

            PROCESS

        ====================================================== */}



        <section className="vja-section">

          <div className="vja-container">



            <SectionHeading

              eyebrow="OUR PROCESS"

              title="From Your Business Idea to a Live Website"

              text="A clear development process keeps the project organized and makes each stage easier to understand."

            />



            <div className="vja-process-grid">

              {processSteps.map(

                (step, index) => (

                  <motion.div

                    className="vja-process"

                    key={

                      step.number

                    }

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

                      delay:

                        index * 0.07,

                    }}

                  >

                    <span className="vja-step-number">

                      {

                        step.number

                      }

                    </span>



                    <div className="vja-process-icon">

                      {step.icon}

                    </div>



                    <h3>

                      {step.title}

                    </h3>



                    <p>

                      {

                        step.description

                      }

                    </p>

                  </motion.div>

                )

              )}

            </div>



          </div>

        </section>



        {/* =====================================================

            WHY SMYVISION

        ====================================================== */}



        <section className="vja-section vja-blue-section">

          <div className="vja-container vja-why-grid">



            <div>

              <span className="vja-blue-eyebrow">

                WHY SMYVISION TECHNOLOGIES

              </span>



              <h2>

                A Website Development

                Partner Focused on Your

                Business

              </h2>



              <p>

                We don't approach every

                business with exactly the

                same website. We first

                understand your services,

                customers and goals before

                deciding how the website

                should be structured.

              </p>



              <button

                onClick={

                  goToContact

                }

              >

                Start Your Project

                <FaArrowRight />

              </button>

            </div>



            <div className="vja-why-points">



              {[

                "Business-first approach",

                "Professional modern design",

                "Responsive development",

                "SEO-ready technical foundations",

                "Clear customer journeys",

                "WhatsApp and enquiry integration",

                "Custom functionality when required",

                "Post-launch guidance based on project scope",

              ].map(

                (item, index) => (

                  <motion.div

                    key={item}

                    initial={{

                      opacity: 0,

                      x: 30,

                    }}

                    whileInView={{

                      opacity: 1,

                      x: 0,

                    }}

                    viewport={{

                      once: true,

                    }}

                    transition={{

                      delay:

                        index * 0.06,

                    }}

                  >

                    <FaCircleCheck />

                    {item}

                  </motion.div>

                )

              )}



            </div>



          </div>

        </section>



        {/* =====================================================

            LOCAL SECTION

        ====================================================== */}



        <section className="vja-section">

          <div className="vja-container vja-local">



            <div>

              <span className="vja-eyebrow">

                WEBSITE DEVELOPMENT VIJAYAWADA

              </span>



              <h2>

                Helping Vijayawada

                Businesses Build a

                Professional Digital

                Presence

              </h2>



              <p>

                Whether you are starting

                a new business, improving

                an existing digital

                presence or replacing an

                outdated website, we can

                help you plan a solution

                around your actual

                requirements.

              </p>



              <p>

                We work with businesses

                across different

                industries and develop

                websites that make

                services, products and

                contact options easier

                for customers to

                understand.

              </p>



              <div className="vja-local-links">

                <button

                  onClick={() =>

                    navigate(

                      "/services"

                    )

                  }

                >

                  Explore All Services

                  <FaArrowRight />

                </button>



                <button

                  onClick={() =>

                    navigate(

                      "/portfolio"

                    )

                  }

                >

                  Explore Our Work

                  <FaArrowRight />

                </button>

              </div>

            </div>



            <div className="vja-local-box">

              <span>

                NEED A WEBSITE?

              </span>



              <h3>

                Tell Us About Your

                Business.

              </h3>



              <p>

                Share your requirements

                and we'll discuss a

                suitable website solution

                for your business.

              </p>



              <button

                onClick={

                  openWhatsApp

                }

              >

                <FaWhatsapp />

                Start on WhatsApp

              </button>



              <button

                className="call-button"

                onClick={

                  callNow

                }

              >

                <FaPhone />

                +91 85003 52005

              </button>

            </div>



          </div>

        </section>



        {/* =====================================================

            FAQ

        ====================================================== */}



        <section className="vja-section vja-light">

          <div className="vja-container vja-faq-container">



            <SectionHeading

              eyebrow="COMMON QUESTIONS"

              title="Website Development Questions"

              text="Helpful answers for businesses considering a new website or website redesign."

            />



            <div className="vja-faq-list">



              {faqItems.map(

                (item, index) => (

                  <div

                    className={`vja-faq ${

                      activeFaq ===

                      index

                        ? "active"

                        : ""

                    }`}

                    key={

                      item.question

                    }

                  >

                    <button

                      onClick={() =>

                        toggleFaq(

                          index

                        )

                      }

                    >

                      <span>

                        {

                          item.question

                        }

                      </span>



                      <motion.span

                        animate={{

                          rotate:

                            activeFaq ===

                            index

                              ? 180

                              : 0,

                        }}

                      >

                        <FaChevronDown />

                      </motion.span>

                    </button>



                    <AnimatePresence>

                      {activeFaq ===

                        index && (

                        <motion.div

                          initial={{

                            height: 0,

                            opacity: 0,

                          }}

                          animate={{

                            height:

                              "auto",

                            opacity: 1,

                          }}

                          exit={{

                            height: 0,

                            opacity: 0,

                          }}

                          className="vja-faq-answer"

                        >

                          <p>

                            {

                              item.answer

                            }

                          </p>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </div>

                )

              )}



            </div>

          </div>

        </section>



        {/* =====================================================

            FINAL CTA

        ====================================================== */}



        <section className="vja-final">

          <div className="vja-container">



            <motion.div

              className="vja-final-box"

              initial={{

                opacity: 0,

                y: 40,

              }}

              whileInView={{

                opacity: 1,

                y: 0,

              }}

              viewport={{

                once: true,

              }}

            >

              <span>

                LET'S BUILD YOUR WEBSITE

              </span>



              <h2>

                Looking for Website

                Development in Vijayawada?

              </h2>



              <p>

                Tell us about your

                business and the website

                you need. We'll help you

                understand the right

                solution for your

                requirements.

              </p>



              <div className="vja-final-actions">



                <button

                  onClick={

                    goToContact

                  }

                >

                  Get Free Consultation

                  <FaArrowRight />

                </button>



                <button

                  className="whatsapp"

                  onClick={

                    openWhatsApp

                  }

                >

                  <FaWhatsapp />

                  WhatsApp Us

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

   SECTION HEADING

========================================================= */



const SectionHeading = ({

  eyebrow,

  title,

  text,

}) => (

  <motion.div

    className="vja-section-heading"

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

  >

    <span>

      {eyebrow}

    </span>



    <h2>

      {title}

    </h2>



    <p>

      {text}

    </p>

  </motion.div>

);



/* =========================================================

   CSS

========================================================= */



const styles = `

  .vja-page {

    --blue: #0758e8;

    --dark-blue: #062354;

    --text: #10213d;

    --muted: #65758b;

    --light: #f5f8ff;

    --border: #dfe7f3;



    background: #ffffff;

    color: var(--text);

    overflow: hidden;

  }



  .vja-page * {

    box-sizing: border-box;

  }



  .vja-container {

    width: min(1180px, calc(100% - 40px));

    margin: 0 auto;

  }



  .vja-section {

    padding: 100px 0;

  }



  .vja-light {

    background: var(--light);

  }



  /* HERO */



  .vja-hero {

    position: relative;

    min-height: 720px;

    display: flex;

    align-items: center;

    padding: 110px 0 90px;

    background:

      radial-gradient(circle at 10% 20%, rgba(7,88,232,.08), transparent 27%),

      radial-gradient(circle at 90% 80%, rgba(7,88,232,.06), transparent 25%),

      #ffffff;

  }



  .vja-hero-shape {

    position: absolute;

    border-radius: 50%;

    pointer-events: none;

  }



  .vja-hero-shape.shape-one {

    width: 340px;

    height: 340px;

    background: rgba(7,88,232,.035);

    top: -100px;

    right: -90px;

  }



  .vja-hero-shape.shape-two {

    width: 250px;

    height: 250px;

    border: 1px solid rgba(7,88,232,.08);

    bottom: -100px;

    left: -80px;

  }



  .vja-hero-grid {

    display: grid;

    grid-template-columns: 1.05fr .95fr;

    gap: 70px;

    align-items: center;

    position: relative;

    z-index: 2;

  }



  .vja-kicker,

  .vja-eyebrow {

    display: flex;

    align-items: center;

    gap: 10px;

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 1.6px;

    color: var(--blue);

  }



  .vja-kicker span {

    width: 34px;

    height: 2px;

    background: var(--blue);

  }



  .vja-hero h1 {

    font-size: clamp(46px, 5.5vw, 76px);

    line-height: .99;

    letter-spacing: -3px;

    margin: 23px 0 25px;

    color: var(--dark-blue);

  }



  .vja-hero h1 span,

  .vja-hero h1 strong {

    display: block;

  }



  .vja-hero h1 span {

    color: var(--text);

  }



  .vja-hero h1 strong {

    color: var(--blue);

    font-weight: 800;

  }



  .vja-hero-copy {

    max-width: 650px;

    color: var(--muted);

    font-size: 18px;

    line-height: 1.8;

    margin: 0;

  }



  .vja-hero-checks {

    display: flex;

    flex-wrap: wrap;

    gap: 14px 22px;

    margin-top: 27px;

  }



  .vja-hero-checks span {

    display: flex;

    align-items: center;

    gap: 8px;

    font-size: 13px;

    font-weight: 700;

  }



  .vja-hero-checks svg {

    color: var(--blue);

  }



  .vja-actions {

    display: flex;

    flex-wrap: wrap;

    gap: 13px;

    margin-top: 32px;

  }



  .vja-primary,

  .vja-secondary {

    border: 0;

    min-height: 52px;

    padding: 0 22px;

    border-radius: 8px;

    font-weight: 800;

    cursor: pointer;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    transition: .25s ease;

  }



  .vja-primary {

    background: var(--blue);

    color: #ffffff;

  }



  .vja-primary:hover {

    transform: translateY(-3px);

    box-shadow: 0 12px 30px rgba(7,88,232,.2);

  }



  .vja-secondary {

    background: #ffffff;

    color: var(--dark-blue);

    border: 1px solid var(--border);

  }



  .vja-secondary:hover {

    transform: translateY(-3px);

    border-color: var(--blue);

  }



  .vja-secondary svg {

    color: #17a44b;

  }



  .vja-phone {

    margin-top: 19px;

    border: 0;

    background: transparent;

    color: var(--dark-blue);

    padding: 0;

    font-weight: 800;

    cursor: pointer;

    display: flex;

    align-items: center;

    gap: 9px;

  }



  .vja-phone svg {

    color: var(--blue);

  }



  .vja-hero-visual {

    position: relative;

    padding: 18px 18px 45px;

  }



  .vja-main-image {

    height: 520px;

    border-radius: 22px;

    overflow: hidden;

    position: relative;

    box-shadow: 0 30px 70px rgba(13,43,87,.15);

  }



  .vja-main-image img {

    width: 100%;

    height: 100%;

    object-fit: cover;

  }



  .vja-image-overlay {

    position: absolute;

    inset: 0;

    background: linear-gradient(to top, rgba(4,30,70,.28), transparent 50%);

  }



  .vja-floating-card,

  .vja-small-card {

    position: absolute;

    background: rgba(255,255,255,.97);

    box-shadow: 0 20px 50px rgba(12,37,75,.15);

    border: 1px solid rgba(222,231,244,.9);

  }



  .vja-floating-card {

    left: -25px;

    bottom: 0;

    border-radius: 14px;

    padding: 16px 20px;

    display: flex;

    align-items: center;

    gap: 13px;

  }



  .floating-icon {

    width: 44px;

    height: 44px;

    border-radius: 10px;

    background: #eaf1ff;

    color: var(--blue);

    display: grid;

    place-items: center;

    font-size: 20px;

  }



  .vja-floating-card span {

    display: block;

    font-size: 9px;

    color: var(--blue);

    font-weight: 900;

    letter-spacing: 1px;

  }



  .vja-floating-card strong {

    display: block;

    margin-top: 4px;

    font-size: 13px;

  }



  .vja-small-card {

    right: -12px;

    top: 70px;

    padding: 12px 16px;

    border-radius: 50px;

    display: flex;

    align-items: center;

    gap: 8px;

    font-size: 12px;

    font-weight: 800;

  }



  .vja-small-card svg {

    color: #17a44b;

  }



  /* SECTION HEADING */



  .vja-section-heading {

    text-align: center;

    max-width: 760px;

    margin: 0 auto 50px;

  }



  .vja-section-heading > span {

    font-size: 11px;

    letter-spacing: 1.7px;

    color: var(--blue);

    font-weight: 900;

  }



  .vja-section-heading h2,

  .vja-intro h2,

  .vja-local h2 {

    font-size: clamp(32px, 4vw, 50px);

    line-height: 1.08;

    letter-spacing: -1.7px;

    color: var(--dark-blue);

    margin: 13px 0 17px;

  }



  .vja-section-heading p,

  .vja-intro p,

  .vja-local p {

    color: var(--muted);

    line-height: 1.8;

    font-size: 16px;

  }



  /* INTRO */



  .vja-intro {

    display: grid;

    grid-template-columns: 1.1fr .9fr;

    gap: 80px;

    align-items: center;

  }



  .vja-intro-card {

    border: 1px solid var(--border);

    padding: 36px;

    border-radius: 18px;

    box-shadow: 0 18px 50px rgba(13,45,90,.07);

  }



  .vja-intro-card > svg {

    font-size: 32px;

    color: var(--blue);

    margin-bottom: 20px;

  }



  .vja-intro-card > span {

    display: block;

    color: var(--blue);

    font-size: 10px;

    font-weight: 900;

    letter-spacing: 1.4px;

  }



  .vja-intro-card h3 {

    color: var(--dark-blue);

    font-size: 26px;

    line-height: 1.25;

  }



  .vja-intro-point {

    display: flex;

    align-items: center;

    gap: 10px;

    padding: 10px 0;

    border-bottom: 1px solid #edf1f7;

    font-size: 14px;

    font-weight: 700;

  }



  .vja-intro-point svg {

    color: var(--blue);

  }



  /* SERVICES */

  .vja-service-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  .vja-service-card {
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: 18px;
    overflow: hidden;
    transition: .28s ease;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .vja-service-card:hover {
    box-shadow: 0 20px 50px rgba(14,46,90,.10);
  }

  .vja-service-image-wrap {
    height: 225px;
    position: relative;
    overflow: hidden;
    background: #eef4ff;
  }

  .vja-service-image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform .45s ease;
  }

  .vja-service-card:hover .vja-service-image-wrap img {
    transform: scale(1.045);
  }

  .vja-service-image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 52%, rgba(6, 25, 53, .32));
    pointer-events: none;
  }

  .vja-service-icon {
    width: 56px;
    height: 56px;
    background: #ffffff;
    color: var(--blue);
    display: grid;
    place-items: center;
    border-radius: 14px;
    font-size: 22px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    box-shadow: 0 10px 28px rgba(14,46,90,.15);
    z-index: 2;
  }

  .vja-service-content {
    padding: 42px 28px 28px;
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;
    align-items: center;
  }

  .vja-service-card h3,
  .vja-benefit h3,
  .vja-process h3 {
    color: var(--dark-blue);
    font-size: 20px;
    margin: 0 0 10px;
  }

  .vja-service-card p,
  .vja-benefit p,
  .vja-process p {
    color: var(--muted);
    line-height: 1.7;
    font-size: 14px;
  }

  .vja-service-features {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin-top: 18px;
  }

  .vja-service-features span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 8px 10px;
    border-radius: 999px;
    background: #f4f7fc;
    color: var(--dark-blue);
    font-size: 12px;
    font-weight: 700;
  }

  .vja-service-features svg {
    color: var(--blue);
    font-size: 11px;
  }

  .vja-service-card button {
    border: 0;
    padding: 0;
    background: transparent;
    color: var(--blue);
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    padding-top: 22px;
  }

  /* BENEFITS */



  .vja-benefit-grid {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 22px;

  }



  .vja-benefit {

    padding: 30px;

    border: 1px solid var(--border);

    border-radius: 16px;

  }



  .vja-benefit {
    text-align: center;
  }

  .vja-benefit > div {
    color: var(--blue);
    font-size: 24px;
    width: 52px;
    height: 52px;
    margin: 0 auto 18px;
    display: grid;
    place-items: center;
    background: #eaf1ff;
    border-radius: 12px;
  }



  /* PROJECTS */



  .vja-project-grid {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 22px;

  }



  .vja-project {

    background: #ffffff;

    border-radius: 15px;

    overflow: hidden;

    border: 1px solid var(--border);

  }



  .vja-project-image {

    height: 210px;

    overflow: hidden;

  }



  .vja-project-image img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    transition: .5s ease;

  }



  .vja-project:hover img {

    transform: scale(1.05);

  }



  .vja-project-body {

    padding: 22px;

  }



  .vja-project-body span {

    color: var(--blue);

    font-size: 10px;

    font-weight: 900;

    letter-spacing: 1px;

  }



  .vja-project-body h3 {

    margin: 7px 0 14px;

    color: var(--dark-blue);

  }



  .vja-project-body a {

    color: var(--blue);

    text-decoration: none;

    display: flex;

    align-items: center;

    gap: 8px;

    font-size: 13px;

    font-weight: 800;

  }



  .vja-center-action {

    display: flex;

    justify-content: center;

    margin-top: 38px;

  }



  .vja-secondary.dark svg {

    color: var(--blue);

  }



  /* PROCESS */



  .vja-process-grid {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 20px;

  }



  .vja-process {

    border: 1px solid var(--border);

    padding: 27px;

    border-radius: 15px;

    position: relative;

  }



  .vja-step-number {

    position: absolute;

    right: 20px;

    top: 17px;

    font-size: 35px;

    color: #edf2fb;

    font-weight: 900;

  }



  .vja-process-icon {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    background: #eaf1ff;
    color: var(--blue);
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .vja-process {
    text-align: center;
  }



  /* BLUE */



  .vja-blue-section {

    background: var(--dark-blue);

    color: #ffffff;

  }



  .vja-why-grid {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 80px;

    align-items: center;

  }



  .vja-blue-eyebrow {

    color: #8cb6ff;

    font-size: 11px;

    font-weight: 900;

    letter-spacing: 1.5px;

  }



  .vja-why-grid h2 {

    font-size: clamp(34px, 4vw, 52px);

    line-height: 1.08;

    letter-spacing: -1.8px;

    margin: 14px 0 18px;

  }



  .vja-why-grid p {

    color: #c7d4e7;

    line-height: 1.8;

  }



  .vja-why-grid button {

    border: 0;

    background: #ffffff;

    color: var(--dark-blue);

    border-radius: 8px;

    padding: 15px 20px;

    font-weight: 800;

    cursor: pointer;

    display: flex;

    align-items: center;

    gap: 9px;

    margin-top: 25px;

  }



  .vja-why-points {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 13px;

  }



  .vja-why-points div {

    border: 1px solid rgba(255,255,255,.12);

    padding: 15px;

    border-radius: 9px;

    display: flex;

    align-items: center;

    gap: 9px;

    color: #e5edf9;

    font-size: 13px;

  }



  .vja-why-points svg {

    color: #72a5ff;

  }



  /* LOCAL */



  .vja-local {

    display: grid;

    grid-template-columns: 1.1fr .9fr;

    gap: 80px;

    align-items: center;

  }



  .vja-local-links {

    display: flex;

    gap: 15px;

    flex-wrap: wrap;

    margin-top: 25px;

  }



  .vja-local-links button {

    border: 0;

    background: transparent;

    color: var(--blue);

    padding: 0;

    font-weight: 800;

    cursor: pointer;

    display: flex;

    gap: 8px;

    align-items: center;

  }



  .vja-local-box {

    background: var(--light);

    padding: 38px;

    border-radius: 18px;

    border: 1px solid var(--border);

  }



  .vja-local-box > span {

    color: var(--blue);

    font-size: 10px;

    font-weight: 900;

    letter-spacing: 1.5px;

  }



  .vja-local-box h3 {

    color: var(--dark-blue);

    font-size: 29px;

    margin: 10px 0;

  }



  .vja-local-box button {

    width: 100%;

    border: 0;

    min-height: 49px;

    border-radius: 8px;

    margin-top: 10px;

    background: #1faa59;

    color: #ffffff;

    font-weight: 800;

    cursor: pointer;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 9px;

  }



  .vja-local-box .call-button {

    background: var(--blue);

  }



  /* FAQ */



  .vja-faq-container {

    max-width: 900px;

  }



  .vja-faq-list {

    display: grid;

    gap: 12px;

  }



  .vja-faq {

    background: #ffffff;

    border: 1px solid var(--border);

    border-radius: 12px;

    overflow: hidden;

  }



  .vja-faq > button {

    width: 100%;

    border: 0;

    background: transparent;

    padding: 20px 22px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    text-align: left;

    cursor: pointer;

    color: var(--dark-blue);

    font-weight: 800;

    gap: 20px;

  }



  .vja-faq > button svg {

    color: var(--blue);

  }



  .vja-faq-answer {

    overflow: hidden;

  }



  .vja-faq-answer p {

    padding: 0 22px 21px;

    margin: 0;

    color: var(--muted);

    line-height: 1.75;

    font-size: 14px;

  }



  /* FINAL */



  .vja-final {

    padding: 80px 0 100px;

    background: #ffffff;

  }



  .vja-final-box {

    background: linear-gradient(135deg, #062354, #0758e8);

    border-radius: 24px;

    padding: 65px 50px;

    color: #ffffff;

    text-align: center;

  }



  .vja-final-box > span {

    font-size: 10px;

    letter-spacing: 1.7px;

    font-weight: 900;

    color: #a9c7ff;

  }



  .vja-final-box h2 {

    font-size: clamp(34px, 4vw, 52px);

    margin: 12px auto 15px;

    max-width: 720px;

  }



  .vja-final-box p {

    max-width: 680px;

    margin: 0 auto;

    color: #d7e3f7;

    line-height: 1.8;

  }



  .vja-final-actions {

    display: flex;

    justify-content: center;

    gap: 13px;

    margin-top: 28px;

    flex-wrap: wrap;

  }



  .vja-final-actions button {

    min-height: 50px;

    padding: 0 21px;

    border: 0;

    border-radius: 8px;

    background: #ffffff;

    color: var(--dark-blue);

    font-weight: 800;

    cursor: pointer;

    display: flex;

    align-items: center;

    gap: 9px;

  }



  .vja-final-actions .whatsapp {

    background: #1faa59;

    color: #ffffff;

  }



  /* TABLET */



  @media (max-width: 980px) {

    .vja-hero-grid,

    .vja-intro,

    .vja-why-grid,

    .vja-local {

      grid-template-columns: 1fr;

      gap: 50px;

    }



    .vja-service-grid,

    .vja-benefit-grid,

    .vja-project-grid,

    .vja-process-grid {

      grid-template-columns: repeat(2, 1fr);

    }



    .vja-hero {

      padding-top: 90px;

    }



    .vja-hero-visual {

      max-width: 650px;

      width: 100%;

      margin: auto;

    }

  }



  /* MOBILE */



  @media (max-width: 640px) {

    .vja-container {

      width: min(100% - 28px, 1180px);

    }



    .vja-section {

      padding: 70px 0;

    }



    .vja-hero {

      padding: 75px 0 65px;

      min-height: auto;

    }



    .vja-hero-grid {

      gap: 38px;

    }



    .vja-hero h1 {

      font-size: 42px;

      letter-spacing: -2px;

    }



    .vja-hero-copy {

      font-size: 16px;

    }



    .vja-actions {

      flex-direction: column;

    }



    .vja-actions button {

      width: 100%;

    }



    .vja-main-image {

      height: 390px;

      border-radius: 16px;

    }



    .vja-hero-visual {

      padding: 0 0 60px;

    }



    .vja-floating-card {

      left: 10px;

      right: 10px;

      bottom: 8px;

    }



    .vja-small-card {

      right: 10px;

      top: 18px;

    }



    .vja-service-grid,

    .vja-benefit-grid,

    .vja-project-grid,

    .vja-process-grid,

    .vja-why-points {

      grid-template-columns: 1fr;

    }



    .vja-benefit,

    .vja-intro-card,

    .vja-local-box {

      padding: 24px;

    }

    .vja-service-image-wrap {
      height: 210px;
    }

    .vja-service-content {
      padding: 40px 22px 24px;
    }



    .vja-project-image {

      height: 200px;

    }



    .vja-final {

      padding: 60px 0 80px;

    }



    .vja-final-box {

      padding: 45px 22px;

      border-radius: 18px;

    }



    .vja-final-actions {

      flex-direction: column;

    }



    .vja-final-actions button {

      width: 100%;

      justify-content: center;

    }

  }

`;



export default WebsiteDevelopmentVijayawada;
