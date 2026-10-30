import {
  Bus,
  ClipboardList,
  Construction,
  Droplets,
  HeartPulse,
  Lamp,
  ShoppingBasket,
  Trash2,
  Truck,
  Waves,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Complaint types                                                    */
/* ------------------------------------------------------------------ */

export const CATEGORIES = [
  { id: "electricity", icon: Zap, en: "Electricity", ta: "மின்சாரம்" },
  { id: "water", icon: Droplets, en: "Water Supply", ta: "குடிநீர்" },
  { id: "road", icon: Construction, en: "Roads", ta: "சாலைகள்" },
  { id: "cleaning", icon: Trash2, en: "Cleaning & Garbage", ta: "தூய்மை & குப்பை" },
  { id: "drainage", icon: Waves, en: "Drainage & Sewage", ta: "வடிகால் & கழிவுநீர்" },
  { id: "streetlight", icon: Lamp, en: "Street Lights", ta: "தெரு விளக்குகள்" },
  { id: "bus", icon: Bus, en: "Buses", ta: "பேருந்துகள்" },
  { id: "transport", icon: Truck, en: "Transport", ta: "போக்குவரத்து" },
  { id: "ration", icon: ShoppingBasket, en: "Ration Shop", ta: "நியாயவிலைக் கடை" },
  { id: "health", icon: HeartPulse, en: "Health", ta: "சுகாதாரம்" },
  { id: "other", icon: ClipboardList, en: "Other", ta: "மற்றவை" },
];

/* ------------------------------------------------------------------ */
/*  Wards                                                              */
/*  Thoothukudi Corporation has 60 wards, so all 60 numbers are        */
/*  selectable. Names below were taken from the Election Commission    */
/*  polling-station lists. ADD MORE names from the official Corporation */
/*  ward list as you confirm them - wards without a name show number   */
/*  only.                                                              */
/* ------------------------------------------------------------------ */

const WARD_NAMES = {
  34: { en: "Madathur", ta: "மடத்தூர்" },
  35: { en: "Millerpuram", ta: "மில்லர்புரம்" },
  36: { en: "Anna Nagar", ta: "அண்ணா நகர்" },
  37: { en: "Magilchipuram", ta: "மகிழ்ச்சிபுரம்" },
  42: { en: "Pathinathapuram" },
  48: { en: "Indira Nagar", ta: "இந்திரா நகர்" },
};

export const WARDS = Array.from({ length: 60 }, (_, i) => {
  const number = i + 1;
  return { number, name: WARD_NAMES[number] ?? null };
});

export const getWard = (number) => WARDS.find((w) => w.number === Number(number));

/* ------------------------------------------------------------------ */
/*  Pincodes - please verify against India Post before launch          */
/* ------------------------------------------------------------------ */

export const PINCODES = ["628001", "628002", "628003", "628005", "628008"];

/* ------------------------------------------------------------------ */
/*  Resolved complaints shown as cards                                 */
/*                                                                     */
/*  !! SAMPLE DATA !!  These entries are placeholders so the layout    */
/*  can be built. Replace them with REAL resolved complaints before    */
/*  publishing, then set RESOLVED_ARE_SAMPLES = false.                 */
/*  Images go in /public/images/issues/ (card shows an icon if the     */
/*  image file is missing).                                            */
/* ------------------------------------------------------------------ */

export const RESOLVED_ARE_SAMPLES = true;

export const RESOLVED = [
  {
    id: 1,
    category: "streetlight",
    ward: 34,
    area: { en: "Madathur main road", ta: "மடத்தூர் பிரதான சாலை" },
    title: {
      en: "Street lights restored on the main road",
      ta: "பிரதான சாலையில் தெரு விளக்குகள் மீண்டும் எரிகின்றன",
    },
    resolvedOn: "2026-10-21",
    days: 3,
    image: "/images/issues/streetlight.jpg",
  },
  {
    id: 2,
    category: "water",
    ward: 35,
    area: { en: "Millerpuram", ta: "மில்லர்புரம்" },
    title: {
      en: "Leaking drinking water pipeline repaired",
      ta: "குடிநீர்க் குழாய் கசிவு சரிசெய்யப்பட்டது",
    },
    resolvedOn: "2026-10-18",
    days: 2,
    image: "/images/issues/water.jpg",
  },
  {
    id: 3,
    category: "road",
    ward: 37,
    area: { en: "Magilchipuram", ta: "மகிழ்ச்சிபுரம்" },
    title: {
      en: "Potholes filled on the bus route",
      ta: "பேருந்து செல்லும் சாலையில் குழிகள் நிரப்பப்பட்டன",
    },
    resolvedOn: "2026-10-15",
    days: 5,
    image: "/images/issues/road.jpg",
  },
  {
    id: 4,
    category: "cleaning",
    ward: 36,
    area: { en: "Anna Nagar", ta: "அண்ணா நகர்" },
    title: {
      en: "Overflowing garbage cleared and bins replaced",
      ta: "நிரம்பி வழிந்த குப்பை அகற்றப்பட்டு தொட்டிகள் மாற்றப்பட்டன",
    },
    resolvedOn: "2026-10-12",
    days: 4,
    image: "/images/issues/cleaning.jpg",
  },
  {
    id: 5,
    category: "ration",
    ward: 42,
    area: { en: "Pathinathapuram", ta: "Pathinathapuram" },
    title: {
      en: "Ration shop opening hours corrected",
      ta: "நியாயவிலைக் கடை திறக்கும் நேரம் சரிசெய்யப்பட்டது",
    },
    resolvedOn: "2026-10-09",
    days: 6,
    image: "/images/issues/ration.jpg",
  },
  {
    id: 6,
    category: "bus",
    ward: 48,
    area: { en: "Indira Nagar", ta: "இந்திரா நகர்" },
    title: {
      en: "Bus stop shelter repaired",
      ta: "பேருந்து நிறுத்த நிழற்குடை பழுது நீக்கப்பட்டது",
    },
    resolvedOn: "2026-10-05",
    days: 7,
    image: "/images/issues/bus.jpg",
  },
];