import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";
import {
  FaSearch,
  FaArrowRight,
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaBookOpen,
  FaLongArrowAltRight,
  FaChevronLeft,
  FaChevronRight,
  FaRegCalendarCheck,
} from "react-icons/fa";
import BlogShareButtons from "./BlogShareButtons";

const API_URL = "https://smyvision1126.pythonanywhere.com/api/blogs/";
const BACKEND_URL = "https://smyvision1126.pythonanywhere.com";
const SITE_URL = "https://www.smyvisiontechnologies.com";
const PER_PAGE = 6;

const getImageUrl = (image) => {
  if (!image) return "";
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return `${BACKEND_URL}${image.startsWith("/") ? "" : "/"}${image}`;
};

const getReadingTime = (blog) => {
  if (blog.read_time) return blog.read_time;
  const text = (blog.content || "").replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};

const getPublishedDate = (blog) => blog.published_at || blog.created_at || null;

const getDate = (date) => {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const getTime = (date) => {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

const getFullDateTime = (date) => {
  if (!date) return "";
  return `${getDate(date)} · ${getTime(date)}`;
};

const isCurrentWeek = (dateValue) => {
  if (!dateValue) return false;

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return false;

  const now = new Date();
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  start.setDate(now.getDate() - now.getDay());

  const end = new Date(start);
  end.setDate(start.getDate() + 7);

  return date >= start && date < end;
};

const fixArticleLinks = (html) => {
  if (!html) return "";

  const cleanHTML = DOMPurify.sanitize(html, {
    ADD_ATTR: ["target", "rel"],
  });

  const parser = new DOMParser();
  const doc = parser.parseFromString(cleanHTML, "text/html");

  doc.querySelectorAll("a").forEach((anchor) => {
    let href = anchor.getAttribute("href");
    if (!href) return;

    href = href.trim();

    if (
      !href.startsWith("http://") &&
      !href.startsWith("https://") &&
      !href.startsWith("mailto:") &&
      !href.startsWith("tel:") &&
      !href.startsWith("/") &&
      !href.startsWith("#")
    ) {
      if (/^(www\.)?[\w-]+(\.[\w-]+)+([/:?#].*)?$/i.test(href)) {
        href = `https://${href}`;
      }
    }

    if (href.startsWith("www.")) href = `https://${href}`;

    anchor.setAttribute("href", href);

    if (href.startsWith("http://") || href.startsWith("https://")) {
      anchor.setAttribute("target", "_blank");
      anchor.setAttribute("rel", "noopener noreferrer");
    }
  });

  return DOMPurify.sanitize(doc.body.innerHTML, {
    ADD_ATTR: ["target", "rel"],
  });
};

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    let active = true;

    const loadBlogs = async () => {
      try {
        setLoading(true);

        const response = await fetch(API_URL);

        if (!response.ok) throw new Error("Unable to load articles.");

        const data = await response.json();
        const blogData = Array.isArray(data) ? data : data.results || [];

        if (active) {
          setBlogs(blogData);
          setError("");
        }
      } catch {
        if (active) {
          setError(
            "Unable to load our articles right now. Please try again later."
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    loadBlogs();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const updateArticleFromPath = () => {
      const match = window.location.pathname.match(/^\/blog\/([^/]+)\/?$/);

      if (!match) {
        setSelectedBlog(null);
        return;
      }

      const slug = decodeURIComponent(match[1]);
      const found = blogs.find((item) => item.slug === slug);

      if (found) setSelectedBlog(found);
    };

    updateArticleFromPath();
    window.addEventListener("popstate", updateArticleFromPath);

    return () => window.removeEventListener("popstate", updateArticleFromPath);
  }, [blogs]);

  const openArticle = (blog) => {
    setSelectedBlog(blog);
    setSearch("");
    setPage(1);

    window.history.pushState(
      {},
      "",
      `/blog/${encodeURIComponent(blog.slug)}`
    );

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToBlogs = () => {
    setSelectedBlog(null);
    window.history.pushState({}, "", "/blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredBlogs = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return blogs;

    return blogs.filter((blog) => {
      const title = (blog.title || "").toLowerCase();
      const description = (blog.short_description || "").toLowerCase();
      const content = (blog.content || "")
        .replace(/<[^>]*>/g, " ")
        .toLowerCase();

      return (
        title.includes(term) ||
        description.includes(term) ||
        content.includes(term)
      );
    });
  }, [blogs, search]);

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / PER_PAGE));

  const currentBlogs = filteredBlogs.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const weeklyBlogs = useMemo(() => {
    return blogs
      .filter((blog) => {
        const publishedDate = getPublishedDate(blog);

        return (
          publishedDate &&
          isCurrentWeek(publishedDate) &&
          blog.slug !== selectedBlog?.slug
        );
      })
      .sort(
        (a, b) =>
          new Date(getPublishedDate(b)).getTime() -
          new Date(getPublishedDate(a)).getTime()
      )
      .slice(0, 4);
  }, [blogs, selectedBlog]);

  /* ARTICLE PAGE */

  if (selectedBlog) {
    const articleUrl = `${SITE_URL}/blog/${selectedBlog.slug}`;
    const publishedDate = getPublishedDate(selectedBlog);

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: selectedBlog.title,
      description:
        selectedBlog.seo_description || selectedBlog.short_description,
      image: getImageUrl(selectedBlog.image),
      datePublished: publishedDate,
      dateModified: selectedBlog.updated_at || publishedDate,
      author: {
  "@type": "Person",
  name: selectedBlog.author_name || "Author",
},
      publisher: {
        "@type": "Organization",
        name: "SMYVISION TECHNOLOGIES",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/Logo.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": articleUrl,
      },
    };

    return (
      <>
        <Helmet>
          <html lang="en-IN" />
          <title>{selectedBlog.title} | SMYVISION TECHNOLOGIES</title>

          <meta
            name="description"
            content={
              selectedBlog.seo_description ||
              selectedBlog.short_description ||
              selectedBlog.title
            }
          />

          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={articleUrl} />

          <meta property="og:type" content="article" />
          <meta property="og:title" content={selectedBlog.title} />
          <meta
            property="og:description"
            content={selectedBlog.seo_description || selectedBlog.short_description || ""}
          />
          <meta property="og:url" content={articleUrl} />
          <meta property="og:image" content={getImageUrl(selectedBlog.image)} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={selectedBlog.title} />
          <meta
            name="twitter:description"
            content={selectedBlog.short_description || ""}
          />
          <meta name="twitter:image" content={getImageUrl(selectedBlog.image)} />

          <script type="application/ld+json">
            {JSON.stringify(articleSchema)}
          </script>
        </Helmet>

        <BlogStyles />

        <main className="bv-blog bv-reading-page">
          <div className="bv-reading-workspace">
            {/* ARTICLE MAIN */}

            <section className="bv-reading-main">
              {/* TOPBAR - IMPROVED VISIBILITY */}

              <div className="bv-reading-topbar">
                <button
                  className="bv-back-button"
                  onClick={backToBlogs}
                  type="button"
                >
                  <FaArrowLeft />
                  <span>All articles</span>
                </button>

                <a className="bv-reading-brand" href="/">
                  <img src="/Logo.png" alt="SMYVISION TECHNOLOGIES" />
                  <span>
                    SMYVISION
                    <small>JOURNAL</small>
                  </span>
                </a>
              </div>

              {/* ARTICLE HEADER */}

              <header className="bv-article-header">
                <div className="bv-article-label">
                  <span className="bv-label-dot" />
                  <span>THE SMYVISION JOURNAL</span>
                </div>

                <h1>{selectedBlog.title}</h1>

                {selectedBlog.short_description && (
                  <p className="bv-article-intro">
                    {selectedBlog.short_description}
                  </p>
                )}

                <div className="bv-article-meta-row">
                  <div className="bv-article-author-mini">
                    <div className="bv-mini-avatar">
                      <img src="/Logo.png" alt="" />
                    </div>

                    <div>
                      <strong>{selectedBlog.author_name || "Author"}</strong>
<span>{selectedBlog.author_role || "Content Writer"}</span>
                    </div>
                  </div>

                  <div className="bv-article-meta-divider" />

                  <div className="bv-article-meta-info">
                    {publishedDate && (
                      <span>
                        <FaCalendarAlt />
                        {getDate(publishedDate)}
                      </span>
                    )}

                    {publishedDate && (
                      <span>
                        <FaClock />
                        {getTime(publishedDate)}
                      </span>
                    )}

                    <span>
                      <FaBookOpen />
                      {getReadingTime(selectedBlog)} 
                    </span>
                  </div>
                </div>
              </header>

              {/* ARTICLE IMAGE */}

              {selectedBlog.image && (
                <div className="bv-article-image">
                  <img
                    src={getImageUrl(selectedBlog.image)}
                    alt={selectedBlog.title}
                  />

                  <div className="bv-article-image-caption">
                    <span>SMYVISION TECHNOLOGIES</span>
                    <span>INSIGHTS &amp; IDEAS</span>
                  </div>
                </div>
              )}

              {/* CONTENT */}

              <article className="bv-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: fixArticleLinks(selectedBlog.content),
                  }}
                />
              </article>

              {/* SHARE */}

              <div className="bv-share-section">
                <div className="bv-share-heading">
                  <span>ENJOYED THIS ARTICLE?</span>
                  <h3>Share the insight.</h3>
                </div>

                <BlogShareButtons
                  slug={selectedBlog.slug}
                  title={selectedBlog.title}
                  description={selectedBlog.short_description || ""}
                  url={articleUrl}
                />
              </div>

              {/* AUTHOR */}

              {/* AUTHOR */}

<section className="bv-founder-profile">
  <div className="bv-founder-image">
    <img
      src="/Logo.png"
      alt={selectedBlog.author_name || "Blog Author"}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  </div>

  <div className="bv-founder-details">
    <span className="bv-founder-eyebrow">
      ABOUT THE AUTHOR
    </span>

    <h2>{selectedBlog.author_name || "Author"}</h2>

    <div className="bv-founder-position">
      {selectedBlog.author_role || "Content Writer"}
      {selectedBlog.author_company
        ? ` · ${selectedBlog.author_company}`
        : ""}
    </div>

    <p>
      Sharing insights, ideas and practical solutions
      through knowledge, experience and creativity.
    </p>

    <a href="/" className="bv-author-link">
      Explore {selectedBlog.author_company || "Our Website"} <FaArrowRight />
    </a>
  </div>
</section>

              {/* END */}

              <div className="bv-reading-end">
                <div className="bv-reading-end-line" />
                <span>END OF ARTICLE</span>
                <div className="bv-reading-end-line" />
              </div>

              <button
                className="bv-bottom-back"
                onClick={backToBlogs}
                type="button"
              >
                <FaArrowLeft /> Explore all articles
              </button>
            </section>

            {/* SIDEBAR */}

            <aside className="bv-reading-sidebar">
              <div className="bv-weekly-card">
                <div className="bv-weekly-heading">
                  <div>
                    <span className="bv-weekly-eyebrow">
                      RECOMMENDED ARTICLES
                    </span>
                    <h3>Explore more</h3>
                  </div>

                  <div className="bv-weekly-icon">
                    <FaRegCalendarCheck />
                  </div>
                </div>

                {weeklyBlogs.length > 0 ? (
                  <div className="bv-weekly-list">
                    {weeklyBlogs.map((blog, index) => (
                      <button
                        key={blog.slug}
                        type="button"
                        className="bv-weekly-item"
                        onClick={() => openArticle(blog)}
                      >
                        <div className="bv-weekly-thumb">
                          {blog.image ? (
                            <img src={getImageUrl(blog.image)} alt="" />
                          ) : (
                            <FaBookOpen />
                          )}
                        </div>

                        <div className="bv-weekly-text">
                          <span className="bv-weekly-number">
                            ARTICLE 0{index + 1}
                          </span>

                          <h4>{blog.title}</h4>

                          <div className="bv-weekly-meta">
                            <span>
                              <FaClock /> {getReadingTime(blog)} min
                            </span>
                          </div>

                          <small className="bv-weekly-date">
                            {getFullDateTime(getPublishedDate(blog))}
                          </small>
                        </div>

                        <FaArrowRight className="bv-weekly-arrow" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="bv-week-empty">
                    <div className="bv-empty-icon">
                      <FaBookOpen />
                    </div>
                    <h4>No recommendations yet</h4>
                    <p>Articles will appear here when published.</p>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </main>
      </>
    );
  }

  /* BLOG LISTING */

  const listingSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "SMYVISION TECHNOLOGIES Blog",
    url: `${SITE_URL}/blog`,
    description:
      "Digital insights, website development, technology and business growth articles.",
    publisher: {
      "@type": "Organization",
      name: "SMYVISION TECHNOLOGIES",
    },
  };

  return (
    <>
      <Helmet>
        <html lang="en-IN" />

        <title>Blog | Web Development &amp; Digital Insights | SMYVISION</title>

        <meta
          name="description"
          content="Explore practical insights on web development, digital solutions, business growth and technology from SMYVISION TECHNOLOGIES."
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/blog`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="SMYVISION TECHNOLOGIES Blog" />
        <meta
          property="og:description"
          content="Digital insights, technology and business growth."
        />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:image" content={`${SITE_URL}/Logo.png`} />

        <script type="application/ld+json">
          {JSON.stringify(listingSchema)}
        </script>
      </Helmet>

      <BlogStyles />

      <main className="bv-blog bv-listing-page">
        <div className="bv-container">
          {/* HERO */}

          <section className="bv-hero">
            <motion.div
              className="bv-hero-content"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bv-hero-label">
                <span className="bv-label-dot" />
                THE SMYVISION JOURNAL
              </div>

              <h1>
                A little insight.
                <br />
                <span>A bigger perspective.</span>
              </h1>

              <p>
                Thoughtful ideas, digital knowledge and practical insights
                for businesses navigating an ever-changing digital world.
              </p>

              <div className="bv-hero-decoration">
                <span />
                <span />
                <span />
              </div>
            </motion.div>
          </section>

          {/* SEARCH */}

          <section className="bv-search-section">
            <div className="bv-search">
              <FaSearch />

              <input
                type="search"
                placeholder="Find an idea, topic or article..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  type="button"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

         
          </section>

          {/* STATES */}

          {loading ? (
            <div className="bv-loading">
              <div className="bv-spinner" />
              <p>Curating our journal...</p>
            </div>
          ) : error ? (
            <div className="bv-empty">
              <h2>We couldn't load the journal.</h2>
              <p>{error}</p>

              <button onClick={() => window.location.reload()} type="button">
                Try again
              </button>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="bv-empty">
              <FaBookOpen />
              <h2>No stories found</h2>
              <p>Try another search term.</p>
            </div>
          ) : (
            <>
              <section className="bv-grid">
                {currentBlogs.map((blog, index) => (
                  <BlogCard
                    key={blog.slug}
                    blog={blog}
                    index={index}
                    onClick={() => openArticle(blog)}
                  />
                ))}
              </section>

              {/* PAGINATION */}

              {totalPages > 1 && (
                <div className="bv-pagination">
                  <button
                    type="button"
                    disabled={page === 1}
                    onClick={() => {
                      setPage((p) => p - 1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <FaChevronLeft /> Previous
                  </button>

                  <div className="bv-page-numbers">
                    {Array.from(
                      { length: totalPages },
                      (_, index) => index + 1
                    ).map((number) => (
                      <button
                        key={number}
                        type="button"
                        className={page === number ? "bv-page-active" : ""}
                        onClick={() => {
                          setPage(number);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        {number}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    disabled={page === totalPages}
                    onClick={() => {
                      setPage((p) => p + 1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Next <FaChevronRight />
                  </button>
                </div>
              )}
            </>
          )}

          {/* CTA */}

          <section className="bv-listing-cta">
            <div className="bv-listing-cta-inner">
              <span className="bv-eyebrow">
                YOUR NEXT DIGITAL CHAPTER
              </span>

              <h2>
                Ideas start somewhere.
                <br />
                Let's build yours.
              </h2>

              <p>
                From a simple idea to a complete digital experience,
                we're ready to help your business take the next step.
              </p>

              <a href="/contact">
                Let's create something <FaLongArrowAltRight />
              </a>
            </div>

            <div className="bv-cta-orb bv-cta-orb-one" />
            <div className="bv-cta-orb bv-cta-orb-two" />
          </section>
        </div>
      </main>
    </>
  );
}

/* BLOG CARD */

function BlogCard({ blog, index = 0, onClick }) {
  return (
    <motion.article
      className="bv-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3) }}
      whileHover={{ y: -6 }}
    >
      <button className="bv-card-button" onClick={onClick} type="button">
        <div className="bv-card-image">
          {blog.image ? (
            <img
              src={getImageUrl(blog.image)}
              alt={blog.title}
              loading="lazy"
            />
          ) : (
            <div className="bv-image-placeholder">
              <FaBookOpen />
            </div>
          )}

          <div className="bv-image-overlay" />

          <span className="bv-card-tag">JOURNAL / INSIGHTS</span>

          <div className="bv-card-image-arrow">
            <FaArrowRight />
          </div>
        </div>

        <div className="bv-card-body">
          <div className="bv-card-meta">
            {getPublishedDate(blog) && (
              <span>
                <FaCalendarAlt /> {getDate(getPublishedDate(blog))}
              </span>
            )}

            <span>
              <FaClock /> {getReadingTime(blog)} 
            </span>
          </div>

          <h2>{blog.title}</h2>

          <p>
            {blog.short_description ||
              "Discover practical insights and ideas to support your digital growth."}
          </p>

          <div className="bv-card-bottom">
            <span>Read blog</span>

            <div className="bv-card-arrow">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </button>
    </motion.article>
  );
}

/* STYLES */

function BlogStyles() {
  return (
    <style>{`

      .bv-blog {
        --bv-ink:#1e293b;
        --bv-muted:#64748b;
        --bv-blue:#4f46e5;
        --bv-gold:#8b5cf6;
        --bv-border:#e2e8f0;
        --bv-paper:#f8fafc;

        width:100%;
        min-width:0;
        box-sizing:border-box;
        overflow-x:clip;
        background:linear-gradient(135deg,#f8fafc 0%,#f1f5f9 50%,#e2e8f0 100%);
        color:#1e293b;
        font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      }

      .bv-blog *,
      .bv-blog *::before,
      .bv-blog *::after {
        box-sizing:border-box;
      }

      .bv-blog button,
      .bv-blog a {
        transition:all .25s ease;
      }

      .bv-container {
        max-width:1240px;
        width:100%;
        padding:0 30px;
        margin:0 auto;
      }

      /* HERO */

      .bv-hero {
        text-align:center;
        padding:clamp(95px,12vw,155px) 0 60px;
        position:relative;
      }

      .bv-hero-content {
        position:relative;
      }

      .bv-hero-label,
      .bv-article-label {
        display:flex;
        align-items:center;
        justify-content:center;
        gap:11px;
        color:#4f46e5;
        font-size:10px;
        letter-spacing:3px;
        font-weight:900;
        margin-bottom:28px;
      }

      .bv-label-dot {
        width:7px;
        height:7px;
        background:#4f46e5;
        border-radius:50%;
        flex-shrink:0;
      }

      .bv-hero h1 {
        color:#1e293b;
        font-size:clamp(40px,6.7vw,82px);
        line-height:1.12;
        letter-spacing:-3.5px;
        font-weight:850;
        margin:0 auto 25px;
        max-width:1000px;
      }

      .bv-hero h1 span {
        color:#8b9bb0;
        font-weight:500;
      }

      .bv-hero p {
        color:#64748b;
        font-size:clamp(15px,2vw,18px);
        line-height:1.9;
        max-width:690px;
        margin:0 auto;
      }

      .bv-hero-decoration {
        display:flex;
        gap:6px;
        justify-content:center;
        margin-top:35px;
      }

      .bv-hero-decoration span {
        width:28px;
        height:2px;
        background:#c7d2fe;
      }

      .bv-hero-decoration span:nth-child(2) {
        width:48px;
        background:#1e293b;
      }

      /* SEARCH */

      .bv-search-section {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:20px;
        margin:0 0 42px;
      }

      .bv-search {
        width:100%;
        max-width:600px;
        display:flex;
        align-items:center;
        gap:15px;
        border:1px solid #e2e8f0;
        border-radius:13px;
        padding:15px 19px;
        background:#fff;
        color:#64748b;
      }

      .bv-search:focus-within {
        border-color:#818cf8;
        box-shadow:0 0 0 4px rgba(79,70,229,.09);
      }

      .bv-search input {
        border:none;
        outline:none;
        width:100%;
        min-width:0;
        color:#1e293b;
        background:transparent;
        font-size:14px;
      }

      .bv-search input::placeholder {
        color:#a0a8b4;
      }

      .bv-search button {
        border:none;
        background:transparent;
        font-size:23px;
        cursor:pointer;
        color:#64748b;
      }

      .bv-results {
        font-size:13px;
        color:#64748b;
        white-space:nowrap;
      }

      .bv-results strong {
        color:#1e293b;
        margin-right:4px;
      }

      /* GRID */

      .bv-grid {
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:28px;
        width:100%;
      }

      .bv-card {
        border:1px solid #e2e8f0;
        border-radius:20px;
        overflow:hidden;
        background:#fff;
        min-width:0;
        transition:box-shadow .35s,border-color .35s;
        box-shadow:0 10px 30px rgba(15,23,42,.045);
      }

      .bv-card:hover {
        box-shadow:0 20px 50px rgba(16,34,59,.09);
        border-color:#c7d2fe;
      }

      .bv-card-button {
        display:block;
        width:100%;
        padding:0;
        text-align:left;
        background:none;
        border:none;
        color:inherit;
        cursor:pointer;
      }

      .bv-card-image {
        height:255px;
        position:relative;
        overflow:hidden;
        background:#e9edf1;
      }

      .bv-card-image img {
        display:block;
        width:100%;
        height:100%;
        object-fit:cover;
        transition:transform .8s cubic-bezier(.2,.7,.2,1);
      }

      .bv-card:hover .bv-card-image img {
        transform:scale(1.07);
      }

      .bv-image-overlay {
        position:absolute;
        inset:0;
        background:linear-gradient(0deg,rgba(12,27,46,.48),transparent 55%);
        pointer-events:none;
      }

      .bv-card-tag {
        position:absolute;
        left:20px;
        bottom:19px;
        color:#fff;
        font-size:9px;
        font-weight:900;
        letter-spacing:2px;
      }

      .bv-card-image-arrow {
        position:absolute;
        right:18px;
        top:18px;
        display:grid;
        place-items:center;
        width:38px;
        height:38px;
        border-radius:50%;
        background:rgba(255,255,255,.93);
        color:#1e293b;
        transform:translateY(8px);
        opacity:0;
      }

      .bv-card:hover .bv-card-image-arrow {
        opacity:1;
        transform:translateY(0);
      }

      .bv-image-placeholder {
        width:100%;
        height:100%;
        display:grid;
        place-items:center;
        font-size:45px;
        color:#8ba0bb;
        background:linear-gradient(135deg,#eaf0f7,#dfe7f2);
      }

      .bv-card-body {
        padding:27px 25px 24px;
      }

      .bv-card-meta {
        display:flex;
        flex-wrap:wrap;
        gap:15px;
        margin-bottom:19px;
        color:#8b95a5;
        font-size:11px;
      }

      .bv-card-meta span {
        display:flex;
        align-items:center;
        gap:7px;
      }

      .bv-card-meta svg {
        color:#4f46e5;
      }

      .bv-card-body h2 {
        color:#1e293b;
        font-size:21px;
        line-height:1.48;
        margin:0 0 14px;
        font-weight:800;
        overflow-wrap:anywhere;
        letter-spacing:-.3px;
      }

      .bv-card-body p {
        color:#768195;
        font-size:13px;
        line-height:1.9;
        margin:0 0 26px;
        display:-webkit-box;
        -webkit-line-clamp:3;
        -webkit-box-orient:vertical;
        overflow:hidden;
      }

      .bv-card-bottom {
        display:flex;
        align-items:center;
        justify-content:space-between;
        color:#1e293b;
        font-size:12px;
        font-weight:800;
        padding-top:18px;
        border-top:1px solid #f0efec;
      }

      .bv-card-arrow {
        display:grid;
        place-items:center;
        width:35px;
        height:35px;
        border-radius:50%;
        background:linear-gradient(135deg,#4f46e5,#8b5cf6);
        color:#fff;
      }

      .bv-card:hover .bv-card-arrow {
        transform:translateX(4px);
      }

      /* PAGINATION */

      .bv-pagination {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        gap:14px;
        margin:55px 0;
      }

      .bv-pagination button {
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:8px;
        border:1px solid #e2e8f0;
        background:white;
        border-radius:10px;
        min-width:40px;
        min-height:40px;
        padding:8px 12px;
        color:#1e293b;
        cursor:pointer;
      }

      .bv-pagination button:hover:not(:disabled) {
        border-color:#818cf8;
      }

      .bv-pagination button:disabled {
        opacity:.4;
        cursor:not-allowed;
      }

      .bv-page-numbers {
        display:flex;
        flex-wrap:wrap;
        gap:8px;
      }

      .bv-pagination .bv-page-active {
        background:#1e293b;
        color:white;
        border-color:#1e293b;
      }

      /* CTA */

      .bv-listing-cta {
        margin:100px 0 30px;
        border-radius:26px;
        padding:clamp(40px,7vw,90px);
        background:#10223b;
        color:white;
        text-align:center;
        position:relative;
        overflow:hidden;
      }

      .bv-listing-cta-inner {
        position:relative;
        z-index:2;
      }

      .bv-listing-cta h2 {
        font-size:clamp(30px,5vw,55px);
        line-height:1.3;
        color:white;
        font-weight:850;
        margin:20px 0;
        letter-spacing:-1.5px;
      }

      .bv-listing-cta p {
        color:#c4d0df;
        font-size:15px;
        line-height:1.9;
        max-width:600px;
        margin:0 auto 32px;
      }

      .bv-listing-cta a {
        display:inline-flex;
        align-items:center;
        gap:12px;
        background:#fff;
        color:#10223b;
        text-decoration:none;
        font-weight:800;
        font-size:13px;
        padding:15px 24px;
        border-radius:10px;
      }

      .bv-listing-cta a:hover {
        transform:translateY(-3px);
        background:#e0e7ff;
      }

      .bv-eyebrow {
        color:#c8ac7b;
        font-size:10px;
        letter-spacing:3px;
        font-weight:900;
      }

      .bv-cta-orb {
        position:absolute;
        border-radius:50%;
        border:1px solid rgba(255,255,255,.08);
        pointer-events:none;
      }

      .bv-cta-orb-one {
        width:450px;
        height:450px;
        right:-200px;
        top:-230px;
      }

      .bv-cta-orb-two {
        width:250px;
        height:250px;
        left:-120px;
        bottom:-120px;
      }

      /* STATES */

      .bv-loading,
      .bv-empty {
        text-align:center;
        padding:90px 20px;
        color:#64748b;
      }

      .bv-empty h2 {
        color:#1e293b;
      }

      .bv-empty button {
        padding:12px 22px;
        background:#1e293b;
        color:white;
        border:none;
        border-radius:10px;
        cursor:pointer;
      }

      .bv-spinner {
        width:42px;
        height:42px;
        border:3px solid #e6e5e1;
        border-top-color:#1e293b;
        border-radius:50%;
        margin:0 auto 20px;
        animation:bv-spin .8s linear infinite;
      }

      @keyframes bv-spin {
        to { transform:rotate(360deg); }
      }

      /* ARTICLE PAGE */

      .bv-reading-page {
        padding:0;
        height:100dvh;
        overflow:hidden;
        background:transparent;
      }

      .bv-reading-workspace {
        max-width:1400px;
        margin:0 auto;
        height:100%;
        padding:0 36px;
        display:grid;
        grid-template-columns:minmax(0,1fr) 340px;
        gap:34px;
        align-items:stretch;
      }

      /* MAIN SCROLL */

      .bv-reading-main {
        min-width:0;
        height:100%;
        overflow-y:auto;
        overflow-x:hidden;
        padding:100px 30px 60px 0;
        scrollbar-width:thin;
        scrollbar-color:#d3d5d8 transparent;
      }

      .bv-reading-main::-webkit-scrollbar {
        width:5px;
      }

      .bv-reading-main::-webkit-scrollbar-thumb {
        background:#d3d5d8;
        border-radius:10px;
      }

      /* TOPBAR FIX */

      .bv-reading-topbar {
        display:flex;
        align-items:center;
        justify-content:space-between;
        flex-wrap:wrap;
        gap:18px;
        width:100%;
        margin-bottom:28px;
        padding:36px 32px;
        border:1px solid #e2e8f0;
        border-radius:16px;
        background:rgba(255,255,255,.95);
        box-shadow:0 8px 25px rgba(15,23,42,.04);
      }

      .bv-back-button {
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:12px;
        border:1px solid #e0e7ff;
        background:#eef2ff;
        color:#4f46e5;
        padding:13px 18px;
        border-radius:12px;
        cursor:pointer;
        font-size:13px;
        font-weight:800;
        flex-shrink:0;
      }

      .bv-back-button svg {
        font-size:19px;
      }

      .bv-back-button:hover {
        background:#4f46e5;
        color:white;
        transform:translateX(-3px);
      }

      .bv-reading-brand {
        display:flex;
        align-items:center;
        gap:11px;
        color:#1e293b;
        text-decoration:none;
        font-weight:900;
        font-size:12px;
        letter-spacing:1.5px;
        flex-shrink:0;
      }

      .bv-reading-brand img {
        width:42px;
        height:42px;
        object-fit:contain;
      }

      .bv-reading-brand small {
        display:block;
        font-size:9px;
        letter-spacing:3px;
        color:#4f46e5;
        margin-top:5px;
      }

      /* ARTICLE HEADER */

      .bv-article-header {
        margin:0 0 38px;
        text-align:left;
      }

      .bv-article-header .bv-article-label {
        justify-content:flex-start;
        margin-bottom:24px;
      }

      .bv-article-header h1 {
        font-size:clamp(35px,4.7vw,68px);
        font-weight:850;
        line-height:1.15;
        letter-spacing:-2.7px;
        color:#1e293b;
        margin:0 0 26px;
        overflow-wrap:anywhere;
      }

      .bv-article-intro {
        font-size:clamp(16px,1.8vw,21px);
        line-height:1.85;
        color:#798396;
        margin:0 0 35px;
        max-width:850px;
      }

      .bv-article-meta-row {
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        gap:22px;
        padding:23px 0;
        border-top:1px solid #e2e8f0;
        border-bottom:1px solid #e2e8f0;
      }

      .bv-article-author-mini {
        display:flex;
        align-items:center;
        gap:12px;
      }

      .bv-mini-avatar {
        width:43px;
        height:43px;
        border-radius:50%;
        background:white;
        border:1px solid #e8e5df;
        overflow:hidden;
        display:grid;
        place-items:center;
      }

      .bv-mini-avatar img {
        width:100%;
        height:100%;
        object-fit:contain;
        padding:4px;
      }

      .bv-article-author-mini div:last-child {
        display:flex;
        flex-direction:column;
        gap:4px;
      }

      .bv-article-author-mini strong {
        font-size:12px;
        color:#1e293b;
        font-weight:800;
      }

      .bv-article-author-mini span {
        font-size:10px;
        color:#8a94a4;
      }

      .bv-article-meta-divider {
        width:1px;
        height:38px;
        background:#e5e3df;
      }

      .bv-article-meta-info {
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        gap:20px;
      }

      .bv-article-meta-info span {
        display:inline-flex;
        align-items:center;
        gap:8px;
        color:#7d8797;
        font-size:11px;
      }

      .bv-article-meta-info svg {
        color:#4f46e5;
      }

      /* IMAGE */

      .bv-article-image {
        width:100%;
        margin:0 0 50px;
        border-radius:20px;
        overflow:hidden;
        background:#eef1f4;
        position:relative;
      }

      .bv-article-image img {
        width:100%;
        max-height:600px;
        object-fit:cover;
        display:block;
      }

      .bv-article-image-caption {
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        padding:20px 23px;
        display:flex;
        justify-content:space-between;
        gap:10px;
        color:white;
        font-size:9px;
        font-weight:800;
        letter-spacing:2px;
        background:linear-gradient(0deg,rgba(10,22,39,.55),transparent);
      }

      /* CONTENT */

      .bv-content {
        min-width:0;
        width:100%;
        overflow-wrap:anywhere;
        color:#3f4c60;
        font-size:17px;
        line-height:2;
      }

      .bv-content p {
        margin:0 0 27px;
        color:#3f4c60;
      }

      .bv-content h1,
      .bv-content h2,
      .bv-content h3,
      .bv-content h4 {
        color:#1e293b;
        line-height:1.45;
        margin:42px 0 20px;
        font-weight:850;
        overflow-wrap:anywhere;
        letter-spacing:-.5px;
      }

      .bv-content h1 { font-size:35px; }
      .bv-content h2 { font-size:29px; }
      .bv-content h3 { font-size:24px; }
      .bv-content h4 { font-size:20px; }

      .bv-content ul,
      .bv-content ol {
        padding-left:28px;
        margin:0 0 30px;
      }

      .bv-content li {
        margin-bottom:12px;
      }

      .bv-content a {
        color:#174f91;
        text-decoration:underline;
        text-decoration-thickness:1px;
        text-underline-offset:4px;
        overflow-wrap:anywhere;
        word-break:break-word;
      }

      .bv-content a:hover {
        color:#10223b;
      }

      .bv-content img {
        max-width:100%;
        width:auto;
        height:auto;
        display:block;
        margin:35px auto;
        border-radius:15px;
      }

      .bv-content table {
        width:100%;
        max-width:100%;
        border-collapse:collapse;
        margin:30px 0;
        display:block;
        overflow-x:auto;
      }

      .bv-content table th,
      .bv-content table td {
        border:1px solid #e5e6e7;
        padding:13px;
        text-align:left;
        min-width:120px;
      }

      .bv-content table th {
        background:#f1f2f3;
        color:#1e293b;
      }

      .bv-content blockquote {
        border-left:3px solid #4f46e5;
        margin:35px 0;
        padding:25px 28px;
        background:#f3f1ed;
        border-radius:0 12px 12px 0;
        color:#526075;
      }

      .bv-content pre {
        overflow-x:auto;
        max-width:100%;
        padding:22px;
        background:#10223b;
        color:#e2e8f0;
        border-radius:12px;
      }

      /* SHARE */

      .bv-share-section {
        padding:35px 0;
        margin:50px 0 25px;
        border-top:1px solid #e8e6e2;
        border-bottom:1px solid #e8e6e2;
      }

      .bv-share-heading {
        margin-bottom:22px;
      }

      .bv-share-heading span {
        display:block;
        color:#4f46e5;
        font-size:10px;
        font-weight:900;
        letter-spacing:2.5px;
        margin-bottom:8px;
      }

      .bv-share-heading h3 {
        color:#1e293b;
        font-size:24px;
        margin:0;
        font-weight:850;
      }

      /* AUTHOR */

      .bv-founder-profile {
        display:flex;
        align-items:center;
        gap:28px;
        padding:32px;
        margin:45px 0;
        border:1px solid #e2e8f0;
        border-radius:18px;
        background:#fff;
      }

      .bv-founder-image {
        width:115px;
        height:115px;
        flex-shrink:0;
        border-radius:18px;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#fbfaf8;
        border:1px solid #e9e7e2;
        overflow:hidden;
      }

      .bv-founder-image img {
        width:100%;
        height:100%;
        object-fit:contain;
        padding:12px;
      }

      .bv-founder-eyebrow {
        display:block;
        color:#4f46e5;
        font-size:10px;
        font-weight:900;
        letter-spacing:2.5px;
        margin-bottom:10px;
      }

      .bv-founder-details h2 {
        color:#1e293b;
        font-size:27px;
        font-weight:850;
        margin:0 0 8px;
        letter-spacing:-.5px;
      }

      .bv-founder-position {
        color:#254d77;
        font-size:13px;
        font-weight:800;
        line-height:1.7;
        margin-bottom:12px;
      }

      .bv-founder-details p {
        color:#7c8797;
        font-size:13px;
        line-height:1.85;
        margin:0 0 16px;
      }

      .bv-author-link {
        display:inline-flex;
        align-items:center;
        gap:8px;
        color:#1e293b;
        font-size:12px;
        font-weight:800;
        text-decoration:none;
      }

      .bv-author-link:hover {
        color:#4f46e5;
      }

      .bv-reading-end {
        display:flex;
        align-items:center;
        gap:15px;
        margin:50px 0 25px;
        color:#a1a8b2;
        font-size:9px;
        font-weight:900;
        letter-spacing:3px;
      }

      .bv-reading-end-line {
        height:1px;
        flex:1;
        background:#e8e6e2;
      }

      .bv-bottom-back {
        display:inline-flex;
        align-items:center;
        gap:12px;
        padding:14px 20px;
        background:#10223b;
        color:white;
        border:none;
        border-radius:10px;
        cursor:pointer;
        font-weight:700;
        font-size:13px;
        margin-bottom:20px;
      }

      .bv-bottom-back:hover {
        transform:translateY(-2px);
      }

      /* SIDEBAR */

      .bv-reading-sidebar {
        min-width:0;
        height:100%;
        overflow-y:auto;
        overflow-x:hidden;
        padding:clamp(110px,15vh,190px) 0 30px;
        scrollbar-width:thin;
        scrollbar-color:#d3d5d8 transparent;
      }

      .bv-reading-sidebar::-webkit-scrollbar {
        width:5px;
      }

      .bv-reading-sidebar::-webkit-scrollbar-thumb {
        background:#d3d5d8;
        border-radius:10px;
      }

      /* RECOMMENDATIONS */

      .bv-weekly-card {
        background:rgba(255,255,255,.92);
        border:1px solid #e2e8f0;
        border-radius:22px;
        box-shadow:0 18px 45px rgba(15,23,42,.07);
        padding:26px;
        margin-bottom:25px;
      }

      .bv-weekly-heading {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:15px;
        margin-bottom:22px;
      }

      .bv-weekly-eyebrow {
        display:block;
        color:#4f46e5;
        font-size:9px;
        font-weight:900;
        letter-spacing:2.2px;
        margin-bottom:8px;
      }

      .bv-weekly-heading h3 {
        color:#1e293b;
        font-size:26px;
        font-weight:850;
        margin:0;
        letter-spacing:-.6px;
      }

      .bv-weekly-icon {
        width:43px;
        height:43px;
        border-radius:13px;
        display:grid;
        place-items:center;
        color:#fff;
        background:linear-gradient(135deg,#4f46e5,#8b5cf6);
        font-size:18px;
        flex-shrink:0;
      }

      .bv-weekly-item {
        display:flex;
        align-items:flex-start;
        gap:12px;
        width:100%;
        padding:18px 0;
        border:none;
        border-bottom:1px solid #e2e8f0;
        background:transparent;
        text-align:left;
        cursor:pointer;
        border-radius:14px;
      }

      .bv-weekly-item:last-child {
        border-bottom:none;
        padding-bottom:3px;
      }

      .bv-weekly-item:hover {
        transform:translateY(-3px);
        box-shadow:0 12px 26px rgba(79,70,229,.10);
      }

      .bv-weekly-thumb {
        width:75px;
        height:75px;
        flex-shrink:0;
        border-radius:12px;
        background:#f1f2f3;
        display:grid;
        place-items:center;
        color:#294c70;
        overflow:hidden;
      }

      .bv-weekly-thumb img {
        width:100%;
        height:100%;
        object-fit:cover;
      }

      .bv-weekly-text {
        flex:1;
        min-width:0;
      }

      .bv-weekly-number {
        display:block;
        color:#4f46e5;
        font-size:9px;
        font-weight:900;
        letter-spacing:1.5px;
        margin-bottom:8px;
      }

      .bv-weekly-text h4 {
        color:#1e293b;
        font-size:13px;
        font-weight:800;
        line-height:1.6;
        margin:0 0 10px;
        overflow-wrap:anywhere;
      }

      .bv-weekly-meta {
        display:flex;
        align-items:center;
        gap:6px;
        color:#7e8998;
        font-size:10px;
      }

      .bv-weekly-meta span {
        display:flex;
        align-items:center;
        gap:6px;
      }

      .bv-weekly-meta svg {
        color:#4f46e5;
      }

      .bv-weekly-date {
        display:block;
        color:#9ba3ae;
        font-size:9px;
        line-height:1.7;
        margin-top:8px;
      }

      .bv-weekly-arrow {
        color:#a2a9b4;
        margin-top:10px;
        flex-shrink:0;
        font-size:11px;
      }

      .bv-weekly-item:hover .bv-weekly-arrow {
        transform:translateX(3px);
      }

      .bv-week-empty {
        text-align:center;
        padding:35px 10px 15px;
        color:#7a8696;
      }

      .bv-empty-icon {
        width:55px;
        height:55px;
        display:grid;
        place-items:center;
        margin:0 auto 15px;
        background:#f2f2ef;
        color:#4f46e5;
        border-radius:16px;
        font-size:22px;
      }

      .bv-week-empty h4 {
        color:#1e293b;
        font-size:15px;
        margin:0 0 10px;
      }

      .bv-week-empty p {
        font-size:12px;
        line-height:1.8;
        margin:0;
      }

      /* RESPONSIVE */

      @media(max-width:1150px) {
        .bv-grid {
          grid-template-columns:repeat(2,minmax(0,1fr));
        }

        .bv-reading-workspace {
          grid-template-columns:minmax(0,1fr) 315px;
          gap:30px;
          padding:0 24px;
        }

        .bv-article-header h1 {
          font-size:clamp(34px,4.5vw,54px);
        }

        .bv-reading-main {
          padding-right:20px;
        }
      }

      @media(max-width:900px) {
        .bv-reading-page {
          height:auto;
          min-height:100vh;
          overflow:visible;
        }

        .bv-reading-workspace {
          height:auto;
          grid-template-columns:1fr;
          padding:0 18px;
          gap:20px;
        }

        .bv-reading-main {
          height:auto;
          overflow:visible;
          padding:85px 0 45px;
        }

        .bv-reading-sidebar {
          height:auto;
          overflow:visible;
          padding:0 0 30px;
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:22px;
          align-items:start;
        }
      }

      @media(max-width:650px) {
        .bv-container {
          padding:0 17px;
        }

        .bv-hero {
          padding:95px 0 42px;
        }

        .bv-hero h1 {
          font-size:clamp(37px,10vw,53px);
          letter-spacing:-2px;
        }

        .bv-hero p {
          font-size:14px;
        }

        .bv-search-section {
          flex-direction:column;
          align-items:stretch;
          gap:12px;
        }

        .bv-search {
          max-width:none;
          padding:14px 15px;
        }

        .bv-results {
          text-align:right;
        }

        .bv-grid {
          grid-template-columns:minmax(0,1fr);
          gap:23px;
        }

        .bv-card-image {
          height:235px;
        }

        .bv-card-body {
          padding:22px;
        }

        .bv-card-body h2 {
          font-size:20px;
        }

        .bv-card-image-arrow {
          opacity:1;
          transform:none;
        }

        .bv-listing-cta {
          margin:60px 0 20px;
          padding:40px 23px;
          border-radius:20px;
        }

        .bv-listing-cta h2 {
          font-size:34px;
          letter-spacing:-1px;
        }

        /* MOBILE TOPBAR VISIBILITY FIX */

        .bv-reading-workspace {
          display:flex;
          flex-direction:column;
          padding:0 17px 35px;
          gap:30px;
        }

        .bv-reading-main {
          width:100%;
          padding-top:85px;
        }

        .bv-reading-topbar {
          display:flex;
          flex-direction:column-reverse;
          align-items:stretch;
          justify-content:flex-start;
          gap:14px;
          width:100%;
          margin-bottom:32px;
          padding:19px;
          border-radius:16px;
        }

        .bv-reading-brand {
          font-size:11px;
          justify-content:flex-start;
          width:100%;
          padding-bottom:12px;
          border-bottom:1px solid #e2e8f0;
        }

        .bv-reading-brand img {
          width:38px;
          height:38px;
        }

        .bv-back-button {
          width:100%;
          justify-content:center;
          padding:15px 18px;
          min-height:48px;
          font-size:14px;
          border-radius:12px;
        }

        .bv-article-header {
          margin:10px 0 30px;
        }

        .bv-article-header h1 {
          font-size:clamp(31px,8.6vw,43px);
          letter-spacing:-1.3px;
        }

        .bv-article-intro {
          font-size:16px;
        }

        .bv-article-meta-row {
          gap:16px;
          padding:20px 0;
        }

        .bv-article-meta-divider {
          display:none;
        }

        .bv-article-meta-info {
          gap:13px;
        }

        .bv-article-meta-info span {
          font-size:10px;
        }

        .bv-article-image {
          margin-bottom:30px;
          border-radius:14px;
        }

        .bv-article-image img {
          max-height:350px;
        }

        .bv-article-image-caption {
          padding:13px;
          font-size:8px;
          letter-spacing:1px;
        }

        .bv-content {
          font-size:16px;
          line-height:1.9;
        }

        .bv-content h1 { font-size:28px; }
        .bv-content h2 { font-size:24px; }
        .bv-content h3 { font-size:21px; }
        .bv-content h4 { font-size:19px; }

        .bv-content p {
          margin-bottom:22px;
        }

        .bv-reading-sidebar {
          grid-template-columns:minmax(0,1fr);
          width:100%;
        }

        .bv-founder-profile {
          padding:23px 18px;
          gap:17px;
          border-radius:15px;
          align-items:flex-start;
        }

        .bv-founder-image {
          width:80px;
          height:80px;
          border-radius:14px;
        }

        .bv-founder-details h2 {
          font-size:21px;
        }

        .bv-founder-position {
          font-size:11px;
        }

        .bv-founder-details p {
          font-size:12px;
        }

        .bv-share-heading h3 {
          font-size:22px;
        }

        .bv-weekly-thumb {
          width:75px;
          height:75px;
        }

        .bv-pagination {
          gap:8px;
        }

        .bv-pagination button {
          min-width:36px;
          min-height:36px;
          padding:8px;
          font-size:12px;
        }
      }

      @media(max-width:390px) {
        .bv-container {
          padding:0 13px;
        }

        .bv-reading-workspace {
          padding:0 12px 30px;
        }

        .bv-reading-main {
          padding-top:80px;
        }

        .bv-article-meta-info {
          gap:10px;
        }

        .bv-founder-profile {
          flex-direction:column;
        }

        .bv-weekly-item {
          gap:10px;
        }

        .bv-weekly-thumb {
          width:65px;
          height:65px;
        }

        .bv-article-header h1 {
          letter-spacing:-1px;
        }
      }

    `}</style>
  );
}

export default Blog;