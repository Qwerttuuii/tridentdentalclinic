import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Clock,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { services } from "../data/services";

const WHATSAPP_URL =
  "https://wa.me/2347040848555?text=Hello%20Trident%20Dental%2C%20I%27d%20like%20to%20book%20an%20appointment.";

const WEEKDAY_SLOTS = ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "3:30 PM", "5:00 PM"];
const SATURDAY_SLOTS = ["10:30 AM", "12:00 PM", "2:00 PM"];

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const STEPS = ["Choose service", "Date & time", "Your details"];

const inputClass =
  "w-full rounded-md border border-line bg-white px-4 py-4 text-[15px] text-navy placeholder:text-muted/60 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/15";

function startOfToday() {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function slotsFor(date: Date | null) {
  if (!date) return WEEKDAY_SLOTS;
  return date.getDay() === 6 ? SATURDAY_SLOTS : WEEKDAY_SLOTS;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Booking() {
  const today = useMemo(() => startOfToday(), []);

  const [service, setService] = useState("");
  const [viewMonth, setViewMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Pre-select a service when "Book this service" is clicked in the Services section
  useEffect(() => {
    const handler = (e: Event) => {
      const value = (e as CustomEvent<string>).detail;
      if (services.some((s) => s.name === value)) {
        setService(value);
        setSubmitted(false);
        setError("");
      }
    };
    window.addEventListener("select-service", handler);
    return () => window.removeEventListener("select-service", handler);
  }, []);

  // Which step is the user currently on (1-3)
  const currentStep = !service ? 1 : !date || !time ? 2 : 3;

  // Calendar cells
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const leadingBlanks = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const canGoBack =
    year > today.getFullYear() || (year === today.getFullYear() && month > today.getMonth());

  const monthLabel = viewMonth.toLocaleDateString("en-GB", { month: "long", year: "numeric" });

  function pickDate(d: Date) {
    setDate(d);
    if (!slotsFor(d).includes(time)) setTime("");
    setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!service) return setError("Please choose a service.");
    if (!date) return setError("Please pick a date.");
    if (!time) return setError("Please pick a time.");
    if (!name.trim()) return setError("Please enter your full name.");
    if (!phone.trim()) return setError("Please enter your phone number.");
    setError("");
    setSubmitted(true);
  }

  function reset() {
    setService("");
    setDate(null);
    setTime("");
    setName("");
    setPhone("");
    setEmail("");
    setNotes("");
    setError("");
    setSubmitted(false);
  }

  return (
    <section id="book" className="relative overflow-hidden bg-navy py-20 md:py-28">
      {/* Decorative arcs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full border-[70px] border-white/[0.035]" />
      <div className="pointer-events-none absolute -bottom-52 right-1/3 h-[420px] w-[420px] rounded-full border border-white/[0.05]" />

      <div className="relative mx-auto grid max-w-6xl items-start gap-14 px-6 lg:grid-cols-[1fr_1.08fr]">
        {/* Left column */}
        <div className="lg:pt-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-sky" />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-sky">
              Your next visit
            </span>
          </div>

          <h2 className="text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-white">
            Book your visit in <span className="text-sky">minutes.</span>
          </h2>

          <p className="mt-8 max-w-md text-lg leading-8 text-white/70">
            Choose a service, pick a time, and let us take it from there. We can't wait to
            welcome you.
          </p>

          <ul className="mt-8 space-y-4 text-[15px] text-white/85">
            <li className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-sky" />
              No pressure, just good care
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={20} className="text-sky" />
              Prefer to talk? We're here.
            </li>
          </ul>

          {/* Clinic hours */}
          <div className="mt-10 max-w-md border-t border-white/15 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-white">
                <Clock size={22} className="text-sky" />
                <h3 className="text-lg font-bold">Clinic hours</h3>
              </div>
              <span className="border border-white/25 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
                Sample
              </span>
            </div>

            <dl className="mt-6 space-y-4 text-[15px]">
              <div className="flex justify-between text-white/70">
                <dt>Mon – Fri</dt>
                <dd className="font-medium text-white">9:00 am – 6:00 pm</dd>
              </div>
              <div className="flex justify-between text-white/70">
                <dt>Saturday</dt>
                <dd className="font-medium text-white">10:00 am – 3:00 pm</dd>
              </div>
              <div className="flex justify-between text-white/70">
                <dt>Sunday</dt>
                <dd className="font-medium text-white">Closed</dd>
              </div>
            </dl>

            <p className="mt-5 text-[13px] text-white/50">Demo hours — please confirm with the clinic.</p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 flex max-w-md items-center justify-between border-t border-white/15 pt-8"
          >
            <span className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-sky">
                <MessageCircle size={24} />
              </span>
              <span className="leading-tight">
                <span className="block text-[13px] text-white/60">Prefer to chat?</span>
                <span className="block text-[16px] font-bold text-white">Book on WhatsApp</span>
              </span>
            </span>
            <ArrowUpRight
              size={20}
              className="text-sky transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Right column: booking card */}
        <div className="rounded-md bg-white p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] sm:p-9">
          {submitted && date ? (
            /* Success state */
            <div className="py-6 text-center sm:py-10">
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-[0_14px_30px_-12px_rgba(43,75,214,0.7)]">
                <Check size={38} strokeWidth={2.5} />
              </span>

              <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.2em] text-brand">
                Appointment requested
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-navy">
                Thank you, {name.trim().split(" ")[0]}!
              </h3>
              <p className="mx-auto mt-4 max-w-sm text-[15px] leading-7 text-muted">
                We've received your request and our team will confirm your slot shortly.
              </p>

              <dl className="mx-auto mt-8 max-w-sm divide-y divide-line rounded-md border border-line bg-ice text-left text-[15px]">
                <div className="flex justify-between gap-4 px-5 py-4">
                  <dt className="text-muted">Service</dt>
                  <dd className="text-right font-semibold text-navy">{service}</dd>
                </div>
                <div className="flex justify-between gap-4 px-5 py-4">
                  <dt className="text-muted">Date</dt>
                  <dd className="text-right font-semibold text-navy">{formatDate(date)}</dd>
                </div>
                <div className="flex justify-between gap-4 px-5 py-4">
                  <dt className="text-muted">Time</dt>
                  <dd className="text-right font-semibold text-navy">{time}</dd>
                </div>
                <div className="flex justify-between gap-4 px-5 py-4">
                  <dt className="text-muted">Phone</dt>
                  <dd className="text-right font-semibold text-navy">{phone}</dd>
                </div>
              </dl>

              <p className="mt-6 text-[13px] text-muted">
                Demo only — nothing was sent or saved.
              </p>

              <button
                type="button"
                onClick={reset}
                className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-brand"
              >
                Book another appointment
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                    Your appointment
                  </p>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-navy">
                    Let's find your time.
                  </h3>
                </div>
                <span className="hidden items-center gap-2 pt-1 text-[13px] text-muted sm:inline-flex">
                  <ShieldCheck size={18} className="text-brand" />
                  Easy & secure
                </span>
              </div>

              {/* Step indicator */}
              <ol className="mt-8 flex items-center gap-3">
                {STEPS.map((label, i) => {
                  const n = i + 1;
                  const done = n < currentStep;
                  const active = n === currentStep;
                  return (
                    <li key={label} className="flex flex-1 items-center gap-3 last:flex-none">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-bold transition-colors ${
                          done || active ? "bg-brand text-white" : "bg-ice text-muted"
                        }`}
                      >
                        {done ? <Check size={16} strokeWidth={3} /> : n}
                      </span>
                      <span
                        className={`whitespace-nowrap text-[14px] ${
                          active ? "font-bold text-navy" : "hidden text-muted sm:inline"
                        } ${done ? "sm:font-semibold sm:text-navy" : ""}`}
                      >
                        {label}
                      </span>
                      {n < STEPS.length && (
                        <span
                          className={`hidden h-px flex-1 sm:block ${done ? "bg-brand" : "bg-line"}`}
                        />
                      )}
                    </li>
                  );
                })}
              </ol>

              {/* Service */}
              <div className="mt-9">
                <label htmlFor="service" className="text-[15px] font-bold text-navy">
                  What can we help with?
                </label>
                <div className="relative mt-3">
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      setError("");
                    }}
                    className={`${inputClass} cursor-pointer appearance-none py-3.5 pr-11 ${
                      service ? "" : "text-muted/70"
                    }`}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  <ChevronsUpDown
                    size={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
                  />
                </div>
              </div>

              {/* Calendar */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <p className="text-[15px] font-bold text-navy">Choose a date</p>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      disabled={!canGoBack}
                      onClick={() => setViewMonth(new Date(year, month - 1, 1))}
                      className="rounded p-1 text-navy transition-colors hover:bg-ice disabled:cursor-not-allowed disabled:text-muted/30 disabled:hover:bg-transparent"
                      aria-label="Previous month"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className="min-w-[130px] text-center text-[15px] font-semibold text-navy">
                      {monthLabel}
                    </span>
                    <button
                      type="button"
                      onClick={() => setViewMonth(new Date(year, month + 1, 1))}
                      className="rounded p-1 text-navy transition-colors hover:bg-ice"
                      aria-label="Next month"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-7 gap-y-1 text-center">
                  {DAY_LABELS.map((d) => (
                    <span key={d} className="pb-2 text-[12px] text-muted">
                      {d}
                    </span>
                  ))}

                  {Array.from({ length: leadingBlanks }).map((_, i) => (
                    <span key={`blank-${i}`} />
                  ))}

                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const d = new Date(year, month, day);
                    const unavailable = d < today || d.getDay() === 0;
                    const selected =
                      !!date &&
                      date.getFullYear() === year &&
                      date.getMonth() === month &&
                      date.getDate() === day;

                    return (
                      <button
                        key={day}
                        type="button"
                        disabled={unavailable}
                        onClick={() => pickDate(d)}
                        className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full text-[14px] transition-colors ${
                          selected
                            ? "bg-brand font-bold text-white shadow-[0_8px_18px_-8px_rgba(43,75,214,0.8)]"
                            : unavailable
                              ? "cursor-not-allowed text-muted/40 line-through"
                              : "font-semibold text-navy hover:bg-ice"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slots */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <p className="text-[15px] font-bold text-navy">Available times</p>
                  <span className="inline-flex items-center gap-2 text-[12px] text-muted">
                    <span className="h-2 w-2 rounded-full bg-sky" />
                    Demo availability
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {slotsFor(date).map((slot) => {
                    const selected = slot === time;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => {
                          setTime(slot);
                          setError("");
                        }}
                        className={`rounded-md border px-3 py-3.5 text-[14px] font-medium transition-colors ${
                          selected
                            ? "border-brand bg-brand text-white shadow-[0_10px_20px_-10px_rgba(43,75,214,0.8)]"
                            : "border-line bg-white text-navy hover:border-brand hover:text-brand"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Details */}
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-[15px] font-bold text-navy">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ada Okafor"
                    className={`${inputClass} mt-3`}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-[15px] font-bold text-navy">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className={`${inputClass} mt-3`}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="email" className="text-[15px] font-bold text-navy">
                  Email address <span className="font-normal text-muted">Optional</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`${inputClass} mt-3`}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="notes" className="text-[15px] font-bold text-navy">
                  Anything you'd like us to know?{" "}
                  <span className="font-normal text-muted">Optional</span>
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add a note for our team"
                  className={`${inputClass} mt-3 resize-none`}
                />
              </div>

              <p className="mt-6 flex items-center gap-2 text-[13px] text-muted">
                <ShieldCheck size={16} className="text-brand" />
                Demo only — details aren't sent or saved.
              </p>

              {error && (
                <p
                  role="alert"
                  className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-3 rounded-md bg-brand px-6 py-5 text-[16px] font-semibold text-white shadow-[0_14px_28px_-12px_rgba(43,75,214,0.8)] transition-colors hover:bg-brand-dark"
              >
                Confirm appointment
                <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}