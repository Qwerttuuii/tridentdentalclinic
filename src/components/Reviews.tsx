import { BadgeCheck, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "I was nervous before my visit, but the team made me feel comfortable from the very first moment. I left smiling.",
    name: "Ada O.",
    initials: "AO",
    treatment: "Checkup & cleaning",
  },
  {
    quote:
      "Everyone was so kind and patient. They explained each step clearly and made the whole experience feel easy.",
    name: "Chidi N.",
    initials: "CN",
    treatment: "Teeth whitening",
  },
  {
    quote:
      "Such a welcoming clinic. Booking was simple, and I felt listened to throughout my appointment.",
    name: "Zara M.",
    initials: "ZM",
    treatment: "Dental consultation",
  },
];

function Stars({ size = 18 }: { size?: number }) {
  return (
    <div className="flex gap-1 text-brand" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-ice py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-sky" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand">
                Kind words
              </span>
            </div>
            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-navy md:text-5xl">
              A little love from our patients.
            </h2>
          </div>

          <div className="md:text-right">
            <div className="md:flex md:justify-end">
              <Stars size={22} />
            </div>
            <p className="mt-2 text-[14px] text-muted">
              <span className="text-xl font-bold text-navy">5.0</span> · Sample reviews
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-md border border-line bg-white p-8 transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(14,27,69,0.35)]"
            >
              <Stars />

              <blockquote className="mt-6 flex-1 text-[17px] leading-8 text-navy">
                “{r.quote}”
              </blockquote>

              <figcaption className="mt-8 flex items-center justify-between border-t border-line pt-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky/20 text-[13px] font-bold text-brand">
                    {r.initials}
                  </span>
                  <div className="leading-tight">
                    <p className="text-[15px] font-bold text-navy">{r.name}</p>
                    <p className="mt-0.5 text-[13px] text-muted">{r.treatment}</p>
                  </div>
                </div>
                <BadgeCheck size={22} className="text-brand" />
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-[13px] text-muted">
          Sample testimonials for demonstration only.
        </p>
      </div>
    </section>
  );
}