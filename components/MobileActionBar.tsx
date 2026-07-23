"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Zap } from "lucide-react";
import { BRAND } from "@/lib/data";

/**
 * Thumb-zone conversion bar, phones only. Slides up once the visitor
 * scrolls past the hero so it never covers the cinematic intro.
 */
export function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[55] transition-transform duration-500 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="glass-strong safe-bottom border-t border-white/10 px-3 pt-3">
        <div className="grid grid-cols-2 gap-2.5">
          <a href="#trial" className="btn-flame whitespace-nowrap py-3.5">
            <Zap size={16} /> Free Trial
          </a>
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-green-500/25"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
