import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaArrowRight,
  FaAward,
  FaBolt,
  FaBriefcase,
  FaBullseye,
  FaCheck,
  FaCircleCheck,
  FaCode,
  FaComments,
  FaGlobe,
  FaHeart,
  FaLightbulb,
  FaRocket,
  FaShieldHalved,
  FaStar,
  FaUsers,
  FaWandMagicSparkles,
  FaWhatsapp,
} from "react-icons/fa6";

/* =========================================================
   CONFIGURATION
========================================================= */

const WEBSITE_URL =
  "https://smyvisiontechnologies.vercel.app";

const ABOUT_URL =
  `${WEBSITE_URL}/about`;

const PHONE_NUMBER =
  "8500352005";

const PHONE_LINK =
  "+918500352005";

const EMAIL =
  "smyvisiontechnologies@gmail.com";

/* =========================================================
   COMPANY VALUES
========================================================= */

const values = [
  {
    icon: <FaShieldHalved />,

    title: "Integrity First",

    description:
      "We believe strong partnerships begin with honest communication, clear expectations and transparent processes.",
  },

  {
    icon: <FaLightbulb />,

    title: "Practical Innovation",

    description:
      "We use technology with purpose, focusing on practical solutions that solve real business challenges.",
  },

  {
    icon: <FaUsers />,

    title: "Client-Focused Thinking",

    description:
      "Every project starts with understanding the business, the customer journey and the outcome that matters most.",
  },

  {
    icon: <FaAward />,

    title: "Commitment to Quality",

    description:
      "We focus on professional presentation, responsive development, usability and long-term digital value.",
  },
];

/* =========================================================
   WHAT WE DO
========================================================= */

const services = [
  {
    icon: <FaGlobe />,

    image: "/images/web.png",

    title: "Website Development",

    description:
      "Professional websites designed to present your business clearly, build customer trust and create a strong digital foundation.",

    points: [
      "Business & corporate websites",
      "Responsive user experiences",
      "SEO-ready development",
      "Modern website redesign",
    ],
  },

  {
    icon: <FaComments />,

    image: "/images/chat.png",

    title: "AI & Chatbot Solutions",

    description:
      "Smart digital communication solutions designed to improve customer support, capture enquiries and simplify business communication.",

    points: [
      "Website chatbots",
      "Customer enquiry automation",
      "Lead generation support",
      "Scalable conversation flows",
    ],
  },

  {
    icon: <FaBolt />,

    image: "/images/auto.png",

    title: "Business Automation",

    description:
      "Custom automation solutions designed to reduce repetitive work and help businesses manage important processes more efficiently.",

    points: [
      "Workflow automation",
      "Custom dashboards",
      "Business management systems",
      "Process optimization",
    ],
  },
];

/* =========================================================
   BUSINESS ADVANTAGES
========================================================= */

const advantages = [
  {
    icon: <FaBullseye />,

    title: "Business-First Approach",

    description:
      "We understand your goals before recommending the right digital solution.",
  },

  {
    icon: <FaCode />,

    title: "Modern Development",

    description:
      "We build professional digital experiences using reliable and scalable development practices.",
  },

  {
    icon: <FaRocket />,

    title: "Built for Growth",

    description:
      "Our solutions are designed to support your current requirements and future business expansion.",
  },

  {
    icon: <FaHeart />,

    title: "Focused Collaboration",

    description:
      "We work closely with businesses to keep project decisions practical, clear and aligned with real needs.",
  },
];

/* =========================================================
   BUSINESS JOURNEY
========================================================= */

const journeySteps = [
  {
    number: "01",

    title: "Understand",

    description:
      "We begin by understanding your business, customers, services and project goals.",
  },

  {
    number: "02",

    title: "Plan",

    description:
      "We organize the structure, content direction and functionality required for your solution.",
  },

  {
    number: "03",

    title: "Create",

    description:
      "We transform the strategy into a professional, responsive and functional digital experience.",
  },

  {
    number: "04",

    title: "Improve",

    description:
      "We test, refine and prepare the final solution for a smooth business-ready launch.",
  },
];

/* =========================================================
   SEO STRUCTURED DATA
   LOCAL KEYWORDS ARE KEPT HERE
========================================================= */

const structuredData = {
  "@context":
    "https://schema.org",

  "@graph": [
    {
      "@type":
        "AboutPage",

      "@id":
        `${ABOUT_URL}#webpage`,

      url:
        ABOUT_URL,

      name:
        "About SMYVISION TECHNOLOGIES | Web Development Company in Vijayawada",

      description:
        "Learn about SMYVISION TECHNOLOGIES, a web development company in Vijayawada providing professional website development, business automation, web applications and AI chatbot solutions across Andhra Pradesh.",

      isPartOf: {
        "@id":
          `${WEBSITE_URL}/#website`,
      },

      about: {
        "@id":
          `${WEBSITE_URL}/#organization`,
      },

      inLanguage:
        "en-IN",
    },

    {
      "@type": [
        "Organization",
        "ProfessionalService",
      ],

      "@id":
        `${WEBSITE_URL}/#organization`,

      name:
        "SMYVISION TECHNOLOGIES",

      alternateName:
        "SMYVISION",

      url:
        WEBSITE_URL,

      logo:
        `${WEBSITE_URL}/Logo.png`,

      description:
        "SMYVISION TECHNOLOGIES is a professional web development company in Vijayawada offering website development, responsive web design, custom web applications, business automation and AI chatbot solutions across Andhra Pradesh.",

      email:
        EMAIL,

      telephone:
        PHONE_LINK,

      address: {
        "@type":
          "PostalAddress",

        addressLocality:
          "Vijayawada",

        addressRegion:
          "Andhra Pradesh",

        addressCountry:
          "IN",
      },

      areaServed: [
        {
          "@type":
            "City",

          name:
            "Vijayawada",
        },

        {
          "@type":
            "State",

          name:
            "Andhra Pradesh",
        },

        {
          "@type":
            "Country",

          name:
            "India",
        },
      ],

      knowsAbout: [
        "Website Development",
        "Web Design",
        "Responsive Website Development",
        "Custom Web Applications",
        "Business Automation",
        "AI Chatbot Development",
        "SEO-Friendly Web Development",
      ],

      contactPoint: {
        "@type":
          "ContactPoint",

        telephone:
          PHONE_LINK,

        contactType:
          "customer service",

        areaServed:
          "IN",

        availableLanguage: [
          "English",
          "Telugu",
          "Hindi",
        ],
      },
    },
  ],
};

/* =========================================================
   ANIMATION
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
   SECTION HEADER
========================================================= */

