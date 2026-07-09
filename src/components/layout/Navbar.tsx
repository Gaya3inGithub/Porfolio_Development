import React,{ useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import profile from "../../assets/profile.png";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "publication", label: "Publication" },
  { id: "certifications", label: "Certifications" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

type NavbarProps = {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
};

export default function Navbar({
  theme,
  setTheme,
}: NavbarProps) {

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const suspendScrollRef = useRef(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Handle prefers-reduced-motion and scroll-based active item updates.
  useEffect(() => {

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const setPref = () => setReduceMotion(mq.matches);
    setPref();
    mq.addEventListener?.('change', setPref);

    const handleScroll = () => {

      setScrolled(window.scrollY > 30);

      // If user is interacting with the nav (mouse over), suspend auto-activation.
      if (suspendScrollRef.current) return;

      let closestId = "home";
      let closestDistance = Number.POSITIVE_INFINITY;

      navItems.forEach((item) => {

        const section = document.getElementById(item.id);

        if (!section) return;

        const rect = section.getBoundingClientRect();
        const middle = window.innerHeight * 0.35;
        const midpoint = rect.top + rect.height / 2;
        const distance = Math.abs(midpoint - middle);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = item.id;
        }
      });

      setActive(closestId);

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener?.('change', setPref);
    };

  }, []);

  useEffect(() => {

    const handleEsc = (e: KeyboardEvent) => {

      if (e.key === "Escape") {
        setPreviewOpen(false);
      }

    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);

  }, []);

  return (

    <>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
        }}
        className="
          fixed
          top-4
          left-1/2
          z-50
          w-[96%]
          max-w-[1320px]
          -translate-x-1/2
        "
      >

        <motion.div
          animate={{
            scale: scrolled ? 0.985 : 1,
          }}
            transition={{
              duration: reduceMotion ? 0 : 0.3,
            }}
          className={`
            rounded-[26px]
            border
            transition-all
            duration-500

            ${
              scrolled
                ? "border-white/10 bg-[#09090B]/80 backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,.35)]"
                : "border-white/5 bg-[#09090B]/55 backdrop-blur-xl"
            }
          `}
        >

          <div
            className="
              flex
              h-[60px]
              sm:h-[68px]
              items-center
              justify-between
              gap-3
              px-3
              sm:px-5
              lg:px-4
              xl:px-6
            "
          >

            {/* ================= Left ================= */}

            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 lg:gap-3">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => setPreviewOpen(true)}
                className="relative outline-none"
              >

                <img
                  src={profile}
                  alt="Gayathri"
                  className="
                    h-10
                    w-10
                    sm:h-11
                    sm:w-11
                    lg:h-[46px]
                    lg:w-[46px]
                    rounded-full
                    object-cover
                    border-2
                    border-emerald-400/30
                    shadow-[0_0_18px_rgba(16,185,129,.25)]
                  "
                />

                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    ring-2
                    ring-transparent
                    transition
                    hover:ring-emerald-400/40
                  "
                />

              </motion.button>

              <div className="min-w-0 max-w-[140px] sm:max-w-[190px] lg:max-w-[150px]">

                <h2
                  className="
                    truncate
                    text-[13px]
                    sm:text-[15px]
                    lg:text-[14px]
                    leading-none
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  Gayathri T
                </h2>

                <p
                  className="
                    mt-1
                    truncate
                    text-[8px]
                    tracking-[0.14em]
                    text-gray-500
                    sm:text-[9px]
                    sm:tracking-[0.2em]
                    lg:text-[8px]
                  "
                >
                  Software Engineer
                </p>

              </div>

            </div>

            {/* ================= Desktop Navigation ================= */}

            <nav
              onMouseEnter={() => (suspendScrollRef.current = true)}
              onMouseLeave={() => {
                suspendScrollRef.current = false;
                // re-evaluate active section when leaving nav
                const ev = new Event('scroll');
                window.dispatchEvent(ev);
              }}
              onFocus={() => (suspendScrollRef.current = true)}
              onBlur={() => (suspendScrollRef.current = false)}
              className="
                hidden
                lg:flex
                items-center
                gap-1
                rounded-full
                border
                border-white/5
                bg-white/[0.02]
                p-1.5
                xl:gap-2
                xl:p-2
              "
            >
                  {navItems.map((item) => {

                const isActive = active === item.id;

                return (

                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => {
                      setActive(item.id);
                      setMenuOpen(false);
                    }}
                    className="
                      relative
                      overflow-hidden
                      rounded-full
                      px-3
                      py-2.5
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      xl:px-5
                    "
                  >

                    {isActive && (

                      <motion.div
                        layoutId="navbar-pill"
                        transition={
                          reduceMotion
                            ? { duration: 0.12 }
                            : {
                                type: "spring",
                                stiffness: 350,
                                damping: 30,
                              }
                        }
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-gradient-to-r
                          from-emerald-500
                          to-cyan-500
                          shadow-[0_0_14px_rgba(16,185,129,.18)]
                        "
                      />

                    )}

                    <span
                      className={`
                        relative
                        z-10
                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? "font-semibold text-black"
                            : "text-gray-300 hover:text-white"
                        }
                      `}
                    >
                      {item.label}
                    </span>

                  </a>

                );

              })}

            </nav>

            {/* ================= Right ================= */}

            <div className="flex shrink-0 items-center gap-2 lg:gap-2 xl:gap-3">

              <motion.div
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                className="
                  hidden
                  lg:flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-emerald-500/20
                  bg-emerald-500/10
                  px-2.5
                  py-1.5
                  xl:gap-2
                  xl:px-3.5
                "
              >

                <motion.span
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [.55, 1, .55],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_12px_rgba(16,185,129,.8)]
                  "
                />

                <div>

                  <p
                    className="
                    font-bold
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-gray-500
                    "
                  >
                    Open to work
                  </p>

                  <p
                    className="
                      text-xs
                      font-medium
                      text-emerald-300
                      xl:text-sm
                    "
                  >
                    Java Full Stack Developer
                  </p>

                </div>

              </motion.div>
<button
  onClick={() =>
    setTheme(theme === "dark" ? "light" : "dark")
  }
  className="
    flex
    h-10
    w-10
    sm:h-11
    sm:w-11
    items-center
    justify-center
    rounded-xl
    border
    border-white/10
    bg-white/5
    text-white
    transition-all
    duration-300
    hover:border-emerald-400/40
    hover:bg-emerald-500/10
  "
>
  {theme === "dark" ? "☀️" : "🌙"}
</button>
              {/* Mobile Button */}

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="
                  flex
                  lg:hidden
                  h-10
                  w-10
                  sm:h-11
                  sm:w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-white
                "
              >

                {menuOpen ? (
                  <HiOutlineX size={22} />
                ) : (
                  <HiOutlineMenuAlt3 size={22} />
                )}

              </button>

            </div>

          </div>          
            {/* ================= Mobile Menu ================= */}

        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                lg:hidden
                overflow-hidden
                border-t
                border-white/10
                bg-[#09090B]/95
                backdrop-blur-2xl
              "
            >

              <div
                className="
                  flex
                  flex-col
                  gap-2
                  px-4
                  py-4
                "
              >

                {navItems.map((item) => {

                  const isActive = active === item.id;

                  return (

                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => {

                        setMenuOpen(false);

                        setActive(item.id);

                      }}
                      className={`
                        rounded-xl
                        px-4
                        py-2.5
                        text-sm
                        font-medium
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-black"
                            : "text-gray-300 hover:bg-white/5"
                        }
                      `}
                    >

                      {item.label}

                    </a>

                  );

                })}

                <div className="my-2 h-px bg-white/10" />

                {/* Mobile Status */}

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-3
                    py-2.5
                    justify-center-safe
                  "
                >

                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-emerald-400
                    "
                  />

                  <div>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.18em]
                        text-gray-500
                      "
                    >
                      Available
                    </p>

                    <p
                      className="
                        text-xs
                        sm:text-sm
                        font-medium
                        text-emerald-300
                      "
                    >
                      Java Full Stack Developer
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </motion.div>

    </motion.header>
          {/* ================= Profile Preview ================= */}

      <AnimatePresence>

        {previewOpen && (

          <motion.div

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: .25,
            }}

            onClick={() => setPreviewOpen(false)}

            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/75
              backdrop-blur-md
              p-6
            "
          >

            <motion.div

              initial={{
                scale: .85,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: .85,
                opacity: 0,
              }}

              transition={{
                duration: .3,
              }}

              onClick={(e) => e.stopPropagation()}

              className="
                relative
                max-w-md
              "
            >

              {/* Close */}

              <button

                onClick={() => setPreviewOpen(false)}

                className="
                  absolute
                  -right-3
                  -top-3
                  z-20
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#111]
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:rotate-90
                  hover:bg-emerald-500
                "
              >

                <HiOutlineX size={22} />

              </button>

              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[32px]
                  bg-emerald-500/20
                  blur-[90px]
                "
              />

              {/* Image */}

              <motion.img

                layoutId="profile"

                src={profile}

                alt="Gayathri"

                className="
                  relative
                  w-[420px]
                  rounded-[30px]
                  border
                  border-white/10
                  object-cover
                  shadow-[0_30px_100px_rgba(16,185,129,.28)]
                "
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>

  );

}
