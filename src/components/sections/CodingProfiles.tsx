import { profiles } from "../../data/profiles";
import { FaExternalLinkAlt } from "react-icons/fa";

function CodingProfiles() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-16 lg:py-20">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-widest text-emerald-400">
          Coding Journey
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          Coding Profiles
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
          Platforms where I practice coding, build projects and continuously
          improve my software engineering skills.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {profiles.map((profile) => (
          <div
            key={profile.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-emerald-500"
          >
            <h3 className="text-2xl font-bold text-white">
              {profile.name}
            </h3>

            <p className="mt-3 text-emerald-400">
              @{profile.username}
            </p>

            <p className="mt-5 leading-7 text-gray-400">
              {profile.description}
            </p>

            <a
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-emerald-500 px-5 py-3 text-emerald-400 transition hover:bg-emerald-500 hover:text-black"
            >
              Visit Profile
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CodingProfiles;
