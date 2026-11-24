import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDownload } from "react-icons/fa";
import TypewriterText from "../Components/Typewriter";
import Terminal from "../Components/Terminal";
import CountUp from "../Components/CountUp";
import { profile, heroStats } from "../Data/profile";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-accent/15 blur-[130px] animate-float" />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent-2/15 blur-[140px] animate-float"
        style={{ animationDelay: "-5s" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3 py-1.5 font-mono text-xs text-zinc-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            status: open to SDE roles
          </div>

          <p className="mt-8 font-mono text-sm text-zinc-500">
            <span className="text-accent-2">const</span> dev = <span className="text-accent">"hello world"</span>;{" "}
            <span className="inline-block origin-[70%_70%] animate-wave">👋</span>
          </p>

          <h1 className="isolate mt-3 font-display text-[3.4rem] font-extrabold leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-[5.6rem]">
            Akhilesh
            <br />
            <span className="text-outline">Kumar</span>{" "}
            <span className="relative inline-block">
              Yadav
              <span className="absolute -bottom-1 left-0 h-3 w-full -skew-x-12 bg-accent/80 -z-10" />
            </span>
          </h1>

          <p className="mt-7 text-lg text-zinc-300 sm:text-xl">
            <span className="text-zinc-500">&gt;</span> <TypewriterText />
          </p>

          <p className="mt-5 max-w-lg leading-relaxed text-zinc-400">
            Final-year CSE at IET Lucknow. 700+ problems solved, AI-integrated MERN apps shipped.
            Try the terminal — it actually works — or press{" "}
            <kbd className="rounded border border-line bg-panel px-1.5 py-0.5 font-mono text-xs text-zinc-300">Ctrl K</kbd>.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-ink transition hover:bg-white"
            >
              View Projects
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resume}
              download="Akhilesh_Kumar_Yadav.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel/60 px-6 py-3 font-medium text-white backdrop-blur transition hover:border-accent hover:text-accent"
            >
              <FaDownload className="text-sm" />
              Resume
            </a>
            <div className="flex items-center">
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
                  className="grid h-12 w-12 place-items-center rounded-lg text-xl text-zinc-500 transition hover:text-accent"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="border-l-2 border-accent/60 pl-3">
                <dd className="font-display text-3xl font-extrabold text-white">
                  <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </dd>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent-2/20 blur-2xl" />
          <Terminal />
        </div>
      </div>
    </section>
  );
}
