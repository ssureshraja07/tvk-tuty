
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(
      "main section, main article, main .reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => {
      element.classList.remove("revealed");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}
