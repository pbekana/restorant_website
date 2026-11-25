import { useState } from "react";
import { menuCategories } from "../data.js";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);
  const activeMenu = menuCategories.find(
    (category) => category.name === activeCategory,
  );

  return (
    <section id="menu" className="bg-[#eee6d9] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-9 max-w-xl text-center sm:mb-12">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#b64c2e]">
            A little of everything
          </p>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Made with the <span className="italic text-[#a64227]">season.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#75675c]">
            Thoughtful plates, familiar favorites, and something new each time
            you visit.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Menu categories"
          className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10"
        >
          {menuCategories.map((category) => {
            const isActive = category.name === activeCategory;
            return (
              <button
                key={category.name}
                id={`tab-${category.name.toLowerCase().replaceAll(" ", "-")}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="menu-panel"
                onClick={() => setActiveCategory(category.name)}
                className={`rounded-full px-5 py-3 text-xs font-semibold transition-all sm:px-6 ${
                  isActive
                    ? "bg-[#a64227] text-white shadow-lg shadow-[#a64227]/15"
                    : "border border-[#d9cdbc] bg-transparent text-[#66574c] hover:border-[#a64227] hover:text-[#a64227]"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <div
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.toLowerCase().replaceAll(" ", "-")}`}
          className="rounded-[1.75rem] border border-[#e1d7c8] bg-[#faf7f0] p-5 shadow-[0_16px_50px_rgba(74,49,32,0.06)] sm:p-8 lg:p-10"
        >
          <ul className="divide-y divide-[#e9e0d4]">
            {activeMenu.items.map((item) => (
              <li
                key={item.name}
                className="group flex items-start justify-between gap-5 py-5 first:pt-1 last:pb-1 sm:py-6"
              >
                <div>
                  <h3 className="font-display text-lg transition-colors group-hover:text-[#a64227] sm:text-xl">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 text-[#81736a] sm:text-sm">
                    {item.description}
                  </p>
                </div>
                <span className="shrink-0 pt-1 text-sm font-semibold text-[#a64227]">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-7 border-t border-[#e9e0d4] pt-5 text-center text-xs text-[#8b7b70]">
            Please tell your server about any dietary requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
