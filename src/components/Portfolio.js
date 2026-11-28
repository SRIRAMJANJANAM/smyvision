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
  FaBookOpen,
  FaLayerGroup,
} from "react-icons/fa6";

const WEBSITE_URL = "https://www.smyvisiontechnologies.com";
const PHONE_NUMBER = "8500352005";
const PHONE_LINK = "+918500352005";

// POSITION CONTROLS DISPLAY ORDER.
// Example: position: 1 appears first, position: 5 appears fifth.
// If the total number is odd (3, 5, 7...), the last card is centered automatically.
const projects = [
  {
    title: "The Viceroy Collection",
    position: 1,
    category: "Luxury Furniture & Woodcraft Website",
    image: "/images/viceroy.webp",
    fallback:
      "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.theviceroycollection.com/",
    description:
      "A premium furniture and craftsmanship website designed to showcase handcrafted solid wood furniture, luxury wooden doors and bespoke architectural elements. Featuring fine hardwoods such as teak, mahogany and rosewood, the website reflects timeless craftsmanship, hand-carved detailing and furniture designed to last for generations.",
    tags: [
      "Luxury Furniture",
      "Solid Wood Craftsmanship",
      "Handcrafted Furniture",
      "Architectural Elements",
      "Premium Business Website",
    ],
  },
  {
    title: "Siva Pigeon Nets & Invisible Grills",
    position: 2,
    category: "Safety Nets & Invisible Grills Website",
    image: "/images/siva.webp",
    fallback:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.sivapigeonnetsinvisiblegrills.in/",
    description:
      "A professional safety solutions website designed to showcase pigeon nets, balcony safety nets, invisible grills, bird protection and residential safety services. Built to highlight installation solutions, build customer trust and help customers easily connect for service enquiries.",
    tags: [
      "Pigeon Nets",
      "Invisible Grills",
      "Balcony Safety Nets",
      "Bird Protection",
      "Business Website",
    ],
  },
  {
    title: "JK Scaffolding",
    position: 3,
    category: "Scaffolding & Construction Equipment Website",
    image: "/images/scaffolding.webp",
    fallback:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.jkscaffoldings.com/",
    description:
      "A professional scaffolding business website designed to showcase scaffolding systems, centering materials, rental services and construction support solutions for residential, commercial and industrial projects.",
    tags: [
      "Scaffolding",
      "Construction Equipment",
      "Rental Services",
      "Business Website",
    ],
  },
  {
    title: "Punjabi Dhol",
    position: 4,
    category: "Event Entertainment & Dhol Booking Website",
    image: "/images/dhol.webp",
    fallback:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.punjabidhol.in/",
    description:
      "A vibrant event entertainment website designed to showcase Punjabi Dhol performances and celebration services for weddings, baraats, private parties and corporate events. Built to highlight traditional Punjabi energy, simplify enquiries and help customers arrange unforgettable celebrations.",
    tags: [
      "Punjabi Dhol",
      "Wedding Events",
      "Live Entertainment",
      "Event Booking",
      "Business Website",
    ],
  },
  {
    title: "Dandeli Adventure Thrills",
    position: 5,
    category: "Adventure Tourism & Resort Booking Website",
    image: "/images/dandeli.webp",
    fallback:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.dandeliadventurethrills.com/",
    description:
      "An adventure and tourism website designed to showcase Dandeli getaway experiences, river rafting, jungle adventures, resorts, homestays and camping packages. Built to help families, friends, couples and groups discover memorable nature escapes and easily enquire about bookings.",
    tags: [
      "Adventure Tourism",
      "River Rafting",
      "Resort Booking",
      "Jungle Adventures",
      "Travel Website",
    ],
  },
  {
    title: "AK Paul Electronics",
    position: 6,
    category: "Home Appliance Repair Service Website",
    image: "/images/ak-paul-electronics.webp",
    fallback:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.customerserviceonline.co.in/",
    description:
      "A professional home appliance repair website created to showcase AC, washing machine and refrigerator repair services, build customer trust, and make it easy for customers across Kolkata to book affordable repair services.",
    tags: [
      "AC Repair",
      "Washing Machine Repair",
      "Refrigerator Repair",
      "Appliance Service",
    ],
  },
  {
    title: "Venkat Safety Nets",
    position: 7,
    category: "Safety Nets & Protection Solutions Website",
    image: "/images/venkat.webp",
    fallback:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.venkatsafetynets.com/",
    description:
      "A professional safety nets business website designed to showcase balcony safety nets, pigeon nets, sports nets, construction safety nets and other protection solutions. Built to highlight safety services, build customer trust and make it easy for customers to enquire about installation services.",
    tags: [
      "Safety Nets",
      "Balcony Protection",
      "Pigeon Nets",
      "Construction Safety",
      "Business Website",
    ],
  },
  {
    title: "JK Decors & Events",
    position: 8,
    category: "Event Management & Decoration Website",
    image: "/images/jkdecors.webp",
    fallback:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.jkdecors.com/",
    description:
      "A premium event decoration website created to showcase wedding, reception, birthday and celebration services, highlight completed events, and help customers easily connect with JK Decors & Events.",
    tags: [
      "Event Decoration",
      "Wedding Decor",
      "Event Management",
      "Business Website",
    ],
  },
  {
    title: "Aditya Car AC Specialist",
    position: 9,
    category: "Car AC Service Website",
    image: "/images/aditya.webp",
    fallback:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.adityacarairconditioners.com/",
    description:
      "A modern automotive service website created to showcase professional car AC services, build customer trust, and make it easy for customers to enquire and connect with Aditya Car AC Specialist.",
    tags: [
      "Car AC Service",
      "Automotive",
      "AC Repair",
      "Business Website",
    ],
  },
  {
    title: "My Dentist Banglore",
    position: 10,
    category: "Hospital Website",
    image: "/images/mydentist.webp",
    fallback:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.mydentistbangalore.com/",
    description:
      "A modern dental care digital platform created to build trust, showcase professional dental services, and help patients easily connect with My Dentist Bangalore.",
    tags: [
      "Dental Care",
      "Dentist",
      "Healthcare",
      "Business Website",
    ],
  },
  {
    title: "RNS Safety Nets Vizag",
    position: 11,
    category: "Safety Nets & Protection Solutions Website",
    image: "/images/rns.webp",
    fallback:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.rnssafetynetsvizag.com/",
    description:
      "A professional safety nets website developed to showcase balcony safety nets, pigeon nets, children and pet safety nets, construction nets, sports nets and industrial protection solutions across Vizag. Designed to highlight services, build customer trust and make enquiries easy through call and WhatsApp integration.",
    tags: [
      "Safety Nets",
      "Pigeon Nets",
      "Balcony Protection",
      "Construction Safety",
      "Business Website",
    ],
  },
  {
    title: "Daiva Pesticides",
    position: 12,
    category: "Agriculture Business Website",
    image: "/images/daiva.webp",
    fallback:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.daivapesticides.com/",
    description:
      "A modern agriculture-focused digital platform created to strengthen business presentation and communicate products professionally to customers.",
    tags: [
      "Agriculture",
      "Product Presentation",
      "Business Website",
    ],
  },
  {
    title: "Arvis Fertilizers",
    position: 13,
    category: "Agriculture Business Website",
    image: "/images/arvis.webp",
    fallback:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.arvisfertilizers.com/",
    description:
      "A modern agriculture-focused digital platform created to strengthen business presentation and communicate products professionally to customers.",
    tags: [
      "Agriculture",
      "Product Presentation",
      "Business Website",
    ],
  },
  {
    title: "NKR Car Rentals",
    position: 14,
    category: "Car Rental Website",
    image: "/images/nkr.webp",
    fallback:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.nkrselfdrivecarrentals.in/",
    description:
      "A modern car rental website created to present services clearly, improve customer navigation and deliver a polished mobile-first booking experience.",
    tags: [
      "Responsive Design",
      "Customer Enquiries",
      "Mobile Friendly",
    ],
  },
  {
    title: "Yatheendra Engineereing Works",
    position: 15,
    category: "Welding & Fabrication Business Website",
    image: "/images/yath.webp",
    fallback:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
    url: "https://yatheendraengineeringworks.vercel.app/",
    description:
      "A modern industrial fabrication digital platform created to strengthen business presentation and communicate welding services professionally to customers.",
    tags: [
      "Welding",
      "Metal Fabrication",
      "Industrial Services",
      "Business Website",
    ],
  },
  {
    title: "Happy Organize",
    position: 16,
    category: "Home Services Website",
    image: "/images/home.webp",
    fallback:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.happyorganize.com/",
    description:
      "A clean professional home-services website with clear service presentation, responsive layouts and a customer-focused journey built around enquiries.",
    tags: [
      "Service Website",
      "Responsive Layout",
      "Lead Focused",
    ],
  },
  {
    title: "Bindiya Beauty Salon",
    position: 17,
    category: "Beauty & Salon Website",
    image: "/images/beauty.webp",
    fallback:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    url: "https://www.bindiyazbeautysalon.in/",
    description:
      "A premium salon website designed to showcase services, strengthen brand identity and give customers a smooth digital experience across every device.",
    tags: [
      "Premium UI",
      "Service Showcase",
      "Brand Presentation",
    ],
  },
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

const BookProjectPage = ({ project, onOpen }) => (
  <article className="book-project-page">
    <div className="book-project-image"><img src={project.image} alt={`${project.title} website`} onError={(event)=>{if(project.fallback && event.currentTarget.src!==project.fallback)event.currentTarget.src=project.fallback;}} /></div>
    <div className="book-project-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="book-project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><a href={project.url} target="_blank" rel="noopener noreferrer" className="book-live-link">Visit Live Website <FaArrowUpRightFromSquare/></a></div>
  </article>
);

const Portfolio = () => {
  const sortedProjects = sortByPosition(projects);
  const sortedReviews = sortByPosition(reviews);
    const projectCategories = [
    "All Projects",
    "Safety Nets",
    "Wood & Furniture",
    "Entertainment & Events",
    "Travel & Tourism",
    "Electronics & Repair",
    "Healthcare",
    "Agriculture",
    "Automotive & Rentals",
    "Construction & Industrial",
    "Home Services",
    "Beauty & Salon",
  ];

  const [selectedCategory, setSelectedCategory] =
    React.useState("All Projects");

  const getProjectGroup = (project) => {
    const title = project.title.toLowerCase();
    const category = project.category.toLowerCase();

    if (category.includes("safety nets") || title.includes("safety nets") ||
        title.includes("pigeon nets")) {
      return "Safety Nets";
    }

    if (title.includes("viceroy") || category.includes("furniture")) {
      return "Wood & Furniture";
    }

    if (title.includes("punjabi dhol") || title.includes("jk decors")) {
      return "Entertainment & Events";
    }

    if (title.includes("dandeli") || category.includes("tourism") ||
        category.includes("resort")) {
      return "Travel & Tourism";
    }

    if (title.includes("ak paul") || title.includes("electronics")) {
      return "Electronics & Repair";
    }

    if (title.includes("dentist") || category.includes("hospital")) {
      return "Healthcare";
    }

    if (title.includes("daiva") || title.includes("arvis") ||
        category.includes("agriculture")) {
      return "Agriculture";
    }

    if (title.includes("nkr") || title.includes("aditya") ||
        category.includes("car rental") || category.includes("car ac")) {
      return "Automotive & Rentals";
    }

    if (title.includes("scaffolding") || title.includes("yatheendra") ||
        category.includes("construction") || category.includes("fabrication")) {
      return "Construction & Industrial";
    }

    if (title.includes("happy organize") || category.includes("home services")) {
      return "Home Services";
    }

    if (title.includes("bindiya") || category.includes("beauty")) {
      return "Beauty & Salon";
    }

    return "Other Projects";
  };

  const filteredProjects = sortedProjects.filter((project) => {
    return (
      selectedCategory === "All Projects" ||
      getProjectGroup(project) === selectedCategory
    );
  });
  const [portfolioMode, setPortfolioMode] = React.useState("grid");
  const [bookIndex, setBookIndex] = React.useState(0);
  const [turning, setTurning] = React.useState(false);
  const [turnDirection, setTurnDirection] = React.useState(1);
  const bookSectionRef = React.useRef(null);
  const gridRef = React.useRef(null);
  const bookIndexRef = React.useRef(0);
  const turningRef = React.useRef(false);
  const modeRef = React.useRef("book");
  React.useEffect(() => { bookIndexRef.current = bookIndex; }, [bookIndex]);
  React.useEffect(() => { modeRef.current = portfolioMode; }, [portfolioMode]);
  const turnBook = React.useCallback((direction) => {
    if (turningRef.current || modeRef.current !== "book") return;
    const next = bookIndexRef.current + direction;
    if (next < 0 || next >= sortedProjects.length) return;
    setTurnDirection(direction);
    turningRef.current = true; setTurning(true);
    window.setTimeout(() => {
      bookIndexRef.current = next; setBookIndex(next);
      turningRef.current = false; setTurning(false);
    }, 760);
  }, [sortedProjects.length]);
  React.useEffect(() => {
    const onWheel = (event) => {
      if (modeRef.current !== "book" || !bookSectionRef.current) return;
      const rect = bookSectionRef.current.getBoundingClientRect();
      const isBookActive = rect.top <= window.innerHeight * 0.32 && rect.bottom >= window.innerHeight * 0.68;
      if (!isBookActive) return;
      const index = bookIndexRef.current;
      if (event.deltaY > 0 && index < sortedProjects.length - 1) {
        event.preventDefault(); if (!turningRef.current) turnBook(1);
      } else if (event.deltaY < 0 && index > 0) {
        event.preventDefault(); if (!turningRef.current) turnBook(-1);
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    // Mobile: swipe horizontally on the book to turn pages. A right swipe moves
    // back (turn page left); a left swipe moves forward (turn page right). Ignore swipes that begin on links/buttons.
    let touchStartX = 0, touchStartY = 0;
    const book = bookSectionRef.current;
    const onTouchStart = (event) => {
      if (modeRef.current !== "book" || !book) return;
      const target = event.target;
      if (target.closest("a,button")) return;
      const touch = event.changedTouches[0];
      touchStartX = touch.clientX; touchStartY = touch.clientY;
    };
    const onTouchEnd = (event) => {
      if (modeRef.current !== "book" || !book) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - touchStartX, dy = touch.clientY - touchStartY;
      if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.25) return;
      if (dx > 0) turnBook(-1); else turnBook(1);
    };
    if (book) {
      book.addEventListener("touchstart", onTouchStart, { passive: true });
      book.addEventListener("touchend", onTouchEnd, { passive: true });
    }
    return () => {
      window.removeEventListener("wheel", onWheel);
      if (book) { book.removeEventListener("touchstart", onTouchStart); book.removeEventListener("touchend", onTouchEnd); }
    };
  }, [turnBook, sortedProjects.length]);
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

        {/* PROJECTS: LOCKED BOOK / PREMIUM GRID */}
        <section className={`portfolio-book-section ${portfolioMode === "book" ? "book-mode" : "grid-mode"}`} ref={bookSectionRef}>
          <div className="portfolio-container portfolio-book-container">
            <motion.div className="book-heading" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}>
              <span className="portfolio-eyebrow">FEATURED PROJECTS</span>
              <h2>Real Websites. Real Businesses. <span>Real Digital Experiences.</span></h2>
              <p>Choose a book experience or explore every project together.</p>
              <div className="book-view-switch" role="group" aria-label="Portfolio view">
                <button className={portfolioMode === "book" ? "active" : ""} onClick={() => {setBookIndex(0);bookIndexRef.current=0;setPortfolioMode("book");modeRef.current="book";}}> <span><FaBookOpen/></span> Book Experience</button>
                <button className={portfolioMode === "grid" ? "active" : ""} onClick={() => {setBookIndex(0);bookIndexRef.current=0;setPortfolioMode("grid");modeRef.current="grid";window.requestAnimationFrame(()=>{if(gridRef.current){gridRef.current.scrollIntoView({behavior:"smooth",block:"start"});}});}}> <span><FaLayerGroup/></span> View All Projects</button>
              </div>
            </motion.div>
            {portfolioMode === "book" ? (
              <div className="book-stage" aria-label="Interactive portfolio book">
                <div className="book-shadow" />
                <div className={`portfolio-book ${turning ? "book-turning" : ""} ${turning && turnDirection < 0 ? "book-turning-backward" : "book-turning-forward"}`}>
                  <div className="book-spine" aria-hidden="true" />
                  <div className="book-left-page">
                    <div className="book-brand-top">SMYVISION <span>TECHNOLOGIES</span></div>
                    <div className="book-left-copy" key={`left-${bookIndex}`}>
                      <div className="book-brand-emblem" aria-hidden="true"><span className="brand-orbit orbit-one"/><span className="brand-orbit orbit-two"/><span className="brand-core" aria-hidden="true"><i/><i/><i/></span><span className="brand-glint"/></div>
                      <h3>{sortedProjects[bookIndex]?.title}</h3>
                      <div className="book-left-rule" />
                      <div className="book-animated-footer" aria-hidden="true"><span className="footer-line"/><span className="footer-dot"/><span className="footer-line"/></div>
                      <span className="book-left-signature">SMYVISION TECHNOLOGIES</span>
                    </div>
                  </div>
                  <div className="book-right-page" key={`right-${bookIndex}`}>
                    {sortedProjects[bookIndex] && <BookProjectPage project={sortedProjects[bookIndex]} onOpen={openProject} />}
                  </div>
                  {turning && <div className={`book-turn-sheet ${turnDirection < 0 ? "turn-backward" : "turn-forward"}`}><div className="turn-front"><div className="turn-air"/></div><div className="turn-back"/></div>}
                </div>
                <div className="book-controls">
                  <button type="button" onClick={()=>turnBook(-1)} disabled={bookIndex===0 || turning} aria-label="Previous project">‹</button>
                  <div className="book-progress"><div className="book-progress-track"><i style={{width:`${((bookIndex+1)/Math.max(1,sortedProjects.length))*100}%`}}/></div><small>TURN THE PAGE TO EXPLORE</small></div>
                  <button type="button" onClick={()=>turnBook(1)} disabled={bookIndex>=sortedProjects.length-1 || turning} aria-label="Next project">›</button>
                </div>
                <div className="book-swipe-hint" aria-label="Swipe instructions"><span>← SWIPE LEFT: NEXT PAGE</span><span>SWIPE RIGHT: PREVIOUS PAGE →</span></div>
              </div>
            ) : (
              <div className="portfolio-grid-area" ref={gridRef}>
  {/* CATEGORY FILTERS */}
  <div className="portfolio-category-filters">
    {projectCategories.map((category) => (
      <button
        key={category}
        type="button"
        className={`portfolio-filter-button ${
          selectedCategory === category ? "active" : ""
        }`}
        onClick={() => setSelectedCategory(category)}
      >
        {category}
        {category === "All Projects" && (
          <span>{sortedProjects.length}</span>
        )}
        {category !== "All Projects" && (
          <span>
            {
              sortedProjects.filter(
                (project) => getProjectGroup(project) === category
              ).length
            }
          </span>
        )}
      </button>
    ))}
  </div>

  {/* FILTERED PROJECTS */}
  <div className="project-grid book-view-all-grid">
    {filteredProjects.map((project, index) => (
      <motion.article
        className="project-card"
        key={project.title}
        initial={{ opacity: 0, y: 45, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.65,
          delay: (index % 2) * 0.08,
          ease: [0.22, 0.08, 0.2, 1],
        }}
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

          <a
            className="grid-live-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Website <FaArrowRight />
          </a>
        </div>
      </motion.article>
    ))}

    {filteredProjects.length === 0 && (
      <p className="portfolio-no-projects">
        No projects found in this category.
      </p>
    )}
  </div>
</div>
            )}
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
  /* FINAL BOOK / GRID EXPERIENCE */
  .portfolio-book-section{padding:44px 0 62px!important;overflow:visible!important;background:radial-gradient(ellipse at 50% 30%,rgba(109,40,217,.06),transparent 60%),linear-gradient(145deg,#f5f8fd,#eef3fb)!important;}
  .portfolio-book-section.book-mode{min-height:100vh;display:flex;align-items:center;justify-content:center;}
  .portfolio-book-container{width:100%;max-width:1240px!important;}
  .book-heading{text-align:center;margin:0 auto 20px!important;}
  .book-heading h2{font-size:clamp(30px,4vw,48px)!important;line-height:1.13!important;color:var(--portfolio-navy)!important;letter-spacing:-1.5px!important;margin:10px 0!important;}
  .book-heading h2 span{color:var(--portfolio-primary)!important;}
  .book-view-switch{display:inline-flex;padding:4px;border:1px solid #d7e2f1;background:#fff;border-radius:13px;margin-top:16px;box-shadow:0 8px 24px rgba(8,28,56,.07);gap:4px;}
  .book-view-switch button{border:0!important;background:transparent!important;padding:11px 17px!important;border-radius:10px!important;color:#536782!important;font-weight:750!important;cursor:pointer!important;transition:.25s!important;}
  .book-view-switch button.active{color:#fff!important;background:linear-gradient(110deg,var(--portfolio-primary),var(--portfolio-secondary))!important;box-shadow:0 5px 14px rgba(7,88,232,.22)!important;}
  .book-stage{max-width:1140px;margin:0 auto;position:relative;padding:8px 18px 0;perspective:1800px;}
  .book-shadow{position:absolute;inset:25px 4% 42px;border-radius:30px;background:rgba(8,28,56,.15);filter:blur(28px);transform:translateY(18px);}
  .portfolio-book{position:relative;z-index:1;display:grid!important;grid-template-columns:1fr 1fr!important;min-height:560px!important;height:560px!important;border-radius:18px;transform-style:preserve-3d;box-shadow:0 28px 55px rgba(8,28,56,.19),0 5px 12px rgba(8,28,56,.12);background:#fff;overflow:visible!important;}
  .book-left-page,.book-right-page{min-width:0;height:560px;position:relative;background:#fff;overflow:hidden;}
  .book-left-page{border-radius:18px 0 0 18px;background:linear-gradient(115deg,#fff 70%,#f5f7fc);box-shadow:inset -12px 0 18px -18px rgba(8,28,56,.4);padding:36px 42px;}
  .book-right-page{border-radius:0 18px 18px 0;background:#fff;box-shadow:inset 12px 0 20px -20px rgba(8,28,56,.5);}
  .book-brand-top{font-size:11px;font-weight:950;letter-spacing:2px;color:var(--portfolio-navy);border-bottom:1px solid #dce6f3;padding-bottom:16px;}
  .book-brand-top span{font-size:8px;color:#72849c;letter-spacing:2.5px;margin-left:4px;}
  .book-left-copy{height:calc(100% - 44px);display:flex;flex-direction:column;justify-content:center;animation:bookCopyIn .45s both;}
  .book-left-copy h3{font-size:clamp(32px,4vw,53px);line-height:1.07;letter-spacing:-1.8px;color:var(--portfolio-navy);margin:18px 0 12px;}
  .book-left-copy>p{font-size:13px;line-height:1.8;color:var(--portfolio-muted);margin:0;}
  .book-left-rule{height:3px;width:64px;background:linear-gradient(90deg,var(--portfolio-primary),var(--portfolio-secondary));margin:28px 0;}
  .book-left-copy .book-left-note{max-width:340px;font-size:14px;}
  .book-left-signature{margin-top:auto;font-size:8px;font-weight:900;letter-spacing:2px;color:#8192aa;}
  .book-spine{position:absolute!important;top:0!important;bottom:0!important;left:50%!important;width:18px!important;transform:translateX(-50%)!important;z-index:5!important;background:linear-gradient(90deg,rgba(8,28,56,.06),rgba(8,28,56,.15),rgba(255,255,255,.6))!important;box-shadow:0 0 12px rgba(8,28,56,.09)!important;pointer-events:none!important;}
  .book-project-page{height:560px!important;min-height:560px!important;display:flex;flex-direction:column;position:relative;background:#fff;}
  .book-project-image{height:52%!important;min-height:0!important;position:relative;background:#e7edf6;overflow:hidden;}
  .book-project-image img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .9s cubic-bezier(.2,.7,.2,1);}
  .book-project-image:hover img{transform:scale(1.045);}
  .book-project-copy{padding:27px 32px!important;display:flex;flex-direction:column;flex:1;min-height:0;}
  .book-project-copy h3{font-size:clamp(22px,2.7vw,32px)!important;line-height:1.13!important;letter-spacing:-1px!important;color:var(--portfolio-navy)!important;margin:11px 0!important;}
  .book-project-copy p{font-size:13px!important;line-height:1.7!important;color:var(--portfolio-text)!important;margin:0!important;}
  .book-project-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:13px;}
  .book-project-tags span{font-size:9px;font-weight:750;color:#435c7b;border:1px solid #dce6f3;background:#f4f7fc;border-radius:50px;padding:6px 9px;}
  .book-live-link{margin-top:auto!important;padding-top:15px!important;display:inline-flex!important;align-items:center;gap:9px;color:var(--portfolio-primary)!important;font-size:12px;font-weight:850;text-decoration:none!important;}
  .book-live-link:hover{color:var(--portfolio-secondary)!important;}
  .book-controls{display:flex;align-items:center;justify-content:center;gap:20px;margin:17px auto 0;max-width:440px;position:relative;z-index:10;}
  .book-controls>button{width:46px;height:46px;border-radius:50%;border:1px solid #d9e3f1;background:#fff;color:var(--portfolio-navy);font-size:27px;line-height:1;box-shadow:0 7px 20px rgba(8,28,56,.08);cursor:pointer;transition:.2s;display:flex;align-items:center;justify-content:center;}
  .book-controls>button:hover:not(:disabled){background:var(--portfolio-primary);color:#fff;transform:translateY(-2px);}
  .book-controls>button:disabled{opacity:.35;cursor:not-allowed;}
  .book-progress{flex:1;max-width:340px;text-align:center;color:#637790;font-size:11px;font-weight:800;letter-spacing:1px;}
  .book-progress-track{height:3px;background:#d8e2ef;border-radius:5px;overflow:hidden;margin:8px 0;}
  .book-progress-track i{display:block;height:100%;background:linear-gradient(90deg,var(--portfolio-primary),var(--portfolio-secondary));transition:width .5s;}
  .book-progress small{font-size:8px;letter-spacing:1.5px;color:#8798ad;}
  .book-turn-sheet{position:absolute;top:0;bottom:0;width:50%;left:50%;z-index:7;transform-origin:left center;transform-style:preserve-3d;pointer-events:none;animation:realBookTurnForward .76s cubic-bezier(.22,.1,.2,1) forwards;} .book-turn-sheet.turn-backward{left:0!important;transform-origin:right center!important;animation:realBookTurnBackward .76s cubic-bezier(.22,.1,.2,1) forwards!important;}
  .turn-front,.turn-back{position:absolute;inset:0;background:linear-gradient(100deg,#eaf0f9,#fff 20%,#f2f5fa);border:1px solid rgba(8,28,56,.05);box-shadow:0 14px 35px rgba(8,28,56,.16);backface-visibility:hidden;overflow:hidden;}
  .turn-back{transform:rotateY(180deg);background:linear-gradient(260deg,#fff,#f1f5fb);}
  .turn-air{position:absolute;inset:-20%;background:linear-gradient(115deg,transparent 20%,rgba(255,255,255,.65) 43%,rgba(109,40,217,.06) 52%,transparent 72%);animation:airSweep .76s ease-in-out;}
  @keyframes realBookTurnForward{0%{transform:rotateY(0deg)}45%{filter:drop-shadow(22px 10px 18px rgba(8,28,56,.24))}100%{transform:rotateY(-180deg);filter:none}} @keyframes realBookTurnBackward{0%{transform:rotateY(0deg)}45%{filter:drop-shadow(-22px 10px 18px rgba(8,28,56,.24))}100%{transform:rotateY(180deg);filter:none}}
  @keyframes airSweep{0%{transform:translateX(-40%)}100%{transform:translateX(40%)}}
  @keyframes bookCopyIn{from{opacity:0;transform:translateX(-14px)}to{opacity:1;transform:none}}
  .book-view-all-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:28px!important;}
  .book-view-all-grid .project-card{border-radius:20px!important;overflow:hidden!important;box-shadow:0 15px 40px rgba(8,28,56,.08)!important;transition:transform .5s,box-shadow .5s!important;}
  .book-view-all-grid .project-card:hover{transform:translateY(-8px)!important;box-shadow:0 25px 55px rgba(8,28,56,.14)!important;}
  .book-view-all-grid .project-image-wrap img{transition:transform .9s cubic-bezier(.2,.7,.2,1)!important;}
  .book-view-all-grid .project-card:hover img{transform:scale(1.045)!important;}
  .grid-live-link{margin-top:18px;display:inline-flex;align-items:center;gap:9px;color:var(--portfolio-primary);font-weight:850;text-decoration:none;font-size:13px;}
  @media(max-width:850px){.portfolio-book-section.book-mode{min-height:100vh}.portfolio-book{height:500px!important;min-height:500px!important}.book-left-page,.book-right-page,.book-project-page{height:500px!important;min-height:500px!important}.book-left-page{padding:26px}.book-project-image{height:43%!important}.book-project-copy{padding:22px!important}.book-view-all-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;}}
  @media(max-width:600px){.portfolio-book-section.book-mode{min-height:100svh;padding:18px 0 30px!important}.book-heading h2{font-size:28px!important;letter-spacing:-.8px!important}.book-heading p{font-size:12px}.book-view-switch button{padding:10px 11px!important;font-size:11px!important}.book-stage{padding:5px 0}.portfolio-book{height:420px!important;min-height:420px!important;border-radius:12px;grid-template-columns:1fr 1fr!important;box-shadow:0 16px 30px rgba(8,28,56,.16)}.book-left-page,.book-right-page,.book-project-page{height:420px!important;min-height:420px!important;border-radius:0!important}.book-left-page{border-radius:12px 0 0 12px!important;padding:15px 11px!important}.book-right-page{border-radius:0 12px 12px 0!important}.book-brand-top{font-size:8px;letter-spacing:1px;padding-bottom:10px}.book-brand-top span{font-size:6px;letter-spacing:1px}.book-left-copy h3{font-size:clamp(19px,5.4vw,25px)!important;letter-spacing:-.6px!important;margin:11px 0!important;overflow-wrap:anywhere}.book-left-copy>p{font-size:10px!important;line-height:1.5!important}.book-left-rule{margin:15px 0;width:38px;height:2px}.book-left-copy .book-left-note{font-size:10px!important;line-height:1.5!important}.book-left-signature{font-size:6px;letter-spacing:1px}.book-page-label{font-size:6px!important;letter-spacing:.7px!important}.book-project-image{height:38%!important;min-height:0!important}.book-project-copy{padding:12px 9px 18px!important}.book-project-copy h3{font-size:16px!important;letter-spacing:-.4px!important;margin:8px 0!important;overflow-wrap:anywhere}.book-project-copy p{font-size:9px!important;line-height:1.5!important;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}.book-project-tags{gap:4px;margin-top:8px}.book-project-tags span{font-size:6px;padding:4px 5px}.book-live-link{font-size:8px!important;gap:4px!important;padding-top:10px!important}.book-spine{width:7px!important}.book-controls{gap:9px;margin-top:12px}.book-controls>button{width:38px;height:38px;font-size:23px;touch-action:manipulation}.book-progress small{font-size:6px;letter-spacing:1px}.book-view-all-grid{grid-template-columns:1fr!important;gap:18px!important;}.book-turn-sheet{width:50%;}.book-shadow{filter:blur(15px);}}
  @media(prefers-reduced-motion:reduce){.book-turn-sheet{animation-duration:.01ms!important}.book-left-copy{animation:none!important}}

  /* CENTERED, REFINED BOOK PRESENTATION */
  .portfolio-book-section.book-mode{height:100svh!important;min-height:0!important;padding:clamp(14px,2vh,26px) 0!important;box-sizing:border-box!important;align-items:center!important;justify-content:center!important;overflow:clip!important;}
  .portfolio-book-section.book-mode .portfolio-book-container{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:clamp(10px,1.6vh,18px)!important;height:100%!important;}
  .portfolio-book-section.book-mode .book-heading{flex:0 0 auto!important;margin:0 auto!important;max-width:900px!important;}
  .portfolio-book-section.book-mode .book-heading h2{font-size:clamp(27px,3.4vw,42px)!important;line-height:1.05!important;margin:6px 0 8px!important;}
  .portfolio-book-section.book-mode .book-heading p{margin:0!important;font-size:clamp(11px,1.2vw,14px)!important;}
  .portfolio-book-section.book-mode .book-view-switch{margin-top:12px!important;}
  .portfolio-book-section.book-mode .book-stage{width:100%!important;max-width:1140px!important;flex:0 0 auto!important;margin:0 auto!important;padding:0 14px!important;}
  .portfolio-book-section.book-mode .portfolio-book{height:min(58svh,570px)!important;min-height:390px!important;max-height:570px!important;}
  .portfolio-book-section.book-mode .book-left-page,.portfolio-book-section.book-mode .book-right-page,.portfolio-book-section.book-mode .book-project-page{height:min(58svh,570px)!important;min-height:390px!important;max-height:570px!important;}
  .book-left-page{padding:clamp(22px,3.5vw,42px)!important;}
  .book-left-copy{justify-content:flex-start!important;padding-top:clamp(18px,4vh,40px)!important;}
  .book-left-copy h3{font-size:clamp(30px,3.4vw,48px)!important;line-height:1.07!important;margin:22px 0 0!important;animation:bookTitleReveal .65s cubic-bezier(.2,.8,.2,1) both!important;}
  .book-left-copy .book-left-rule{margin:24px 0 20px!important;}
  .book-left-copy .book-left-signature{margin-top:auto!important;}
  .book-brand-emblem{position:relative;width:clamp(62px,7vw,100px);height:clamp(62px,7vw,100px);margin:4px 0 3px;display:grid;place-items:center;animation:brandFloat 5s ease-in-out infinite;}
  .brand-core{width:44%;height:44%;display:flex;align-items:center;justify-content:center;gap:4px;border-radius:50%;background:linear-gradient(140deg,var(--portfolio-primary),var(--portfolio-secondary));box-shadow:0 10px 24px rgba(7,88,232,.25);animation:coreBreath 3.6s ease-in-out infinite;} .brand-core i{display:block;width:5px;height:5px;border-radius:50%;background:#fff;box-shadow:0 0 9px rgba(255,255,255,.75);animation:coreWave 1.4s ease-in-out infinite;} .brand-core i:nth-child(2){animation-delay:.2s}.brand-core i:nth-child(3){animation-delay:.4s}
  .brand-orbit{position:absolute;border:1px solid rgba(7,88,232,.25);border-radius:50%;inset:5%;}
  .orbit-one{animation:orbitSpin 8s linear infinite;transform:rotate(35deg);border-top-color:var(--portfolio-primary);border-right-color:rgba(109,40,217,.45);}
  .orbit-two{inset:16%;border-style:dashed;border-color:rgba(109,40,217,.28);animation:orbitSpin 12s linear infinite reverse;}
  .brand-glint{position:absolute;width:7px;height:7px;border-radius:50%;background:#6d28d9;right:10%;top:15%;box-shadow:0 0 14px rgba(109,40,217,.6);animation:glintPulse 2s ease-in-out infinite;}
  .book-animated-footer{display:flex;align-items:center;gap:8px;margin:0 0 20px;max-width:200px;width:70%;}
  .book-animated-footer .footer-line{height:1px;flex:1;background:linear-gradient(90deg,transparent,rgba(7,88,232,.5));}
  .book-animated-footer .footer-line:last-child{background:linear-gradient(90deg,rgba(109,40,217,.5),transparent);}
  .book-animated-footer .footer-dot{width:5px;height:5px;border-radius:50%;background:var(--portfolio-secondary);animation:glintPulse 1.7s ease-in-out infinite;}
  @keyframes coreBreath{0%,100%{box-shadow:0 10px 24px rgba(7,88,232,.22);transform:scale(.96)}50%{box-shadow:0 12px 30px rgba(109,40,217,.35);transform:scale(1.05)}} @keyframes coreWave{0%,100%{opacity:.55;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}} @keyframes brandFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
  @keyframes orbitSpin{to{transform:rotate(360deg)}}
  @keyframes glintPulse{0%,100%{opacity:.45;transform:scale(.8)}50%{opacity:1;transform:scale(1.35)}}
  @keyframes bookTitleReveal{from{opacity:0;transform:translateY(22px);filter:blur(4px)}to{opacity:1;transform:none;filter:none}}
  .book-view-all-grid{scroll-margin-top:90px;}
  /* Entire website preview image stays visible without crop or zoom */
  .book-project-image{height:48%!important;flex:0 0 48%!important;background:#f4f7fb!important;display:flex!important;align-items:center!important;justify-content:center!important;overflow:hidden!important;}
  .book-project-image img{width:100%!important;height:100%!important;object-fit:contain!important;object-position:center!important;transform:none!important;transition:none!important;}
  .book-project-image:hover img{transform:none!important;}
  .book-project-copy{padding:clamp(18px,2.5vw,30px)!important;}
  .book-project-copy h3{margin:0 0 12px!important;}
  .book-project-copy p{margin:0!important;}
  .book-live-link{padding-top:12px!important;}
  .book-controls{margin-top:clamp(8px,1.5vh,14px)!important;}
  .book-view-all-grid .project-image-wrap img,.book-view-all-grid .project-card:hover img{transform:none!important;transition:none!important;}
  .book-view-all-grid .project-image-wrap{overflow:hidden!important;}
  .book-view-all-grid .project-card{transform:none!important;}
  .book-view-all-grid .project-content{padding:clamp(18px,2vw,26px)!important;}
  @media(max-width:850px){
    .portfolio-book-section.book-mode .portfolio-book{height:min(58svh,500px)!important;min-height:390px!important;}
    .portfolio-book-section.book-mode .book-left-page,.portfolio-book-section.book-mode .book-right-page,.portfolio-book-section.book-mode .book-project-page{height:min(58svh,500px)!important;min-height:390px!important;}
  }
  @media(max-width:600px){
    .portfolio-book-section.book-mode{height:100svh!important;padding:12px 0 18px!important;}
    .portfolio-book-section.book-mode .portfolio-book-container{gap:8px!important;}
    .portfolio-book-section.book-mode .book-heading h2{font-size:clamp(25px,7vw,31px)!important;margin:2px 0 5px!important;}
    .portfolio-book-section.book-mode .book-heading p{font-size:11px!important;}
    .portfolio-book-section.book-mode .book-view-switch{margin-top:8px!important;}
    .portfolio-book-section.book-mode .book-stage{padding:0!important;}
    .portfolio-book-section.book-mode .portfolio-book{height:min(55svh,470px)!important;min-height:345px!important;max-height:470px!important;}
    .portfolio-book-section.book-mode .book-left-page,.portfolio-book-section.book-mode .book-right-page,.portfolio-book-section.book-mode .book-project-page{height:min(55svh,470px)!important;min-height:345px!important;max-height:470px!important;}
    .book-left-page{padding:12px 10px!important;}
    .book-left-copy{padding-top:12px!important;}
    .book-brand-emblem{width:clamp(44px,12vw,58px)!important;height:clamp(44px,12vw,58px)!important;margin:0 0 4px!important;}
    .book-left-copy h3{font-size:clamp(18px,5.4vw,24px)!important;margin:12px 0 0!important;line-height:1.12!important;}
    .book-left-copy .book-left-rule{margin:12px 0!important;width:30px!important;}
    .book-animated-footer{margin:0 0 12px!important;width:85%!important;}
    .book-left-signature{font-size:5px!important;letter-spacing:.7px!important;}
    .book-project-image{height:43%!important;flex-basis:43%!important;}
    .book-project-copy{padding:10px 8px 14px!important;}
    .book-project-copy h3{font-size:clamp(13px,4vw,17px)!important;line-height:1.13!important;margin:0 0 7px!important;}
    .book-project-copy p{font-size:8.5px!important;line-height:1.45!important;display:-webkit-box!important;-webkit-line-clamp:4!important;-webkit-box-orient:vertical!important;overflow:hidden!important;}
    .book-project-tags{gap:3px!important;margin-top:6px!important;}
    .book-project-tags span{font-size:6px!important;padding:3px 4px!important;}
    .book-live-link{font-size:7.5px!important;padding-top:7px!important;}
    .book-controls{gap:8px!important;margin-top:7px!important;}
    .book-controls>button{width:35px!important;height:35px!important;font-size:21px!important;}
    .book-progress small{font-size:5.5px!important;}
    .book-view-all-grid{grid-template-columns:1fr!important;}
  }
  @media(prefers-reduced-motion:reduce){.book-brand-emblem,.brand-orbit,.brand-glint,.book-animated-footer .footer-dot,.brand-core,.brand-core i{animation:none!important}}

  /* MOBILE SWIPE + HIGH CONTRAST LINK + TOUCH FEEDBACK */
  .book-swipe-hint{display:none;}
  .book-stage,.portfolio-book{touch-action:pan-y;}
  @media(max-width:600px){
    .book-swipe-hint{display:flex!important;justify-content:space-between;gap:8px;max-width:100%;margin:8px 4px 0;color:#425a78;font-size:9px;font-weight:900;letter-spacing:.6px;}
    .book-swipe-hint span{background:#fff;border:1px solid #dce6f3;border-radius:30px;padding:7px 9px;box-shadow:0 3px 9px rgba(8,28,56,.06);}
    .book-live-link{font-size:clamp(10px,3vw,12px)!important;font-weight:950!important;color:#0647bd!important;background:#eef4ff!important;border:1px solid #c5d8ff!important;border-radius:8px!important;padding:9px 8px!important;justify-content:center!important;gap:5px!important;line-height:1.2!important;white-space:nowrap!important;text-decoration:none!important;box-shadow:0 2px 7px rgba(7,88,232,.12)!important;}
    .book-live-link svg{flex-shrink:0!important;}
    .book-project-copy{padding-bottom:10px!important;}
  }

  /* PREMIUM CENTERED GRID LINKS + VIEW SWITCH + LEFT BOOK PAGE */
  .book-view-all-grid .project-content{display:flex!important;flex-direction:column!important;align-items:stretch!important;}
  .book-view-all-grid .project-content .grid-live-link{position:relative!important;display:flex!important;width:min(100%,280px)!important;min-height:48px!important;align-items:center!important;justify-content:center!important;margin:24px auto 2px!important;padding:13px 22px!important;gap:12px!important;border-radius:14px!important;background:linear-gradient(110deg,var(--portfolio-primary),var(--portfolio-secondary))!important;color:#fff!important;font-size:14px!important;font-weight:850!important;letter-spacing:.15px!important;text-align:center!important;text-decoration:none!important;box-shadow:0 12px 26px rgba(7,88,232,.22)!important;transition:transform .25s ease,box-shadow .25s ease,filter .25s ease!important;}
  .book-view-all-grid .project-content .grid-live-link:hover{transform:translateY(-3px)!important;box-shadow:0 16px 34px rgba(7,88,232,.3)!important;filter:saturate(1.12)!important;}
  .book-view-all-grid .project-content .grid-live-link svg{font-size:13px!important;flex-shrink:0!important;}
  .book-view-switch{display:flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;margin-left:auto!important;margin-right:auto!important;}
  .book-view-switch button{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:10px!important;min-height:46px!important;padding:12px 22px!important;font-size:13px!important;letter-spacing:.15px!important;}
  .book-view-switch button span{display:inline-flex!important;width:26px!important;height:26px!important;align-items:center!important;justify-content:center!important;border-radius:9px!important;background:rgba(7,88,232,.08)!important;font-size:15px!important;line-height:1!important;transition:transform .3s ease,background .3s ease,box-shadow .3s ease!important;} .book-view-switch button span svg{display:block!important;}
  .book-view-switch button.active span{background:rgba(255,255,255,.18)!important;}
  .book-view-switch button:hover span{transform:scale(1.12) rotate(-5deg)!important;}
  .book-left-page{position:relative!important;}
  .book-left-page:before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 18% 20%,rgba(109,40,217,.09),transparent 35%),linear-gradient(145deg,transparent 65%,rgba(7,88,232,.045));}
  .book-left-copy{position:relative!important;z-index:1!important;animation:leftPanelReveal .7s cubic-bezier(.16,1,.3,1) both!important;}
  .book-left-copy h3{animation:leftTitleReveal .8s cubic-bezier(.16,1,.3,1) both!important;text-wrap:balance!important;}
  .book-brand-emblem{filter:drop-shadow(0 12px 18px rgba(7,88,232,.08))!important;}
  @keyframes leftPanelReveal{0%{opacity:0;transform:translateY(18px);filter:blur(5px)}60%{opacity:1;filter:blur(0)}100%{opacity:1;transform:translateY(0);filter:none}}
  @keyframes leftTitleReveal{0%{opacity:0;transform:translateX(-22px);clip-path:inset(0 100% 0 0)}55%{opacity:1;clip-path:inset(0 0 0 0)}100%{transform:translateX(0);clip-path:inset(0 0 0 0);filter:none}}
  @media(max-width:600px){
    .book-view-switch{width:100%!important;max-width:360px!important;gap:6px!important;}
    .book-view-switch button{flex:1!important;min-width:0!important;padding:10px 9px!important;gap:6px!important;font-size:10px!important;white-space:nowrap!important;}
    .book-view-switch button span{width:20px!important;height:20px!important;font-size:13px!important;}
    .book-view-all-grid .project-content .grid-live-link{width:100%!important;max-width:100%!important;min-height:46px!important;margin:20px auto 0!important;font-size:13px!important;}
    .book-left-copy{animation:leftPanelReveal .65s ease both!important;}
    .book-left-copy h3{animation:leftTitleReveal .7s ease both!important;}
  }
  @media(prefers-reduced-motion:reduce){.book-left-copy,.book-left-copy h3{animation:none!important}.book-view-switch button span,.book-view-all-grid .project-content .grid-live-link{transition:none!important}}


  /* Cinematic, restrained editorial project-title animation */
  .book-left-copy{animation:leftEditorialEntrance 1.05s cubic-bezier(.19,1,.22,1) both!important;}
  .book-left-copy h3{animation:leftTitleCinematic 1.15s cubic-bezier(.16,1,.3,1) both!important;position:relative!important;}
  .book-brand-emblem{animation:emblemSettle 1.25s cubic-bezier(.2,.8,.2,1) both!important;}
  .book-left-rule{animation:ruleDraw 1.1s cubic-bezier(.16,1,.3,1) both!important;transform-origin:left center!important;}
  .book-left-signature{animation:signatureFade 1.35s ease both!important;}
  @keyframes leftEditorialEntrance{0%{opacity:0;transform:translateY(10px);filter:blur(2px)}100%{opacity:1;transform:translateY(0);filter:blur(0)}}
  @keyframes leftTitleCinematic{0%{opacity:0;transform:translateY(24px) scale(.985);clip-path:inset(0 0 100% 0);letter-spacing:-1.8px}65%{opacity:1;clip-path:inset(0 0 0 0)}100%{opacity:1;transform:translateY(0) scale(1);clip-path:inset(0 0 0 0);letter-spacing:inherit}}
  @keyframes emblemSettle{0%{opacity:0;transform:scale(.86) rotate(-8deg)}70%{opacity:1;transform:scale(1.025) rotate(1deg)}100%{opacity:1;transform:scale(1) rotate(0)}}
  @keyframes ruleDraw{0%{opacity:0;transform:scaleX(0)}100%{opacity:1;transform:scaleX(1)}}
  @keyframes signatureFade{0%{opacity:0;letter-spacing:3px}100%{opacity:1;letter-spacing:inherit}}
  @media(max-width:600px){.book-left-copy{animation:leftEditorialEntrance .8s cubic-bezier(.19,1,.22,1) both!important}.book-left-copy h3{animation:leftTitleCinematic .9s cubic-bezier(.16,1,.3,1) both!important}}
  @media(prefers-reduced-motion:reduce){.book-left-copy,.book-left-copy h3,.book-brand-emblem,.book-left-rule,.book-left-signature{animation:none!important}}


  /* IMPERIAL GOLD / ROYAL BOOK REFINEMENT */
  .portfolio-book{border:3px solid #9a7434!important;border-radius:26px!important;background:#24170c!important;box-shadow:0 34px 65px rgba(28,15,4,.32),0 0 0 5px rgba(199,160,83,.2),inset 0 0 0 1px rgba(248,221,160,.45)!important;}
  .book-left-page,.book-right-page{border:1px solid rgba(175,131,57,.5)!important;background:linear-gradient(145deg,#fff5dc 0%,#ead5a9 54%,#d9bd83 100%)!important;}
  .book-left-page{padding:clamp(28px,4vw,54px)!important;box-shadow:inset 0 0 0 7px rgba(151,103,34,.07),inset -20px 0 26px rgba(89,52,16,.15)!important;}
  .book-left-page:before{content:"";position:absolute;inset:14px;border:1px solid rgba(143,99,39,.4);border-radius:15px 5px 5px 15px;pointer-events:none;}
  .book-left-copy{height:100%!important;display:flex!important;flex-direction:column!important;justify-content:center!important;align-items:center!important;text-align:center!important;padding:0!important;gap:0!important;position:relative!important;z-index:1!important;}
  .book-brand-emblem{display:none!important;}
  .book-left-copy h3{width:100%!important;text-align:center!important;margin:0!important;color:#4b2e12!important;font-family:'Cinzel','Cormorant Garamond',Georgia,serif!important;font-weight:600!important;font-size:clamp(30px,4.2vw,55px)!important;line-height:1.15!important;letter-spacing:.035em!important;text-shadow:0 1px 0 #fff4d8,0 3px 9px rgba(83,45,13,.13)!important;animation:royalTitleReveal 1.1s cubic-bezier(.2,.75,.25,1) both!important;}
  .book-left-copy h3:before{content:'✦  ✧  ✦';display:block;color:#a67a2f;font-size:clamp(14px,1.8vw,20px);letter-spacing:.35em;margin:0 0 22px;}
  .book-left-rule{width:clamp(70px,12vw,130px)!important;height:2px!important;margin:24px auto!important;background:linear-gradient(90deg,transparent,#9e7127,#e2c57c,#9e7127,transparent)!important;position:relative!important;}
  .book-left-rule:after{content:'◆';position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:#9b702b;background:#f2e2bd;padding:0 7px;font-size:10px;}
  .book-left-copy .book-left-note{max-width:90%!important;text-align:center!important;color:#70502a!important;font-family:'Cormorant Garamond',Georgia,serif!important;font-size:clamp(14px,1.6vw,18px)!important;line-height:1.75!important;}
  .book-left-signature{margin:auto 0 0!important;text-align:center!important;color:#87612a!important;font-family:'Cinzel',Georgia,serif!important;font-size:clamp(8px,1vw,11px)!important;letter-spacing:.24em!important;}
  .book-spine{width:22px!important;background:linear-gradient(90deg,#3c210b,#926327 22%,#d1aa5c 45%,#6d451a 70%,#3c210b)!important;box-shadow:0 0 17px rgba(47,24,5,.42),inset 0 0 4px rgba(255,228,163,.7)!important;}
  .book-turn-sheet .turn-front,.book-turn-sheet .turn-back{background:linear-gradient(135deg,#fff4d8,#e9d2a1 52%,#cdb17a)!important;}
  .book-view-switch{background:linear-gradient(135deg,#2b1a0c,#583719)!important;border:1px solid #c7a45d!important;box-shadow:0 10px 30px rgba(45,24,8,.24)!important;}
  .book-view-switch button{color:#f0dfb6!important;font-family:'Cinzel',Georgia,serif!important;letter-spacing:.045em!important;}
  .book-view-switch button.active{background:linear-gradient(135deg,#e1c174,#b88a3e,#f0d69a)!important;color:#39230c!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.55),0 5px 16px rgba(0,0,0,.22)!important;}
  .book-view-switch button span{color:inherit!important;}
  @keyframes royalTitleReveal{0%{opacity:0;transform:translateY(18px);letter-spacing:.16em;clip-path:inset(0 0 100% 0)}65%{clip-path:inset(0 0 0 0)}100%{opacity:1;transform:translateY(0);letter-spacing:.035em;clip-path:inset(0 0 0 0)}}
  @media(max-width:700px){.portfolio-book{margin:0 8px!important;border-width:2px!important;border-radius:17px!important;box-shadow:0 20px 38px rgba(28,15,4,.28),0 0 0 3px rgba(199,160,83,.17)!important;}.book-stage{padding:12px 8px!important;}.book-left-page{padding:18px 13px!important;}.book-left-page:before{inset:8px!important;border-radius:9px 4px 4px 9px!important;}.book-left-copy h3{font-size:clamp(20px,5.5vw,28px)!important;line-height:1.22!important;letter-spacing:.02em!important;}.book-left-copy h3:before{font-size:12px!important;margin-bottom:12px!important;letter-spacing:.2em!important;}.book-left-rule{margin:15px auto!important;width:55px!important;}.book-left-copy .book-left-note{font-size:11px!important;line-height:1.6!important;}.book-left-signature{font-size:6px!important;letter-spacing:.12em!important;}.book-spine{width:8px!important;}}
  @media(prefers-reduced-motion:reduce){.book-left-copy h3{animation:none!important;}}
    /* PORTFOLIO CATEGORY FILTERS */

  .portfolio-grid-area {
    width: 100%;
  }

  .portfolio-category-filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 11px;
    margin: 0 auto 32px;
    padding: 20px;
    border: 1px solid #e4eaf3;
    border-radius: 20px;
    background: rgba(255,255,255,.9);
    box-shadow: 0 12px 35px rgba(8,28,56,.055);
  }

  .portfolio-filter-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-height: 42px;
    padding: 10px 16px;
    border: 1px solid #dce5f1;
    border-radius: 50px;
    background: #f7f9fd;
    color: #405672;
    font-family: inherit;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: all .25s ease;
  }

  .portfolio-filter-button span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 21px;
    height: 21px;
    padding: 0 5px;
    border-radius: 50px;
    background: #e7edf7;
    color: #405672;
    font-size: 10px;
    font-weight: 900;
  }

  .portfolio-filter-button:hover {
    border-color: var(--portfolio-primary);
    color: var(--portfolio-primary);
    transform: translateY(-2px);
  }

  .portfolio-filter-button.active {
    border-color: transparent;
    color: #fff;
    background: linear-gradient(
      110deg,
      var(--portfolio-primary),
      var(--portfolio-secondary)
    );
    box-shadow: 0 8px 20px rgba(7,88,232,.2);
  }

  .portfolio-filter-button.active span {
    color: #fff;
    background: rgba(255,255,255,.2);
  }

  .portfolio-no-projects {
    grid-column: 1 / -1;
    padding: 45px 20px;
    text-align: center;
    color: var(--portfolio-muted);
    font-weight: 700;
  }

  @media(max-width:600px) {
    .portfolio-category-filters {
      justify-content: flex-start;
      flex-wrap: nowrap;
      overflow-x: auto;
      padding: 13px;
      margin-bottom: 22px;
      border-radius: 14px;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
    }

    .portfolio-category-filters::-webkit-scrollbar {
      display: none;
    }

    .portfolio-filter-button {
      flex: 0 0 auto;
      min-height: 39px;
      padding: 9px 13px;
      font-size: 11px;
    }
  }
`;

export default Portfolio;
