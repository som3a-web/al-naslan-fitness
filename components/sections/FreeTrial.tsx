"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2, Sparkles, Gift } from "lucide-react";
import { Reveal } from "../Reveal";
import { BRAND } from "@/lib/data";

const GOALS = ["Fat Loss", "Muscle Gain", "General Fitness", "Swimming", "Kids Program"];

export function FreeTrial() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", whatsapp: "", email: "", goal: "Fat Loss" });
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [ref, setRef] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "free-trial" }),
      });
      const data = await r.json();
      setRef(data.referenceId || "NFC-TRIAL");
      router.push(`/trial-success?ref=${encodeURIComponent(data.referenceId || "NFC-TRIAL")}&name=${encodeURIComponent(form.name)}&goal=${encodeURIComponent(form.goal)}`);
    } catch {
      setRef("NFC-TRIAL");
      router.push(`/trial-success?ref=NFC-TRIAL&name=${encodeURIComponent(form.name)}&goal=${encodeURIComponent(form.goal)}`);
    }
    setState("done");
  };

  return (
    <section id="trial" className="section relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-flame-500/25 blur-[130px]" />
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-flame-500/30 glass-strong p-7 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left copy */}
            <div className="flex flex-col justify-center">
              <span className="eyebrow mb-4 w-fit"><Gift size={14} /> Free Trial</span>
              <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Start your <span className="flame-text">free trial</span> today
              </h2>
              <p className="mt-4 text-muted">
                Try the gym with a free session. No commitment — just walk in and feel the difference.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {["Full access to the gym floor", "Tour of classes, pool & facilities", "Personal goal consultation", "Instant WhatsApp confirmation"].map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-flame-400" /> <span className="text-muted">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right form / success */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
              {state === "done" ? (
                <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-flame-gradient shadow-flame-lg">
                    <CheckCircle2 className="text-white" size={40} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-extrabold">You&apos;re in, {form.name.split(" ")[0] || "champion"}!</h3>
                  <p className="mt-2 text-muted">
                    Your free trial is reserved. Our team will confirm on WhatsApp shortly.
                  </p>
                  <p className="mt-4 rounded-full bg-white/5 px-4 py-2 text-sm">
                    Reference: <span className="font-bold text-flame-400">{ref}</span>
                  </p>
                  <div className="mt-6 flex gap-3">
                    <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-flame">
                      Confirm on WhatsApp
                    </a>
                    <button onClick={() => setState("idle")} className="btn-ghost">Book another</button>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-flame-400">
                    <Sparkles size={16} /> Reserve your spot
                  </div>
                  {[
                    { k: "name", label: "Full Name", type: "text", ph: "Ahmed Al Mansoori" },
                    { k: "phone", label: "Phone", type: "tel", ph: "+971 50 123 4567" },
                    { k: "whatsapp", label: "WhatsApp", type: "tel", ph: "+971 50 123 4567" },
                    { k: "email", label: "Email", type: "email", ph: "you@email.com" },
                  ].map((f) => (
                    <div key={f.k}>
                      <label className="mb-1.5 block text-xs font-medium text-muted">{f.label}</label>
                      <input
                        required={f.k === "name" || f.k === "phone"}
                        type={f.type}
                        value={(form as any)[f.k]}
                        onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                        placeholder={f.ph}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-flame-500/60"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted">Fitness Goal</label>
                    <div className="flex flex-wrap gap-2">
                      {GOALS.map((g) => (
                        <button
                          type="button"
                          key={g}
                          onClick={() => setForm({ ...form, goal: g })}
                          className={`rounded-full px-3.5 py-2 text-xs font-semibold transition ${
                            form.goal === g ? "bg-flame-gradient text-white shadow-flame" : "border border-white/10 bg-white/5 text-muted"
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="btn-flame w-full justify-center text-base disabled:opacity-70"
                  >
                    {state === "loading" ? <><Loader2 className="animate-spin" size={18} /> Reserving…</> : "Claim Free Trial"}
                  </button>
                  <p className="text-center text-[11px] text-muted">
                    By submitting you agree to be contacted by NFC. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
