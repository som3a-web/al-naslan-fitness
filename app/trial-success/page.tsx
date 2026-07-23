import Link from "next/link";
import { CalendarCheck, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BRAND } from "@/lib/data";

export default function TrialSuccess({
  searchParams,
}: {
  searchParams: { ref?: string; name?: string; goal?: string };
}) {
  const firstName = searchParams.name?.split(" ")[0] || "Champion";
  const ref = searchParams.ref || "NFC-DEMO";
  const goal = searchParams.goal || "General Fitness";
  const whatsappText = `Hi NFC, I submitted a free trial request. Reference: ${ref}. Goal: ${goal}.`;

  return (
    <>
      <Navbar />
      <main className="section flex min-h-screen items-center py-32">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl glass-strong p-8 text-center sm:p-12">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-flame-gradient shadow-flame-lg">
            <CheckCircle2 size={42} className="text-white" />
          </div>
          <p className="eyebrow mt-8">
            <Sparkles size={14} /> Free Trial Reserved
          </p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            You&apos;re in, <span className="flame-text">{firstName}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Your NFC free trial request is ready for WhatsApp confirmation. Bring your training shoes;
            we&apos;ll prepare the gym access, InBody scan and goal consultation.
          </p>

          <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase text-muted">Reference</p>
              <p className="mt-1 font-bold text-flame-300">{ref}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase text-muted">Goal</p>
              <p className="mt-1 font-bold">{goal}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase text-muted">Next Step</p>
              <p className="mt-1 font-bold">Confirm time</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`${BRAND.whatsappLink}?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flame"
            >
              <MessageCircle size={18} /> Confirm on WhatsApp
            </a>
            <Link href="/#membership" className="btn-ghost">
              <CalendarCheck size={18} /> Explore Memberships
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
