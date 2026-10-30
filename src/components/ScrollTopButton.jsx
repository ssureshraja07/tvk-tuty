
import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Scroll to top"
      className={`fixed bottom-7 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#920000] text-2xl font-bold text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#b08a00] hover:text-white ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      ↑
    </button>
  );
}
