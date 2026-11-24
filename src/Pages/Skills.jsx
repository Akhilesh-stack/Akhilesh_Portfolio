import Section from "../Components/Section";
import Reveal from "../Components/Reveal";
import { skills } from "../Data/skills";

export default function Skills() {
  return (
    <Section id="skills" letter="E" title="Skills" meta={["languages: 7", "frameworks: 4", "always learning"]}>
      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal
            key={category}
            delay={i * 80}
            className="spot rounded-2xl border border-line bg-panel p-6 sm:p-7"
          >
            <div className="mb-5 flex items-baseline justify-between">
              <h3 className="font-display text-lg font-semibold text-white">{category}</h3>
              <span className="font-mono text-xs text-zinc-500">{items.length}</span>
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {items.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="group flex items-center gap-2 rounded-lg border border-line bg-ink px-3 py-2 text-sm text-zinc-300 transition hover:-translate-y-0.5 hover:border-zinc-600 hover:text-white"
                >
                  <Icon className="text-lg transition group-hover:scale-110" style={{ color }} />
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
