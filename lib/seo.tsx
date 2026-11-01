// ===========================================================================
// SEO — site URL, shared keywords and the structured data (JSON-LD) that
// tells Google NFC is a gym in Al Taawun, Sharjah. Facts come from lib/data.ts.
// ===========================================================================

import { BRAND, PRICING } from "./data";

export const SITE_URL = "https://naslanfitnesscenter.com";

// Decoded from the Google Maps Plus Code 898G+PFC (Sharjah)
export const GEO = { latitude: 25.3168, longitude: 55.3761 };

export const OG_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: "Al Naslan Fitness Center gym floor in Al Taawun, Sharjah" };

export const LANDING_PAGES = [
  { href: "/ladies-gym-sharjah", label: "Ladies Gym", labelAr: "جيم للسيدات" },
  { href: "/swimming-pool-gym-sharjah", label: "Gym with Swimming Pool", labelAr: "جيم مع مسبح" },
  { href: "/personal-training-sharjah", label: "Personal Training", labelAr: "تدريب شخصي" },
  { href: "/kids-programs-sharjah", label: "Kids Programs", labelAr: "برامج الأطفال" },
];

const prices = [PRICING.dailyPass, ...PRICING.adult.map((p) => p.price)];

export function gymJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ExerciseGym", "HealthClub"],
    "@id": `${SITE_URL}/#gym`,
    name: BRAND.name,
    alternateName: ["NFC", "Naslan Fitness Center", "NFC Gym", "مركز نسلان للياقة البدنية"],
    url: SITE_URL,
    logo: `${SITE_URL}/media/nfc-logo.jpeg`,
    image: [`${SITE_URL}${OG_IMAGE.url}`, `${SITE_URL}/media/swimming-pool/pool-nfc-wall.jpg`, `${SITE_URL}/media/gym-floor/plate-loaded-benches.jpg`],
    description:
      "Gym in Al Taawun, Sharjah with ladies and men timings, an indoor swimming pool, kids pool, personal training, GX room, kids programs and Naslan Cafe.",
    telephone: BRAND.whatsapp,
    email: BRAND.email,
    priceRange: `${BRAND.currency} ${Math.min(...prices)}–${Math.max(...prices).toLocaleString()}`,
    currenciesAccepted: BRAND.currency,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Mawja Tower 1, Al Taawun Street, Al Khan",
      addressLocality: "Sharjah",
      addressRegion: "Sharjah",
      addressCountry: "AE",
    },
    geo: { "@type": "GeoCoordinates", ...GEO },
    hasMap: BRAND.mapDirections,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "06:00",
        closes: "01:00",
      },
    ],
    amenityFeature: [
      "Ladies timing 6:00 AM – 3:30 PM",
      "Men timing 4:00 PM – 1:00 AM",
      "Indoor swimming pool",
      "Kids pool",
      "Lockers",
      "Showers & changing rooms",
      "Cafe inside",
      "Free parking",
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    sameAs: [BRAND.instagram, BRAND.tiktok, BRAND.facebook, BRAND.snapchat],
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
