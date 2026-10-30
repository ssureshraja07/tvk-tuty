import { useEffect, useRef, useState } from "react";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Clock,
  GraduationCap,
  MapPin,
  Send,
  User,
} from "lucide-react";
import { useLanguage } from "../components/Navbar.jsx";
import {
  Field,
  FONT,
  SmartImage,
  aria,
  focusRing,
  inputCls,
  makeRef,
  sendForm,
} from "../components/FormKit.jsx";
import {
  JOBS,
  JOBS_ARE_SAMPLES,
  PLACED,
  PLACED_ARE_SAMPLES,
} from "../data/employment.js";

import employee from "../images/employement.jpg";

const HERO_IMAGE = employee;
const INITIAL_VISIBLE = 9; // 3 x 3

/* ------------------------------------------------------------------ */
/*  Text                                                               */
/* ------------------------------------------------------------------ */

const P = {
  en: {
    heroKicker: "Thoothukudi jobs",
    heroTitle: "Find work in and around Thoothukudi",
    heroText:
      "See who joined work recently, check the open jobs and apply in a minute.",
    heroCta: "Apply for a job",
    sample: "Sample data",
    placedTitle: "Recently placed",
    placedSub: "People from Thoothukudi who recently joined work.",
    joined: "Joined {date}",
    viewAll: "View all ({n})",
    showLess: "Show less",
    allTitle: "More placements",
    jobsTitle: "Available jobs",
    jobsSub: "Open positions in and around Thoothukudi.",
    applyBtn: "Apply",
    lastDate: "Last date: {date}",
    full: "Full-time",
    part: "Part-time",
    formTitle: "Apply for a job",
    formSub:
      "Fill in your details and pick the job. Fields marked * are required.",
    fName: "Full name",
    fPhone: "Mobile number",
    fEmail: "Email (optional)",
    fArea: "Your area in Thoothukudi",
    fQual: "Highest qualification",
    fExp: "Experience",
    fJob: "Job you are applying for",
    fResume: "Resume link (optional)",
    fNote: "Anything else we should know (optional)",
    phoneHint: "We may call you on this number about the job.",
    resumeHint: "Paste a Google Drive or other link to your resume.",
    areaPh: "e.g. Millerpuram",
    notePh: "Skills, preferred shift, languages known…",
    select: "Select",
    anyJob: "Any suitable job",
    consent: "I agree that my details may be used to contact me about jobs.",
    submit: "Submit application",
    sending: "Sending…",
    eName: "Please enter your name",
    ePhone: "Enter a valid 10-digit mobile number",
    eEmail: "Enter a valid email or leave it empty",
    eArea: "Please enter your area",
    eQual: "Please select your qualification",
    eExp: "Please select your experience",
    eJob: "Please select a job",
    eResume: "Enter a link starting with http:// or https://",
    eConsent: "Please agree to continue",
    failMsg:
      "We couldn't send your application. Check your internet connection and try again.",
    okTitle: "Application submitted",
    okText:
      "Your application has reached our team. Please keep this reference number:",
    another: "Apply for another job",
  },
  ta: {
    heroKicker: "தூத்துக்குடி வேலைவாய்ப்பு",
    heroTitle: "தூத்துக்குடி மற்றும் சுற்றுவட்டாரத்தில் வேலை தேடுங்கள்",
    heroText:
      "சமீபத்தில் வேலையில் சேர்ந்தவர்களைப் பாருங்கள், காலிப்பணியிடங்களைப் பார்த்து, ஒரு நிமிடத்தில் விண்ணப்பியுங்கள்.",
    heroCta: "வேலைக்கு விண்ணப்பி",
    sample: "மாதிரி தரவு",
    placedTitle: "சமீபத்தில் வேலை பெற்றவர்கள்",
    placedSub: "சமீபத்தில் வேலையில் சேர்ந்த தூத்துக்குடி மக்கள்.",
    joined: "{date} அன்று சேர்ந்தார்",
    viewAll: "அனைத்தையும் காண் ({n})",
    showLess: "குறைவாகக் காட்டு",
    allTitle: "மேலும் வேலை பெற்றவர்கள்",
    jobsTitle: "கிடைக்கும் வேலைகள்",
    jobsSub: "தூத்துக்குடி மற்றும் சுற்றுவட்டாரத்தில் உள்ள காலிப்பணியிடங்கள்.",
    applyBtn: "விண்ணப்பி",
    lastDate: "கடைசி நாள்: {date}",
    full: "முழு நேரம்",
    part: "பகுதி நேரம்",
    formTitle: "வேலைக்கு விண்ணப்பிக்கவும்",
    formSub:
      "உங்கள் விவரங்களை நிரப்பி வேலையைத் தேர்ந்தெடுங்கள். * குறியிட்டவை அவசியம்.",
    fName: "முழுப் பெயர்",
    fPhone: "கைப்பேசி எண்",
    fEmail: "மின்னஞ்சல் (விருப்பம்)",
    fArea: "தூத்துக்குடியில் உங்கள் பகுதி",
    fQual: "உயர்ந்த கல்வித் தகுதி",
    fExp: "அனுபவம்",
    fJob: "விண்ணப்பிக்கும் வேலை",
    fResume: "சுயவிவர (Resume) இணைப்பு (விருப்பம்)",
    fNote: "வேறு தகவல் (விருப்பம்)",
    phoneHint: "வேலை தொடர்பாக இந்த எண்ணில் தொடர்புகொள்ளலாம்.",
    resumeHint: "உங்கள் Resume-இன் Google Drive அல்லது வேறு இணைப்பை ஒட்டவும்.",
    areaPh: "எ.கா. மில்லர்புரம்",
    notePh: "திறமைகள், விருப்பமான ஷிப்ட், தெரிந்த மொழிகள்…",
    select: "தேர்ந்தெடுக்கவும்",
    anyJob: "பொருத்தமான எந்த வேலையும்",
    consent:
      "வேலை தொடர்பாக என்னைத் தொடர்புகொள்ள என் விவரங்களைப் பயன்படுத்த ஒப்புக்கொள்கிறேன்.",
    submit: "விண்ணப்பத்தைச் சமர்ப்பி",
    sending: "அனுப்புகிறது…",
    eName: "உங்கள் பெயரை உள்ளிடவும்",
    ePhone: "சரியான 10 இலக்க கைப்பேசி எண்ணை உள்ளிடவும்",
    eEmail: "சரியான மின்னஞ்சலை உள்ளிடவும் அல்லது காலியாக விடவும்",
    eArea: "உங்கள் பகுதியை உள்ளிடவும்",
    eQual: "கல்வித் தகுதியைத் தேர்ந்தெடுக்கவும்",
    eExp: "அனுபவத்தைத் தேர்ந்தெடுக்கவும்",
    eJob: "வேலையைத் தேர்ந்தெடுக்கவும்",
    eResume: "http:// அல்லது https:// உடன் தொடங்கும் இணைப்பை உள்ளிடவும்",
    eConsent: "தொடர ஒப்புதல் அவசியம்",
    failMsg:
      "விண்ணப்பத்தை அனுப்ப முடியவில்லை. இணைய இணைப்பைச் சரிபார்த்து மீண்டும் முயலவும்.",
    okTitle: "விண்ணப்பம் சமர்ப்பிக்கப்பட்டது",
    okText:
      "உங்கள் விண்ணப்பம் எங்கள் குழுவைச் சென்றடைந்தது. இந்தக் குறிப்பு எண்ணை வைத்துக்கொள்ளுங்கள்:",
    another: "மற்றொரு வேலைக்கு விண்ணப்பி",
  },
};

