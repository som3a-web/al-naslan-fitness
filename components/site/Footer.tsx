import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Music2, Phone, Twitter, Youtube } from "lucide-react";
import { brand, emirates, navItems } from "@/lib/gymnation-data";
import { LogoMark } from "./LogoMark";

const socialLinks = [
  { href: brand.facebook, label: "Facebook", icon: Facebook },
  { href: brand.instagram, label: "Instagram", icon: Instagram },
  { href: brand.tiktok, label: "TikTok", icon: Music2 },
  { href: brand.x, label: "X", icon: Twitter },
  { href: brand.youtube, label: "YouTube", icon: Youtube },
  { href: brand.linkedin, label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="section py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <LogoMark />
            <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-300">
              Affordable-premium gyms across the UAE with 24/7 access, big energy classes and no-nonsense monthly plans.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="grid h-10 w-10 place-items-center border border-white/15 bg-white/5 text-white transition hover:border-lime hover:bg-lime hover:text-carbon"
                  >
                    <Icon aria-hidden="true" size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h2 className="text-sm font-black uppercase text-white">Explore</h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-lime">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="transition hover:text-lime">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-black uppercase text-white">Gyms</h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                {emirates.map((emirate) => (
                  <li key={emirate}>
                    <Link href={`/locations?emirate=${encodeURIComponent(emirate)}`} className="transition hover:text-lime">
                      {emirate}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-black uppercase text-white">Contact</h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                <li className="flex gap-2">
                  <Phone aria-hidden="true" className="mt-0.5 shrink-0 text-lime" size={16} />
                  <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="transition hover:text-lime">
                    {brand.phone}
                  </a>
                </li>
                <li className="flex gap-2">
                  <Mail aria-hidden="true" className="mt-0.5 shrink-0 text-lime" size={16} />
                  <a href={`mailto:${brand.email}`} className="transition hover:text-lime">
                    {brand.email}
                  </a>
                </li>
                <li className="flex gap-2">
                  <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-lime" size={16} />
                  <span>{brand.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GymNation UAE. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="hover:text-lime">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-lime">
              Terms
            </Link>
            <Link href="/join" className="hover:text-lime">
              Free Trial
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

