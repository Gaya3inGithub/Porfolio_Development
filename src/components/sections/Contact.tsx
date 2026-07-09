import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
   <section
  id="contact"
  className="scroll-mt-24 mx-auto max-w-7xl px-8 py-16 lg:py-20">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-widest text-emerald-400">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          Let's Build Something Great Together
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
          I am actively seeking Software Engineer opportunities and would be
          happy to connect regarding full-time roles, internships, or
          collaborations.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-emerald-400 text-xl" />
              <a
                href="mailto:tgayathri31122002@gmail.com"
                className="text-gray-300 hover:text-emerald-300"
              >
                tgayathri31122002@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-emerald-400 text-xl" />
              <a
                href="tel:+919786177761"
                className="text-gray-300 hover:text-emerald-300"
              >
                +91 9786177761
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-emerald-400 text-xl" />
              <a
                href="https://wa.me/919786177761"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-300"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-emerald-400 text-xl" />
              <span className="text-gray-300">
                Chennai, Tamil Nadu, India
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-emerald-400 text-xl" />
              <a
                href="https://linkedin.com/in/gayathri-t-20223921a"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-emerald-400"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-emerald-400 text-xl" />
              <a
                href="https://github.com/Gaya3inGithub"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-emerald-400"
              >
                GitHub Profile
              </a>
            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <h3 className="text-2xl font-bold text-white">
            Quick Message
          </h3>

          <p className="mt-4 text-gray-400">
            Interested in discussing an opportunity? Reach out via email or LinkedIn.
          </p>

          <a
            href="mailto:tgayathri31122002@gmail.com"
            className="mt-10 inline-block rounded-full bg-emerald-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Send Email
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
