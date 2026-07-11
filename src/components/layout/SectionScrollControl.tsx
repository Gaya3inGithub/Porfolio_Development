import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";

function SectionScrollControl() {
  const [isBeforeServices, setIsBeforeServices] = useState(true);

  useEffect(() => {
    const updatePosition = () => {
      const services = document.getElementById("services");
      const servicesTop = services ? services.offsetTop : window.innerHeight;
      setIsBeforeServices(window.scrollY < servicesTop - 120);
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const targetId = isBeforeServices ? "services" : "home";
  const label = isBeforeServices ? "Go to services" : "Back to top";

  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.button
      type="button"
      aria-label={label}
      title={label}
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-3 text-sm font-semibold text-slate-800 shadow-[0_14px_35px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-colors duration-300 hover:border-emerald-400 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:ring-offset-2 focus:ring-offset-white dark:border-white/10 dark:bg-[#11161F]/90 dark:text-white dark:shadow-[0_14px_35px_rgba(0,0,0,0.32)] dark:hover:border-emerald-400/60 dark:hover:bg-emerald-500/15 dark:focus:ring-offset-[#0A0A0F] sm:px-4"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 transition-transform duration-300 group-hover:scale-110 dark:text-emerald-300">
        {isBeforeServices ? <HiArrowDown size={18} /> : <HiArrowUp size={18} />}
      </span>
      <span className="hidden sm:inline">{isBeforeServices ? "Services" : "Top"}</span>
    </motion.button>
  );
}

export default SectionScrollControl;
