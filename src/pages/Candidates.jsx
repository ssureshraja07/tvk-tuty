import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Fish,
  Flag,
  Landmark,
  MapPin,
  Megaphone,
  Vote,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/Navbar.jsx";
import { FONT, SmartImage } from "../components/FormKit.jsx";

/* ------------------------------------------------------------------ */
/*  Images - replace the dummy files in /public/images/candidates/     */
/*  with the originals (keep the same file names).                     */
/* ------------------------------------------------------------------ */


// Put the images in  src/images/candidates/  named:
//   hero, portrait, gallery-1 ... gallery-4   (.jpg, .jpeg, .png or .webp all work)
const found = import.meta.glob("../images/candidates/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
});
const img = (name) => {
  const key = Object.keys(found).find((k) =>
    new RegExp(`/${name}\\.(jpe?g|png|webp)$`, "i").test(k)
  );
  return key ? found[key] : undefined;
};

import heroImg from "../images/hero.jpg";
import portraitImg from "../images/portrait.jpg";
import gallery1 from "../images/gallery-1.jpg";
import gallery2 from "../images/gallery-2.jpg";
import gallery3 from "../images/gallery-3.jpg";
import gallery4 from "../images/gallery-4.jpg";

const HERO_IMAGE = heroImg;
const PORTRAIT = portraitImg;
const GALLERY = [gallery1, gallery2, gallery3, gallery4].map((src) => ({
  src,
  caption: null,
}));

/* ------------------------------------------------------------------ */
/*  Content (English / Tamil)                                          */
/*  Facts below come from news reports (May-Aug 2026). Please check    */
/*  them against the party's official profile before you publish.      */
/* ------------------------------------------------------------------ */

const NAME = { en: "A. Srinath", ta: "ஏ. ஸ்ரீநாத்" };

