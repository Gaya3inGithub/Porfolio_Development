import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState, type TouchEvent } from "react";
import { capabilities } from "../../data/capabilities";

const suitabilityMap: Record<number, string[]> = {
  1: ["Personal Brands", "Agencies", "Local Businesses", "Portfolios"],
  2: ["REST APIs", "Authentication", "Admin Panels", "Business Platforms"],
  3: ["Schools", "Colleges", "Companies", "Organizations"],
  4: ["Inventory", "ERP", "CRM", "Reporting"],
  5: ["Automation", "Monitoring", "Security", "Research"],
  6: ["Unique Requirements", "Business Logic", "Internal Tools", "Digital Solutions"],
};

function EngineeringCapabilities() {
  const [activeId, setActiveId] = useState<number>(capabilities[0]?.id ?? 1);
  const touchStartX = useRef<number | null>(null);

  const activeCapability = useMemo(
    () => capabilities.find((capability) => capability.id === activeId) ?? capabilities[0],
    [activeId],
  );

  const activeIndex = capabilities.findIndex((capability) => capability.id === activeId);
  const currentIndex = activeIndex === -1 ? 0 : activeIndex;
  const nextCapability = capabilities[(currentIndex + 1) % capabilities.length];
  const previousCapability = capabilities[(currentIndex - 1 + capabilities.length) % capabilities.length];

  const handleNext = () => setActiveId(nextCapability.id);
  const handlePrevious = () => setActiveId(previousCapability.id);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? null;
    if (endX === null) return;

    const delta = touchStartX.current - endX;
    const threshold = 50;

    if (Math.abs(delta) < threshold) return;
    if (delta > 0) {
      handleNext();
    } else {
      handlePrevious();
    }
    touchStartX.current = null;
  };

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35 }}
        className="mb-10 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
          Engineering Expertise
        </p>
        <h2 className="mt-3 text-4xl font-black text-gray-900 dark:text-white sm:text-5xl">
          Engineering Capabilities
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          Building practical software solutions that solve real-world problems across
          business, education, backend systems and intelligent applications.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden rounded-[32px] border border-white/50 bg-white/70 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0f172a]/70 dark:shadow-[0_25px_80px_rgba(2,6,23,0.35)] sm:p-6 lg:p-8"
      >
        <div className="hidden gap-8 lg:flex lg:items-stretch">
          <div className="w-[40%] border-r border-gray-200/70 pr-6 dark:border-white/10">
            <div className="space-y-3">
              {capabilities.map((capability) => {
                const isActive = capability.id === activeId;

                return (
                  <button
                    key={capability.id}
                    type="button"
                    aria-label={`Select ${capability.title}`}
                    aria-selected={isActive}
                    onClick={() => setActiveId(capability.id)}
                    className={`group w-full rounded-[22px] border px-4 py-4 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                      isActive
                        ? "border-emerald-500/40 bg-emerald-500/10 shadow-[0_12px_35px_rgba(16,185,129,0.12)]"
                        : "border-transparent bg-white/50 hover:-translate-y-0.5 hover:border-emerald-500/20 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <motion.span
                        layoutId={`capability-indicator-${capability.id}`}
                        className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                          isActive ? "bg-emerald-500" : "bg-gray-400 dark:bg-gray-500"
                        }`}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="min-w-0">
                        <div className="text-base font-semibold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                          {capability.title}
                        </div>
                        <div className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                          {capability.headline}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex-1 flex">
            <AnimatePresence mode="wait">
              {activeCapability && (
                <motion.div
                  key={activeCapability.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="flex h-full flex-col space-y-4"
                >
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                      {activeCapability.title}
                    </h3>
                    <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
                      {activeCapability.headline}
                    </p>
                    <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-400">
                      {activeCapability.description}
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/60 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/60">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                      What this includes
                    </h4>
                    <ul className="mt-5 space-y-3">
                      {activeCapability.highlights.map((highlight, index) => (
                        <motion.li
                          key={highlight}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: index * 0.05 }}
                          className="flex items-center gap-3 text-base text-gray-700 dark:text-gray-300"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                            ✓
                          </span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto rounded-[24px] border border-gray-200/70 bg-gradient-to-r from-emerald-500/10 to-transparent px-5 py-4 dark:border-white/10">
                    <div className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                      Suitable For
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {suitabilityMap[activeCapability.id]?.map((item) => (
                        <span
                          key={item}
                          className="text-sm text-gray-700 dark:text-gray-300"
                        >
                          • {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="hidden lg:flex mt-6 flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={handlePrevious}
            className="rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-white/10 dark:bg-slate-900/70 dark:text-gray-200 dark:hover:bg-slate-800"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-emerald-400 dark:text-slate-900 dark:hover:bg-emerald-300"
          >
            Next
          </button>
        </div>

        <div className="flex flex-col gap-4 lg:hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="flex justify-start gap-2 overflow-x-auto pb-1">
            {capabilities.map((capability) => {
              const isActive = capability.id === activeId;

              return (
                <button
                  key={capability.id}
                  type="button"
                  aria-label={`Select ${capability.title}`}
                  aria-selected={isActive}
                  onClick={() => setActiveId(capability.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                    isActive
                      ? "bg-emerald-500 text-white shadow-[0_10px_25px_rgba(16,185,129,0.22)]"
                      : "bg-white/70 text-gray-700 dark:bg-white/10 dark:text-gray-300"
                  }`}
                >
                  {capability.title}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {activeCapability && (
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {activeCapability.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                    {activeCapability.headline}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {activeCapability.description}
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/60 bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/60">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                    What this includes
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {activeCapability.highlights.map((highlight, index) => (
                      <motion.li
                        key={highlight}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.23, delay: index * 0.04 }}
                        className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                          ✓
                        </span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[24px] border border-gray-200/70 bg-gradient-to-r from-emerald-500/10 to-transparent px-5 py-4 dark:border-white/10">
                  <div className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                    Suitable For
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {suitabilityMap[activeCapability.id]?.map((item) => (
                      <span key={item} className="text-sm text-gray-700 dark:text-gray-300">
                        • {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap justify-center gap-3 rounded-[24px] border border-gray-200/70 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-950/60 lg:hidden">
            <button
              type="button"
              onClick={handlePrevious}
              className="w-full rounded-full border border-gray-200 bg-white/90 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-white/10 dark:bg-slate-900/80 dark:text-gray-200 dark:hover:bg-slate-800 sm:w-auto"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-full rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-emerald-400 dark:text-slate-900 dark:hover:bg-emerald-300 sm:w-auto"
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default EngineeringCapabilities;
