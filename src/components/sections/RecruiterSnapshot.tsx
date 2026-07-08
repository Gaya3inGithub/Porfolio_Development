import {
  FaJava,
  FaDatabase,
  FaCode,
  FaBookOpen,
} from "react-icons/fa";

function RecruiterSnapshot() {
  const highlights = [
    {
      icon: <FaJava size={28} />,
      title: "Java Backend",
      description:
        "Core Java, OOP, Collections, Java Database Connectivity, SQL and REST APIs.",
    },
    {
      icon: <FaDatabase size={28} />,
      title: "Analytical Thinking",
      description:
        "Approaches problems methodically and builds structured, scalable solutions.",
    },
    {
      icon: <FaBookOpen size={28} />,
      title: "Code Quality",
      description:
        "Focuses on writing clean, maintainable and well-organized code.",
    },
    {
      icon: <FaCode size={28} />,
      title: "Continuous Improvement",
      description:
        "Actively learns modern backend technologies and engineering practices.",
    },
  ];

  return (
    <section
  id="snapshot"
  className="scroll-mt-24 mx-auto max-w-7xl px-8 py-12 lg:py-16">
      <h2 className="mb-3 text-center text-4xl font-bold text-white sm:text-5xl">
        Why Hire Me?
      </h2>

      <p className="mx-auto mb-10 max-w-2xl text-center text-gray-400">
        A quick snapshot of what I can contribute as a Software Engineer.
      </p>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-500"
          >
            <div className="mb-6 text-emerald-400">
              {item.icon}
            </div>

            <h3 className="mb-3 text-xl font-bold text-white">
              {item.title}
            </h3>

            <p className="leading-7 text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecruiterSnapshot;
