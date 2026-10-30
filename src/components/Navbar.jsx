import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ChevronDown,
  FileText,
  Flag,
  Info,
  Lightbulb,
  Menu,
  ScrollText,
  Users,
  X,
} from "lucide-react";

import logo from "../images/tvk-logo.jpg";

/* ------------------------------------------------------------------ */
/*  Language (English default, Tamil optional, remembered on reload)   */
/* ------------------------------------------------------------------ */

const T = {
  en: {
    partyName: "Tamilaga Vettri Kazhagam",
    election: "2026 - Election",
    candidates: "Candidates",
    guarantees: "Election Guarantees",
    party: "Party",
    about: "About Party",
    ideology: "Ideology",
    issues: "Raise Issues",
    employment: "Employment",
    events: "Login",
    join: "Join Us",
    switchTo: "தமிழ்",
    switchLabel: "Switch to Tamil",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  ta: {
    partyName: "தமிழக வெற்றிக் கழகம்",
    election: "2026 - தேர்தல்",
    candidates: "வேட்பாளர்கள்",
    guarantees: "தேர்தல் வாக்குறுதிகள்",
    party: "கட்சி",
    about: "கட்சி பற்றி",
    ideology: "கொள்கைகள்",
    issues: "குறைகளைப் பதிவு செய்",
    employment: "வேலைவாய்ப்பு",
    events: "நிகழ்வுகள்",
    join: "இணையுங்கள்",
    switchTo: "English",
    switchLabel: "Switch to English",
    openMenu: "மெனுவைத் திற",
    closeMenu: "மெனுவை மூடு",
  },
};

const LangContext = createContext({ lang: "en", setLang: () => {}, t: T.en });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") === "ta" ? "ta" : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* storage blocked - ignore */
    }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: T[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLanguage = () => useContext(LangContext);

/* ------------------------------------------------------------------ */
/*  Navigation structure - edit routes here                            */
/* ------------------------------------------------------------------ */

const NAV = [
  {
    id: "election",
    items: [
      { id: "candidates", to: "/election/candidates", icon: Users },
      { id: "guarantees", to: "/election/guarantees", icon: ScrollText },
    ],
  },
  {
    id: "party",
    items: [
      { id: "about", to: "/party/about", icon: Info },
      { id: "ideology", to: "/party/ideology", icon: Lightbulb },
    ],
  },
  { id: "issues", to: "/raise-issues" },
  { id: "employment", to: "/employment" },
  { id: "events", to: "/events" },
];

const FONT = { fontFamily: "'Anek Tamil', system-ui, sans-serif" };

const linkBase =
  "rounded-md px-1 py-1 text-[1.05rem] font-semibold text-[#8c1a10] transition-colors hover:text-[#5e0f08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8c1a10]";

/* ------------------------------------------------------------------ */
/*  Desktop dropdown                                                   */
/* ------------------------------------------------------------------ */

function DesktopMenu({ group }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();
  const active = group.items.some((i) => pathname.startsWith(i.to));

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={`${linkBase} inline-flex items-center gap-1 ${
          active ? "underline decoration-2 underline-offset-[6px]" : ""
        }`}
      >
        {t[group.id]}
        <ChevronDown
          size={18}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
          <ul className="w-72 overflow-hidden rounded-2xl border-2 border-[#8c1a10] bg-white p-2 shadow-xl">
            {group.items.map(({ id, to, icon: Icon }) => (
              <li key={id}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-3 font-semibold text-[#8c1a10] transition-colors hover:bg-[#fbeceb] focus-visible:bg-[#fbeceb] focus-visible:outline-none ${
                      isActive ? "bg-[#fbeceb]" : ""
                    }`
                  }
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#8c1a10] text-[#f5c83b]">
                    <Icon size={22} />
                  </span>
                  {t[id]}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Language switch                                                    */
/* ------------------------------------------------------------------ */

function LanguageSwitch({ className = "" }) {
  const { lang, setLang, t } = useLanguage();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "ta" : "en")}
      aria-label={t.switchLabel}
      className={`${linkBase} underline decoration-2 underline-offset-[6px] ${className}`}
    >
      {t.switchTo}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */

export default function Navbar({
  logoSrc = "/logo.png",
  district = { en: "District Unit", ta: "மாவட்ட அமைப்பு" },
}) {
  const { lang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  return (
<header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-5" style={FONT}>     
  <nav
        aria-label="Main"
        className="mx-auto max-w-7xl rounded-2xl border-2 border-[#8c1a10]/10 bg-white shadow-lg"
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          {/* Left: logo + name */}
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8c1a10]"
          >
            <img
              src={logo}
              alt=""
              className="h-12 w-12 shrink-0 rounded-full bg-[#8c1a10] object-cover"
            />
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-lg font-extrabold text-[#8c1a10] sm:text-2xl">
                {t.partyName}
              </span>
                
            </span>
          </Link>

          {/* Right: desktop links */}
          <div className="hidden items-center gap-6 lg:flex">
            {NAV.map((entry) =>
              entry.items ? (
                <DesktopMenu key={entry.id} group={entry} />
              ) : (
                <NavLink
                  key={entry.id}
                  to={entry.to}
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive ? "underline decoration-2 underline-offset-[6px]" : ""
                    }`
                  }
                >
                  {t[entry.id]}
                </NavLink>
              )
            )}

            <Link
              to="/join-us"
              className="rounded-lg bg-[#8c1a10] px-5 py-2.5 text-lg font-bold text-white transition-colors hover:bg-[#6d1209] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8c1a10]"
            >
              {t.join}
            </Link>

            <LanguageSwitch />
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="rounded-lg p-2 text-[#8c1a10] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8c1a10] lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="max-h-[75vh] overflow-y-auto border-t border-[#8c1a10]/15 px-4 pb-5 pt-2 lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map((entry) =>
                entry.items ? (
                  <li key={entry.id} className="border-b border-[#8c1a10]/10">
                    <button
                      type="button"
                      aria-expanded={openGroup === entry.id}
                      onClick={() =>
                        setOpenGroup(openGroup === entry.id ? null : entry.id)
                      }
                      className="flex w-full items-center justify-between py-3 text-left text-lg font-semibold text-[#8c1a10]"
                    >
                      {t[entry.id]}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${
                          openGroup === entry.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openGroup === entry.id && (
                      <ul className="pb-2 pl-3">
                        {entry.items.map(({ id, to, icon: Icon }) => (
                          <li key={id}>
                            <NavLink
                              to={to}
                              className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-2 py-2.5 font-semibold text-[#8c1a10] ${
                                  isActive ? "bg-[#fbeceb]" : ""
                                }`
                              }
                            >
                              <Icon size={20} />
                              {t[id]}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={entry.id} className="border-b border-[#8c1a10]/10">
                    <NavLink
                      to={entry.to}
                      className={({ isActive }) =>
                        `block py-3 text-lg font-semibold text-[#8c1a10] ${
                          isActive ? "underline decoration-2 underline-offset-[6px]" : ""
                        }`
                      }
                    >
                      {t[entry.id]}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            <div className="mt-4 flex items-center justify-between gap-4">
              <Link
                to="/join-us"
                className="flex-1 rounded-lg bg-[#8c1a10] px-5 py-3 text-center text-lg font-bold text-white"
              >
                {t.join}
              </Link>
              <LanguageSwitch />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}