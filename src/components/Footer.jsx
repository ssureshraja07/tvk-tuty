import { Link } from "react-router-dom";
import { ArrowUpRight, AtSign, ChevronUp } from "lucide-react";
import { useLanguage } from "./Navbar.jsx";

import footerbg from "../images/footerbg.png";

/* ------------------------------------------------------------------ */
/*  Text (English / Tamil) - edit wording here                         */
/* ------------------------------------------------------------------ */

const F = {
  en: {
    joinTitle: "Join the movement",
    joinBody:
      "TVK is built on people-first politics. Become a member in your district and put your effort behind the work.",
    joinBtn: "Join TVK",
    top: "Back to top",
    election: "2026 - Election",
    byElection: "2026 - By-Elections",
    party: "Party",
    organisation: "Organisation",
    more: "More",
    candidates: "Candidates for Victory",
    guarantees: "Election Guarantees",
    disclosures: "Disclosures",
    about: "About Party",
    ideology: "Ideology",
    actionPlan: "Action Plan",
    leadership: "Leadership",
    districtStructure: "District Organisation Structure",
    wings: "Wings",
    committees: "Committees",
    gallery: "Gallery",
    contact: "Contact",
    resolutions: "Resolutions",
    announcements: "Announcements",
    events: "Events",
  },
  ta: {
    joinTitle: "இயக்கத்தில் இணையுங்கள்",
    joinBody:
      "மக்களை முன்னிறுத்தும் அரசியலே TVK-வின் அடித்தளம். உங்கள் மாவட்டத்தில் உறுப்பினராகி, பணிகளுக்கு உங்கள் உழைப்பைச் சேர்ப்பீர்.",
    joinBtn: "TVK-வில் இணையுங்கள்",
    top: "மேலே செல்ல",
    election: "2026 - தேர்தல்",
    byElection: "2026 - இடைத்தேர்தல்கள்",
    party: "கட்சி",
    organisation: "அமைப்பு",
    more: "மேலும்",
    candidates: "வெற்றிக்கான வேட்பாளர்கள்",
    guarantees: "தேர்தல் வாக்குறுதிகள்",
    disclosures: "வெளிப்படுத்தல்கள்",
    about: "கட்சி பற்றி",
    ideology: "கொள்கைகள்",
    actionPlan: "செயல்திட்டம்",
    leadership: "தலைமை",
    districtStructure: "மாவட்ட நிர்வாகக் கட்டமைப்பு",
    wings: "அணிகள்",
    committees: "குழுக்கள்",
    gallery: "படத்தொகுப்பு",
    contact: "தொடர்புக்கு",
    resolutions: "தீர்மானங்கள்",
    announcements: "அறிவிப்புகள்",
    events: "நிகழ்வுகள்",
  },
};

/* ------------------------------------------------------------------ */
/*  Link columns - [textKey, route]. Remove a line to remove a link.   */
/* ------------------------------------------------------------------ */