const P = {
  en: {
    kicker: "2026 Assembly Election · Thoothukudi",
    mla: "MLA, Thoothukudi",
    minister: "Minister for Fisheries and Fishermen Welfare",
    readProfile: "Read profile",
    profileTitle: "Profile",
    bio1: "A. Srinath represents Thoothukudi in the Tamil Nadu Legislative Assembly and is the state's Minister for Fisheries and Fishermen Welfare. An actor before he entered politics, he has been a friend of Chief Minister Vijay for nearly three decades and has supported the party since it began.",
    bio2: "He contested the 2026 Assembly election from Thoothukudi and won by 37,731 votes, defeating former DMK minister P. Geetha Jeevan. His was the first win to be recorded for TVK on counting day. On 21 May 2026 he was sworn in as a minister and given the Fisheries and Fishermen Welfare portfolio.",
    party: "Party",
    partyVal: "Tamilaga Vettri Kazhagam",
    constituency: "Constituency",
    constituencyVal: "Thoothukudi",
    result: "2026 result",
    resultVal: "Won by 37,731 votes",
    sworn: "Sworn in as minister",
    updatesTitle: "Recent updates",
    updatesSub: "What the minister said on fishermen's concerns and Thoothukudi's needs.",
    source: "Source: ANI",
    u1: "Said he would go to Delhi to meet the Union Minister of External Affairs and the Union Minister of Fisheries about the arrest of Tamil Nadu fishermen by the Sri Lankan Navy.",
    u2: "Said the demand of Thoothukudi mechanised-boat fishermen for deep-sea fishing permission is part of the Fisheries Department's demand for grants.",
    u3: "Said repair of damaged water pipelines was under way and supply had resumed in several places, and promised to resolve Thoothukudi's drinking water issue within a couple of days.",
    galleryTitle: "In pictures",
    ctaTitle: "Have a problem in your ward?",
    ctaText: "Tell us. Your complaint reaches our team directly.",
  },
  ta: {
    kicker: "2026 சட்டமன்றத் தேர்தல் · தூத்துக்குடி",
    mla: "சட்டமன்ற உறுப்பினர், தூத்துக்குடி",
    minister: "மீன்வளம் மற்றும் மீனவர் நலத்துறை அமைச்சர்",
    readProfile: "சுயவிவரம் படிக்க",
    profileTitle: "சுயவிவரம்",
    bio1: "ஏ. ஸ்ரீநாத், தமிழ்நாடு சட்டமன்றத்தில் தூத்துக்குடியைப் பிரதிநிதித்துவப்படுத்துபவர்; மாநிலத்தின் மீன்வளம் மற்றும் மீனவர் நலத்துறை அமைச்சராகவும் உள்ளார். அரசியலுக்கு வருவதற்கு முன் நடிகராக இருந்த அவர், முதலமைச்சர் விஜய்யின் கிட்டத்தட்ட மூன்று தசாப்த கால நண்பர்; கட்சி தொடங்கியதிலிருந்து அதை ஆதரித்து வருகிறார்.",
    bio2: "2026 சட்டமன்றத் தேர்தலில் தூத்துக்குடியில் போட்டியிட்டு, முன்னாள் திமுக அமைச்சர் பி. கீதா ஜீவனை 37,731 வாக்குகள் வித்தியாசத்தில் தோற்கடித்தார். வாக்கு எண்ணிக்கை நாளில் TVK-க்காகப் பதிவான முதல் வெற்றி இவருடையது. 2026 மே 21 அன்று அமைச்சராகப் பதவியேற்று, மீன்வளம் மற்றும் மீனவர் நலத்துறை ஒதுக்கப்பட்டது.",
    party: "கட்சி",
    partyVal: "தமிழக வெற்றிக் கழகம்",
    constituency: "தொகுதி",
    constituencyVal: "தூத்துக்குடி",
    result: "2026 முடிவு",
    resultVal: "37,731 வாக்குகள் வித்தியாசத்தில் வெற்றி",
    sworn: "அமைச்சராகப் பதவியேற்பு",
    updatesTitle: "சமீபத்திய செய்திகள்",
    updatesSub: "மீனவர்களின் கவலைகள் மற்றும் தூத்துக்குடியின் தேவைகள் குறித்து அமைச்சர் கூறியவை.",
    source: "ஆதாரம்: ANI",
    u1: "இலங்கை கடற்படையால் தமிழ்நாட்டு மீனவர்கள் கைது செய்யப்படுவது குறித்து, மத்திய வெளியுறவு அமைச்சர் மற்றும் மத்திய மீன்வள அமைச்சரைச் சந்திக்க டெல்லி செல்வதாகத் தெரிவித்தார்.",
    u2: "தூத்துக்குடி இயந்திரப் படகு மீனவர்கள் கோரும் ஆழ்கடல் மீன்பிடி அனுமதி, மீன்வளத் துறையின் மானியக் கோரிக்கையில் சேர்க்கப்பட்டுள்ளதாகத் தெரிவித்தார்.",
    u3: "சேதமடைந்த குடிநீர்க் குழாய்களைப் பழுது நீக்கும் பணிகள் நடைபெறுவதாகவும், பல இடங்களில் விநியோகம் மீண்டும் தொடங்கியுள்ளதாகவும் கூறி, தூத்துக்குடியின் குடிநீர்ப் பிரச்சினை சில நாட்களில் தீர்க்கப்படும் என்றார்.",
    galleryTitle: "படங்களில்",
    ctaTitle: "உங்கள் வார்டில் பிரச்சினையா?",
    ctaText: "எங்களிடம் தெரிவியுங்கள். உங்கள் புகார் நேரடியாக எங்கள் குழுவைச் சென்றடையும்.",
  },
};

const UPDATES = [
  { key: "u1", date: "2026-08-13" },
  { key: "u2", date: "2026-08-13" },
  { key: "u3", date: "2026-08-13" },
];

/* ------------------------------------------------------------------ */
/*  Small piece                                                        */
/* ------------------------------------------------------------------ */

