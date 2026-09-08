import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Naslan Fitness Center | Gym in Al Taawun, Sharjah",
  description:
    "Al Naslan Fitness Center (NFC) in Al Taawun, Sharjah: gym memberships, personal training, classes, swimming, kids programs, Naslan Cafe and free trial booking.",
  keywords: ["Al Naslan Fitness Center", "Sharjah gym", "Al Taawun gym", "personal training Sharjah", "free gym trial"],
  openGraph: {
    title: "Al Naslan Fitness Center",
    description: "Premium fitness, swimming, kids programs and nutrition in one destination in Al Taawun, Sharjah.",
    type: "website",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
