import { useEffect, useRef, useState } from "react";
import { BadgeCheck, ChevronDown, Send, UserPlus } from "lucide-react";
import { useLanguage } from "../components/Navbar.jsx";
import {
  FONT,
  Field,
  aria,
  focusRing,
  inputCls,
  makeRef,
  sendForm,
} from "../components/FormKit.jsx";
import card from "../images/card.jpg";
import { PINCODES, WARDS, getWard } from "../data/thoothukudi.js";

// Optional hero picture. To use one:
//   import joinHero from "../images/join-hero.jpg";
//   const HERO_IMAGE = joinHero;
const HERO_IMAGE = card;

/* ------------------------------------------------------------------ */
/*  Text (English / Tamil)                                             */
/* ------------------------------------------------------------------ */

const P = {
  en: {
    kicker: "Join us",
    title: "Join the movement in Thoothukudi",
    heroText:
      "Become a member and work with us in your ward. Fill in your details and our team will get in touch.",
    heroCta: "Fill the form",
    stepsTitle: "What happens next",
    s1: "Fill in the form with your details and your ward.",
    s2: "Your details reach our team by email straight away.",
    s3: "Our team gets in touch with you.",
    formTitle: "Member registration",
    formSub: "Fields marked * are required.",
    fName: "Full name",
    fPhone: "Mobile number",
    fEmail: "Email (optional)",
    fAge: "Age",
    fGender: "Gender (optional)",
    fJob: "Occupation (optional)",
    fWard: "Ward",
    fArea: "Area / street name",
    fPin: "Pincode",
    fInterest: "How would you like to help? (optional)",
    phoneHint: "We will contact you on this number.",
    ageHint: "Membership is open to ages 18 and above.",
    jobPh: "e.g. Student, Fisherman, Shop owner",
    areaPh: "e.g. 3rd Street, near the temple",
    selectWard: "Select ward",
    selectPin: "Select pincode",
    select: "Select",
    consent: "I agree that my details may be used to contact me about the party's work.",
    submit: "Join now",
    sending: "Sending…",
    eName: "Please enter your name",
    ePhone: "Enter a valid 10-digit mobile number",
    eEmail: "Enter a valid email or leave it empty",
    eAge: "Enter your age (18 or above)",
    eWard: "Please select your ward",
    eArea: "Please enter your area or street name",
    ePin: "Please select your pincode",
    eConsent: "Please agree to continue",
    failMsg:
      "We couldn't send your details. Check your internet connection and try again.",
    okTitle: "Welcome to the movement!",
    okText: "Your details have reached our team. Please keep this reference number:",
    another: "Register another person",
  },
  ta: {
    kicker: "எங்களுடன் இணையுங்கள்",
    title: "தூத்துக்குடியில் இயக்கத்தில் இணையுங்கள்",
    heroText:
      "உறுப்பினராகி, உங்கள் வார்டில் எங்களுடன் இணைந்து பணியாற்றுங்கள். உங்கள் விவரங்களை நிரப்புங்கள்; எங்கள் குழு உங்களைத் தொடர்புகொள்ளும்.",
    heroCta: "படிவத்தை நிரப்பு",
    stepsTitle: "அடுத்து என்ன நடக்கும்",
    s1: "உங்கள் விவரங்களையும் வார்டையும் படிவத்தில் நிரப்புங்கள்.",
    s2: "உங்கள் விவரங்கள் உடனடியாக மின்னஞ்சல் மூலம் எங்கள் குழுவைச் சென்றடையும்.",
    s3: "எங்கள் குழு உங்களைத் தொடர்புகொள்ளும்.",
    formTitle: "உறுப்பினர் பதிவு",
    formSub: "* குறியிட்டவை அவசியம்.",
    fName: "முழுப் பெயர்",
    fPhone: "கைப்பேசி எண்",
    fEmail: "மின்னஞ்சல் (விருப்பம்)",
    fAge: "வயது",
    fGender: "பாலினம் (விருப்பம்)",
    fJob: "தொழில் (விருப்பம்)",
    fWard: "வார்டு",
    fArea: "பகுதி / தெரு பெயர்",
    fPin: "அஞ்சல் குறியீடு",
    fInterest: "எப்படி உதவ விரும்புகிறீர்கள்? (விருப்பம்)",
    phoneHint: "இந்த எண்ணில் உங்களைத் தொடர்புகொள்வோம்.",
    ageHint: "18 வயது மற்றும் அதற்கு மேற்பட்டவர்கள் உறுப்பினராகலாம்.",
    jobPh: "எ.கா. மாணவர், மீனவர், கடை உரிமையாளர்",
    areaPh: "எ.கா. 3வது தெரு, கோவில் அருகில்",
    selectWard: "வார்டைத் தேர்ந்தெடுக்கவும்",
    selectPin: "அஞ்சல் குறியீட்டைத் தேர்ந்தெடுக்கவும்",
    select: "தேர்ந்தெடுக்கவும்",
    consent: "கட்சிப் பணிகள் தொடர்பாக என்னைத் தொடர்புகொள்ள என் விவரங்களைப் பயன்படுத்த ஒப்புக்கொள்கிறேன்.",
    submit: "இப்போதே இணை",
    sending: "அனுப்புகிறது…",
    eName: "உங்கள் பெயரை உள்ளிடவும்",
    ePhone: "சரியான 10 இலக்க கைப்பேசி எண்ணை உள்ளிடவும்",
    eEmail: "சரியான மின்னஞ்சலை உள்ளிடவும் அல்லது காலியாக விடவும்",
    eAge: "உங்கள் வயதை உள்ளிடவும் (18 அல்லது அதற்கு மேல்)",
    eWard: "உங்கள் வார்டைத் தேர்ந்தெடுக்கவும்",
    eArea: "பகுதி / தெரு பெயரை உள்ளிடவும்",
    ePin: "அஞ்சல் குறியீட்டைத் தேர்ந்தெடுக்கவும்",
    eConsent: "தொடர ஒப்புதல் அவசியம்",
    failMsg:
      "உங்கள் விவரங்களை அனுப்ப முடியவில்லை. இணைய இணைப்பைச் சரிபார்த்து மீண்டும் முயலவும்.",
    okTitle: "இயக்கத்திற்கு வரவேற்கிறோம்!",
    okText: "உங்கள் விவரங்கள் எங்கள் குழுவைச் சென்றடைந்தன. இந்தக் குறிப்பு எண்ணை வைத்துக்கொள்ளுங்கள்:",
    another: "மற்றொருவரைப் பதிவு செய்",
  },
};

