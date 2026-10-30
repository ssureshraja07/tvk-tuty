import { useEffect, useRef, useState } from "react";
import { BadgeCheck, CalendarDays, MapPin, Megaphone, Send } from "lucide-react";
import { useLanguage } from "../components/Navbar.jsx";
import {
  CATEGORIES,
  PINCODES,
  RESOLVED,
  RESOLVED_ARE_SAMPLES,
  WARDS,
  getWard,
} from "../data/thoothukudi.js";

import issue from "../images/issue.jpg";

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

// Complaints are emailed here through FormSubmit (no backend needed).
// FIRST TIME ONLY: FormSubmit sends an activation mail to this address.
// Open it (check Spam too) and click "Activate".
const COMPLAINT_EMAIL = "sureshraja6969@gmail.com";

const HERO_IMAGE = issue;

const FONT = { fontFamily: "'Anek Tamil', system-ui, sans-serif" };

/* ------------------------------------------------------------------ */
/*  Text                                                               */
/* ------------------------------------------------------------------ */

const P = {
  en: {
    heroTitle: "Raise a complaint in Thoothukudi",
    heroText:
      "Facing a problem in your ward? Tell us the details and your complaint reaches our team directly.",
    heroCta: "Raise a complaint",
    only: "For Thoothukudi (Tuticorin) areas only",
    resolvedTitle: "Recently resolved complaints",
    resolvedSub: "Problems that were fixed for people in Thoothukudi.",
    sample: "Sample data",
    resolvedIn: "Resolved in {n} days",
    wardLabel: "Ward {n}",
    formTitle: "Raise your complaint",
    formSub:
      "Fill in your details first, then tell us the problem. Fields marked * are required.",
    step1: "Your details",
    step2: "Your complaint",
    fName: "Full name",
    fPhone: "Mobile number",
    fWard: "Ward",
    fArea: "Area / street name",
    fPin: "Pincode",
    fCat: "Complaint type",
    fSubject: "Short title",
    fDesc: "Describe the problem",
    selectWard: "Select ward",
    selectPin: "Select pincode",
    areaPh: "e.g. 3rd Street, near the temple",
    subjectPh: "e.g. No water supply for 3 days",
    descPh: "What is the problem? Since when? Any landmark nearby?",
    phoneHint: "We may call you on this number about your complaint.",
    consent:
      "I agree that my details may be used to contact me about this complaint.",
    submit: "Submit complaint",
    sending: "Sending…",
    eName: "Please enter your name",
    ePhone: "Enter a valid 10-digit mobile number",
    eWard: "Please select your ward",
    eArea: "Please enter your area or street name",
    ePin: "Please select your pincode",
    eCat: "Please choose a complaint type",
    eSubject: "Please add a short title",
    eDesc: "Please describe the problem in at least 20 characters",
    eConsent: "Please agree to continue",
    failMsg:
      "We couldn't send your complaint. Check your internet connection and try again.",
    okTitle: "Complaint submitted",
    okText:
      "Your complaint has reached our team. Please keep this reference number:",
    another: "Raise another complaint",
  },
  ta: {
    heroTitle: "தூத்துக்குடியில் புகார் பதிவு செய்யுங்கள்",
    heroText:
      "உங்கள் வார்டில் பிரச்சினையா? விவரங்களைத் தெரிவியுங்கள்; உங்கள் புகார் நேரடியாக எங்கள் குழுவைச் சென்றடையும்.",
    heroCta: "புகார் பதிவு செய்",
    only: "தூத்துக்குடி (Tuticorin) பகுதிகளுக்கு மட்டும்",
    resolvedTitle: "சமீபத்தில் தீர்க்கப்பட்ட புகார்கள்",
    resolvedSub: "தூத்துக்குடி மக்களுக்காகச் சரிசெய்யப்பட்ட பிரச்சினைகள்.",
    sample: "மாதிரி தரவு",
    resolvedIn: "{n} நாட்களில் தீர்வு",
    wardLabel: "வார்டு {n}",
    formTitle: "உங்கள் புகாரைப் பதிவு செய்யுங்கள்",
    formSub:
      "முதலில் உங்கள் விவரங்களை நிரப்பி, பிறகு பிரச்சினையைத் தெரிவியுங்கள். * குறியிட்டவை அவசியம்.",
    step1: "உங்கள் விவரங்கள்",
    step2: "உங்கள் புகார்",
    fName: "முழுப் பெயர்",
    fPhone: "கைப்பேசி எண்",
    fWard: "வார்டு",
    fArea: "பகுதி / தெரு பெயர்",
    fPin: "அஞ்சல் குறியீடு",
    fCat: "புகார் வகை",
    fSubject: "சுருக்கமான தலைப்பு",
    fDesc: "பிரச்சினையை விவரிக்கவும்",
    selectWard: "வார்டைத் தேர்ந்தெடுக்கவும்",
    selectPin: "அஞ்சல் குறியீட்டைத் தேர்ந்தெடுக்கவும்",
    areaPh: "எ.கா. 3வது தெரு, கோவில் அருகில்",
    subjectPh: "எ.கா. 3 நாட்களாக குடிநீர் வரவில்லை",
    descPh: "என்ன பிரச்சினை? எப்போதிலிருந்து? அருகில் அடையாளம் ஏதேனும்?",
    phoneHint: "உங்கள் புகார் தொடர்பாக இந்த எண்ணில் தொடர்புகொள்ளலாம்.",
    consent:
      "இந்தப் புகார் தொடர்பாக என்னைத் தொடர்புகொள்ள என் விவரங்களைப் பயன்படுத்த ஒப்புக்கொள்கிறேன்.",
    submit: "புகாரைச் சமர்ப்பி",
    sending: "அனுப்புகிறது…",
    eName: "உங்கள் பெயரை உள்ளிடவும்",
    ePhone: "சரியான 10 இலக்க கைப்பேசி எண்ணை உள்ளிடவும்",
    eWard: "வார்டைத் தேர்ந்தெடுக்கவும்",
    eArea: "பகுதி / தெரு பெயரை உள்ளிடவும்",
    ePin: "அஞ்சல் குறியீட்டைத் தேர்ந்தெடுக்கவும்",
    eCat: "புகார் வகையைத் தேர்ந்தெடுக்கவும்",
    eSubject: "தலைப்பை உள்ளிடவும்",
    eDesc: "குறைந்தது 20 எழுத்துகளில் விவரிக்கவும்",
    eConsent: "தொடர ஒப்புதல் அவசியம்",
    failMsg:
      "புகாரை அனுப்ப முடியவில்லை. இணைய இணைப்பைச் சரிபார்த்து மீண்டும் முயலவும்.",
    okTitle: "புகார் சமர்ப்பிக்கப்பட்டது",
    okText:
      "உங்கள் புகார் எங்கள் குழுவைச் சென்றடைந்தது. இந்தக் குறிப்பு எண்ணை வைத்துக்கொள்ளுங்கள்:",
    another: "மற்றொரு புகாரைப் பதிவு செய்",
  },
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const EMPTY = {
  name: "",
  phone: "",
  ward: "",
  area: "",
  pincode: "",
  category: "",
  subject: "",
  description: "",
  consent: false,
};

// Order used to focus the first invalid field
const ORDER = [
  "name",
  "phone",
  "ward",
  "area",
  "pincode",
  "category",
  "subject",
  "description",
  "consent",
];

function validate(v, p) {
  const e = {};
  if (v.name.trim().length < 2) e.name = p.eName;
  if (!/^[6-9]\d{9}$/.test(v.phone)) e.phone = p.ePhone;
  if (!v.ward) e.ward = p.eWard;
  if (v.area.trim().length < 2) e.area = p.eArea;
  if (!v.pincode) e.pincode = p.ePin;
  if (!v.category) e.category = p.eCat;
  if (v.subject.trim().length < 4) e.subject = p.eSubject;
  if (v.description.trim().length < 20) e.description = p.eDesc;
  if (!v.consent) e.consent = p.eConsent;
  return e;
}

function makeRef() {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(
    d.getDate()
  ).padStart(2, "0")}`;
  return `TKD-${ymd}-${Math.floor(1000 + Math.random() * 9000)}`;
}

async function sendComplaint(payload) {
  const res = await fetch(`https://formsubmit.co/ajax/${COMPLAINT_EMAIL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  const ok = data.success === true || data.success === "true";
  if (!res.ok || !ok) throw new Error(data.message || "Send failed");
}

