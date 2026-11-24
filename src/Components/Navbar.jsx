import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { profile } from "../Data/profile";

export const navLinks = [
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "CP", id: "competitive-programming" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-ink/75 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-display text-sm font-bold text-ink transition-transform group-hover:rotate-6">
            AK
          </span>
          <span className="font-display text-lg font-semibold text-white">
            {profile.shortName}
            <span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                  active === link.id ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-transform duration-300 ${
                    active === link.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href={profile.resume}
              download="Akhilesh_Kumar_Yadav.pdf"
              className="rounded-lg border border-accent/60 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent hover:text-ink"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-2xl text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[100svh]" : "max-h-0"
        }`}
      >
        <ul className="flex h-[calc(100svh-4rem)] flex-col gap-1 px-4 pb-8 pt-4">
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-line py-4 font-display text-2xl text-white"
              >
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <a
              href={profile.resume}
              download="Akhilesh_Kumar_Yadav.pdf"
              className="block rounded-lg bg-accent py-3 text-center font-medium text-ink"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
