import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-73px)] items-end overflow-hidden bg-[#30231d] sm:items-center"
    >
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#201712]/90 via-[#201712]/65 to-[#201712]/15 sm:from-[#201712]/85 sm:via-[#201712]/45 sm:to-[#201712]/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#201712]/40 via-transparent to-[#201712]/10" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-24 sm:px-8 sm:pb-28 sm:pt-28 lg:px-12">
        <div className="max-w-3xl animate-rise-in">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f3ba83] sm:text-xs">
            <span className="h-px w-9 bg-[#f3ba83]" />
            Saffron &amp; Stone · A neighborhood table, since 2014
          </p>
          <h1
            id="hero-title"
            className="max-w-3xl font-display text-5xl font-medium leading-[1.08] tracking-[-0.045em] text-[#fffaf2] sm:text-7xl lg:text-[92px]"
          >
            Gather close.
            <br />
            <span className="italic text-[#efb27b]">Eat well.</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/75 sm:mt-8 sm:text-base sm:leading-8">
            Seasonal ingredients, a glowing wood fire, and the kind of
            hospitality that makes the evening linger a little longer.
          </p>
          <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row sm:mt-10">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#c25835] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#a64227] hover:shadow-xl hover:shadow-black/20"
            >
              Explore our menu <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#reservations"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Reserve a table
            </a>
          </div>
        </div>
      </div>

      <a
        href="#featured"
        aria-label="Scroll to featured dishes"
        className="absolute bottom-7 right-6 hidden size-12 items-center justify-center rounded-full border border-white/30 text-white/80 transition-all hover:-translate-y-1 hover:border-white hover:text-white sm:flex lg:right-12"
      >
        <ArrowDown size={18} aria-hidden="true" />
      </a>
      <div className="absolute bottom-7 left-5 text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 sm:left-8 lg:left-12">
        40°43&apos; N &nbsp; 73°59&apos; W
      </div>
    </section>
  );
}