function Fact({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-[#fbeceb] p-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8c1a10] text-[#f5c83b]">
        <Icon size={22} aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-[#8c1a10]/80">{label}</p>
        <p className="mt-0.5 text-lg font-bold leading-snug text-[#5e0f08]">{value}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Candidates() {
  const { lang, t } = useLanguage();
  const p = P[lang];
  const locale = lang === "ta" ? "ta-IN" : "en-IN";
  const fmt = (iso) =>
    new Date(iso).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  const name = NAME[lang];

  return (
    <main style={FONT} className="text-[#2b0a07]">
      {/* ---------------- Full-cover image hero (sits under the fixed navbar) ---------------- */}
      <section
        aria-labelledby="cand-name"
        className="relative isolate flex h-screen min-h-[600px] w-full items-end overflow-hidden bg-[#5e0f08]"
      >
        <SmartImage
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover object-top"
          fallback={null}
        />
        {/* Scrim so text stays readable over any photo */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#3a0905]/90 via-[#5e0f08]/40 to-[#5e0f08]/25" />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-20 sm:pb-28">
          <p className="text-lg font-semibold text-white/90 sm:text-xl">{p.kicker}</p>
          <h1
            id="cand-name"
            className="mt-2 text-6xl font-extrabold leading-[1.05] text-[#f5c83b] sm:text-8xl"
          >
            {name}
          </h1>
          <p className="mt-4 text-2xl font-bold text-white sm:text-3xl">{p.minister}</p>
          <p className="mt-1 text-xl font-semibold text-white/90">{p.mla}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() =>
                document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5c83b] px-6 py-3 text-xl font-bold text-[#8c1a10] transition-colors hover:bg-[#ffd95c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {p.readProfile}
              <ChevronDown size={22} aria-hidden="true" />
            </button>
            <Link
              to="/raise-issues"
              className="rounded-lg border-2 border-white/80 px-6 py-3 text-xl font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {t.issues}
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16">
        {/* ---------------- Profile ---------------- */}
        <section
          id="profile"
          aria-labelledby="profile-title"
          className="grid scroll-mt-28 gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
        >
          <div className="overflow-hidden rounded-3xl bg-[#6d1209] shadow-xl lg:sticky lg:top-28 lg:self-start">
            <div className="aspect-[4/5]">
              <SmartImage
                src={PORTRAIT}
                alt={name}
                className="h-full w-full object-cover object-top"
                fallback={null}
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-10">
            <h2 id="profile-title" className="text-sm font-bold uppercase tracking-wide text-[#8c1a10]/80">
              {p.profileTitle}
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-[#8c1a10] sm:text-5xl">{name}</p>
            <p className="mt-2 text-xl font-semibold text-[#5e0f08]">{p.minister}</p>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#5e0f08]">
              <p>{p.bio1}</p>
              <p>{p.bio2}</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Fact icon={Flag} label={p.party} value={p.partyVal} />
              <Fact icon={MapPin} label={p.constituency} value={p.constituencyVal} />
              <Fact icon={Vote} label={p.result} value={p.resultVal} />
              <Fact icon={Landmark} label={p.sworn} value={fmt("2026-05-21")} />
            </div>
          </div>
        </section>

        {/* ---------------- Recent updates ---------------- */}
        <section aria-labelledby="updates-title" className="mt-16">
          <h2 id="updates-title" className="text-3xl font-extrabold text-white sm:text-4xl">
            {p.updatesTitle}
          </h2>
          <p className="mt-1 text-lg text-white/90">{p.updatesSub}</p>

          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {UPDATES.map((u) => (
              <li key={u.key} className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8c1a10] text-[#f5c83b]">
                  <Fish size={24} aria-hidden="true" />
                </span>
                <p className="text-lg leading-relaxed text-[#5e0f08]">{p[u.key]}</p>
                <p className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[#8c1a10]/15 pt-3 text-sm font-semibold text-[#8c1a10]">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={16} aria-hidden="true" />
                    <time dateTime={u.date}>{fmt(u.date)}</time>
                  </span>
                  <span className="text-[#5e0f08]/70">{p.source}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------- Gallery ---------------- */}
        <section aria-labelledby="gallery-title" className="mt-16">
          <h2 id="gallery-title" className="text-3xl font-extrabold text-white sm:text-4xl">
            {p.galleryTitle}
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <li key={i} className="overflow-hidden rounded-2xl bg-[#6d1209] shadow-lg">
                <figure>
                  <div className="aspect-[3/2]">
                    <SmartImage
                      src={g.src}
                      alt={g.caption ? g.caption[lang] : `${name} - ${i + 1}`}
                      className="h-full w-full object-cover"
                      fallback={null}
                    />
                  </div>
                  {g.caption && (
                    <figcaption className="bg-white px-4 py-3 text-base font-semibold text-[#8c1a10]">
                      {g.caption[lang]}
                    </figcaption>
                  )}
                </figure>
              </li>
            ))}
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