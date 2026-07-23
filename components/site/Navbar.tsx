"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/gymnation-data";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./Button";
import { LogoMark } from "./LogoMark";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        solid ? "border-white/10 bg-carbon/92 shadow-2xl shadow-black/30 backdrop-blur-xl" : "border-transparent bg-transparent"
      )}
    >
      <nav className="section flex h-20 items-center justify-between" aria-label="Primary navigation">
        <LogoMark />
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm font-black uppercase text-white/82 transition hover:text-lime",
                  active && "text-lime"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:block">
          <ButtonLink href="/join" size="sm" showArrow={false}>
            Free Trial
          </ButtonLink>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-white/15 bg-white/5 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>
      <div className={cn("grid overflow-hidden transition-all duration-300 lg:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden border-t border-white/10 bg-carbon/96 backdrop-blur-xl">
          <div className="section flex flex-col gap-2 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black uppercase text-white"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/join" className="mt-2 w-full" showArrow={false}>
              Free Trial
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}

