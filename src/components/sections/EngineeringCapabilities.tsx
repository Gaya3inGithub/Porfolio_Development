import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type TouchEvent } from "react";
import { capabilities } from "../../data/capabilities";
import DeveloperConsole from "../ui/DeveloperConsole";

const suitabilityMap: Record<number, string[]> = {
  1: ["Personal Brands", "Agencies", "Local Businesses", "Portfolios"],
  2: ["REST APIs", "Authentication", "Admin Panels", "Business Platforms"],
  3: ["Schools", "Colleges", "Companies", "Organizations"],
  4: ["Inventory", "ERP", "CRM", "Reporting"],
  5: ["Automation", "Monitoring", "Security", "Research"],
  6: ["Unique Requirements", "Business Logic", "Internal Tools", "Digital Solutions"],
};

const showCreativeControlRoom = false;

function EngineeringCapabilities() {
  const [activeId, setActiveId] = useState<number>(capabilities[0]?.id ?? 1);
  const touchStartX = useRef<number | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<number, HTMLButtonElement | null>>({});

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

    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX ?? null;
    touchStartX.current = null;

    if (endX === null) return;

    const delta = startX - endX;
    const threshold = 50;

    if (Math.abs(delta) < threshold) return;

    if (delta > 0) {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  useEffect(() => {
    const activeButton = buttonRefs.current[activeId];

    if (!activeButton || !navRef.current) return;

    activeButton.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeId]);

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
          Software Solutions
        </p>
        <h2 className="mt-3 text-4xl font-black text-gray-900 dark:text-white sm:text-5xl">
          Engineering Capabilities
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          From business websites to scalable backend systems, I build software solutions designed to solve real-world challenges with performance, usability, and maintainability in mind.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-[32px] border border-white/50 bg-white/70 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0f172a]/70 dark:shadow-[0_25px_80px_rgba(2,6,23,0.35)] sm:p-6 lg:p-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
          <div className="flex min-w-0 w-full flex-col lg:w-[36%] lg:shrink-0">
            <div
              ref={navRef}
              className="flex justify-start gap-3 overflow-x-auto pb-2 lg:flex-col lg:justify-center lg:gap-3 lg:overflow-visible lg:pb-0"
            >
              {capabilities.map((capability) => {
                const isActive = capability.id === activeId;

                return (
                  <button
                    key={capability.id}
                    type="button"
                    aria-label={`Show ${capability.title} service`}
                    aria-selected={isActive}
                    onClick={() => setActiveId(capability.id)}
                    ref={(element) => {
                      buttonRefs.current[capability.id] = element;
                    }}
                    className={`group flex min-w-max shrink-0 items-center gap-3 rounded-full border px-4 py-3 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 lg:mx-auto lg:w-full lg:rounded-[22px] lg:border-white/50 lg:px-4 lg:py-4 dark:lg:border-white/10 ${
                      isActive
                        ? "border-emerald-500/40 bg-emerald-500/10 shadow-[0_10px_30px_rgba(16,185,129,0.15)]"
                        : "border-transparent bg-white/50 hover:border-emerald-500/20 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
                    }`}
                  >
                    <motion.span
                      layoutId={`capability-indicator-${capability.id}`}
                      className={`flex h-3.5 w-3.5 shrink-0 rounded-full ${
                        isActive ? "bg-emerald-500" : "bg-gray-400 dark:bg-gray-500"
                      }`}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                        {capability.title}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {showCreativeControlRoom && <div className="relative mt-6 min-h-52 overflow-hidden rounded-[24px] border border-indigo-400/25 bg-gradient-to-br from-indigo-400/15 via-sky-300/10 to-transparent p-5 dark:border-indigo-300/20 dark:from-indigo-400/10 lg:min-h-64">
              <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(99,102,241,.35)_1px,transparent_0)] [background-size:18px_18px]" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-300">Creative control room</p>
                  <p className="mt-2 max-w-xs text-lg font-semibold leading-7 text-slate-800 dark:text-white">Select a service and watch the workshop tune itself for the task.</p>
                </div>
                <div className="relative mx-auto mt-3 h-28 w-56">
                  <motion.div key={activeCapability.id} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 250, damping: 15 }} className="absolute bottom-2 left-1/2 flex h-20 w-32 -translate-x-1/2 flex-col items-center justify-center rounded-[30px] border-4 border-indigo-500 bg-white shadow-[0_12px_25px_rgba(79,70,229,.25)] dark:bg-slate-900">
                    <span className="h-3 w-3 rounded-full bg-indigo-500" />
                    <span className="mt-2 h-2 w-12 rounded-full bg-indigo-200 dark:bg-indigo-400/40" />
                    <span className="mt-1 h-2 w-8 rounded-full bg-sky-200 dark:bg-sky-400/30" />
                  </motion.div>
                  <motion.span animate={{ x: [0, 6, 0], y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }} className="absolute left-2 top-5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-sky-500 bg-sky-200 text-lg shadow-md dark:bg-sky-400/30">✦</motion.span>
                  <motion.span animate={{ x: [0, -6, 0], y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.7, ease: "easeInOut", delay: 0.3 }} className="absolute right-3 top-1 flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-fuchsia-500 bg-fuchsia-200 text-lg shadow-md dark:bg-fuchsia-400/25">⌘</motion.span>
                  <span className="absolute bottom-0 left-9 h-3 w-40 rounded-full bg-indigo-900/10 blur-sm dark:bg-white/10" />
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-300">{activeCapability.title}</span>
                </div>
              </div>
            </div>}

            <div className="mt-6 w-full lg:mt-auto">
              <DeveloperConsole serviceName={activeCapability.title} />
            </div>
          </div>

          <div className="min-w-0 w-full lg:w-[64%]">
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="rounded-[24px] border border-transparent bg-transparent"
            >
              <AnimatePresence mode="wait">
                {activeCapability && (
                  <motion.div
                    key={activeCapability.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="break-words text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
                        {activeCapability.title}
                      </h3>
                      <p className="mt-2 break-words text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8">
                        {activeCapability.headline}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:mt-4 sm:text-base sm:leading-8">
                        {activeCapability.description}
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-white/60 bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/60 sm:p-6">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                        What this includes
                      </h4>
                      <ul className="mt-4 space-y-3 sm:mt-5">
                        {activeCapability.highlights.map((highlight, index) => (
                          <motion.li
                            key={highlight}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, delay: index * 0.05 }}
                            className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 sm:text-base"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
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
                      <div className="mt-3 flex flex-wrap gap-3 sm:mt-4">
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

              <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
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
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default EngineeringCapabilities;
