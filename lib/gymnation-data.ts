import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Award,
  BadgeCheck,
  Bike,
  Building2,
  Coffee,
  Dumbbell,
  HeartPulse,
  MapPin,
  Medal,
  ShieldCheck,
  Sparkles,
  Timer,
  Trophy,
  Users,
  Waves,
  Zap,
} from "lucide-react";

export type Emirate = "Abu Dhabi" | "Al Ain" | "Dubai" | "Sharjah";
export type BillingCycle = "monthly" | "annual";

export type GymLocation = {
  slug: string;
  name: string;
  emirate: Emirate;
  area: string;
  address: string;
  phone: string;
  image: string;
  alt: string;
  hours: string;
  amenities: string[];
  highlights: string[];
};

export type MembershipTier = {
  name: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  annualTotal: number;
  tagline: string;
  popular?: boolean;
  features: string[];
};

export type FitnessClass = {
  name: string;
  slug: string;
  category: string;
  description: string;
  intensity: "Low" | "Medium" | "High" | "Athlete";
  duration: string;
  image: string;
  alt: string;
};

export type Facility = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const brand = {
  name: "GymNation",
  accent: "#D7FF00",
  phone: "+971 4 248 0000",
  email: "hello@gymnation.ae",
  address: "GymNation UAE, Dubai, United Arab Emirates",
  instagram: "https://www.instagram.com/gymnation",
  tiktok: "https://www.tiktok.com/@gymnation",
  x: "https://x.com/gymnation",
  facebook: "https://www.facebook.com/gymnation",
  youtube: "https://www.youtube.com/@gymnation",
  linkedin: "https://www.linkedin.com/company/gymnation",
};

export const heroImage =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=85";

export const appImage =
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=85";

