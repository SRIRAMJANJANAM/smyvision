import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaFileContract,
  FaCode,
  FaUserCheck,
  FaIndianRupeeSign,
  FaCopyright,
  FaLock,
  FaTriangleExclamation,
  FaRightFromBracket,
  FaScaleBalanced,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa6";

const TermsAndConditions = () => {
  const WEBSITE_URL = "https://smyvisiontechnologies.com";

  const sections = [
    {
      icon: <FaFileContract />,
      title: "Acceptance of Terms",
      content: (
        <>
          <p>
            By accessing and using the SMYVISION TECHNOLOGIES website and
            services, you acknowledge that you have read, understood, and agree
            to be bound by these Terms & Conditions.
          </p>
          <p>
            If you do not agree with these terms, please do not use our website
            or services.
          </p>
        </>
      ),
    },
    {
      icon: <FaCode />,
      title: "Services Description",
      content: (
        <>
          <p>
            SMYVISION TECHNOLOGIES provides website development and digital
            technology services that may include:
          </p>
          <ul>
            <li>Professional website design and development</li>
            <li>Custom web development</li>
            <li>Custom web applications</li>
            <li>E-commerce development</li>
            <li>Business automation solutions</li>
            <li>Website maintenance and support</li>
            <li>Other related digital solutions</li>
          </ul>
          <p>
            The specific scope, features, deliverables, timeline, and pricing
            for a project will be defined in the applicable quotation,
            proposal, invoice, or written agreement.
          </p>
        </>
      ),
    },
    {
      icon: <FaUserCheck />,
      title: "Client Responsibilities",
      content: (
        <>
          <p>
            Clients are responsible for providing accurate information, project
            requirements, content, timely feedback, approvals, and any
            necessary access or credentials required for service delivery.
          </p>
          <p>
            Delays caused by missing content, approvals, credentials, feedback,
            payments, or other client-side dependencies may affect the project
            timeline and delivery date.
          </p>
        </>
      ),
    },
    {
      icon: <FaIndianRupeeSign />,
      title: "Payment Terms",
      content: (
        <>
          <p>
            Payment amounts, stages, due dates, and payment methods will be
            outlined in the applicable quotation, proposal, invoice, or project
            agreement.
          </p>
          <p>
            Unless otherwise agreed in writing, work may be started, continued,
            deployed, transferred, or delivered based on completion of the
            applicable payment obligations.
          </p>
          <p>
            Additional requirements or work outside the originally agreed
            project scope may be charged separately after discussion with the
            client.
          </p>
        </>
      ),
    },
    {
      icon: <FaCopyright />,
      title: "Intellectual Property",
      content: (
        <>
          <p>
            Ownership and usage rights for custom project deliverables will be
            determined by the applicable quotation, proposal, or project
            agreement and, where applicable, completion of the agreed payment.
          </p>
          <p>
            Third-party software, libraries, plugins, APIs, fonts, images,
            platforms, and other third-party materials remain subject to their
            respective licenses and terms.
          </p>
          <p>
            Unless otherwise agreed in writing or restricted by a
            confidentiality obligation, SMYVISION TECHNOLOGIES may showcase
            publicly available aspects of completed work in its portfolio,
            presentations, website, or marketing materials.
          </p>
        </>
      ),
    },
    {
      icon: <FaLock />,
      title: "Confidentiality",
      content: (
        <>
          <p>
            Both SMYVISION TECHNOLOGIES and the client should take reasonable
            steps to maintain the confidentiality of non-public proprietary,
            business, technical, or account information shared during a
            project.
          </p>
          <p>
            Confidential information should not be disclosed to unrelated third
            parties except where required to provide the agreed service, with
            appropriate authorization, or where disclosure is required by law.
          </p>
        </>
      ),
    },
    {
      icon: <FaTriangleExclamation />,
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            To the extent permitted by applicable law, SMYVISION TECHNOLOGIES
            will not be responsible for indirect, incidental, special, or
            consequential losses arising from the use of our website or
            services.
          </p>
          <p>
            Any liability relating to a specific paid project may also be
            governed by the applicable quotation, proposal, or project
            agreement.
          </p>
          <p>
            Nothing in these Terms & Conditions excludes or limits any
            liability that cannot legally be excluded or limited.
          </p>
        </>
      ),
    },
    {
      icon: <FaRightFromBracket />,
      title: "Termination",
      content: (
        <>
          <p>
            Either party may request termination of a project or service in
            accordance with the applicable quotation, proposal, or written
            agreement.
          </p>
          <p>
            Work completed, services provided, and non-refundable third-party
            costs incurred up to the termination date may remain payable.
          </p>
          <p>
            Any handover, transfer, or delivery obligations following
            termination will depend on the applicable project terms and
            outstanding payment obligations.
          </p>
        </>
      ),
    },
    {
      icon: <FaScaleBalanced />,
      title: "Governing Law",
      content: (
        <>
          <p>
            These Terms & Conditions are governed by the applicable laws of
            India.
          </p>
          <p>
            Any dispute relating to these terms or our services will be handled
            in accordance with applicable law and any jurisdiction or dispute
            resolution terms agreed for the relevant project.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | SMYVISION TECHNOLOGIES</title>

        <meta
          name="description"
          content="Read the SMYVISION TECHNOLOGIES Terms & Conditions covering our website, web development services, client responsibilities, payments, intellectual property and related service terms."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />

        <link
          rel="canonical"
          href={`${WEBSITE_URL}/terms-and-conditions`}
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SMYVISION TECHNOLOGIES" />
        <meta
          property="og:title"
          content="Terms & Conditions | SMYVISION TECHNOLOGIES"
        />
        <meta
          property="og:description"
          content="General terms governing the SMYVISION TECHNOLOGIES website and digital development services."
        />
        <meta
          property="og:url"
          content={`${WEBSITE_URL}/terms-and-conditions`}
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Terms & Conditions | SMYVISION TECHNOLOGIES"
        />
        <meta
          name="twitter:description"
          content="General terms governing the SMYVISION TECHNOLOGIES website and digital development services."
        />
      </Helmet>

      <main className="terms-page">
        <section className="terms-hero">
          <div className="terms-container">
            <span className="terms-label">
              <FaFileContract />
              SERVICE TERMS
            </span>

            <h1>Terms & Conditions</h1>

            <p className="terms-hero-text">
              These Terms & Conditions explain the general terms governing the
              use of the SMYVISION TECHNOLOGIES website and our digital
              development services.
            </p>

            <span className="terms-updated">
              Last Updated: August 31, 2026
            </span>
          </div>
        </section>

        <section className="terms-content">
          <div className="terms-container">
            <div className="terms-intro">
              <div className="terms-intro-icon">
                <FaFileContract />
              </div>

              <div>
                <h2>Please Read These Terms Carefully</h2>
                <p>
                  Specific projects may also be governed by a quotation,
                  proposal, invoice, service agreement, or other written
                  project terms. Where applicable, those project-specific terms
                  will apply to the relevant engagement.
                </p>
              </div>
            </div>

            <div className="terms-sections">
              {sections.map((section, index) => (
                <article className="terms-card" key={section.title}>
                  <span className="terms-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="terms-card-heading">
                    <span className="terms-card-icon">{section.icon}</span>
                    <h2>{section.title}</h2>
                  </div>

                  <div className="terms-card-body">{section.content}</div>
                </article>
              ))}
            </div>

            <div className="terms-contact">
              <span className="terms-contact-label">CONTACT</span>

              <h2>Questions About These Terms?</h2>

              <p>
                If you have questions regarding these Terms & Conditions or the
                terms relating to a specific SMYVISION TECHNOLOGIES project,
                please contact us.
              </p>

              <div className="terms-contact-grid">
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

              <div className="terms-location">
                Andhra Pradesh, India
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .terms-page {
            min-height: 100vh;
            background: #f7faff;
            color: #07162d;
            font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
              sans-serif;
          }

          .terms-container {
            width: min(1060px, calc(100% - 40px));
            margin: 0 auto;
          }

          .terms-hero {
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

          .terms-label {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 9px;
            padding: 9px 15px;
            border: 1px solid rgba(7, 88, 232, 0.16);
            border-radius: 999px;
            background: #ffffff;
            color: #0758e8;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.15em;
          }

          .terms-hero h1 {
            position: relative;
            margin: 20px 0 18px;
            font-size: clamp(3rem, 7vw, 5.4rem);
            line-height: 1;
            letter-spacing: -0.055em;
          }

          .terms-hero-text {
            position: relative;
            max-width: 760px;
            margin: 0 auto;
            color: #607086;
            font-size: clamp(1rem, 2vw, 1.1rem);
            line-height: 1.8;
          }

          .terms-updated {
            position: relative;
            display: inline-block;
            margin-top: 24px;
            color: #8795a8;
            font-size: 13px;
            font-weight: 600;
          }

          .terms-content {
            padding: 75px 0 100px;
          }

          .terms-intro {
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

          .terms-intro-icon {
            width: 52px;
            height: 52px;
            display: grid;
            place-items: center;
            flex-shrink: 0;
            border-radius: 15px;
            background: #0758e8;
            color: #ffffff;
            font-size: 21px;
            box-shadow: 0 12px 26px rgba(7, 88, 232, 0.2);
          }

          .terms-intro h2 {
            margin: 0 0 8px;
            font-size: 23px;
          }

          .terms-intro p {
            margin: 0;
            color: #607086;
            line-height: 1.75;
          }

          .terms-sections {
            display: grid;
            gap: 18px;
          }

          .terms-card {
            position: relative;
            padding: 30px;
            background: #ffffff;
            border: 1px solid #dfe8f4;
            border-radius: 20px;
            box-shadow: 0 12px 36px rgba(8, 28, 56, 0.045);
          }

          .terms-number {
            position: absolute;
            top: 24px;
            right: 27px;
            color: #d9e6fa;
            font-size: 35px;
            font-weight: 900;
            line-height: 1;
          }

          .terms-card-heading {
            display: flex;
            align-items: center;
            gap: 13px;
            padding-right: 60px;
          }

          .terms-card-icon {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            flex-shrink: 0;
            border-radius: 12px;
            background: #edf4ff;
            color: #0758e8;
          }

          .terms-card-heading h2 {
            margin: 0;
            font-size: 21px;
          }

          .terms-card-body {
            margin-top: 20px;
            color: #607086;
            font-size: 15px;
            line-height: 1.8;
          }

          .terms-card-body p {
            margin: 0 0 14px;
          }

          .terms-card-body p:last-child {
            margin-bottom: 0;
          }

          .terms-card-body ul {
            margin: 10px 0 18px;
            padding-left: 21px;
          }

          .terms-card-body li {
            margin: 7px 0;
          }

          .terms-contact {
            margin-top: 34px;
            padding: 45px 34px;
            border-radius: 26px;
            text-align: center;
            color: #ffffff;
            background:
              radial-gradient(
                circle at 85% 0%,
                rgba(49, 118, 255, 0.32),
                transparent 35%
              ),
              linear-gradient(135deg, #06172f 0%, #0a2b5d 58%, #0758e8 100%);
            box-shadow: 0 24px 55px rgba(6, 23, 47, 0.2);
          }

          .terms-contact-label {
            color: #a9c4ff;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.16em;
          }

          .terms-contact h2 {
            margin: 12px 0;
            font-size: clamp(1.8rem, 4vw, 2.5rem);
          }

          .terms-contact > p {
            max-width: 680px;
            margin: 0 auto;
            color: rgba(255, 255, 255, 0.82);
            line-height: 1.75;
          }

          .terms-contact-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-top: 25px;
          }

          .terms-contact-grid a {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            padding: 15px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 14px;
            color: #ffffff;
            text-decoration: none;
            text-align: left;
            background: rgba(255, 255, 255, 0.08);
            transition: 0.25s ease;
          }

          .terms-contact-grid a:hover {
            transform: translateY(-3px);
            background: rgba(255, 255, 255, 0.13);
          }

          .terms-contact-grid svg {
            flex-shrink: 0;
          }

          .terms-contact-grid span {
            min-width: 0;
            overflow-wrap: anywhere;
            font-size: 13px;
            font-weight: 700;
          }

          .terms-contact-grid small {
            display: block;
            margin-bottom: 3px;
            color: #a9c4ff;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }

          .terms-location {
            margin-top: 18px;
            color: rgba(255, 255, 255, 0.65);
            font-size: 13px;
          }

          @media (max-width: 800px) {
            .terms-contact-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 700px) {
            .terms-container {
              width: min(100% - 28px, 1060px);
            }

            .terms-hero {
              padding: 120px 0 58px;
            }

            .terms-content {
              padding: 52px 0 75px;
            }

            .terms-intro {
              padding: 22px 19px;
            }

            .terms-card {
              padding: 24px 19px;
            }

            .terms-number {
              top: 21px;
              right: 19px;
              font-size: 29px;
            }

            .terms-card-heading {
              padding-right: 43px;
              align-items: flex-start;
            }

            .terms-card-heading h2 {
              padding-top: 8px;
              font-size: 18px;
            }

            .terms-contact {
              padding: 38px 19px;
            }
          }

          @media (max-width: 460px) {
            .terms-intro {
              flex-direction: column;
            }

            .terms-card-heading {
              gap: 10px;
            }

            .terms-card-icon {
              width: 38px;
              height: 38px;
            }
          }
        `}</style>
      </main>
    </>
  );
};

export default TermsAndConditions;
