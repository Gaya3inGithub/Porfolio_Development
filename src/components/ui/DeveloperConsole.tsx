import { motion, useReducedMotion } from "framer-motion";

const deliveryStages = [
  { label: "Discover", number: "01" },
  { label: "Shape", number: "02" },
  { label: "Build", number: "03" },
  { label: "Launch", number: "04" },
];

type DeveloperConsoleProps = {
  serviceName: string;
};

function DeveloperConsole({ serviceName }: DeveloperConsoleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      aria-label={`${serviceName} delivery flow`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden rounded-[24px] border border-white/60 bg-white/70 p-4 shadow-[0_12px_35px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 dark:shadow-[0_12px_35px_rgba(2,6,23,0.28)] sm:p-5"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            {!reduceMotion && <motion.span animate={{ scale: [1, 1.9, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }} className="absolute inset-1 rounded-lg border border-emerald-500/50" />}
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Delivery flow</p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">From idea to impact</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-[9px] font-semibold tracking-[0.14em] text-cyan-700 dark:text-cyan-300">IN MOTION</span>
      </div>

      <motion.div
        key={serviceName}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-5 rounded-2xl border border-emerald-500/15 bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-transparent px-3 py-2.5"
      >
        <p className="truncate text-center text-xs font-semibold text-emerald-700 dark:text-emerald-300">{serviceName}</p>
      </motion.div>

      <div className="relative mt-5" role="img" aria-label="Discover, shape, build, and launch workflow">
        <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-4 h-px bg-gradient-to-r from-emerald-500/30 via-cyan-500/50 to-emerald-500/30" />
        {!reduceMotion && <motion.span aria-hidden="true" className="absolute top-[13px] z-10 h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50" animate={{ left: ["12.5%", "85.5%"], opacity: [0, 1, 1, 0] }} transition={{ duration: 1.7, repeat: Infinity, repeatDelay: 2.8, ease: "easeInOut" }} />}

        <div className="relative grid grid-cols-4 gap-1">
          {deliveryStages.map((stage, index) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="flex min-w-0 flex-col items-center text-center"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/30 bg-white text-[9px] font-bold text-emerald-700 shadow-sm dark:bg-slate-900 dark:text-emerald-300">{stage.number}</span>
              <span className="mt-2 text-[10px] font-semibold text-gray-600 dark:text-gray-300 sm:text-xs">{stage.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-center text-[11px] leading-5 text-gray-500 dark:text-gray-400">Clear milestones. Thoughtful execution. Measurable outcomes.</p>
    </motion.aside>
  );
}

export default DeveloperConsole;