const GENDERS = [
  { v: "Male", en: "Male", ta: "ஆண்" },
  { v: "Female", en: "Female", ta: "பெண்" },
  { v: "Other", en: "Other", ta: "மற்றவர்" },
  { v: "Prefer not to say", en: "Prefer not to say", ta: "சொல்ல விரும்பவில்லை" },
];

const INTERESTS = [
  { v: "Attend events and meetings", en: "Attend events and meetings", ta: "நிகழ்வுகள், கூட்டங்களில் பங்கேற்பு" },
  { v: "Spread the party's message in my area", en: "Spread the party's message in my area", ta: "என் பகுதியில் கட்சியின் கருத்துகளைப் பரப்புதல்" },
  { v: "Social media support", en: "Social media support", ta: "சமூக ஊடக ஆதரவு" },
  { v: "Help follow up on local issues", en: "Help follow up on local issues", ta: "உள்ளூர் பிரச்சினைகளைப் பின்தொடர உதவுதல்" },
  { v: "Other", en: "Other", ta: "மற்றவை" },
];

/* ------------------------------------------------------------------ */
/*  Form helpers                                                       */
/* ------------------------------------------------------------------ */

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  age: "",
  gender: "",
  job: "",
  ward: "",
  area: "",
  pincode: "",
  interests: [],
  consent: false,
};

const ORDER = ["name", "phone", "email", "age", "ward", "area", "pincode", "consent"];

