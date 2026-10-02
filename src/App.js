import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

/* NEW VIJAYAWADA SEO PAGE */
import WebsiteDevelopmentVijayawada from "./components/WebsiteDevelopmentVijayawada";

import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import Canonical from "./components/Canonical";
import WhatsAppFloating from "./components/WhatsAppFloating";

function App() {
  const [loading, setLoading] =
    useState(true);

  const [
    isChatbotOpen,
    setIsChatbotOpen,
  ] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      {/* SCROLL TO TOP ON ROUTE CHANGE */}
      <ScrollToTop />

      {/* DYNAMIC CANONICAL URL */}
      <Canonical />

      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* FLOATING WHATSAPP */}
      <WhatsAppFloating
        isChatbotOpen={isChatbotOpen}
      />

      <main className="app-main-content">
        <Routes>

          {/* =====================================
              HOME
          ====================================== */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* =====================================
              ABOUT
          ====================================== */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* =====================================
              SERVICES
          ====================================== */}
          <Route
            path="/services"
            element={<Services />}
          />

          {/* =====================================
              WEBSITE DEVELOPMENT VIJAYAWADA
          ====================================== */}
          <Route
            path="/website-development-vijayawada"
            element={
              <WebsiteDevelopmentVijayawada />
            }
          />

          {/* =====================================
              PORTFOLIO
          ====================================== */}
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          {/* =====================================
              CAREERS
          ====================================== */}
          <Route
            path="/careers"
            element={<Careers />}
          />

          {/* =====================================
              CONTACT
          ====================================== */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* =====================================
              PRIVACY POLICY
          ====================================== */}
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          {/* =====================================
              TERMS & CONDITIONS
          ====================================== */}
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />

        </Routes>
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />

      {/* CHATBOT */}
      <ChatbotWidget
        setIsChatbotOpen={
          setIsChatbotOpen
        }
      />

      <style>
        {`
          .app-main-content {
            min-height: 80vh;
          }

          @media (max-width: 1120px) {
            .app-main-content {
              min-height: 80vh;
            }
          }
        `}
      </style>
    </Router>
  );
}

export default App;