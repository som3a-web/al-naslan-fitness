// ===========================================================================
// SEO landing pages — one page per thing people search for in Sharjah.
// Only facts already confirmed elsewhere in lib/data.ts (prices, hours,
// facilities, programs). Anything unconfirmed points people to WhatsApp.
// ===========================================================================

import { BRAND, KIDS, PRICING, SWIMMING } from "./data";

export type LandingContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  highlightsTitle: string;
  highlights: { icon: string; title: string; text: string }[];
  photos: { src: string; alt: string }[];
  pricing: "membership" | "pt" | "kids";
  faqs: { q: string; a: string }[];
  whatsappText: string;
};

const aed = (n: number) => `${BRAND.currency} ${n.toLocaleString()}`;
const [m1, m3, m6, m12] = PRICING.adult;
const [pt10, pt20, pt30] = PRICING.pt;

const membershipFaq = {
  q: "How much is a gym membership at NFC?",
  a: `One price list for everyone: 1 month ${aed(m1.price)}, 3 months ${aed(m3.price)}, 6 months ${aed(m6.price)} and 1 year ${aed(m12.price)}. A day pass is ${aed(PRICING.dailyPass)}.`,
};
const locationFaq = {
  q: "Where is Al Naslan Fitness Center?",
  a: `${BRAND.address}. Free parking is available. Google Maps Plus Code: ${BRAND.plusCode}.`,
};
const hoursFaq = {
  q: "What are the gym timings?",
  a: `Ladies: ${PRICING.ladiesTiming}. Men: ${PRICING.maleTiming}.`,
};

