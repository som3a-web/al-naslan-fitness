"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, MessageCircle, X } from "lucide-react";
import { BRAND } from "@/lib/data";

const LINKS = [
  { label: "Facilities", href: "#facilities" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Classes", href: "#classes" },
  { label: "Nutrition", href: "#nutrition" },
  { label: "Kids", href: "#swimming" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="section">
        <nav className="flex items-center justify-between rounded-2xl px-4 py-2.5 glass-strong shadow-glass transition-all duration-500">
          <Link href="/" className="shrink-0">
            <Logo size={44} priority />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-flame-400"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp NFC"
              title="WhatsApp NFC"
              className="hidden h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-green-500/50 hover:text-green-400 sm:grid"
            >
              <MessageCircle size={17} />
            </a>
            <a href="#trial" className="hidden btn-flame sm:inline-flex">
              Free Trial
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 grid gap-1 rounded-2xl glass-strong p-3 lg:hidden">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted hover:bg-white/5 hover:text-flame-400"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-1 grid gap-2">
              <a href="#trial" onClick={() => setOpen(false)} className="btn-flame">
                Free Trial
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
