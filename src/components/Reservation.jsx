import { CalendarDays, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const inputClass =
  "mt-2 w-full rounded-xl border border-[#e7ded2] bg-[#fffdf8] px-4 py-3.5 text-sm text-[#30231d] outline-none transition placeholder:text-[#a99d91] focus:border-[#b64c2e] focus:ring-4 focus:ring-[#b64c2e]/10";

const today = new Date();
const minReservationDate = new Date(
  today.getTime() - today.getTimezoneOffset() * 60_000,
)
  .toISOString()
  .slice(0, 10);

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setIsSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section
      id="reservations"
      className="scroll-mt-24 bg-[#eee6d9] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#e1d7c8] bg-[#faf7f0] shadow-[0_18px_60px_rgba(74,49,32,0.08)] lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative isolate flex min-h-[320px] flex-col justify-between overflow-hidden bg-[#402a20] p-7 text-white sm:p-10 lg:p-12">
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=1000&q=85"
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-20 size-full object-cover opacity-45"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2b1d17]/80 to-[#2b1d17]/50" />
          <div>
            <span className="grid size-12 place-items-center rounded-full border border-white/30">
              <CalendarDays size={20} aria-hidden="true" />
            </span>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.28em] text-[#efba90]">
              Your evening, sorted
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Let&apos;s save
              <br />
              you a seat.
            </h2>
          </div>
          <p className="mt-10 max-w-xs text-sm leading-6 text-white/75">
            Good evenings start with a plan. Tell us when you&apos;re coming and
            we&apos;ll have the table ready.
          </p>
        </div>

        <div className="p-6 sm:p-9 lg:p-12">
          {isSubmitted ? (
            <div
              role="status"
              className="flex min-h-[380px] flex-col items-center justify-center text-center"
            >
              <CheckCircle2 size={46} className="text-[#a64227]" aria-hidden="true" />
              <h3 className="mt-5 font-display text-3xl">You&apos;re on our list.</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#75675c]">
                Thanks for your interest. This preview doesn&apos;t send
                reservations yet; please call{" "}
                <a className="font-semibold text-[#a64227]" href="tel:+12125550148">
                  (212) 555-0148
                </a>{" "}
                to confirm your table.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-6 rounded-full border border-[#d8cbb9] px-5 py-2.5 text-xs font-semibold text-[#74432e] transition-colors hover:bg-[#eee6d9]"
              >
                Make another reservation
              </button>
            </div>
          ) : (
            <>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#b64c2e]">
                Reservations
              </p>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl">
                Book your table
              </h3>
              <p className="mt-2 text-sm text-[#81736a]">
                We can&apos;t wait to welcome you.
              </p>
              <form className="mt-7 grid gap-x-4 gap-y-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                <label className="text-xs font-semibold text-[#594a40]">
                  Your name
                  <input
                    className={inputClass}
                    type="text"
                    name="name"
                    placeholder="Alex Morgan"
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="text-xs font-semibold text-[#594a40]">
                  Email address
                  <input
                    className={inputClass}
                    type="email"
                    name="email"
                    placeholder="alex@example.com"
                    autoComplete="email"
                    required
                  />
                </label>
                <label className="text-xs font-semibold text-[#594a40]">
                  Phone number
                  <input
                    className={inputClass}
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    autoComplete="tel"
                    required
                  />
                </label>
                <label className="text-xs font-semibold text-[#594a40]">
                  Date
                  <input
                    className={inputClass}
                    type="date"
                    name="date"
                    min={minReservationDate}
                    required
                  />
                </label>
                <label className="text-xs font-semibold text-[#594a40]">
                  Time
                  <select className={inputClass} name="time" defaultValue="" required>
                    <option value="" disabled>
                      Select a time
                    </option>
                    <option>5:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                    <option>8:30 PM</option>
                  </select>
                </label>
                <label className="text-xs font-semibold text-[#594a40]">
                  Guests
                  <select className={inputClass} name="guests" defaultValue="" required>
                    <option value="" disabled>
                      Number of guests
                    </option>
                    {[1, 2, 3, 4, 5, 6].map((number) => (
                      <option key={number} value={number}>
                        {number} {number === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                    <option value="7+">7+ guests</option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#a64227] px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#87371f] hover:shadow-lg hover:shadow-[#a64227]/20 sm:col-span-2"
                >
                  Request a table <CalendarDays size={16} aria-hidden="true" />
                </button>
              </form>
              <p className="mt-4 text-center text-[11px] leading-5 text-[#8b7b70]">
                For parties of 7 or more, please call us at{" "}
                <a className="font-semibold text-[#a64227]" href="tel:+12125550148">
                  (212) 555-0148
                </a>
                .
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
