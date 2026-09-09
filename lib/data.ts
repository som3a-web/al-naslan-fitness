// ===========================================================================
// Al Naslan Fitness Center (NFC) — central content source
// Al Taawun, Sharjah, UAE · naslanfitnesscenter.com · @al_naslan_fitness_center
// ===========================================================================

export const BRAND = {
  name: "Al Naslan Fitness Center",
  short: "NFC",
  tagline: "Forge Your Strongest Self",
  location: "Al Taawun, Sharjah, United Arab Emirates",
  phone: "+971 52 899 8738",
  whatsapp: "+971528998738",
  whatsappLink: "https://wa.me/971528998738",
  instagram: "https://www.instagram.com/al_naslan_fitness_center",
  email: "nfcsharjah@gmail.com",
  website: "naslanfitnesscenter.com",
  currency: "AED",
  address: "Al Mawja Tower - 1, Al Taawun Street, Al Khan, Sharjah, UAE",
  addressAr: "برج الموجة - 1، شارع التعاون - الخان - إمارة الشارقة",
  plusCode: "898G+PFC",
  mapEmbed: "https://www.google.com/maps?q=898G%2BPFC+Sharjah&output=embed",
  mapDirections: "https://www.google.com/maps/dir/?api=1&destination=898G%2BPFC+Sharjah",
};

// ===========================================================================
// Pricing — official NFC rates, effective July 1st, 2026
// ===========================================================================

export type TierKey = "internal" | "external";

export type AdultPlan = { duration: string; price: number; note?: string; best?: boolean };
export type PTPackage = { classes: number; price: number; popular?: boolean };

export const PRICING: {
  effectiveFrom: string;
  maleTiming: string;
  dailyPass: number;
  familyDiscount: number;
  tiers: Record<
    TierKey,
    { label: string; adult: AdultPlan[]; pt: PTPackage[]; kidsMonthly: number }
  >;
} = {
  effectiveFrom: "July 1st, 2026",
  maleTiming: "6:00 AM – 12:00 AM",
  dailyPass: 50,
  familyDiscount: 50,
  tiers: {
    internal: {
      label: "Internal",
      adult: [
        { duration: "1 Month", price: 350 },
        { duration: "3 Months", price: 900 },
        { duration: "6 Months", price: 1700 },
        { duration: "1 Year", price: 3000, note: "Best value", best: true },
      ],
      pt: [
        { classes: 10, price: 1200 },
        { classes: 20, price: 1950, popular: true },
        { classes: 30, price: 2500 },
      ],
      kidsMonthly: 250,
    },
    external: {
      label: "External",
      adult: [
        { duration: "1 Month", price: 400 },
        { duration: "3 Months", price: 1050 },
        { duration: "6 Months", price: 2000 },
        { duration: "1 Year", price: 3400, note: "Best value", best: true },
      ],
      pt: [
        { classes: 10, price: 1400 },
        { classes: 20, price: 2400, popular: true },
        { classes: 30, price: 3000 },
      ],
      kidsMonthly: 300,
    },
  },
};

export const MEMBERSHIP_FEATURES = [
  "Full gym floor & cardio zone access",
  "Locker & shower access",
  "Goal consultation with our team",
  "Flexible upgrade to personal training",
];

export const FACILITIES = [
  { name: "Main Gym Floor", desc: "A spacious floor of premium strength machines & equipment", icon: "Dumbbell", tag: "Flagship" },
  { name: "Cardio Zone", desc: "Treadmills, bikes & climbers in a dedicated cardio studio", icon: "Activity", tag: "Cardio" },
  { name: "Swimming Pool", desc: "Indoor lap pool for training and aqua fitness", icon: "Waves", tag: "Aqua" },
  { name: "Kids Pool", desc: "Safe, shallow training pool for juniors", icon: "Baby", tag: "Family" },
  { name: "Premium Lockers", desc: "Clean showers & private changing rooms", icon: "Lock", tag: "Comfort" },
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
    desc: "High-energy classes and cardio coaching that keep members consistent.",
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
  { name: "Lean & Cut", goal: "Weight Loss", kcal: "1,500–1,800", meals: "3 meals + 1 snack", color: "#FF6A00" },
  { name: "Build & Bulk", goal: "Muscle Gain", kcal: "2,600–3,000", meals: "5 meals", color: "#E0301E" },
  { name: "Balanced Life", goal: "Healthy Lifestyle", kcal: "2,000–2,300", meals: "3 meals + 2 snacks", color: "#FFB020" },
];

