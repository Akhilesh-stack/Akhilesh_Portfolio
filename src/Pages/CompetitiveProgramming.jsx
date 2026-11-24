import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Section from "../Components/Section";
import Reveal from "../Components/Reveal";
import { initStats } from "../Data/cp";

const brand = {
  Codeforces: "#60a5fa",
  CodeChef: "#d97706",
  LeetCode: "#fbbf24",
  AtCoder: "#e4e4e7",
};

function Skeleton() {
  return <div className="h-52 animate-pulse rounded-2xl border border-line bg-panel" />;
}

export default function CompetitiveProgramming() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    let alive = true;
    initStats().then((s) => alive && setStats(s));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <Section
      id="competitive-programming"
      letter="D"
      title="Competitive Programming"
      meta={["problems: 1000+", "contests: 80+", "judges: 4"]}
      subtitle="1000+ problems solved and 80+ rated contests across four judges."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.length === 0
          ? [0, 1, 2, 3].map((i) => <Skeleton key={i} />)
          : stats.map((item, i) => {
              const color = brand[item.Judge] ?? "#fbbf24";
              return (
                <Reveal key={item.Judge} delay={i * 80}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spot group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1"
                    style={{ "--brand": color }}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-1 opacity-70 transition group-hover:opacity-100"
                      style={{ background: color }}
                    />
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2.5">
                        <item.icon className="text-2xl" style={{ color }} />
                        <span className="font-display font-semibold text-white">{item.Judge}</span>
                      </span>
                      <FaExternalLinkAlt className="text-xs text-zinc-600 transition group-hover:text-zinc-300" />
                    </div>

                    <p className="mt-6 text-xs uppercase tracking-wider text-zinc-500">Max rating</p>
                    <p className="font-display text-4xl font-bold text-white">{item.maxRating}</p>

                    <div className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm">
                      <div>
                        <p className="text-xs text-zinc-500">Current</p>
                        <p className="text-zinc-200">{item.currentRating}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500">Rank</p>
                        <p className="capitalize text-zinc-200">{item.currRank}</p>
                      </div>
                    </div>
                    <p className="mt-4 truncate font-mono text-xs text-zinc-500">@{item.handle}</p>
                  </a>
                </Reveal>
              );
            })}
      </div>
    </Section>
  );
}
