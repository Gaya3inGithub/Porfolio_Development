import anime from "../../assets/anime.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

function Hero() {

  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <section
      id="home"
      className="
       relative
flex
min-h-screen
scroll-mt-28
items-center
overflow-hidden
bg-[#09090B]

px-6
pt-16

sm:px-6

lg:px-8
lg:pt-18
      "
    >

      {/* ================= Aurora Background ================= */}

      <div className="absolute left-24 top-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="absolute right-24 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/8 blur-[180px]" />

      {/* Ambient Noise */}

      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />

      < div 
       className="
relative

mx-auto
w-full
max-w-7xl

grid
grid-cols-1

items-center

gap-y-16
gap-x-20

px-6
sm:px-8
lg:px-10
xl:px-12

pt-2
lg:pt-6

pb-10
lg:pb-12

lg:grid-cols-[1.05fr_.95fr]
"
      >

        {/* ================= Floating Symbols ================= */}

        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-6
            top-36
            sm:left-10
            sm:top-60
            text-4xl
            sm:text-5xl
            font-bold
            text-emerald-300/10
          "
        >
          {"</>"}
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-40
            bottom-28
            sm:left-52
            sm:bottom-44
            text-4xl
            sm:text-5xl
            text-white/8
          "
        >
          ⚙
        </motion.div>

        {/* Decorative Glow Dot */}

        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
            absolute
            left-36
            top-44
            h-3
            w-3
            rounded-full
            bg-cyan-400
            blur-[2px]
          "
        />

        {/* ================= LEFT ================= */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 max-w-[620px] pt-2 lg:pt-4"
>
  {/* ================= Badge ================= */}

<div
  className="
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-cyan-400/30
    bg-cyan-500/10
    px-5
    py-2
    text-sm
    font-medium
    text-cyan-300
    backdrop-blur-xl
  "
>
  <span>⚡</span>

  <span>Building Scalable Solutions</span>

</div>

{/* ================= Heading ================= */}

<h1
  className="
    mt-8
    text-[2.1rem]
    font-black
    tracking-normal
    leading-[1]
    text-white

    sm:text-5xl
    sm:tracking-[-0.03em]
    md:text-6xl
    lg:text-7xl
    2xl:text-8xl
  "
>
<span className="whitespace-nowrap">From Code to</span>

  <span
    className="
      block
      w-fit
      max-w-full
      overflow-visible
      pb-1
      pr-2
      bg-gradient-to-r
      from-emerald-400
      via-cyan-300
      to-sky-400
      bg-clip-text
      text-transparent
    "
  >
    Architecture
  </span>

</h1>

{/* ================= Subtitle ================= */}

<p
 className="
    mt-7
    max-w-xl

    text-lg
    leading-8

    font-medium
    text-gray-300

    sm:text-xl
    lg:text-[2rem]
    lg:leading-10
  "
>
  Designing backend systems that are scalable,
  maintainable and built for real-world use.
</p>

{/* ================= Description ================= */}

<p
  className="
    mt-7
    max-w-xl

    text-base
    leading-8
    text-gray-400

    sm:text-lg
    sm:leading-9

    lg:text-xl
    lg:leading-10
"
>
  Passionate about building impactful applications,
  solving real-world problems and continuously
  improving through hands-on projects, clean design
  principles and practical software engineering.
</p>

{/* ================= Highlights ================= */}

<div
  className="
    mt-9
    flex
    flex-wrap
    gap-2

    sm:gap-3
    lg:gap-3
  "
>

 <span
  className="
    rounded-full
    border
    border-emerald-500/25
    bg-emerald-500/10

    px-3
    py-2

    text-xs
    font-medium
    text-emerald-300

    sm:px-4
    sm:text-sm
  "
>
  ✓ Clean Code
</span>

<span
  className="
    rounded-full
    border
    border-cyan-500/25
    bg-cyan-500/10

    px-3
    py-2

    text-xs
    font-medium
    text-cyan-300

    sm:px-4
    sm:text-sm
  "
>
  ✓ API Development
</span>

<span
  className="
    rounded-full
    border
    border-violet-500/25
    bg-violet-500/10

    px-3
    py-2

    text-xs
    font-medium
    text-violet-300

    sm:px-4
    sm:text-sm
  "
>
  ✓ System Design
</span>
<span
  className="
    rounded-full
    border
    border-amber-500/25
    bg-amber-500/10

    px-3
    py-2

    text-xs
    font-medium
    text-amber-300

    sm:px-4
    sm:text-sm
  "
>
  ✓ LLD
</span>
<span
 className="
  rounded-full
  border
  border-indigo-500/25
  bg-indigo-500/10

  px-3
  py-2

  text-xs
  font-medium
  text-indigo-300

  sm:px-4
  sm:text-sm
"
>
  ✓ Data Structure and Algorithms
</span>
<span
  className="
    rounded-full
    border
    border-pink-500/25
    bg-pink-500/10

    px-3
    py-2

    text-xs
    font-medium
    text-pink-300

    sm:px-4
    sm:text-sm
  "
>
  ✓ Ownership
</span>
<span
  className="
    rounded-full
    border
    border-sky-500/25
    bg-sky-500/10

    px-3
    py-2

    text-xs
    font-medium
    text-sky-300

    sm:px-4
    sm:text-sm
  "
>
  ✓ Collaboration
</span>
</div>

{/* ================= Buttons ================= */}

<div className="
mt-10
flex
flex-wrap
gap-4

sm:gap-5

lg:flex-nowrap
lg:gap-6
">

  <a
    href="/Gayathri_T_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      items-center
      justify-center
      gap-2
      rounded-full
      bg-emerald-500
      px-8
      py-4
      text-lg
      font-semibold
      text-black
      shadow-lg
      shadow-emerald-500/30
      transition-all
      duration-300
      w-full
      sm:w-auto
      min-w-[210px]
      hover:-translate-y-1
      hover:scale-105
      hover:shadow-emerald-500/50
    "
  >
    <MdOutlineFileDownload className="text-xl" />

    Resume

  </a>
</div>
</motion.div>
{/* ================= RIGHT ================= */}

<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{
    opacity: 1,
    scale: 1,
    x: [0, 4, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    scale: { duration: 0.8 },
    x: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="
    relative
    flex
    items-center
    justify-center

    mt-10

    lg:mt-0
    lg:justify-end
"
>

  {/* Aurora Glow */}

  <div
   className="
absolute

h-[340px]
w-[340px]

sm:h-[420px]
sm:w-[420px]

lg:h-[720px]
lg:w-[720px]

rounded-full

bg-gradient-to-r
from-emerald-500/15
via-cyan-500/10
to-blue-500/10

blur-[120px]
lg:blur-[170px]
"
  />

  {/* Background Grid */}

  <div
   className="
absolute

h-[320px]
w-full

max-w-[520px]

sm:h-[380px]

lg:h-[620px]
lg:max-w-[620px]

rounded-[32px]
lg:rounded-[52px]

opacity-[0.05]

[background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)]
[background-size:32px_32px]
"/>
  {/* Hint */}
{!isFlipped && (
  <motion.div
    animate={{
  y: [0, -5, 0],
  scale: [1, 1.02, 1],
}}
    transition={{
  duration:4,
  repeat:Infinity,
  ease:"easeInOut"
}}
  className="
absolute

left-1/2
-translate-x-1/2

-top-15
sm:-top-10
md:-top-15
lg:-top-25
xl:-top-27

z-40

rounded-full

border
border-cyan-400/20

bg-[#0F1117]/90
theme-flip-hint

px-4.5
py-1.5

backdrop-blur-xl

w-max
max-w-[240px]

lg:max-w-none
"
  >

    <p className="whitespace-nowrap text-sm font-semibold text-cyan-300 justify-self-center">
        Meet the Developer 👨‍💻 →
    </p>

    <p className="mt-2 hidden text-[11px] uppercase tracking-[0.18em] text-gray-400 lg:block justify-self-center">
     ↺ Hover to Flip
    </p>

    <p className="mt-2 block text-[11px] uppercase tracking-[0.18em] text-gray-400 lg:hidden">
  👇 TAP IMAGE TO FLIP
</p>

  </motion.div>)}

  {/* Flip Container */}
<div
  className="
    relative

    mt-4
    sm:mt-8

    w-full
    max-w-[380px]
    sm:max-w-[520px]

    lg:mt-0
    lg:max-w-[720px]
  "
  style={{
    perspective: "1800px",
  }}
>

   <motion.div
  animate={{
    rotateY: isFlipped ? 180 : 0,
  }}
  transition={{
    duration: 1,
    ease: "easeInOut",
  }}
  style={{
    transformStyle: "preserve-3d",
  }}
  className="relative"
>

  {/* ================= FRONT ================= */}

<div
  style={{
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  }}
  className="relative"
>

    {/* Glass Frame */}

    <div
      className="
        absolute
        -inset-4
        lg:-inset-5
        rounded-[34px]
        lg:rounded-[48px]
        border
        border-white/[0.03]
        bg-white/[0.015]
        backdrop-blur-xl
      "
    />

    {/* Image */}

    <motion.img
      src={anime}
      alt="Gayathri"

      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 1.02,
      }}

      transition={{
        duration: .35,
      }}

      onClick={() => setIsFlipped(true)}
      onTouchStart={() => { /* touch gives immediate feedback via whileTap */ }}
className="
relative
z-20

w-full
max-w-[520px]

lg:max-w-[700px]
xl:max-w-[760px]

rounded-[28px]
lg:rounded-[42px]

border
border-white/10

object-cover

cursor-pointer

transition-all
duration-500

shadow-[0_60px_150px_rgba(16,185,129,.18)]

hover:scale-[1.01]
hover:shadow-[0_70px_170px_rgba(6,182,212,.25)]
"
    />

    {/* Reflection */}

    <div
      className="
        pointer-events-none
        absolute
        inset-0
        rounded-[28px]
        lg:rounded-[42px]
        bg-gradient-to-br
        from-white/10
        via-transparent
        to-transparent
      "
    />

    {/* Bottom Glow */}

    <motion.div
      animate={{
        opacity: [.25,.55,.25],
        scale: [1,1.04,1],
      }}

      transition={{
        duration:4,
        repeat:Infinity,
      }}

      className="
absolute

-bottom-4

left-1/2

h-20

w-[70%]

-translate-x-1/2

rounded-full

bg-gradient-to-r
from-transparent
via-emerald-400/25
to-transparent

blur-[70px]

lg:-bottom-5
lg:h-24
lg:w-[65%]
lg:blur-[85px]
"
    />

  </div>

 {/* ================= BACK ================= */}

<motion.div
  onClick={() => setIsFlipped(false)}
  style={{
    transform: "rotateY(180deg)",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  }}
  className="
    absolute
    inset-0
    z-30

    flex
   items-center
pt-0 

lg:items-center
lg:pt-0
    justify-center

    cursor-pointer

    overflow-visible
  "
>

  <div
className="
w-[100%]
mx-auto
lg:w-full
max-w-[380px]
sm:max-w-[520px]

lg:max-w-[700px]
xl:max-w-[760px]
  
h-full
flex
flex-col
justify-center
rounded-[28px]
lg:rounded-[42px]

border
border-cyan-500/10

bg-[#10131A]/95
theme-flip-back

shadow-[0_60px_150px_rgba(16,185,129,.18)]

p-5
sm:p-6
lg:p-8

backdrop-blur-xl
"
>

    <h3 className="text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
  ✨ Beyond Code
</h3>

<div className="my-5 h-px bg-white/10 sm:my-6" />

<div
  className="
    grid
    grid-cols-1
    lg:grid-cols-2

    gap-y-3
    gap-x-8
  "
>
  <div className="flex items-center justify-center gap-2 text-base font-semibold sm:text-lg">
    <span className="shrink-0 text-cyan-400">✓</span>
    <span className="whitespace-nowrap text-gray-200">Problem Solver 🛠️</span>
  </div>

  <div className="flex items-center justify-center gap-2 text-base font-semibold sm:text-lg">
    <span className="shrink-0 text-emerald-400">✓</span>
    <span className="whitespace-nowrap text-gray-200">Fast Learner 🚀</span>
  </div>

  <div className="flex items-center justify-center gap-2 text-base font-semibold sm:text-lg">
    <span className="shrink-0 text-violet-400">✓</span>
    <span className="whitespace-nowrap text-gray-200">Growth Mindset 🌱</span>
  </div>

  <div className="flex items-center justify-center gap-2 text-base font-semibold sm:text-lg">
    <span className="shrink-0 text-amber-400">✓</span>
    <span className="whitespace-nowrap text-gray-200">Team Player 🤝</span>
  </div>
</div>

<div className="my-5 h-px bg-white/10 sm:my-6" />

<p className="
  flex
  flex-wrap
  items-center
  justify-center
  gap-2
  sm:gap-5
  text-cyan-300
  font-semibold
  text-sm
  sm:text-lg
  whitespace-normal
  sm:whitespace-nowrap
  text-center
">
  Build → Learn → Improve
</p>
</div>
</motion.div>
<div
  className="
    absolute
    -inset-4
    lg:-inset-5

    rounded-[34px]
    lg:rounded-[48px]

    border
    border-white/[0.03]

    bg-white/[0.015]

    backdrop-blur-xl
  "
/>
{/* Back Bottom Glow */}

<motion.div
  animate={{
    opacity: [0.25, 0.55, 0.25],
    scale: [1, 1.04, 1],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
  className="
    absolute

    -bottom-4
    left-1/2

    h-20
    w-[70%]

    -translate-x-1/2

    rounded-full

    bg-gradient-to-r
    from-transparent
    via-emerald-400/25
    to-transparent

    blur-[70px]

    lg:-bottom-5
    lg:h-24
    lg:w-[65%]
    lg:blur-[85px]
  "
/>
{/* ================= END FLIP CARD ================= */}

</motion.div>

</div>

</motion.div>

</div>

</section>
);
}

export default Hero;
