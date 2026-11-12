import { useState } from "react";
import { ArrowRight, Smile, Sparkles } from "lucide-react";
import smileCloseup from "../assets/images/smile-closeup.jpg";

const tabs = ["Whitening", "Gap closure", "Veneers"] as const;
type Tab = (typeof tabs)[number];

export default function SmileResults() {
  const [active, setActive] = useState<Tab>("Whitening");

  return (
    <section id="results" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr]">
        {/* Left: image */}
        <div className="relative overflow-hidden rounded-lg shadow-[0_30px_60px_-30px_rgba(14,27,69,0.3)]">
          <img
            src={smileCloseup}
            alt="Patient smiling after treatment"
            className="aspect-[4/4.4] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />

          <span className="absolute left-5 top-5 inline-flex items-center gap-2 bg-white px-4 py-2.5 text-[14px] font-semibold text-brand">
            <Sparkles size={16} />
            Smile stories
          </span>

          <span className="absolute bottom-5 right-6 text-[13px] font-medium text-white">
            Illustrative sample image
          </span>
        </div>

        {/* Right: copy + tabs */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-sky" />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand">
              Smile results
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy md:text-5xl">
            A smile that feels like you.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
            Every smile has its own story. We'll work together on a result that feels natural,
            comfortable and yours.
          </p>

          {/* Tabs */}
          <div className="mt-10 flex gap-8 border-b border-line" role="tablist">
            {tabs.map((tab) => {
              const isActive = tab === active;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab)}
                  className={`-mb-px border-b-2 pb-4 text-[15px] font-semibold transition-colors ${
                    isActive
                      ? "border-brand text-brand"
                      : "border-transparent text-muted hover:text-navy"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Before / After */}
          <div
            key={active}
            className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-5"
          >
            <div className="text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                Before
              </p>
              <div className="flex aspect-[5/3] items-center justify-center rounded-md bg-gradient-to-br from-ice to-line/60 text-brand">
                <Smile size={44} strokeWidth={1.5} />
              </div>
              <p className="mt-3 text-[13px] text-muted">Illustrative preview</p>
            </div>

            <ArrowRight size={20} className="mt-2 text-brand" />

            <div className="text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                After
              </p>
              <div className="flex aspect-[5/3] items-center justify-center rounded-md bg-gradient-to-br from-sky/20 to-ice text-brand">
                <Smile size={44} strokeWidth={1.5} />
              </div>
              <p className="mt-3 text-[13px] text-muted">Illustrative preview</p>
            </div>
          </div>

          <p className="mt-6 text-[13px] text-muted">
            Example treatment visual — individual results vary.
          </p>
        </div>
      </div>
    </section>
  );
}