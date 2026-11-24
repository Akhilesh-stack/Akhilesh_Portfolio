import { useMemo, useState } from "react";

// Codeforces rank colour bands
const BANDS = [
  { from: 0, to: 1200, color: "#9ca3af", name: "Newbie" },
  { from: 1200, to: 1400, color: "#22c55e", name: "Pupil" },
  { from: 1400, to: 1600, color: "#06b6d4", name: "Specialist" },
  { from: 1600, to: 1900, color: "#3b82f6", name: "Expert" },
];

const W = 640;
const H = 220;
const PAD = { l: 40, r: 12, t: 12, b: 24 };

/** SVG line chart of Codeforces rating history (live data). */
export default function RatingChart({ history }) {
  const [hover, setHover] = useState(null);

  const { pts, yMin, yMax, path, area } = useMemo(() => {
    const ratings = history.map((h) => h.newRating);
    const yMin = Math.floor((Math.min(...ratings, 1000) - 100) / 100) * 100;
    const yMax = Math.ceil((Math.max(...ratings) + 100) / 100) * 100;
    const x = (i) => PAD.l + (i * (W - PAD.l - PAD.r)) / Math.max(history.length - 1, 1);
    const y = (r) => PAD.t + ((yMax - r) * (H - PAD.t - PAD.b)) / (yMax - yMin);
    const pts = history.map((h, i) => ({ ...h, x: x(i), y: y(h.newRating) }));
    const path = pts.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
    const area = `${path} L${pts.at(-1).x},${H - PAD.b} L${pts[0].x},${H - PAD.b} Z`;
    return { pts, yMin, yMax, path, area };
  }, [history]);

  const y = (r) => PAD.t + ((yMax - r) * (H - PAD.t - PAD.b)) / (yMax - yMin);
  const ticks = [];
  for (let r = yMin; r <= yMax; r += 200) ticks.push(r);

  const onMove = (e) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    let best = 0;
    pts.forEach((p, i) => {
      if (Math.abs(p.x - px) < Math.abs(pts[best].x - px)) best = i;
    });
    setHover(best);
  };

  const hp = hover !== null ? pts[hover] : null;

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full touch-none"
        onPointerMove={onMove}
        onPointerLeave={() => setHover(null)}
        role="img"
        aria-label={`Codeforces rating over ${history.length} contests`}
      >
        <defs>
          <linearGradient id="cf-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#d4ff3f" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#d4ff3f" stopOpacity="0" />
          </linearGradient>
          <clipPath id="cf-plot">
            <rect x={PAD.l} y={PAD.t} width={W - PAD.l - PAD.r} height={H - PAD.t - PAD.b} />
          </clipPath>
        </defs>

        <g clipPath="url(#cf-plot)">
          {BANDS.map((b) => (
            <rect
              key={b.name}
              x={PAD.l}
              width={W - PAD.l - PAD.r}
              y={y(b.to)}
              height={y(b.from) - y(b.to)}
              fill={b.color}
              opacity="0.07"
            />
          ))}
        </g>

        {ticks.map((t) => (
          <g key={t}>
            <line x1={PAD.l} x2={W - PAD.r} y1={y(t)} y2={y(t)} stroke="#ffffff" strokeOpacity="0.06" />
            <text x={PAD.l - 8} y={y(t) + 4} textAnchor="end" className="fill-zinc-500 font-mono text-[10px]">
              {t}
            </text>
          </g>
        ))}

        <path d={area} fill="url(#cf-area)" />
        <path d={path} fill="none" stroke="#d4ff3f" strokeWidth="2" strokeLinejoin="round" />
        {pts.map((p, i) => (
          <circle
            key={p.contestId}
            cx={p.x}
            cy={p.y}
            r={hover === i ? 5 : 3}
            fill={hover === i ? "#d4ff3f" : "#0a0a0c"}
            stroke="#d4ff3f"
            strokeWidth="1.5"
          />
        ))}
        {hp && <line x1={hp.x} x2={hp.x} y1={PAD.t} y2={H - PAD.b} stroke="#d4ff3f" strokeOpacity="0.3" strokeDasharray="3 3" />}
      </svg>

      {hp && (
        <div
          className="pointer-events-none absolute top-2 z-10 w-56 rounded-lg border border-line bg-ink/95 p-3 text-xs shadow-xl"
          style={{
            left: `${(hp.x / W) * 100}%`,
            transform: hp.x > W * 0.6 ? "translateX(calc(-100% - 12px))" : "translateX(12px)",
          }}
        >
          <p className="font-medium text-white">{hp.contestName}</p>
          <p className="mt-1 font-mono text-zinc-400">
            rating <span className="text-accent">{hp.newRating}</span>{" "}
            <span className={hp.newRating >= hp.oldRating ? "text-emerald-400" : "text-rose-400"}>
              ({hp.newRating >= hp.oldRating ? "+" : ""}
              {hp.newRating - hp.oldRating})
            </span>
          </p>
          <p className="font-mono text-zinc-400">rank #{hp.rank}</p>
        </div>
      )}
    </div>
  );
}