const QUALS = [
  { v: "10th", en: "10th", ta: "10ஆம் வகுப்பு" },
  { v: "12th", en: "12th", ta: "12ஆம் வகுப்பு" },
  { v: "ITI", en: "ITI", ta: "ஐ.டி.ஐ" },
  { v: "Diploma", en: "Diploma", ta: "டிப்ளமோ" },
  { v: "Degree", en: "Degree", ta: "பட்டப்படிப்பு" },
  { v: "Post-graduate", en: "Post-graduate", ta: "முதுகலை" },
];

const EXPS = [
  { v: "Fresher", en: "Fresher", ta: "புதியவர்" },
  { v: "Under 1 year", en: "Under 1 year", ta: "1 ஆண்டுக்கும் குறைவு" },
  { v: "1-3 years", en: "1–3 years", ta: "1–3 ஆண்டுகள்" },
  { v: "3+ years", en: "3+ years", ta: "3 ஆண்டுகளுக்கு மேல்" },
];

/* ------------------------------------------------------------------ */
/*  Form helpers                                                       */
/* ------------------------------------------------------------------ */

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  area: "",
  qualification: "",
  experience: "",
  job: "",
  resume: "",
  note: "",
  consent: false,
};

const ORDER = [
  "name",
  "phone",
  "email",
  "area",
  "qualification",
  "experience",
  "job",
  "resume",
  "consent",
];

