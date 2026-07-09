import { learning } from "../../data/learning";

function Learning() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-16 lg:py-20">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-widest text-emerald-400">
          Continuous Improvement
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          Currently Learning
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
          I believe continuous learning is essential for building better software
          and growing as an engineer.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {learning.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition sm:hover:border-emerald-500"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <span className="rounded-full bg-emerald-500/20 px-4 py-1 text-sm text-emerald-400">
                {item.status}
              </span>
            </div>

            <p className="mt-6 leading-8 text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Learning;
