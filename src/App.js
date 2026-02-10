import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import Canonical from "./components/Canonical";
import SEOManager from "./components/SEOManager";
import WhatsAppFloating from "./components/WhatsAppFloating";

function App() {
  const [loading, setLoading] = useState(true);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Canonical />
      <ScrollToTop />
      <SEOManager /> 
      <Navbar />
      
      <WhatsAppFloating isChatbotOpen={isChatbotOpen} />

      <div style={{ marginTop: "3.5vw", minHeight: "80vh", padding: "0.5rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
      <ChatbotWidget setIsChatbotOpen={setIsChatbotOpen} />
    </Router>
  );
}

export default App;