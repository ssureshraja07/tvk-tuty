
import { useState } from "react";
import { useLanguage } from "../components/Navbar.jsx";
import tvk_hero from "../images/tvk-hero.mp4";



const HERO_VIDEO = tvk_hero;

const FONT = {
  fontFamily: "'Anek Tamil', system-ui, sans-serif",
};

import portImg from "../images/thoothukudi-port.jpg";
import saltImg from "../images/thoothukudi-salt.jpg";
import fishingImg from "../images/fishing-harbour.jpg";
import korkaiImg from "../images/korkai.jpg";
import templeImg from "../images/tiruchendur.jpg";
import coastImg from "../images/thoothukudi-coast.jpg";

const images = {
  port: portImg,
  salt: saltImg,
  fishing: fishingImg,
  heritage: korkaiImg,
  temple: templeImg,
  coast: coastImg,
};

export default function Home({ district = { en: "Thoothukudi", ta: "தூத்துக்குடி" } }) {
  const { lang } = useLanguage();

  const isTamil = lang === "ta";

  const [reduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const content = {
    welcomeTitle: isTamil
      ? "முத்து நகரின் பெருமை"
      : "The Pride of Pearl City",

    welcomeSubtitle: isTamil
      ? "தமிழ்நாட்டின் தென்கடற்கரையில் தனித்துவம் கொண்ட நம் தூத்துக்குடி."
      : "A coastal district shaped by history, culture, hard work and maritime heritage.",

    welcomeDescription: isTamil
      ? "துறைமுகம், உப்பளங்கள், மீன்பிடித் தொழில், பண்டைய நாகரிகம் என பல சிறப்புகளை தன்னகத்தே கொண்டது தூத்துக்குடி மாவட்டம்."
      : "From its historic port and salt fields to its fishing communities and ancient heritage, Thoothukudi holds a special place in Tamil Nadu.",

    identity: isTamil ? "நம் மண்ணின் அடையாளம்" : "The Identity of Our Land",

    aboutTitle: isTamil
      ? "தமிழக வெற்றிக் கழகம்"
      : "Tamilaga Vettri Kazhagam",

    aboutDescription: isTamil
      ? "தமிழக வெற்றிக் கழகம் என்பது 2024 ஆம் ஆண்டு விஜய் அவர்களால் தொடங்கப்பட்ட அரசியல் கட்சியாகும். கட்சியின் அதிகாரப்பூர்வ கொள்கைகள், அமைப்பு மற்றும் செயல்பாடுகள் குறித்த தகவல்களை இங்கே அறிந்து கொள்ளலாம்."
      : "Tamilaga Vettri Kazhagam (TVK) is a political party founded by Vijay in 2024. Explore information about the party, its published principles, organisational structure and activities.",

    heritageTitle: isTamil
      ? "வரலாறும் பாரம்பரியமும்"
      : "History & Heritage",

    heritageDescription: isTamil
      ? "வரலாற்றுச் சுவடுகளையும் இயற்கை அழகையும் கொண்ட நம் தூத்துக்குடியின் சிறப்புகள்."
      : "Discover the historical landmarks, coastal beauty and cultural heritage of our district.",

    developmentTitle: isTamil
      ? "நம் மாவட்டத்தின் முன்னுரிமைகள்"
      : "Our District Priorities",

    developmentDescription: isTamil
      ? "தூத்துக்குடி மக்களின் வாழ்க்கைத் தரத்தை மேம்படுத்துவதில் முக்கியத்துவம் பெறும் துறைகள்."
      : "Important areas of public interest for the people and future of Thoothukudi.",

    footer: isTamil
      ? "நம் மண். நம் மக்கள். நம் பெருமை."
      : "Our Land. Our People. Our Pride.",
  };

  const identityCards = [
    {
      title: isTamil ? "துறைமுக நகரம்" : "Maritime Heritage",
      subtitle: isTamil
        ? "கடல் வணிகத்தின் அடையாளம்"
        : "A gateway to maritime trade",
      image: images.port,
      number: "01",
    },
    {
      title: isTamil ? "உப்பளத் தொழில்" : "Salt Industry",
      subtitle: isTamil
        ? "உழைப்பின் அடையாளம்"
        : "A legacy of hardworking communities",
      image: images.salt,
      number: "02",
    },
    {
      title: isTamil ? "மீனவர் வாழ்வாதாரம்" : "Fishing Communities",
      subtitle: isTamil
        ? "கடலோடு இணைந்த வாழ்க்கை"
        : "Lives connected to the sea",
      image: images.fishing,
      number: "03",
    },
    {
      title: isTamil ? "பண்டைய நாகரிகம்" : "Ancient Heritage",
      subtitle: isTamil
        ? "வரலாற்றின் பெருமை"
        : "Stories from ancient history",
      image: images.heritage,
      number: "04",
    },
  ];

  const heritageCards = [
    {
      title: "Korkai",
      tamil: "கொற்கை",
      description: isTamil
        ? "பண்டைய தமிழர்களின் கடல் வணிக வரலாற்றுடன் தொடர்புடைய இடம்."
        : "An important site associated with ancient Tamil maritime trade.",
      image: images.port,
    },
    {
      title: "Tiruchendur",
      tamil: "திருச்செந்தூர்",
      description: isTamil
        ? "கடற்கரையோரத்தில் அமைந்துள்ள புகழ்பெற்ற ஆன்மீகத் தலம்."
        : "A renowned spiritual destination along the coastline.",
      image: images.temple,
    },
    {
      title: "Manapad",
      tamil: "மணப்பாடு",
      description: isTamil
        ? "இயற்கை அழகும் கடல்சார் பாரம்பரியமும் நிறைந்த கடற்கரைப் பகுதி."
        : "A coastal village known for its scenic beauty and heritage.",
      image: images.coast,
    },
  ];

  const priorities = [
    {
      icon: "🎓",
      title: isTamil ? "கல்வி" : "Education",
      description: isTamil
        ? "தரமான கல்வி மற்றும் இளைஞர்களுக்கான வாய்ப்புகள்."
        : "Quality education and opportunities for young people.",
    },
    {
      icon: "⚓",
      title: isTamil ? "மீனவர் நலன்" : "Fisherfolk Welfare",
      description: isTamil
        ? "மீனவ சமூகத்தின் வாழ்வாதாரம் மற்றும் பாதுகாப்பு."
        : "Livelihood and safety of fishing communities.",
    },
    {
      icon: "💼",
      title: isTamil ? "வேலைவாய்ப்பு" : "Employment",
      description: isTamil
        ? "திறன் மேம்பாடு மற்றும் வேலைவாய்ப்பு வாய்ப்புகள்."
        : "Skill development and employment opportunities.",
    },
    {
      icon: "🌱",
      title: isTamil ? "சுற்றுச்சூழல்" : "Environment",
      description: isTamil
        ? "கடற்கரை மற்றும் இயற்கை வளங்களைப் பாதுகாத்தல்."
        : "Protecting coastal ecosystems and natural resources.",
    },
  ];

  return (
    <main style={FONT} className="overflow-hidden bg-[#fffaf5] text-[#292020]">

      {/* HERO SECTION */}
      <section className="relative isolate flex min-h-[600px] h-screen w-full items-end overflow-hidden">

        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />

      </section>

      {/* WELCOME SECTION */}
      <section className="relative px-5 py-24 md:px-16 lg:px-24">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <span className="mb-5 inline-block rounded-full bg-red-100 px-5 py-2 text-sm font-bold text-red-800">
              {isTamil ? "தூத்துக்குடி மாவட்டம்" : "THOOTHUKUDI DISTRICT"}
            </span>

            <h2 className="text-4xl font-black leading-tight text-[#870000] md:text-6xl">
              {content.welcomeTitle}
            </h2>

            <h3 className="mt-5 text-xl font-bold text-[#b08a00] md:text-2xl">
              {content.welcomeSubtitle}
            </h3>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              {content.welcomeDescription}
            </p>

            <div className="mt-8 h-1 w-24 rounded-full bg-yellow-500" />
          </div>

          <div className="relative">
            <img
              src={images.coast}
              alt="Coastal landscape"
              className="h-[350px] w-full rounded-3xl object-cover shadow-2xl md:h-[460px]"
              loading="lazy"
            />

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-[#920000] p-6 text-white shadow-xl md:-left-8">
              <p className="text-sm font-medium text-yellow-300">
                {isTamil ? "நம் மாவட்டம்" : "OUR DISTRICT"}
              </p>
              <h3 className="mt-1 text-3xl font-black">
                {isTamil ? "தூத்துக்குடி" : "Thoothukudi"}
              </h3>
              <p className="mt-1 text-sm">
                {isTamil ? "முத்து நகரம்" : "The Pearl City"}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* DISTRICT IDENTITY */}
      <section className="bg-[#850000] px-5 py-24 text-white md:px-16 lg:px-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="mb-3 font-bold tracking-[3px] text-yellow-400">
              {isTamil ? "நம் பெருமை" : "OUR PRIDE"}
            </p>

            <h2 className="text-3xl font-black md:text-5xl">
              {content.identity}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
              {isTamil
                ? "தூத்துக்குடியின் தனித்துவத்தை உருவாக்கும் சிறப்புகள்."
                : "Discover the industries, communities and traditions that define Thoothukudi."}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {identityCards.map((card) => (
              <article
                key={card.number}
                className="group relative overflow-hidden rounded-2xl bg-white/10"
              >
                <div className="h-[310px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <span className="text-sm font-bold text-yellow-400">
                    {card.number}
                  </span>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/80">
                    {card.subtitle}
                  </p>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ABOUT TVK */}
      <section className="px-5 py-24 md:px-16 lg:px-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="relative overflow-hidden rounded-3xl bg-[#8c0000] p-8 text-white md:p-14">

            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[35px] border-white/5" />

            <p className="relative font-bold tracking-[3px] text-yellow-400">
              {isTamil ? "கட்சி அறிமுகம்" : "PARTY INTRODUCTION"}
            </p>

            <h2 className="relative mt-6 text-4xl font-black leading-tight md:text-5xl">
              {content.aboutTitle}
            </h2>

            <div className="relative mt-6 h-1 w-20 bg-yellow-400" />

            <p className="relative mt-7 text-lg leading-9 text-white/85">
              {content.aboutDescription}
            </p>

            <p className="relative mt-8 font-bold text-yellow-400">
              {isTamil ? "தமிழகம் முழுவதும்" : "Across Tamil Nadu"}
            </p>

          </div>

          <div className="space-y-6">

            <img
              src={images.heritage}
              alt="Tamil Nadu heritage"
              loading="lazy"
              className="h-[300px] w-full rounded-3xl object-cover md:h-[420px]"
            />

            <div>
              <h3 className="text-2xl font-black text-[#850000]">
                {isTamil ? "மக்களுக்கான தகவல்கள்" : "Information for the People"}
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                {isTamil
                  ? "கட்சியின் அதிகாரப்பூர்வ அறிவிப்புகள், அமைப்பு விவரங்கள் மற்றும் பொதுமக்களுக்கு தொடர்புடைய தகவல்களை அறிந்து கொள்ளுங்கள்."
                  : "Explore official party announcements, organisational information and updates relevant to the public."}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HERITAGE GALLERY */}
      <section className="bg-[#f5eee6] px-5 py-24 md:px-16 lg:px-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="font-bold tracking-[3px] text-[#a78300]">
              {isTamil ? "நம் வரலாறு" : "OUR HISTORY"}
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#850000] md:text-5xl">
              {content.heritageTitle}
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-gray-600">
              {content.heritageDescription}
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">

            {heritageCards.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <p className="text-sm font-bold text-[#b08a00]">
                    {item.tamil}
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-[#850000]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-6 h-1 w-12 rounded-full bg-yellow-500 transition-all duration-500 group-hover:w-24" />
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* DISTRICT PRIORITIES */}
      <section className="px-5 py-24 md:px-16 lg:px-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="font-bold tracking-[3px] text-[#b08a00]">
              {isTamil ? "மாவட்ட முன்னுரிமைகள்" : "DISTRICT PRIORITIES"}
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#850000] md:text-5xl">
              {content.developmentTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
              {content.developmentDescription}
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {priorities.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-red-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl"
              >
                <span className="text-4xl">{item.icon}</span>

                <h3 className="mt-6 text-xl font-black text-[#850000]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="relative overflow-hidden bg-[#850000] px-5 py-20 text-center text-white md:py-28">

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[35px] border-white/5" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[35px] border-white/5" />

        <div className="relative mx-auto max-w-4xl">

          <p className="mb-5 font-bold tracking-[4px] text-yellow-400">
            {isTamil ? "நமது தூத்துக்குடி" : "OUR THOOTHUKUDI"}
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-6xl">
            {content.footer}
          </h2>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-yellow-400" />

        </div>
      </section>

    </main>
  );
}
