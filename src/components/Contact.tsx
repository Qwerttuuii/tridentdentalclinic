import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Trident+Dental+Clinic+Zainab+Plaza+Abuja";

const rows = [
  {
    icon: <MapPin size={22} />,
    label: "Find the clinic",
    href: MAPS_URL,
    content: (
      <>
        Suite 207, second floor, Zainab Plaza,
        <br />
        Plot 109 Ahmadu{" "}
        <em className="text-[14px] text-muted">[street details to confirm]</em>, Abuja
      </>
    ),
  },
  {
    icon: <Phone size={22} />,
    label: "Call or WhatsApp",
    href: "https://wa.me/2347040848555",
    content: <>+234 704 084 8555</>,
  },
  {
    icon: <InstagramIcon size={22} />,
    label: "Follow along",
    href: "https://instagram.com/tridentdentalservices",
    content: <>@tridentdentalservices</>,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-ice py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr]">
        {/* Left: details */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-sky" />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand">
              Come say hello
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy md:text-5xl">
            We're easy to find.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            A little smile care, right in the heart of Abuja.
          </p>

          <ul className="mt-10 space-y-8">
            {rows.map((row) => (
              <li key={row.label}>
                <a
                  href={row.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-5"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-white text-brand transition-colors group-hover:border-brand">
                    {row.icon}
                  </span>
                  <span className="flex-1">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                      {row.label}
                    </span>
                    <span className="mt-2 block text-[17px] leading-7 text-navy">{row.content}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 hidden text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: map placeholder */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Trident Dental Clinic in Google Maps"
          className="group relative block aspect-[4/3.4] overflow-hidden rounded-md border border-line bg-sky/15 sm:aspect-[4/3]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(91,184,246,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(91,184,246,0.28) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        >
          {/* Fake roads */}
          <span className="absolute -left-10 top-1/4 h-3 w-[130%] -rotate-[28deg] bg-white/70" />
          <span className="absolute -left-10 top-2/3 h-3 w-[130%] rotate-[24deg] bg-white/70" />
          <span className="absolute left-1/3 top-[-10%] h-[130%] w-3 rotate-[12deg] bg-white/60" />

          <span className="absolute left-[16%] top-[22%] text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
            Abuja
          </span>
          <span className="absolute right-[8%] top-[48%] text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
            Zainab Plaza
          </span>

          {/* Pin */}
          <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2">
            <MapPin
              size={64}
              className="text-brand drop-shadow-[0_12px_14px_rgba(43,75,214,0.35)] transition-transform duration-300 group-hover:-translate-y-1"
              fill="currentColor"
              stroke="white"
              strokeWidth={1.4}
            />
          </div>

          {/* Label card */}
          <div className="absolute left-1/2 top-[55%] flex w-[240px] -translate-x-1/2 items-center gap-3 bg-white px-4 py-3 shadow-[0_18px_36px_-18px_rgba(14,27,69,0.4)]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky/20 text-brand">
              <MapPin size={18} />
            </span>
            <span className="flex-1 leading-tight">
              <span className="block text-[14px] font-bold text-navy">Trident Dental Clinic</span>
              <span className="block text-[12px] text-muted">Abuja, Nigeria</span>
            </span>
            <ArrowUpRight size={16} className="text-brand" />
          </div>

          <span className="absolute bottom-4 left-5 text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
            Location preview
          </span>
        </a>
      </div>
    </section>
  );
}