// ===========================================================================
// NFC Assistant — local rule-based FAQ brain.
// Used as the instant fallback when no n8n webhook is configured.
// app/api/chat/route.ts forwards to n8n when available; this keeps the
// website assistant fully functional offline with the official pricing.
// ===========================================================================

import { BRAND, PRICING } from "./data";

export type Msg = { role: "user" | "bot"; text: string; chips?: string[] };

const aed = (n: number) => `${BRAND.currency} ${n.toLocaleString()}`;

function pricingText(): string {
  const i = PRICING.tiers.internal;
  const e = PRICING.tiers.external;
  return [
    "Here is our official pricing (effective " + PRICING.effectiveFrom + "):",
    "",
    "Internal — Adult:",
    `• 1 month ${aed(i.adult[0].price)} · 3 months ${aed(i.adult[1].price)}`,
    `• 6 months ${aed(i.adult[2].price)} · 1 year ${aed(i.adult[3].price)}`,
    "",
    "External — Adult:",
    `• 1 month ${aed(e.adult[0].price)} · 3 months ${aed(e.adult[1].price)}`,
    `• 6 months ${aed(e.adult[2].price)} · 1 year ${aed(e.adult[3].price)}`,
    "",
    `Daily pass ${aed(PRICING.dailyPass)} · Family discount ${aed(PRICING.familyDiscount)} per person.`,
    "Not sure if you're Internal or External? Ask our team on WhatsApp.",
  ].join("\n");
}

export function aiReply(input: string): Msg {
  const q = input.toLowerCase();

  if (/personal training|personal trainer|\bpt\b|coach|trainer/.test(q)) {
    const i = PRICING.tiers.internal;
    const e = PRICING.tiers.external;
    return {
      role: "bot",
      text:
        `Personal training packages:\n\nInternal:\n• 10 classes ${aed(i.pt[0].price)} · 20 classes ${aed(
          i.pt[1].price
        )} · 30 classes ${aed(i.pt[2].price)}\n\nExternal:\n• 10 classes ${aed(e.pt[0].price)} · 20 classes ${aed(
          e.pt[1].price
        )} · 30 classes ${aed(e.pt[2].price)}\n\nOur certified coaches build a custom program for your goal.`,
      chips: ["Membership pricing", "Book on WhatsApp"],
    };
  }
  if (/kid|child|karate|junior|summer/.test(q)) {
    return {
      role: "bot",
      text: `Kids programs: swimming, Karate Academy, junior fitness and a summer camp.\n\nKids membership (1 month): Internal ${aed(
        PRICING.tiers.internal.kidsMonthly
      )} · External ${aed(PRICING.tiers.external.kidsMonthly)}.\nFamily discount: ${aed(
        PRICING.familyDiscount
      )} off per person.`,
      chips: ["Register a child", "Talk on WhatsApp"],
    };
  }
  if (/price|cost|how much|membership|plan|fee|tier|internal|external|daily pass|day pass|family/.test(q)) {
    return {
      role: "bot",
      text: pricingText(),
      chips: ["Personal training", "Kids programs", "Book a free trial"],
    };
  }
  if (/trial|free|try|start|sign ?up|join|register/.test(q)) {
    return {
      role: "bot",
      text: "You can start with a free trial session — fill the 'Start Free Trial' form on this page and our team confirms your visit on WhatsApp. Prefer to try first? A daily pass is " + aed(PRICING.dailyPass) + ".",
      chips: ["Open trial form", "Membership pricing", "WhatsApp the team"],
    };
  }
  if (/class|schedule|timetable|yoga|hiit|crossfit|boxing|mobility/.test(q)) {
    return {
      role: "bot",
      text: "We run group classes through the week. Message our team on WhatsApp for the current timetable and to reserve your spot.",
      chips: ["Talk on WhatsApp", "Membership pricing"],
    };
  }
  if (/time|open|hour|when|timing/.test(q)) {
    return {
      role: "bot",
      text: `Men's timing: ${PRICING.maleTiming} daily.\nFor ladies and pool schedules, message our team on WhatsApp for this week's slots.`,
      chips: ["Pool & swimming", "WhatsApp the team"],
    };
  }
  if (/pool|swim|aqua/.test(q)) {
    return {
      role: "bot",
      text: "We have an indoor lap pool plus a kids pool. Adult lap sessions, kids learn-to-swim, private coaching and aqua fitness are all available — ask our team on WhatsApp for this week's pool schedule.",
      chips: ["Kids swimming", "WhatsApp the team"],
    };
  }
  if (/caf|cafe|café|coffee|eat|food|meal|menu|smoothie|shake|snack|nutrition/.test(q)) {
    return {
      role: "bot",
      text: "Naslan Cafe is our healthy food and coffee spot right at the gym — high-protein meals, smoothies, pre/post-workout fuel and barista coffee. The full menu is at the counter, or ask our team on WhatsApp.",
      chips: ["Ask about the menu", "Membership pricing"],
    };
  }
  if (/location|where|address|map|sharjah|taawun|directions/.test(q)) {
    return {
      role: "bot",
      text: `We're in ${BRAND.location}. Tap WhatsApp for directions or a live location pin.`,
      chips: ["WhatsApp directions", "Working hours"],
    };
  }
  if (/whatsapp|contact|call|phone|talk|human|email/.test(q)) {
    return {
      role: "bot",
      text: `You can reach our team directly:\n• WhatsApp / phone: ${BRAND.phone}\n• Email: ${BRAND.email}\n\nThey handle trials, bookings and any questions.`,
      chips: ["Open WhatsApp"],
    };
  }
  if (/\bhi\b|hello|hey|salam|marhaba|good (morning|afternoon|evening)/.test(q)) {
    return {
      role: "bot",
      text: `Hi! I'm the ${BRAND.short} assistant. I can help with membership pricing, personal training, classes, swimming, kids programs, timings and free trials. What are you after?`,
      chips: ["Membership pricing", "Book a free trial", "Class schedule"],
    };
  }
  return {
    role: "bot",
    text: "I can help with membership pricing, personal training, classes, swimming & pool access, kids programs, timings, location and free trials. What would you like to know?",
    chips: ["Pricing", "Free trial", "Timings", "Talk on WhatsApp"],
  };
}

export const WELCOME: Msg = {
  role: "bot",
  text: `👋 Welcome to ${BRAND.name}! Ask me about memberships, personal training, swimming, kids programs or timings.`,
  chips: ["Membership pricing", "Book a free trial", "Personal training", "Kids programs"],
};
