import { timeline } from "../../data/timeline";

function Timeline() {
  return (
    <section
  id="journey"
  className="scroll-mt-24 mx-auto max-w-6xl px-8 py-16 lg:py-20">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-widest text-emerald-400">
          Journey
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          Experience & Learning Timeline
        </h2>
      </div>

      <div className="relative mt-12 border-l-2 border-emerald-500/30 pl-10">
        {timeline.map((item, index) => (
          <div key={index} className="relative mb-12 last:mb-0">
            <div className="absolute -left-[49px] h-5 w-5 rounded-full bg-emerald-400"></div>

            <p className="text-sm text-emerald-400">
              {item.year}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {item.title}
            </h3>

            <h4 className="text-lg text-gray-300">
              {item.company}
            </h4>

            <p className="mt-3 max-w-3xl leading-8 text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
