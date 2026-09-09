import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { BRAND, PRICING } from "@/lib/data";

export function FindUs() {
  return (
    <section id="location" className="section relative py-24">
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-flame-500/15 blur-[120px]" />
      <SectionHeader
        eyebrow="Find Us"
        title="Train at"
        highlight="Al Mawja Tower"
        subtitle="We're on Al Taawun Street in Al Khan, Sharjah — easy to reach from the corniche and with parking on site."
      />

      <Reveal className="mt-14">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          {/* Details */}
          <div className="rounded-3xl glass-strong p-6 sm:p-8">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-flame-gradient shadow-flame">
                  <MapPin size={19} className="text-white" />
                </span>
                <div className="min-w-0">
                  <p className="font-bold">{BRAND.name}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{BRAND.address}</p>
                  <p className="text-sm leading-7 text-muted" dir="rtl" lang="ar">
                    {BRAND.addressAr}
                  </p>
                  <p className="mt-1.5 inline-flex items-center rounded-full border border-flame-500/30 bg-flame-500/10 px-2.5 py-1 text-xs font-bold text-flame-500">
                    Plus Code {BRAND.plusCode}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-flame-gradient shadow-flame">
                  <Phone size={19} className="text-white" />
                </span>
                <div>
                  <p className="font-bold">{BRAND.phone}</p>
                  <p className="text-sm text-muted">Call or WhatsApp us</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-flame-gradient shadow-flame">
                  <Clock size={19} className="text-white" />
                </span>
                <div>
                  <p className="font-bold">Men: {PRICING.maleTiming} daily</p>
                  <p className="text-sm text-muted">Ladies &amp; pool hours — ask us on WhatsApp</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={BRAND.mapDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-flame flex-1 justify-center"
              >
                <Navigation size={16} /> Get Directions
              </a>
              <a
                href={`${BRAND.whatsappLink}?text=${encodeURIComponent("Hi NFC, can you share your location please?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex-1 justify-center"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative min-h-[340px] overflow-hidden rounded-3xl border border-[color:var(--line)] shadow-glass lg:min-h-0">
            <iframe
              src={BRAND.mapEmbed}
              title={`Map showing ${BRAND.name} at Al Mawja Tower, Al Taawun, Sharjah`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
