import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cairo } from "next/font/google";
import { Check, Clock, MapPin, MessageCircle, Navigation } from "lucide-react";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BRAND, PRICING } from "@/lib/data";
import { JsonLd, LANDING_PAGES, OG_IMAGE, faqJsonLd } from "@/lib/seo";

const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["400", "600", "700", "800"], display: "swap" });

// Arabic wording for prices & hours follows the official NFC flyers
const DURATIONS_AR: Record<string, string> = {
  "1 Month": "شهر واحد",
  "3 Months": "3 أشهر",
  "6 Months": "6 أشهر",
  "1 Year": "12 شهر",
};
const LADIES_AR = "من 6:00 صباحاً إلى 3:30 عصراً";
const MEN_AR = "من 4:00 مساءً إلى 1:00 بعد منتصف الليل";

const n = (x: number) => x.toLocaleString("en-US");
const whatsapp = `${BRAND.whatsappLink}?text=${encodeURIComponent("مرحباً NFC، أرغب بالاستفسار عن الاشتراك.")}`;

const FACILITIES_AR = [
  { t: "صالة الأوزان", d: "أجهزة أوزان حرة وأجهزة بلوحات وكابلات ودمبلز." },
  { t: "منطقة الكارديو", d: "أجهزة مشي ودراجات وأجهزة صعود الدرج." },
  { t: "مسبح داخلي", d: "مسبح للسباحة والتمارين المائية." },
  { t: "مسبح للأطفال", d: "مسبح دائري ضحل وآمن للصغار." },
  { t: "غرفة GX", d: "استوديو للتمارين الجماعية والوظيفية." },
  { t: "خزائن وغرف تغيير الملابس", d: "خزائن وحمامات خاصة نظيفة." },
  { t: "كافيه داخل النادي", d: "كافيه نسلان للوجبات الصحية والمشروبات." },
  { t: "باركينج مجاني", d: "مواقف مجانية في برج الموجة." },
];

const FAQS_AR = [
  { q: "ما هي أوقات النادي؟", a: `قسم السيدات ${LADIES_AR}. قسم الرجال ${MEN_AR}.` },
  {
    q: "كم سعر الاشتراك في النادي؟",
    a: `الأسعار للجميع: شهر واحد ${n(PRICING.adult[0].price)} درهم، 3 أشهر ${n(PRICING.adult[1].price)} درهم، 6 أشهر ${n(PRICING.adult[2].price)} درهم، 12 شهر ${n(PRICING.adult[3].price)} درهم. الدخول ليوم واحد ${PRICING.dailyPass} درهم.`,
  },
  { q: "هل يوجد مسبح في النادي؟", a: "نعم، يوجد مسبح داخلي ومسبح للأطفال. تواصل معنا عبر واتساب لمعرفة مواعيد المسبح هذا الأسبوع." },
  {
    q: "كم سعر التدريب الشخصي؟",
    a: `10 حصص ${n(PRICING.pt[0].price)} درهم، 20 حصة ${n(PRICING.pt[1].price)} درهم، 30 حصة ${n(PRICING.pt[2].price)} درهم.`,
  },
  { q: "هل يوجد اشتراك للأطفال؟", a: `نعم، اشتراك الأطفال ${PRICING.kidsMonthly} درهم لمدة شهر، والاشتراك العائلي بخصم ${PRICING.familyDiscount} درهم للشخص الواحد.` },
  { q: "أين يقع النادي؟", a: `${BRAND.addressAr}. يوجد باركينج مجاني.` },
];

export const metadata: Metadata = {
  title: { absolute: "مركز نسلان للياقة البدنية (NFC) | جيم ومسبح في التعاون، الشارقة" },
  description: `جيم في التعاون، الشارقة للسيدات والرجال — مسبح داخلي، مسبح للأطفال، تدريب شخصي وكافيه. الاشتراك من ${PRICING.adult[0].price} درهم شهرياً والدخول اليومي ${PRICING.dailyPass} درهم.`,
  alternates: { canonical: "/ar", languages: { en: "/", ar: "/ar" } },
  openGraph: {
    title: "مركز نسلان للياقة البدنية — جيم في التعاون، الشارقة",
    description: "جيم للسيدات والرجال مع مسبح داخلي وتدريب شخصي وبرامج للأطفال في برج الموجة، التعاون.",
    url: "/ar",
    locale: "ar_AE",
    images: [OG_IMAGE],
  },
};