const inputCls = (err) =>
  `w-full rounded-xl border-2 bg-white px-4 text-base text-[#2b0a07] placeholder:text-[#8c1a10]/45 focus:outline-none focus:ring-4 focus:ring-[#f5c83b]/70 ${
    err ? "border-[#b42318]" : "border-[#8c1a10]/25 focus:border-[#8c1a10]"
  }`;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5c83b]";

function SmartImage({ src, alt, className, fallback }) {
  const [failed, setFailed] = useState(!src);
  if (failed) return fallback;
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

function Field({ id, label, required = true, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-base font-semibold text-[#5e0f08]">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-[#5e0f08]/75">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm font-semibold text-[#b42318]">
          {error}
        </p>
      )}
    </div>
  );
}

const aria = (id, error, hint) => ({
  id,
  "aria-invalid": error ? true : undefined,
  "aria-describedby": error ? `${id}-err` : hint ? `${id}-hint` : undefined,
});

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function RaiseIssues() {
  const { lang } = useLanguage();
  const p = P[lang];

  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [ref, setRef] = useState("");
  const [honey, setHoney] = useState("");
  const successRef = useRef(null);

  const catLabel = (c) => c[lang];
  const wardLabel = (w) =>
    p.wardLabel.replace("{n}", w.number) +
    (w.name ? ` – ${w.name[lang] ?? w.name.en}` : "");
  const fmtDate = (iso) =>
    new Date(iso).toLocaleDateString(lang === "ta" ? "ta-IN" : "en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

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

  const scrollToForm = () =>
    document.getElementById("raise-form")?.scrollIntoView({ behavior: "smooth" });

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

    const newRef = makeRef();

    // Hidden field filled = bot. Pretend success, send nothing.
    if (honey) {
      setRef(newRef);
      setStatus("sent");
      return;
    }

    const cat = CATEGORIES.find((c) => c.id === values.category);
    const ward = getWard(values.ward);

    setStatus("sending");
    try {
      await sendComplaint({
        _subject: `New complaint ${newRef} - ${cat.en} - Ward ${ward.number}`,
        _template: "table",
        _captcha: "false",
        "Reference No": newRef,
        "Complaint Type": cat.en,
        Title: values.subject.trim(),
        Description: values.description.trim(),
        Name: values.name.trim(),
        "Mobile Number": values.phone,
        "Ward Number": String(ward.number),
        "Ward Name": ward.name?.en ?? "Not listed",
        "Area / Street": values.area.trim(),
        Pincode: values.pincode,
        City: "Thoothukudi (Tuticorin)",
        "Submitted At": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      });
      setRef(newRef);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setValues(EMPTY);
    setErrors({});
    setRef("");
    setStatus("idle");
    document.getElementById("raise-form")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main style={FONT} className="pb-24 pt-32 text-[#2b0a07] sm:pt-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------------- Hero card ---------------- */}
        <section
          aria-labelledby="issues-hero"
          className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:min-h-[260px] md:grid-cols-2"
        >
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wide text-[#8c1a10]/80">
              {p.only}
            </p>
            <h1
              id="issues-hero"
              className="text-3xl font-extrabold leading-tight text-[#8c1a10] sm:text-5xl"
            >
              {p.heroTitle}
            </h1>
            <p className="max-w-[52ch] text-lg text-[#5e0f08]">{p.heroText}</p>
            <div>
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 rounded-xl bg-[#8c1a10] px-6 py-3 text-lg font-bold text-white transition-colors hover:bg-[#6d1209] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8c1a10]"
              >
                <Megaphone size={22} aria-hidden="true" />
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
                  <Megaphone size={96} strokeWidth={1.5} aria-hidden="true" />
                </div>
              }
            />
          </div>
        </section>

        {/* ---------------- Resolved complaints ---------------- */}
        <section aria-labelledby="resolved-title" className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="resolved-title" className="text-3xl font-extrabold text-white sm:text-4xl">
                {p.resolvedTitle}
              </h2>
              <p className="mt-1 text-lg text-white/90">{p.resolvedSub}</p>
            </div>
            {RESOLVED_ARE_SAMPLES && (
              <span className="rounded-full bg-[#f5c83b] px-3 py-1 text-sm font-bold text-[#5e0f08]">
                {p.sample}
              </span>
            )}
          </div>

          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOLVED.map((r) => {
              const cat = CATEGORIES.find((c) => c.id === r.category);
              const Icon = cat.icon;
              const ward = getWard(r.ward);
              return (
                <li
                  key={r.id}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                >
                  <div className="relative h-40 bg-[#fbeceb]">
                    <SmartImage
                      src={r.image}
                      alt=""
                      className="h-full w-full object-cover"
                      fallback={
                        <div className="flex h-full items-center justify-center text-[#8c1a10]/70">
                          <Icon size={64} strokeWidth={1.5} aria-hidden="true" />
                        </div>
                      }
                    />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-[#8c1a10] shadow">
                      <Icon size={16} aria-hidden="true" />
                      {catLabel(cat)}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="text-xl font-bold leading-snug text-[#8c1a10]">
                      {r.title[lang]}
                    </h3>
                    <p className="flex items-center gap-2 text-base text-[#5e0f08]">
                      <MapPin size={18} aria-hidden="true" className="shrink-0" />
                      {wardLabel(ward)} · {r.area[lang]}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-[#8c1a10]/15 pt-3 text-sm font-semibold">
                      <span className="inline-flex items-center gap-1.5 text-[#1a6b37]">
                        <BadgeCheck size={18} aria-hidden="true" />
                        {p.resolvedIn.replace("{n}", r.days)}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#5e0f08]/80">
                        <CalendarDays size={16} aria-hidden="true" />
                        {fmtDate(r.resolvedOn)}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ---------------- Complaint form ---------------- */}
        <section
          id="raise-form"
          aria-labelledby="form-title"
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
              <h2 id="form-title" className="text-3xl font-extrabold text-[#8c1a10] sm:text-4xl">
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

              {/* Step 1 */}
              <fieldset className="mt-8">
                <legend className="mb-4 flex items-center gap-3 text-2xl font-bold text-[#8c1a10]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8c1a10] text-lg text-white">
                    1
                  </span>
                  {p.step1}
                </legend>

                <div className="grid gap-5 sm:grid-cols-2">
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

                  <Field id="f-ward" label={p.fWard} error={errors.ward}>
                    <select
                      {...aria("f-ward", errors.ward)}
                      value={values.ward}
                      onChange={(e) => set("ward", e.target.value)}
                      className={`${inputCls(errors.ward)} h-12`}
                    >
                      <option value="">{p.selectWard}</option>
                      {WARDS.map((w) => (
                        <option key={w.number} value={w.number}>
                          {wardLabel(w)}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field id="f-area" label={p.fArea} error={errors.area}>
                    <input
                      {...aria("f-area", errors.area)}
                      type="text"
                      autoComplete="street-address"
                      placeholder={p.areaPh}
                      value={values.area}
                      onChange={(e) => set("area", e.target.value)}
                      className={`${inputCls(errors.area)} h-12`}
                    />
                  </Field>

                  <Field id="f-pincode" label={p.fPin} error={errors.pincode}>
                    <select
                      {...aria("f-pincode", errors.pincode)}
                      value={values.pincode}
                      onChange={(e) => set("pincode", e.target.value)}
                      className={`${inputCls(errors.pincode)} h-12`}
                    >
                      <option value="">{p.selectPin}</option>
                      {PINCODES.map((pin) => (
                        <option key={pin} value={pin}>
                          {pin}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
              </fieldset>

              {/* Step 2 */}
              <fieldset className="mt-10">
                <legend className="mb-4 flex items-center gap-3 text-2xl font-bold text-[#8c1a10]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8c1a10] text-lg text-white">
                    2
                  </span>
                  {p.step2}
                </legend>

                <div role="radiogroup" aria-label={p.fCat} aria-describedby={errors.category ? "f-category-err" : undefined}>
                  <p className="mb-2 text-base font-semibold text-[#5e0f08]">
                    {p.fCat}
                    <span aria-hidden="true"> *</span>
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {CATEGORIES.map((c, i) => {
                      const Icon = c.icon;
                      return (
                        <label key={c.id} className="relative cursor-pointer">
                          <input
                            id={i === 0 ? "f-category" : undefined}
                            type="radio"
                            name="category"
                            value={c.id}
                            checked={values.category === c.id}
                            onChange={() => set("category", c.id)}
                            className="peer sr-only"
                          />
                          <span className="flex h-full min-h-[84px] flex-col items-center justify-center gap-2 rounded-xl border-2 border-[#8c1a10]/25 bg-white px-3 py-3 text-center text-base font-semibold text-[#8c1a10] transition-colors hover:border-[#8c1a10] peer-checked:border-[#8c1a10] peer-checked:bg-[#8c1a10] peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-4 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#f5c83b]">
                            <Icon size={26} aria-hidden="true" />
                            {catLabel(c)}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.category && (
                    <p id="f-category-err" role="alert" className="mt-2 text-sm font-semibold text-[#b42318]">
                      {errors.category}
                    </p>
                  )}
                </div>

                <div className="mt-6 grid gap-5">
                  <Field id="f-subject" label={p.fSubject} error={errors.subject}>
                    <input
                      {...aria("f-subject", errors.subject)}
                      type="text"
                      maxLength={120}
                      placeholder={p.subjectPh}
                      value={values.subject}
                      onChange={(e) => set("subject", e.target.value)}
                      className={`${inputCls(errors.subject)} h-12`}
                    />
                  </Field>

                  <Field id="f-description" label={p.fDesc} error={errors.description}>
                    <textarea
                      {...aria("f-description", errors.description)}
                      rows={5}
                      maxLength={1000}
                      placeholder={p.descPh}
                      value={values.description}
                      onChange={(e) => set("description", e.target.value)}
                      className={`${inputCls(errors.description)} py-3`}
                    />
                    <p className="mt-1 text-right text-sm text-[#5e0f08]/70" aria-hidden="true">
                      {values.description.length}/1000
                    </p>
                  </Field>
                </div>
              </fieldset>

              {/* Consent + submit */}
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
                <p role="alert" className="mt-6 rounded-xl border-2 border-[#b42318] bg-[#fef3f2] px-4 py-3 text-base font-semibold text-[#b42318]">
                  {p.failMsg}
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