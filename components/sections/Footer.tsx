import { Instagram, MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Logo } from "../Logo";
import { BRAND } from "@/lib/data";

const HOURS = [
  { d: "Gym (Men)", h: "6:00 AM – 12:00 AM" },
  { d: "Ladies & Pool", h: "Ask on WhatsApp" },
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
            <div className="mt-5 flex gap-3">
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-flame-500/50 hover:text-flame-400">
                <Instagram size={18} />
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
                { l: "Membership", h: "#membership" },
                { l: "Facilities", h: "#facilities" },
                { l: "Nutrition", h: "#nutrition" }, { l: "NFC Café", h: "#cafe" },
                { l: "Swimming & Kids", h: "#swimming" },
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