export const locations: GymLocation[] = [
  {
    slug: "abu-dhabi-reem-island",
    name: "GymNation Reem Island",
    emirate: "Abu Dhabi",
    area: "Reem Island",
    address: "Shams Boutik District, Al Reem Island, Abu Dhabi",
    phone: "+971 2 555 0140",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80",
    alt: "Large strength training floor with racks and free weights",
    hours: "Open 24/7",
    amenities: ["Free weights", "Ladies-only area", "Studios", "Spinning", "Recovery"],
    highlights: ["Waterfront community gym", "Three dedicated studios", "Ladies-only training zone"],
  },
  {
    slug: "abu-dhabi-khalifa-city",
    name: "GymNation Khalifa City",
    emirate: "Abu Dhabi",
    area: "Khalifa City",
    address: "Al Forsan Village, Khalifa City, Abu Dhabi",
    phone: "+971 2 555 0141",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
    alt: "Bright gym floor with cardio equipment and strength machines",
    hours: "Open 24/7",
    amenities: ["Cardio", "Free weights", "HYROX", "Cafe", "Parking"],
    highlights: ["Family-friendly community", "HYROX performance lane", "Easy basement parking"],
  },
  {
    slug: "abu-dhabi-mussafah",
    name: "GymNation Mussafah",
    emirate: "Abu Dhabi",
    area: "Mussafah",
    address: "Mussafah M-40, Abu Dhabi",
    phone: "+971 2 555 0142",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=80",
    alt: "Group fitness class training with kettlebells",
    hours: "Open 24/7",
    amenities: ["Functional turf", "Boxing", "Studios", "Free classes", "Showers"],
    highlights: ["Industrial-area convenience", "Big functional training turf", "After-shift class timetable"],
  },
  {
    slug: "abu-dhabi-yas-island",
    name: "GymNation Yas Island",
    emirate: "Abu Dhabi",
    area: "Yas Island",
    address: "Yas Bay Waterfront, Abu Dhabi",
    phone: "+971 2 555 0143",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern fitness studio prepared for a high energy class",
    hours: "Open 24/7",
    amenities: ["Reformer Pilates", "Yoga", "Recovery", "Cafe", "Premium lockers"],
    highlights: ["Destination club feel", "Recovery lounge", "Late-night waterfront sessions"],
  },
  {
    slug: "al-ain-al-jimi",
    name: "GymNation Al Jimi",
    emirate: "Al Ain",
    area: "Al Jimi",
    address: "Al Jimi Mall District, Al Ain",
    phone: "+971 3 555 0150",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    alt: "Athlete using battle ropes on a functional training floor",
    hours: "Open 24/7",
    amenities: ["Free weights", "Functional turf", "Studios", "Cardio", "Parking"],
    highlights: ["Mall-side access", "Large functional zone", "Beginner-friendly coaching floor"],
  },
  {
    slug: "al-ain-town-centre",
    name: "GymNation Al Ain Town Centre",
    emirate: "Al Ain",
    area: "Town Centre",
    address: "Othman Bin Affan Street, Central Al Ain",
    phone: "+971 3 555 0151",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    alt: "Woman training with dumbbells in a modern gym",
    hours: "Open 24/7",
    amenities: ["Ladies-only area", "Yoga", "Glute zone", "Free weights", "Showers"],
    highlights: ["Central location", "Dedicated glute zone", "Quiet morning classes"],
  },
  {
    slug: "al-ain-al-foah",
    name: "GymNation Al Foah",
    emirate: "Al Ain",
    area: "Al Foah",
    address: "Al Foah Community Centre, Al Ain",
    phone: "+971 3 555 0152",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    alt: "Rows of cardio machines in a dark modern gym",
    hours: "Open 24/7",
    amenities: ["Cardio", "Spinning", "Studios", "Cafe", "Parking"],
    highlights: ["Neighbourhood access", "Cardio theatre", "Weekend family trial slots"],
  },
  {
    slug: "dubai-al-quoz",
    name: "GymNation Al Quoz",
    emirate: "Dubai",
    area: "Al Quoz",
    address: "Al Quoz Industrial Area 3, Dubai",
    phone: "+971 4 555 0160",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1200&q=80",
    alt: "Athlete lifting a barbell in a serious strength gym",
    hours: "Open 24/7",
    amenities: ["Free weights", "HYROX", "Boxing", "Studios", "Recovery"],
    highlights: ["Flagship strength floor", "HYROX training club", "Largest free-weight zone"],
  },
  {
    slug: "dubai-mirdif",
    name: "GymNation Mirdif",
    emirate: "Dubai",
    area: "Mirdif",
    address: "Mirdif Avenue Mall, Dubai",
    phone: "+971 4 555 0161",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80",
    alt: "Dumbbells arranged on racks in a commercial gym",
    hours: "Open 24/7",
    amenities: ["Ladies-only area", "Reformer Pilates", "Yoga", "Cardio", "Cafe"],
    highlights: ["Mall convenience", "Reformer studio", "Ladies-only timetable"],
  },
  {
    slug: "dubai-jlt",
    name: "GymNation JLT",
    emirate: "Dubai",
    area: "Jumeirah Lake Towers",
    address: "Cluster X, Jumeirah Lake Towers, Dubai",
    phone: "+971 4 555 0162",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    alt: "Personal trainer coaching a member through a dumbbell exercise",
    hours: "Open 24/7",
    amenities: ["Personal training", "Cardio", "Studios", "Spinning", "Showers"],
    highlights: ["Metro-adjacent location", "PT performance hub", "Lunch-break express classes"],
  },
  {
    slug: "dubai-motor-city",
    name: "GymNation Motor City",
    emirate: "Dubai",
    area: "Motor City",
    address: "First Avenue Mall, Motor City, Dubai",
    phone: "+971 4 555 0163",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80",
    alt: "Spacious gym with treadmills and cable machines",
    hours: "Open 24/7",
    amenities: ["Cardio", "Free weights", "Glute zone", "Yoga", "Parking"],
    highlights: ["Community favourite", "Glute and lower-body zone", "Easy family parking"],
  },
  {
    slug: "dubai-silicon-oasis",
    name: "GymNation Silicon Oasis",
    emirate: "Dubai",
    area: "Dubai Silicon Oasis",
    address: "Cedre Shopping Centre, Dubai Silicon Oasis",
    phone: "+971 4 555 0164",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
    alt: "Athletes exercising on a gym floor during a conditioning session",
    hours: "Open 24/7",
    amenities: ["Functional turf", "BLITZ HIIT", "Studios", "Cardio", "Cafe"],
    highlights: ["Tech community hub", "Evening BLITZ HIIT timetable", "Workspace-friendly cafe"],
  },
  {
    slug: "sharjah-al-nahda",
    name: "GymNation Al Nahda",
    emirate: "Sharjah",
    area: "Al Nahda",
    address: "Sahara Centre District, Al Nahda, Sharjah",
    phone: "+971 6 555 0170",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=1200&q=80",
    alt: "Group workout class in a studio with energetic lighting",
    hours: "Open 24/7",
    amenities: ["Studios", "Zumba", "Yoga", "Ladies-only area", "Parking"],
    highlights: ["Dubai-Sharjah commuter access", "Dance and studio hub", "Late evening classes"],
  },
  {
    slug: "sharjah-muweilah",
    name: "GymNation Muweilah",
    emirate: "Sharjah",
    area: "Muweilah",
    address: "University City Road, Muweilah, Sharjah",
    phone: "+971 6 555 0171",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    alt: "Fitness class stretching on mats in a studio",
    hours: "Open 24/7",
    amenities: ["Student plans", "Yoga", "Cardio", "Free weights", "Cafe"],
    highlights: ["Student-friendly pricing", "University City access", "Study-break training hours"],
  },
  {
    slug: "sharjah-al-khan",
    name: "GymNation Al Khan",
    emirate: "Sharjah",
    area: "Al Khan",
    address: "Al Khan Corniche Street, Sharjah",
    phone: "+971 6 555 0172",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1200&q=80",
    alt: "Cable machines and benches on a premium gym floor",
    hours: "Open 24/7",
    amenities: ["Recovery", "Free weights", "Studios", "Cafe", "Showers"],
    highlights: ["Corniche-side club", "Sauna and steam recovery", "Premium locker rooms"],
  },
  {
    slug: "sharjah-rahmania",
    name: "GymNation Rahmania",
    emirate: "Sharjah",
    area: "Rahmania",
    address: "Rahmania Mall District, Sharjah",
    phone: "+971 6 555 0173",
    image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&w=1200&q=80",
    alt: "Boxing gloves hanging in a modern gym studio",
    hours: "Open 24/7",
    amenities: ["Boxing", "BLITZ HIIT", "Cardio", "Ladies-only area", "Parking"],
    highlights: ["Suburban flagship", "Boxing and HIIT studio", "Family trial weekends"],
  },
];

