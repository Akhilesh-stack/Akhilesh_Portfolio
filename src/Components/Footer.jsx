import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { profile } from "../Data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-2">
          {[
            { icon: FaGithub, href: profile.github, label: "GitHub" },
            { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
            { icon: FaEnvelope, href: `mailto:${profile.emails[0]}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-lg text-lg text-zinc-400 transition hover:bg-panel hover:text-accent"
            >
              <Icon />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 grid h-10 w-10 place-items-center rounded-lg border border-line text-zinc-400 transition hover:border-accent hover:text-accent"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
