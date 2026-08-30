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
      <ScrollToTop />

      <Canonical />

      <Navbar />

      <WhatsAppFloating
        isChatbotOpen={isChatbotOpen}
      />

      <main className="app-main-content">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          <Route
            path="/careers"
            element={<Careers />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
      </main>

      <Footer />

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