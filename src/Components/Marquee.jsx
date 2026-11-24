import { skills } from "../Data/skills";

const items = Object.values(skills).flat();

/** Infinite scrolling band of tech logos. */
export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative -rotate-1 border-y border-line bg-accent py-4 text-ink" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map(({ name, icon: Icon }, i) => (
          <span key={i} className="flex items-center gap-2.5 font-display text-xl font-bold uppercase tracking-tight">
            <Icon className="text-2xl" />
            {name}
            <span className="ml-8 text-ink/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
