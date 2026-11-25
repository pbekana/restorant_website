import { ArrowRight, Flame, Leaf, Sparkles } from "lucide-react";

const values = [
  { icon: Leaf, label: "Seasonal, always" },
  { icon: Flame, label: "Fire-led cooking" },
  { icon: Sparkles, label: "Made with care" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#2e211b] px-5 py-20 text-[#fffaf2] sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="absolute -left-3 -top-3 size-32 rounded-tl-[2rem] border-l border-t border-[#d68c5d]/60 sm:-left-5 sm:-top-5 sm:size-44" />
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1100&q=85"
            alt="Chef Marco preparing a fresh dish in the kitchen"
            loading="lazy"
            className="relative aspect-[4/4.2] w-full rounded-[1.75rem] object-cover object-center sm:aspect-[5/4.3]"
          />
          <div className="absolute -bottom-5 right-4 rounded-2xl bg-[#b64c2e] px-5 py-4 shadow-xl sm:right-8 sm:px-7 sm:py-5">
            <span className="block font-display text-3xl leading-none sm:text-4xl">10</span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-[10px]">
              years around the table
            </span>
          </div>
        </div>

        <div className="pt-3 lg:py-8">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e6a16e]">
            A story best shared
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Good food.
            <br />
            <span className="italic text-[#e6a16e]">Good company.</span>
            <br />
            No rush.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#d3c7ba] sm:text-base sm:leading-8">
            Saffron &amp; Stone began with a simple idea: bring people together
            around food made with heart. We work with nearby farms, follow the
            seasons, and let a live-fire hearth do what it does best.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#d3c7ba] sm:text-base sm:leading-8">
            For Chef Marco, the best meal is never just what&apos;s on the plate.
            It&apos;s the stories, the second glass, and the friends who stay a
            little longer.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {values.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#f0c9a5]"
              >
                <Icon size={15} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
          <a
            href="#reservations"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#e6a16e] hover:bg-white/5"
          >
            Come say hello <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
