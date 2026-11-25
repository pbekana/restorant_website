import { Star } from "lucide-react";
import { testimonials } from "../data.js";

export default function Testimonials() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-xl text-center sm:mb-14">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#b64c2e]">
            Kind words from our table
          </p>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Don&apos;t just take <span className="italic text-[#a64227]">our word.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col rounded-[1.5rem] border border-[#e9e1d5] bg-[#fffdf8] p-6 shadow-[0_8px_32px_rgba(74,49,32,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(74,49,32,0.1)] sm:p-7"
            >
              <div
                className="flex gap-1 text-[#d68b45]"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={14} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-5 flex-1 font-display text-lg leading-7 text-[#47362d]">
                “{testimonial.review}”
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-[#eee6da] pt-5">
                <img
                  src={testimonial.image}
                  alt=""
                  loading="lazy"
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold">{testimonial.name}</h3>
                  <p className="mt-0.5 text-xs text-[#8b7b70]">
                    {testimonial.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
