import { ArrowUpRight, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["Menu", "#menu"],
  ["Gallery", "#gallery"],
  ["About", "#about"],
  ["Reservations", "#reservations"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e1d5] bg-[#f7f3eb]/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label="Saffron and Stone home"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-10 place-items-center rounded-full bg-[#a64227] text-sm font-semibold tracking-widest text-[#fff8ed] transition-transform group-hover:rotate-[-8deg]">
            S<span className="font-display italic">&amp;</span>S
          </span>
          <span className="font-display text-lg font-semibold leading-none tracking-tight sm:text-xl">
            saffron <span className="text-[#b64c2e]">&amp;</span> stone
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[13px] font-medium text-[#675950] transition-colors hover:text-[#a64227]"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#menu"
          className="hidden items-center gap-2 rounded-full bg-[#a64227] px-5 py-3 text-xs font-semibold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-[#87371f] hover:shadow-lg hover:shadow-[#a64227]/20 lg:inline-flex"
        >
          Order now <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-[#e3d9ca] text-[#30231d] transition-colors hover:bg-white lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} /> : <MenuIcon size={20} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`${isOpen ? "grid grid-rows-[1fr] border-t border-[#e9e1d5]" : "grid grid-rows-[0fr]"} transition-[grid-template-rows] duration-300 lg:hidden`}
      >
        <div className="overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-5 py-3 sm:px-8">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-[#675950] transition-colors hover:bg-white hover:text-[#a64227]"
              >
                {label}
              </a>
            ))}
            <a
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#a64227] px-4 py-3 text-sm font-semibold text-white"
            >
              Order now <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
