import { ArrowUpRight } from "lucide-react";
import { galleryImages } from "../data.js";

export default function Gallery() {
  return (
    <section id="gallery" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#b64c2e]">
              Pull up a chair
            </p>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              A taste of <span className="italic text-[#a64227]">the good life.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-[#a64227] sm:self-auto"
          >
            Find us in the neighborhood
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="grid auto-rows-[165px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`group overflow-hidden rounded-2xl sm:rounded-[1.5rem] ${
                index === 0 ? "row-span-2" : ""
              } ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
