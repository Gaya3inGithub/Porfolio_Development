import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
  FaRegClock,
  FaWhatsapp,
} from "react-icons/fa6";

const enquiryOptions = [
  { label: "Full-time role", icon: FaBriefcase },
  { label: "Freelance project", icon: FaCode },
  { label: "Collaboration", icon: FaPaperPlane },
];

const inputClassName =
  "contact-field w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3.5 text-sm outline-none transition duration-300 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-white/10 dark:bg-slate-950/35 dark:placeholder:text-slate-500 dark:focus:border-cyan-400 dark:focus:bg-slate-950/55 dark:focus:ring-cyan-400/10";

const contactLinks = [
  { label: "Email me", value: "tgayathri31122002@gmail.com", href: "mailto:tgayathri31122002@gmail.com", icon: FaEnvelope },
  { label: "Call me", value: "+91 9786177761", href: "tel:+919786177761", icon: FaPhone },
  { label: "Message on WhatsApp", value: "Usually the quickest way", href: "https://wa.me/919786177761", icon: FaWhatsapp, external: true },
];

function Contact() {
  const [enquiryType, setEnquiryType] = useState(enquiryOptions[0].label);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setSubmissionStatus("idle");

    try {
      const response = await fetch("/api/send-contact-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") ?? "").trim(),
          email: String(formData.get("email") ?? "").trim(),
          organization: String(formData.get("organization") ?? "").trim(),
          message: String(formData.get("message") ?? "").trim(),
          website: String(formData.get("website") ?? "").trim(),
          enquiryType,
        }),
      });

      if (!response.ok) throw new Error("Contact request failed");

      form.reset();
      setSubmissionStatus("success");
    } catch {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden scroll-mt-24 px-6 py-16 sm:px-8 lg:py-24">
      <div aria-hidden="true" className="absolute inset-x-0 top-1/3 -z-10 mx-auto h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px] dark:bg-cyan-500/10" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.035] [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:26px_26px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Available for new opportunities
          </div>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Start a meaningful <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent">connection.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-gray-400 sm:text-lg sm:leading-8">
            Have a role, product idea, or collaboration in mind? Choose a path below and let&apos;s turn the conversation into momentum.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/75 shadow-[0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/45 dark:shadow-[0_28px_90px_rgba(0,0,0,0.35)] lg:grid-cols-[0.9fr_1.1fr]"
        >
          <aside className="relative overflow-hidden border-b border-slate-200/80 p-6 dark:border-white/10 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div aria-hidden="true" className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-400">Contact terminal</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">A few ways to say hello.</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 dark:text-gray-400">Whether it&apos;s a quick question or your next big build, I&apos;m always happy to hear the context.</p>

              <div className="mt-7 space-y-3">
                {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
                  <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/65 p-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/45 hover:shadow-[0_14px_30px_rgba(16,185,129,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-cyan-400/45 dark:hover:shadow-cyan-500/10">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-lg text-emerald-600 transition duration-300 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white dark:text-emerald-400 dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950"><Icon /></span>
                    <span className="min-w-0 flex-1"><span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-500">{label}</span><span className="mt-1 block truncate text-sm font-semibold text-slate-800 dark:text-gray-200">{value}</span></span>
                    <FaArrowUpRightFromSquare className="shrink-0 text-xs text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-500" />
                  </a>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-200/70 bg-white/55 p-4 dark:border-white/10 dark:bg-white/[0.035]"><FaLocationDot className="text-emerald-500" /><p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-500">Based in</p><p className="mt-1 text-sm font-semibold text-slate-800 dark:text-gray-200">Chennai, India</p></div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/55 p-4 dark:border-white/10 dark:bg-white/[0.035]"><FaRegClock className="text-cyan-500" /><p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-500">Response</p><p className="mt-1 text-sm font-semibold text-slate-800 dark:text-gray-200">Within 24 hours</p></div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-slate-600 dark:text-gray-400"><span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />Find me online<span className="h-px flex-1 bg-slate-200 dark:bg-white/10" /></div>
              <div className="mt-4 flex gap-3"><a href="https://linkedin.com/in/gayathri-t-20223921a" target="_blank" rel="noreferrer" aria-label="Gayathri on LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-[#0077b5] hover:bg-[#0077b5] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"><FaLinkedin /></a><a href="https://github.com/Gaya3inGithub" target="_blank" rel="noreferrer" aria-label="Gayathri on GitHub" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"><FaGithub /></a></div>
            </div>
          </aside>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-400">Send a message</p><h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">What are we building?</h3></div><span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500 dark:bg-white/5 dark:text-gray-400">Delivered directly by SMS</span></div>

            <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <fieldset><legend className="text-sm font-semibold text-slate-700 dark:text-gray-300">I&apos;m reaching out about</legend><div className="mt-3 grid gap-2 sm:grid-cols-3">{enquiryOptions.map(({ label, icon: Icon }) => { const selected = enquiryType === label; return <button key={label} type="button" onClick={() => setEnquiryType(label)} aria-pressed={selected} className={`flex items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${selected ? "border-emerald-500 bg-emerald-500 text-slate-950 shadow-[0_10px_22px_rgba(16,185,129,0.25)] dark:border-cyan-400 dark:bg-cyan-400" : "border-slate-200 bg-white text-slate-600 hover:border-emerald-400/50 hover:bg-emerald-50 dark:border-white/10 dark:bg-white/[0.035] dark:text-gray-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/10"}`}><Icon className="text-base" />{label}</button>; })}</div></fieldset>
              <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-gray-300">Your name<input name="name" type="text" autoComplete="name" required placeholder="Jane Smith" className={inputClassName} /></label><label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-gray-300">Email address<input name="email" type="email" autoComplete="email" required placeholder="jane@company.com" className={inputClassName} /></label></div>
              <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-gray-300">Company / client <span className="font-normal text-slate-400">(optional)</span><input name="organization" type="text" autoComplete="organization" placeholder="Company name" className={inputClassName} /></label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-gray-300">Your message<textarea name="message" rows={5} required placeholder="Tell me about the opportunity, challenge, or idea..." className={`${inputClassName} resize-y`} /></label>
              <motion.button whileHover={reduceMotion || isSubmitting ? undefined : { y: -2 }} whileTap={isSubmitting ? undefined : { scale: 0.985 }} type="submit" disabled={isSubmitting} className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-4 text-sm font-bold text-slate-950 shadow-[0_16px_32px_rgba(16,185,129,0.25)] transition hover:shadow-[0_20px_38px_rgba(6,182,212,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 dark:focus-visible:ring-offset-slate-950"><FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />{isSubmitting ? "Sending securely..." : "Launch message"}<FaArrowRight className="text-xs" /></motion.button>
              {submissionStatus === "success" && <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} role="status" className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">Message sent successfully. Gayathri will receive it by SMS shortly.</motion.p>}
              {submissionStatus === "error" && <p role="alert" className="rounded-2xl border border-rose-500/25 bg-rose-500/10 px-4 py-3 text-sm text-rose-700 dark:text-rose-300">Unable to send the message right now. Please use email or WhatsApp instead.</p>}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
