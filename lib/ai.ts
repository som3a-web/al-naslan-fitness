// ===========================================================================
// NFC AI Assistant — local rule-based "brain".
// Used as the instant fallback when no n8n webhook is configured.
// In production, app/api/chat/route.ts forwards to n8n; this keeps the
// demo fully functional offline and gives n8n a clean response contract.
// ===========================================================================

import { MEMBERSHIPS, BRAND } from "./data";

export type Msg = { role: "user" | "bot"; text: string; chips?: string[] };

const fmt = (n: number) => `${BRAND.currency} ${n.toLocaleString()}`;

export function aiReply(input: string): Msg {
  const q = input.toLowerCase();

  if (/price|cost|how much|membership|plan|fee/.test(q)) {
    return {
      role: "bot",
      text: `Here are our plans:\n• Monthly — ${fmt(MEMBERSHIPS[0].price)}\n• Quarterly — ${fmt(
        MEMBERSHIPS[1].price
      )} (most popular, save 16%)\n• Annual — ${fmt(
        MEMBERSHIPS[2].price
      )} (best value, save 33%)\n\nWant me to recommend one for your goal?`,
      chips: ["Recommend a plan", "Book a free trial", "What's included?"],
    };
  }
  if (/recommend|which plan|best for|suggest/.test(q)) {
    return {
      role: "bot",
      text: "Tell me your main goal and I'll match a plan. For most members, Quarterly is the sweet spot — unlimited classes, 2 PT sessions, pool access, and monthly InBody analytics.",
      chips: ["Fat loss", "Muscle gain", "General fitness"],
    };
  }
  if (/caf|cafe|café|coffee|eat|food|meal|menu|smoothie|shake|protein bowl|snack/.test(q)) {
    return {
      role: "bot",
      text: "Our in-house NFC Café serves macro-counted healthy food right inside the gym 🍽️ — high-protein bowls, smoothies, pre/post-workout meals, snacks and coffee. Order ahead and it's ready after your session, and every order earns reward points.",
      chips: ["See the menu", "Best meal for muscle gain", "Order on WhatsApp"],
    };
  }
  if (/fat loss|lose weight|slim|cut/.test(q)) {
    return {
      role: "bot",
      text: "For fat loss I'd pair the Quarterly plan with our HIIT + Strength classes and the 'Lean & Cut' nutrition program. You'll get InBody tracking to watch body-fat % drop every month.",
      chips: ["Book free trial", "See nutrition", "Talk on WhatsApp"],
    };
  }
  if (/muscle|bulk|gain|strength|big/.test(q)) {
    return {
      role: "bot",
      text: "For muscle gain, the Annual plan includes 8 PT sessions with our strength coaches plus the 'Build & Bulk' nutrition program. Strength Lab runs daily at 17:30.",
      chips: ["Book free trial", "Meet trainers", "See nutrition"],
    };
  }
  if (/trial|free|try|start/.test(q)) {
    return {
      role: "bot",
      text: "Great choice! Your free trial includes a full-gym day pass + a complimentary InBody scan. Scroll to the 'Start Free Trial' form, or I can hand you to our WhatsApp team to confirm instantly.",
      chips: ["Open trial form", "WhatsApp the team"],
    };
  }
  if (/class|book|schedule|timetable|yoga|hiit|crossfit|boxing/.test(q)) {
    return {
      role: "bot",
      text: "We run 96 classes a week — HIIT, CrossFit, Strength Lab, Power Yoga, Boxing and Mobility. Each shows live occupancy so you book a guaranteed spot. Check the Classes section for today's schedule.",
      chips: ["See today's classes", "Book a trainer"],
    };
  }
  if (/trainer|coach|personal|pt/.test(q)) {
    return {
      role: "bot",
      text: "Our coaches: Khalid (strength & muscle), Sara (fat loss & functional), and Omar (athletic performance). PT packages start at flexible per-session rates. Want me to book a consultation?",
      chips: ["Book consultation", "See PT packages"],
    };
  }
  if (/time|open|hour|when/.test(q)) {
    return {
      role: "bot",
      text: "Main gym: 6:00 AM – 12:00 AM daily.\nPool: 6:00–10:00 AM & 4:00–10:00 PM.\nLadies-only hours available — ask me for today's slots.",
      chips: ["Pool schedule", "Book a class"],
    };
  }
  if (/pool|swim/.test(q)) {
    return {
      role: "bot",
      text: "We have a 25m temperature-controlled lap pool plus a kids pool. Adult lap membership, kids learn-to-swim, private coaching and aqua fitness are all bookable online.",
      chips: ["Kids swimming", "Adult membership"],
    };
  }
  if (/kid|child|karate|junior|summer/.test(q)) {
    return {
      role: "bot",
      text: "Kids programs: swimming (5–12), Karate Academy (6–14), Junior Fitness (8–15) and a Summer Camp. Family membership bundles let the whole family train on one plan.",
      chips: ["Register a child", "Family plans"],
    };
  }
  if (/location|where|address|map|sharjah/.test(q)) {
    return {
      role: "bot",
      text: `We're in ${BRAND.location}. Tap the WhatsApp button for directions or a live location pin.`,
      chips: ["WhatsApp directions", "Working hours"],
    };
  }
  if (/whatsapp|contact|call|phone|talk|human/.test(q)) {
    return {
      role: "bot",
      text: "I can connect you to our team on WhatsApp right now — they handle trial registration, bookings and any questions instantly.",
      chips: ["Open WhatsApp"],
    };
  }
  if (/hi|hello|hey|salam|good/.test(q)) {
    return {
      role: "bot",
      text: `Hi! I'm NFC AI 🤖 — your fitness concierge at ${BRAND.short}. I can help with memberships, pricing, class & trainer booking, timings and free trials. What are you after?`,
      chips: ["Membership pricing", "Book a free trial", "Find a class"],
    };
  }
  return {
    role: "bot",
    text: "I can help with memberships, pricing, class & trainer bookings, timings, swimming, kids programs and free trials. What would you like to do?",
    chips: ["Pricing", "Free trial", "Classes", "Talk on WhatsApp"],
  };
}

export const WELCOME: Msg = {
  role: "bot",
  text: "👋 Welcome to Al Naslan Fitness Center! I'm NFC AI, your 24/7 fitness concierge. How can I help you today?",
  chips: ["Membership pricing", "Book a free trial", "Class schedule", "Talk on WhatsApp"],
};
