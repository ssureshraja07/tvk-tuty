import {
  Anchor,
  Bus,
  ChevronDown,
  Construction,
  Droplets,
  Flame,
  Fish,
  Gift,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  IndianRupee,
  Leaf,
  Megaphone,
  Sun,
  Zap,
  ScrollText,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/Navbar.jsx";
import { FONT } from "../components/FormKit.jsx";

// Images: put them in src/images/guarantees/ (change .jpg to .png if yours are png)
import heroImg from "../images/tuty-hero.jpg";
import roadsImg from "../images/roads.jpg";
import busImg from "../images/bus.jpg";
import powerImg from "../images/power.jpg";
import waterImg from "../images/water.jpg";
import portImg from "../images/port.jpg";
import cityImg from "../images/city.jpg";

const IMAGES = {
  hero: heroImg,
  roads: roadsImg,
  bus: busImg,
  power: powerImg,
  water: waterImg,
  port: portImg,
  city: cityImg,
};

/* Set to false once the party has approved the Thoothukudi ideas below */
const LOCAL_IDEAS_ARE_DRAFT = true;

/* ------------------------------------------------------------------ */
/*  Text (English / Tamil)                                             */
/* ------------------------------------------------------------------ */

const P = {
  en: {
    kicker: "2026 Election",
    title: "Election Guarantees",
    heroText:
      "What TVK promised the people of Tamil Nadu in its 2026 manifesto, and our ideas to improve Thoothukudi.",
    heroCta: "See ideas for Thoothukudi",
    stateTitle: "TVK's guarantees for Tamil Nadu",
    stateSub: "Key promises from the party's 2026 manifesto.",
    stateNote:
      "Summary of the manifesto released on 16 April 2026, as reported by news outlets. Please see the party's official manifesto for full details.",
    localTitle: "Our ideas for Thoothukudi",
    localSub: "Roads, buses, power, water and more: what Thoothukudi needs next.",
    localNote:
      "These are development ideas for Thoothukudi. They are not part of the 2026 manifesto.",
    draft: "Draft ideas",
    ctaTitle: "Tell us what Thoothukudi needs",
    ctaText: "Report a problem in your ward and help us decide what to fix first.",
  },
  ta: {
    kicker: "2026 தேர்தல்",
    title: "தேர்தல் வாக்குறுதிகள்",
    heroText:
      "2026 தேர்தல் அறிக்கையில் தமிழ்நாட்டு மக்களுக்கு TVK அளித்த வாக்குறுதிகளும், தூத்துக்குடியை மேம்படுத்துவதற்கான எங்கள் எண்ணங்களும்.",
    heroCta: "தூத்துக்குடிக்கான எண்ணங்கள்",
    stateTitle: "தமிழ்நாட்டுக்கான TVK-வின் வாக்குறுதிகள்",
    stateSub: "கட்சியின் 2026 தேர்தல் அறிக்கையில் உள்ள முக்கிய வாக்குறுதிகள்.",
    stateNote:
      "2026 ஏப்ரல் 16 அன்று வெளியிடப்பட்ட தேர்தல் அறிக்கையின் சுருக்கம் (செய்தி ஊடகங்களின் அடிப்படையில்). முழு விவரங்களுக்குக் கட்சியின் அதிகாரப்பூர்வ தேர்தல் அறிக்கையைப் பார்க்கவும்.",
    localTitle: "தூத்துக்குடிக்கான எங்கள் எண்ணங்கள்",
    localSub: "சாலை, பேருந்து, மின்சாரம், குடிநீர் மற்றும் பல: தூத்துக்குடிக்கு அடுத்து என்ன தேவை.",
    localNote:
      "இவை தூத்துக்குடியின் வளர்ச்சிக்கான எண்ணங்கள். இவை 2026 தேர்தல் அறிக்கையின் பகுதி அல்ல.",
    draft: "வரைவு எண்ணங்கள்",
    ctaTitle: "தூத்துக்குடிக்கு என்ன தேவை என்று சொல்லுங்கள்",
    ctaText: "உங்கள் வார்டில் உள்ள பிரச்சினையைத் தெரிவித்து, முதலில் எதைச் சரிசெய்வது என்று தீர்மானிக்க உதவுங்கள்.",
  },
};

/* Statewide guarantees (from the 16 April 2026 manifesto, as reported) */
const STATE = [
  {
    icon: IndianRupee,
    en: { title: "₹2,500 every month for homemakers", text: "Monthly assistance for women below 60 years." },
    ta: { title: "இல்லத்தரசிகளுக்கு மாதம் ₹2,500", text: "60 வயதுக்குட்பட்ட பெண்களுக்கு மாதாந்திர உதவித்தொகை." },
  },
  {
    icon: HeartHandshake,
    en: { title: "₹3,000 monthly pension", text: "For senior citizens, widows and persons with disabilities." },
    ta: { title: "மாதம் ₹3,000 ஓய்வூதியம்", text: "மூத்த குடிமக்கள், விதவைகள், மாற்றுத்திறனாளிகளுக்கு." },
  },
  {
    icon: Zap,
    en: { title: "200 units of free electricity", text: "For every household." },
    ta: { title: "200 யூனிட் இலவச மின்சாரம்", text: "ஒவ்வொரு குடும்பத்திற்கும்." },
  },
  {
    icon: Flame,
    en: { title: "6 free LPG cylinders a year", text: "For every family." },
    ta: { title: "ஆண்டுக்கு 6 இலவச எரிவாயு உருளைகள்", text: "ஒவ்வொரு குடும்பத்திற்கும்." },
  },
  {
    icon: HeartPulse,
    en: { title: "Health cover up to ₹25 lakh", text: "Family medical insurance, with a free full-body check-up every year." },
    ta: { title: "₹25 லட்சம் வரை மருத்துவக் காப்பீடு", text: "குடும்ப மருத்துவக் காப்பீடு; ஆண்டுதோறும் இலவச முழு உடல் பரிசோதனை." },
  },
  {
    icon: Droplets,
    en: { title: "Piped drinking water for all", text: "100% piped drinking water supply for all households." },
    ta: { title: "அனைவருக்கும் குழாய் குடிநீர்", text: "அனைத்து வீடுகளுக்கும் 100% குழாய் குடிநீர் விநியோகம்." },
  },
  {
    icon: Gift,
    en: { title: "8 gm gold and a silk saree", text: "For brides from families with annual income below ₹5 lakh." },
    ta: { title: "8 கிராம் தங்கம், பட்டுப் புடவை", text: "ஆண்டு வருமானம் ₹5 லட்சத்திற்குக் குறைவான குடும்பத்து மணப்பெண்களுக்கு." },
  },
  {
    icon: GraduationCap,
    en: { title: "Aid for unemployed youth", text: "₹4,000 a month for graduates and ₹2,500 for diploma holders." },
    ta: { title: "வேலையில்லா இளைஞர்களுக்கு உதவி", text: "பட்டதாரிகளுக்கு மாதம் ₹4,000, டிப்ளமோ படித்தவர்களுக்கு ₹2,500." },
  },
  {
    icon: Fish,
    en: { title: "Minimum support price for fish", text: "A fair price guarantee for fishing families." },
    ta: { title: "மீனுக்குக் குறைந்தபட்ச ஆதார விலை", text: "மீனவக் குடும்பங்களுக்கு நியாயமான விலை உத்தரவாதம்." },
  },
];

/* Thoothukudi development ideas - edit freely */
const LOCAL = [
  {
    id: "roads",
    icon: Construction,
    en: {
      title: "Roads & Bridges",
      points: [
        "Overbridges at busy railway crossings and junctions to end long traffic waits.",
        "Wider, stronger roads on port and industrial routes, with separate lanes for heavy vehicles.",
        "A bypass so trucks stay out of the city centre.",
      ],
    },
    ta: {
      title: "சாலைகள் & பாலங்கள்",
      points: [
        "நெரிசலான ரயில்வே கேட்கள், சந்திப்புகளில் மேம்பாலங்கள் அமைத்து நீண்ட காத்திருப்பைக் குறைத்தல்.",
        "துறைமுகம், தொழிற்சாலைப் பாதைகளில் அகலமான, உறுதியான சாலைகள்; கனரக வாகனங்களுக்குத் தனிப் பாதை.",
        "கனரக லாரிகள் நகர மையத்திற்குள் வராமல் இருக்கப் புறவழிச் சாலை.",
      ],
    },
  },
  {
    id: "bus",
    icon: Bus,
    en: {
      title: "Bus Stops & Transport",
      points: [
        "Covered bus shelters with seating, lighting and route boards on all main roads.",
        "More town buses linking every ward to the bus stand, the port area and industrial estates.",
        "Safe footpaths and pedestrian crossings near schools and markets.",
      ],
    },
    ta: {
      title: "பேருந்து நிறுத்தங்கள் & போக்குவரத்து",
      points: [
        "அனைத்து முக்கிய சாலைகளிலும் இருக்கை, விளக்கு, வழித்தட அறிவிப்புடன் கூடிய நிழற்குடைகள்.",
        "ஒவ்வொரு வார்டையும் பேருந்து நிலையம், துறைமுகப் பகுதி, தொழிற்பேட்டைகளுடன் இணைக்கும் கூடுதல் நகரப் பேருந்துகள்.",
        "பள்ளிகள், சந்தைகள் அருகே பாதுகாப்பான நடைபாதைகள், பாதசாரி கடவுகள்.",
      ],
    },
  },
  {
    id: "power",
    icon: Sun,
    en: {
      title: "Power & Clean Energy",
      points: [
        "Quick follow-up on power projects in the district, with fair jobs for local people.",
        "Rooftop solar for government buildings, schools and homes.",
        "New substations and stronger lines to end low voltage and long power cuts.",
      ],
    },
    ta: {
      title: "மின்சாரம் & தூய்மை ஆற்றல்",
      points: [
        "மாவட்டத்தில் உள்ள மின் திட்டங்களை விரைந்து முடிக்கக் கண்காணிப்பு; உள்ளூர் மக்களுக்கு நியாயமான வேலைவாய்ப்பு.",
        "அரசு கட்டடங்கள், பள்ளிகள், வீடுகளில் கூரை சூரிய மின்சாரம்.",
        "குறைந்த மின்னழுத்தம், நீண்ட மின்தடையை நீக்கப் புதிய துணை மின் நிலையங்கள், வலுவான மின்பாதைகள்.",
      ],
    },
  },
  {
    id: "water",
    icon: Droplets,
    en: {
      title: "Water, Drainage & Flood Safety",
      points: [
        "Replace old and leaking water pipelines so every ward gets regular supply.",
        "Study a seawater desalination plant for a lasting drinking water source.",
        "Storm-water drains and canal cleaning before every monsoon, to prevent flooding.",
      ],
    },
    ta: {
      title: "குடிநீர், வடிகால் & வெள்ளப் பாதுகாப்பு",
      points: [
        "பழைய, கசியும் குடிநீர்க் குழாய்களை மாற்றி, ஒவ்வொரு வார்டுக்கும் சீரான விநியோகம்.",
        "நிலையான குடிநீர் ஆதாரத்திற்காகக் கடல்நீர் குடிநீராக்கும் ஆலை அமைப்பது குறித்து ஆய்வு.",
        "ஒவ்வொரு பருவமழைக்கும் முன் மழைநீர் வடிகால்கள், கால்வாய்களைத் தூர்வாரி வெள்ளத்தைத் தடுத்தல்.",
      ],
    },
  },
  {
    id: "port",
    icon: Anchor,
    en: {
      title: "Port, Fisheries & Jobs",
      points: [
        "Better harbour facilities for fishermen: cold storage, ice plants and safe landing places.",
        "Push for deep-sea fishing permission for Thoothukudi's mechanised boats.",
        "Skill training linked to port and industry jobs, with priority for local youth.",
      ],
    },
    ta: {
      title: "துறைமுகம், மீன்வளம் & வேலைவாய்ப்பு",
      points: [
        "மீனவர்களுக்கு குளிர்பதனக் கிடங்கு, ஐஸ் ஆலை, பாதுகாப்பான படகு நிறுத்தும் இடங்கள் போன்ற மேம்பட்ட துறைமுக வசதிகள்.",
        "தூத்துக்குடி இயந்திரப் படகுகளுக்கு ஆழ்கடல் மீன்பிடி அனுமதி பெற முயற்சி.",
        "துறைமுகம், தொழிற்துறை வேலைகளுக்கான திறன் பயிற்சி; உள்ளூர் இளைஞர்களுக்கு முன்னுரிமை.",
      ],
    },
  },
  {
    id: "city",
    icon: Leaf,
    en: {
      title: "Clean & Safe City",
      points: [
        "Daily door-to-door garbage collection and proper waste processing.",
        "Working street lights on every road, repaired quickly once reported.",
        "Clean public toilets, parks and play areas in every ward.",
      ],
    },
    ta: {
      title: "தூய்மையான, பாதுகாப்பான நகரம்",
      points: [
        "தினசரி வீடு வீடாகக் குப்பை சேகரிப்பு, முறையான கழிவு மேலாண்மை.",
        "ஒவ்வொரு சாலையிலும் எரியும் தெரு விளக்குகள்; புகார் வந்ததும் விரைவில் பழுது நீக்கம்.",
        "ஒவ்வொரு வார்டிலும் தூய்மையான பொதுக் கழிப்பறைகள், பூங்காக்கள், விளையாட்டிடங்கள்.",
      ],
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Pieces                                                             */
/* ------------------------------------------------------------------ */

function ImagePanel({ src, Icon, className = "", iconSize = 72 }) {
  return (
    <div className={`relative overflow-hidden bg-[#fbeceb] ${className}`}>
      {src ? (
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-[#8c1a10]/60">
          <Icon size={iconSize} strokeWidth={1.5} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ElectionGuarantees() {
  const { lang, t } = useLanguage();
  const p = P[lang];

  return (
    <main style={FONT} className="pb-24 pt-32 text-[#2b0a07] sm:pt-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------------- Hero card ---------------- */}
        <section
          aria-labelledby="guar-title"
          className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:min-h-[260px] md:grid-cols-2"
        >
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wide text-[#8c1a10]/80">
              {p.kicker}
            </p>
            <h1
              id="guar-title"
              className="text-4xl font-extrabold leading-tight text-[#8c1a10] sm:text-5xl"
            >
              {p.title}
            </h1>
            <p className="max-w-[52ch] text-lg text-[#5e0f08]">{p.heroText}</p>
            <div>
              <button
                type="button"
                onClick={() =>
                  document.getElementById("local")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 rounded-xl bg-[#8c1a10] px-6 py-3 text-lg font-bold text-white transition-colors hover:bg-[#6d1209] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8c1a10]"
              >
                {p.heroCta}
                <ChevronDown size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
          <ImagePanel src={IMAGES.hero} Icon={ScrollText} className="min-h-[220px] bg-[#6d1209]" iconSize={96} />
        </section>

        {/* ---------------- Statewide guarantees ---------------- */}
        <section aria-labelledby="state-title" className="mt-14">
          <h2 id="state-title" className="text-3xl font-extrabold text-white sm:text-4xl">
            {p.stateTitle}
          </h2>
          <p className="mt-1 text-lg text-white/90">{p.stateSub}</p>

          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STATE.map((g, i) => {
              const Icon = g.icon;
              const c = g[lang];
              return (
                <li key={i} className="flex gap-4 rounded-2xl bg-white p-6 shadow-lg">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#8c1a10] text-[#f5c83b]">
                    <Icon size={28} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold leading-snug text-[#8c1a10]">{c.title}</h3>
                    <p className="mt-1 text-base text-[#5e0f08]">{c.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 max-w-[80ch] text-sm text-white/85">{p.stateNote}</p>
        </section>

        {/* ---------------- Thoothukudi ideas ---------------- */}
        <section id="local" aria-labelledby="local-title" className="mt-16 scroll-mt-28">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="local-title" className="text-3xl font-extrabold text-white sm:text-4xl">
                {p.localTitle}
              </h2>
              <p className="mt-1 text-lg text-white/90">{p.localSub}</p>
            </div>
            {LOCAL_IDEAS_ARE_DRAFT && (
              <span className="rounded-full bg-[#f5c83b] px-3 py-1 text-sm font-bold text-[#5e0f08]">
                {p.draft}
              </span>
            )}
          </div>
          <p className="mt-2 max-w-[80ch] text-sm text-white/85">{p.localNote}</p>

          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {LOCAL.map((item) => {
              const Icon = item.icon;
              const c = item[lang];
              return (
                <li key={item.id} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
                  <ImagePanel src={IMAGES[item.id]} Icon={Icon} className="h-48" />
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h3 className="flex items-center gap-3 text-2xl font-extrabold text-[#8c1a10]">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8c1a10] text-[#f5c83b]">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      {c.title}
                    </h3>
                    <ul className="space-y-3">
                      {c.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-lg leading-snug text-[#5e0f08]">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#8c1a10]"
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ---------------- CTA ---------------- */}
        <section
          aria-labelledby="cta-title"
          className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#f5c83b] p-8 sm:flex-row sm:items-center sm:p-10"
        >
          <div>
            <h2 id="cta-title" className="text-3xl font-extrabold text-[#5e0f08]">
              {p.ctaTitle}
            </h2>
            <p className="mt-1 text-lg font-semibold text-[#5e0f08]">{p.ctaText}</p>
          </div>
          <Link
            to="/raise-issues"
            className="inline-flex items-center gap-2 rounded-xl bg-[#8c1a10] px-8 py-4 text-xl font-bold text-white transition-colors hover:bg-[#6d1209] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8c1a10]"
          >
            <Megaphone size={22} aria-hidden="true" />
            {t.issues}
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}