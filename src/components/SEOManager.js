import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = {
      "/": {
        title: "SMYVISION Technologies | Websites & Automation Solutions",
        description:
          "SMYVISION Technologies builds modern websites, chatbots, and business automation solutions starting from ₹2999.",
        keywords:
          "web development, website design company, business automation, chatbot development, smyvision technologies",
      },
      "/about": {
        title: "About SMYVISION Technologies | Web & Automation Experts",
        description:
          "Learn about SMYVISION Technologies, a trusted company delivering websites, automation, and digital solutions.",
        keywords:
          "about smyvision technologies, web development company india, automation experts, digital solutions",
      },
      "/services": {
        title: "Web Development & Automation Services | SMYVISION",
        description:
          "We offer website development, chatbot solutions, and business automation services for modern businesses.",
        keywords:
          "web development services, automation services, chatbot services, website development company",
      },
      "/careers": {
        title: "Careers at SMYVISION Technologies | Join Our Team",
        description:
          "Explore career opportunities at SMYVISION Technologies in web development and automation technologies.",
        keywords:
          "careers at smyvision, web developer jobs, automation jobs, tech careers india",
      },
      "/contact": {
        title: "Contact SMYVISION Technologies | Start Your Project",
        description:
          "Contact SMYVISION Technologies for website development, chatbots, and business automation services.",
        keywords:
          "contact smyvision technologies, web development contact, automation company india",
      },
    };

    const current = seo[pathname] || seo["/"];

    // ✅ TITLE (≤ 60 chars)
    document.title = current.title.slice(0, 60);

    // ✅ META DESCRIPTION (≤ 120 chars)
    let desc = document.querySelector("meta[name='description']");
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", current.description.slice(0, 120));

    // ✅ META KEYWORDS
    let keywords = document.querySelector("meta[name='keywords']");
    if (!keywords) {
      keywords = document.createElement("meta");
      keywords.setAttribute("name", "keywords");
      document.head.appendChild(keywords);
    }
    keywords.setAttribute("content", current.keywords);
  }, [pathname]);

  return null;
}

export default SEOManager;
