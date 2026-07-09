import { publication } from "../../data/publication";
import { FaBookOpen, FaExternalLinkAlt } from "react-icons/fa";

const { url, image } = publication;

function Publication() {
  return (
    <section 
    id="publication"
    className="scroll-mt-24 mx-auto max-w-7xl px-8 py-16 lg:py-20">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-widest text-emerald-400">
          Research
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          Journal Publication
        </h2>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-10 backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div>
            <div className="flex items-center gap-4">
              <FaBookOpen className="text-4xl text-emerald-400" />

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {publication.title}
                </h3>

                <p className="text-emerald-400">{publication.type}</p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-gray-400 text-sm sm:text-base">
              {publication.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {publication.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-black/40 px-3 py-1.5 text-xs sm:text-sm text-gray-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="mb-3 text-lg font-semibold text-white">
                Highlights
              </h4>

              <div className="grid gap-2 sm:grid-cols-2">
                {publication.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white/5 p-3 text-gray-300 text-sm"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 inline-block rounded-full bg-emerald-500/20 px-4 py-1.5 text-emerald-400 text-sm">
              {publication.status}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title="Open publication in a new tab"
              className="group w-full max-w-md rounded-2xl overflow-hidden border border-white/6 bg-black/30 sm:hover:scale-[1.01] transition-all duration-200"
            >
              <div className="w-full h-48 sm:h-60 lg:h-72 overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    alt="Publication preview"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-black/20 to-black/10">
                    <FaBookOpen className="text-6xl text-emerald-400" />
                  </div>
                )}
              </div>

              <div className="p-4 flex items-center justify-between bg-gradient-to-t from-black/10 to-transparent">
                <span className="text-sm font-semibold text-emerald-300">View Publication</span>
                <FaExternalLinkAlt className="text-sm text-gray-300 group-hover:text-emerald-300" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publication;