export const SWIMMING = [
  { name: "Adult Lap Sessions", schedule: "Daily sessions" },
  { name: "Kids Learn-to-Swim", schedule: "Weekly group classes" },
  { name: "Private Coaching", schedule: "By appointment" },
  { name: "Aqua Fitness (Group)", schedule: "Weekly group sessions" },
];

export const KIDS = [
  { name: "Kids Swimming", ages: "5–12", schedule: "Weekly classes", icon: "Waves" },
  { name: "Karate Academy", ages: "6–14", schedule: "Weekly classes", icon: "Zap" },
  { name: "Junior Fitness", ages: "8–15", schedule: "Weekend sessions", icon: "Activity" },
  { name: "Summer Camp", ages: "5–14", schedule: "Jul–Aug · Daily", icon: "Flame" },
];

export const PARTNERS = ["Matrix", "Naslan Cafe", "C5", "Al Mawja Tower"];

export const FAQS = [
  { q: "How do I start a free trial?", a: "Tap “Start Free Trial”, fill the quick form, and our team confirms your session on WhatsApp." },
  { q: "What are the gym timings?", a: "Men's timing: 6:00 AM – 12:00 AM daily. For ladies and pool schedules, contact our team on WhatsApp for the latest slots." },
  { q: "How much is a membership?", a: "Adult memberships start from AED 350/month (Internal) or AED 400/month (External), with big savings on 3, 6 and 12-month plans. A day pass is AED 50, and families get AED 50 off per person." },
  { q: "Do you have family & kids programs?", a: "Yes — kids swimming, a karate academy, junior fitness and summer camps. Kids memberships start from AED 250/month, and family members get AED 50 off per person." },
];

// ===========================================================================
// Naslan Café — official menu (transcribed from the printed café menu)
// Every item, description and price below comes from the source menu.
// Items with `price: null` have no price printed in the source.
// ===========================================================================

export type CafeItem = {
  en: string;
  ar: string;
  desc?: string;
  descAr?: string;
  note?: string;
  noteAr?: string;
  price: number | null;
};

export type CafeGroup = {
  id: string;
  filter: string;
  en: string;
  ar: string;
  note?: string;
  noteAr?: string;
  items: CafeItem[];
};

export const CAFE_FILTERS = ["All", "Hot Drinks", "Cold Drinks", "Smoothies & Juices", "Protein & Vegan", "Food"];

