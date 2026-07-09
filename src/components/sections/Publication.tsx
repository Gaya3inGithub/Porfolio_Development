import { motion } from "framer-motion";
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

      <motion.div 
        className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 lg:p-10 backdrop-blur-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileTap={{ y: -8 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start lg:items-center">
          <div className="lg:order-1">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
                <FaBookOpen className="text-5xl sm:text-6xl text-emerald-400" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {publication.title}
                </h3>

                <p className="text-emerald-400 text-sm sm:text-base font-medium mt-1">{publication.type}</p>
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

          <div className="flex items-center justify-center w-full lg:order-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title="Open publication in a new tab"
              className="group w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl overflow-hidden border border-white/6 bg-black/30 sm:hover:scale-[1.01] transition-all duration-200"
            >
              <div className="relative w-full bg-black/50 overflow-hidden">
                <div className="aspect-video w-full flex items-center justify-center">
                  {image ? (
                    <img
                      src={image}
                      alt="Publication preview - Anti-Theft Flooring System"
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/20 to-black/40 pointer-events-none">
                    <FaBookOpen className="text-5xl sm:text-6xl text-emerald-400" />
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4 flex items-center justify-between bg-gradient-to-t from-black/20 to-transparent">
                <span className="text-xs sm:text-sm font-semibold text-emerald-300">View Publication</span>
                <FaExternalLinkAlt className="text-xs sm:text-sm text-gray-300 sm:group-hover:text-emerald-300 transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Publication;
