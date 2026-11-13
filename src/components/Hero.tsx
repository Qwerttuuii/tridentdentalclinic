import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import heroPatient from "../assets/images/hero-patient.jpg";

const WHATSAPP_URL = "https://wa.me/2347040848555";

export default function Hero() {
  return (
    <section id="home" className="bg-ice">
      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-0.5 w-10 bg-sky" />
              
            </div>

            <h1 className="text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[1.02] tracking-tight text-navy">
              Your best smile starts{" "}
              <span className="relative inline-block text-brand">
                here.
                <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-sky/70" />
              </span>
            </h1>

            <p className="mt-8 max-w-md text-lg leading-8 text-muted">
              Feel good about your smile, with thoughtful dental care and a team that puts you at
              ease. Right here in Abuja.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-md bg-brand px-7 py-4 text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(43,75,214,0.7)] transition-colors hover:bg-brand-dark"
              >
                Book an appointment
                <ArrowRight size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-md border border-line bg-white px-7 py-4 text-[15px] font-semibold text-navy transition-colors hover:border-brand hover:text-brand"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[14px] text-muted">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck size={20} className="text-brand" />
                Modern equipment
              </span>
              <span className="inline-flex items-center gap-2">
                <HeartHandshake size={20} className="text-brand" />
                Care that feels easy
              </span>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
            <div className="pointer-events-none absolute -right-4 -top-8 hidden h-40 w-40 rounded-full border border-sky/50 md:block" />
            <div className="pointer-events-none absolute -bottom-6 -left-8 hidden h-32 w-32 rounded-full border border-sky/40 md:block" />

            <div className="relative overflow-hidden rounded-b-2xl rounded-t-[220px] shadow-[0_30px_60px_-30px_rgba(14,27,69,0.35)]">
              <img
                src={heroPatient}
                alt="Smiling patient at Trident Dental Clinic"
                className="aspect-[4/4.6] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
              <p className="absolute bottom-5 right-6 flex items-center gap-2 text-[13px] font-medium text-white">
                <span className="h-2 w-2 rounded-full bg-sky" />
                Friendly care, right here in Abuja
              </p>
            </div>

          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-[12px] md:flex-row">
          <span className="font-semibold uppercase tracking-[0.16em] text-muted">
            Good care. Great smiles.
          </span>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand"
          >
            Explore our care
            <ArrowDown size={16} />
          </a>
          <span className="text-[14px] text-muted">A clinic visit you can feel good about.</span>
        </div>
      </div>
    </section>
  );
}