export const CAFE_MENU: CafeGroup[] = [
  {
    id: "hot-drinks",
    filter: "Hot Drinks",
    en: "Hot Drinks",
    ar: "المشروبات الساخنة",
    items: [
      { en: "Espresso", ar: "إسبريسو", price: 8 },
      { en: "Double Espresso", ar: "دبل إسبريسو", price: 10 },
      { en: "Cortado", ar: "كورتادو", price: 10 },
      { en: "Piccolo", ar: "بيكولو", price: 10 },
      { en: "Americano", ar: "أمريكانو", price: 12 },
      { en: "Caffè Latte", ar: "كافيه لاتيه", price: 12 },
      { en: "Cappuccino", ar: "كابتشينو", price: 12 },
      { en: "Macchiato", ar: "ماكياتو", price: 12 },
      { en: "Hot Chocolate", ar: "شوكولاتة ساخنة", price: 12 },
      { en: "Turkish Coffee", ar: "قهوة تركية", price: 12 },
      { en: "Mochaccino", ar: "موكاتشينو", price: 15 },
      { en: "Matcha", ar: "ماتشا", price: 15 },
      { en: "Spanish Latte", ar: "سبانش لاتيه", price: 15 },
      {
        en: "Flavour Add-ons",
        ar: "إضافات النكهات",
        desc: "Vanilla, Caramel or Hazelnut",
        descAr: "فانيلا، كراميل أو بندق",
        price: 2,
      },
      {
        en: "Milk Options",
        ar: "خيارات الحليب",
        desc: "Almond, Soya, Low-Fat or Skimmed Milk",
        descAr: "حليب اللوز، حليب الصويا، الحليب قليل الدسم أو الحليب منزوع الدسم",
        price: null,
      },
    ],
  },
  {
    id: "tea",
    filter: "Hot Drinks",
    en: "Tea Selection",
    ar: "تشكيلة الشاي",
    items: [
      { en: "Green Tea", ar: "شاي أخضر", price: 15 },
      { en: "Black Tea", ar: "شاي أسود", price: 15 },
      { en: "Peppermint Tea", ar: "شاي بالنعناع", price: 15 },
      { en: "Naslan Special Tea", ar: "شاي نسلان الخاص", price: 20 },
    ],
  },
  {
    id: "cold-drinks",
    filter: "Cold Drinks",
    en: "Cold Drinks",
    ar: "المشروبات الباردة",
    items: [
      { en: "Iced Black Coffee", ar: "قهوة سوداء مثلجة", price: 12 },
      { en: "Iced Latte", ar: "لاتيه مثلج", price: 12 },
      { en: "Iced Macchiato", ar: "ماكياتو مثلج", price: 13 },
      { en: "Affogato", ar: "أفوغاتو", price: 15 },
      { en: "Hibiscus", ar: "كركديه", price: 15 },
      { en: "Iced Spanish Latte", ar: "سبانش لاتيه مثلج", price: 15 },
      { en: "Iced Matcha", ar: "ماتشا مثلجة", price: 15 },
    ],
  },
  {
    id: "milkshakes",
    filter: "Cold Drinks",
    en: "Milkshakes",
    ar: "الميلك شيك",
    items: [
      { en: "Vanilla Milkshake", ar: "ميلك شيك بالفانيلا", price: 14 },
      { en: "Chocolate Milkshake", ar: "ميلك شيك بالشوكولاتة", price: 14 },
      { en: "Strawberry Milkshake", ar: "ميلك شيك بالفراولة", price: 14 },
      { en: "Mango Milkshake", ar: "ميلك شيك بالمانجو", price: 14 },
      { en: "Avocado Milkshake", ar: "ميلك شيك بالأفوكادو", price: 14 },
      { en: "Coconut Milkshake", ar: "ميلك شيك بجوز الهند", price: 14 },
    ],
  },
  {
    id: "smoothies",
    filter: "Smoothies & Juices",
    en: "Core Smoothies",
    ar: "السموذي الصحي",
    note: "All Smoothies AED 20",
    noteAr: "جميع أنواع السموذي بسعر 20 درهماً",
    items: [
      { en: "Acai Kick", ar: "أساي كيك", desc: "Acai, Blueberry, Mango and Banana", descAr: "اساي، توت أزرق، مانجو وموز", price: 20 },
      { en: "Green Machine", ar: "جرين ماشين", desc: "Spinach, Celery, Broccoli, Mango, Banana and Pineapple", descAr: "سبانخ، كرفس، بروكلي، مانجو، موز وأناناس", price: 20 },
      { en: "Tropi Colada", ar: "تروبي كولادا", desc: "Banana, Pineapple and Coconut", descAr: "موز، أناناس وجوز الهند", price: 20 },
      { en: "Mango Paradise", ar: "مانجو باراديس", desc: "Mango, Pineapple and Passion Fruit", descAr: "مانجو، أناناس، وفاكهة الباشن", price: 20 },
      { en: "Strawberry Split", ar: "فراولة سبليت", desc: "Strawberry, Banana, Cherry and Papaya", descAr: "فراولة، موز، كرز وبابايا", price: 20 },
      { en: "Raspberry Love", ar: "راسبيري لوف", desc: "Raspberry, Banana and Blueberry", descAr: "توت العليق، موز وتوت أزرق", price: 20 },
      { en: "Energy Booster", ar: "إنرجي بوستر", desc: "Sunflower Seed Butter, Acai, Cherry and Banana", descAr: "زبدة بذور دوار الشمس، اساي، كرز وموز", price: 20 },
    ],
  },
  {
    id: "green-juices",
    filter: "Smoothies & Juices",
    en: "Mean Green Juices",
    ar: "العصائر الخضراء",
    items: [
      { en: "Skinny Genes", ar: "سكيني جينز", desc: "Green Apple, Cucumber, Celery, Spinach, Lemon and Ginger", descAr: "تفاح أخضر، خيار، كرفس، سبانخ، ليمون وزنجبيل", price: null },
      { en: "Detox Green", ar: "ديتوكس جرين", desc: "Apple, Cucumber, Pineapple, Celery and Orange Juice", descAr: "تفاح، خيار، أناناس، كرفس وعصير برتقال", price: null },
      { en: "Weight Loss", ar: "ويت لوس", desc: "Spinach, Cucumber and Lemon", descAr: "سبانخ، خيار وليمون", price: null },
    ],
  },
  {
    id: "fresh-juices",
    filter: "Smoothies & Juices",
    en: "Fresh Juices",
    ar: "العصائر الطازجة",
    items: [
      { en: "Watermelon", ar: "بطيخ", price: 15 },
      { en: "Carrot", ar: "جزر", price: 15 },
      { en: "Apple", ar: "تفاح", price: 15 },
      { en: "Orange", ar: "برتقال", price: 15 },
      { en: "Lemon Mint", ar: "ليمون ونعناع", price: 15 },
      { en: "Fresh Fruit Cocktail", ar: "كوكتيل فواكه طازجة", price: 15 },
    ],
  },
  {
    id: "vegan-shakes",
    filter: "Protein & Vegan",
    en: "Vegan Shakes",
    ar: "المشروبات النباتية",
    items: [
      { en: "Vegan Banana", ar: "مخفوق الموز النباتي", price: null },
      { en: "Vegan Chocolate", ar: "مخفوق الشوكولاتة النباتي", price: null },
      { en: "Vegan Banana & Caramel", ar: "مخفوق الموز والكراميل النباتي", price: null },
    ],
  },
  {
    id: "protein-shakes",
    filter: "Protein & Vegan",
    en: "Protein Shakes",
    ar: "مشروبات البروتين",
    items: [
      { en: "Vanilla Protein Milkshake", ar: "ميلك شيك بروتين بالفانيلا", price: null },
      { en: "Strawberry Protein Milkshake", ar: "ميلك شيك بروتين بالفراولة", price: null },
      { en: "Chocolate Protein Milkshake", ar: "ميلك شيك بروتين بالشوكولاتة", price: null },
      { en: "High Pro Glow", ar: "هاي برو جلو", desc: "Peanut Butter, Banana, Honey and Skimmed Milk", descAr: "زبدة الفول السوداني، موز، عسل وحليب منزوع الدسم", price: null },
    ],
  },
  {
    // Hot meals — names and descriptions taken from Naslan Café's own promo
    // graphics. No prices were provided for these.
    id: "hot-meals",
    filter: "Food",
    en: "Hot Meals",
    ar: "الوجبات الساخنة",
    items: [
      { en: "Buffalo Chicken with Potato", ar: "دجاج بافلو مع البطاطا", desc: "Crispy chicken · roasted potato · signature sauce", price: null },
      { en: "Steak Mushroom with Rice", ar: "ستيك بالمشروم مع الأرز", desc: "Tender steak · creamy mushroom sauce · fluffy rice", price: null },
      { en: "Classic Beef Burger", ar: "برجر لحم كلاسيكي", desc: "Grilled beef patty · fresh veggies · soft bun", price: null },
      { en: "Grilled Chicken with Rice", ar: "دجاج مشوي مع الأرز", desc: "Juicy grilled chicken · fluffy rice · creamy sauce", price: null },
    ],
  },
  {
    id: "snacks",
    filter: "Food",
    en: "Snacks",
    ar: "الوجبات الخفيفة",
    items: [{ en: "Açaí Bowl with Fruits", ar: "وعاء أساي مع الفواكه", price: 22 }],
  },
  {
    id: "bakery",
    filter: "Food",
    en: "Bakery",
    ar: "المخبوزات",
    items: [
      { en: "Slice Cake", ar: "شريحة كيك", price: 16 },
      { en: "Croissant", ar: "كرواسون", price: 10 },
      { en: "Muffin", ar: "مافن", price: 10 },
      { en: "Danish", ar: "دانش", price: 10 },
      { en: "Donut", ar: "دونات", price: 8 },
    ],
  },
  {
    id: "sandwiches",
    filter: "Food",
    en: "Sandwiches",
    ar: "الساندويتشات",
    items: [
      { en: "Chicken Sandwich", ar: "ساندويتش دجاج", note: "Contains Gluten and Dairy", noteAr: "يحتوي على الغلوتين ومنتجات الألبان", price: 17 },
      { en: "Turkey Ham & Cheese Sandwich", ar: "ساندويتش تركي وجبن وخضار", note: "Contains Gluten and Dairy", noteAr: "يحتوي على الغلوتين ومنتجات الألبان", price: 17 },
    ],
  },
  {
    id: "salads",
    filter: "Food",
    en: "Salads",
    ar: "السلطات",
    items: [
      { en: "Chicken Caesar Salad", ar: "سلطة سيزر الدجاج", note: "Contains Gluten, Dairy and Fish", noteAr: "تحتوي على الغلوتين ومنتجات الألبان والأسماك", price: 25 },
      { en: "Mixed Salad", ar: "سلطة خضار مختلطة", price: null },
    ],
  },
];

// Café contact details, exactly as printed on the menu
export const CAFE_INFO = {
  tagline: "Fuel your body. Power your day.",
  taglineAr: "غذِّ جسدك وابدأ يومك بطاقة.",
  delivery: "Free delivery for tower residents",
  deliveryAr: "توصيل مجاني لسكان البرج",
  telephone: "+971 6 715 1549",
  mobile: "+971 52 560 2326",
  hours: "6:00 AM – 12:00 Midnight",
  location: "Al Mawja Tower, Al Taawun, Sharjah, UAE",
  instagram: "https://www.instagram.com/naslancafe",
  instagramHandle: "@naslancafe",
};
