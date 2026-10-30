import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarDays,
  Flag,
  Landmark,
  Megaphone,
  MapPin,
  Phone,
  Mail,
  User,
  UserPlus,
  Users,
  Vote,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/Navbar.jsx";
import { FONT } from "../components/FormKit.jsx";

import aboutHero from "../images/about-hero.jpg";
import a1 from "../images/a1.jpg";
import a2 from "../images/a2.jpg";
import a3 from "../images/a3.jpg";
import a4 from "../images/a4.jpg";
import a5 from "../images/a5.jpg";
import a6 from "../images/a6.jpg";
import mapImg from "../images/map.jpg";

/* ------------------------------------------------------------------ */
/*  Fill these in. Empty values are simply not shown.                  */
/*  Use the party's officially announced details only.                 */
/* ------------------------------------------------------------------ */

const DISTRICT_UNIT = {
  address: "",
  phone: "",
  email: "",
  secretary: "",
};

const IMG = {
  hero: aboutHero,
  thoothukudi: mapImg,
};

/* ------------------------------------------------------------------ */
/*  Content (English / Tamil)                                          */
/* ------------------------------------------------------------------ */

const A = {
  en: {
    kicker: "Tamilaga Vettri Kazhagam",
    title: "About the Party",
    intro:
      "Tamilaga Vetri Kazhagam is the political movement founded by our leader Vijay, giving shape to his deep-rooted aspiration for people-centric politics. Established with the unwavering vision of working for the welfare of all sections of Tamil Nadu, TVK strives to be a leading force dedicated to the collective progress and well-being of its people.",
    glanceTitle: "At a glance",
    founded: "Founded",
    founder: "Founder & President",
    hq: "Headquarters",
    flag: "Party flag",
    founderVal: "Vijay",
    hqVal: "Panaiyur, Chennai",
    flagVal: "Red and yellow, with a vaagai flower",
    journeyTitle: "Our journey",
    journeySub: "Key moments since the party was launched.",
    tkTitle: "TVK in Thoothukudi",
    tkIntro:
      "This website is for TVK's work in Thoothukudi, the port city in Tamil Nadu's south. Our focus here is the everyday needs of people: civic problems in their wards, jobs, and bringing people together.",
    tkConst: "Thoothukudi district has six assembly constituencies:",
    tkWork: "How we work here",
    officeTitle: "District office",
    address: "Address",
    phone: "Phone",
    email: "Email",
    secretary: "District Secretary",
    workIssues: "Report civic problems from your ward, such as water, roads and street lights. Each complaint reaches our team directly.",
    workJobs: "See who recently found work, browse open jobs and apply.",
    workEvents: "Meetings, camps and programmes in and around Thoothukudi.",
    workJoin: "Become a member and work with us in your area.",
    moreTitle: "Know more",
    moreSub: "Read about the party's ideas and plans.",
    ideologyDesc: "The principles behind the party.",
    actionDesc: "How the party puts its ideas into work.",
    guaranteesDesc: "What the party promised the people.",
    ctaTitle: "Be part of the movement in Thoothukudi",
    ctaText: "Join us and work for your area.",
  },
  ta: {
    kicker: "தமிழக வெற்றிக் கழகம்",
    title: "கட்சி பற்றி",
    intro:
      "தமிழக வெற்றிக் கழகம், நமது தலைவர் விஜய் அவர்களால் தோற்றுவிக்கப்பட்ட அரசியல் இயக்கம்; மக்களை மையமாகக் கொண்ட அரசியல் குறித்த அவரது ஆழமான விருப்பத்திற்கு இது வடிவம் தருகிறது. தமிழ்நாட்டின் அனைத்துப் பிரிவு மக்களின் நலனுக்காக உழைக்க வேண்டும் என்ற உறுதியான நோக்கத்துடன் நிறுவப்பட்ட TVK, மக்களின் கூட்டு முன்னேற்றத்திற்கும் நல்வாழ்விற்கும் அர்ப்பணிக்கப்பட்ட முன்னணி சக்தியாகத் திகழ முயல்கிறது.",
    glanceTitle: "ஒரு பார்வையில்",
    founded: "தொடக்கம்",
    founder: "நிறுவனர் & தலைவர்",
    hq: "தலைமையகம்",
    flag: "கட்சிக் கொடி",
    founderVal: "விஜய்",
    hqVal: "பனையூர், சென்னை",
    flagVal: "சிவப்பு–மஞ்சள் நிறம், வாகை மலர்",
    journeyTitle: "எங்கள் பயணம்",
    journeySub: "கட்சி தொடங்கியதிலிருந்து முக்கிய தருணங்கள்.",
    tkTitle: "தூத்துக்குடியில் TVK",
    tkIntro:
      "தமிழ்நாட்டின் தெற்கிலுள்ள துறைமுக நகரமான தூத்துக்குடியில் TVK-வின் பணிகளுக்கான இணையதளம் இது. மக்களின் அன்றாடத் தேவைகளான வார்டு பிரச்சினைகள், வேலைவாய்ப்பு, மக்களை ஒன்றிணைத்தல் ஆகியவற்றில் இங்கு கவனம் செலுத்துகிறோம்.",
    tkConst: "தூத்துக்குடி மாவட்டத்தில் ஆறு சட்டமன்றத் தொகுதிகள் உள்ளன:",
    tkWork: "இங்கு நாங்கள் செயல்படும் விதம்",
    officeTitle: "மாவட்ட அலுவலகம்",
    address: "முகவரி",
    phone: "தொலைபேசி",
    email: "மின்னஞ்சல்",
    secretary: "மாவட்டச் செயலாளர்",
    workIssues: "உங்கள் வார்டில் உள்ள குடிநீர், சாலை, தெருவிளக்கு போன்ற பிரச்சினைகளைத் தெரிவியுங்கள். ஒவ்வொரு புகாரும் நேரடியாக எங்கள் குழுவைச் சென்றடையும்.",
    workJobs: "சமீபத்தில் வேலை பெற்றவர்களைப் பார்த்து, காலிப்பணியிடங்களைத் தேடி விண்ணப்பியுங்கள்.",
    workEvents: "தூத்துக்குடி மற்றும் சுற்றுவட்டாரத்தில் நடைபெறும் கூட்டங்கள், முகாம்கள், நிகழ்ச்சிகள்.",
    workJoin: "உறுப்பினராகி, உங்கள் பகுதியில் எங்களுடன் இணைந்து பணியாற்றுங்கள்.",
    moreTitle: "மேலும் அறிக",
    moreSub: "கட்சியின் கருத்துகளையும் திட்டங்களையும் படியுங்கள்.",
    ideologyDesc: "கட்சியின் கொள்கை அடித்தளம்.",
    actionDesc: "கருத்துகளைச் செயலாக்கும் விதம்.",
    guaranteesDesc: "மக்களுக்குக் கட்சி அளித்த வாக்குறுதிகள்.",
    ctaTitle: "தூத்துக்குடியில் இயக்கத்தின் பகுதியாகுங்கள்",
    ctaText: "எங்களுடன் இணைந்து உங்கள் பகுதிக்காக உழையுங்கள்.",
  },
};

