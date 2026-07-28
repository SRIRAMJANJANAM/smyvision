import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Canonical() {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl =
      "https://smyvisiontechnologies.com" + pathname;

    let link = document.querySelector("link[rel='canonical']");

    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }

    link.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}

export default Canonical;
