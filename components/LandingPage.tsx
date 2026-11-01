import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock, MapPin, MessageCircle, Navigation } from "lucide-react";
import { ChatWidget } from "./ChatWidget";
import { MobileActionBar } from "./MobileActionBar";
import { Navbar } from "./Navbar";
import { WhatsAppButton } from "./WhatsAppButton";
import { Footer } from "./sections/Footer";
import { Icon } from "@/lib/icons";
import { BRAND, KIDS, MEMBERSHIP_FEATURES, PRICING } from "@/lib/data";
import type { LandingContent } from "@/lib/landing";
import { JsonLd, LANDING_PAGES, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const fmt = (n: number) => n.toLocaleString();

function PriceRow({ label, note, price, highlight }: { label: string; note?: string; price: number; highlight?: boolean }) {
  return (
    <li
      className={`flex items-center justify-between rounded-2xl border p-4 ${
        highlight ? "border-flame-500/50 bg-flame-500/10" : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div>
        <p className="font-semibold">{label}</p>
        {note && <p className="text-xs font-bold text-flame-400">{note}</p>}
      </div>
      <p className="font-display text-2xl font-extrabold">
        <span className="text-xs text-flame-400">{BRAND.currency} </span>
        {fmt(price)}
      </p>
    </li>
  );
}

function Pricing({ kind }: { kind: LandingContent["pricing"] }) {
  if (kind === "pt") {
    return (
      <ul className="space-y-3">
        {PRICING.pt.map((p) => (
          <PriceRow key={p.classes} label={`${p.classes} Classes`} note={p.popular ? "Most popular" : undefined} price={p.price} highlight={p.popular} />
        ))}
      </ul>
    );
  }
  if (kind === "kids") {
    return (
      <ul className="space-y-3">
        <PriceRow label="Kids Membership" note="1 month" price={PRICING.kidsMonthly} highlight />
        <PriceRow label="Family discount" note="Off per person" price={PRICING.familyDiscount} />
        <PriceRow label="Day Pass" note="Full-day gym access" price={PRICING.dailyPass} />
      </ul>
    );
  }
  return (
    <ul className="space-y-3">
      {PRICING.adult.map((p) => (
        <PriceRow key={p.duration} label={p.duration} note={p.note} price={p.price} highlight={p.best} />
      ))}
      <PriceRow label="Day Pass" note="Full-day gym access" price={PRICING.dailyPass} />
    </ul>
  );
}

export function LandingPage({ content }: { content: LandingContent }) {
  const whatsapp = `${BRAND.whatsappLink}?text=${encodeURIComponent(content.whatsappText)}`;
  const related = LANDING_PAGES.filter((p) => p.href !== content.path);

  return (
    <>
      <JsonLd data={faqJsonLd(content.faqs)} />
      <JsonLd data={breadcrumbJsonLd(content.h1, content.path)} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[78svh] items-end overflow-hidden">
          <Image src={content.heroImage} alt={content.heroAlt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/75 via-ink-950/55 to-ink-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-transparent to-transparent" />
          <div className="section relative z-10 pb-16 pt-32 sm:pb-20">
            <span className="eyebrow mb-5">
              <MapPin size={14} /> {content.eyebrow}
            </span>
            <h1 className="max-w-4xl font-display text-[2.4rem] font-extrabold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              {content.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{content.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/#join" className="btn-flame text-sm sm:text-base">
                Join Now <ArrowRight size={18} />
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-green-500/25 sm:text-base"
              >
                <MessageCircle size={16} /> WhatsApp us
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold text-white/85 sm:text-sm">
              <span className="rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 backdrop-blur">Ladies {PRICING.ladiesTiming}</span>
              <span className="rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 backdrop-blur">Men {PRICING.maleTiming}</span>
              <span className="rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 backdrop-blur">Free parking</span>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="section py-20">
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">{content.highlightsTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.highlights.map((h) => (
              <div key={h.title} className="rounded-3xl glass p-6">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-flame-gradient shadow-flame">
                  <Icon name={h.icon} size={20} className="text-white" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{h.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Photos */}
        <section className="section pb-20">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {content.photos.map((p) => (
              <div key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Prices + visit */}
        <section className="section grid gap-6 pb-20 lg:grid-cols-2">
          <div className="rounded-3xl glass p-7">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Prices</h2>
            <p className="mt-1 text-sm text-muted">One price list for everyone, in AED.</p>
            <div className="mt-6">
              <Pricing kind={content.pricing} />
            </div>
            {content.pricing === "membership" && (
              <ul className="mt-6 space-y-2.5">
                {MEMBERSHIP_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check size={16} className="mt-0.5 shrink-0 text-flame-400" /> {f}
                  </li>
                ))}
              </ul>
            )}
            {content.pricing === "kids" && (
              <ul className="mt-6 space-y-2.5">
                {KIDS.map((k) => (
                  <li key={k.name} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check size={16} className="mt-0.5 shrink-0 text-flame-400" /> {k.name} · ages {k.ages}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-3xl glass p-7">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Visit NFC</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-flame-400" />
                <div>
                  <p className="font-bold">Ladies: {PRICING.ladiesTiming}</p>
                  <p className="font-bold">Men: {PRICING.maleTiming}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-flame-400" />
                <div>
                  <p className="font-bold">{BRAND.address}</p>
                  <p className="text-muted" dir="rtl">{BRAND.addressAr}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-flame-400" />
                <p className="font-bold">{BRAND.phone}</p>
              </li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={BRAND.mapDirections} target="_blank" rel="noopener noreferrer" className="btn-flame text-sm">
                <Navigation size={16} /> Get directions
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section pb-20">
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">Questions</h2>
          <div className="mt-8 space-y-3">
            {content.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl glass p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold">
                  {f.q}
                  <span className="text-xl text-flame-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="section pb-28">
          <h2 className="text-sm font-bold uppercase tracking-wider text-flame-400">More at NFC</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/" className="btn-ghost text-sm">Al Naslan Fitness Center</Link>
            {related.map((p) => (
              <Link key={p.href} href={p.href} className="btn-ghost text-sm">
                {p.label} in Sharjah
              </Link>
            ))}
            <Link href="/ar" className="btn-ghost text-sm">العربية</Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
      <MobileActionBar />
    </>
  );
}
