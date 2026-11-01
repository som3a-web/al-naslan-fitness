import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { JsonLd, OG_IMAGE, SITE_URL, gymJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Al Naslan Fitness Center (NFC) | Gym in Al Taawun, Sharjah",
    template: "%s | Al Naslan Fitness Center",
  },
  description:
    "Gym in Al Taawun, Sharjah for ladies & men — indoor swimming pool, kids pool, personal training, GX room and Naslan Cafe. Memberships from AED 250/month, day pass AED 35.",
  keywords: [
    "gym in Sharjah",
    "gym Al Taawun",
    "ladies gym Sharjah",
    "gym with swimming pool Sharjah",
    "personal trainer Sharjah",
    "Al Naslan Fitness Center",
    "NFC gym Sharjah",
    "جيم في الشارقة",
    "نادي رياضي التعاون",
  ],
  alternates: { canonical: "/", languages: { en: "/", ar: "/ar" } },
  openGraph: {
    title: "Al Naslan Fitness Center — Gym in Al Taawun, Sharjah",
    description: "Ladies & men gym with an indoor swimming pool, kids pool, personal training and a café — Al Mawja Tower, Al Taawun.",
    url: SITE_URL,
    siteName: "Al Naslan Fitness Center",
    locale: "en_AE",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
  robots: { index: true, follow: true },
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ef",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd data={gymJsonLd()} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
