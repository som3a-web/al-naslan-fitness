import { Facebook, Instagram, MessageCircle, Star, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Logo } from "../Logo";
import { BRAND, PRICING } from "@/lib/data";
import { LANDING_PAGES } from "@/lib/seo";

const HOURS = [
  { d: "Gym (Ladies)", h: PRICING.ladiesTiming },
  { d: "Gym (Men)", h: PRICING.maleTiming },
  { d: "Pool", h: "Ask on WhatsApp" },
];

export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-white/10 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-flame-gradient opacity-60" />
      <div className="section pb-10">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo size={48} />
            <p className="mt-4 max-w-xs text-sm text-muted">
              {BRAND.location}. Forge your strongest self with premium training, swimming, nutrition and recovery.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-flame-500/50 hover:text-flame-400">
                <Instagram size={18} />
              </a>
              <a href={BRAND.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-flame-500/50 hover:text-flame-400">
                <svg width={17} height={17} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1-2.59-2.59 2.59 2.59 0 0 1 3.37-2.47V9.68a5.7 5.7 0 0 0-.78-.05A5.69 5.69 0 0 0 4.17 15.3 5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.69-5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.25-1.48z" />
                </svg>
              </a>
              <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-flame-500/50 hover:text-flame-400">
                <Facebook size={18} />
              </a>
              <a href={BRAND.snapchat} target="_blank" rel="noopener noreferrer" aria-label="Snapchat"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-flame-500/50 hover:text-flame-400">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.5c-3.2 0-5.6 2.4-5.6 5.7v2.3c-.4.1-.9-.1-1.3-.2-.6-.1-1 .5-.6.9.5.5 1.4.8 1.9 1-.5 1.6-1.9 3.2-3.6 3.8-.4.1-.4.7 0 .8.8.3 1.7.4 2 .8.2.3.1.9.6 1 .6.1 1.4-.2 2.3.1 1 .3 2 1.8 4.3 1.8s3.3-1.5 4.3-1.8c.9-.3 1.7 0 2.3-.1.5-.1.4-.7.6-1 .3-.4 1.2-.5 2-.8.4-.1.4-.7 0-.8-1.7-.6-3.1-2.2-3.6-3.8.5-.2 1.4-.5 1.9-1 .4-.4 0-1-.6-.9-.4.1-.9.3-1.3.2V8.2c0-3.3-2.4-5.7-5.6-5.7z" />
                </svg>
              </a>
              <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-green-500/50 hover:text-green-400">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-flame-400">Explore</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              {[
                { l: "Membership", h: "/#membership" },
                { l: "Facilities", h: "/#facilities" },
                { l: "NFC Café", h: "/#cafe" },
                ...LANDING_PAGES.map((p) => ({ l: p.label, h: p.href })),
                { l: "العربية", h: "/ar" },
              ].map((x) => (
                <li key={x.l}><a href={x.h} className="transition hover:text-flame-400">{x.l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-flame-400">Contact</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2.5"><Phone size={15} className="text-flame-400" /> {BRAND.phone}</li>
              <li className="flex items-center gap-2.5"><Mail size={15} className="text-flame-400" /> {BRAND.email}</li>
              <li className="flex items-center gap-2.5"><MapPin size={15} className="text-flame-400" /> {BRAND.location}</li>
              <li className="flex items-center gap-2.5"><MessageCircle size={15} className="text-flame-400" /> {BRAND.website}</li>
              <li>
                <a href={BRAND.googleReview} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 font-semibold text-flame-400 transition hover:text-flame-300">
                  <Star size={15} /> Review us on Google
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-flame-400">
              <Clock size={15} /> Working Hours
            </h4>
            <ul className="space-y-2.5 text-sm">
              {HOURS.map((x) => (
                <li key={x.d} className="flex items-center justify-between gap-4">
                  <span className="text-muted">{x.d}</span>
                  <span className="font-semibold">{x.h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Premium gym · Swimming · Kids academy · Naslan Cafe</p>
        </div>
      </div>
    </footer>
  );
}
