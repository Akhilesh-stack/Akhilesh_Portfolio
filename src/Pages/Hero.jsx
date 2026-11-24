import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDownload } from "react-icons/fa";
import TypewriterText from "../Components/Typewriter";
import { profile } from "../Data/profile";

const stats = [
  { value: "1000+", label: "Problems solved" },
  { value: "80+", label: "Contests" },
  { value: "1686", label: "LeetCode peak" },
  { value: "8.9", label: "CGPA" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-accent/20 blur-[120px] animate-float" />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-accent-2/15 blur-[130px] animate-float"
        style={{ animationDelay: "-4s" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to SDE internships &amp; opportunities
        </div>

        <p className="mt-8 text-lg text-zinc-400">
          Hi there <span className="inline-block origin-[70%_70%] animate-wave">👋</span>, I'm
        </p>
        <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Akhilesh Kumar
          <br />
          <span className="bg-gradient-to-r from-accent via-amber-300 to-orange-400 bg-clip-text text-transparent">
            Yadav.
          </span>
        </h1>

        <p className="mt-6 text-xl text-zinc-300 sm:text-2xl">
          <TypewriterText />
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          CSE undergrad at IET Lucknow. I build fast, modern and scalable web apps with the MERN
          stack — and sharpen my problem solving on Codeforces, CodeChef &amp; LeetCode.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-ink shadow-[0_0_40px_-10px] shadow-accent transition hover:bg-amber-300"
          >
            View Projects
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={profile.resume}
            download="Akhilesh_Kumar_Yadav.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel/60 px-6 py-3 font-medium text-white backdrop-blur transition hover:border-zinc-500"
          >
            <FaDownload className="text-sm" />
            Resume
          </a>
          <div className="flex items-center gap-1 sm:ml-2">
            {[
              { icon: FaGithub, href: profile.github, label: "GitHub" },
              { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: FaEnvelope, href: `mailto:${profile.emails[0]}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-12 w-12 place-items-center rounded-lg text-xl text-zinc-400 transition hover:bg-panel hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink/90 px-5 py-4 backdrop-blur">
              <dt className="text-xs uppercase tracking-wider text-zinc-500">{s.label}</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
