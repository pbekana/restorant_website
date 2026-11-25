import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  ["Menu", "#menu"],
  ["Our story", "#about"],
  ["Gallery", "#gallery"],
  ["Reservations", "#reservations"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="bg-[#261a15] px-5 pb-6 pt-12 text-[#fffaf2] sm:px-8 sm:pt-14 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-9 sm:flex-row sm:items-end">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="grid size-10 place-items-center rounded-full bg-[#b64c2e] text-sm font-semibold tracking-widest">
                S<span className="font-display italic">&amp;</span>S
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
                saffron <span className="text-[#e6a16e]">&amp;</span> stone
              </span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
              Seasonal plates, good company, and a seat waiting just for you.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-xs font-medium text-white/65 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
          <nav aria-label="Social media" className="flex flex-wrap gap-x-5 gap-y-3">
            {[
              ["Facebook", "https://facebook.com"],
              ["Instagram", "https://instagram.com"],
              ["X", "https://x.com"],
              ["TikTok", "https://tiktok.com"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-white/65 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Saffron &amp; Stone. Made for gathering.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-1 self-start transition-colors hover:text-white sm:self-auto"
          >
            Back to top <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
