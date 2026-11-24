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
      meta={["tags: full-stack, mern, react", "verdict: shipped"]}
      subtitle="A selection of full stack projects — from DSA learning platforms to role-based MERN apps."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 100}
            as="article"
            className="spot group flex flex-col overflow-hidden rounded-2xl border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 sm:p-8"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition group-hover:opacity-100" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-zinc-500">
                  {String(i + 1).padStart(2, "0")} · {p.date}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">{p.name}</h3>
                <p className="text-sm text-accent">{p.tagline}</p>
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} on GitHub`}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line text-xl text-zinc-300 transition hover:border-accent hover:text-accent"
              >
                <FaGithub />
              </a>
            </div>

            <p className="mt-5 flex-1 leading-relaxed text-zinc-400">{p.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {p.techStack.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-line bg-ink px-2.5 py-1 font-mono text-xs text-zinc-300"
                >
                  {t}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-zinc-500">
              Tools: <span className="text-zinc-400">{p.tools.join(" · ")}</span>
            </p>
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
