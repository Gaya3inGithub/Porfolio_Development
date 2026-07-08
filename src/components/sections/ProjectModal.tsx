import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import type { Project } from "../../data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}

          transition={{ duration: 0.25 }}

          onClick={onClose}

          className="
            fixed
            inset-0
            z-[999]

            flex
            items-center
            justify-center

            bg-black/70
            backdrop-blur-md

            px-4
            py-6
          "
        >

          {/* ================= Modal ================= */}

          <motion.div

            initial={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: 0.95,
              y: 15,
            }}

            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}

            onClick={(e) => e.stopPropagation()}

            className="
              relative

              w-full
              max-w-4xl

              max-h-[90vh]

              overflow-y-auto

              rounded-[32px]

              border
              border-white/10

              bg-[#11161F]/95
              theme-project-modal

              backdrop-blur-2xl

              shadow-[0_40px_120px_rgba(16,185,129,.18)]

              p-6

              sm:p-8
              lg:p-10
            "
          >

            {/* ================= Close Button ================= */}

            <button

              onClick={onClose}

              className="
                absolute

                right-6
                top-6

                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-white/[0.04]

                text-gray-300

                transition-all
                duration-300

                hover:scale-110
                hover:rotate-90

                hover:border-emerald-400/40
                hover:bg-emerald-500/10
                hover:text-emerald-300

                hover:shadow-[0_0_25px_rgba(16,185,129,.35)]
              "
            >
              <IoClose size={24} />
            </button>

            {/* ================= Header ================= */}

            <div className="pr-14">

              <span
                className="
                  inline-flex

                  rounded-full

                  bg-emerald-500/15

                  px-4
                  py-2

                  text-sm
                  font-semibold

                  text-emerald-300
                "
              >
                {project.type}
              </span>

              <h2
                className="
                  mt-6

                  text-4xl
                  font-black

                  tracking-tight

                  text-white
                "
              >
                {project.title}
              </h2>

              <p
                className="
                  mt-4

                  max-w-2xl

                  leading-8

                  text-gray-400
                "
              >
                A deeper look into the engineering decisions,
                development journey, and key learnings behind this
                project.
              </p>

            </div>

            {/* =====================================================
                  PART 2 STARTS FROM HERE
            ===================================================== */}
            {/* ================= Engineering Goal ================= */}

<div className="mt-12">

  <div className="flex items-center gap-3">

    <span className="text-2xl">
      🎯
    </span>

    <h3
      className="
        text-2xl
        font-bold
        text-white
      "
    >
      Engineering Goal
    </h3>

  </div>

  <div
    className="
      mt-5

      rounded-2xl

      border
      border-white/10

      bg-white/[0.03]

      p-6
    "
  >

    <p
      className="
        leading-8
        text-gray-300
      "
    >
      {project.engineeringGoal}
    </p>

  </div>

</div>

{/* ================= Development Journey ================= */}

<div className="mt-12">

  <div className="flex items-center gap-3">

    <span className="text-2xl">
      🏗
    </span>

    <h3
      className="
        text-2xl
        font-bold
        text-white
      "
    >
      Development Journey
    </h3>

  </div>

  <div
    className="
      relative

      mt-8

      ml-4

      border-l
      border-emerald-500/20

      pl-8
    "
  >

    {project.developmentJourney.map(

      (step: string, index: number) => (

        <div
          key={index}
          className="
            relative

            pb-10

            last:pb-0
          "
        >

          {/* Timeline Dot */}

          <div
            className="
              absolute

              -left-[39px]
              top-1

              flex
              h-6
              w-6

              items-center
              justify-center

              rounded-full

              border
              border-emerald-500/40

              bg-[#11161F]

              text-xs
              font-bold

              text-emerald-400
            "
          >
            {index + 1}
          </div>

          {/* Timeline Card */}

          <div
            className="
              rounded-2xl

              border
              border-white/10

              bg-white/[0.03]

              p-5

              transition-all
              duration-300

              hover:border-emerald-500/30
              hover:bg-white/[0.05]
            "
          >

            <p
              className="
                leading-7
                text-gray-300
              "
            >
              {step}
            </p>

          </div>

        </div>

      )

    )}

  </div>

</div>

{/* =====================================================
      PART 3 STARTS FROM HERE
===================================================== */}
{/* ================= Engineering Decisions ================= */}

<div className="mt-12">

  <div className="flex items-center gap-3">

    <span className="text-2xl">
      💡
    </span>

    <h3
      className="
        text-2xl
        font-bold
        text-white
      "
    >
      Engineering Decisions
    </h3>

  </div>

  <p
    className="
      mt-3
      text-gray-400
      leading-7
    "
  >
    Key technical choices made during development and the reasoning behind them.
  </p>

  <div
    className="
      mt-8

      grid
      gap-5

      md:grid-cols-2
    "
  >

    {project.engineeringDecisions.map(

      (
        item: {
          title: string;
          reason: string;
        },
        index: number
      ) => (

        <div
          key={index}
          className="
            rounded-2xl

            border
            border-white/10

            bg-white/[0.03]

            p-6

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-emerald-500/30
            hover:bg-white/[0.05]
          "
        >

          <div
            className="
              inline-flex

              rounded-full

              bg-emerald-500/15

              px-3
              py-1

              text-xs
              font-semibold

              tracking-wide

              text-emerald-300
            "
          >
            Decision
          </div>

          <h4
            className="
              mt-4

              text-lg
              font-bold

              text-white
            "
          >
            {item.title}
          </h4>

          <p
            className="
              mt-3

              leading-7

              text-gray-400
            "
          >
            {item.reason}
          </p>

        </div>

      )

    )}

  </div>

</div>

{/* =====================================================
      PART 4 STARTS FROM HERE
===================================================== */}
{/* ================= Skills Strengthened ================= */}

<div className="mt-12">

  <div className="flex items-center gap-3">

    <span className="text-2xl">
      🚀
    </span>

    <h3
      className="
        text-2xl
        font-bold
        text-white
      "
    >
      Skills Strengthened
    </h3>

  </div>

  <p
    className="
      mt-3
      leading-7
      text-gray-400
    "
  >
    Core engineering abilities strengthened while designing and implementing this project.
  </p>

  <div
    className="
      mt-8

      flex
      flex-wrap

      gap-4
    "
  >

    {project.skillsStrengthened.map(

      (skill: string, index: number) => (

        <div
          key={index}

          className="
            rounded-full

            border
            border-emerald-500/20

            bg-emerald-500/10

            px-5
            py-3

            text-sm
            font-medium

            text-emerald-300

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-emerald-400/40
            hover:bg-emerald-500/20
            hover:shadow-[0_0_20px_rgba(16,185,129,.18)]
          "
        >
          {skill}
        </div>

      )

    )}

  </div>

</div>

{/* =====================================================
      PART 5 STARTS FROM HERE
===================================================== */}
{/* ================= Challenges & Solutions ================= */}

<div className="mt-12">

  <div className="flex items-center gap-3">

    <span className="text-2xl">
      ⚡
    </span>

    <h3
      className="
        text-2xl
        font-bold
        text-white
      "
    >
      Challenges & Solutions
    </h3>

  </div>

  <p
    className="
      mt-3
      leading-7
      text-gray-400
    "
  >
    Key implementation challenges encountered during development and the approach taken to address them.
  </p>

  <div
    className="
      mt-8

      grid
      gap-6

      lg:grid-cols-2
    "
  >

    {project.challenges.map(

      (
        item: {
          challenge: string;
          solution: string;
        },
        index: number
      ) => (

        <div
          key={index}

          className="
            rounded-2xl

            border
            border-white/10

            bg-white/[0.03]

            p-6

            transition-all
            duration-300

            hover:border-emerald-500/30
            hover:bg-white/[0.05]
          "
        >

          <div className="flex items-center gap-2">

            <span className="text-xl">
              ⚠️
            </span>

            <h4
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Challenge
            </h4>

          </div>

          <p
            className="
              mt-3
              leading-7
              text-gray-300
            "
          >
            {item.challenge}
          </p>

          <div
            className="
              my-5
              h-px
              bg-white/10
            "
          />

          <div className="flex items-center gap-2">

            <span className="text-xl">
              ✅
            </span>

            <h4
              className="
                text-lg
                font-semibold
                text-emerald-300
              "
            >
              Solution
            </h4>

          </div>

          <p
            className="
              mt-3
              leading-7
              text-gray-400
            "
          >
            {item.solution}
          </p>

        </div>

      )

    )}

  </div>

</div>

{/* =====================================================
      PART 6 STARTS FROM HERE
===================================================== */}
{/* ================= Key Learnings ================= */}

<div className="mt-12">

  <div className="flex items-center gap-3">

    <span className="text-2xl">
      📚
    </span>

    <h3
      className="
        text-2xl
        font-bold
        text-white
      "
    >
      Key Learnings
    </h3>

  </div>

  <p
    className="
      mt-3
      leading-7
      text-gray-400
    "
  >
    Valuable technical and problem-solving lessons gained while developing this project.
  </p>

  <div
    className="
      mt-8

      grid
      gap-5

      sm:grid-cols-2
    "
  >

    {project.learnings.map(

      (learning: string, index: number) => (

        <div
          key={index}

          className="
            flex
            items-start
            gap-4

            rounded-2xl

            border
            border-white/10

            bg-white/[0.03]

            p-5

            transition-all
            duration-300

            hover:border-emerald-500/30
            hover:bg-white/[0.05]
          "
        >

          <div
            className="
              flex
              h-10
              w-10

              shrink-0

              items-center
              justify-center

              rounded-full

              bg-emerald-500/10

              text-lg

              text-emerald-400
            "
          >
            ✓
          </div>

          <p
            className="
              leading-7
              text-gray-300
            "
          >
            {learning}
          </p>

        </div>

      )

    )}

  </div>

</div>

{/* =====================================================
      PART 7 STARTS FROM HERE
===================================================== */}
{/* ================= Future Enhancements ================= */}

<div className="mt-12">

  <div className="flex items-center gap-3">

    <span className="text-2xl">
      🔮
    </span>

    <h3
      className="
        text-2xl
        font-bold
        text-white
      "
    >
      Future Enhancements
    </h3>

  </div>

  <p
    className="
      mt-3
      leading-7
      text-gray-400
    "
  >
    Improvements planned to make the application more scalable, secure, and production-ready.
  </p>

  <div
    className="
      mt-8

      flex
      flex-wrap

      gap-3
    "
  >

    {project.futureEnhancements.map(

      (item: string, index: number) => (

        <span
          key={index}

          className="
            rounded-full

            border
            border-cyan-500/20

            bg-cyan-500/10

            px-4
            py-2

            text-sm
            font-medium

            text-cyan-300

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-cyan-400/40
            hover:bg-cyan-500/20
          "
        >
          {item}
        </span>

      )

    )}

  </div>

</div>

{/* ================= Reflection ================= */}

<div className="mt-14">

  <div className="flex items-center gap-3">

    <span className="text-2xl">
      💬
    </span>

    <h3
      className="
        text-2xl
        font-bold
        text-white
      "
    >
      Reflection
    </h3>

  </div>

  <div
    className="
      mt-6

      rounded-3xl

      border
      border-emerald-500/20

      bg-gradient-to-br
      from-emerald-500/10
      via-white/[0.03]
      to-cyan-500/10

      p-7
    "
  >

    <p
      className="
        text-lg
        italic

        leading-9

        text-gray-200
      "
    >
      {project.reflection}
    </p>

  </div>

</div>

{/* =====================================================
      PART 8 STARTS FROM HERE
===================================================== */}

{/* ================= Footer ================= */}

<div
  className="
    mt-14

    flex
    flex-col
    items-center

    border-t
    border-white/10

    pt-8
  "
>

  <p
    className="
      mb-6

      text-center

      text-sm

      tracking-wide

      text-gray-500
    "
  >
    Thank you for exploring this project.
    Every project has been an opportunity to strengthen my
    software engineering knowledge and build practical solutions.
  </p>

  <button

    onClick={onClose}

    className="
      group

      flex
      items-center
      justify-center
      gap-3

      rounded-2xl

      border
      border-emerald-500/30

      bg-emerald-500/10

      px-8
      py-4

      font-semibold

      text-emerald-300

      transition-all
      duration-300

      hover:scale-[1.03]
      hover:border-emerald-400
      hover:bg-emerald-500
      hover:text-black

      hover:shadow-[0_20px_50px_rgba(16,185,129,.30)]
    "
  >

    <span>
      Close Case Study
    </span>

    <span
      className="
        transition-transform
        duration-300

        group-hover:translate-x-1
      "
    >
      →
    </span>

  </button>

</div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}

export default ProjectModal;