/* Dates are ISO so they format in English or Tamil automatically. */
const TIMELINE = [
  {
    date: "2024-02-02",
    icon: Megaphone,
    image: a1,
    en: {
      title: "Party launched",
      text: "Vijay announced the launch of Tamilaga Vettri Kazhagam and said the party would contest the 2026 Tamil Nadu Assembly election.",
    },
    ta: {
      title: "கட்சி தொடக்கம்",
      text: "விஜய் தமிழக வெற்றிக் கழகத்தைத் தொடங்குவதாக அறிவித்தார்; 2026 தமிழ்நாடு சட்டமன்றத் தேர்தலில் கட்சி போட்டியிடும் என்றும் தெரிவித்தார்.",
    },
  },
  {
    date: "2024-08-22",
    icon: Flag,
    image: a2,
    en: {
      title: "Flag and flag song unveiled",
      text: "The party flag and flag song were launched at the headquarters in Panaiyur, Chennai. The flag is red and yellow, with a vaagai flower at the centre and an elephant on either side.",
    },
    ta: {
      title: "கொடி மற்றும் கொடிப் பாடல் வெளியீடு",
      text: "கட்சிக் கொடியும் கொடிப் பாடலும் சென்னை பனையூரில் உள்ள தலைமை அலுவலகத்தில் வெளியிடப்பட்டன. சிவப்பு–மஞ்சள் நிறக் கொடியின் நடுவில் வாகை மலரும், இருபுறமும் யானைகளும் உள்ளன.",
    },
  },
  {
    date: "2024-10-27",
    icon: Users,
    image: a3,
    en: {
      title: "First state conference, Vikravandi",
      text: "TVK held its first state conference at Vikravandi in Villupuram district, where the party set out its ideology.",
    },
    ta: {
      title: "முதல் மாநில மாநாடு, விக்கிரவாண்டி",
      text: "விழுப்புரம் மாவட்டம் விக்கிரவாண்டியில் TVK தனது முதல் மாநில மாநாட்டை நடத்தியது; அங்கு கட்சியின் கொள்கைகள் அறிவிக்கப்பட்டன.",
    },
  },
  {
    date: "2025-08-21",
    icon: Users,
    image: a4,
    en: {
      title: "Second state conference, Madurai",
      text: "The party held its second state conference in Madurai.",
    },
    ta: {
      title: "இரண்டாவது மாநில மாநாடு, மதுரை",
      text: "கட்சி தனது இரண்டாவது மாநில மாநாட்டை மதுரையில் நடத்தியது.",
    },
  },
  {
    date: "2026-05-04",
    icon: Vote,
    image: a5,
    en: {
      title: "2026 Assembly election",
      text: "In its first election, TVK won 108 of the 234 seats and became the single-largest party in the Assembly.",
    },
    ta: {
      title: "2026 சட்டமன்றத் தேர்தல்",
      text: "தனது முதல் தேர்தலிலேயே TVK 234 இடங்களில் 108 இடங்களை வென்று, சட்டமன்றத்தில் தனிப்பெரும் கட்சியானது.",
    },
  },
  {
    date: "2026-05-10",
    icon: Landmark,
    image: a6,
    en: {
      title: "Vijay sworn in as Chief Minister",
      text: "Vijay took the oath as Chief Minister of Tamil Nadu, heading a coalition government with the Congress as a partner.",
    },
    ta: {
      title: "முதலமைச்சராக விஜய் பதவியேற்பு",
      text: "விஜய் தமிழ்நாட்டின் முதலமைச்சராகப் பதவியேற்றார்; காங்கிரஸ் பங்காளியாக உள்ள கூட்டணி அரசுக்கு அவர் தலைமை தாங்குகிறார்.",
    },
  },
];

