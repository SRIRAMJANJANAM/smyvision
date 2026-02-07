import { useState, useRef, useEffect } from "react";

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! 👋 I'm your assistant from SMYVISION. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [collectingProjectInfo, setCollectingProjectInfo] = useState(false);
  const [collectingQuoteInfo, setCollectingQuoteInfo] = useState(false);
  const [collectingServiceInfo, setCollectingServiceInfo] = useState(false);
  const [collectingStatusInfo, setCollectingStatusInfo] = useState(false);
  const [quoteInfo, setQuoteInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [projectInfo, setProjectInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    service: "",
    requirements: ""
  });
  const [serviceInfo, setServiceInfo] = useState({
    name: "",
    email: "",
    phone: "",
    selectedService: ""
  });
  const [statusInfo, setStatusInfo] = useState({
    phone: ""
  });
  const [currentField, setCurrentField] = useState(null);
  const [currentQuoteField, setCurrentQuoteField] = useState(null);
  const [currentServiceField, setCurrentServiceField] = useState(null);
  const [currentStatusField, setCurrentStatusField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTimeGreeting, setCurrentTimeGreeting] = useState("");
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby1pdBXYPHeBeO1xwBxDVSSONCRYOJQVxigGpHW6tzoVNIEe4wezhDWESqgRZbBpVhr/exec';
  const STATUS_API_URL = 'https://script.google.com/macros/s/AKfycbw33S28AQ3kFzy6pdet3jJSTYFnMH1vRLIAiq903F6RNSHzfdIbv8cor0BCQ5Uwu1uxgw/exec';

  const suggestedQuestions = [
    "What services do you offer?",
    "How can I contact support?",
    "Tell me about your company",
    "Do you have pricing plans?",
    "I want to do a project with you",
    "Check my project status"
  ];

  const industries = [
    'Education',
    'Hospitals & Healthcare',
    'Startup',
    'Agriculture Services',
    'Banking & Finance',
    'E-commerce',
    'Others'
  ];

  const services = [
    'Website Development',
    'Chatbot',
    'Business Automation'
  ];

  // Get time-based greeting
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  // Clear all cache and reset everything
  const clearAllCache = () => {
    console.log("Clearing all chat cache and resetting state");
    
    // Reset all state variables
    setOpen(false);
    setMessages([
      { sender: "bot", text: `${getTimeBasedGreeting()}! 👋 I'm your assistant from SMYVISION. How can I help you today?` }
    ]);
    setInput("");
    
    // Reset all collection states
    setCollectingProjectInfo(false);
    setCollectingQuoteInfo(false);
    setCollectingServiceInfo(false);
    setCollectingStatusInfo(false);
    
    // Reset all form data
    setQuoteInfo({
      name: "",
      email: "",
      phone: ""
    });
    setProjectInfo({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      service: "",
      requirements: ""
    });
    setServiceInfo({
      name: "",
      email: "",
      phone: "",
      selectedService: ""
    });
    setStatusInfo({
      phone: ""
    });
    
    // Reset all current fields
    setCurrentField(null);
    setCurrentQuoteField(null);
    setCurrentServiceField(null);
    setCurrentStatusField(null);
    
    // Reset submission states
    setIsSubmitting(false);
    setIsTyping(false);
    
    // Clear any localStorage if used
    if (typeof window !== 'undefined') {
      localStorage.removeItem('chatbotMessages');
      localStorage.removeItem('chatbotState');
    }
    
    // Clear input focus
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  // Auto-focus input when chat opens or message sent
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open, messages, collectingProjectInfo, collectingQuoteInfo, collectingServiceInfo, collectingStatusInfo, currentField, currentQuoteField, currentServiceField, currentStatusField]);

  // Update greeting based on current time
  useEffect(() => {
    setCurrentTimeGreeting(getTimeBasedGreeting());
    const interval = setInterval(() => {
      setCurrentTimeGreeting(getTimeBasedGreeting());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Clear cache when component unmounts
  useEffect(() => {
    return () => {
      clearAllCache();
    };
  }, []);

  // Check for mobile responsiveness
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Typing animation function
  const addTypingAnimation = (callback, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  // API call to check project status - WITH CACHE BUSTING
const checkProjectStatus = async (phoneNumber) => {
  try {
    console.log('Checking status for phone:', phoneNumber);
    
    const cleanPhone = phoneNumber.toString().trim();
    
    // Add timestamp to prevent caching
    const timestamp = Date.now();
    const urlWithCache = `${STATUS_API_URL}?nocache=${timestamp}`;
    
    // Use XMLHttpRequest (works better with Google Apps Script)
    const data = await new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', urlWithCache, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = JSON.parse(xhr.responseText);
            console.log('Direct XHR response:', response);
            resolve(response);
          } catch {
            resolve({
              success: false,
              message: "Invalid response format",
              raw: xhr.responseText
            });
          }
        } else {
          // If direct fails, try proxy
          console.log('Direct failed, trying proxy...');
          fetchWithProxyReal(cleanPhone, timestamp).then(resolve);
        }
      };
      
      xhr.onerror = function() {
        console.log('XHR error, trying proxy...');
        fetchWithProxyReal(cleanPhone, timestamp).then(resolve);
      };
      
      xhr.timeout = 8000;
      xhr.ontimeout = function() {
        console.log('XHR timeout, trying proxy...');
        fetchWithProxyReal(cleanPhone, timestamp).then(resolve);
      };
      
      xhr.send(JSON.stringify({ "Number": cleanPhone }));
    });
    
    return data;
    
  } catch (error) {
    console.error("Error in checkProjectStatus:", error);
    return {
      success: false,
      message: "Network error. Please try again."
    };
  }
};