export const emirates: Emirate[] = ["Abu Dhabi", "Al Ain", "Dubai", "Sharjah"];

export const memberships: MembershipTier[] = [
  {
    name: "Limited",
    monthlyPrice: 99,
    annualMonthlyPrice: 79,
    annualTotal: 948,
    tagline: "Best for one-club training and simple routines.",
    features: [
      "Home gym access",
      "Off-peak training windows",
      "Gym floor and cardio zones",
      "Member app access",
      "AED 0 joining fee online",
    ],
  },
  {
    name: "National",
    monthlyPrice: 149,
    annualMonthlyPrice: 119,
    annualTotal: 1428,
    tagline: "The most flexible UAE-wide membership.",
    popular: true,
    features: [
      "All UAE GymNation locations",
      "24/7 gym access",
      "400+ free classes monthly",
      "Bring-a-friend passes",
      "Freeze membership anytime",
      "Free fitness induction",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: 199,
    annualMonthlyPrice: 159,
    annualTotal: 1908,
    tagline: "For classes, recovery and extra support.",
    features: [
      "Everything in National",
      "Reformer Pilates credits",
      "Recovery lounge access",
      "Priority class booking",
      "Monthly InBody check",
      "Discounts on PT and cafe",
    ],
  },
];

export const classes: FitnessClass[] = [
  {
    name: "LES MILLS BODYPUMP",
    slug: "les-mills-bodypump",
    category: "Strength",
    description: "Barbell-based total body training with big music, clear coaching and measurable progression.",
    intensity: "High",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?auto=format&fit=crop&w=1000&q=80",
    alt: "Group strength class lifting barbells together",
  },
  {
    name: "LES MILLS BODYCOMBAT",
    slug: "les-mills-bodycombat",
    category: "Cardio",
    description: "Martial arts inspired conditioning with punches, kicks and a serious endorphin finish.",
    intensity: "High",
    duration: "55 min",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1000&q=80",
    alt: "Boxer training with gloves under studio lights",
  },
  {
    name: "Yoga Flow",
    slug: "yoga-flow",
    category: "Mind-body",
    description: "Mobility, breath and balance for recovery days, beginners and regular movers.",
    intensity: "Low",
    duration: "50 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80",
    alt: "Yoga class holding poses on mats in a calm studio",
  },
  {
    name: "Zumba",
    slug: "zumba",
    category: "Dance",
    description: "A high-energy dance workout with Latin rhythms, simple moves and a packed studio feel.",
    intensity: "Medium",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=1000&q=80",
    alt: "Dance fitness class moving together in a bright studio",
  },
  {
    name: "Boxing",
    slug: "boxing",
    category: "Combat",
    description: "Bag rounds, footwork and conditioning that sharpen technique while burning serious calories.",
    intensity: "High",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?auto=format&fit=crop&w=1000&q=80",
    alt: "Boxing gloves and heavy bags in a training studio",
  },
  {
    name: "BLITZ HIIT",
    slug: "blitz-hiit",
    category: "HIIT",
    description: "Fast stations, sled pushes, rowers and strength intervals for the shortest route to sweaty.",
    intensity: "Athlete",
    duration: "35 min",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    alt: "Athlete doing battle rope intervals during a HIIT class",
  },
  {
    name: "Reformer Pilates",
    slug: "reformer-pilates",
    category: "Pilates",
    description: "Controlled strength and core work on reformers, coached in small-group studio sessions.",
    intensity: "Medium",
    duration: "50 min",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1000&q=80",
    alt: "Pilates studio with reformer machines and soft natural light",
  },
  {
    name: "Cycle Sprint",
    slug: "cycle-sprint",
    category: "Spinning",
    description: "Rhythm riding, interval climbs and sprint blocks inside an immersive cycling studio.",
    intensity: "High",
    duration: "40 min",
    image: "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?auto=format&fit=crop&w=1000&q=80",
    alt: "Indoor cycling studio with rows of bikes",
  },
  {
    name: "HYROX Engine",
    slug: "hyrox-engine",
    category: "Performance",
    description: "Race-style conditioning with running, rowing, ski erg, carries, sleds and wall balls.",
    intensity: "Athlete",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1584863231364-2edc166de576?auto=format&fit=crop&w=1000&q=80",
    alt: "Athlete training with a kettlebell in a performance gym",
  },
  {
    name: "Glute Lab",
    slug: "glute-lab",
    category: "Strength",
    description: "Lower-body strength, machines, bands and coaching built around technique and progression.",
    intensity: "Medium",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    alt: "Lower body strength area with squat racks and resistance equipment",
  },
];

export const facilities: Facility[] = [
  { name: "Free Weights", description: "Heavy dumbbells, racks, platforms and benches for serious lifting.", icon: Dumbbell },
  { name: "Studios", description: "Purpose-built class rooms for strength, dance, yoga and combat.", icon: Users },
  { name: "Spinning", description: "Immersive ride studios with climbs, sprints and rhythm classes.", icon: Bike },
  { name: "Yoga", description: "Quiet spaces for mobility, breathwork, recovery and flow.", icon: Sparkles },
  { name: "Reformer Pilates", description: "Small-group reformer sessions with expert coaching.", icon: Activity },
  { name: "Glute Zone", description: "Specialist machines and layouts for lower-body training.", icon: Zap },
  { name: "Cardio", description: "Treadmills, bikes, rowers, stair climbers and connected screens.", icon: HeartPulse },
  { name: "Ladies-Only", description: "Private training areas and women-led class timetables.", icon: ShieldCheck },
  { name: "HYROX", description: "Race-style turf, sleds, ergs and functional training lanes.", icon: Trophy },
  { name: "Recovery", description: "Ice bath, sauna and steam rooms at selected clubs.", icon: Waves },
  { name: "Cafe", description: "Protein shakes, pre-workout coffee and grab-and-go meals.", icon: Coffee },
];

export const whyGymNation = [
  {
    title: "Affordable Premium",
    description: "Big-club facilities, flexible contracts and transparent UAE pricing from AED 99.",
    icon: BadgeCheck,
  },
  {
    title: "Open 24/7",
    description: "Train before work, after school runs or at midnight. Your schedule gets the final say.",
    icon: Timer,
  },
  {
    title: "UAE-Wide Access",
    description: "Pick one home club or unlock every GymNation location across the Emirates.",
    icon: MapPin,
  },
  {
    title: "Classes Included",
    description: "LES MILLS, HIIT, yoga, cycling, boxing and Pilates built into eligible memberships.",
    icon: Users,
  },
  {
    title: "Serious Kit",
    description: "500+ machines, performance lanes, glute zones and spacious free-weight floors.",
    icon: Dumbbell,
  },
  {
    title: "Support That Sticks",
    description: "Inductions, PT consultations, progress scans and an app that keeps the habit moving.",
    icon: HeartPulse,
  },
];

export const stats = [
  { value: 47, suffix: "", label: "Locations" },
  { value: 200000, suffix: "+", label: "Members" },
  { value: "24/7", suffix: "", label: "Open" },
  { value: 400, suffix: "+", label: "Free Classes" },
  { value: 500, suffix: "+", label: "Machines" },
  { value: "Pay", suffix: "", label: "Monthly" },
];

export const awards = [
  { label: "95,000+ 5-star Google reviews", icon: Award },
  { label: "Tripadvisor community favourite", icon: Medal },
  { label: "UAE fitness value award", icon: Trophy },
  { label: "Loved by 200,000+ members", icon: Users },
];

export const faqs = [
  {
    question: "Can I try GymNation before joining?",
    answer:
      "Yes. Choose your city, club and email on the free trial form. The demo form validates your details and shows a confirmation instantly.",
  },
  {
    question: "Are memberships really monthly?",
    answer:
      "The pricing page includes monthly and annual options. Monthly plans are shown as AED per month, while annual shows the lower monthly equivalent and annual total.",
  },
  {
    question: "Which clubs are open 24/7?",
    answer:
      "All seeded GymNation UAE clubs in this demo are listed as open 24/7. Individual amenities vary by club and are shown on each location page.",
  },
  {
    question: "Are classes included?",
    answer:
      "Many group classes are included on National and Premium memberships, including LES MILLS, yoga, cycling, boxing and BLITZ HIIT.",
  },
  {
    question: "Do you have ladies-only facilities?",
    answer:
      "Selected clubs include ladies-only areas and dedicated women-led class timetables. Use the location cards to check club amenities.",
  },
  {
    question: "Is personal training available?",
    answer:
      "Yes. The personal training page includes goal options and a consultation form that validates and shows a success state locally.",
  },
  {
    question: "Can I freeze or change my plan?",
    answer:
      "The demo plans include freeze and upgrade messaging on eligible tiers. Real contract terms should be replaced with the official commercial policy.",
  },
  {
    question: "Are prices and locations final?",
    answer:
      "They are realistic placeholder data for the website build. Replace them with official GymNation pricing, addresses and legal copy before launch.",
  },
];

export const trainingGoals = [
  "Fat loss",
  "Muscle gain",
  "Strength",
  "Mobility",
  "Race prep",
  "Confidence",
];

export const personalTrainingPrograms = [
  {
    title: "Starter Reset",
    description: "Four sessions to learn the floor, set targets and build a routine you can repeat.",
    icon: Sparkles,
  },
  {
    title: "Body Recomp",
    description: "Strength, conditioning and nutrition checkpoints for visible change over 12 weeks.",
    icon: HeartPulse,
  },
  {
    title: "Performance Build",
    description: "Structured progressions for stronger lifts, better conditioning and race-specific output.",
    icon: Trophy,
  },
  {
    title: "Technique Lab",
    description: "Focused coaching on squats, deadlifts, presses and safe machine setup.",
    icon: Dumbbell,
  },
];

export const navItems = [
  { href: "/locations", label: "Locations" },
  { href: "/memberships", label: "Memberships" },
  { href: "/classes", label: "Classes" },
  { href: "/personal-training", label: "Personal Training" },
  { href: "/about", label: "About" },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function locationsByEmirate(emirate: Emirate) {
  return locations.filter((location) => location.emirate === emirate);
}

export function featuredLocations() {
  return locations.filter((location) =>
    ["dubai-al-quoz", "abu-dhabi-reem-island", "al-ain-al-jimi", "sharjah-al-nahda"].includes(location.slug)
  );
}
