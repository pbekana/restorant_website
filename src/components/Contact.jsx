import {
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "X", href: "https://x.com", icon: Twitter },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: ({ size = 17 }) => (
      <svg
        aria-hidden="true"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.6 7.1a6.8 6.8 0 0 1-4.2-1.5v8.2a6.3 6.3 0 1 1-5.4-6.2v3.2a3.2 3.2 0 1 0 2.2 3V2.5h3.2a3.7 3.7 0 0 0 4.2 3.5v3.2Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 sm:mb-12">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#b64c2e]">
            Find your way to us
          </p>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Right around <span className="italic text-[#a64227]">the corner.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-[#e9e1d5] bg-[#fffdf8] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-[#f4e7d8] text-[#a64227]">
                  <MapPin size={17} aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl">Visit us</h3>
              </div>
              <address className="mt-4 text-sm not-italic leading-6 text-[#75675c]">
                42 Orchard Street
                <br />
                New York, NY 10002
              </address>
            </div>

            <div className="rounded-2xl border border-[#e9e1d5] bg-[#fffdf8] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-[#f4e7d8] text-[#a64227]">
                  <Clock3 size={17} aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl">Opening hours</h3>
              </div>
              <div className="mt-4 space-y-1.5 text-sm text-[#75675c]">
                <p className="flex justify-between gap-3">
                  <span>Mon–Thu</span>
                  <span>5:00 PM – 10:00 PM</span>
                </p>
                <p className="flex justify-between gap-3">
                  <span>Fri–Sat</span>
                  <span>5:00 PM – 11:00 PM</span>
                </p>
                <p className="flex justify-between gap-3">
                  <span>Sunday</span>
                  <span>4:00 PM – 9:00 PM</span>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e9e1d5] bg-[#fffdf8] p-5 sm:col-span-2 sm:p-6 lg:col-span-1">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-[#f4e7d8] text-[#a64227]">
                      <Phone size={17} aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-xl">Say hello</h3>
                  </div>
                  <a
                    className="mt-3 block text-sm text-[#75675c] transition-colors hover:text-[#a64227]"
                    href="tel:+12125550148"
                  >
                    (212) 555-0148
                  </a>
                  <a
                    className="mt-1 block text-sm text-[#75675c] transition-colors hover:text-[#a64227]"
                    href="mailto:hello@saffronandstone.com"
                  >
                    hello@saffronandstone.com
                  </a>
                </div>
                <div className="flex gap-2">
                  {socialLinks.map(({ name, href, icon: Icon }) => (
                    <a
                      key={name}
                      href={href}
                      aria-label={name}
                      target="_blank"
                      rel="noreferrer"
                      className="grid size-9 place-items-center rounded-full border border-[#e8dfd3] text-[#705c4e] transition-all hover:border-[#a64227] hover:bg-[#a64227] hover:text-white"
                    >
                      <Icon size={16} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=42+Orchard+Street+New+York+NY+10002"
            target="_blank"
            rel="noreferrer"
            aria-label="Open map directions to Saffron and Stone in Google Maps"
            className="group relative isolate flex min-h-[330px] overflow-hidden rounded-[1.75rem] border border-[#e9e1d5] bg-[#e8dfd2] sm:min-h-[420px]"
          >
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85"
              alt="Saffron & Stone dining room"
              loading="lazy"
              className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#271a14]/75 via-transparent to-transparent" />
            <div className="mt-auto flex w-full items-end justify-between gap-4 p-6 text-white sm:p-8">
              <div>
                <span className="grid size-11 place-items-center rounded-full bg-[#a64227]">
                  <MapPin size={19} aria-hidden="true" />
                </span>
                <p className="mt-4 font-display text-2xl">42 Orchard Street</p>
                <p className="mt-1 text-xs text-white/75">Lower East Side, New York</p>
              </div>
              <span className="mb-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/40 transition-all group-hover:rotate-45 group-hover:bg-white group-hover:text-[#a64227]">
                <Send size={16} aria-hidden="true" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
