import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { LANDING } from "@/lib/landing";
import { OG_IMAGE } from "@/lib/seo";

const content = LANDING.kids;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: content.path },
  openGraph: { title: content.metaTitle, description: content.metaDescription, url: content.path, images: [{ url: content.heroImage, alt: content.heroAlt }, OG_IMAGE] },
};

export default function Page() {
  return <LandingPage content={content} />;
}
