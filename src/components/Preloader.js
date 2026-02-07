import React from "react";

const BrandSplash = () => {
  return (
    <>
      <style>{`
        .brand-container {
          position: fixed;
          inset: 0;
          background: linear-gradient(135deg, #0a1929 0%, #1a365d 50%, #2d4a6e 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          overflow: hidden;
        }

        .brand-wrapper {
          text-align: center;
          padding: 2rem;
          position: relative;
          max-width: 90%;
        }

        .brand-name {
          font-family: 'Segoe UI', 'Arial', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: transparent;
          background: linear-gradient(90deg, #ffffff 0%, #00e0ff 50%, #a0e7ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          margin-bottom: 1.5rem;
          position: relative;
          animation: textReveal 1.2s ease-out forwards;
        }

        .brand-name::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 25%;
          width: 50%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #00e0ff, transparent);
          animation: lineExpand 1s ease-out 0.5s forwards;
        }

        .quote-container {
          position: relative;
          padding: 2rem;
          margin-top: 2rem;
          animation: quoteFadeIn 1.5s ease-out 0.8s forwards;
          opacity: 0;
        }

        .quote {
          font-size: 1.4rem;
          font-style: italic;
          color: #c5d6ff;
          line-height: 1.6;
          position: relative;
          padding: 0 1rem;
        }

        .quote::before, .quote::after {
          content: '"';
          font-size: 3rem;
          color: #00e0ff;
          opacity: 0.5;
          position: absolute;
        }

        .quote::before {
          top: -20px;
          left: -10px;
        }

        .quote::after {
          bottom: -40px;
          right: -10px;
        }

        .tagline {
          font-size: 1.1rem;
          color: #88c1ff;
          margin-top: 2rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 300;
          animation: taglineSlide 1s ease-out 1.2s forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .tech-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.1;
        }

        .grid-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, #00e0ff, transparent);
          animation: gridPulse 4s linear infinite;
        }

        .grid-line.horizontal {
          width: 100%;
          height: 1px;
          top: 0;
          animation-delay: 0s;
        }

        .grid-line.vertical {
          height: 100%;
          width: 1px;
          left: 0;
          animation-delay: 2s;
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineExpand {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes quoteFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes taglineSlide {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.2;
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .brand-name {
            font-size: 3rem;
          }
          .quote {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 768px) {
          .brand-name {
            font-size: 2.2rem;
            letter-spacing: 1.5px;
          }
          
          .quote {
            font-size: 1.1rem;
            padding: 0 0.5rem;
          }
          
          .tagline {
            font-size: 0.9rem;
            letter-spacing: 2px;
          }
          
          .quote::before, .quote::after {
            font-size: 2rem;
          }
          
          .quote::before {
            top: -15px;
            left: -5px;
          }
          
          .quote::after {
            bottom: -30px;
            right: -5px;
          }
        }

        @media (max-width: 480px) {
          .brand-name {
            font-size: 1.8rem;
            letter-spacing: 1px;
          }
          
          .quote {
            font-size: 1rem;
            padding: 0 0.3rem;
          }
          
          .tagline {
            font-size: 0.8rem;
            letter-spacing: 1.5px;
          }
          
          .quote-container {
            padding: 1.5rem;
          }
        }

        @media (max-width: 360px) {
          .brand-name {
            font-size: 1.5rem;
          }
          
          .quote {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="brand-container">
        {/* Grid background */}
        <div className="tech-grid">
          {[...Array(10)].map((_, i) => (
            <div 
              key={`h-${i}`}
              className="grid-line horizontal"
              style={{top: `${(i + 1) * 10}%`}}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <div 
              key={`v-${i}`}
              className="grid-line vertical"
              style={{left: `${(i + 1) * 10}%`}}
            />
          ))}
        </div>

        <div className="brand-wrapper">
          <h1 className="brand-name">SMYVISION TECHNOLOGIES</h1>
          
          <div className="quote-container">
            <p className="quote">
              Where innovation meets reality, transforming digital dreams into tangible solutions
            </p>
            <p className="tagline">Pioneering the Future of Technology</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandSplash;