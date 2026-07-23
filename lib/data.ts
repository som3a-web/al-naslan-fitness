// ===========================================================================
// Al Naslan Fitness Center (NFC) — central content source
// Sharjah, UAE · alnfc.com · @al_naslan_fitness_center
// ===========================================================================

export const BRAND = {
  name: "Al Naslan Fitness Center",
  short: "NFC",
  tagline: "Forge Your Strongest Self",
  location: "Sharjah, United Arab Emirates",
  phone: "+971 52 899 8738",
  whatsapp: "+971528998738",
  whatsappLink: "https://wa.me/971528998738",
  instagram: "https://www.instagram.com/al_naslan_fitness_center",
  email: "nfcsharjah@gmail.com",
  website: "alnfc.com",
  currency: "AED",
};

export const STATS = [
  { label: "Active Members", value: 2480, suffix: "+" },
  { label: "Classes This Week", value: 96, suffix: "" },
  { label: "Expert Trainers", value: 12, suffix: "" },
  { label: "Satisfaction Rate", value: 98, suffix: "%" },
];

export const ECOSYSTEM_STATS = [
  { label: "Total Weight Lost by Members", value: "14,200 kg" },
  { label: "Personal Records Achieved", value: "8,640" },
  { label: "PT Sessions Delivered", value: "31,500" },
  { label: "Community Growth (YoY)", value: "+47%" },
];

export const MEMBERSHIPS = [
  {
    name: "Monthly",
    price: 249,
    period: "/ month",
    note: "Flexible, no commitment",
    popular: false,
    features: [
      "Full gym & cardio access",
      "4 group classes / month",
      "Locker & shower access",
      "InBody assessment (1x)",
      "Progress review included",
    ],
  },
  {
    name: "Quarterly",
    price: 629,
    period: "/ 3 months",
    note: "Most chosen — save 16%",
    popular: true,
    features: [
      "Everything in Monthly",
      "Unlimited group classes",
      "2 PT sessions included",
      "Pool & recovery zone access",
      "Monthly InBody analytics",
      "Nutrition plan starter",
    ],
  },
  {
    name: "Annual",
    price: 1990,
    period: "/ year",
    note: "Best value — save 33%",
    popular: false,
    features: [
      "Everything in Quarterly",
      "8 PT sessions included",
      "Full nutrition program",
      "Kids pool program (1 child)",
      "Priority class access",
      "Guest passes (4 / year)",
    ],
  },
];

export const TRAINERS = [
  {
    name: "Khalid Al Naslan",
    role: "Head Coach · Strength & Conditioning",
    exp: "12 yrs",
    specialty: "Muscle Building",
    certs: ["NASM-CPT", "Olympic Lifting L2"],
    rating: 5.0,
    img: "/media/gym-still-3.jpg",
  },
  {
    name: "Sara Mansour",
    role: "Weight-Loss & Functional Coach",
    exp: "8 yrs",
    specialty: "Fat Loss",
    certs: ["ACE-CPT", "Nutrition L3"],
    rating: 4.9,
    img: "/media/gym-still-2.jpg",
  },
  {
    name: "Omar Haddad",
    role: "Athletic Performance Coach",
    exp: "10 yrs",
    specialty: "Performance",
    certs: ["CSCS", "Boxing Coach"],
    rating: 5.0,
    img: "/media/gym-still-4.jpg",
  },
];

export const CLASSES = [
  {
    name: "HIIT Burn",
    focus: "Conditioning",
    time: "06:30",
    duration: "45m",
    level: "All levels",
    icon: "Flame",
    trainer: "Sara Mansour",
    occupancy: 85,
    spots: 4,
    days: ["Mon", "Wed", "Fri"],
  },
  {
    name: "CrossFit WOD",
    focus: "Functional Strength",
    time: "08:00",
    duration: "60m",
    level: "Advanced",
    icon: "Dumbbell",
    trainer: "Omar Haddad",
    occupancy: 72,
    spots: 7,
    days: ["Tue", "Thu", "Sat"],
  },
  {
    name: "Strength Lab",
    focus: "Progressive Lifting",
    time: "17:30",
    duration: "60m",
    level: "Intermediate",
    icon: "Activity",
    trainer: "Khalid Al Naslan",
    occupancy: 60,
    spots: 10,
    days: ["Mon", "Tue", "Thu", "Sun"],
  },
  {
    name: "Power Yoga",
    focus: "Mobility",
    time: "19:00",
    duration: "50m",
    level: "All levels",
    icon: "Heart",
    trainer: "Layla Karim",
    occupancy: 20,
    spots: 20,
    days: ["Mon", "Wed", "Sat"],
  },
  {
    name: "Boxing Conditioning",
    focus: "Cardio Boxing",
    time: "20:00",
    duration: "55m",
    level: "Intermediate",
    icon: "Zap",
    trainer: "Omar Haddad",
    occupancy: 78,
    spots: 6,
    days: ["Tue", "Fri", "Sun"],
  },
  {
    name: "Mobility & Recovery",
    focus: "Recovery",
    time: "21:00",
    duration: "40m",
    level: "All levels",
    icon: "Waves",
    trainer: "Sara Mansour",
    occupancy: 45,
    spots: 14,
    days: ["Wed", "Thu", "Sun"],
  },
];

export const FACILITIES = [
  { name: "Main Gym Floor", desc: "3,000+ sq ft of premium Technogym equipment", icon: "Dumbbell", tag: "Flagship" },
  { name: "Cardio Zone", desc: "Smart treadmills, bikes & climbers with live metrics", icon: "Activity", tag: "Smart" },
  { name: "Strength Zone", desc: "Free weights, racks & Olympic platforms", icon: "Zap", tag: "Heavy" },
  { name: "Functional Arena", desc: "Turf track, rigs, sleds & battle ropes", icon: "Flame", tag: "Hybrid" },
  { name: "Swimming Pool", desc: "Temperature-controlled 25m lap pool", icon: "Waves", tag: "Aqua" },
  { name: "Kids Pool", desc: "Safe, shallow training pool for juniors", icon: "Baby", tag: "Family" },
  { name: "Recovery Lounge", desc: "Sauna, ice bath & massage recovery", icon: "Heart", tag: "Recover" },
  { name: "Premium Lockers", desc: "Spa-grade showers & private changing", icon: "Lock", tag: "Comfort" },
];

export const PROGRAMS = [
  {
    name: "Strength & Bodybuilding",
    desc: "Structured training for muscle, strength and confidence on the gym floor.",
    icon: "Dumbbell",
    tag: "Gym Floor",
    cta: "Build strength",
  },
  {
    name: "Fat Loss & Conditioning",
    desc: "High-energy classes, cardio coaching and simple tracking that keeps members consistent.",
    icon: "Flame",
    tag: "Transformation",
    cta: "Start cutting",
  },
  {
    name: "Personal Training",
    desc: "One-to-one coaching with goal reviews, technique work and progress check-ins.",
    icon: "Activity",
    tag: "Coaching",
    cta: "Meet a coach",
  },
  {
    name: "Swimming Programs",
    desc: "Adult lap sessions, private coaching, aqua fitness and safe kids swimming pathways.",
    icon: "Waves",
    tag: "Pool",
    cta: "Enter the pool",
  },
  {
    name: "Kids Academy",
    desc: "Swimming, karate, junior fitness and seasonal camps built for active families.",
    icon: "Baby",
    tag: "Family",
    cta: "For the kids",
  },
  {
    name: "Nutrition & Cafe",
    desc: "Healthy meals, protein snacks and nutrition support connected to real training goals.",
    icon: "Heart",
    tag: "Fuel",
    cta: "Fuel the goal",
  },
];

export const NUTRITION = [
  { name: "Lean & Cut", goal: "Weight Loss", kcal: "1,500–1,800", meals: "3 meals + 1 snack", price: 690, color: "#FF6A00" },
  { name: "Build & Bulk", goal: "Muscle Gain", kcal: "2,600–3,000", meals: "5 meals", price: 890, color: "#E0301E" },
  { name: "Balanced Life", goal: "Healthy Lifestyle", kcal: "2,000–2,300", meals: "3 meals + 2 snacks", price: 590, color: "#FFB020" },
];

export const SWIMMING = [
  { name: "Adult Lap Membership", schedule: "Daily · 06:00–10:00 / 16:00–22:00", slots: 12, price: 199 },
  { name: "Kids Learn-to-Swim", schedule: "Mon/Wed/Sat · 16:00–18:00", slots: 6, price: 249 },
  { name: "Private Coaching", schedule: "By appointment", slots: 4, price: 120 },
  { name: "Aqua Fitness (Group)", schedule: "Tue/Thu · 19:00", slots: 10, price: 89 },
];

export const KIDS = [
  { name: "Kids Swimming", ages: "5–12", schedule: "Mon/Wed/Sat", capacity: 78, icon: "Waves" },
  { name: "Karate Academy", ages: "6–14", schedule: "Tue/Thu/Sun", capacity: 64, icon: "Zap" },
  { name: "Junior Fitness", ages: "8–15", schedule: "Sat/Sun", capacity: 50, icon: "Activity" },
  { name: "Summer Camp", ages: "5–14", schedule: "Jul–Aug · Daily", capacity: 90, icon: "Flame" },
];

export const PARTNERS = [
  "Optimum Nutrition", "MyProtein", "Technogym", "Fitness First Supplements",
  "Sharjah Health Clinic", "Hydra Sports", "PowerFuel Cafe", "Apex Physio",
];

export const TESTIMONIALS = [
  {
    name: "Ahmed R.",
    role: "Member · 14 months",
    rating: 5,
    text: "Lost 22kg with consistent InBody tracking and clear progress reviews. The weekly structure kept me accountable from day one.",
    metric: "-22 kg",
  },
  {
    name: "Layla K.",
    role: "Member · 9 months",
    rating: 5,
    text: "The class schedule, body analytics and nutrition support made it easy to stay consistent. It feels premium without being complicated.",
    metric: "+6 kg muscle",
  },
  {
    name: "Marcus D.",
    role: "Member · 2 years",
    rating: 5,
    text: "From the pool to the strength zone, every facility feels premium. The training environment helped me hit a 180kg deadlift PR.",
    metric: "180 kg PR",
  },
  {
    name: "Fatima A.",
    role: "Member · 7 months",
    rating: 5,
    text: "My kids do swimming and karate while I train. One membership, the whole family, and everything is easy to arrange.",
    metric: "Family plan",
  },
];

export const TRANSFORMATIONS = [
  { name: "Yousef", weeks: 16, before: "98 kg", after: "78 kg", goal: "Fat Loss", change: "-20 kg" },
  { name: "Nadia", weeks: 24, before: "54 kg", after: "61 kg", goal: "Muscle Gain", change: "+7 kg lean" },
  { name: "Hassan", weeks: 20, before: "112 kg", after: "89 kg", goal: "Transformation", change: "-23 kg" },
];

export const FAQS = [
  { q: "How do I start a free trial?", a: "Tap “Start Free Trial”, fill the quick form, and our team confirms your session on WhatsApp within minutes. Your first visit includes a free InBody scan." },
  { q: "What are the gym timings?", a: "Main gym: 6:00 AM – 12:00 AM daily. Pool: 6:00–10:00 AM and 4:00–10:00 PM. Ladies-only hours are available — contact the team for the latest schedule." },
  { q: "Do you have family & kids programs?", a: "Yes — kids swimming, a karate academy, junior fitness, and summer camps, plus family membership bundles." },
  { q: "Which membership is best for me?", a: "Start with your goal, schedule and budget. Quarterly is our most popular for the best balance of value and flexibility." },
];

// Member dashboard demo data
export const PROGRESS_WEIGHT = [
  { m: "Jan", weight: 92, fat: 28 },
  { m: "Feb", weight: 89, fat: 26 },
  { m: "Mar", weight: 86, fat: 24 },
  { m: "Apr", weight: 83, fat: 22 },
  { m: "May", weight: 81, fat: 20 },
  { m: "Jun", weight: 78, fat: 18 },
];

export const BODY_COMPOSITION = [
  { name: "Muscle", value: 42 },
  { name: "Fat", value: 18 },
  { name: "Water", value: 32 },
  { name: "Bone", value: 8 },
];

export const FITNESS_RADAR = [
  { metric: "Strength", value: 82 },
  { metric: "Endurance", value: 74 },
  { metric: "Mobility", value: 68 },
  { metric: "Power", value: 79 },
  { metric: "Cardio", value: 71 },
  { metric: "Balance", value: 66 },
];

export const ATTENDANCE = [
  { d: "Mon", sessions: 1 }, { d: "Tue", sessions: 1 }, { d: "Wed", sessions: 0 },
  { d: "Thu", sessions: 1 }, { d: "Fri", sessions: 1 }, { d: "Sat", sessions: 1 }, { d: "Sun", sessions: 0 },
];

// Gym admin dashboard demo data
export const GYM_GROWTH = [
  { m: "Jan", members: 1840, pt: 380 },
  { m: "Feb", members: 1990, pt: 410 },
  { m: "Mar", members: 2120, pt: 460 },
  { m: "Apr", members: 2250, pt: 520 },
  { m: "May", members: 2380, pt: 560 },
  { m: "Jun", members: 2480, pt: 610 },
];

export const POOL_USAGE = [
  { d: "Mon", usage: 62 }, { d: "Tue", usage: 70 }, { d: "Wed", usage: 55 },
  { d: "Thu", usage: 80 }, { d: "Fri", usage: 95 }, { d: "Sat", usage: 88 }, { d: "Sun", usage: 48 },
];

// ===========================================================================
// NFC Café — the gym's own in-house healthy kitchen (not a delivery partner)
// ===========================================================================
export const CAFE_CATEGORIES = ["All", "High-Protein", "Smoothies", "Pre / Post", "Snacks", "Coffee"];
export const CAFE_GOALS = ["All", "Fat Loss", "Muscle Gain", "Lean Maintenance"];

export type CafeItem = {
  name: string;
  desc: string;
  cat: string;
  goals: string[];
  kcal: number;
  p: number; // protein g
  c: number; // carbs g
  f: number; // fat g
  price: number; // AED
  popular?: boolean;
  emoji: string;
};

export const CAFE_MENU: CafeItem[] = [
  { name: "Dragon Protein Bowl", desc: "Grilled chicken, quinoa, avocado & greens", cat: "High-Protein", goals: ["Muscle Gain", "Lean Maintenance"], kcal: 520, p: 48, c: 42, f: 16, price: 34, popular: true, emoji: "🐉" },
  { name: "Lean Beef Power Plate", desc: "Lean beef, sweet potato, steamed broccoli", cat: "High-Protein", goals: ["Muscle Gain"], kcal: 610, p: 52, c: 50, f: 18, price: 38, emoji: "🥩" },
  { name: "Grilled Salmon & Greens", desc: "Omega-rich salmon, asparagus, side salad", cat: "High-Protein", goals: ["Fat Loss", "Lean Maintenance"], kcal: 440, p: 40, c: 18, f: 22, price: 42, emoji: "🐟" },
  { name: "Falafel Protein Wrap", desc: "Baked falafel, hummus, whole-wheat wrap", cat: "High-Protein", goals: ["Lean Maintenance"], kcal: 480, p: 26, c: 56, f: 16, price: 26, emoji: "🌯" },
  { name: "Ember Mass Gainer", desc: "Banana, oats, peanut butter, whey, dates", cat: "Smoothies", goals: ["Muscle Gain"], kcal: 560, p: 40, c: 70, f: 14, price: 28, popular: true, emoji: "🥤" },
  { name: "Green Cut Smoothie", desc: "Spinach, pineapple, cucumber, ginger, mint", cat: "Smoothies", goals: ["Fat Loss"], kcal: 180, p: 6, c: 34, f: 2, price: 22, emoji: "🥬" },
  { name: "Berry Recovery Shake", desc: "Mixed berries, Greek yogurt, whey, honey", cat: "Smoothies", goals: ["Lean Maintenance", "Muscle Gain"], kcal: 320, p: 30, c: 38, f: 5, price: 25, emoji: "🫐" },
  { name: "Pre-Workout Espresso Bites", desc: "Date & oat bites with a caffeine kick", cat: "Pre / Post", goals: ["Fat Loss", "Muscle Gain"], kcal: 210, p: 8, c: 30, f: 7, price: 18, emoji: "⚡" },
  { name: "Post-Workout Recovery Box", desc: "Egg whites, rice, chicken — fast refuel", cat: "Pre / Post", goals: ["Muscle Gain", "Lean Maintenance"], kcal: 450, p: 44, c: 48, f: 8, price: 30, popular: true, emoji: "🔥" },
  { name: "Protein Energy Balls", desc: "No-bake oats, whey, cocoa & almond", cat: "Snacks", goals: ["Lean Maintenance", "Muscle Gain"], kcal: 160, p: 12, c: 16, f: 6, price: 15, emoji: "🍫" },
  { name: "Greek Yogurt & Granola", desc: "High-protein yogurt, berries, honey granola", cat: "Snacks", goals: ["Fat Loss", "Lean Maintenance"], kcal: 240, p: 20, c: 28, f: 5, price: 19, emoji: "🍯" },
  { name: "NFC Black Coffee", desc: "Single-origin espresso, zero sugar", cat: "Coffee", goals: ["Fat Loss", "Lean Maintenance"], kcal: 5, p: 0, c: 1, f: 0, price: 12, emoji: "☕" },
  { name: "Protein Iced Latte", desc: "Cold brew blended with vanilla whey", cat: "Coffee", goals: ["Muscle Gain", "Lean Maintenance"], kcal: 180, p: 25, c: 14, f: 3, price: 24, popular: true, emoji: "🧊" },
];

export const CAFE_PERKS = [
  { title: "Order ahead", desc: "Order before your session, pick up after — ready when you are.", icon: "Clock" },
  { title: "Macro-synced", desc: "Every order logs calories & macros to your member dashboard.", icon: "Activity" },
  { title: "Earn reward points", desc: "Café purchases add loyalty points you can redeem for shakes & PT.", icon: "Trophy" },
  { title: "Goal-matched", desc: "Clear meal tags help you pick the right option for your training goal.", icon: "Flame" },
];