const COLUMNS = [
  {
    id: "election",
    links: [
      ["candidates", "/election/candidates"],
      ["guarantees", "/election/guarantees"],
      ["disclosures", "/election/disclosure"],
    ],
  },
  {
    id: "byElection",
    links: [
      ["candidates", "/by-elections/candidates"],
      ["disclosures", "/by-elections/disclosures"],
    ],
  },
  {
    id: "party",
    links: [
      ["about", "/party/about"],
      ["ideology", "/party/ideology"],
      ["actionPlan", "/party/action"],
    ],
  },
  {
    id: "organisation",
    links: [
      ["leadership", "/organisation/leadership"],
      ["districtStructure", "/organisation/district-structure"],
      ["wings", "/organisation/wings"],
      ["committees", "/organisation/committees"],
    ],
  },
  {
    id: "more",
    links: [
      ["gallery", "/gallery"],
      ["contact", "/contact"],
      ["resolutions", "/resolutions"],
      ["announcements", "/announcements"],
      ["events", "/events"],
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Social icons - replace "#"-style placeholders with your real URLs  */
/* ------------------------------------------------------------------ */

const svgProps = {
  viewBox: "0 0 24 24",
  width: 26,
  height: 26,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = () => (
  <svg {...svgProps}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);
const FacebookIcon = () => (
  <svg {...svgProps}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg {...svgProps}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);
// Stand-in for the Threads logo. Swap for the official SVG if you have it.
const ThreadsIcon = () => <AtSign size={26} strokeWidth={1.8} aria-hidden="true" />;

const SOCIAL_GROUPS = [
  [
    { label: "X", href: "https://x.com", Icon: XIcon },
    { label: "Instagram", href: "https://www.instagram.com", Icon: InstagramIcon },
    { label: "Facebook", href: "https://www.facebook.com", Icon: FacebookIcon },
    { label: "YouTube", href: "https://www.youtube.com", Icon: YouTubeIcon },
    { label: "Threads", href: "https://www.threads.net", Icon: ThreadsIcon },
  ],
  [
    { label: "X", href: "https://x.com", Icon: XIcon },
    { label: "Instagram", href: "https://www.instagram.com", Icon: InstagramIcon },
    { label: "Facebook", href: "https://www.facebook.com", Icon: FacebookIcon },
    { label: "Threads", href: "https://www.threads.net", Icon: ThreadsIcon },
  ],
];

const FONT = { fontFamily: "'Anek Tamil', system-ui, sans-serif" };
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5c83b]";

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export default function Footer({ bgSrc = footerbg }) {
  const { lang, t } = useLanguage();
  const f = F[lang];

  return (
    <footer
      className="relative isolate flex min-h-screen flex-col bg-[#8a1810] text-white"
      style={{
        ...FONT,
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Top: left side stays clear for the background photo */}
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-10 px-6 pb-12 pt-20 lg:grid-cols-12">
        <div className="hidden lg:col-span-5 lg:block" aria-hidden="true" />

        <div className="flex flex-col justify-center lg:col-span-7">
          <h2 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            {f.joinTitle}
          </h2>
          <p className="mt-6 max-w-[60ch] text-xl leading-relaxed text-white/95 sm:text-2xl">
            {f.joinBody}
          </p>

          <div className="mt-8 flex justify-start lg:justify-end">
            <Link
              to="/join-us"
              className={`inline-flex items-center gap-3 rounded-lg bg-[#f5c83b] px-5 py-3 text-xl font-bold text-[#8c1a10] transition-colors hover:bg-[#ffd95c] ${focusRing}`}
            >
              {f.joinBtn}
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/70">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap justify-between gap-6">
            {SOCIAL_GROUPS.map((group, i) => (
              <ul
                key={i}
                className="flex divide-x divide-white/40 overflow-hidden rounded-lg border border-white/40"
              >
                {group.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`flex h-16 w-14 items-center justify-center transition-colors hover:bg-white/15 sm:h-[4.5rem] sm:w-[4.5rem] ${focusRing}`}
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: party name + link columns */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-12">
        <hr className="border-white/30" />
        <div className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <p className="text-5xl font-extrabold leading-[1.05] text-[#f5c83b] sm:text-6xl xl:text-7xl">
            {t.partyName}
          </p>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5"
          >
            {COLUMNS.map((col) => (
              <div key={col.id}>
                <h3 className="text-2xl font-semibold text-[#f5c83b]">{f[col.id]}</h3>
                <ul className="mt-5 space-y-4">
                  {col.links.map(([key, to]) => (
                    <li key={to}>
                      <Link
                        to={to}
                        className={`text-lg text-white/95 underline-offset-4 transition-colors hover:text-[#f5c83b] hover:underline ${focusRing}`}
                      >
                        {f[key]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <button
        type="button"
        aria-label={f.top}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 text-white shadow-lg backdrop-blur transition-colors hover:bg-white/30 ${focusRing}`}
      >
        <ChevronUp size={30} strokeWidth={2.5} />
      </button>
    </footer>
  );
}