const CONSTITUENCIES = [
  { en: "Thoothukudi", ta: "தூத்துக்குடி" },
  { en: "Tiruchendur", ta: "திருச்செந்தூர்" },
  { en: "Srivaikuntam", ta: "ஸ்ரீவைகுண்டம்" },
  { en: "Ottapidaram", ta: "ஓட்டப்பிடாரம்" },
  { en: "Vilathikulam", ta: "விளாத்திகுளம்" },
  { en: "Kovilpatti", ta: "கோவில்பட்டி" },
];

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
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

function Glance({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-[#6d1209] p-5 text-white">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5c83b] text-[#5e0f08]">
        <Icon size={24} aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-[#f5c83b]">{label}</p>
        <p className="mt-1 text-lg font-bold leading-snug">{value}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutParty() {
  const { lang, t } = useLanguage();
  const a = A[lang];
  const locale = lang === "ta" ? "ta-IN" : "en-IN";
  const fmt = (iso) =>
    new Date(iso).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });

  const officeRows = [
    { icon: MapPin, label: a.address, value: DISTRICT_UNIT.address },
    { icon: User, label: a.secretary, value: DISTRICT_UNIT.secretary },
    { icon: Phone, label: a.phone, value: DISTRICT_UNIT.phone },
    { icon: Mail, label: a.email, value: DISTRICT_UNIT.email },
  ].filter((r) => r.value);

  const workCards = [
    { to: "/raise-issues", icon: Megaphone, title: t.issues, text: a.workIssues },
    { to: "/employment", icon: Briefcase, title: t.employment, text: a.workJobs },
    { to: "/events", icon: CalendarDays, title: t.events, text: a.workEvents },
    { to: "/join-us", icon: UserPlus, title: t.join, text: a.workJoin },
  ];

  const moreCards = [
    { to: "/party/ideology", title: t.ideology, text: a.ideologyDesc },
    { to: "/party/action", title: t.action, text: a.actionDesc },
    { to: "/election/guarantees", title: t.guarantees, text: a.guaranteesDesc },
  ];

  return (
    <main style={FONT} className="pb-24 pt-32 text-[#2b0a07] sm:pt-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------------- Hero: intro text + image ---------------- */}
        <section
          aria-labelledby="about-title"
          className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2"
        >
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wide text-[#8c1a10]/80">
              {a.kicker}
            </p>
            <h1
              id="about-title"
              className="text-4xl font-extrabold leading-tight text-[#8c1a10] sm:text-5xl"
            >
              {a.title}
            </h1>
            <p className="text-lg leading-relaxed text-[#5e0f08]">{a.intro}</p>
          </div>
          <ImagePanel src={IMG.hero} Icon={Flag} className="min-h-[240px] bg-[#6d1209]" iconSize={96} />
        </section>

        {/* ---------------- At a glance ---------------- */}
        <section aria-labelledby="glance-title" className="mt-12">
          <h2 id="glance-title" className="text-3xl font-extrabold text-white sm:text-4xl">
            {a.glanceTitle}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Glance icon={CalendarDays} label={a.founded} value={fmt("2024-02-02")} />
            <Glance icon={User} label={a.founder} value={a.founderVal} />
            <Glance icon={Building2} label={a.hq} value={a.hqVal} />
            <Glance icon={Flag} label={a.flag} value={a.flagVal} />
          </div>
        </section>

        {/* ---------------- Journey (text + image rows) ---------------- */}
        <section aria-labelledby="journey-title" className="mt-16">
          <h2 id="journey-title" className="text-3xl font-extrabold text-white sm:text-4xl">
            {a.journeyTitle}
          </h2>
          <p className="mt-1 text-lg text-white/90">{a.journeySub}</p>

          <ol className="mt-8 space-y-6">
            {TIMELINE.map((item, i) => {
              const Icon = item.icon;
              const c = item[lang];
              const imageRight = i % 2 === 0;
              return (
                <li
                  key={item.date}
                  className="grid overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2"
                >
                  <div
                    className={`flex flex-col justify-center gap-3 p-6 sm:p-8 ${
                      imageRight ? "" : "md:order-2"
                    }`}
                  >
                    <p className="inline-flex w-fit items-center gap-2 rounded-full bg-[#fbeceb] px-3 py-1 text-sm font-bold text-[#8c1a10]">
                      <CalendarDays size={16} aria-hidden="true" />
                      <time dateTime={item.date}>{fmt(item.date)}</time>
                    </p>
                    <h3 className="text-2xl font-extrabold leading-snug text-[#8c1a10]">
                      {c.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-[#5e0f08]">{c.text}</p>
                  </div>
                  <ImagePanel
                    src={item.image}
                    Icon={Icon}
                    className={`min-h-[200px] ${imageRight ? "" : "md:order-1"}`}
                  />
                </li>
              );
            })}
          </ol>
        </section>

        {/* ---------------- TVK in Thoothukudi ---------------- */}
        <section aria-labelledby="tk-title" className="mt-16">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <ImagePanel src={IMG.thoothukudi} Icon={MapPin} className="h-52 sm:h-64" iconSize={88} />

            <div className="p-6 sm:p-10">
              <h2 id="tk-title" className="text-3xl font-extrabold text-[#8c1a10] sm:text-4xl">
                {a.tkTitle}
              </h2>
              <p className="mt-3 max-w-[70ch] text-lg leading-relaxed text-[#5e0f08]">{a.tkIntro}</p>

              <p className="mt-6 text-base font-semibold text-[#5e0f08]">{a.tkConst}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {CONSTITUENCIES.map((c) => (
                  <li
                    key={c.en}
                    className="rounded-full border-2 border-[#8c1a10]/25 px-4 py-1.5 text-base font-semibold text-[#8c1a10]"
                  >
                    {c[lang]}
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 text-2xl font-extrabold text-[#8c1a10]">{a.tkWork}</h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {workCards.map(({ to, icon: Icon, title, text }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="group flex h-full gap-4 rounded-2xl border-2 border-[#8c1a10]/15 p-5 transition-colors hover:border-[#8c1a10] hover:bg-[#fbeceb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8c1a10]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#8c1a10] text-[#f5c83b]">
                        <Icon size={24} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="flex items-center gap-2 text-xl font-bold text-[#8c1a10]">
                          {title}
                          <ArrowRight
                            size={18}
                            aria-hidden="true"
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </span>
                        <span className="mt-1 block text-base text-[#5e0f08]">{text}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {officeRows.length > 0 && (
                <div className="mt-10 rounded-2xl bg-[#fbeceb] p-6">
                  <h3 className="text-2xl font-extrabold text-[#8c1a10]">{a.officeTitle}</h3>
                  <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    {officeRows.map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-start gap-3">
                        <Icon size={20} className="mt-1 shrink-0 text-[#8c1a10]" aria-hidden="true" />
                        <div>
                          <dt className="text-sm font-semibold uppercase tracking-wide text-[#8c1a10]/80">
                            {label}
                          </dt>
                          <dd className="text-lg font-semibold text-[#5e0f08]">{value}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ---------------- Know more ---------------- */}
        <section aria-labelledby="more-title" className="mt-16">
          <h2 id="more-title" className="text-3xl font-extrabold text-white sm:text-4xl">
            {a.moreTitle}
          </h2>
          <p className="mt-1 text-lg text-white/90">{a.moreSub}</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {moreCards.map(({ to, title, text }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="group flex h-full flex-col gap-2 rounded-2xl bg-white p-6 shadow-lg transition-colors hover:bg-[#fbeceb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5c83b]"
                >
                  <span className="flex items-center justify-between gap-2 text-2xl font-extrabold text-[#8c1a10]">
                    {title}
                    <ArrowRight
                      size={22}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                  <span className="text-base text-[#5e0f08]">{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------- Join band ---------------- */}
        <section
          aria-labelledby="cta-title"
          className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#f5c83b] p-8 sm:flex-row sm:items-center sm:p-10"
        >
          <div>
            <h2 id="cta-title" className="text-3xl font-extrabold text-[#5e0f08]">
              {a.ctaTitle}
            </h2>
            <p className="mt-1 text-lg font-semibold text-[#5e0f08]">{a.ctaText}</p>
          </div>
          <Link
            to="/join-us"
            className="rounded-xl bg-[#8c1a10] px-8 py-4 text-xl font-bold text-white transition-colors hover:bg-[#6d1209] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8c1a10]"
          >
            {t.join}
          </Link>
        </section>
      </div>
    </main>
  );
}