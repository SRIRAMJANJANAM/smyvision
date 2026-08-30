import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaShieldHalved,
  FaDatabase,
  FaCookieBite,
  FaLink,
  FaUserShield,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa6";

const PrivacyPolicy = () => {
  const WEBSITE_URL = "https://smyvisiontechnologies.com";

  const sections = [
    {
      icon: <FaDatabase />,
      title: "Information We Collect",
      content: (
        <>
          <p>
            SMYVISION TECHNOLOGIES may collect information you provide directly
            to us, including your name, email address, phone number, business or
            company name, project requirements, and any other information you
            choose to provide when filling out forms, requesting quotations,
            contacting us through WhatsApp, or enquiring about our services.
          </p>
        </>
      ),
    },
    {
      icon: <FaUserShield />,
      title: "How We Use Your Information",
      content: (
        <>
          <p>We may use the information we collect to:</p>

          <ul>
            <li>Respond to your enquiries</li>
            <li>Understand your project requirements</li>
            <li>Provide quotations and service information</li>
            <li>Communicate with you regarding projects and services</li>
            <li>Provide technical and customer support</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Maintain necessary business and communication records</li>
          </ul>
        </>
      ),
    },
    {
      icon: <FaShieldHalved />,
      title: "Information Sharing",
      content: (
        <>
          <p>
            SMYVISION TECHNOLOGIES does not sell or trade your personal
            information.
          </p>

          <p>
            We may share limited information with trusted third-party service
            providers when reasonably necessary to operate our website, provide
            hosting or technical services, process payments, use analytics tools,
            communicate with customers, or deliver agreed services.
          </p>

          <p>
            Where applicable, such third-party providers are responsible for
            handling information according to their own privacy and security
            obligations.
          </p>
        </>
      ),
    },
    {
      icon: <FaShieldHalved />,
      title: "Data Security",
      content: (
        <>
          <p>
            We take reasonable security measures to help protect your personal
            information against unauthorized access, alteration, disclosure,
            misuse, or destruction.
          </p>

          <p>
            However, no method of transmission over the Internet or electronic
            storage system can be guaranteed to be completely secure.
          </p>
        </>
      ),
    },
    {
      icon: <FaCookieBite />,
      title: "Cookies",
      content: (
        <>
          <p>
            Our website may use cookies and similar technologies to improve
            website functionality, understand visitor interactions, and analyse
            website performance.
          </p>

          <p>
            We may also use services such as Google Analytics for website
            analytics.
          </p>

          <p>
            You can choose to disable cookies through your browser settings,
            although doing so may affect certain website functionality.
          </p>
        </>
      ),
    },
    {
      icon: <FaLink />,
      title: "Third-Party Links",
      content: (
        <>
          <p>
            Our website may contain links to third-party websites, client
            websites, social media platforms, WhatsApp, payment services, or
            other external resources.
          </p>

          <p>
            SMYVISION TECHNOLOGIES is not responsible for the privacy practices,
            security, availability, or content of external websites or
            third-party services.
          </p>

          <p>
            We recommend reviewing the privacy policies of any third-party
            services you use.
          </p>
        </>
      ),
    },
    {
      icon: <FaUserShield />,
      title: "Your Rights",
      content: (
        <>
          <p>
            You may contact us to request access to, correction of, or deletion
            of personal information you have provided to SMYVISION TECHNOLOGIES,
            subject to applicable legal, contractual, and business record
            requirements.
          </p>

          <p>
            You may also request that we stop sending promotional or marketing
            communications.
          </p>

          <p>
            For privacy-related requests, contact us at{" "}
            <a href="mailto:smyvisiontechnologies@gmail.com">
              smyvisiontechnologies@gmail.com
            </a>
            .
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | SMYVISION TECHNOLOGIES</title>

        <meta
          name="description"
          content="Read the SMYVISION TECHNOLOGIES Privacy Policy to understand how information may be collected, used, shared and protected when using our website and services."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />

        <link rel="canonical" href={`${WEBSITE_URL}/privacy-policy`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SMYVISION TECHNOLOGIES" />
        <meta
          property="og:title"
          content="Privacy Policy | SMYVISION TECHNOLOGIES"
        />
        <meta
          property="og:description"
          content="Learn how SMYVISION TECHNOLOGIES handles information provided through our website and services."
        />
        <meta property="og:url" content={`${WEBSITE_URL}/privacy-policy`} />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Privacy Policy | SMYVISION TECHNOLOGIES"
        />
        <meta
          name="twitter:description"
          content="Learn how SMYVISION TECHNOLOGIES handles information provided through our website and services."
        />
      </Helmet>

      <main className="privacy-page">
        <section className="privacy-hero">
          <div className="privacy-container">
            <span className="privacy-label">
              <FaShieldHalved />
              PRIVACY & DATA
            </span>

            <h1>Privacy Policy</h1>

            <p className="privacy-hero-text">
              This Privacy Policy explains how SMYVISION TECHNOLOGIES may
              collect, use, share, and protect information when you use our
              website or contact us regarding our services.
            </p>

            <span className="privacy-updated">
              Last Updated: August 31, 2026
            </span>
          </div>
        </section>

        <section className="privacy-content">
          <div className="privacy-container">
            <div className="privacy-intro">
              <div className="privacy-intro-icon">
                <FaShieldHalved />
              </div>

              <div>
                <h2>Your Privacy Matters</h2>
                <p>
                  SMYVISION TECHNOLOGIES respects your privacy and is committed
                  to handling personal information responsibly.
                </p>
              </div>
            </div>

            <div className="privacy-sections">
              {sections.map((section, index) => (
                <article className="privacy-card" key={section.title}>
                  <span className="privacy-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="privacy-card-heading">
                    <span className="privacy-card-icon">{section.icon}</span>
                    <h2>{section.title}</h2>
                  </div>

                  <div className="privacy-card-body">{section.content}</div>
                </article>
              ))}
            </div>

            <div className="privacy-contact">
              <span className="privacy-contact-label">CONTACT US</span>

              <h2>Questions About This Privacy Policy?</h2>

              <p>
                If you have any questions about this Privacy Policy or how
                SMYVISION TECHNOLOGIES handles information, you can contact us
                using the details below.
              </p>

              <div className="privacy-contact-grid">
                <a href="mailto:smyvisiontechnologies@gmail.com">
                  <FaEnvelope />
                  <span>
                    <small>Email</small>
                    smyvisiontechnologies@gmail.com
                  </span>
                </a>

                <a href="tel:+918500352005">
                  <FaPhone />
                  <span>
                    <small>Phone</small>
                    +91 8500352005
                  </span>
                </a>

                <a
                  href="https://smyvisiontechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe />
                  <span>
                    <small>Website</small>
                    smyvisiontechnologies.com
                  </span>
                </a>
              </div>

              <div className="privacy-location">
                Andhra Pradesh, India
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .privacy-page {
            min-height: 100vh;
            background: #f7faff;
            color: #07162d;
            font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
              sans-serif;
          }

          .privacy-container {
            width: min(1060px, calc(100% - 40px));
            margin: 0 auto;
          }

          .privacy-hero {
            position: relative;
            overflow: hidden;
            padding: 145px 0 78px;
            text-align: center;
            background:
              radial-gradient(
                circle at 50% -10%,
                rgba(7, 88, 232, 0.16),
                transparent 45%
              ),
              linear-gradient(180deg, #ffffff 0%, #f7faff 100%);
            border-bottom: 1px solid #e3ebf6;
          }

          .privacy-hero::before {
            content: "";
            position: absolute;
            width: 420px;
            height: 420px;
            border-radius: 50%;
            background: rgba(7, 88, 232, 0.05);
            filter: blur(20px);
            top: -230px;
            left: 50%;
            transform: translateX(-50%);
          }

          .privacy-label {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 9px;
            padding: 9px 15px;
            border: 1px solid rgba(7, 88, 232, 0.16);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.9);
            color: #0758e8;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.15em;
          }

          .privacy-hero h1 {
            position: relative;
            margin: 20px 0 18px;
            font-size: clamp(3rem, 7vw, 5.4rem);
            line-height: 1;
            letter-spacing: -0.055em;
            color: #07162d;
          }

          .privacy-hero-text {
            position: relative;
            max-width: 760px;
            margin: 0 auto;
            color: #607086;
            font-size: clamp(1rem, 2vw, 1.1rem);
            line-height: 1.8;
          }

          .privacy-updated {
            position: relative;
            display: inline-block;
            margin-top: 24px;
            color: #8795a8;
            font-size: 13px;
            font-weight: 600;
          }

          .privacy-content {
            padding: 75px 0 100px;
          }

          .privacy-intro {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            padding: 28px;
            margin-bottom: 28px;
            border: 1px solid rgba(7, 88, 232, 0.14);
            border-radius: 22px;
            background: linear-gradient(135deg, #ffffff, #f4f8ff);
            box-shadow: 0 18px 50px rgba(7, 22, 45, 0.055);
          }

          .privacy-intro-icon {
            width: 52px;
            height: 52px;
            display: grid;
            place-items: center;
            flex-shrink: 0;
            border-radius: 15px;
            background: #0758e8;
            color: #fff;
            font-size: 21px;
            box-shadow: 0 12px 26px rgba(7, 88, 232, 0.2);
          }

          .privacy-intro h2 {
            margin: 0 0 8px;
            font-size: 23px;
          }

          .privacy-intro p {
            margin: 0;
            color: #607086;
            line-height: 1.75;
          }

          .privacy-sections {
            display: grid;
            gap: 18px;
          }

          .privacy-card {
            position: relative;
            padding: 30px;
            background: #fff;
            border: 1px solid #dfe8f4;
            border-radius: 20px;
            box-shadow: 0 12px 36px rgba(8, 28, 56, 0.045);
          }

          .privacy-number {
            position: absolute;
            top: 24px;
            right: 27px;
            color: #d9e6fa;
            font-size: 35px;
            font-weight: 900;
            line-height: 1;
          }

          .privacy-card-heading {
            display: flex;
            align-items: center;
            gap: 13px;
            padding-right: 60px;
          }

          .privacy-card-icon {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            flex-shrink: 0;
            border-radius: 12px;
            background: #edf4ff;
            color: #0758e8;
          }

          .privacy-card-heading h2 {
            margin: 0;
            color: #07162d;
            font-size: 21px;
          }

          .privacy-card-body {
            margin-top: 20px;
            color: #607086;
            font-size: 15px;
            line-height: 1.8;
          }

          .privacy-card-body p {
            margin: 0 0 14px;
          }

          .privacy-card-body p:last-child {
            margin-bottom: 0;
          }

          .privacy-card-body ul {
            margin: 10px 0 18px;
            padding-left: 21px;
          }

          .privacy-card-body li {
            margin: 7px 0;
          }

          .privacy-card-body a {
            color: #0758e8;
            text-decoration: none;
            font-weight: 700;
            overflow-wrap: anywhere;
          }

          .privacy-contact {
            margin-top: 34px;
            padding: 45px 34px;
            border-radius: 26px;
            text-align: center;
            color: #fff;
            background:
              radial-gradient(
                circle at 85% 0%,
                rgba(49, 118, 255, 0.32),
                transparent 35%
              ),
              linear-gradient(135deg, #06172f 0%, #0a2b5d 58%, #0758e8 100%);
            box-shadow: 0 24px 55px rgba(6, 23, 47, 0.2);
          }

          .privacy-contact-label {
            color: #a9c4ff;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.16em;
          }

          .privacy-contact h2 {
            margin: 12px 0;
            font-size: clamp(1.8rem, 4vw, 2.5rem);
          }

          .privacy-contact > p {
            max-width: 680px;
            margin: 0 auto;
            color: rgba(255, 255, 255, 0.82);
            line-height: 1.75;
          }

          .privacy-contact-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-top: 25px;
          }

          .privacy-contact-grid a {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            padding: 15px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 14px;
            color: #fff;
            text-decoration: none;
            text-align: left;
            background: rgba(255, 255, 255, 0.08);
            transition: 0.25s ease;
          }

          .privacy-contact-grid a:hover {
            transform: translateY(-3px);
            background: rgba(255, 255, 255, 0.13);
          }

          .privacy-contact-grid svg {
            flex-shrink: 0;
          }

          .privacy-contact-grid span {
            min-width: 0;
            overflow-wrap: anywhere;
            font-size: 13px;
            font-weight: 700;
          }

          .privacy-contact-grid small {
            display: block;
            margin-bottom: 3px;
            color: #a9c4ff;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }

          .privacy-location {
            margin-top: 18px;
            color: rgba(255, 255, 255, 0.65);
            font-size: 13px;
          }

          @media (max-width: 800px) {
            .privacy-contact-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 700px) {
            .privacy-container {
              width: min(100% - 28px, 1060px);
            }

            .privacy-hero {
              padding: 120px 0 58px;
            }

            .privacy-content {
              padding: 52px 0 75px;
            }

            .privacy-intro {
              padding: 22px 19px;
            }

            .privacy-card {
              padding: 24px 19px;
            }

            .privacy-number {
              top: 21px;
              right: 19px;
              font-size: 29px;
            }

            .privacy-card-heading {
              padding-right: 43px;
              align-items: flex-start;
            }

            .privacy-card-heading h2 {
              padding-top: 8px;
              font-size: 18px;
            }

            .privacy-contact {
              padding: 38px 19px;
            }
          }

          @media (max-width: 460px) {
            .privacy-intro {
              flex-direction: column;
            }

            .privacy-card-heading {
              gap: 10px;
            }

            .privacy-card-icon {
              width: 38px;
              height: 38px;
            }
          }
        `}</style>
      </main>
    </>
  );
};

export default PrivacyPolicy;
