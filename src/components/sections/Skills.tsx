import { motion } from "framer-motion";
import { skills } from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="
        scroll-mt-24

        mx-auto
        max-w-7xl

        px-6
        py-24

        sm:px-8
        lg:py-28
      "
    >

      {/* ================= Section Heading ================= */}

      <div className="text-center">

        <p
          className="
            font-semibold
            uppercase
            tracking-[0.35em]

            text-emerald-400
          "
        >
          Technical Expertise
        </p>

        <h2
          className="
            mt-5

            text-4xl
            font-black

            tracking-tight

            text-gray-900
            dark:text-white

            sm:text-5xl
          "
        >
          Skills & Technologies
        </h2>

        <p
          className="
            mx-auto

            mt-6

            max-w-3xl

            text-lg
            leading-8

            text-gray-600
            dark:text-gray-400
          "
        >
          Technologies, frameworks and engineering concepts I use
          while designing reliable backend applications and modern
          web solutions.
        </p>

      </div>

      {/* ================= Skills Grid ================= */}

      <div
        className="
          mt-20

          grid

          gap-8

          lg:grid-cols-2
        "
      >

        {skills.map((skill, index) => {

          const Icon = skill.icon;

          return (

            <motion.article

              key={skill.category}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}

              className="
                group

                flex
                flex-col

                h-full

                rounded-[30px]

                border

                backdrop-blur-xl

                transition-all
                duration-500

                hover:-translate-y-2

                hover:shadow-[0_25px_70px_rgba(16,185,129,.15)]
                border-gray-200
                bg-white/70

                dark:border-white/10
                dark:bg-white/[0.04]

                hover:border-emerald-500/40
              "
            >

              {/* ================= Card Header ================= */}

              <div
                className="
                  flex
                  items-center
                  gap-4

                  p-8
                "
              >

                <div
                  className="
                    flex

                    h-14
                    w-14

                    items-center
                    justify-center

                    rounded-2xl

                    bg-emerald-500/10

                    text-emerald-400

                    transition-all
                    duration-500

                    group-hover:rotate-6
                    group-hover:scale-110
                    group-hover:bg-emerald-500/20
                  "
                >
                  <Icon size={28} />
                </div>

                <div>

                  <h3
                    className="
                      text-2xl
                      font-bold

                      text-gray-900
                      dark:text-white
                    "
                  >
                    {skill.category}
                  </h3>

                  <p
                    className="
                      mt-2

                      max-w-md

                      leading-7

                      text-gray-600
                      dark:text-gray-400
                    "
                  >
                    {skill.description}
                  </p>

                </div>

              </div>

              {/* ==========================================
                    PART 2 STARTS HERE
              ========================================== */}
                            {/* ================= Skills ================= */}

              <div
                className="
                  flex-1

                  px-8
                  pb-8
                "
              >

                <div
                  className="
                    flex
                    flex-wrap

                    gap-3
                  "
                >

                  {skill.items.map((item) => (

                    <motion.span

                      key={item}

                      whileHover={{
                        scale: 1.06,
                      }}

                      whileTap={{
                        scale: 1.06,
                      }}

                      transition={{
                        duration: 0.2,
                      }}

                      className="
                        rounded-full

                        border

                        px-4
                        py-2.5

                        text-sm
                        font-medium

                        transition-all
                        duration-300

                        cursor-default

                        border-gray-200

                        bg-gray-100

                        text-gray-700

                        dark:border-white/10
                        dark:bg-white/[0.05]
                        dark:text-gray-300

                        group-hover:border-emerald-500/20

                        hover:border-emerald-500/40

                        hover:bg-emerald-500/10

                        hover:text-emerald-400

                        hover:shadow-[0_0_18px_rgba(16,185,129,.18)]
                      "
                    >
                      {item}
                    </motion.span>

                  ))}

                </div>

                {/* ================= Divider ================= */}

                <div
                  className="
                    my-8

                    h-px

                    bg-gradient-to-r

                    from-transparent

                    via-emerald-500/20

                    to-transparent
                  "
                />

                {/* ================= Footer ================= */}

                <div
                  className="
                    flex

                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-sm

                      tracking-wider

                      uppercase

                      text-gray-500

                      dark:text-gray-500
                    "
                  >
                    Core Expertise
                  </span>

                  <div
  className="
    flex
    items-center
    gap-2

    text-emerald-400
  "
>
  <span className="text-base">
    ✓
  </span>

  <span
    className="
      text-sm
      font-semibold
    "
  >
    Applied in Projects
  </span>
</div>

                    

                </div>

              </div>

            </motion.article>

          );

        })}

      {/* ==========================================
            PART 3 STARTS HERE
      ========================================== */}
            
      </div>

    </section>

  );

}

export default Skills;
