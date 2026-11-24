import Reveal from "./Reveal";

/** Shared section wrapper with a numbered eyebrow + title. */
export default function Section({ id, index, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-12 md:mb-16">
          <p className="font-mono text-sm text-accent">
            <span className="text-zinc-500">{index} /</span> {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 max-w-2xl text-zinc-400">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
