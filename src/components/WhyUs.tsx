import { CalendarDays, HeartHandshake, Stethoscope } from "lucide-react";
import clinicInterior from "../assets/images/clinic-interior.jpg";

const features = [
  {
    icon: Stethoscope,
    title: "Thoughtful, modern care",
    text: "Up-to-date equipment and a gentle approach, every time.",
  },
  {
    icon: HeartHandshake,
    title: "People who put you at ease",
    text: "A friendly team that listens and explains as we go.",
  },
  {
    icon: CalendarDays,
    title: "Easy to plan around",
    text: "Choose a time that works, or simply send us a message.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-ice py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr]">
        {/* Left: copy */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-sky" />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand">
              Why Trident
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy md:text-5xl">
            A little more comfort. A lot more confidence.
          </h2>

          <p className="mt-6 max-w-md text-lg leading-8 text-muted">
            We believe a dental visit should feel welcoming from the moment you walk in.
          </p>

          <ul className="mt-10 space-y-7">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-white text-brand">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-1 text-[15px] leading-7 text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: image */}
        <div className="relative overflow-hidden rounded-lg shadow-[0_30px_60px_-30px_rgba(14,27,69,0.35)]">
          <img
            src={clinicInterior}
            alt="Inside Trident Dental Clinic"
            className="aspect-[4/3.3] w-full object-cover sm:aspect-[4/3] lg:aspect-[1/0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

          <span className="absolute right-5 top-5 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-navy">
            01 / Our clinic
          </span>

          <div className="absolute bottom-6 left-6 right-6 flex items-start gap-3 text-white">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky" />
            <div>
              <p className="text-lg font-semibold">A calm place to care for your smile</p>
              <p className="text-[14px] text-white/80">Come in, take a breath, feel at home.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}