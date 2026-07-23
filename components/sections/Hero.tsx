"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { ParticleField } from "../ParticleField";
import { Counter } from "../Counter";
import { BRAND, STATS } from "@/lib/data";
import { ThreeBrandScene } from "../ThreeBrandScene";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  const experiences = ["Gym floor", "Swimming pool", "Kids academy", "Nutrition cafe", "Body analytics"];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Cinematic video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/gym-still-1.jpg"
      >
        <source src="/media/gym-hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/55 to-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-flame-radial opacity-70" />
      <div className="absolute inset-0 grid-glow opacity-60" />
      <ParticleField density={50} />
      <div className="hidden md:block">
        <ThreeBrandScene />
      </div>
      <div className="noise absolute inset-0" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section relative z-10 pb-24 pt-28 sm:pt-36"
      >
        <motion.div variants={item} className="mb-5 flex flex-wrap items-center gap-3 sm:mb-6">
          <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-white/20 bg-white shadow-flame sm:h-16 sm:w-16">
            <Image src="/media/nfc-logo.jpeg" alt={BRAND.name} fill className="object-cover" priority sizes="64px" />
          </span>
          <span className="eyebrow">
            <MapPin size={14} />
            {BRAND.location}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          aria-label="One membership. Every fitness experience."
          className="max-w-5xl font-display text-[2.65rem] font-extrabold leading-[0.94] tracking-normal text-white sm:text-7xl sm:leading-[0.92] lg:text-8xl"
        >
          ONE MEMBERSHIP.{" "}
          <br />
          EVERY FITNESS{" "}
          <br />
          <span className="flame-text">EXPERIENCE.</span>
        </motion.h1>

        <motion.p variants={item} className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:mt-6 sm:text-lg sm:leading-8">
          {BRAND.short} brings strength training, swimming, kids programs, nutrition, recovery
          and smart progress tracking into one premium fitness center in Sharjah.
        </motion.p>

        <motion.div variants={item} className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap">
          <a href="#trial" className="btn-flame whitespace-nowrap text-sm sm:text-base">
            Start Free Trial <ArrowRight size={18} className="hidden sm:block" />
          </a>
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-green-500/25 transition duration-300 hover:-translate-y-0.5 sm:order-3 sm:bg-transparent sm:font-bold sm:text-white sm:shadow-none sm:border sm:border-white/15 sm:text-base"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href="#membership" className="btn-ghost whitespace-nowrap text-sm text-white sm:order-2 sm:text-base">
            Join Now
          </a>
          <a
            href={`${BRAND.whatsappLink}?text=${encodeURIComponent("Hi NFC, I would like to book a fitness consultation.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost whitespace-nowrap text-sm text-white sm:order-4 sm:text-base"
          >
            Book Consultation
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="no-scrollbar -mx-4 mt-7 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mt-8 sm:max-w-3xl sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {experiences.map((experience) => (
            <a
              key={experience}
              href="#programs"
              className="shrink-0 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white/70 backdrop-blur transition hover:border-flame-500/50 hover:text-flame-300 sm:py-2"
            >
              {experience}
            </a>
          ))}
        </motion.div>

        {/* Animated stats */}
        <motion.div
          variants={item}
          className="mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-4"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/[0.08] bg-[rgba(30,30,35,0.85)] px-3 py-4 text-center shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-4 sm:py-5"
            >
              <p className="font-display text-2xl font-extrabold text-white sm:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
        </div>
      </div>
    </section>
  );
}