export default function ArabicHome() {
  return (
    <div lang="ar" dir="rtl" className={cairo.className}>
      <JsonLd data={faqJsonLd(FAQS_AR)} />

      <header className="fixed inset-x-0 top-0 z-50 py-3">
        <div className="section">
          <nav className="flex items-center justify-between rounded-2xl px-4 py-2.5 glass-strong shadow-glass">
            <Link href="/ar" className="shrink-0" aria-label="مركز نسلان للياقة البدنية">
              <Logo size={40} priority />
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/" lang="en" className="rounded-full px-3 py-2 text-sm font-semibold text-muted hover:text-flame-400">
                English
              </Link>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-flame text-sm">
                اشترك الآن
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[85svh] items-end overflow-hidden">
          <Image src="/media/gym-floor/strength-floor-wide.jpg" alt="صالة الأوزان في مركز نسلان للياقة البدنية بالشارقة" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/75 via-ink-950/55 to-ink-950" />
          <div className="section relative z-10 pb-16 pt-32">
            <span className="eyebrow mb-5">
              <MapPin size={14} /> برج الموجة، التعاون، الشارقة
            </span>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-6xl">
              جيم ومسبح في التعاون، الشارقة — للسيدات والرجال
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              مركز نسلان للياقة البدنية (NFC): صالة أوزان وكارديو، مسبح داخلي ومسبح للأطفال، تدريب شخصي، برامج للأطفال وكافيه — كل ذلك في مكان واحد وبأسعار واحدة للجميع.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-extrabold text-white shadow-lg shadow-green-500/25">
                <MessageCircle size={16} /> تواصل عبر واتساب
              </a>
              <a href={BRAND.mapDirections} target="_blank" rel="noopener noreferrer" className="btn-ghost text-white">
                <Navigation size={16} /> الاتجاهات
              </a>
            </div>
          </div>
        </section>

        {/* Hours */}
        <section className="section py-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">أوقات النادي</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl glass p-6">
              <p className="text-sm font-bold text-flame-400">قسم السيدات</p>
              <p className="mt-2 flex items-center gap-2 text-xl font-extrabold"><Clock size={18} className="text-flame-400" /> {LADIES_AR}</p>
            </div>
            <div className="rounded-3xl glass p-6">
              <p className="text-sm font-bold text-flame-400">قسم الرجال</p>
              <p className="mt-2 flex items-center gap-2 text-xl font-extrabold"><Clock size={18} className="text-flame-400" /> {MEN_AR}</p>
            </div>
          </div>
        </section>

        {/* Prices */}
        <section className="section pb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">الاشتراكات</h2>
          <p className="mt-2 text-muted">الأسعار للجميع، بالدرهم الإماراتي.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl glass p-6">
              <h3 className="text-lg font-extrabold">خيارات الاشتراك</h3>
              <ul className="mt-4 space-y-3">
                {PRICING.adult.map((p) => (
                  <li key={p.duration} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <span className="font-semibold">{DURATIONS_AR[p.duration] ?? p.duration}</span>
                    <span className="text-xl font-extrabold">{n(p.price)} <span className="text-xs text-flame-400">درهم</span></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl glass p-6">
              <h3 className="text-lg font-extrabold">تدريب شخصي</h3>
              <ul className="mt-4 space-y-3">
                {PRICING.pt.map((p) => (
                  <li key={p.classes} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <span className="font-semibold">{p.classes} {p.classes === 10 ? "حصص" : "حصة"}</span>
                    <span className="text-xl font-extrabold">{n(p.price)} <span className="text-xs text-flame-400">درهم</span></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl glass p-6">
              <h3 className="text-lg font-extrabold">الأطفال والعائلة</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="font-semibold">الأطفال — شهر واحد</span>
                  <span className="text-xl font-extrabold">{PRICING.kidsMonthly} <span className="text-xs text-flame-400">درهم</span></span>
                </li>
                <li className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="font-semibold">عائلي — للشخص الواحد</span>
                  <span className="text-xl font-extrabold">{PRICING.familyDiscount} <span className="text-xs text-flame-400">درهم</span></span>
                </li>
                <li className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="font-semibold">دخول ليوم واحد</span>
                  <span className="text-xl font-extrabold">{PRICING.dailyPass} <span className="text-xs text-flame-400">درهم</span></span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="section pb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">المرافق</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FACILITIES_AR.map((f) => (
              <div key={f.t} className="rounded-3xl glass p-5">
                <p className="flex items-center gap-2 font-extrabold"><Check size={16} className="text-flame-400" /> {f.t}</p>
                <p className="mt-1.5 text-sm text-muted">{f.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              ["/media/swimming-pool/pool-nfc-wall.jpg", "المسبح الداخلي في NFC"],
              ["/media/cardio-zone/climb-beyond-limits.jpg", "منطقة الكارديو"],
              ["/media/gym-floor/gx-room.jpg", "غرفة GX"],
              ["/media/kids-pool/kids-round-pool.jpg", "مسبح الأطفال"],
            ].map(([src, alt]) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="section pb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">أسئلة شائعة</h2>
          <div className="mt-8 space-y-3">
            {FAQS_AR.map((f) => (
              <details key={f.q} className="group rounded-2xl glass p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold">
                  {f.q}
                  <span className="text-xl text-flame-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Visit */}
        <section className="section pb-24">
          <div className="rounded-3xl glass p-7">
            <h2 className="text-2xl font-extrabold sm:text-3xl">زورونا</h2>
            <p className="mt-4 flex items-start gap-2 font-bold"><MapPin size={18} className="mt-1 shrink-0 text-flame-400" /> {BRAND.addressAr}</p>
            <p className="mt-2 font-bold" dir="ltr">{BRAND.phone}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={BRAND.mapDirections} target="_blank" rel="noopener noreferrer" className="btn-flame text-sm"><Navigation size={16} /> الاتجاهات</a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm"><MessageCircle size={16} /> واتساب</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-sm" lang="en" dir="ltr">
              {LANDING_PAGES.map((p) => (
                <Link key={p.href} href={p.href} className="rounded-full border border-white/10 px-3.5 py-1.5 text-muted hover:text-flame-400">
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} مركز نسلان للياقة البدنية — {BRAND.website}
      </footer>
      <WhatsAppButton />
    </div>
  );
}
