import { useEffect, useMemo, useRef, useState } from "react";
import { TbCommand, TbArrowRight, TbExternalLink, TbDownload, TbCopy } from "react-icons/tb";
import { profile } from "../Data/profile";
import { platforms } from "../Data/cp";
import { projects } from "../Data/project";

const go = (id) => () => document.getElementById(id)?.scrollIntoView();
const open = (url) => () => window.open(url, "_blank", "noopener,noreferrer");

function buildActions() {
  return [
    { group: "Navigate", label: "Home", icon: TbArrowRight, run: go("home") },
    { group: "Navigate", label: "About", icon: TbArrowRight, run: go("about") },
    { group: "Navigate", label: "Education", icon: TbArrowRight, run: go("education") },
    { group: "Navigate", label: "Projects", icon: TbArrowRight, run: go("projects") },
    { group: "Navigate", label: "Competitive Programming", icon: TbArrowRight, run: go("competitive-programming") },
    { group: "Navigate", label: "Skills", icon: TbArrowRight, run: go("skills") },
    { group: "Navigate", label: "Contact", icon: TbArrowRight, run: go("contact") },
    {
      group: "Actions",
      label: "Download resume",
      icon: TbDownload,
      run: () => {
        const a = document.createElement("a");
        a.href = profile.resume;
        a.download = "Akhilesh_Kumar_Yadav.pdf";
        a.click();
      },
    },
    {
      group: "Actions",
      label: "Copy email address",
      icon: TbCopy,
      run: () => navigator.clipboard?.writeText(profile.emails[0]),
    },
    { group: "Links", label: "GitHub", icon: TbExternalLink, run: open(profile.github) },
    { group: "Links", label: "LinkedIn", icon: TbExternalLink, run: open(profile.linkedin) },
    ...platforms.map((p) => ({ group: "Links", label: p.judge, icon: TbExternalLink, run: open(p.link) })),
    ...projects.map((p) => ({ group: "Links", label: `${p.name} on GitHub`, icon: TbExternalLink, run: open(p.github) })),
  ];
}

export default function CommandPalette() {
  const [isOpen, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);
  const actions = useMemo(buildActions, []);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    return s ? actions.filter((a) => a.label.toLowerCase().includes(s)) : actions;
  }, [q, actions]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQ("");
      setSel(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [isOpen]);

  useEffect(() => setSel(0), [q]);

  if (!isOpen) return null;

  const runAt = (i) => {
    const a = results[i];
    if (!a) return;
    setOpen(false);
    setTimeout(a.run, 30);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runAt(sel);
    }
  };

  let lastGroup = null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-black/60 px-4 pt-[12vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl shadow-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <TbCommand className="text-lg text-accent" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type a command or search…"
            className="h-14 w-full bg-transparent text-white placeholder:text-zinc-500 outline-none"
          />
          <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">ESC</kbd>
        </div>
        <ul className="term-scroll max-h-80 overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-zinc-500">No results</li>}
          {results.map((a, i) => {
            const header = a.group !== lastGroup ? a.group : null;
            lastGroup = a.group;
            return (
              <li key={a.group + a.label}>
                {header && (
                  <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-wider text-zinc-600">{header}</p>
                )}
                <button
                  onMouseEnter={() => setSel(i)}
                  onClick={() => runAt(i)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                    sel === i ? "bg-accent text-ink" : "text-zinc-300"
                  }`}
                >
                  <a.icon className="shrink-0" />
                  {a.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
