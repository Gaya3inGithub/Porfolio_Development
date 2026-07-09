import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type TouchEvent } from "react";
import { certificates } from "../../data/certificates";

function VerifiedLearning() {
  const [activeId, setActiveId] = useState<number>(certificates[0]?.id ?? 1);
  const touchStartX = useRef<number | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  const activeCertificate = useMemo(
    () => certificates.find((certificate) => certificate.id === activeId) ?? certificates[0],
    [activeId],
  );

  const activeIndex = certificates.findIndex((certificate) => certificate.id === activeId);
  const currentIndex = activeIndex === -1 ? 0 : activeIndex;
  const nextCertificate = certificates[(currentIndex + 1) % certificates.length];
  const previousCertificate = certificates[(currentIndex - 1 + certificates.length) % certificates.length];

  const handleNext = () => setActiveId(nextCertificate.id);
  const handlePrevious = () => setActiveId(previousCertificate.id);

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

  useEffect(() => {
    const el = buttonRefs.current[activeId];
    if (!el || !navRef.current) return;

    try {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    } catch {
      // ignore scroll errors
    }
  }, [activeId]);

  return (
    <section id="certifications" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35 }}
        className="mb-10 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
          Verified Learning
        </p>
        <h2 className="mt-3 text-4xl font-black text-gray-900 dark:text-white sm:text-5xl">
          Professional Certifications
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          Industry-recognized certifications demonstrating continuous learning,
          technical growth and practical software engineering expertise.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden rounded-[32px] border border-white/50 bg-white/70 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0f172a]/70 dark:shadow-[0_25px_80px_rgba(2,6,23,0.35)] sm:p-6 lg:p-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          <div className="w-full lg:w-[30%] lg:shrink-0">
            <div ref={navRef} className="flex justify-start gap-3 overflow-x-auto pb-2 lg:flex-col lg:justify-center lg:gap-3 lg:overflow-visible lg:pb-0">
              {certificates.map((certificate) => {
                const isActive = certificate.id === activeId;

                return (
                  <button
                    key={certificate.id}
                    type="button"
                    aria-label={`Show ${certificate.title} certification`}
                    aria-selected={isActive}
                    onClick={() => setActiveId(certificate.id)}
                    ref={(el) => { buttonRefs.current[certificate.id] = el; }}
                    className={`group flex min-w-max shrink-0 items-center gap-3 rounded-full border px-4 py-3 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 lg:mx-auto lg:w-full lg:rounded-2xl lg:border-white/50 lg:px-4 lg:py-4 dark:lg:border-white/10 ${
                      isActive
                        ? "border-emerald-500/40 bg-emerald-500/10 shadow-[0_10px_30px_rgba(16,185,129,0.15)] lg:border-emerald-500/40 lg:bg-emerald-500/10"
                        : "border-transparent bg-white/50 hover:border-emerald-500/20 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
                    }`}
                  >
                    <motion.span
                      layoutId={`indicator-${certificate.id}`}
                      className={`flex h-3.5 w-3.5 shrink-0 rounded-full ${
                        certificate.theme === "blue"
                          ? "bg-blue-500"
                          : certificate.theme === "purple"
                            ? "bg-violet-500"
                            : certificate.theme === "green"
                              ? "bg-emerald-500"
                              : certificate.theme === "orange"
                                ? "bg-orange-500"
                                : certificate.theme === "cyan"
                                  ? "bg-cyan-500"
                                  : "bg-emerald-500"
                      }`}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                        {certificate.title}
                      </span>
                      <span className="block text-sm text-gray-500 dark:text-gray-400">
                        {certificate.platform}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-[70%]">
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="rounded-[24px] border border-transparent bg-transparent"
            >
              <AnimatePresence mode="wait">
                {activeCertificate && (
                  <motion.div
                    key={activeCertificate.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden rounded-[24px] border border-white/60 bg-slate-100/80 p-2 shadow-inner dark:border-white/10 dark:bg-slate-900/70"
                    >
                      <motion.img
                        src={activeCertificate.image}
                        alt={activeCertificate.title}
                        whileHover={{ scale: 1.015 }}
                        transition={{ duration: 0.25 }}
                        className="h-56 w-full rounded-[18px] object-cover object-center sm:h-72"
                      />
                    </motion.div>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {activeCertificate.platform}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Issued {activeCertificate.date}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        • {activeCertificate.level}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        • {activeCertificate.duration}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          {activeCertificate.title}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                          {activeCertificate.description}
                        </p>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                            Skills Covered
                          </h4>
                          <ul className="mt-3 space-y-3">
                            {activeCertificate.skills.map((skill, index) => (
                              <motion.li
                                key={skill}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.04 }}
                                className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                              >
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                                  ✓
                                </span>
                                <span>{skill}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-[24px] border border-white/60 bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/60">
                          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                            Verification
                          </p>
                          <a
                            href={activeCertificate.credential}
                            target="_blank"
                            rel="noreferrer"
                            className="group mt-3 inline-flex items-center gap-2 text-base font-medium text-emerald-600 underline decoration-emerald-400/40 underline-offset-4 transition-all duration-300 hover:text-emerald-500 dark:text-emerald-400"
                          >
                            <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                              Credential ↗
                            </span>
                          </a>
                          <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                            Issued by {activeCertificate.issuer} and verified through the official platform.
                          </p>
                        </div>
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

export default VerifiedLearning;