const SectionHeader = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <motion.div
      className="about-section-header"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
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
        {description}
      </motion.p>
    </motion.div>
  );
};

/* =========================================================
   ABOUT
========================================================= */

const About = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToServices = () => {
    navigate("/services");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    const message =
      encodeURIComponent(
        "Hi SMYVISION TECHNOLOGIES, I would like to discuss a website or digital solution for my business."
      );

    window.open(
      `https://wa.me/91${PHONE_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
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
          About SMYVISION TECHNOLOGIES | Web Development Company in Vijayawada
        </title>

        <meta
          name="description"
          content="Learn about SMYVISION TECHNOLOGIES, a professional web development company in Vijayawada providing website development, responsive web design, custom web applications, business automation and AI chatbot solutions across Andhra Pradesh."
        />

        <meta
          name="keywords"
          content="about SMYVISION TECHNOLOGIES, web development company in Vijayawada, website development company Vijayawada, web development services Vijayawada, website developers Vijayawada, business automation Vijayawada, AI chatbot development Vijayawada, custom web applications Vijayawada, web development company Andhra Pradesh, website development Andhra Pradesh"
        />

        <meta
          name="author"
          content="SMYVISION TECHNOLOGIES"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          name="geo.region"
          content="IN-AP"
        />

        <meta
          name="geo.placename"
          content="Vijayawada"
        />

        <link
          rel="canonical"
          href={ABOUT_URL}
        />

        {/* OPEN GRAPH */}

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="SMYVISION TECHNOLOGIES"
        />

        <meta
          property="og:title"
          content="About SMYVISION TECHNOLOGIES | Web Development Company in Vijayawada"
        />

        <meta
          property="og:description"
          content="Learn about SMYVISION TECHNOLOGIES and our approach to professional website development, business automation and intelligent digital solutions in Vijayawada and Andhra Pradesh."
        />

        <meta
          property="og:url"
          content={ABOUT_URL}
        />

        <meta
          property="og:image"
          content={`${WEBSITE_URL}/Logo.png`}
        />

        <meta
          property="og:locale"
          content="en_IN"
        />

        {/* TWITTER */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="About SMYVISION TECHNOLOGIES | Web Development Company"
        />

        <meta
          name="twitter:description"
          content="Professional website development, automation and AI digital solutions for businesses in Vijayawada and Andhra Pradesh."
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

      <main className="premium-about">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="about-hero">
          <div className="about-grid-background" />

          <motion.div
            className="about-orb about-orb-one"
            animate={{
              x: [0, 35, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="about-orb about-orb-two"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="about-container about-hero-layout">
            <motion.div
              className="about-hero-content"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div
                className="about-hero-badge"
                variants={fadeUp}
              >
                <FaWandMagicSparkles />

                <span>
                  Building Better Digital Experiences for Growing Businesses
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
              >
                We Build Technology Around
                <span>
                  {" "}
                  Real Business Goals.
                </span>
              </motion.h1>

              <motion.p
                className="about-hero-description"
                variants={fadeUp}
              >
                SMYVISION TECHNOLOGIES creates
                professional websites, smart
                automation systems and digital
                solutions designed to help
                businesses present themselves
                better, work more efficiently
                and connect with customers more
                effectively.
              </motion.p>

              <motion.div
                className="about-hero-actions"
                variants={fadeUp}
              >
                <button
                  type="button"
                  className="about-primary-button"
                  onClick={goToContact}
                >
                  Start Your Project

                  <FaArrowRight />
                </button>

                <button
                  type="button"
                  className="about-secondary-button"
                  onClick={goToServices}
                >
                  Explore Our Services
                </button>
              </motion.div>

              <motion.div
                className="about-hero-points"
                variants={fadeUp}
              >
                <span>
                  <FaCircleCheck />
                  Business-Focused
                </span>

                <span>
                  <FaCircleCheck />
                  Modern Development
                </span>

                <span>
                  <FaCircleCheck />
                  Practical Solutions
                </span>
              </motion.div>
            </motion.div>

            {/* HERO VISUAL */}

            <motion.div
              className="about-hero-visual"
              initial={{
                opacity: 0,
                scale: 0.92,
                x: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.85,
              }}
            >
              <div className="about-visual-main-card">
                <div className="about-visual-top">
                  <span>
                    OUR APPROACH
                  </span>

                  <div className="about-live-dot">
                    <i />
                    Built for Business
                  </div>
                </div>

                <h2>
                  Understand.
                  <br />
                  Create.
                  <br />
                  Improve.
                </h2>

                <p>
                  We combine business
                  understanding with modern
                  digital development to create
                  solutions that have a clear
                  purpose.
                </p>

                <div className="about-visual-metrics">
                  <div>
                    <strong>
                      01
                    </strong>

                    <span>
                      Business Strategy
                    </span>
                  </div>

                  <div>
                    <strong>
                      02
                    </strong>

                    <span>
                      Digital Design
                    </span>
                  </div>

                  <div>
                    <strong>
                      03
                    </strong>

                    <span>
                      Smart Development
                    </span>
                  </div>
                </div>
              </div>

              <motion.div
                className="about-floating-card about-float-one"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <FaBullseye />

                <div>
                  <strong>
                    Goal Focused
                  </strong>

                  <span>
                    Built around your business
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="about-floating-card about-float-two"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                <FaRocket />

                <div>
                  <strong>
                    Growth Ready
                  </strong>

                  <span>
                    Designed to move forward
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ====================================================== */}

        <section className="about-stats-section">
          <div className="about-container">
            <div className="about-stats-grid">
              <div>
                <strong>
                  15+
                </strong>

                <span>
                  Projects Worked On
                </span>
              </div>

              <div>
                <strong>
                  3+
                </strong>

                <span>
                  Core Digital Services
                </span>
              </div>

              <div>
                <strong>
                  100%
                </strong>

                <span>
                  Responsive Development
                </span>
              </div>

              <div>
                <strong>
                  1
                </strong>

                <span>
                  Digital Partner for Growth
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHO WE ARE
        ====================================================== */}

        <section className="about-section about-story-section">
          <div className="about-container about-story-layout">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={stagger}
            >
              <motion.span
                className="about-eyebrow"
                variants={fadeUp}
              >
                WHO WE ARE
              </motion.span>

              <motion.h2
                variants={fadeUp}
              >
                A Digital Solutions Company Built Around Practical Business Needs.
              </motion.h2>

              <motion.p
                variants={fadeUp}
              >
                We started SMYVISION
                TECHNOLOGIES with a simple
                belief: technology should make
                business easier, clearer and
                more effective.
              </motion.p>

              <motion.p
                variants={fadeUp}
              >
                Businesses today need more than
                just an online page. They need a
                professional digital presence,
                better customer communication
                and systems that can support
                their day-to-day operations.
              </motion.p>

              <motion.p
                variants={fadeUp}
              >
                Our role is to understand those
                requirements and convert them
                into practical digital
                solutions that businesses can
                actually use.
              </motion.p>

              <motion.p
                variants={fadeUp}
              >
                From websites and custom
                platforms to automation and
                intelligent communication
                solutions, our focus remains on
                building technology with a
                clear business purpose.
              </motion.p>
            </motion.div>

            <motion.div
              className="about-story-card"
              initial={{
                opacity: 0,
                scale: 0.93,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="story-card-icon">
                <FaBriefcase />
              </div>

              <span>
                OUR PURPOSE
              </span>

              <h3>
                Helping Businesses Build a Stronger Digital Foundation.
              </h3>

              <p>
                We focus on creating solutions
                that improve how businesses
                present themselves, communicate
                with customers and manage
                digital processes.
              </p>

              <div className="story-check-list">
                <span>
                  <FaCheck />
                  Clear digital strategy
                </span>

                <span>
                  <FaCheck />
                  Professional presentation
                </span>

                <span>
                  <FaCheck />
                  Better customer experiences
                </span>

                <span>
                  <FaCheck />
                  Scalable business solutions
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            MISSION AND VISION
        ====================================================== */}

        <section className="about-section mission-section">
          <div className="about-container">
            <div className="mission-grid">
              <motion.article
                className="mission-card mission-blue"
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
                <div className="mission-card-number">
                  01
                </div>

                <div className="mission-icon">
                  <FaBullseye />
                </div>

                <span>
                  OUR MISSION
                </span>

                <h2>
                  Make Digital Solutions More Practical for Businesses.
                </h2>

                <p>
                  Our mission is to understand
                  real business challenges and
                  create professional digital
                  solutions that improve
                  communication, simplify
                  processes and support
                  sustainable growth.
                </p>
              </motion.article>

              <motion.article
                className="mission-card mission-purple"
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
              >
                <div className="mission-card-number">
                  02
                </div>

                <div className="mission-icon">
                  <FaRocket />
                </div>

                <span>
                  OUR VISION
                </span>

                <h2>
                  Become a Trusted Digital Partner for Growing Businesses.
                </h2>

                <p>
                  Our vision is to build
                  long-term partnerships by
                  delivering technology that is
                  reliable, understandable and
                  aligned with the changing
                  needs of modern businesses.
                </p>
              </motion.article>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section className="about-section about-services-section">
          <div className="about-container">
            <SectionHeader
              eyebrow="WHAT WE BUILD"
              title="Digital Solutions Designed Around Real Business Requirements"
              description="Our core services focus on helping businesses build a stronger online presence, improve communication and simplify digital processes."
            />

            <div className="about-services-grid">
              {services.map(
                (
                  service,
                  index
                ) => (
                  <motion.article
                    className="about-service-card"
                    key={
                      service.title
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
                        index *
                        0.08,
                    }}
                  >
                    <div className="about-service-image">
                      <img
                        src={
                          service.image
                        }
                        alt={`${service.title} by SMYVISION TECHNOLOGIES`}
                        loading="lazy"
                      />

                      <div className="about-service-icon">
                        {
                          service.icon
                        }
                      </div>
                    </div>

                    <div className="about-service-content">
                      <span className="service-index">
                        0
                        {index +
                          1}
                      </span>

                      <h3>
                        {
                          service.title
                        }
                      </h3>

                      <p>
                        {
                          service.description
                        }
                      </p>

                      <div className="about-service-points">
                        {service.points.map(
                          (
                            point
                          ) => (
                            <span
                              key={
                                point
                              }
                            >
                              <FaCircleCheck />

                              {
                                point
                              }
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </motion.article>
                )
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            VALUES
        ====================================================== */}

        <section className="about-section values-section">
          <div className="about-container">
            <SectionHeader
              eyebrow="OUR VALUES"
              title="The Principles Behind the Way We Work"
              description="Our decisions, communication and development process are guided by principles that help us build better long-term business relationships."
            />

            <div className="values-grid">
              {values.map(
                (
                  value,
                  index
                ) => (
                  <motion.article
                    className="value-card"
                    key={
                      value.title
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
                        index *
                        0.08,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                  >
                    <div>
                      {
                        value.icon
                      }
                    </div>

                    <h3>
                      {
                        value.title
                      }
                    </h3>

                    <p>
                      {
                        value.description
                      }
                    </p>
                  </motion.article>
                )
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            JOURNEY / PROCESS
        ====================================================== */}

        <section className="about-section journey-section">
          <div className="about-container">
            <SectionHeader
              eyebrow="OUR WAY OF WORKING"
              title="A Clear Journey From Business Requirement to Digital Solution"
              description="We keep our approach simple, structured and focused on creating a solution that makes sense for the business."
            />

            <div className="journey-wrapper">
              <div className="journey-line" />

              {journeySteps.map(
                (
                  step,
                  index
                ) => (
                  <motion.div
                    className="journey-step"
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
                        index *
                        0.08,
                    }}
                  >
                    <div className="journey-number">
                      {
                        step.number
                      }
                    </div>

                    <div className="journey-content">
                      <h3>
                        {
                          step.title
                        }
                      </h3>

                      <p>
                        {
                          step.description
                        }
                      </p>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            ADVANTAGES
        ====================================================== */}

        <section className="about-section advantages-section">
          <div className="about-container advantages-layout">
            <motion.div
              className="advantages-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={stagger}
            >
              <motion.span
                className="about-eyebrow"
                variants={fadeUp}
              >
                THE SMYVISION APPROACH
              </motion.span>

              <motion.h2
                variants={fadeUp}
              >
                We Focus on the Business Before We Focus on the Technology.
              </motion.h2>

              <motion.p
                variants={fadeUp}
              >
                A good digital solution should
                not exist only because the
                technology is available. It
                should solve a clear problem,
                improve an experience or create
                a meaningful business
                opportunity.
              </motion.p>

              <motion.p
                variants={fadeUp}
              >
                That is why we begin with your
                requirements and build the
                technology around them.
              </motion.p>

              <motion.button
                type="button"
                className="about-primary-button"
                onClick={
                  goToContact
                }
                variants={fadeUp}
              >
                Discuss Your Project

                <FaArrowRight />
              </motion.button>
            </motion.div>

            <div className="advantages-grid">
              {advantages.map(
                (
                  advantage,
                  index
                ) => (
                  <motion.article
                    key={
                      advantage.title
                    }
                    className="advantage-card"
                    initial={{
                      opacity: 0,
                      scale: 0.94,
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
                        index *
                        0.07,
                    }}
                  >
                    <div>
                      {
                        advantage.icon
                      }
                    </div>

                    <h3>
                      {
                        advantage.title
                      }
                    </h3>

                    <p>
                      {
                        advantage.description
                      }
                    </p>
                  </motion.article>
                )
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            BUSINESS CONTENT
        ====================================================== */}

        <section className="about-section about-content-section">
          <div className="about-container about-content-layout">
            <div>
              <span className="about-eyebrow">
                BUILT FOR MODERN BUSINESSES
              </span>

              <h2>
                Creating Digital Foundations That Can Grow With Your Business.
              </h2>

              <p>
                A business website can become
                the starting point for many
                future opportunities. It can
                support online marketing,
                customer communication, lead
                generation, business
                automation and internal
                management systems.
              </p>

              <p>
                That is why we focus on creating
                a strong digital foundation
                instead of simply building
                pages.
              </p>

              <p>
                Our goal is to help businesses
                use digital technology in a way
                that feels practical, useful
                and aligned with how the
                business actually operates.
              </p>
            </div>

            <div className="content-feature-grid">
              <div>
                <FaGlobe />

                <h3>
                  Stronger Digital Presence
                </h3>

                <p>
                  Present your business clearly
                  and professionally across
                  digital channels.
                </p>
              </div>

              <div>
                <FaBolt />

                <h3>
                  Smarter Operations
                </h3>

                <p>
                  Reduce repetitive processes
                  through practical automation
                  solutions.
                </p>
              </div>

              <div>
                <FaUsers />

                <h3>
                  Better Customer Journeys
                </h3>

                <p>
                  Make it easier for customers
                  to understand and contact
                  your business.
                </p>
              </div>

              <div>
                <FaRocket />

                <h3>
                  Growth-Ready Solutions
                </h3>

                <p>
                  Create systems that can evolve
                  as your business requirements
                  change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="about-final-cta">
          <div className="about-cta-orb about-cta-orb-one" />

          <div className="about-cta-orb about-cta-orb-two" />

          <div className="about-container">
            <motion.div
              className="about-final-content"
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
              <motion.div
                className="about-final-icon"
                animate={{
                  y: [
                    0,
                    -8,
                    0,
                  ],
                  rotate: [
                    0,
                    4,
                    0,
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <FaRocket />
              </motion.div>

              <span>
                LET'S MOVE YOUR IDEA FORWARD
              </span>

              <h2>
                Have a Business Idea That Needs the Right Digital Solution?
              </h2>

              <p>
                Tell us what you are planning.
                We will understand your
                requirements and help you
                explore a practical path
                forward.
              </p>

              <div className="about-final-actions">
                <button
                  type="button"
                  className="about-white-button"
                  onClick={
                    goToContact
                  }
                >
                  Get a Free Quote

                  <FaArrowRight />
                </button>

                <button
                  type="button"
                  className="about-whatsapp-button"
                  onClick={
                    openWhatsApp
                  }
                >
                  <FaWhatsapp />

                  WhatsApp Us
                </button>
              </div>

              <div className="about-final-trust">
                <span>
                  <FaStar />
                  Professional Approach
                </span>

                <span>
                  <FaCheck />
                  Clear Communication
                </span>

                <span>
                  <FaRocket />
                  Business-Focused Solutions
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

/* =========================================================
   CSS
========================================================= */

const styles = `
  :root {
    --about-primary:
      #0758e8;

    --about-secondary:
      #6d28d9;

    --about-heading:
      #07162d;

    --about-text:
      #617086;

    --about-light:
      #f7f9fd;

    --about-border:
      #e1e8f2;

    --about-green:
      #13a976;
  }

  * {
    box-sizing:
      border-box;
  }

  .premium-about {
    width: 100%;

    overflow: hidden;

    color:
      var(
        --about-text
      );

    background:
      #ffffff;

    font-family:
      Inter,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;
  }

  .about-container {
    width:
      min(
        1180px,
        calc(
          100% - 40px
        )
      );

    margin:
      0 auto;
  }

  .about-section {
    padding:
      110px 0;
  }

  .about-eyebrow {
    display:
      inline-block;

    margin-bottom:
      14px;

    color:
      var(
        --about-primary
      );

    font-size:
      11px;

    font-weight:
      850;

    letter-spacing:
      0.15em;
  }

  /* =========================================================
     COMMON
  ========================================================= */

  .about-section-header {
    max-width:
      780px;

    margin:
      0 auto
      58px;

    text-align:
      center;
  }

  .about-section-header
  > span {
    display:
      inline-block;

    margin-bottom:
      14px;

    color:
      var(
        --about-primary
      );

    font-size:
      11px;

    font-weight:
      850;

    letter-spacing:
      0.15em;
  }

  .about-section-header
  h2,
  .about-story-layout
  h2,
  .advantages-heading
  h2,
  .about-content-layout
  > div:first-child
  h2 {
    margin:
      0 0
      18px;

    color:
      var(
        --about-heading
      );

    font-size:
      clamp(
        2.1rem,
        4vw,
        3.5rem
      );

    line-height:
      1.07;

    letter-spacing:
      -0.045em;
  }

  .about-section-header
  p {
    margin: 0;

    font-size:
      16px;

    line-height:
      1.8;
  }

  .about-primary-button,
  .about-secondary-button,
  .about-white-button,
  .about-whatsapp-button {
    min-height:
      54px;

    display:
      inline-flex;

    align-items:
      center;

    justify-content:
      center;

    gap:
      9px;

    padding:
      0 24px;

    border: 0;

    border-radius:
      13px;

    font-weight:
      750;

    cursor:
      pointer;

    transition:
      transform
      0.25s ease,
      box-shadow
      0.25s ease;
  }

  .about-primary-button {
    color:
      white;

    background:
      linear-gradient(
        135deg,
        #0758e8,
        #6338dc
      );

    box-shadow:
      0 14px 30px
      rgba(
        7,
        88,
        232,
        0.25
      );
  }

  .about-secondary-button {
    color:
      var(
        --about-heading
      );

    background:
      white;

    border:
      1px solid
      #dce4ef;
  }

  .about-primary-button:hover,
  .about-secondary-button:hover,
  .about-white-button:hover,
  .about-whatsapp-button:hover {
    transform:
      translateY(
        -4px
      );
  }

  /* =========================================================
     HERO
  ========================================================= */

  .about-hero {
    min-height:
      760px;

    position:
      relative;

    display:
      flex;

    align-items:
      center;

    overflow:
      hidden;

    padding:
      120px 0
      135px;

    background:
      linear-gradient(
        180deg,
        #fcfdff,
        #f2f6ff
      );
  }

  .about-grid-background {
    position:
      absolute;

    inset: 0;

    background-image:
      linear-gradient(
        rgba(
          7,
          88,
          232,
          0.035
        )
        1px,
        transparent
        1px
      ),
      linear-gradient(
        90deg,
        rgba(
          7,
          88,
          232,
          0.035
        )
        1px,
        transparent
        1px
      );

    background-size:
      46px 46px;

    mask-image:
      linear-gradient(
        to bottom,
        black,
        transparent
        94%
      );
  }

  .about-orb {
    position:
      absolute;

    border-radius:
      50%;

    filter:
      blur(
        90px
      );

    pointer-events:
      none;
  }

  .about-orb-one {
    width:
      430px;

    height:
      430px;

    left:
      -170px;

    top:
      -130px;

    background:
      rgba(
        31,
        113,
        255,
        0.16
      );
  }

  .about-orb-two {
    width:
      480px;

    height:
      480px;

    right:
      -170px;

    bottom:
      -180px;

    background:
      rgba(
        109,
        40,
        217,
        0.14
      );
  }

  .about-hero-layout {
    position:
      relative;

    z-index: 2;

    display:
      grid;

    grid-template-columns:
      1.05fr
      0.95fr;

    gap:
      75px;

    align-items:
      center;
  }

  .about-hero-badge {
    width:
      fit-content;

    display:
      flex;

    align-items:
      center;

    gap:
      8px;

    margin-bottom:
      25px;

    padding:
      10px 15px;

    color:
      var(
        --about-primary
      );

    background:
      rgba(
        255,
        255,
        255,
        0.9
      );

    border:
      1px solid
      rgba(
        7,
        88,
        232,
        0.14
      );

    border-radius:
      999px;

    font-size:
      11px;

    font-weight:
      750;
  }

  .about-hero-content
  h1 {
    margin:
      0 0
      25px;

    color:
      var(
        --about-heading
      );

    font-size:
      clamp(
        3rem,
        5.2vw,
        5.1rem
      );

    line-height:
      1.01;

    letter-spacing:
      -0.06em;
  }

  .about-hero-content
  h1 span {
    color:
      transparent;

    background:
      linear-gradient(
        95deg,
        #0758e8,
        #7035df
      );

    background-clip:
      text;

    -webkit-background-clip:
      text;
  }

  .about-hero-description {
    max-width:
      650px;

    margin:
      0 0
      32px;

    font-size:
      17px;

    line-height:
      1.8;
  }

  .about-hero-actions {
    display:
      flex;

    flex-wrap:
      wrap;

    gap:
      13px;
  }

  .about-hero-points {
    display:
      flex;

    flex-wrap:
      wrap;

    gap:
      20px;

    margin-top:
      30px;
  }

  .about-hero-points
  span {
    display:
      flex;

    align-items:
      center;

    gap:
      7px;

    font-size:
      12px;

    font-weight:
      650;
  }

  .about-hero-points
  svg {
    color:
      var(
        --about-green
      );
  }

  /* =========================================================
     HERO VISUAL
  ========================================================= */

  .about-hero-visual {
    position:
      relative;
  }

  .about-visual-main-card {
    min-height:
      490px;

    position:
      relative;

    overflow:
      hidden;

    padding:
      42px;

    color:
      white;

    background:
      radial-gradient(
        circle at 85% 15%,
        rgba(
          55,
          126,
          255,
          0.25
        ),
        transparent
        30%
      ),
      linear-gradient(
        145deg,
        #06172f,
        #0d2854
      );

    border:
      10px solid
      rgba(
        255,
        255,
        255,
        0.9
      );

    border-radius:
      30px;

    box-shadow:
      0 35px 100px
      rgba(
        8,
        31,
        72,
        0.17
      );
  }

  .about-visual-top {
    display:
      flex;

    justify-content:
      space-between;

    align-items:
      center;

    gap:
      15px;
  }

  .about-visual-top
  > span {
    color:
      #76a9ff;

    font-size:
      9px;

    font-weight:
      850;

    letter-spacing:
      0.15em;
  }

  .about-live-dot {
    display:
      flex;

    align-items:
      center;

    gap:
      7px;

    color:
      #b8c8df;

    font-size:
      9px;
  }

  .about-live-dot
  i {
    width:
      7px;

    height:
      7px;

    background:
      #24d497;

    border-radius:
      50%;

    box-shadow:
      0 0 0
      5px
      rgba(
        36,
        212,
        151,
        0.12
      );
  }

  .about-visual-main-card
  h2 {
    margin:
      75px 0
      20px;

    color:
      white;

    font-size:
      clamp(
        3rem,
        5vw,
        4.4rem
      );

    line-height:
      0.96;

    letter-spacing:
      -0.055em;
  }

  .about-visual-main-card
  > p {
    max-width:
      380px;

    color:
      #b3c4df;

    font-size:
      13px;

    line-height:
      1.75;
  }

  .about-visual-metrics {
    display:
      grid;

    grid-template-columns:
      repeat(
        3,
        1fr
      );

    gap:
      10px;

    margin-top:
      45px;
  }

  .about-visual-metrics
  div {
    padding:
      15px;

    background:
      rgba(
        255,
        255,
        255,
        0.06
      );

    border:
      1px solid
      rgba(
        255,
        255,
        255,
        0.1
      );

    border-radius:
      13px;
  }

  .about-visual-metrics
  strong {
    display:
      block;

    margin-bottom:
      4px;

    color:
      #77abff;

    font-size:
      18px;
  }

  .about-visual-metrics
  span {
    color:
      #a5b7d0;

    font-size:
      8px;
  }

  .about-floating-card {
    position:
      absolute;

    z-index:
      3;

    display:
      flex;

    align-items:
      center;

    gap:
      10px;

    padding:
      14px 16px;

    background:
      rgba(
        255,
        255,
        255,
        0.95
      );

    border:
      1px solid
      white;

    border-radius:
      15px;

    box-shadow:
      0 20px 50px
      rgba(
        10,
        31,
        67,
        0.16
      );
  }

  .about-floating-card
  > svg {
    color:
      var(
        --about-primary
      );
  }

  .about-floating-card
  div {
    display:
      flex;

    flex-direction:
      column;
  }

  .about-floating-card
  strong {
    color:
      var(
        --about-heading
      );

    font-size:
      11px;
  }

  .about-floating-card
  span {
    font-size:
      8px;
  }

  .about-float-one {
    left:
      -45px;

    bottom:
      75px;
  }

  .about-float-two {
    right:
      -35px;

    top:
      75px;
  }

  /* =========================================================
     STATS
  ========================================================= */

  .about-stats-section {
    position:
      relative;

    z-index:
      4;

    margin-top:
      -48px;
  }

  .about-stats-grid {
    display:
      grid;

    grid-template-columns:
      repeat(
        4,
        1fr
      );

    padding:
      8px;

    background:
      white;

    border:
      1px solid
      var(
        --about-border
      );

    border-radius:
      22px;

    box-shadow:
      0 22px 60px
      rgba(
        8,
        33,
        73,
        0.09
      );
  }

  .about-stats-grid
  div {
    padding:
      25px;

    text-align:
      center;
  }

  .about-stats-grid
  strong {
    display:
      block;

    margin-bottom:
      5px;

    color:
      var(
        --about-heading
      );

    font-size:
      28px;
  }

  .about-stats-grid
  span {
    font-size:
      11px;

    font-weight:
      650;
  }

  /* =========================================================
     STORY
  ========================================================= */

  .about-story-section {
    background:
      white;
  }

  .about-story-layout {
    display:
      grid;

    grid-template-columns:
      1.05fr
      0.95fr;

    gap:
      80px;

    align-items:
      center;
  }

  .about-story-layout
  p {
    margin:
      0 0
      16px;

    font-size:
      15px;

    line-height:
      1.85;
  }

  .about-story-card {
    padding:
      38px;

    background:
      radial-gradient(
        circle at 85% 10%,
        rgba(
          109,
          40,
          217,
          0.1
        ),
        transparent
        35%
      ),
      linear-gradient(
        145deg,
        #f3f7ff,
        #ffffff
      );

    border:
      1px solid
      var(
        --about-border
      );

    border-radius:
      28px;

    box-shadow:
      0 25px 70px
      rgba(
        10,
        39,
        82,
        0.08
      );
  }

  .story-card-icon {
    width:
      58px;

    height:
      58px;

    display:
      grid;

    place-items:
      center;

    margin-bottom:
      22px;

    color:
      white;

    background:
      linear-gradient(
        135deg,
        #0758e8,
        #6d28d9
      );

    border-radius:
      17px;

    font-size:
      23px;
  }

  .about-story-card
  > span {
    color:
      var(
        --about-primary
      );

    font-size:
      9px;

    font-weight:
      850;

    letter-spacing:
      0.15em;
  }

  .about-story-card
  h3 {
    margin:
      12px 0
      14px;

    color:
      var(
        --about-heading
      );

    font-size:
      25px;

    line-height:
      1.3;
  }

  .about-story-card
  > p {
    font-size:
      14px;

    line-height:
      1.8;
  }

  .story-check-list {
    display:
      grid;

    grid-template-columns:
      repeat(
        2,
        1fr
      );

    gap:
      13px;

    margin-top:
      24px;
  }

  .story-check-list
  span {
    display:
      flex;

    align-items:
      center;

    gap:
      8px;

    font-size:
      12px;
  }

  .story-check-list
  svg {
    color:
      var(
        --about-green
      );
  }

  /* =========================================================
     MISSION
  ========================================================= */

  .mission-section {
    background:
      #f7f9fd;
  }

  .mission-grid {
    display:
      grid;

    grid-template-columns:
      repeat(
        2,
        1fr
      );

    gap:
      25px;
  }

  .mission-card {
    min-height:
      430px;

    position:
      relative;

    overflow:
      hidden;

    padding:
      42px;

    color:
      white;

    border-radius:
      28px;
  }

  .mission-blue {
    background:
      radial-gradient(
        circle at 90% 10%,
        rgba(
          94,
          158,
          255,
          0.35
        ),
        transparent
        35%
      ),
      linear-gradient(
        145deg,
        #071a37,
        #0e3771
      );
  }

  .mission-purple {
    background:
      radial-gradient(
        circle at 90% 10%,
        rgba(
          170,
          114,
          255,
          0.32
        ),
        transparent
        35%
      ),
      linear-gradient(
        145deg,
        #17103b,
        #3c2176
      );
  }

  .mission-card-number {
    position:
      absolute;

    right:
      30px;

    top:
      20px;

    color:
      rgba(
        255,
        255,
        255,
        0.08
      );

    font-size:
      90px;

    font-weight:
      900;
  }

  .mission-icon {
    width:
      58px;

    height:
      58px;

    display:
      grid;

    place-items:
      center;

    margin-bottom:
      30px;

    color:
      white;

    background:
      rgba(
        255,
        255,
        255,
        0.1
      );

    border:
      1px solid
      rgba(
        255,
        255,
        255,
        0.15
      );

    border-radius:
      17px;

    font-size:
      23px;
  }

  .mission-card
  > span {
    color:
      #7daeff;

    font-size:
      9px;

    font-weight:
      850;

    letter-spacing:
      0.15em;
  }

  .mission-purple
  > span {
    color:
      #c5a7ff;
  }

  .mission-card
  h2 {
    max-width:
      500px;

    margin:
      13px 0
      17px;

    color:
      white;

    font-size:
      clamp(
        2rem,
        3vw,
        2.8rem
      );

    line-height:
      1.08;

    letter-spacing:
      -0.04em;
  }

  .mission-card
  p {
    max-width:
      540px;

    color:
      #b4c5dd;

    font-size:
      14px;

    line-height:
      1.8;
  }

  /* =========================================================
     SERVICES
  ========================================================= */

  .about-services-section {
    background:
      white;
  }

  .about-services-grid {
    display:
      grid;

    grid-template-columns:
      repeat(
        3,
        1fr
      );

    gap:
      24px;
  }

  .about-service-card {
    overflow:
      hidden;

    background:
      white;

    border:
      1px solid
      var(
        --about-border
      );

    border-radius:
      25px;

    box-shadow:
      0 15px 50px
      rgba(
        9,
        35,
        77,
        0.055
      );

    transition:
      transform
      0.3s ease,
      box-shadow
      0.3s ease;
  }

  .about-service-card:hover {
    transform:
      translateY(
        -8px
      );

    box-shadow:
      0 28px 70px
      rgba(
        9,
        35,
        77,
        0.12
      );
  }

  .about-service-image {
    height:
      220px;

    position:
      relative;

    overflow:
      hidden;
  }

  .about-service-image
  img {
    width:
      100%;

    height:
      100%;

    object-fit:
      cover;

    transition:
      transform
      0.4s ease;
  }

  .about-service-card:hover
  .about-service-image
  img {
    transform:
      scale(
        1.05
      );
  }

  .about-service-icon {
    width:
      55px;

    height:
      55px;

    position:
      absolute;

    left:
      22px;

    bottom:
      20px;

    display:
      grid;

    place-items:
      center;

    color:
      white;

    background:
      linear-gradient(
        135deg,
        #0758e8,
        #6d28d9
      );

    border:
      4px solid
      rgba(
        255,
        255,
        255,
        0.85
      );

    border-radius:
      16px;

    font-size:
      21px;
  }

  .about-service-content {
    position:
      relative;

    padding:
      30px;
  }

  .service-index {
    position:
      absolute;

    right:
      25px;

    top:
      25px;

    color:
      #dae4f2;

    font-size:
      30px;

    font-weight:
      850;
  }

  .about-service-content
  h3 {
    margin:
      0 0
      12px;

    color:
      var(
        --about-heading
      );

    font-size:
      21px;
  }

  .about-service-content
  > p {
    min-height:
      100px;

    margin:
      0 0
      22px;

    font-size:
      14px;

    line-height:
      1.75;
  }

  .about-service-points {
    display:
      grid;

    gap:
      10px;
  }

  .about-service-points
  span {
    display:
      flex;

    align-items:
      center;

    gap:
      8px;

    font-size:
      12px;
  }

  .about-service-points
  svg {
    color:
      var(
        --about-green
      );
  }

  /* =========================================================
     VALUES
  ========================================================= */

  .values-section {
    background:
      #f7f9fd;
  }

  .values-grid {
    display:
      grid;

    grid-template-columns:
      repeat(
        4,
        1fr
      );

    gap:
      20px;
  }

  .value-card {
    padding:
      30px;

    text-align:
      center;

    background:
      white;

    border:
      1px solid
      var(
        --about-border
      );

    border-radius:
      22px;

    transition:
      box-shadow
      0.3s ease;
  }

  .value-card:hover {
    box-shadow:
      0 22px 55px
      rgba(
        8,
        31,
        72,
        0.09
      );
  }

  .value-card
  > div {
    width:
      58px;

    height:
      58px;

    display:
      grid;

    place-items:
      center;

    margin:
      0 auto
      20px;

    color:
      white;

    background:
      linear-gradient(
        135deg,
        #0758e8,
        #6d28d9
      );

    border-radius:
      17px;

    font-size:
      22px;
  }

  .value-card
  h3 {
    margin:
      0 0
      10px;

    color:
      var(
        --about-heading
      );

    font-size:
      18px;
  }

  .value-card
  p {
    margin: 0;

    font-size:
      13px;

    line-height:
      1.75;
  }

  /* =========================================================
     JOURNEY
  ========================================================= */

  .journey-section {
    background:
      white;
  }

  .journey-wrapper {
    position:
      relative;

    display:
      grid;

    grid-template-columns:
      repeat(
        4,
        1fr
      );

    gap:
      22px;
  }

  .journey-line {
    height:
      3px;

    position:
      absolute;

    top:
      35px;

    left:
      8%;

    right:
      8%;

    background:
      linear-gradient(
        90deg,
        #0758e8,
        #6d28d9
      );

    opacity:
      0.2;
  }

  .journey-step {
    position:
      relative;

    z-index:
      2;
  }

  .journey-number {
    width:
      70px;

    height:
      70px;

    display:
      grid;

    place-items:
      center;

    margin:
      0 auto
      25px;

    color:
      white;

    background:
      linear-gradient(
        135deg,
        #0758e8,
        #6d28d9
      );

    border:
      8px solid
      white;

    border-radius:
      50%;

    box-shadow:
      0 10px 30px
      rgba(
        7,
        88,
        232,
        0.2
      );

    font-size:
      13px;

    font-weight:
      850;
  }

  .journey-content {
    padding:
      25px;

    text-align:
      center;

    background:
      #fafcff;

    border:
      1px solid
      var(
        --about-border
      );

    border-radius:
      20px;
  }

  .journey-content
  h3 {
    margin:
      0 0
      9px;

    color:
      var(
        --about-heading
      );
  }

  .journey-content
  p {
    margin: 0;

    font-size:
      12px;

    line-height:
      1.7;
  }

  /* =========================================================
     ADVANTAGES
  ========================================================= */

  .advantages-section {
    background:
      #f7f9fd;
  }

  .advantages-layout {
    display:
      grid;

    grid-template-columns:
      0.85fr
      1.15fr;

    gap:
      70px;

    align-items:
      center;
  }

  .advantages-heading
  p {
    font-size:
      15px;

    line-height:
      1.8;
  }

  .advantages-heading
  .about-primary-button {
    margin-top:
      15px;
  }

  .advantages-grid {
    display:
      grid;

    grid-template-columns:
      repeat(
        2,
        1fr
      );

    gap:
      20px;
  }

  .advantage-card {
    padding:
      29px;

    background:
      white;

    border:
      1px solid
      var(
        --about-border
      );

    border-radius:
      21px;
  }

  .advantage-card
  > div {
    width:
      50px;

    height:
      50px;

    display:
      grid;

    place-items:
      center;

    color:
      var(
        --about-primary
      );

    background:
      rgba(
        7,
        88,
        232,
        0.08
      );

    border-radius:
      14px;

    font-size:
      20px;
  }

  .advantage-card
  h3 {
    margin:
      18px 0
      9px;

    color:
      var(
        --about-heading
      );

    font-size:
      17px;
  }

  .advantage-card
  p {
    margin: 0;

    font-size:
      13px;

    line-height:
      1.7;
  }

  /* =========================================================
     CONTENT
  ========================================================= */

  .about-content-section {
    background:
      white;
  }

  .about-content-layout {
    display:
      grid;

    grid-template-columns:
      1.05fr
      0.95fr;

    gap:
      70px;

    align-items:
      center;
  }

  .about-content-layout
  > div:first-child
  p {
    font-size:
      15px;

    line-height:
      1.85;
  }

  .content-feature-grid {
    display:
      grid;

    grid-template-columns:
      repeat(
        2,
        1fr
      );

    gap:
      18px;
  }

  .content-feature-grid
  > div {
    padding:
      27px;

    background:
      linear-gradient(
        145deg,
        #ffffff,
        #f8faff
      );

    border:
      1px solid
      var(
        --about-border
      );

    border-radius:
      21px;
  }

  .content-feature-grid
  svg {
    color:
      var(
        --about-primary
      );

    font-size:
      23px;
  }

  .content-feature-grid
  h3 {
    margin:
      17px 0
      8px;

    color:
      var(
        --about-heading
      );

    font-size:
      16px;
  }

  .content-feature-grid
  p {
    margin: 0;

    font-size:
      12px;

    line-height:
      1.7;
  }

  /* =========================================================
     FINAL CTA
  ========================================================= */

  .about-final-cta {
    position:
      relative;

    overflow:
      hidden;

    padding:
      110px 0;

    color:
      white;

    background:
      linear-gradient(
        135deg,
        #06172f,
        #0c2856
      );
  }

  .about-cta-orb {
    position:
      absolute;

    border-radius:
      50%;

    filter:
      blur(
        90px
      );
  }

  .about-cta-orb-one {
    width:
      350px;

    height:
      350px;

    left:
      -120px;

    top:
      -180px;

    background:
      rgba(
        33,
        117,
        255,
        0.25
      );
  }

  .about-cta-orb-two {
    width:
      400px;

    height:
      400px;

    right:
      -140px;

    bottom:
      -210px;

    background:
      rgba(
        109,
        40,
        217,
        0.25
      );
  }

  .about-final-content {
    max-width:
      860px;

    position:
      relative;

    z-index:
      2;

    margin:
      auto;

    text-align:
      center;
  }

  .about-final-icon {
    width:
      65px;

    height:
      65px;

    display:
      grid;

    place-items:
      center;

    margin:
      0 auto
      20px;

    color:
      white;

    background:
      linear-gradient(
        135deg,
        #2778ff,
        #7652e8
      );

    border-radius:
      19px;

    font-size:
      27px;
  }

  .about-final-content
  > span {
    color:
      #75a9ff;

    font-size:
      10px;

    font-weight:
      850;

    letter-spacing:
      0.16em;
  }

  .about-final-content
  h2 {
    margin:
      15px 0
      20px;

    color:
      white;

    font-size:
      clamp(
        2.5rem,
        5vw,
        4.2rem
      );

    line-height:
      1.04;

    letter-spacing:
      -0.05em;
  }

  .about-final-content
  > p {
    max-width:
      700px;

    margin:
      0 auto
      32px;

    color:
      #b6c6de;

    font-size:
      16px;

    line-height:
      1.8;
  }

  .about-final-actions {
    display:
      flex;

    justify-content:
      center;

    flex-wrap:
      wrap;

    gap:
      11px;
  }

  .about-white-button {
    color:
      var(
        --about-heading
      );

    background:
      white;
  }

  .about-whatsapp-button {
    color:
      white;

    background:
      #14a873;
  }

  .about-whatsapp-button
  svg {
    font-size:
      20px;
  }

  .about-final-trust {
    display:
      flex;

    justify-content:
      center;

    flex-wrap:
      wrap;

    gap:
      25px;

    margin-top:
      32px;
  }

  .about-final-trust
  span {
    display:
      flex;

    align-items:
      center;

    gap:
      7px;

    color:
      #9fb2cf;

    font-size:
      11px;
  }

  .about-final-trust
  svg {
    color:
      #72a8ff;
  }

  /* =========================================================
     TABLET
  ========================================================= */

  @media (
    max-width:
    1024px
  ) {
    .about-hero-layout,
    .about-story-layout,
    .advantages-layout,
    .about-content-layout {
      grid-template-columns:
        1fr;

      gap:
        55px;
    }

    .about-hero-visual {
      max-width:
        680px;

      margin:
        auto;
    }

    .about-services-grid {
      grid-template-columns:
        repeat(
          2,
          1fr
        );
    }

    .about-service-card:last-child {
      grid-column:
        1 / -1;

      max-width:
        calc(
          50% - 12px
        );

      margin:
        auto;
    }

    .values-grid {
      grid-template-columns:
        repeat(
          2,
          1fr
        );
    }

    .journey-wrapper {
      grid-template-columns:
        repeat(
          2,
          1fr
        );
    }

    .journey-line {
      display:
        none;
    }
  }

  /* =========================================================
     MOBILE
  ========================================================= */

  @media (
    max-width:
    768px
  ) {
    .about-container {
      width:
        min(
          100% - 28px,
          1180px
        );
    }

    .about-section {
      padding:
        75px 0;
    }

    .about-hero {
      min-height:
        auto;

      padding:
        90px 0
        110px;
    }

    .about-hero-content {
      text-align:
        center;
    }

    .about-hero-badge {
      margin:
        0 auto
        23px;
    }

    .about-hero-content
    h1 {
      font-size:
        clamp(
          2.7rem,
          13vw,
          4.2rem
        );
    }

    .about-hero-description {
      font-size:
        15px;
    }

    .about-hero-actions,
    .about-hero-points {
      justify-content:
        center;
    }

    .about-hero-actions
    button {
      width:
        100%;
    }

    .about-floating-card {
      display:
        none;
    }

    .about-stats-grid {
      grid-template-columns:
        repeat(
          2,
          1fr
        );
    }

    .mission-grid,
    .about-services-grid,
    .values-grid,
    .journey-wrapper,
    .advantages-grid {
      grid-template-columns:
        1fr;
    }

    .about-service-card:last-child {
      grid-column:
        auto;

      max-width:
        none;
    }

    .story-check-list,
    .content-feature-grid {
      grid-template-columns:
        1fr;
    }

    .mission-card {
      min-height:
        auto;
    }

    .about-story-layout,
    .advantages-heading,
    .about-content-layout
    > div:first-child {
      text-align:
        center;
    }

    .about-final-actions {
      flex-direction:
        column;
    }

    .about-final-actions
    button {
      width:
        100%;
    }
  }

  /* =========================================================
     SMALL MOBILE
  ========================================================= */

  @media (
    max-width:
    480px
  ) {
    .about-hero-content
    h1 {
      font-size:
        2.65rem;
    }

    .about-visual-main-card {
      min-height:
        410px;

      padding:
        28px;
    }

    .about-visual-main-card
    h2 {
      margin-top:
        60px;

      font-size:
        3rem;
    }

    .about-visual-metrics {
      grid-template-columns:
        1fr;
    }

    .about-stats-grid
    div {
      padding:
        20px 8px;
    }

    .about-story-card,
    .mission-card,
    .value-card,
    .advantage-card,
    .content-feature-grid
    > div {
      padding:
        25px;
    }

    .about-service-image {
      height:
        190px;
    }

    .about-service-content {
      padding:
        25px 21px;
    }

    .about-service-content
    > p {
      min-height:
        auto;
    }

    .about-final-content
    h2 {
      font-size:
        2.6rem;
    }
  }

  @media (
    prefers-reduced-motion:
    reduce
  ) {
    * {
      animation-duration:
        0.01ms !important;

      animation-iteration-count:
        1 !important;

      transition-duration:
        0.01ms !important;

      scroll-behavior:
        auto !important;
    }
  }
`;

export default About;