import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaQuoteLeft,
  FaStar,
  FaWhatsapp,
  FaPhone,
  FaGlobe,
  FaCircleCheck,
} from "react-icons/fa6";

const WEBSITE_URL = "https://smyvisiontechnologies.com";
const PHONE_NUMBER = "8500352005";
const PHONE_LINK = "+918500352005";

// POSITION CONTROLS DISPLAY ORDER.
// Example: position: 1 appears first, position: 5 appears fifth.
// If the total number is odd (3, 5, 7...), the last card is centered automatically.
const projects = [
  {
    title: "NKR Car Rentals",
    position: 6,
    category: "Car Rental Website",
    image: "/images/nkr.png",
    fallback:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.nkrselfdrivecarrentals.in/",
    description:
      "A modern car rental website created to present services clearly, improve customer navigation and deliver a polished mobile-first booking experience.",
    tags: ["Responsive Design", "Customer Enquiries", "Mobile Friendly"],
  },
  {
    title: "Bindiya Beauty Salon",
    position: 2,
    category: "Beauty & Salon Website",
    image: "/images/beauty.png",
    fallback:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.bindiyazbeautysalon.in/",
    description:
      "A premium salon website designed to showcase services, strengthen brand identity and give customers a smooth digital experience across every device.",
    tags: ["Premium UI", "Service Showcase", "Brand Presentation"],
  },
  {
    title: "Happy Organize",
    position: 3,
    category: "Home Services Website",
    image: "/images/home.png",
    fallback:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.happyorganize.com/",
    description:
      "A clean professional home-services website with clear service presentation, responsive layouts and a customer-focused journey built around enquiries.",
    tags: ["Service Website", "Responsive Layout", "Lead Focused"],
  },
  {
    title: "Arvis Fertilizers",
    position: 4,
    category: "Agriculture Business Website",
    image: "/images/arvis.png",
    fallback:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.arvisfertilizers.com/",
    description:
      "A modern agriculture-focused digital platform created to strengthen business presentation and communicate products professionally to customers.",
    tags: ["Agriculture", "Product Presentation", "Business Website"],
  },
  {
    title: "Daiva Pesticides",
    position: 5,
    category: "Agriculture Business Website",
    image: "/images/daiva.png",
    fallback:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.daivapesticides.com/",
    description:
      "A modern agriculture-focused digital platform created to strengthen business presentation and communicate products professionally to customers.",
    tags: ["Agriculture", "Product Presentation", "Business Website"],
  },
  {
  "title": "Yatheendra Engineereing Works",
  "position": 2,
  "category": "Welding & Fabrication Business Website",
  "image": "/images/yath.png",
  "fallback": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
  "url": "https://yatheendraengineeringworks.vercel.app/",
  "description": "A modern industrial fabrication digital platform created to strengthen business presentation and communicate welding services professionally to customers.",
  "tags": ["Welding", "Metal Fabrication", "Industrial Services", "Business Website"]
}
  
];

// REVIEWS ALSO FOLLOW THE SAME POSITION SYSTEM.
// Change only the position number when you want to reorder a review.
const reviews = [
  {
    name: "NKR Car Rentals",
    position: 1,
    role: "Car Rental Business",
    review:
      "I am extremely satisfied with the website design. The work was done neatly and exactly according to my requirements. Thank you SMYVISION TECHNOLOGIES for the great support and service.",
  },
  {
    name: "Bindiya Beauty Salon",
    position: 2,
    role: "Beauty & Salon",
    review:
      "SMYVISION TECHNOLOGIES understood our requirements and created a beautiful website that represents our salon professionally.",
  },
  {
    name: "Happy Organize",
    position: 3,
    role: "Home Services",
    review: "Super happy with the work. Highly recommend it!",
  },
  {
    name: "Arvis Fertilizers",
    position: 4,
    role: "Agriculture Business",
    review:
      "The team delivered a professional digital platform with a clean structure and responsive design that supports our business presentation.",
  },
  
];

const sortByPosition = (items) =>
  [...items].sort((a, b) => (a.position ?? 999) - (b.position ?? 999));

const portfolioStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${WEBSITE_URL}/portfolio#portfolio`,
      "url": `${WEBSITE_URL}/portfolio`,
      "name": "SMYVISION TECHNOLOGIES Web Development Portfolio Vijayawada",
      "headline": "Web Development Portfolio in Vijayawada",
      "description":
        "Explore selected website development, web design, custom web development, e-commerce and web application projects by SMYVISION TECHNOLOGIES, a web development company in Vijayawada.",
      "keywords": [
        "Web Development Company in Vijayawada",
        "Website Development in Vijayawada",
        "Web Design Company in Vijayawada",
        "Custom Web Development in Vijayawada",
        "Custom Web Application Development in Vijayawada",
        "E-commerce Website Development in Vijayawada",
        "Responsive Web Design in Vijayawada",
        "Website Designers in Vijayawada",
        "Website Developers in Vijayawada",
        "Business Website Development in Vijayawada"
      ],
      "spatialCoverage": {
        "@type": "City",
        "name": "Vijayawada",
        "containedInPlace": {
          "@type": "State",
          "name": "Andhra Pradesh"
        }
      },
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${WEBSITE_URL}/#website`,
        "url": WEBSITE_URL,
        "name": "SMYVISION TECHNOLOGIES"
      },
      "mentions": { "@id": `${WEBSITE_URL}/portfolio#custom-web-development-service` },
      "about": {
        "@type": "ProfessionalService",
        "@id": `${WEBSITE_URL}/#organization`,
        "name": "SMYVISION TECHNOLOGIES",
        "url": WEBSITE_URL,
        "telephone": PHONE_LINK,
        "knowsAbout": [
          "Web Development Company in Vijayawada",
          "Website Development in Vijayawada",
          "Web Design Company in Vijayawada",
          "Custom Web Development in Vijayawada",
          "Custom Web Application Development in Vijayawada",
          "E-commerce Website Development in Vijayawada",
          "Responsive Web Design in Vijayawada",
          "Website Designers in Vijayawada",
          "Website Developers in Vijayawada",
          "Business Website Development in Vijayawada",
          "Business Automation"
        ],
        "areaServed": [
          { "@type": "City", "name": "Vijayawada" },
          { "@type": "State", "name": "Andhra Pradesh" },
          { "@type": "Country", "name": "India" }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": `${WEBSITE_URL}/portfolio#custom-web-development-service`,
      "name": "Custom Web Development in Vijayawada",
      "serviceType": "Custom Web Development",
      "description": "Custom web development services in Vijayawada including business websites, custom web applications, portals, dashboards, e-commerce websites and scalable digital platforms.",
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
      "@type": "ItemList",
      "@id": `${WEBSITE_URL}/portfolio#projects`,
      "name": "Website Projects by SMYVISION TECHNOLOGIES",
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "numberOfItems": projects.length,
      "itemListElement": sortByPosition(projects).map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": project.title,
        "url": project.url || `${WEBSITE_URL}/portfolio`
      }))
    }
  ]
};

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Portfolio = () => {
  const sortedProjects = sortByPosition(projects);
  const sortedReviews = sortByPosition(reviews);
  const openProject = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi SMYVISION TECHNOLOGIES, I would like to discuss a website or digital solution for my business."
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

  const goToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <Helmet>
        <title>
          Web Development Portfolio in Vijayawada | SMYVISION TECHNOLOGIES
        </title>

        <meta
          name="description"
          content="Explore website development, web design, custom web development, e-commerce and web application projects by SMYVISION TECHNOLOGIES, a web development company in Vijayawada."
        />


        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="SMYVISION TECHNOLOGIES" />
        <meta name="publisher" content="SMYVISION TECHNOLOGIES" />
        <meta
          name="keywords"
          content="web development company in Vijayawada, website development company in Vijayawada, web design company in Vijayawada, website developers in Vijayawada, website designers in Vijayawada, custom web development Vijayawada, custom web application development Vijayawada, e-commerce website development Vijayawada, responsive web design Vijayawada, business website development Vijayawada, professional website development Vijayawada"
        />

        {/* OPEN GRAPH */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SMYVISION TECHNOLOGIES" />
        <meta property="og:title" content="Web Development Portfolio in Vijayawada | SMYVISION TECHNOLOGIES" />
        <meta
          property="og:description"
          content="Selected website development, web design, custom web development, e-commerce and web application projects by SMYVISION TECHNOLOGIES in Vijayawada."
        />
        <meta property="og:url" content={`${WEBSITE_URL}/portfolio`} />
        <meta property="og:image" content={`${WEBSITE_URL}/Logo.png`} />
        <meta property="og:image:alt" content="SMYVISION TECHNOLOGIES web development portfolio Vijayawada" />

        {/* TWITTER / SOCIAL PREVIEW */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SMYVISION TECHNOLOGIES Web Development Portfolio Vijayawada" />
        <meta
          name="twitter:description"
          content="Explore selected website development, custom web development, e-commerce and web application projects by SMYVISION TECHNOLOGIES in Vijayawada."
        />
        <meta name="twitter:image" content={`${WEBSITE_URL}/Logo.png`} />
        <meta name="twitter:image:alt" content="SMYVISION TECHNOLOGIES web development portfolio Vijayawada" />

        <link rel="canonical" href={`${WEBSITE_URL}/portfolio`} />

        {/* SEO + LOCAL ENTITY + AEO/GEO STRUCTURED DATA */}
        <script type="application/ld+json">
          {JSON.stringify(portfolioStructuredData)}
        </script>
      </Helmet>

      <style>{styles}</style>

      <main className="portfolio-page">
        {/* HERO */}
        <section className="portfolio-hero">

          <div className="portfolio-container portfolio-hero-inner">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="portfolio-hero-copy"
            >
              <span className="portfolio-eyebrow">
                SELECTED WORK · SMYVISION TECHNOLOGIES
              </span>

              <h1>
                Websites That Build Trust
                <span>and Turn Visitors Into Clients.</span>
              </h1>

              <p>
                We build business websites and custom web solutions with a clear purpose —
                to present your brand professionally, guide customers toward the right
                action and help turn online visitors into genuine enquiries and clients.
              </p>

              <div className="portfolio-hero-actions">
                <button type="button" className="portfolio-primary" onClick={goToContact}>
                  Start Your Project <FaArrowRight />
                </button>

                <button
                  type="button"
                  className="portfolio-whatsapp"
                  onClick={openWhatsApp}
                >
                  <FaWhatsapp /> WhatsApp Us
                </button>
              </div>
            </motion.div>

            <motion.div
              className="portfolio-hero-card"
              initial={{ opacity: 0, x: 45, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-card-top">
                <span>OUR APPROACH</span>
                <FaGlobe />
              </div>

              <h3>Designed around your business.</h3>
              <p>
                Every project begins with understanding your goals, audience and
                the action you want customers to take.
              </p>

              <div className="hero-card-points">
                <span><FaCircleCheck /> Premium presentation</span>
                <span><FaCircleCheck /> Responsive experience</span>
                <span><FaCircleCheck /> Conversion-focused structure</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="portfolio-section">
          <div className="portfolio-container">
            <motion.div
              className="portfolio-section-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span>FEATURED PROJECTS</span>
              <h2>Real Websites. Real Businesses. Real Digital Experiences.</h2>
              <p>
                Click any project to visit the live website and experience it
                directly.
              </p>
            </motion.div>

            <div className="project-grid">
              {sortedProjects.map((project, index) => (
                <motion.article
                  className="project-card"
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 45,
                    x: index % 2 === 0 ? -20 : 20,
                  }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => openProject(project.url)}
                >
                  <div className="project-image-wrap">
                    <img
                      src={project.image}
                      alt={`${project.title} website`}
                      onError={(event) => {
                        if (
                          project.fallback &&
                          event.currentTarget.src !== project.fallback
                        ) {
                          event.currentTarget.src = project.fallback;
                        }
                      }}
                    />

                    <div className="project-image-overlay" />

                    <motion.div
                      className="project-open-button"
                      whileHover={{ scale: 1.08 }}
                    >
                      <FaArrowUpRightFromSquare />
                    </motion.div>

                    <div className="project-category">{project.category}</div>
                  </div>

                  <div className="project-content">
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      <FaArrowUpRightFromSquare />
                    </div>

                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        openProject(project.url);
                      }}
                    >
                      View Live Website <FaArrowRight />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="portfolio-startup-note"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>WE'RE JUST GETTING STARTED</span>
              <h3>
                This portfolio shows where we’ve been.
                <strong> What we’re building next is even bigger.</strong>
              </h3>
              <p>
                As a growing startup, several new digital experiences are quietly
                taking shape behind the scenes — each one focused on creating real
                business value, stronger customer trust and better opportunities
                for growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="reviews-section">
          <div className="portfolio-container">
            <motion.div
              className="portfolio-section-header light"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span>CLIENT REVIEWS</span>
              <h2>What Our Clients Say About Working With Us.</h2>
              <p>
                Feedback from businesses we have worked with across different
                industries.
              </p>
            </motion.div>

            <div className="reviews-grid">
              {sortedReviews.map((review, index) => (
                <motion.article
                  className="review-card"
                  key={review.name}
                  initial={{ opacity: 0, y: 36, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.62,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8 }}
                >
                  <div className="review-top">
                    <div className="review-quote">
                      <FaQuoteLeft />
                    </div>

                    <div className="review-stars">
                      {[1, 2, 3, 4, 5].map((star, starIndex) => (
                        <motion.span
                          key={star}
                          animate={{
                            scale: [1, 1.24, 1],
                            filter: [
                              "drop-shadow(0 0 0 rgba(244,178,29,0))",
                              "drop-shadow(0 0 8px rgba(244,178,29,.65))",
                              "drop-shadow(0 0 0 rgba(244,178,29,0))",
                            ],
                          }}
                          transition={{
                            duration: 1.7,
                            repeat: Infinity,
                            delay: starIndex * 0.14 + index * 0.07,
                          }}
                        >
                          <FaStar />
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <p>"{review.review}"</p>

                  <div className="review-client">
                    <div>{review.name.charAt(0)}</div>
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

        {/* CTA */}
        <section className="portfolio-cta-section">
          <div className="portfolio-container">
            <motion.div
              className="portfolio-cta"
              initial={{ opacity: 0, y: 42, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>YOUR PROJECT COULD BE NEXT</span>

              <h2>Need a website that deserves a place in this portfolio?</h2>

              <p>
                We design and develop business websites, custom web applications,
                e-commerce platforms and digital experiences tailored to your goals.
              </p>

              <button
                type="button"
                className="portfolio-primary portfolio-cta-button"
                onClick={goToContact}
              >
                Start Your Project <FaArrowRight />
              </button>

              <div className="portfolio-contact-wrap">
                <span>GET IN TOUCH WITH SMYVISION TECHNOLOGIES</span>

                <div className="portfolio-contact-actions">
                  <button
                    type="button"
                    className="contact-icon-button whatsapp"
                    onClick={openWhatsApp}
                    aria-label="Contact SMYVISION TECHNOLOGIES on WhatsApp"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    className="contact-icon-button phone"
                    onClick={callNow}
                    aria-label="Call SMYVISION TECHNOLOGIES"
                  >
                    <FaPhone />
                    <span>Call Us</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

const styles = `
  :root {
    --portfolio-primary: #0758e8;
    --portfolio-primary-dark: #063eaa;
    --portfolio-secondary: #6d28d9;
    --portfolio-navy: #081c38;
    --portfolio-text: #314761;
    --portfolio-muted: #6f7f92;
    --portfolio-line: #dce6f3;
    --portfolio-soft: #f5f8fd;
    --portfolio-white: #ffffff;
  }

  * {
    box-sizing: border-box;
  }

  .portfolio-page {
    overflow: hidden;
    background: #fff;
    color: var(--portfolio-navy);
  }

  .portfolio-container {
    width: min(1180px, calc(100% - 44px));
    margin: 0 auto;
  }

  .portfolio-hero {
    position: relative;
    overflow: hidden;
    padding: 145px 0 90px;
    background: linear-gradient(180deg, #fff 0%, #f8fbff 100%);
  }

  .portfolio-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(4px);
    pointer-events: none;
  }

  .portfolio-orb-one {
    width: 340px;
    height: 340px;
    top: -120px;
    right: -80px;
    background: rgba(7,88,232,.07);
  }

  .portfolio-orb-two {
    width: 240px;
    height: 240px;
    left: -100px;
    bottom: -80px;
    background: rgba(109,40,217,.055);
  }

  .portfolio-hero-inner {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.12fr .88fr;
    align-items: center;
    gap: 70px;
  }

  .portfolio-eyebrow,
  .portfolio-section-header > span,
  .portfolio-cta > span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--portfolio-primary);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: .15em;
  }

  .portfolio-eyebrow::before {
    content: "";
    width: 30px;
    height: 2px;
    background: var(--portfolio-primary);
  }

  .portfolio-hero-copy h1 {
    max-width: 760px;
    margin: 18px 0 22px;
    font-size: clamp(3rem, 5.5vw, 5.8rem);
    line-height: .98;
    letter-spacing: -.055em;
  }

  .portfolio-hero-copy h1 span {
    display: block;
    margin-top: 9px;
    color: var(--portfolio-primary);
  }

  .portfolio-hero-copy > p {
    max-width: 700px;
    margin: 0;
    color: var(--portfolio-text);
    font-size: 17px;
    line-height: 1.8;
  }

  .portfolio-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    margin-top: 32px;
  }

  .portfolio-primary,
  .portfolio-whatsapp {
    min-height: 54px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 23px;
    border-radius: 14px;
    font: inherit;
    font-weight: 800;
    cursor: pointer;
    transition: .3s ease;
  }

  .portfolio-primary {
    border: 1px solid var(--portfolio-primary);
    color: white;
    background: linear-gradient(
      135deg,
      var(--portfolio-primary),
      var(--portfolio-primary-dark)
    );
    box-shadow: 0 14px 30px rgba(7,88,232,.18);
  }

  .portfolio-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 38px rgba(7,88,232,.25);
  }

  .portfolio-whatsapp {
    border: 1px solid #d9e5ef;
    color: #0c855e;
    background: white;
  }

  .portfolio-whatsapp:hover {
    transform: translateY(-3px);
    border-color: rgba(13,167,112,.32);
    box-shadow: 0 14px 30px rgba(13,167,112,.08);
  }

  .portfolio-hero-card {
    position: relative;
    padding: 34px;
    overflow: hidden;
    border: 1px solid rgba(7,88,232,.14);
    border-radius: 28px;
    background:
      linear-gradient(145deg, rgba(255,255,255,.96), rgba(245,249,255,.98));
    box-shadow: 0 30px 80px rgba(8,28,56,.10);
  }


  .hero-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--portfolio-primary);
  }

  .hero-card-top span {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .15em;
  }

  .hero-card-top svg {
    font-size: 26px;
  }

  .portfolio-hero-card h3 {
    position: relative;
    z-index: 1;
    margin: 28px 0 12px;
    font-size: 32px;
    line-height: 1.08;
  }

  .portfolio-hero-card p {
    position: relative;
    z-index: 1;
    color: var(--portfolio-text);
    line-height: 1.75;
  }

  .hero-card-points {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 12px;
    margin-top: 25px;
  }

  .hero-card-points span {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #263f5e;
    font-size: 14px;
    font-weight: 700;
  }

  .hero-card-points svg {
    color: #13a976;
  }

  .portfolio-section {
    padding: 100px 0;
    background: #fff;
  }

  .portfolio-section-header {
    max-width: 760px;
    margin: 0 auto 50px;
    text-align: center;
  }

  .portfolio-section-header h2 {
    margin: 12px 0 14px;
    font-size: clamp(2.4rem, 4.5vw, 4rem);
    line-height: 1.05;
    letter-spacing: -.045em;
  }

  .portfolio-section-header p {
    max-width: 650px;
    margin: 0 auto;
    color: var(--portfolio-muted);
    font-size: 15px;
    line-height: 1.75;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }

  .project-card {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--portfolio-line);
    border-radius: 26px;
    background: white;
    box-shadow: 0 16px 45px rgba(8,28,56,.055);
    cursor: pointer;
    transition:
      transform .5s cubic-bezier(.22,1,.36,1),
      box-shadow .5s cubic-bezier(.22,1,.36,1),
      border-color .4s ease;
  }

  .project-grid > .project-card:last-child:nth-child(odd),
  .reviews-grid > .review-card:last-child:nth-child(odd) {
    grid-column: 1 / -1;
    width: calc(50% - 14px);
    justify-self: center;
  }

  .project-card:hover {
    transform: translateY(-11px);
    border-color: rgba(7,88,232,.24);
    box-shadow:
      0 32px 75px rgba(8,28,56,.13),
      0 12px 30px rgba(7,88,232,.07);
  }

  .project-image-wrap {
    position: relative;
    height: 330px;
    overflow: hidden;
    background: #edf3fb;
  }

  .project-image-wrap img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform .8s cubic-bezier(.22,1,.36,1);
  }

  .project-card:hover .project-image-wrap img {
    transform: scale(1.075);
  }

  .project-image-overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, transparent 50%, rgba(4,18,38,.38) 100%);
  }

  .project-open-button {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 47px;
    height: 47px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: var(--portfolio-primary);
    background: rgba(255,255,255,.94);
    box-shadow: 0 10px 26px rgba(0,0,0,.11);
  }

  .project-category {
    position: absolute;
    left: 18px;
    bottom: 18px;
    padding: 9px 12px;
    border-radius: 999px;
    color: #fff;
    background: rgba(5,27,57,.78);
    backdrop-filter: blur(10px);
    font-size: 11px;
    font-weight: 800;
  }

  .project-content {
    padding: 27px;
  }

  .project-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .project-title-row h3 {
    margin: 0;
    font-size: 25px;
  }

  .project-title-row > svg {
    color: var(--portfolio-primary);
  }

  .project-content > p {
    margin: 13px 0 20px;
    color: var(--portfolio-text);
    font-size: 14px;
    line-height: 1.75;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .project-tags span {
    padding: 8px 11px;
    border: 1px solid #e0e8f3;
    border-radius: 999px;
    color: #526981;
    background: #f8fbff;
    font-size: 10.5px;
    font-weight: 700;
  }

  .project-content button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 23px;
    padding: 0;
    border: 0;
    color: var(--portfolio-primary);
    background: transparent;
    font: inherit;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
  }

  .project-content button svg {
    transition: transform .25s ease;
  }

  .project-card:hover .project-content button svg {
    transform: translateX(5px);
  }

  .portfolio-startup-note {
    max-width: 920px;
    margin: 58px auto 0;
    padding: 38px 42px;
    text-align: center;
    border: 1px solid #dce6f2;
    border-radius: 20px;
    background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
    box-shadow: 0 18px 55px rgba(8,28,56,.07);
  }

  .portfolio-startup-note > span {
    display: inline-block;
    margin-bottom: 13px;
    color: var(--portfolio-primary);
    font-size: 10px;
    font-weight: 850;
    letter-spacing: .17em;
  }

  .portfolio-startup-note h3 {
    max-width: 760px;
    margin: 0 auto;
    color: var(--portfolio-navy);
    font-size: clamp(1.7rem, 3vw, 2.65rem);
    line-height: 1.18;
    letter-spacing: -.035em;
  }

  .portfolio-startup-note h3 strong {
    color: var(--portfolio-primary);
    font-weight: 850;
  }

  .portfolio-startup-note p {
    max-width: 730px;
    margin: 18px auto 0;
    color: var(--portfolio-text);
    font-size: 14px;
    line-height: 1.8;
  }

  .reviews-section {
    position: relative;
    padding: 100px 0;
    overflow: hidden;
    background:
      radial-gradient(circle at 90% 10%, rgba(51,109,244,.19), transparent 30%),
      linear-gradient(135deg, #071a35 0%, #09254d 100%);
  }

  .portfolio-section-header.light > span {
    color: #89adff;
  }

  .portfolio-section-header.light h2 {
    color: white;
  }

  .portfolio-section-header.light p {
    color: #b8c7dc;
  }

  .reviews-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
  }

  .review-card {
    padding: 28px;
    border: 1px solid rgba(255,255,255,.10);
    border-radius: 22px;
    background: rgba(255,255,255,.075);
    backdrop-filter: blur(14px);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.07);
    transition: border-color .3s ease, background .3s ease;
  }

  .review-card:hover {
    border-color: rgba(137,173,255,.26);
    background: rgba(255,255,255,.095);
  }

  .review-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .review-quote {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    color: #9ab9ff;
    background: rgba(7,88,232,.18);
  }

  .review-stars {
    display: flex;
    gap: 4px;
    color: #f4b21d;
  }

  .review-stars span {
    display: grid;
    place-items: center;
  }

  .review-card > p {
    min-height: 100px;
    margin: 22px 0;
    color: #e4ebf5;
    font-size: 14px;
    line-height: 1.8;
  }

  .review-client {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .review-client > div {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: white;
    background: linear-gradient(
      135deg,
      var(--portfolio-primary),
      var(--portfolio-secondary)
    );
    font-weight: 800;
  }

  .review-client span {
    display: grid;
    gap: 3px;
  }

  .review-client strong {
    color: white;
    font-size: 13px;
  }

  .review-client small {
    color: #a8bbd3;
    font-size: 11px;
  }

  .portfolio-cta-section {
    padding: 100px 0;
    background: #f7faff;
  }

  .portfolio-cta {
    position: relative;
    overflow: hidden;
    padding: 70px 42px;
    text-align: center;
    border: 1px solid rgba(7,88,232,.14);
    border-radius: 32px;
    background:
      radial-gradient(circle at 10% 0%, rgba(7,88,232,.10), transparent 28%),
      radial-gradient(circle at 90% 100%, rgba(109,40,217,.09), transparent 30%),
      white;
    box-shadow: 0 30px 90px rgba(8,28,56,.09);
  }

  .portfolio-cta h2 {
    max-width: 850px;
    margin: 15px auto;
    font-size: clamp(2.5rem, 5vw, 4.6rem);
    line-height: 1.04;
    letter-spacing: -.05em;
  }

  .portfolio-cta > p {
    max-width: 710px;
    margin: 0 auto;
    color: var(--portfolio-text);
    font-size: 16px;
    line-height: 1.8;
  }

  .portfolio-cta-button {
    margin-top: 28px;
  }

  .portfolio-contact-wrap {
    margin-top: 45px;
    padding-top: 34px;
    border-top: 1px solid #dce6f2;
  }

  .portfolio-contact-wrap > span {
    display: block;
    color: #506781;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .14em;
  }

  .portfolio-contact-actions {
    display: flex;
    justify-content: center;
    gap: 14px;
    margin-top: 18px;
  }

  .contact-icon-button {
    min-width: 135px;
    min-height: 52px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 0 17px;
    border-radius: 14px;
    font: inherit;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    transition: .3s ease;
  }

  .contact-icon-button svg {
    font-size: 20px;
  }

  .contact-icon-button.whatsapp {
    border: 1px solid rgba(16,176,112,.18);
    color: #0c8c61;
    background: #eefbf6;
  }

  .contact-icon-button.phone {
    border: 1px solid rgba(7,88,232,.16);
    color: var(--portfolio-primary);
    background: #eff5ff;
  }

  .contact-icon-button:hover {
    transform: translateY(-4px);
    box-shadow: 0 13px 28px rgba(8,28,56,.09);
  }

  @media (max-width: 980px) {
    .portfolio-hero-inner {
      grid-template-columns: 1fr;
      gap: 45px;
    }

    .portfolio-hero-copy {
      max-width: 760px;
      margin: 0 auto;
      text-align: center;
    }

    .portfolio-eyebrow {
      justify-content: center;
    }

    .portfolio-hero-copy > p {
      margin-left: auto;
      margin-right: auto;
    }

    .portfolio-hero-actions {
      justify-content: center;
    }

    .portfolio-hero-card {
      max-width: 650px;
      margin: 0 auto;
    }
  }

  @media (max-width: 760px) {
    .portfolio-container {
      width: min(100% - 28px, 1180px);
    }

    .portfolio-hero {
      padding: 125px 0 70px;
    }

    .portfolio-hero-copy h1 {
      font-size: clamp(2.75rem, 12vw, 4.25rem);
    }

    .portfolio-section,
    .reviews-section,
    .portfolio-cta-section {
      padding: 75px 0;
    }

    .project-grid,
    .reviews-grid {
      grid-template-columns: 1fr;
    }

    .project-grid > .project-card:last-child:nth-child(odd),
    .reviews-grid > .review-card:last-child:nth-child(odd) {
      grid-column: auto;
      width: 100%;
      justify-self: stretch;
    }

    .project-image-wrap {
      height: 290px;
    }

    .review-card > p {
      min-height: auto;
    }

    .portfolio-cta {
      padding: 55px 22px;
    }
  }

  @media (max-width: 520px) {
    .portfolio-hero {
      padding-top: 120px;
    }

    .portfolio-hero-actions {
      display: grid;
      width: 100%;
    }

    .portfolio-primary,
    .portfolio-whatsapp {
      width: 100%;
    }

    .portfolio-hero-card {
      padding: 27px 22px;
      border-radius: 23px;
    }

    .portfolio-hero-card h3 {
      font-size: 27px;
    }

    .portfolio-section-header h2 {
      font-size: 2.25rem;
    }

    .portfolio-startup-note {
      margin-top: 42px;
      padding: 30px 20px;
      border-radius: 17px;
    }

    .portfolio-startup-note p {
      font-size: 13px;
    }

    .project-image-wrap {
      height: 235px;
    }

    .project-content {
      padding: 22px;
    }

    .project-title-row h3 {
      font-size: 22px;
    }

    .portfolio-contact-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .contact-icon-button {
      min-width: 0;
    }
  }

  @media (max-width: 380px) {
    .portfolio-contact-actions {
      grid-template-columns: 1fr;
    }
  }
`;

export default Portfolio;
