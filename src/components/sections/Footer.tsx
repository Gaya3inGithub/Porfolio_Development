import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090B] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 md:flex-row">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Gayathri T
          </h2>

          <p className="mt-2 text-gray-400">
            Software Engineer • Java Backend Developer
          </p>
        </div>

        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Gaya3inGithub"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 transition hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/gayathri-t-20223921a"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 transition hover:text-sky-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500">
        <p>
          Built with React, TypeScript & Tailwind CSS
        </p>

        <p className="mt-3 flex items-center justify-center gap-2">
          Made with <FaHeart className="text-red-500" /> by Gayathri T
        </p>

        <p className="mt-3">
          © 2026 Gayathri T. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;