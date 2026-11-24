import { FaGithub, FaArrowRight } from "react-icons/fa";
import Section from "../Components/Section";
import Reveal from "../Components/Reveal";
import { projects } from "../Data/project";
import { profile } from "../Data/profile";

export default function Projects() {
  return (
    <Section
      id="projects"
      letter="C"
      title="Projects"
      meta={["tags: mern, ai, real-time", "verdict: shipped"]}
      subtitle="Full stack products with real users in mind — AI feedback, caching, live location and secure auth."
    >
      <div className="space-y-8">
        {projects.map((p, i) => (
          <Reveal
            key={p.name}
            as="article"
            className="spot group grid overflow-hidden rounded-3xl border border-line bg-panel transition duration-300 hover:border-accent/40 lg:grid-cols-[1.35fr_1fr]"
          >
            {/* Left: story */}
            <div className="p-6 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-zinc-500">
                    <span className="text-accent">{String(i + 1).padStart(2, "0")}</span> · {p.date}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">{p.name}</h3>
                  <p className="mt-1 text-accent-2">{p.tagline}</p>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} on GitHub`}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line text-xl text-zinc-300 transition hover:border-accent hover:bg-accent hover:text-ink"
                >
                  <FaGithub />
                </a>
              </div>

              <ul className="mt-6 space-y-3">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-7 flex flex-wrap gap-2">
                {p.techStack.map((t) => (
                  <li key={t} className="rounded-md border border-line bg-ink px-2.5 py-1 font-mono text-xs text-zinc-300">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: metrics as a code window */}
            <div className="relative border-t border-line bg-ink/60 p-6 sm:p-9 lg:border-l lg:border-t-0">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
              <p className="font-mono text-xs text-zinc-500">
                <span className="text-accent-2">const</span> {p.name.toLowerCase()} = {"{"}
              </p>
              <dl className="mt-4 space-y-3">
                {p.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-baseline justify-between gap-4 rounded-xl border border-line bg-panel px-4 py-3 transition group-hover:border-zinc-700"
                  >
                    <dt className="font-mono text-xs text-zinc-500">{m.label}</dt>
                    <dd className="font-display text-2xl font-extrabold text-white">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 font-mono text-xs text-zinc-500">{"};"}</p>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent"
              >
                view source
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-zinc-400 transition hover:text-accent"
        >
          See more on GitHub
          <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
        </a>
      </Reveal>
    </Section>
  );
}
