import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type NetworkNode = {
  id: string;
  x: number;
  y: number;
  pattern: number;
};

const center = { x: 50, y: 50 };

const networkNodes: NetworkNode[] = [
  { id: "ideas", x: 20, y: 23, pattern: 0 },
  { id: "strategy", x: 50, y: 13, pattern: 1 },
  { id: "design", x: 80, y: 23, pattern: 2 },
  { id: "build", x: 85, y: 58, pattern: 3 },
  { id: "launch", x: 64, y: 84, pattern: 0 },
  { id: "feedback", x: 32, y: 84, pattern: 1 },
  { id: "collaboration", x: 14, y: 58, pattern: 2 },
];

function NodePattern({ pattern }: { pattern: number }) {
  if (pattern === 0) {
    return <span className="grid grid-cols-2 gap-0.5"><i className="h-1.5 w-1.5 rounded-sm bg-emerald-500 dark:bg-emerald-400" /><i className="h-1.5 w-1.5 rounded-sm bg-cyan-400" /><i className="h-1.5 w-1.5 rounded-sm bg-cyan-400" /><i className="h-1.5 w-1.5 rounded-sm bg-emerald-500 dark:bg-emerald-400" /></span>;
  }

  if (pattern === 1) {
    return <span className="flex items-end gap-0.5"><i className="h-2 w-1 rounded-full bg-cyan-400" /><i className="h-3.5 w-1 rounded-full bg-emerald-500 dark:bg-emerald-400" /><i className="h-2.5 w-1 rounded-full bg-cyan-400" /></span>;
  }

  if (pattern === 2) {
    return <span className="relative h-3.5 w-3.5"><i className="absolute left-0 top-0 h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" /><i className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-cyan-400" /></span>;
  }

  return <span className="flex gap-0.5"><i className="h-1.5 w-1.5 rounded-full bg-cyan-400" /><i className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" /><i className="h-1.5 w-1.5 rounded-full bg-cyan-400" /></span>;
}

function ConnectionNetwork() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section
      ref={containerRef}
      aria-label="Interactive collaboration network visualization"
      className="relative w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white/80 via-emerald-500/[0.03] to-cyan-500/[0.06] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-white/[0.07] dark:via-emerald-400/[0.04] dark:to-cyan-400/[0.07] dark:shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:p-8"
    >
      <div className="relative aspect-[16/11] min-h-64 w-full" role="group" aria-label="Connection nodes for ideas, strategy, design, build, launch, feedback, and collaboration">
        <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <motion.circle
            cx={center.x}
            cy={center.y}
            r="29"
            className="stroke-emerald-500/15 dark:stroke-cyan-400/15"
            strokeWidth="0.45"
            strokeDasharray="1.5 2.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          <polyline
            points="20,23 50,13 80,23 85,58 64,84 32,84 14,58 20,23"
            className="stroke-cyan-500/15 dark:stroke-cyan-400/20"
            strokeWidth="0.35"
          />

          {networkNodes.map((node, index) => {
            const isActive = activeNode === node.id || activeNode === "center";

            return (
              <motion.line
                key={node.id}
                x1={center.x}
                y1={center.y}
                x2={node.x}
                y2={node.y}
                className="stroke-emerald-500/45 dark:stroke-cyan-400/45"
                strokeWidth="0.6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                animate={{ opacity: isActive ? 1 : 0.75 }}
                transition={{ duration: 0.75, delay: index * 0.07, ease: "easeOut" }}
              />
            );
          })}

          {!reduceMotion && isInView && networkNodes.map((node, index) => (
            <motion.circle
              key={`pulse-${node.id}`}
              cx={center.x}
              cy={center.y}
              r="1.15"
              className="fill-cyan-400"
              initial={{ opacity: 0 }}
              animate={{ x: [0, node.x - center.x], y: [0, node.y - center.y], opacity: [0, 0.9, 0] }}
              transition={{ duration: 0.9, delay: 1.2 + index * 0.05, repeat: Infinity, repeatDelay: 3.65, ease: "easeInOut" }}
            />
          ))}
        </svg>

        <button
          type="button"
          aria-label="Central collaboration hub"
          onMouseEnter={() => setActiveNode("center")}
          onMouseLeave={() => setActiveNode(null)}
          onFocus={() => setActiveNode("center")}
          onBlur={() => setActiveNode(null)}
          className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] border border-emerald-500/25 bg-white/70 outline-none backdrop-blur-md transition-[border-color,box-shadow,transform] duration-300 sm:hover:scale-105 sm:hover:border-emerald-400/60 sm:hover:shadow-xl sm:hover:shadow-emerald-500/20 focus-visible:scale-105 focus-visible:border-emerald-400/60 focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:bg-slate-900/45"
        >
          <span className="absolute inset-3 rounded-[22px] border border-cyan-500/20" />
          <motion.span
            className="relative flex h-10 w-10 rotate-45 items-center justify-center rounded-xl border border-emerald-500/50 bg-emerald-500/15"
            initial={{ opacity: 0, scale: 0.65 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.5, ease: "easeOut" }}
          >
            <span className="h-3.5 w-3.5 -rotate-45 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40 dark:bg-emerald-400" />
          </motion.span>
        </button>

        {networkNodes.map((node, index) => {
          const isActive = activeNode === node.id || activeNode === "center";

          return (
            <motion.button
              key={node.id}
              type="button"
              aria-label={`${node.id} collaboration node`}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              onFocus={() => setActiveNode(node.id)}
              onBlur={() => setActiveNode(null)}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              initial={{ opacity: 0, scale: 0.65 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: 0.45 + index * 0.06, ease: "easeOut" }}
              className={`absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border bg-white/80 outline-none backdrop-blur-sm transition-[border-color,box-shadow,transform] duration-200 sm:hover:scale-105 focus-visible:scale-105 focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:bg-slate-900/55 ${isActive ? "border-cyan-400/70 shadow-lg shadow-cyan-500/25" : "border-slate-200/80 dark:border-white/10"}`}
            >
              <NodePattern pattern={node.pattern} />
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

export default ConnectionNetwork;
