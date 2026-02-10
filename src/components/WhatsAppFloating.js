import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloating = ({ isChatbotOpen }) => {
  // ✅ Conditionally hide WhatsApp when chatbot is open
  if (isChatbotOpen) {
    return null; // Don't render WhatsApp when chatbot is open
  }

  const phoneNumber = "918500352005";
  
  // ✅ SEO-optimized message with relevant keywords
  const message = "Hi! I'm interested in professional website development services. Can you help me with a custom website solution?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="whatsapp-float"
        aria-label="Start conversation about website development on WhatsApp"
        title="Get instant quote for website design & development"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-tooltip">Get Website Quote</span>
      </a>

      <style>
        {`
          .whatsapp-float {
            position: fixed;
            right: 35px;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #25D366, #128C7E);
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
            z-index: 9999;
            cursor: pointer;
            animation: whatsappPulse 2s infinite;
            transition: all 0.3s ease;
            text-decoration: none;
            overflow: hidden;
          }

          .whatsapp-float:hover {
            transform: translateY(-50%) scale(1.15);
            box-shadow: 0 10px 30px rgba(37, 211, 102, 0.6);
          }

          .whatsapp-float:hover .whatsapp-tooltip {
            opacity: 1;
            transform: translateY(0);
          }

          .whatsapp-icon {
            color: #fff;
            font-size: 36px;
            filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
          }

          .whatsapp-tooltip {
            position: absolute;
            top: 100%;
            margin-top: 8px;
            background: #fff;
            color: #25D366;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            white-space: nowrap;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 10000;
            pointer-events: none;
          }

          .whatsapp-tooltip:before {
            content: '';
            position: absolute;
            top: -6px;
            left: 50%;
            transform: translateX(-50%);
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid #fff;
          }

          @keyframes whatsappPulse {
            0% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
            }
            70% {
              box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .whatsapp-float {
              width: 60px;
              height: 60px;
              right: 15px;
            }
            
            .whatsapp-icon {
              font-size: 32px;
            }
            
            .whatsapp-tooltip {
              font-size: 11px;
              padding: 6px 10px;
            }
          }

          @media (max-width: 480px) {
            .whatsapp-float {
              width: 55px;
              height: 55px;
              right: 12px;
            }
            
            .whatsapp-icon {
              font-size: 28px;
            }
            
            .whatsapp-tooltip {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default WhatsAppFloating;