import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section
      id="projects"
      className="
        scroll-mt-28
        mx-auto
        max-w-7xl
        px-6
        py-16

        sm:px-8
        lg:py-20
      "
    >
      {/* Section Heading */}

        <div className="mb-10 text-center">
        <p className="text-emerald-400 font-semibold uppercase tracking-widest">
        Featured work
        </p>


        <h2
          className="
            mt-3
            text-4xl
            font-black
            text-white

            sm:text-5xl
          "
        >
          Featured Projects
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-3xl
            text-lg
            leading-8
            text-gray-400
          "
        >
          Projects built to solve real-world problems using Java,
          Spring Boot, REST APIs, AI and modern software engineering
          principles.
        </p>

      </div>

      {/* Projects Grid */}

      <div
        className="
          mt-10
          grid
          gap-8

          lg:grid-cols-3
        "
      >

        {projects.map((project, index) => (
  <motion.article
    key={project.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileTap={{ y: -8 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="
      group

      flex
      h-full
      flex-col

      overflow-hidden

      rounded-[30px]

      border
      border-white/10

      bg-gradient-to-b
      from-white/[0.06]
      to-white/[0.03]

      backdrop-blur-xl

      transition-all
      duration-500

      sm:hover:-translate-y-2
      sm:hover:border-emerald-500/40
      sm:hover:shadow-[0_25px_80px_rgba(16,185,129,.15)]
    "
  >
          


  {/* ================= Project Banner ================= */}

<div className="relative overflow-hidden bg-black/30 dark:bg-black/50">

  <img
    src={project.image}
    alt={project.title}
    className="
      w-full
      h-auto
      aspect-video
      object-cover
      transition-transform
      duration-700
      sm:group-hover:scale-105
    "
  />

  {/* Gradient Overlay */}

  <div className="absolute inset-0 bg-gradient-to-t from-[#17171f] via-transparent to-transparent dark:from-black/60 light:from-black/40" />

</div>

{/* ================= Card Content ================= */}
<div className="mb-4 px-6 pt-4 sm:mb-5 sm:px-8 sm:pt-6">

  <span
    className="
      rounded-full
      bg-emerald-500/20
      dark:bg-emerald-500/20
      light:bg-emerald-100
      px-3
      py-1
      text-sm
      text-emerald-400
      dark:text-emerald-300
      light:text-emerald-700
    "
  >
    {project.type}
  </span>

</div>
<div className="flex flex-1 flex-col p-8">

  <h3
className="
mt-2
text-3xl
font-bold
min-h-[80px]
tracking-tight
text-white
dark:text-white
light:text-gray-900
"
>
    {project.title}
  </h3>

           {/* ================= Overview ================= */}

<div className="mt-5">

  <h4
    className="
      mb-3
      text-sm
      font-semibold
      tracking-[0.15em]
      text-cyan-300
      dark:text-cyan-300
      light:text-cyan-700
    "
  >
    Overview
  </h4>

  <p
    className="
      leading-7
      text-gray-400
      dark:text-gray-400
      light:text-gray-600
    "
  >
    {project.problem}
  </p>

</div>


        {/* ================= Technologies ================= */}

<div className="mt-8">

  <h4
    className="
      mb-4
      text-sm
      font-semibold
      tracking-[0.15em]
      text-cyan-300
    "
  >
    Technologies
  </h4>

  <div className="flex flex-wrap gap-2.5">

    {project.technologies.map((tech) => (

      <span
        key={tech}
        className="
          rounded-full

          border
          border-white/10
          dark:border-white/10
          light:border-gray-300

          bg-white/[0.05]
          dark:bg-white/[0.05]
          light:bg-gray-100

          px-3.5
          py-1.5

          text-sm
          font-medium

          text-gray-300
          dark:text-gray-300
          light:text-gray-700

          transition

          sm:group-hover:border-emerald-500/30
          sm:group-hover:text-white
          light:sm:group-hover:text-emerald-700
        "
      >
        {tech}
      </span>

    ))}

  </div>

</div>

            {/* ================= Architecture ================= */}

<div className="mt-8">

  <h4
    className="
      mb-4
      text-sm
      font-semibold
      tracking-[0.15em]
      text-cyan-300
    "
  >
    Architecture
  </h4>

  <div
    className="
      flex
      flex-wrap
      items-center
      gap-2
    "
  >

    {project.architecture.map((step, index) => (

      <div
        key={step}
        className="flex items-center gap-2"
      >

        <span
          className="
            rounded-full

            border
            border-emerald-500/20
            dark:border-emerald-500/20
            light:border-emerald-700/30

            bg-emerald-500/10
            dark:bg-emerald-500/10
            light:bg-emerald-100

            px-3
            py-1.5

            text-sm
            font-medium

            text-emerald-300
            dark:text-emerald-300
            light:text-emerald-700
          "
        >
          {step}
        </span>

        {index !== project.architecture.length - 1 && (

          <span
            className="
              text-cyan-400
              dark:text-cyan-400
              light:text-cyan-700
              font-bold
            "
          >
            →
          </span>

        )}

      </div>

    ))}

  </div>

</div>

        {/* ================= Key Features ================= */}

<div className="mt-8 flex-1">

  <h4
    className="
      mb-4
      text-sm
      font-semibold
      tracking-[0.15em]
      text-cyan-300
      dark:text-cyan-300
      light:text-cyan-700
    "
  >
    Key Features
  </h4>

  <ul className="space-y-3">

    {project.features.map((feature) => (

      <li
        key={feature}
        className="
          flex
          items-start
          gap-3

          text-gray-300
          dark:text-gray-300
          light:text-gray-700
          leading-6
        "
      >

        <span
          className="
            mt-1

            flex
            h-5
            w-5

            items-center
            justify-center

            rounded-full

            bg-emerald-500/10
            dark:bg-emerald-500/10
            light:bg-emerald-100

            text-xs
            font-bold

            text-emerald-400
            dark:text-emerald-400
            light:text-emerald-700
          "
        >
        ●
        </span>

        <span>
          {feature}
        </span>

      </li>

    ))}

  </ul>

</div>
           {/* ================= CTA ================= */}

<button
  onClick={() => setSelectedProject(project)}
  className="
    mt-8

    flex
    w-full
    items-center
    justify-center
    gap-2

    rounded-2xl

    border
    border-emerald-500/30

    bg-emerald-500/10

    px-5
    py-3.5

    font-semibold

    text-emerald-300

    transition-all
    duration-300

    sm:hover:scale-[1.02]
    sm:hover:border-emerald-400
    sm:hover:bg-emerald-500
    sm:hover:text-black
  "
>
  <span>Open Case Study</span>

  <span
    className="
      transition-transform
      duration-300
      sm:group-hover:translate-x-2
    "
  >
    →
  </span>
</button>
            </div>
            </motion.article>
        ))}
      </div>
      <ProjectModal
  project={selectedProject}
  isOpen={selectedProject !== null}
  onClose={() => setSelectedProject(null)}
/>
    </section>
  );
}

export default Projects;
