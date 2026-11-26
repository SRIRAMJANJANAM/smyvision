
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaLink,
  FaShareAlt,
} from "react-icons/fa";

const API = "http://127.0.0.1:8000/api/blogs";

function BlogShareButtons({ slug, title, description = "" }) {
  const [copied, setCopied] = useState(false);

  const articleUrl = `${window.location.origin}/blog/${slug}`;

  const trackShare = async (platform) => {
    try {
      await fetch(`${API}/${slug}/share/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ platform }),
      });
    } catch (error) {
      console.error("Share tracking error:", error);
    }
  };

  const shareTo = async (platform, url) => {
    await trackShare(platform);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      await trackShare("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: articleUrl,
        });
        await trackShare("native");
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Native share failed:", error);
        }
      }
    } else {
      await copyLink();
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.heading}>
        <div>
          <h3 style={styles.title}>Share this article</h3>
          <p style={styles.subtitle}>
            Share these insights with your network
          </p>
        </div>
        <div style={styles.headingIcon}>
          <FaShareAlt />
        </div>
      </div>

      <div style={styles.buttons}>
        <button
          style={{ ...styles.button, background: "#25D366" }}
          onClick={() =>
            shareTo(
              "whatsapp",
              `https://wa.me/?text=${encodeURIComponent(
                title + " " + articleUrl
              )}`
            )
          }
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </button>

        <button
          style={{ ...styles.button, background: "#0A66C2" }}
          onClick={() =>
            shareTo(
              "linkedin",
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                articleUrl
              )}`
            )
          }
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </button>

        <button
          style={{ ...styles.button, background: "#1877F2" }}
          onClick={() =>
            shareTo(
              "facebook",
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                articleUrl
              )}`
            )
          }
        >
          <FaFacebook />
          <span>Facebook</span>
        </button>

        <button
          style={{ ...styles.button, background: "#111827" }}
          onClick={() =>
            shareTo(
              "twitter",
              `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                title
              )}&url=${encodeURIComponent(articleUrl)}`
            )
          }
        >
          <FaTwitter />
          <span>X / Twitter</span>
        </button>

        <button
          style={{ ...styles.button, background: "#64748b" }}
          onClick={nativeShare}
        >
          <FaShareAlt />
          <span>More</span>
        </button>

        <button
          style={{
            ...styles.button,
            background: copied ? "#16a34a" : "#06384f",
          }}
          onClick={copyLink}
        >
          <FaLink />
          <span>{copied ? "Copied!" : "Copy Link"}</span>
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    margin: "40px 0",
    padding: "28px",
    background: "linear-gradient(135deg, #f8fafc, #ffffff)",
    border: "1px solid #e2e8f0",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(15,23,42,0.05)",
  },

  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    marginBottom: "24px",
  },

  title: {
    margin: "0 0 8px",
    color: "#0f172a",
    fontSize: "22px",
    fontWeight: "800",
  },

  subtitle: {
    margin: 0,
    color: "#64748b",
    fontSize: "14px",
  },

  headingIcon: {
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#e0f2fe",
    color: "#06384f",
    borderRadius: "14px",
    fontSize: "20px",
    flexShrink: 0,
  },

  buttons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },

  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    border: "none",
    padding: "13px 18px",
    borderRadius: "12px",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.25s ease",
  },
};

export default BlogShareButtons;
