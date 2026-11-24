import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import Section from "../Components/Section";
import Reveal from "../Components/Reveal";
import { profile } from "../Data/profile";

const items = [
  { icon: FaEnvelope, title: "Email", lines: profile.emails, href: (l) => `mailto:${l}` },
  { icon: FaPhoneAlt, title: "Phone", lines: [profile.phone], href: (l) => `tel:${l.replace(/[^+\d]/g, "")}` },
  { icon: FaMapMarkerAlt, title: "Location", lines: [profile.location] },
];

export default function Contact() {
  return (
    <Section id="contact" letter="F" title="Let's talk" meta={["response time: < 24h", "status: open to work"]}>
      <Reveal className="spot overflow-hidden rounded-3xl border border-line bg-panel p-8 sm:p-12">
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-zinc-400">
              I'm currently looking for software development opportunities. Whether you have a
              question, a project idea or just want to say hi — my inbox is open.
            </p>
            <a
              href={`mailto:${profile.emails[0]}`}
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-ink transition hover:bg-white"
            >
              Say hello
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <div className="mt-8 flex gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-zinc-300 transition hover:border-accent hover:text-accent"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-zinc-300 transition hover:border-accent hover:text-accent"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          <ul className="space-y-4">
            {items.map(({ icon: Icon, title, lines, href }) => (
              <li key={title} className="flex gap-4 rounded-xl border border-line bg-ink p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Icon />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">{title}</p>
                  {lines.map((l) =>
                    href ? (
                      <a key={l} href={href(l)} className="block truncate text-zinc-200 transition hover:text-accent">
                        {l}
                      </a>
                    ) : (
                      <p key={l} className="text-zinc-200">{l}</p>
                    )
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
