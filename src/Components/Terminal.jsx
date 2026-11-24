import { useEffect, useRef, useState } from "react";
import { profile } from "../Data/profile";
import { projects } from "../Data/project";
import { skills } from "../Data/skills";

const PROMPT = "guest@akhilesh:~$";

const sections = {
  about: "about",
  projects: "projects",
  skills: "skills",
  cp: "competitive-programming",
  contact: "contact",
  education: "education",
};

function run(cmd) {
  const c = cmd.trim().toLowerCase();
  switch (c) {
    case "":
      return [];
    case "help":
      return [
        "available commands:",
        "  whoami     who is this guy?",
        "  about      short bio",
        "  skills     languages & stack",
        "  projects   things I've built",
        "  cp         contest stats",
        "  contact    reach me",
        "  resume     download my resume",
        "  goto <x>   scroll to a section",
        "  clear      clear the screen",
      ];
    case "whoami":
      return [
        `${profile.name}`,
        "B.Tech CSE @ IET Lucknow (2023–27) · CGPA 8.9",
        "competitive programmer + MERN developer",
      ];
    case "about":
      return [
        "I solve problems for fun (1000+ of them, 80+ contests)",
        "and build fast, scalable web apps with React & Node.",
        "Currently exploring Next.js. Open to SDE roles.",
      ];
    case "skills":
      return Object.entries(skills).map(
        ([k, v]) => `${k.padEnd(13)}${v.map((s) => s.name).join(", ")}`
      );
    case "projects":
      return projects.flatMap((p) => [`▸ ${p.name} (${p.date}) — ${p.tagline}`, `  ${p.github}`]);
    case "cp":
      return [
        "LeetCode    1686  Knight",
        "CodeChef    1607  3★",
        "Codeforces  1391  max",
        "AtCoder      508  8 Kyu",
      ];
    case "contact":
      return [`email     ${profile.emails[0]}`, `linkedin  ${profile.linkedin}`, `github    ${profile.github}`];
    case "resume": {
      const a = document.createElement("a");
      a.href = profile.resume;
      a.download = "Akhilesh_Kumar_Yadav.pdf";
      a.click();
      return ["downloading resume… ✓"];
    }
    case "sudo hire akhilesh":
    case "sudo hire":
      return ["[sudo] permission granted. great choice 🚀", "→ type `contact`"];
    case "ls":
      return ["about  education  projects  cp  skills  contact  resume.pdf"];
    default: {
      if (c.startsWith("goto ")) {
        const id = sections[c.slice(5).trim()];
        if (id) {
          document.getElementById(id)?.scrollIntoView();
          return [`→ jumping to ${c.slice(5).trim()}`];
        }
        return [`goto: unknown section. try: ${Object.keys(sections).join(", ")}`];
      }
      if (c.startsWith("sudo")) return ["nice try 😄  (hint: sudo hire akhilesh)"];
      return [`command not found: ${c}. type \`help\``];
    }
  }
}

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [booting, setBooting] = useState(true);
  const [past, setPast] = useState([]);
  const [pi, setPi] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  // Boot sequence: auto-type `whoami`
  useEffect(() => {
    const cmd = "whoami";
    let i = 0;
    let t;
    const type = () => {
      i++;
      setInput(cmd.slice(0, i));
      if (i < cmd.length) t = setTimeout(type, 110);
      else
        t = setTimeout(() => {
          setHistory([{ cmd, out: run(cmd) }, { cmd: null, out: ["type `help` to see what else I can do ↓"] }]);
          setInput("");
          setBooting(false);
        }, 400);
    };
    t = setTimeout(type, 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  const submit = (e) => {
    e.preventDefault();
    if (booting) return;
    const cmd = input;
    if (cmd.trim().toLowerCase() === "clear") setHistory([]);
    else setHistory((h) => [...h, { cmd, out: run(cmd) }]);
    if (cmd.trim()) setPast((p) => [cmd, ...p]);
    setPi(-1);
    setInput("");
  };

  const onKey = (e) => {
    if (e.key === "ArrowUp" && past.length) {
      e.preventDefault();
      const n = Math.min(pi + 1, past.length - 1);
      setPi(n);
      setInput(past[n]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const n = pi - 1;
      setPi(n);
      setInput(n >= 0 ? past[n] : "");
    }
  };

  const quick = ["help", "projects", "cp", "contact"];

  return (
    <div
      className="spot overflow-hidden rounded-2xl border border-line bg-panel/90 shadow-2xl shadow-black/50 backdrop-blur"
      onClick={() => inputRef.current?.focus({ preventScroll: true })}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-zinc-500">akhilesh — zsh</span>
      </div>

      <div
        ref={bodyRef}
        className="term-scroll h-72 overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed sm:h-80"
      >
        {history.map((h, i) => (
          <div key={i} className="mb-2">
            {h.cmd !== null && (
              <p>
                <span className="text-accent">{PROMPT}</span> <span className="text-white">{h.cmd}</span>
              </p>
            )}
            {h.out.map((line, j) => (
              <p key={j} className="whitespace-pre-wrap break-words text-zinc-400">
                {line}
              </p>
            ))}
          </div>
        ))}
        <form onSubmit={submit} className="flex items-center gap-2">
          <label htmlFor="term-input" className="shrink-0 text-accent">
            {PROMPT}
          </label>
          <input
            id="term-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            readOnly={booting}
            autoComplete="off"
            spellCheck="false"
            aria-label="Terminal command"
            className="w-full min-w-0 bg-transparent text-white caret-accent outline-none"
          />
        </form>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
        {quick.map((q) => (
          <button
            key={q}
            type="button"
            disabled={booting}
            onClick={(e) => {
              e.stopPropagation();
              setHistory((h) => [...h, { cmd: q, out: run(q) }]);
            }}
            className="rounded-md border border-line bg-ink px-2.5 py-1 font-mono text-xs text-zinc-400 transition hover:border-accent hover:text-accent disabled:opacity-40"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