export const LANDING: Record<string, LandingContent> = {
  ladies: {
    path: "/ladies-gym-sharjah",
    metaTitle: "Ladies Gym in Sharjah – Al Taawun",
    metaDescription: `Ladies gym in Al Taawun, Sharjah with ladies timing ${PRICING.ladiesTiming}: full gym floor, cardio zone, GX room, lockers & showers. Memberships from ${aed(m1.price)}/month.`,
    eyebrow: "Ladies timing · Al Taawun, Sharjah",
    h1: "Ladies Gym in Al Taawun, Sharjah",
    intro: `NFC has dedicated ladies timing from ${PRICING.ladiesTiming} — the full gym floor, cardio zone, GX room, lockers and showers, with one transparent price list for everyone.`,
    heroImage: "/media/cardio-zone/climb-beyond-limits.jpg",
    heroAlt: "Treadmills under the Climb Beyond Limits neon sign at NFC",
    highlightsTitle: "Everything included in ladies timing",
    highlights: [
      { icon: "Clock", title: "Ladies timing", text: `${PRICING.ladiesTiming} — the whole gym is yours.` },
      { icon: "Dumbbell", title: "Full gym floor", text: "Plate-loaded machines, cable stations, dumbbells and free weights." },
      { icon: "Activity", title: "Cardio zone", text: "Treadmills, bikes, stair climbers and cross trainers." },
      { icon: "Flame", title: "GX room", text: "A dedicated studio for group exercise and functional training." },
      { icon: "Lock", title: "Lockers & showers", text: "Clean changing rooms, lockers and private shower rooms." },
      { icon: "Coffee", title: "Café & free parking", text: "Naslan Café inside the gym and free parking at Al Mawja Tower." },
    ],
    photos: [
      { src: "/media/gym-floor/gx-room.jpg", alt: "GX room studio with neon lighting at NFC Sharjah" },
      { src: "/media/cardio-zone/bike-and-climber.jpg", alt: "Exercise bike and stair climber at NFC ladies gym" },
      { src: "/media/lockers/locker-room.jpg", alt: "Changing room with lockers and a backlit mirror" },
      { src: "/media/gym-floor/strength-floor-wide.jpg", alt: "NFC strength floor in Al Taawun, Sharjah" },
    ],
    pricing: "membership",
    faqs: [
      { q: "What are the ladies gym timings at NFC?", a: `Ladies timing is ${PRICING.ladiesTiming}. Men's timing is ${PRICING.maleTiming}.` },
      membershipFaq,
      { q: "Can ladies use the swimming pool?", a: "Pool schedules rotate — message our team on WhatsApp for this week's ladies pool times." },
      { q: "Is personal training available for ladies?", a: `Yes. Personal training packages are 10 classes ${aed(pt10.price)}, 20 classes ${aed(pt20.price)} and 30 classes ${aed(pt30.price)}.` },
      locationFaq,
    ],
    whatsappText: "Hi NFC, I'd like to ask about the ladies gym timing and membership.",
  },

  pool: {
    path: "/swimming-pool-gym-sharjah",
    metaTitle: "Gym with Swimming Pool in Sharjah – Al Taawun",
    metaDescription: "Gym with an indoor swimming pool and kids pool in Al Taawun, Sharjah. Lap sessions, kids learn-to-swim, private coaching and aqua fitness at Al Naslan Fitness Center.",
    eyebrow: "Indoor pool · Al Mawja Tower",
    h1: "Gym with Swimming Pool in Sharjah",
    intro: "Train on the gym floor and swim in the same visit. NFC has an indoor lap pool and a shallow round kids pool inside Al Mawja Tower, Al Taawun.",
    heroImage: "/media/swimming-pool/pool-nfc-wall.jpg",
    heroAlt: "Indoor swimming pool beside the NFC logo wall",
    highlightsTitle: "Swimming at NFC",
    highlights: [
      ...SWIMMING.map((s) => ({ icon: "Waves", title: s.name, text: s.schedule })),
      { icon: "Baby", title: "Kids pool", text: "A safe, shallow round pool for juniors." },
      { icon: "Lock", title: "Changing rooms", text: "Lockers, showers and poolside loungers." },
    ],
    photos: [
      { src: "/media/swimming-pool/lap-pool-wide.jpg", alt: "Indoor lap pool at NFC Sharjah" },
      { src: "/media/kids-pool/kids-round-pool.jpg", alt: "Round shallow kids pool at NFC" },
      { src: "/media/swimming-pool/loungers.jpg", alt: "Poolside loungers beside the windows" },
      { src: "/media/cardio-zone/treadmills-pool-view.jpg", alt: "Treadmills overlooking the swimming pool" },
    ],
    pricing: "membership",
    faqs: [
      { q: "Does NFC have a swimming pool?", a: "Yes — an indoor lap pool and a shallow kids pool inside the gym at Al Mawja Tower, Al Taawun, Sharjah." },
      { q: "What swimming programs do you offer?", a: SWIMMING.map((s) => `${s.name} (${s.schedule.toLowerCase()})`).join(", ") + "." },
      { q: "What are the pool timings?", a: "Pool schedules rotate — message our team on WhatsApp for this week's slots." },
      membershipFaq,
      locationFaq,
    ],
    whatsappText: "Hi NFC, I'd like to ask about the swimming pool and swimming programs.",
  },

  pt: {
    path: "/personal-training-sharjah",
    metaTitle: "Personal Trainer in Sharjah – Al Taawun",
    metaDescription: `Personal training in Al Taawun, Sharjah: 10 classes ${aed(pt10.price)}, 20 classes ${aed(pt20.price)}, 30 classes ${aed(pt30.price)}. Custom programs, technique work and progress reviews at NFC.`,
    eyebrow: "1-to-1 coaching · Al Taawun",
    h1: "Personal Trainer in Sharjah",
    intro: "One-to-one coaching at NFC: a program built around your goal, technique work and regular progress check-ins on a fully equipped gym floor.",
    heroImage: "/media/gym-floor/plate-loaded-benches.jpg",
    heroAlt: "Plate-loaded bench press stations at NFC",
    highlightsTitle: "How personal training works",
    highlights: [
      { icon: "Trophy", title: "Certified personal trainers", text: "Coaches who build your plan around your goal." },
      { icon: "Activity", title: "Custom program", text: "Fat loss, muscle gain or general fitness — planned for you." },
      { icon: "Dumbbell", title: "Technique work", text: "Learn to lift safely and get more from every session." },
      { icon: "Clock", title: "Progress reviews", text: "Regular check-ins so you can see the results." },
    ],
    photos: [
      { src: "/media/gym-floor/cable-station-wide.jpg", alt: "Cable station on the NFC gym floor" },
      { src: "/media/gym-floor/plate-loaded-windows.jpg", alt: "Plate-loaded strength machines by the windows" },
      { src: "/media/gym-floor/stronger-than-yesterday.jpg", alt: "Stronger Than Yesterday neon sign in the GX room" },
      { src: "/media/gym-floor/ski-erg-strength.jpg", alt: "SkiErg and strength machines at NFC" },
    ],
    pricing: "pt",
    faqs: [
      { q: "How much does a personal trainer cost at NFC?", a: `10 classes ${aed(pt10.price)}, 20 classes ${aed(pt20.price)} and 30 classes ${aed(pt30.price)}.` },
      { q: "How do I book personal training?", a: `Message our team on WhatsApp at ${BRAND.phone} and they'll match you with a coach.` },
      hoursFaq,
      locationFaq,
    ],
    whatsappText: "Hi NFC, I'd like to book personal training.",
  },

  kids: {
    path: "/kids-programs-sharjah",
    metaTitle: "Kids Programs in Sharjah – Swimming, Karate & Junior Fitness",
    metaDescription: `Kids swimming, karate academy, junior fitness and summer camp in Al Taawun, Sharjah. Kids membership ${aed(PRICING.kidsMonthly)}/month at Al Naslan Fitness Center.`,
    eyebrow: "Kids academy · Al Taawun",
    h1: "Kids Programs in Sharjah",
    intro: `Swimming, karate, junior fitness and a summer camp — all in one place at NFC, with a kids pool and a kids membership of ${aed(PRICING.kidsMonthly)} per month.`,
    heroImage: "/media/kids-pool/kids-round-pool.jpg",
    heroAlt: "Round shallow kids pool at NFC",
    highlightsTitle: "Programs for every age",
    highlights: KIDS.map((k) => ({ icon: k.icon, title: k.name, text: `Ages ${k.ages} · ${k.schedule}` })),
    photos: [
      { src: "/media/swimming-pool/pool-gym-view.jpg", alt: "Indoor swimming pool at NFC" },
      { src: "/media/gym-floor/gx-room.jpg", alt: "GX room studio at NFC" },
      { src: "/media/gym-floor/stronger-than-yesterday.jpg", alt: "Medicine balls in the GX room" },
      { src: "/media/swimming-pool/pool-lifebuoy.jpg", alt: "Lifebuoys beside the pool" },
    ],
    pricing: "kids",
    faqs: [
      { q: "How much is the kids membership?", a: `${aed(PRICING.kidsMonthly)} for 1 month. Families get ${aed(PRICING.familyDiscount)} off per person.` },
      { q: "What ages are the kids programs for?", a: KIDS.map((k) => `${k.name}: ages ${k.ages}`).join(". ") + "." },
      { q: "When is the summer camp?", a: `${KIDS.find((k) => k.name === "Summer Camp")?.schedule}. Message our team on WhatsApp to register.` },
      locationFaq,
    ],
    whatsappText: "Hi NFC, I'd like to register my child for a kids program.",
  },
};
