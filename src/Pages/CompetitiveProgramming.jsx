import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { TbTrophy } from "react-icons/tb";
import Section from "../Components/Section";
import Reveal from "../Components/Reveal";
import RatingChart from "../Components/RatingChart";
import { platforms, standings, fetchCodeforces, handles } from "../Data/cp";

const judgeColor = Object.fromEntries(platforms.map((p) => [p.judge, p.color]));

export default function CompetitiveProgramming() {
  const [cf, setCf] = useState(null);
  const [cfState, setCfState] = useState("loading");

  useEffect(() => {
    let alive = true;
    fetchCodeforces().then((d) => {
      if (!alive) return;
      setCf(d);
      setCfState(d ? "ok" : "error");
    });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <Section
      id="competitive-programming"
      letter="D"
      title="Competitive Programming"
      meta={["problems: 700+", "judges: 4", "field: 25,000+"]}
      subtitle="700+ problems solved across Codeforces, LeetCode, CodeChef and GeeksforGeeks, with consistent finishes in global contests."
    >
      {/* Platform cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((p, i) => {
          const live = p.judge === "Codeforces" && cf?.user;
          return (
            <Reveal key={p.judge} delay={i * 80}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="spot group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-x-0 top-0 h-1 opacity-70 transition group-hover:opacity-100" style={{ background: p.color }} />
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2.5">
                    <p.icon className="text-2xl" style={{ color: p.color }} />
                    <span className="font-display font-semibold text-white">{p.judge}</span>
                  </span>
                  <FaExternalLinkAlt className="text-xs text-zinc-600 transition group-hover:text-zinc-300" />
                </div>

                <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-zinc-500">{p.headlineLabel}</p>
                <p className="font-display text-4xl font-extrabold text-white">
                  {live ? cf.user.maxRating : p.headline}
                </p>

                <div className="mt-auto flex items-center justify-between gap-2 border-t border-line pt-4 text-sm">
                  <span
                    className="rounded-md px-2 py-0.5 font-mono text-xs capitalize"
                    style={{ background: `${p.color}1f`, color: p.color }}
                  >
                    {live ? `${cf.user.maxRank} (max)` : p.badge}
                  </span>
                  <span className="truncate font-mono text-xs text-zinc-500">@{p.handle}</span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Live Codeforces graph */}
        <Reveal className="spot rounded-2xl border border-line bg-panel p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <SiCodeforces className="text-xl text-[#60a5fa]" />
              <h3 className="font-display font-semibold text-white">Codeforces rating</h3>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> live
              </span>
            </div>
            {cf?.user && (
              <p className="font-mono text-xs text-zinc-500">
                current <span className="text-white">{cf.user.rating}</span> · max{" "}
                <span className="text-accent">{cf.user.maxRating}</span> · {cf.history.length} contests
              </p>
            )}
          </div>
          {cfState === "loading" && <div className="h-52 animate-pulse rounded-lg bg-ink" />}
          {cfState === "ok" && cf.history.length > 1 && <RatingChart history={cf.history} />}
          {cfState === "error" && (
            <p className="py-16 text-center text-sm text-zinc-500">
              Couldn't reach Codeforces right now —{" "}
              <a className="text-accent underline" href={`https://codeforces.com/profile/${handles.codeforces}`} target="_blank" rel="noopener noreferrer">
                view profile
              </a>
            </p>
          )}
        </Reveal>

        {/* Best finishes — styled like a standings table */}
        <Reveal delay={100} className="spot rounded-2xl border border-line bg-panel p-6">
          <div className="mb-4 flex items-center gap-2.5">
            <TbTrophy className="text-xl text-accent" />
            <h3 className="font-display font-semibold text-white">Best finishes</h3>
          </div>
          <ol className="divide-y divide-line">
            {standings.map((s) => (
              <li key={s.contest} className="flex items-center gap-4 py-3">
                <span className="w-16 shrink-0 font-display text-xl font-extrabold text-white tabular-nums">#{s.rank}</span>
                <div className="min-w-0">
                  <p className="truncate text-sm text-zinc-200">{s.contest}</p>
                  <p className="font-mono text-[11px]" style={{ color: judgeColor[s.judge] }}>
                    {s.judge} · {s.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
