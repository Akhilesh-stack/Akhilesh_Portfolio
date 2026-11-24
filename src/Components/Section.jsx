import Reveal from "./Reveal";

/**
 * Section styled like a competitive-programming problem statement:
 *   Problem A · About me                [ Accepted ]
 *   time limit per test: …  memory limit: …
 */
export default function Section({ id, letter, title, meta, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-12 border-b border-dashed border-line pb-8 md:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-sm text-zinc-500">
              Problem <span className="text-accent">{letter}</span>
            </p>
            <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-xs font-bold text-accent">
              ✓ Accepted
            </span>
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="text-outline">{letter}.</span> {title}
          </h2>
          {meta && (
            <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-zinc-500">
              {meta.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </p>
          )}
          {subtitle && <p className="mt-5 max-w-2xl text-zinc-400">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