// Updated proxy function with cache busting
const fetchWithProxyReal = async (phoneNumber, timestamp) => {
  try {
    // Try different proxies
    const proxies = [
      'https://api.allorigins.win/raw?url=',
      'https://corsproxy.io/?',
      'https://api.codetabs.com/v1/proxy?quest='
    ];
    
    for (const proxy of proxies) {
      try {
        const encodedUrl = encodeURIComponent(`${STATUS_API_URL}?nocache=${timestamp}`);
        const response = await fetch(proxy + encodedUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "Number": phoneNumber }),
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log(`Proxy ${proxy} success for ${phoneNumber}:`, data);
          return data;
        }
      } catch (proxyError) {
        console.log(`Proxy ${proxy} failed:`, proxyError.message);
        continue;
      }
    }
    
    throw new Error('All proxies failed');
    
  } catch (error) {
    console.error('All proxy attempts failed:', error);
    return {
      success: false,
      message: "Unable to connect to server."
    };
  }
};

  // Send data to Google Sheets
  const sendToGoogleSheet = async (data) => {
    try {
      console.log('Preparing to send data to Google Sheets:', data);
      
      const formData = {
        fullName: data.fullName || '',
        email: data.email || '',
        phone: data.phone || '',
        company: data.company || '',
        industry: data.industry || 'Others',
        service: data.service || 'Website Development',
        requirements: 'from no asking'
      };

      console.log('Form Data (JSON):', JSON.stringify(formData));

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Request sent (no-cors mode)');
      
      return true;
    } catch (error) {
      console.error("Error sending to Google Sheet:", error);
      return false;
    }
  };

  // Send quote info to Google Sheets with "price" values
  const sendQuoteToGoogleSheet = async (data) => {
    try {
      console.log('Preparing to send quote data to Google Sheets:', data);
      
      const formData = {
        fullName: data.name || '',
        email: data.email || '',
        phone: data.phone || '',
        company: 'Pricing Inquiry',
        industry: 'price',
        service: 'price',
        requirements: 'price'
      };

      console.log('Quote Form Data with price values:', JSON.stringify(formData));

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Quote request sent');
      return true;
    } catch (error) {
      console.error("Error sending quote data:", error);
      return false;
    }
  };

  // Send service enquiry to Google Sheets
  const sendServiceEnquiryToGoogleSheet = async (data) => {
    try {
      console.log('Preparing to send service enquiry data:', data);
      
      const formData = {
        fullName: data.name || '',
        email: data.email || '',
        phone: data.phone || '',
        company: 'Service Enquiry',
        industry: 'Service Enquiry',
        service: data.selectedService || 'Website Development',
        requirements: `Enquiry for ${data.selectedService}`
      };

      console.log('Service Enquiry Form Data:', JSON.stringify(formData));

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Service enquiry sent');
      return true;
    } catch (error) {
      console.error("Error sending service enquiry:", error);
      return false;
    }
  };

  // Submit form data
  const submitFormData = async (data) => {
    console.log('Attempting to submit data:', data);
    const success = await sendToGoogleSheet(data);
    return success;
  };

  // Submit quote data
  const submitQuoteData = async (data) => {
    console.log('Attempting to submit quote data:', data);
    try {
      const success = await sendQuoteToGoogleSheet(data);
      return success;
    } catch (error) {
      console.error('Quote submission failed:', error);
      return false;
    }
  };

  // Submit service enquiry data
  const submitServiceEnquiryData = async (data) => {
    console.log('Attempting to submit service enquiry data:', data);
    try {
      const success = await sendServiceEnquiryToGoogleSheet(data);
      return success;
    } catch (error) {
      console.error('Service enquiry submission failed:', error);
      return false;
    }
  };

  // Validation functions
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    return nameRegex.test(name.trim());
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const validateIndianPhone = (phone) => {
    if (!phone) return true;
    const indianPhoneRegex = /^(\+91[-\s]?)?[6-9]\d{9}$/;
    return indianPhoneRegex.test(phone.trim());
  };

  // Process status enquiry
  const processStatusInfo = async (msg) => {
    if (currentStatusField === "phone") {
      if (msg.trim() && !validateIndianPhone(msg)) {
        return "Please enter a valid Indian phone number (10 digits starting with 6-9) ";
      }
      
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "⏳ Checking your project status..." }
      ]);
      
      setIsSubmitting(true);
      
      try {
        const statusData = await checkProjectStatus(msg.trim());
        
        setIsSubmitting(false);
        
        console.log('Status data received:', statusData);
        
        if (statusData.success === true) {
          if (statusData.customerDetails) {
            const customer = statusData.customerDetails;
            const botMsg = `✅ Project Status Found!\n\n📋 Your Project Details:\n\n🔄 Status: ${customer.status}\n📊 Progress: ${customer.Progress}%\n➡️ Next Step: ${customer["Next step"]}\n\n👤 Customer: ${customer.Name}\n📱 Phone: ${customer["Phone Number"]}\n📧 Email: ${customer.Email}\n🏗️ Project: ${customer["Project type"]}\n🛠️ Team: ${customer["Imp Team"]}\n📅 Start Date: ${new Date(customer.DOS).toLocaleDateString()}\n🧾 Invoice No: ${customer["Invoice No"]}\n🔗 Link: ${customer.Link !== "---" ? customer.Link : "Not available yet"}\n\nNeed more info? Contact our support team!`;
            
            setMessages(prev => [
              ...prev.slice(0, -1),
              { sender: "bot", text: botMsg }
            ]);
          } else {
            const botMsg = `✅ Status check completed!\n\n📞 **Contact Support for Details:**\n📧 Email: smyvisiontechnologies@gmail.com\n📞 Phone: +91 8500352005\n💬 WhatsApp: +91 8500352005`;
            
            setMessages(prev => [
              ...prev.slice(0, -1),
              { sender: "bot", text: botMsg }
            ]);
          }
        } else {
          console.log('API returned failure:', statusData.message);
          
          const botMsg = `❌ ${statusData.message}\n\n You can register directly in this chat—just tell us your requirement.\n or \nPlease contact our sales team:\n\n📧 Email: smyvisiontechnologies@gmail.com\n📞 Phone: +91 8500352005\n💬 WhatsApp: +91 8500352005`;
          
          setMessages(prev => [
            ...prev.slice(0, -1),
            { sender: "bot", text: botMsg }
          ]);
        }
      } catch (error) {
        console.error('Status check error:', error);
        setIsSubmitting(false);
        
        const botMsg = `❌ Connection Error\n\nPlease check your internet connection and try again, or contact us directly:\n\n📧 smyvisiontechnologies@gmail.com\n📞 +91 8500352005`;
        
        setMessages(prev => [
          ...prev.slice(0, -1),
          { sender: "bot", text: botMsg }
        ]);
      }
      
      setCollectingStatusInfo(false);
      setCurrentStatusField(null);
      setStatusInfo({ phone: "" });
      
      return "";
    }
    
    return "Let's start over. What's your registered phone number?";
  };

  // Process service enquiry information
  const processServiceEnquiryInfo = (msg) => {
    switch (currentServiceField) {
      case "name":
        if (!validateName(msg)) {
          return "Please enter a valid name (letters and spaces only, 2-50 characters):";
        }
        setServiceInfo({...serviceInfo, name: msg});
        setCurrentServiceField("email");
        return `Great, ${msg}! What's your email address?`;
      
      case "email":
        if (!validateEmail(msg)) {
          return "Please enter a valid email address (e.g., name@example.com):";
        }
        setServiceInfo({...serviceInfo, email: msg});
        setCurrentServiceField("phone");
        return "Perfect! What's your phone number? (Indian format preferred)";
      
      case "phone":
        if (msg.trim() && !validateIndianPhone(msg)) {
          return "Please enter a valid Indian phone number (10 digits starting with 6-9) ";
        }
        
        setMessages(prev => [
          ...prev,
          { sender: "bot", text: "⏳ Sending your enquiry to our team..." }
        ]);
        
        setIsSubmitting(true);
        
        setTimeout(async () => {
          try {
            const finalServiceData = {
              ...serviceInfo,
              phone: msg.trim() || '',
              selectedService: serviceInfo.selectedService
            };
            
            console.log('Service enquiry data to submit:', finalServiceData);
            const success = await submitServiceEnquiryData(finalServiceData);
            
            setIsSubmitting(false);
            
            if (success) {
              const botMsg = `✅ Enquiry Submitted Successfully!\n\nYour interest in ${finalServiceData.selectedService} has been sent to our team.\n\n📋 Details:\n• Name: ${finalServiceData.name}\n• Email: ${finalServiceData.email}\n• Phone: ${finalServiceData.phone || 'Not provided'}\n• Service: ${finalServiceData.selectedService}\n\nOur team will contact you within 24 hours to discuss your requirements.\n\nNeed immediate help?\n📧 smyvisiontechnologies@gmail.com\n📞 +91 8500352005`;
              
              setMessages(prev => [
                ...prev.slice(0, -1),
                { sender: "bot", text: botMsg }
              ]);
            } else {
              const errorMsg = `❌ Connection Error\n\nPlease contact our team directly:\n\n📧 Email: smyvisiontechnologies@gmail.com\n📞 Phone: +91 8500352005\n💬 WhatsApp: +91 8500352005`;
              
              setMessages(prev => [
                ...prev.slice(0, -1),
                { sender: "bot", text: errorMsg }
              ]);
            }
          } catch (error) {
            console.error('Service enquiry submission error:', error);
            setIsSubmitting(false);
            
            const errorMsg = `❌ Network Error\n\nPlease check your internet connection and try again, or contact us directly:\n\n📧 smyvisiontechnologies@gmail.com\n📞 +91 8500352005`;
            
            setMessages(prev => [
              ...prev.slice(0, -1),
              { sender: "bot", text: errorMsg }
            ]);
          }
          
          setCollectingServiceInfo(false);
          setCurrentServiceField(null);
          setServiceInfo({
            name: "",
            email: "",
            phone: "",
            selectedService: ""
          });
        }, 1500);
        
        return "";
      
      default:
        return "Let's start over. What's your name?";
    }
  };

  // Process quote information
  const processQuoteInfo = (msg) => {
    switch (currentQuoteField) {
      case "name":
        if (!validateName(msg)) {
          return "Please enter a valid name (letters and spaces only, 2-50 characters):";
        }
        setQuoteInfo({...quoteInfo, name: msg});
        setCurrentQuoteField("email");
        return `Thank you, ${msg}! What's your email address?`;
      
      case "email":
        if (!validateEmail(msg)) {
          return "Please enter a valid email address (e.g., name@example.com):";
        }
        setQuoteInfo({...quoteInfo, email: msg});
        setCurrentQuoteField("phone");
        return "Great! What's your phone number? (Indian format preferred)";
      
      case "phone":
        if (msg.trim() && !validateIndianPhone(msg)) {
          return "Please enter a valid Indian phone number (10 digits starting with 6-9) ";
        }
        
        setMessages(prev => [
          ...prev,
          { sender: "bot", text: "⏳ Connecting you with our sales team for a custom quote..." }
        ]);
        
        setIsSubmitting(true);
        
        setTimeout(async () => {
          try {
            const finalQuoteData = {
              ...quoteInfo,
              phone: msg.trim() || ''
            };
            
            console.log('Quote data to submit:', finalQuoteData);
            const success = await submitQuoteData(finalQuoteData);
            
            setIsSubmitting(false);
            
            if (success) {
              const botMsg = `✅ Perfect! Our sales team will contact you shortly for your custom quote.\n\n📋 Details:\n• Name: ${finalQuoteData.name}\n• Email: ${finalQuoteData.email}\n• Phone: ${finalQuoteData.phone || 'Not provided'}\n\nIn the meantime, you can explore our services or contact us directly:\n📧 smyvisiontechnologies@gmail.com\n📞 +91 8500352005`;
              
              setMessages(prev => [
                ...prev.slice(0, -1),
                { sender: "bot", text: botMsg }
              ]);
            } else {
              const errorMsg = `❌ Connection Error\n\nPlease contact our sales team directly:\n\n📧 Email: smyvisiontechnologies@gmail.com\n📞 Phone: +91 8500352005\n💬 WhatsApp: +91 8500352005`;
              
              setMessages(prev => [
                ...prev.slice(0, -1),
                { sender: "bot", text: errorMsg }
              ]);
            }
          } catch (error) {
            console.error('Quote submission error:', error);
            setIsSubmitting(false);
            
            const errorMsg = `❌ Network Error\n\nPlease check your internet connection and try again, or contact us directly:\n\n📧 smyvisiontechnologies@gmail.com\n📞 +91 8500352005`;
            
            setMessages(prev => [
              ...prev.slice(0, -1),
              { sender: "bot", text: errorMsg }
            ]);
          }
          
          setCollectingQuoteInfo(false);
          setCurrentQuoteField(null);
          setQuoteInfo({
            name: "",
            email: "",
            phone: ""
          });
        }, 1500);
        
        return "";
      
      default:
        return "Let's start over. What's your name?";
    }
  };

  const getBotReply = (msg) => {
    const q = msg.toLowerCase();
    
    // Handle status check variations
    if (q.includes("status") || q.includes("check status") || q.includes("project status") || 
        q.includes("track") || q.includes("progress") ||
        q.includes("where is project") || q.includes("update") ) {
      if (!collectingStatusInfo) {
        setCollectingStatusInfo(true);
        setCurrentStatusField("phone");
        return `${currentTimeGreeting}! I can help you check your project status. 📊\n\nPlease provide your registered phone number:`;
      }
    }
    
    // Handle status information collection
    if (collectingStatusInfo) {
      if (q.includes("no") || q.includes("cancel") || q.includes("stop") || 
          q.includes("not now") || q.includes("maybe later") || q.includes("later")) {
        setCollectingStatusInfo(false);
        setCurrentStatusField(null);
        setStatusInfo({ phone: "" });
        return "No problem! Feel free to check your status anytime. 😊";
      }
      
      return processStatusInfo(msg);
    }
    
    // Handle service selection (1, 2, 3 or service names)
    if (collectingServiceInfo) {
      if (q.includes("no") || q.includes("cancel") || q.includes("stop") || 
          q.includes("not now") || q.includes("maybe later") || q.includes("later")) {
        setCollectingServiceInfo(false);
        setCurrentServiceField(null);
        setServiceInfo({
          name: "",
          email: "",
          phone: "",
          selectedService: ""
        });
        return "No problem! Feel free to reach out anytime if you change your mind. 😊";
      }
      
      return processServiceEnquiryInfo(msg);
    }
    
    // Check if user is selecting a service option
    if (q.match(/^[abc]$/) || 
        services.some(service => q.includes(service.toLowerCase())) ) {
      
      let selectedService = "";
      
      if (q === "a" || q === "A") {
        selectedService = "Website Development";
      } else if (q === "b" || q === "B") {
        selectedService = "AI Chatbot";
      } else if (q === "c" || q === "C") {
        selectedService = "Business Automation";
      } else {
        const matchedService = services.find(service => 
          q.includes(service.toLowerCase())
        );
        selectedService = matchedService || "Website Development";
      }
      
      setCollectingServiceInfo(true);
      setCurrentServiceField("name");
      setServiceInfo(prev => ({...prev, selectedService}));
      
      return `Excellent choice! 🎯 You've selected ${selectedService}.\n\nTo connect you with our ${selectedService} team, I'll need a few details:\n\nWhat's your name?`;
    }

    // Handle "okay thank you" and similar polite responses
    if (q.includes("okay thank you") || q.includes("ok thank you") || 
        q.includes("ok thanks") || q.includes("okay thanks") ||
        q.includes("alright thank you") || q.includes("alright thanks") ||
        q.includes("fine thank you") || q.includes("fine thanks")) {
      return "You're very welcome! 😊 I'm glad I could help. If you have any more questions or need assistance in the future, don't hesitate to ask. Have a wonderful day! 🌟";
    }

    if (
        q.includes("which type of websites") || 
        q.includes("type of websites") || 
        q.includes("types of project") || 
        q.includes("project type") ||
        q.includes("can u do full stack website") || 
        q.includes("website types") ||
        q.includes("types of projects") || 
        q.includes("projects types")|| 
        q.includes("which type of websites u provide")
        
      ) {
        return "We provide all types of websites and projects 🚀 including static and dynamic websites, full-stack web applications, business and e-commerce websites, portfolios, and custom web solutions. We also build advanced projects like AI chatbots, automation systems, admin dashboards, APIs, and software integrations. Tell us what you need, and we'll build it for you!";
      }

      // ${q}.
      if (
        q.includes("can you do website") ||
        q.includes("can u do website") ||
        q.includes("can you build a website") ||
        q.includes("can u create a website") ||
        q.includes("can you do chatbot") ||
        q.includes("can u do chatbot") ||
        q.includes("can you build a chatbot") ||
        q.includes("can you do automation") ||
        q.includes("can u do automation") ||
        q.includes("can you automate business") ||
        q.includes("can u automate business")||
        q.includes("yes register")||
        q.includes("register") ||
        q.includes('i need a website for my project') ||
        q.includes('i need a project')
      ) {
        return `
      Please select what you are looking for:

      A -Website Development  
      B -Chatbot  
      C -Business Automation  

      Reply with the option number.`;
      }
    
    if (q.includes("i want to do a project") || q.includes("project with you") || q.includes("start a project")) {
      setCollectingProjectInfo(true);
      setCurrentField("fullName");
      return "Great! I'd be happy to help you start a project. Let me collect some information.\n\nFirst, what's your full name?";
    }
    
    // Handle "who are you" variations
    if (q.includes("who ru") || q.includes("who are you") || q.includes("who r u")) {
      return "I'm your virtual assistant from SMYVISION! 🤖 I'm here to help you with information about our services, pricing, company details, and to connect you with our team for projects or quotes.";
    }
    
    // Handle "what can you do"
    if (q.includes("what can you do") || q.includes("what can u do") || q.includes("capabilities")) {
      return "I can help you with:\n\n📋 Services Information - Learn about our offerings\n💰 Pricing & Quotes - Get custom pricing details\n🏢 Company Info - Learn about SMYVISION\n📞 Contact Support - Connect with our team\n🚀 Project Start - Begin a new project with us\n📊 Check Status - Track your project progress\n💬 General Questions - Answer your queries\n\nWhat would you like to know? 😊";
    }
    
    // Handle "thank you" variations
    if (q.includes("thank") || q.includes("thanks") || q.includes("thank u")) {
      const simpleThankYou = /^(thanks?|thank you|thank u)$/i.test(q.trim());
      if (simpleThankYou) {
        return "You're most welcome! 😊 It's my pleasure to help. If you have any more questions or need further assistance, just let me know!";
      } else {
        return "You're very welcome! 😊 I'm happy to assist you. Don't hesitate to reach out if you need anything else. Have a great day!";
      }
    }
    
    // Handle pricing plans with follow-up
    if (q.includes("price") || q.includes("cost") || q.includes("plan") || q.includes("pricing plans")) {
      if (!collectingQuoteInfo) {
        setCollectingQuoteInfo(true);
        setCurrentQuoteField("name");
        return `${currentTimeGreeting}! We offer flexible pricing based on project requirements. Would you like me to connect you with our sales team for a custom quote?\n\nIf yes, please provide your name:`;
      }
    }
    
    // Handle responses when collecting quote info
    if (collectingQuoteInfo) {
      if (q.includes("no") || q.includes("not interested") || q.includes("not now") || 
          q.includes("maybe later") || q.includes("later") || q.includes("not ready") ||
          q.includes("i'm not interested") || q.includes("im not interested") ||
          q.includes("no thanks") || q.includes("no thank you")) {
        
        setCollectingQuoteInfo(false);
        setCurrentQuoteField(null);
        setQuoteInfo({
          name: "",
          email: "",
          phone: ""
        });
        
        return "No problem at all! 😊 Feel free to reach out anytime if you change your mind or have other questions. \n\nIn the meantime, you can explore our services or contact us:\n📧 smyvisiontechnologies@gmail.com\n📞 +91 8500352005\n\nHave a great day! 🌟";
      }
      
      if (q.includes("yes") || q.includes("sure") || q.includes("ok") || q.includes("okay") ||
          q.includes("yeah") || q.includes("yep") || q.includes("please") || q.includes("go ahead")) {
        
        if (currentQuoteField === "name") {
          return `${currentTimeGreeting}! Please provide your name:`;
        }
        return processQuoteInfo(msg);
      }
      
      return processQuoteInfo(msg);
    }
    
    if (collectingProjectInfo) {
      return processProjectInfo(msg);
    }
    
    // Greetings
    if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("greetings")) 
      return `${currentTimeGreeting}! 😊 How can I assist you today?`;
    
    // Good morning/afternoon/evening
    if (q.includes("good morning")) 
      return `${currentTimeGreeting}! 🌞 How can I help you today?`;
    if (q.includes("good afternoon")) 
      return `${currentTimeGreeting}! ☀️ What can I assist you with?`;
    if (q.includes("good evening") || q.includes("good night")) 
      return `${currentTimeGreeting}! 🌙 How may I help you?`;
    
    if (q.includes("services") || q.includes("offer") || q.includes("provide") || q.includes('which type of services')) 
      return `${currentTimeGreeting}! At SMYVISION, we offer:\n• Website Development\n• AI Chatbot Solutions\n• Business Automation\n\nIs there a specific service you're interested in?`;
    
    if (q.includes("contact") || q.includes("support") || q.includes("help") || q.includes("phone") || q.includes("call")) 
      return `You can reach us at:\n📧 smyvisiontechnologies@gmail.com\n📞 +91 8500352005\n🕐 Mon-Fri: 9AM-7PM IST\n\n${currentTimeGreeting}! How else can I help you?`;
    
    if (q.includes("about") || q.includes("company") || q.includes("who")) 
      return "SMYVISION is a tech company specializing in digital solutions. Our team of experts is dedicated to delivering exceptional results for our clients with cutting-edge technology.";
    
    if (q.includes("hour") || q.includes("time") || q.includes("open")) 
      return "Our business hours are 9 AM - 7 PM IST, Monday through Friday.";
    
    if (q.includes("bye") || q.includes("goodbye") || q.includes("see you")) 
      return `Goodbye! ${currentTimeGreeting === "Good evening" ? "🌙" : "👋"} Have a great day!`;
    
    // Polite acknowledgments
    if (q.includes("ok") || q.includes("okay") || q.includes("alright") || q.includes("fine")) {
      return "Great! 😊 Let me know if you need anything else or have any questions.";
    }
    
    // How are you
    if (q.includes("how are you") || q.includes("how do you do")) {
      return `I'm doing great, ${currentTimeGreeting.toLowerCase()}! 😊 How can I assist you today?`;
    }
    
    return `I'm not sure I understand. Could you rephrase your question? Or try asking about our services, contact info, or company details. ${currentTimeGreeting}! 😊`;
  };

  const processProjectInfo = async (msg) => {
    switch (currentField) {
      case "fullName":
        if (!validateName(msg)) {
          return "Please enter a valid name (letters and spaces only, 2-50 characters):";
        }
        setProjectInfo({...projectInfo, fullName: msg});
        setCurrentField("email");
        return `${currentTimeGreeting}, ${msg}! What's your email address?`;
      
      case "email":
        if (!validateEmail(msg)) {
          return "Please enter a valid email address (e.g., name@example.com):";
        }
        setProjectInfo({...projectInfo, email: msg});
        setCurrentField("phone");
        return "Great! Now, what's your phone number? (Indian format preferred)";
      
      case "phone":
        if (msg.toLowerCase() === 'skip') {
          setProjectInfo({...projectInfo, phone: ''});
          setCurrentField("company");
          return "No problem! What's your company name? (type 'skip' if not applicable)";
        }
        if (msg.trim() && !validateIndianPhone(msg)) {
          return "Please enter a valid Indian phone number (10 digits starting with 6-9) ";
        }
        setProjectInfo({...projectInfo, phone: msg.trim() || ''});
        setCurrentField("company");
        return "What's your company name? (type 'skip' if not applicable)";
      
      case "company":
        if (msg.toLowerCase() === 'skip') {
          setProjectInfo({...projectInfo, company: ''});
        } else {
          setProjectInfo({...projectInfo, company: msg});
        }
        const industryList = industries.map((ind, i) => `${i+1}. ${ind}`).join('\n');
        setCurrentField("industry");
        return `Please select your industry:\n${industryList}\n\nType the number (1-7) or type 'Others' if not listed.`;
      
      case "industry":
        let selectedIndustry = msg;
        const num = parseInt(msg);
        if (!isNaN(num) && num >= 1 && num <= industries.length) {
          selectedIndustry = industries[num - 1];
        } else if (!industries.includes(msg) && msg.toLowerCase() !== 'others') {
          return `Please select a valid option (1-${industries.length}) or type 'Others':`;
        }
        
        if (selectedIndustry.toLowerCase() === 'others') {
          selectedIndustry = 'Others';
        }
        
        setProjectInfo({...projectInfo, industry: selectedIndustry});
        
        const serviceList = services.map((serv, i) => `${i+1}. ${serv}`).join('\n');
        setCurrentField("service");
        return `What service are you interested in?\n${serviceList}\n\nType the number (1-3).`;
      
      case "service":
        let selectedService = msg;
        const servNum = parseInt(msg);
        if (!isNaN(servNum) && servNum >= 1 && servNum <= services.length) {
          selectedService = services[servNum - 1];
        } else if (!services.includes(msg)) {
          return `Please select a valid option (1-${services.length}):`;
        }
        
        // Automatically submit without asking for requirements
        const finalData = {
          ...projectInfo,
          service: selectedService,
          requirements: "from no asking"
        };
        
        setMessages(prev => [
          ...prev,
          { sender: "bot", text: "⏳ Processing your information and sending to SMYVISION..." }
        ]);
        
        setIsSubmitting(true);
        
        setTimeout(async () => {
          try {
            console.log('Final data to submit:', finalData);
            const success = await submitFormData(finalData);
            
            setIsSubmitting(false);
            
            if (success) {
              const botMsg = `✅ Data Submitted Successfully!\n\nYour project details have been sent to SMYVISION.\n\n📋 Details:\n• Name: ${finalData.fullName}\n• Email: ${finalData.email}\n• Phone: ${finalData.phone || 'Not provided'}\n• Company: ${finalData.company || 'Not provided'}\n• Industry: ${finalData.industry}\n• Service: ${finalData.service}\n• Requirements: from no asking\n\nWe'll contact you within 24 hours.\n\nNeed immediate help?\n📧 Email: smyvisiontechnologies@gmail.com\n📞 Phone: +91 8500352005`;
              
              setMessages(prev => [
                ...prev.slice(0, -1),
                { sender: "bot", text: botMsg }
              ]);
            } else {
              const errorMsg = `❌ Submission Error\n\nPlease use our contact form on the website or contact us directly:\n\n📧 Email: smyvisiontechnologies@gmail.com\n📞 Phone: +91 8500352005\n💬 WhatsApp: +91 8500352005`;
              
              setMessages(prev => [
                ...prev.slice(0, -1),
                { sender: "bot", text: errorMsg }
              ]);
            }
          } catch (error) {
            console.error('Submission error:', error);
            setIsSubmitting(false);
            
            const errorMsg = `❌ Network Error\n\nPlease check your internet connection and try again, or contact us directly:\n\n📧 smyvisiontechnologies@gmail.com\n📞 +91 8500352005`;
            
            setMessages(prev => [
              ...prev.slice(0, -1),
              { sender: "bot", text: errorMsg }
            ]);
          }
          
          setCollectingProjectInfo(false);
          setCurrentField(null);
          setProjectInfo({
            fullName: "",
            email: "",
            phone: "",
            company: "",
            industry: "",
            service: "",
            requirements: ""
          });
        }, 1500);
        
        return "";
      
      default:
        return "Let's start over. What's your name?";
    }
  };

  const sendMessage = () => {
    if (!input.trim() || isSubmitting || isTyping) return;

    const userMessage = input.trim();
    setMessages(prev => [
      ...prev,
      { sender: "user", text: userMessage }
    ]);
    
    setInput("");
    
    addTypingAnimation(() => {
      const botReply = getBotReply(userMessage);
      if (botReply) {
        setMessages(prev => [
          ...prev,
          { sender: "bot", text: botReply }
        ]);
      }
    }, 1000);
  };

  const handleSuggestedQuestion = (question) => {
    const userMessage = question;
    setMessages(prev => [
      ...prev,
      { sender: "user", text: userMessage }
    ]);
    
    addTypingAnimation(() => {
      const botReply = getBotReply(userMessage);
      if (botReply) {
        setMessages(prev => [
          ...prev,
          { sender: "bot", text: botReply }
        ]);
      }
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleClearChat = () => {
    clearAllCache();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Get chatbox styles based on screen size
  const getChatboxStyles = () => {
    if (isMobile) {
      return {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        width: "100%",
        height: "100%",
        borderRadius: "0",
        zIndex: 1001,
        backgroundImage: "url('/logo.png')",
        backgroundSize: "150px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(255, 255, 255, 0.95)"
      };
    }
    
    return {
      position: "fixed",
      bottom: "100px",
      right: "24px",
      width: "380px",
      height: "550px",
      borderRadius: "16px",
      zIndex: 1000,
      backgroundImage: "url('/logo.png')",
      backgroundSize: "120px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "rgba(255, 255, 255, 0.95)"
    };
  };

  // Get chat icon styles based on screen size
  const getChatIconStyles = () => {
    const baseStyles = {
      position: "fixed",
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      backgroundColor: "#4f46e5",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "28px",
      boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)",
      transition: "all 0.3s ease",
      animation: "pulse 2s infinite",
      border: "3px solid white",
      zIndex: 1000
    };
    
    if (isMobile) {
      return {
        ...baseStyles,
        bottom: "20px",
        right: "20px",
        width: "56px",
        height: "56px",
        fontSize: "24px",
        zIndex: 1002
      };
    }
    
    return {
      ...baseStyles,
      bottom: "24px",
      right: "24px"
    };
  };

  return (
    <>
      {/* Chat Icon - On mobile, don't show the X when chat is open */}
      {!isMobile && (
        <div
          onClick={() => setOpen(!open)}
          style={getChatIconStyles()}
        >
          {open ? "✕" : "💬"}
        </div>
      )}
      
      {/* Mobile: Show chat icon only when chat is closed */}
      {isMobile && !open && (
        <div
          onClick={() => setOpen(!open)}
          style={getChatIconStyles()}
        >
          💬
        </div>
      )}

      {/* Chat Box */}
      {open && (
        <div
          style={{
            ...getChatboxStyles(),
            border: "1px solid rgba(79, 70, 229, 0.1)",
            display: "flex",
            flexDirection: "column",
            boxShadow: isMobile ? "none" : "0 10px 40px rgba(0, 0, 0, 0.15)",
            overflow: "hidden",
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            backdropFilter: "blur(10px)"
          }}
        >
          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)",
            color: "white",
            padding: isMobile ? "12px 16px" : "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexShrink: 0,
            backdropFilter: "blur(10px)",
            position: "relative",
            zIndex: 1,
            minHeight: "60px",
            boxSizing: "border-box"
          }}>
            <div style={{ 
              position: "relative", 
              zIndex: 2,
              flex: 1,
              minWidth: 0,
              marginRight: isMobile ? "12px" : "0",
              paddingRight: isMobile ? "8px" : "0"
            }}>
              <div style={{ 
                fontSize: isMobile ? "15px" : "18px", 
                fontWeight: "600",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "1.2",
                marginBottom: "2px"
              }}>
                SMYVISION Assistant
              </div>
              <div style={{ 
                fontSize: isMobile ? "11px" : "12px", 
                opacity: 0.9,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "1.2"
              }}>
                {currentTimeGreeting}! • {isTyping ? "Typing..." : "We typically reply in minutes"}
              </div>
            </div>
            <div style={{ 
              display: "flex", 
              gap: "6px", 
              position: "relative", 
              zIndex: 2,
              flexShrink: 0,
              alignItems: "flex-start"
            }}>
              <button
                onClick={handleClearChat}
                disabled={isSubmitting || isTyping}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "none",
                  color: "white",
                  padding: isMobile ? "5px 8px" : "6px 12px",
                  borderRadius: "16px",
                  cursor: (isSubmitting || isTyping) ? "not-allowed" : "pointer",
                  fontSize: isMobile ? "10px" : "12px",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                  opacity: (isSubmitting || isTyping) ? 0.6 : 1,
                  backdropFilter: "blur(10px)",
                  flexShrink: 0,
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting && !isTyping) {
                    e.target.style.background = "rgba(255, 255, 255, 0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting && !isTyping) {
                    e.target.style.background = "rgba(255, 255, 255, 0.2)";
                  }
                }}
              >
                {isMobile ? "Clear" : "Clear Chat"}
              </button>
              {/* Keep the X button in header for mobile too */}
              {isMobile && (
                <button
                  onClick={() => setOpen(false)}
                  disabled={isSubmitting || isTyping}
                  style={{
                    background: "rgb(255, 0, 0)",
                    border: "none",
                    color: "white",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    cursor: (isSubmitting || isTyping) ? "not-allowed" : "pointer",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: (isSubmitting || isTyping) ? 0.6 : 1,
                    backdropFilter: "blur(10px)",
                    flexShrink: 0
                }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Messages Container */}
          <div style={{
            flex: 1,
            padding: isMobile ? "12px 16px" : "20px",
            overflowY: "auto",
            background: "rgba(248, 250, 252, 0.23)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            position: "relative",
            zIndex: 1,
            backdropFilter: "brightness(1.2)",
            boxSizing: "border-box"
          }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: m.sender === "user" ? "flex-end" : "flex-start",
                  position: "relative",
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    maxWidth: isMobile ? "85%" : "80%",
                    padding: "10px 14px",
                    borderRadius: m.sender === "user" 
                      ? "18px 18px 4px 18px" 
                      : "18px 18px 18px 4px",
                    background: m.sender === "user" 
                      ? "linear-gradient(135deg, rgba(79, 70, 229, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)" 
                      : "rgba(226, 232, 240, 0.9)",
                    color: m.sender === "user" ? "white" : "#1e293b",
                    fontSize: isMobile ? "13px" : "14px",
                    lineHeight: "1.5",
                    wordWrap: "break-word",
                    boxShadow: m.sender === "user" 
                      ? "0 2px 8px rgba(79, 70, 229, 0.3)" 
                      : "0 2px 4px rgba(0, 0, 0, 0.05)",
                    whiteSpace: "pre-line",
                    backdropFilter: "blur(10px)",
                    border: m.sender === "user" 
                      ? "1px solid rgba(255, 255, 255, 0.2)" 
                      : "1px solid rgba(255, 255, 255, 0.3)"
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div style={{
                display: "flex",
                justifyContent: "flex-start",
                position: "relative",
                zIndex: 2
              }}>
                <div
                  style={{
                    maxWidth: isMobile ? "85%" : "80%",
                    padding: "10px 14px",
                    borderRadius: "18px 18px 18px 4px",
                    background: "rgba(226, 232, 240, 0.9)",
                    color: "#1e293b",
                    fontSize: isMobile ? "13px" : "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)"
                  }}
                >
                  <div className="typing-dot" style={{ animationDelay: '0s' }}></div>
                  <div className="typing-dot" style={{ animationDelay: '0.2s' }}></div>
                  <div className="typing-dot" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />

            {/* Current field indicator */}
            {collectingProjectInfo && currentField && !isSubmitting && !isTyping && (
              <div style={{
                padding: "10px",
                background: "rgba(224, 242, 254, 0.9)",
                borderRadius: "12px",
                fontSize: "13px",
                color: "#0369a1",
                border: "1px solid rgba(186, 230, 253, 0.5)",
                marginTop: "8px",
                backdropFilter: "blur(10px)",
                position: "relative",
                zIndex: 2
              }}>
                {currentField === "fullName" && "📝 Enter your full name (letters and spaces only)"}
                {currentField === "email" && "📧 Enter your email address (e.g., name@example.com)"}
                {currentField === "phone" && "📱 Enter phone number "}
                {currentField === "company" && "🏢 Enter company name (type 'skip' if not applicable)"}
                {currentField === "industry" && `🏭 Select industry (1-${industries.length}) or type 'Others'`}
                {currentField === "service" && `🛠️ Select service (1-${services.length})`}
              </div>
            )}
            
            {/* Quote field indicator */}
            {collectingQuoteInfo && currentQuoteField && !isSubmitting && !isTyping && (
              <div style={{
                padding: "10px",
                background: "rgba(240, 253, 244, 0.9)",
                borderRadius: "12px",
                fontSize: "13px",
                color: "#166534",
                border: "1px solid rgba(187, 247, 208, 0.5)",
                marginTop: "8px",
                backdropFilter: "blur(10px)",
                position: "relative",
                zIndex: 2
              }}>
                {currentQuoteField === "name" && "📝 Enter your name for custom quote"}
                {currentQuoteField === "email" && "📧 Enter your email for custom quote"}
                {currentQuoteField === "phone" && "📱 Enter phone number for custom quote"}
              </div>
            )}

            {/* Service enquiry field indicator */}
            {collectingServiceInfo && currentServiceField && !isSubmitting && !isTyping && (
              <div style={{
                padding: "10px",
                background: "rgba(254, 252, 232, 0.9)",
                borderRadius: "12px",
                fontSize: "13px",
                color: "#854d0e",
                border: "1px solid rgba(254, 240, 138, 0.5)",
                marginTop: "8px",
                backdropFilter: "blur(10px)",
                position: "relative",
                zIndex: 2
              }}>
                {currentServiceField === "name" && `📝 Enter your name for ${serviceInfo.selectedService} enquiry`}
                {currentServiceField === "email" && `📧 Enter your email for ${serviceInfo.selectedService} enquiry`}
                {currentServiceField === "phone" && `📱 Enter phone number for ${serviceInfo.selectedService} enquiry`}
              </div>
            )}

            {/* Status check field indicator */}
            {collectingStatusInfo && currentStatusField && !isSubmitting && !isTyping && (
              <div style={{
                padding: "10px",
                background: "rgba(237, 233, 254, 0.9)",
                borderRadius: "12px",
                fontSize: "13px",
                color: "#5b21b6",
                border: "1px solid rgba(221, 214, 254, 0.5)",
                marginTop: "8px",
                backdropFilter: "blur(10px)",
                position: "relative",
                zIndex: 2
              }}>
                {currentStatusField === "phone" && "📱 Enter your registered phone number to check project status"}
              </div>
            )}

            {/* Suggested Questions */}
            {messages.length === 1 && !collectingProjectInfo && !collectingQuoteInfo && !collectingServiceInfo && !collectingStatusInfo && !isTyping && (
              <div style={{ marginTop: "12px", position: "relative", zIndex: 2 }}>
                <div style={{ 
                  fontSize: isMobile ? "11px" : "12px", 
                  color: "#64748b", 
                  marginBottom: "8px",
                  fontWeight: "500",
                  textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)"
                }}>
                  Suggested questions:
                </div>
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column",
                  gap: "8px"
                }}>
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      disabled={isSubmitting || isTyping}
                      style={{
                        textAlign: "left",
                        background: "rgba(255, 255, 255, 0.9)",
                        border: "1px solid rgba(226, 232, 240, 0.5)",
                        borderRadius: "12px",
                        padding: isMobile ? "8px 12px" : "10px 14px",
                        fontSize: isMobile ? "12px" : "13px",
                        color: "#475569",
                        cursor: (isSubmitting || isTyping) ? "not-allowed" : "pointer",
                        transition: "all 0.2s",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                        opacity: (isSubmitting || isTyping) ? 0.6 : 1,
                        backdropFilter: "blur(10px)",
                        position: "relative",
                        zIndex: 2
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubmitting && !isTyping) {
                          e.target.style.background = "rgba(255, 255, 255, 1)";
                          e.target.style.transform = "translateY(-1px)";
                          e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSubmitting && !isTyping) {
                          e.target.style.background = "rgba(255, 255, 255, 0.9)";
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.05)";
                        }
                      }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div style={{
            borderTop: "1px solid rgba(226, 232, 240, 0.5)",
            padding: isMobile ? "12px 16px 16px 16px" : "16px",
            background: "rgba(255, 255, 255, 0.9)",
            flexShrink: 0,
            position: "relative",
            zIndex: 1,
            backdropFilter: "blur(10px)",
            boxSizing: "border-box"
          }}>
            <div style={{ 
              display: "flex", 
              gap: "8px",
              alignItems: "center",
              position: "relative",
              width: "100%"
            }}>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isSubmitting || isTyping}
                placeholder={
                  isSubmitting ? "⏳ Processing..." :
                  isTyping ? "⏳ Assistant is typing..." :
                  collectingProjectInfo 
                    ? (currentField === "fullName" ? "Enter your full name..." :
                      currentField === "email" ? "Enter your email address..." :
                      currentField === "phone" ? "Enter phone..." :
                      currentField === "company" ? "Enter company name or 'skip'..." :
                      currentField === "industry" ? `Select industry (1-${industries.length})...` :
                      currentField === "service" ? `Select service (1-${services.length})...` :
                      `Type your message here... ${currentTimeGreeting}!`)
                    : (collectingQuoteInfo
                      ? (currentQuoteField === "name" ? "Enter your name for quote..." :
                        currentQuoteField === "email" ? "Enter your email for quote..." :
                        currentQuoteField === "phone" ? "Enter phone number for quote..." :
                        `Type your message here... ${currentTimeGreeting}!`)
                      : (collectingServiceInfo
                        ? (currentServiceField === "name" ? "Enter your name for enquiry..." :
                          currentServiceField === "email" ? "Enter your email for enquiry..." :
                          currentServiceField === "phone" ? "Enter phone number for enquiry..." :
                          `Type your message here... ${currentTimeGreeting}!`)
                        : (collectingStatusInfo
                          ? (currentStatusField === "phone" ? "Enter phone number for status check..." :
                            `Type your message here... ${currentTimeGreeting}!`)
                          : `Type your message here... ${currentTimeGreeting}!`)))
                }
                style={{
                  flex: 1,
                  padding: isMobile ? "10px 14px" : "12px 16px",
                  border: "1px solid rgba(226, 232, 240, 0.5)",
                  borderRadius: "24px",
                  fontSize: isMobile ? "13px" : "14px",
                  outline: "none",
                  transition: "all 0.2s",
                  backgroundColor: (isSubmitting || isTyping) ? "rgba(241, 245, 249, 0.8)" : "rgba(255, 255, 255, 0.95)",
                  color: (isSubmitting || isTyping) ? "#94a3b8" : "#1e293b",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  zIndex: 2,
                  minWidth: 0,
                  width: "calc(100% - 48px)",
                  boxSizing: "border-box"
                }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isSubmitting || isTyping}
                style={{
                  width: isMobile ? "40px" : "44px",
                  height: isMobile ? "40px" : "44px",
                  borderRadius: "50%",
                  background: (input.trim() && !isSubmitting && !isTyping) 
                    ? "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)" 
                    : "#cbd5e1",
                  color: "white",
                  border: "none",
                  cursor: (input.trim() && !isSubmitting && !isTyping) ? "pointer" : "not-allowed",
                  fontSize: isMobile ? "16px" : "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                  boxShadow: (input.trim() && !isSubmitting && !isTyping) ? "0 2px 8px rgba(79, 70, 229, 0.3)" : "none",
                  opacity: (input.trim() && !isSubmitting && !isTyping) ? 1 : 0.6,
                  position: "relative",
                  zIndex: 2,
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (input.trim() && !isSubmitting && !isTyping) {
                    e.target.style.transform = "scale(1.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (input.trim() && !isSubmitting && !isTyping) {
                    e.target.style.transform = "scale(1)";
                  }
                }}
              >
                {isSubmitting ? "⏳" : isTyping ? "⏳" : "→"}
              </button>
            </div>
            <div style={{
              fontSize: isMobile ? "10px" : "11px",
              color: "#94a3b8",
              textAlign: "center",
              marginTop: "8px",
              position: "relative",
              zIndex: 2,
              textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)",
              padding: "0 4px"
            }}>
              {isSubmitting ? "Processing..." : 
               isTyping ? "Assistant is typing..." :
               `Press Enter to send • Shift + Enter for new line • ${currentTimeGreeting}!`}
            </div>
          </div>
        </div>
      )}

      {/* Add CSS for pulse and typing animations */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7);
            }
            70% {
              transform: scale(1.05);
              box-shadow: 0 0 0 10px rgba(79, 70, 229, 0);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
            }
          }
          
          /* Typing animation */
          .typing-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #64748b;
            display: inline-block;
            animation: typingAnimation 1.4s infinite ease-in-out both;
          }
          
          @keyframes typingAnimation {
            0%, 80%, 100% { 
              transform: scale(0);
              opacity: 0.5;
            }
            40% { 
              transform: scale(1);
              opacity: 1;
            }
          }
          
          /* Logo background styles */
          @media (max-width: 768px) {
            body {
              overflow: ${open ? 'hidden' : 'auto'};
            }
            
            .chatbot-container::before {
              background-size: 200px !important;
            }
          }
          
          /* Focus style for input */
          input:focus {
            border-color: #8b5cf6 !important;
            box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1) !important;
          }
        `}
      </style>
    </>
  );
};

export default ChatbotWidget;