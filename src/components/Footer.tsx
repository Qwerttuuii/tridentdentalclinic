import { ArrowRight, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import logo from "../assets/images/logo.jpg";
import InstagramIcon from "./InstagramIcon";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book", href: "#book" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-6xl px-6 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <span className="inline-block rounded-md bg-white px-3 py-2">
              <img src={logo} alt="Trident Dental Clinic" className="h-10 w-auto" />
            </span>
            <p className="mt-6 max-w-xs text-[15px] leading-7 text-white/60">
              Thoughtful dental care for a smile that feels like you. Proud to care for Abuja.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com/tridentdentalservices"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-sky transition-colors hover:border-sky hover:bg-white/5"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://wa.me/2347040848555"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-sky transition-colors hover:border-sky hover:bg-white/5"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky">Explore</h4>
            <ul className="mt-6 space-y-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[15px] text-white/65 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky">
              Let's connect
            </h4>
            <ul className="mt-6 space-y-4 text-[15px] text-white/65">
              <li>
                <a href="tel:+2347040848555" className="transition-colors hover:text-white">
                  +234 704 084 8555
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/tridentdentalservices"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  @tridentdentalservices
                </a>
              </li>
              <li>Abuja, Nigeria</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-[17px] text-white/85">Ready for your next smile?</p>
            <a
              href="#book"
              className="group mt-4 inline-flex items-center gap-2 text-[16px] font-semibold text-sky"
            >
              Let's book it
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-[13px] text-white/45 md:flex-row">
          <span>© 2026 Trident Dental Services</span>
          <span className="inline-flex items-center gap-2">
            Made with care in Abuja
            <Sparkles size={16} className="text-sky" />
          </span>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}