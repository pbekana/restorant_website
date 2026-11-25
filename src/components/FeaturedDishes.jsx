import { ArrowUpRight } from "lucide-react";
import { featuredDishes } from "../data.js";

export default function FeaturedDishes() {
  return (
    <section id="featured" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#b64c2e]">
              Straight from the hearth
            </p>
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              A few things we <span className="italic text-[#a64227]">love.</span>
            </h2>
          </div>
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-[#a64227] sm:self-auto"
          >
            See the full menu
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredDishes.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden rounded-[1.6rem] border border-[#e9e1d5] bg-[#fffdf8] shadow-[0_8px_32px_rgba(74,49,32,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(74,49,32,0.12)]"
            >
              <div className="relative aspect-[1.28] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#fffaf2]/95 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#704533]">
                  {dish.tag}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl leading-snug sm:text-2xl">
                    {dish.name}
                  </h3>
                  <span className="pt-1 text-sm font-semibold text-[#a64227]">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[#81736a]">
                  {dish.description}
                </p>
                <a
                  href="#reservations"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#a64227] transition-colors hover:text-[#75351f]"
                >
                  Order now <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs text-[#8b7b70]">
          Our menu changes with the seasons. Please let us know about any
          allergies.
        </p>
      </div>
    </section>
  );
}