function validate(v, p) {
  const e = {};
  if (v.name.trim().length < 2) e.name = p.eName;
  if (!/^[6-9]\d{9}$/.test(v.phone)) e.phone = p.ePhone;
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = p.eEmail;
  if (v.area.trim().length < 2) e.area = p.eArea;
  if (!v.qualification) e.qualification = p.eQual;
  if (!v.experience) e.experience = p.eExp;
  if (!v.job) e.job = p.eJob;
  if (v.resume.trim() && !/^https?:\/\/\S+$/i.test(v.resume.trim())) e.resume = p.eResume;
  if (!v.consent) e.consent = p.eConsent;
  return e;
}

/* ------------------------------------------------------------------ */
/*  Small display pieces                                               */
/* ------------------------------------------------------------------ */

const PersonFallback = ({ size = 56 }) => (
  <div className="flex h-full w-full items-center justify-center bg-[#fbeceb] text-[#8c1a10]/70">
    <User size={size} strokeWidth={1.5} aria-hidden="true" />
  </div>
);

function PlacedCard({ person, joinedText }) {
  return (
    <li className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="aspect-[4/3] bg-[#fbeceb]">
        <SmartImage
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover"
          fallback={<PersonFallback size={64} />}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-xl font-bold text-[#8c1a10]">{person.name}</h3>
        <p className="flex items-start gap-2 text-base font-semibold text-[#5e0f08]">
          <Briefcase size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>
            {person.role}
            <span className="block font-normal text-[#5e0f08]/80">{person.company}</span>
          </span>
        </p>
        <p className="mt-auto flex items-center gap-2 border-t border-[#8c1a10]/15 pt-3 text-sm font-semibold text-[#1a6b37]">
          <CalendarDays size={16} aria-hidden="true" />
          {joinedText}
        </p>
      </div>
    </li>
  );
}

function GalleryTile({ person, joinedText }) {
  return (
    <li className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#fbeceb] shadow-lg">
      <SmartImage
        src={person.image}
        alt={person.name}
        className="absolute inset-0 h-full w-full object-cover"
        fallback={<PersonFallback size={72} />}
      />
      {/* Dark strip behind the caption so white text stays readable on any photo */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent p-4 pt-12 text-white">
        <p className="text-lg font-bold leading-tight">{person.name}</p>
        <p className="text-sm font-semibold">{person.role}</p>
        <p className="text-sm text-white/85">{person.company}</p>
        <p className="mt-1 text-xs font-semibold text-[#f5c83b]">{joinedText}</p>
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Employment() {
  const { lang } = useLanguage();
  const p = P[lang];
  const locale = lang === "ta" ? "ta-IN" : "en-IN";

  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorDetail, setErrorDetail] = useState("");
  const [ref, setRef] = useState("");
  const [honey, setHoney] = useState("");
  const [showAll, setShowAll] = useState(false);
  const successRef = useRef(null);

  const fmtMonth = (iso) =>
    new Date(iso).toLocaleDateString(locale, { month: "short", year: "numeric" });
  const fmtDay = (iso) =>
    new Date(iso).toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" });
  const joinedText = (iso) => p.joined.replace("{date}", fmtMonth(iso));

  const firstNine = PLACED.slice(0, INITIAL_VISIBLE);
  const rest = PLACED.slice(INITIAL_VISIBLE);

  const set = (key, val) => {
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  useEffect(() => {
    if (status === "sent") {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      successRef.current?.focus();
    }
  }, [status]);

  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  function applyFor(jobId) {
    set("job", String(jobId));
    goTo("apply-form");
    setTimeout(() => document.getElementById("f-name")?.focus({ preventScroll: true }), 500);
  }

  function toggleAll() {
    if (showAll) {
      setShowAll(false);
      goTo("placed-title");
    } else {
      setShowAll(true);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    const errs = validate(values, p);
    setErrors(errs);
    const firstKey = ORDER.find((k) => errs[k]);
    if (firstKey) {
      document.getElementById(`f-${firstKey}`)?.focus();
      return;
    }

    const newRef = makeRef("JOB");

    // Hidden field filled = bot. Pretend success, send nothing.
    if (honey) {
      setRef(newRef);
      setStatus("sent");
      return;
    }

    const job = JOBS.find((j) => String(j.id) === values.job);
    const jobLabel = job ? `${job.title} - ${job.company}` : "Any suitable job";

    setStatus("sending");
    setErrorDetail("");
    try {
      await sendForm({
        _subject: `New job application ${newRef} - ${job ? job.title : "Any suitable job"}`,
        _template: "table",
        _captcha: "false",
        "Reference No": newRef,
        "Applying For": jobLabel,
        Name: values.name.trim(),
        "Mobile Number": values.phone,
        Email: values.email.trim() || "-",
        "Area (Thoothukudi)": values.area.trim(),
        Qualification: values.qualification,
        Experience: values.experience,
        "Resume Link": values.resume.trim() || "-",
        Note: values.note.trim() || "-",
        "Submitted At": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      });
      setRef(newRef);
      setStatus("sent");
    } catch (err) {
      console.error("Application send failed:", err);
      setErrorDetail(err?.message || "");
      setStatus("error");
    }
  }

  function reset() {
    setValues(EMPTY);
    setErrors({});
    setRef("");
    setStatus("idle");
    goTo("apply-form");
  }

  const typeLabel = (t) => (t === "part" ? p.part : p.full);

  return (
    <main style={FONT} className="pb-24 pt-32 text-[#2b0a07] sm:pt-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------------- Hero card ---------------- */}
        <section
          aria-labelledby="jobs-hero"
          className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:min-h-[260px] md:grid-cols-2"
        >
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wide text-[#8c1a10]/80">
              {p.heroKicker}
            </p>
            <h1
              id="jobs-hero"
              className="text-3xl font-extrabold leading-tight text-[#8c1a10] sm:text-5xl"
            >
              {p.heroTitle}
            </h1>
            <p className="max-w-[52ch] text-lg text-[#5e0f08]">{p.heroText}</p>
            <div>
              <button
                type="button"
                onClick={() => goTo("jobs")}
                className="inline-flex items-center gap-2 rounded-xl bg-[#8c1a10] px-6 py-3 text-lg font-bold text-white transition-colors hover:bg-[#6d1209] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8c1a10]"
              >
                <Briefcase size={22} aria-hidden="true" />
                {p.heroCta}
              </button>
            </div>
          </div>

          <div className="relative min-h-[200px] bg-[#6d1209]">
            <SmartImage
              src={HERO_IMAGE}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              fallback={
                <div className="flex h-full min-h-[200px] items-center justify-center text-[#f5c83b]">
                  <Briefcase size={96} strokeWidth={1.5} aria-hidden="true" />
                </div>
              }
            />
          </div>
        </section>

        {/* ---------------- Recently placed (3 x 3) ---------------- */}
        <section aria-labelledby="placed-title" className="mt-12 scroll-mt-28">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="placed-title" className="text-3xl font-extrabold text-white sm:text-4xl">
                {p.placedTitle}
              </h2>
              <p className="mt-1 text-lg text-white/90">{p.placedSub}</p>
            </div>
            {PLACED_ARE_SAMPLES && (
              <span className="rounded-full bg-[#f5c83b] px-3 py-1 text-sm font-bold text-[#5e0f08]">
                {p.sample}
              </span>
            )}
          </div>

          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {firstNine.map((person) => (
              <PlacedCard key={person.id} person={person} joinedText={joinedText(person.joinedOn)} />
            ))}
          </ul>

          {rest.length > 0 && (
            <>
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={toggleAll}
                  aria-expanded={showAll}
                  aria-controls="placed-all"
                  className={`inline-flex items-center gap-2 rounded-xl bg-[#f5c83b] px-7 py-3 text-lg font-bold text-[#5e0f08] transition-colors hover:bg-[#ffd95c] ${focusRing}`}
                >
                  {showAll ? p.showLess : p.viewAll.replace("{n}", PLACED.length)}
                  {showAll ? (
                    <ChevronUp size={22} aria-hidden="true" />
                  ) : (
                    <ChevronDown size={22} aria-hidden="true" />
                  )}
                </button>
              </div>

              <div id="placed-all" hidden={!showAll} className="mt-10">
                <h3 className="text-2xl font-extrabold text-white">{p.allTitle}</h3>
                <ul className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {rest.map((person) => (
                    <GalleryTile
                      key={person.id}
                      person={person}
                      joinedText={joinedText(person.joinedOn)}
                    />
                  ))}
                </ul>
              </div>
            </>
          )}
        </section>

        {/* ---------------- Available jobs ---------------- */}
        <section id="jobs" aria-labelledby="jobs-title" className="mt-16 scroll-mt-28">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="jobs-title" className="text-3xl font-extrabold text-white sm:text-4xl">
                {p.jobsTitle}
              </h2>
              <p className="mt-1 text-lg text-white/90">{p.jobsSub}</p>
            </div>
            {JOBS_ARE_SAMPLES && (
              <span className="rounded-full bg-[#f5c83b] px-3 py-1 text-sm font-bold text-[#5e0f08]">
                {p.sample}
              </span>
            )}
          </div>

          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {JOBS.map((job) => (
              <li key={job.id} className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-lg">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold leading-snug text-[#8c1a10]">{job.title}</h3>
                  <span className="shrink-0 rounded-full bg-[#fbeceb] px-3 py-1 text-sm font-bold text-[#8c1a10]">
                    {typeLabel(job.type)}
                  </span>
                </div>

                <ul className="space-y-2 text-base text-[#5e0f08]">
                  <li className="flex items-center gap-2">
                    <Building2 size={18} className="shrink-0" aria-hidden="true" />
                    {job.company}
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={18} className="shrink-0" aria-hidden="true" />
                    {job.location}
                  </li>
                  <li className="flex items-start gap-2">
                    <GraduationCap size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                    {job.qualification}
                  </li>
                  <li className="flex items-center gap-2 font-semibold">
                    <Clock size={18} className="shrink-0" aria-hidden="true" />
                    {p.lastDate.replace("{date}", fmtDay(job.lastDate))}
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={() => applyFor(job.id)}
                  className="mt-auto rounded-xl bg-[#8c1a10] px-5 py-3 text-lg font-bold text-white transition-colors hover:bg-[#6d1209] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8c1a10]"
                >
                  {p.applyBtn}
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------- Apply form ---------------- */}
        <section
          id="apply-form"
          aria-labelledby="apply-title"
          className="mt-16 scroll-mt-28 rounded-3xl bg-white p-6 shadow-xl sm:p-10"
        >
          {status === "sent" ? (
            <div
              ref={successRef}
              tabIndex={-1}
              className="mx-auto max-w-xl py-8 text-center focus:outline-none"
            >
              <BadgeCheck size={64} className="mx-auto text-[#1a6b37]" aria-hidden="true" />
              <h2 className="mt-4 text-3xl font-extrabold text-[#8c1a10]">{p.okTitle}</h2>
              <p className="mt-3 text-lg text-[#5e0f08]">{p.okText}</p>
              <p className="mx-auto mt-4 w-fit rounded-xl bg-[#fbeceb] px-6 py-3 text-2xl font-extrabold tracking-wide text-[#8c1a10]">
                {ref}
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-8 rounded-xl bg-[#8c1a10] px-6 py-3 text-lg font-bold text-white transition-colors hover:bg-[#6d1209] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8c1a10]"
              >
                {p.another}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h2 id="apply-title" className="text-3xl font-extrabold text-[#8c1a10] sm:text-4xl">
                {p.formTitle}
              </h2>
              <p className="mt-2 text-lg text-[#5e0f08]">{p.formSub}</p>

              {/* Honeypot - hidden from people, bots fill it */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                />
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field id="f-name" label={p.fName} error={errors.name}>
                  <input
                    {...aria("f-name", errors.name)}
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => set("name", e.target.value)}
                    className={`${inputCls(errors.name)} h-12`}
                  />
                </Field>

                <Field id="f-phone" label={p.fPhone} error={errors.phone} hint={p.phoneHint}>
                  <input
                    {...aria("f-phone", errors.phone, true)}
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    maxLength={10}
                    value={values.phone}
                    onChange={(e) => set("phone", e.target.value.replace(/\D/g, ""))}
                    className={`${inputCls(errors.phone)} h-12`}
                  />
                </Field>

                <Field id="f-email" label={p.fEmail} required={false} error={errors.email}>
                  <input
                    {...aria("f-email", errors.email)}
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={`${inputCls(errors.email)} h-12`}
                  />
                </Field>

                <Field id="f-area" label={p.fArea} error={errors.area}>
                  <input
                    {...aria("f-area", errors.area)}
                    type="text"
                    placeholder={p.areaPh}
                    value={values.area}
                    onChange={(e) => set("area", e.target.value)}
                    className={`${inputCls(errors.area)} h-12`}
                  />
                </Field>

                <Field id="f-qualification" label={p.fQual} error={errors.qualification}>
                  <select
                    {...aria("f-qualification", errors.qualification)}
                    value={values.qualification}
                    onChange={(e) => set("qualification", e.target.value)}
                    className={`${inputCls(errors.qualification)} h-12`}
                  >
                    <option value="">{p.select}</option>
                    {QUALS.map((q) => (
                      <option key={q.v} value={q.v}>
                        {q[lang]}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="f-experience" label={p.fExp} error={errors.experience}>
                  <select
                    {...aria("f-experience", errors.experience)}
                    value={values.experience}
                    onChange={(e) => set("experience", e.target.value)}
                    className={`${inputCls(errors.experience)} h-12`}
                  >
                    <option value="">{p.select}</option>
                    {EXPS.map((x) => (
                      <option key={x.v} value={x.v}>
                        {x[lang]}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="sm:col-span-2">
                  <Field id="f-job" label={p.fJob} error={errors.job}>
                    <select
                      {...aria("f-job", errors.job)}
                      value={values.job}
                      onChange={(e) => set("job", e.target.value)}
                      className={`${inputCls(errors.job)} h-12`}
                    >
                      <option value="">{p.select}</option>
                      {JOBS.map((j) => (
                        <option key={j.id} value={j.id}>
                          {j.title} – {j.company}
                        </option>
                      ))}
                      <option value="any">{p.anyJob}</option>
                    </select>
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <Field
                    id="f-resume"
                    label={p.fResume}
                    required={false}
                    error={errors.resume}
                    hint={p.resumeHint}
                  >
                    <input
                      {...aria("f-resume", errors.resume, true)}
                      type="url"
                      inputMode="url"
                      placeholder="https://"
                      value={values.resume}
                      onChange={(e) => set("resume", e.target.value)}
                      className={`${inputCls(errors.resume)} h-12`}
                    />
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <Field id="f-note" label={p.fNote} required={false}>
                    <textarea
                      id="f-note"
                      rows={3}
                      maxLength={500}
                      placeholder={p.notePh}
                      value={values.note}
                      onChange={(e) => set("note", e.target.value)}
                      className={`${inputCls(false)} py-3`}
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-6">
                <label className="flex cursor-pointer items-start gap-3 text-base text-[#5e0f08]">
                  <input
                    id="f-consent"
                    type="checkbox"
                    checked={values.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    aria-invalid={errors.consent ? true : undefined}
                    aria-describedby={errors.consent ? "f-consent-err" : undefined}
                    className="mt-1 h-5 w-5 shrink-0 accent-[#8c1a10]"
                  />
                  <span>{p.consent}</span>
                </label>
                {errors.consent && (
                  <p id="f-consent-err" role="alert" className="mt-1.5 text-sm font-semibold text-[#b42318]">
                    {errors.consent}
                  </p>
                )}
              </div>

              {status === "error" && (
                <p
                  role="alert"
                  className="mt-6 rounded-xl border-2 border-[#b42318] bg-[#fef3f2] px-4 py-3 text-base font-semibold text-[#b42318]"
                >
                  {p.failMsg}
                  {errorDetail && (
                    <span className="mt-1 block text-sm font-normal">({errorDetail})</span>
                  )}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#8c1a10] px-8 py-4 text-xl font-bold text-white transition-colors hover:bg-[#6d1209] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto ${focusRing}`}
              >
                {status === "sending" ? (
                  <>
                    <span
                      className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white"
                      aria-hidden="true"
                    />
                    {p.sending}
                  </>
                ) : (
                  <>
                    <Send size={22} aria-hidden="true" />
                    {p.submit}
                  </>
                )}
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}