import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "../data/services";

function selectService(name: string) {
  // The Booking section listens for this and pre-selects the service
  window.dispatchEvent(new CustomEvent("select-service", { detail: name }));
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-sky" />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand">
              Our services
            </span>
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy md:text-5xl">
            Care for every kind of smile.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            From everyday checkups to the smile you've been dreaming of, we're here for you.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLast = i === services.length - 1;

            return (
              <div
                key={service.name}
                className={`group flex flex-col p-8 transition-colors hover:bg-ice ${
                  isLast ? "bg-ice sm:col-span-2" : "bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sky/20 text-brand transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} />
                  </span>
                  <span className="pt-1 text-right text-[13px] text-muted">{service.tag}</span>
                </div>

                <h3 className="mt-10 text-2xl font-bold text-navy">{service.name}</h3>
                <p className="mt-3 text-[15px] leading-7 text-muted">{service.description}</p>

                <a
                  href="#book"
                  onClick={() => selectService(service.name)}
                  className="mt-10 inline-flex items-center gap-2 text-[15px] font-semibold text-brand"
                >
                  Book this service
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-10 flex items-center justify-center gap-3 text-[15px] text-muted">
          <Sparkles size={18} className="text-brand" />
          Not sure what you need? We'll help you figure it out.
        </p>
      </div>
    </section>
  );
}