function validate(v, p) {
  const e = {};
  if (v.name.trim().length < 2) e.name = p.eName;
  if (!/^[6-9]\d{9}$/.test(v.phone)) e.phone = p.ePhone;
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = p.eEmail;
  const age = Number(v.age);
  if (!Number.isInteger(age) || age < 18 || age > 100) e.age = p.eAge;
  if (!v.ward) e.ward = p.eWard;
  if (v.area.trim().length < 2) e.area = p.eArea;
  if (!v.pincode) e.pincode = p.ePin;
  if (!v.consent) e.consent = p.eConsent;
  return e;
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function JoinUs() {
  const { lang } = useLanguage();
  const p = P[lang];

  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorDetail, setErrorDetail] = useState("");
  const [ref, setRef] = useState("");
  const [honey, setHoney] = useState("");
  const successRef = useRef(null);

  const wardLabel = (w) =>
    `${lang === "ta" ? "வார்டு" : "Ward"} ${w.number}` +
    (w.name ? ` – ${w.name[lang] ?? w.name.en}` : "");

  const set = (key, val) => {
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  const toggleInterest = (v) =>
    setValues((s) => ({
      ...s,
      interests: s.interests.includes(v)
        ? s.interests.filter((x) => x !== v)
        : [...s.interests, v],
    }));

  useEffect(() => {
    if (status === "sent") {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      successRef.current?.focus();
    }
  }, [status]);

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

    const newRef = makeRef("JOIN");

    // Hidden field filled = bot. Pretend success, send nothing.
    if (honey) {
      setRef(newRef);
      setStatus("sent");
      return;
    }

    const ward = getWard(values.ward);

    setStatus("sending");
    setErrorDetail("");
    try {
      await sendForm({
        _subject: `New member request ${newRef} - Ward ${ward.number}`,
        _template: "table",
        _captcha: "false",
        "Reference No": newRef,
        Name: values.name.trim(),
        "Mobile Number": values.phone,
        Email: values.email.trim() || "-",
        Age: values.age,
        Gender: values.gender || "-",
        Occupation: values.job.trim() || "-",
        "Ward Number": String(ward.number),
        "Ward Name": ward.name?.en ?? "Not listed",
        "Area / Street": values.area.trim(),
        Pincode: values.pincode,
        City: "Thoothukudi (Tuticorin)",
        "Wants to help with": values.interests.length ? values.interests.join(", ") : "-",
        "Submitted At": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      });
      setRef(newRef);
      setStatus("sent");
    } catch (err) {
      console.error("Join form send failed:", err);
      setErrorDetail(err?.message || "");
      setStatus("error");
    }
  }

  function reset() {
    setValues(EMPTY);
    setErrors({});
    setRef("");
    setStatus("idle");
    document.getElementById("join-form")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main style={FONT} className="pb-24 pt-32 text-[#2b0a07] sm:pt-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------------- Hero card ---------------- */}
        <section
          aria-labelledby="join-title"
          className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:min-h-[260px] md:grid-cols-2"
        >
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wide text-[#8c1a10]/80">
              {p.kicker}
            </p>
            <h1
              id="join-title"
              className="text-3xl font-extrabold leading-tight text-[#8c1a10] sm:text-5xl"
            >
              {p.title}
            </h1>
            <p className="max-w-[52ch] text-lg text-[#5e0f08]">{p.heroText}</p>
            <div>
              <button
                type="button"
                onClick={() =>
                  document.getElementById("join-form")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 rounded-xl bg-[#8c1a10] px-6 py-3 text-lg font-bold text-white transition-colors hover:bg-[#6d1209] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8c1a10]"
              >
                {p.heroCta}
                <ChevronDown size={22} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="relative min-h-[200px] bg-[#6d1209]">
            {HERO_IMAGE ? (
              <img
                src={HERO_IMAGE}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-[200px] items-center justify-center text-[#f5c83b]">
                <UserPlus size={96} strokeWidth={1.5} aria-hidden="true" />
              </div>
            )}
          </div>
        </section>

        {/* ---------------- Steps + form ---------------- */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
          <aside
            aria-labelledby="steps-title"
            className="h-fit rounded-3xl bg-[#6d1209] p-6 text-white shadow-xl sm:p-8 lg:sticky lg:top-28"
          >
            <h2 id="steps-title" className="text-2xl font-extrabold text-[#f5c83b]">
              {p.stepsTitle}
            </h2>
            <ol className="mt-5 space-y-5">
              {[p.s1, p.s2, p.s3].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5c83b] text-lg font-extrabold text-[#5e0f08]">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-lg leading-snug">{text}</span>
                </li>
              ))}
            </ol>
          </aside>

          <section
            id="join-form"
            aria-labelledby="form-title"
            className="scroll-mt-28 rounded-3xl bg-white p-6 shadow-xl sm:p-10"
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

                  <Field id="f-age" label={p.fAge} error={errors.age} hint={p.ageHint}>
                    <input
                      {...aria("f-age", errors.age, true)}
                      type="text"
                      inputMode="numeric"
                      maxLength={3}
                      value={values.age}
                      onChange={(e) => set("age", e.target.value.replace(/\D/g, ""))}
                      className={`${inputCls(errors.age)} h-12`}
                    />
                  </Field>

                  <Field id="f-gender" label={p.fGender} required={false}>
                    <select
                      id="f-gender"
                      value={values.gender}
                      onChange={(e) => set("gender", e.target.value)}
                      className={`${inputCls(false)} h-12`}
                    >
                      <option value="">{p.select}</option>
                      {GENDERS.map((g) => (
                        <option key={g.v} value={g.v}>
                          {g[lang]}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field id="f-job" label={p.fJob} required={false}>
                    <input
                      id="f-job"
                      type="text"
                      placeholder={p.jobPh}
                      value={values.job}
                      onChange={(e) => set("job", e.target.value)}
                      className={`${inputCls(false)} h-12`}
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

                  <div className="sm:col-span-2">
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
                  </div>
                </div>

                {/* How to help (optional) */}
                <fieldset className="mt-8">
                  <legend className="mb-3 text-base font-semibold text-[#5e0f08]">
                    {p.fInterest}
                  </legend>
                  <div className="flex flex-wrap gap-3">
                    {INTERESTS.map((it) => (
                      <label key={it.v} className="relative cursor-pointer">
                        <input
                          type="checkbox"
                          checked={values.interests.includes(it.v)}
                          onChange={() => toggleInterest(it.v)}
                          className="peer sr-only"
                        />
                        <span className="inline-block rounded-full border-2 border-[#8c1a10]/25 bg-white px-4 py-2 text-base font-semibold text-[#8c1a10] transition-colors hover:border-[#8c1a10] peer-checked:border-[#8c1a10] peer-checked:bg-[#8c1a10] peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-4 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#f5c83b]">
                          {it[lang]}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Consent + submit */}
                <div className="mt-8">
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
      </div>
    </main>
  );
}