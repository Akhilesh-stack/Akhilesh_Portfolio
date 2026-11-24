import { useEffect, useState } from "react";

const PHRASES = [
  "Full Stack Developer",
  "Competitive Programmer",
  "Problem Solver",
  "Tech Enthusiast",
];

export default function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[index];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === phrase) delay = 1600;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === phrase) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % PHRASES.length);
      } else {
        setText(phrase.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="font-mono text-accent-2" aria-label={PHRASES.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="ml-0.5 inline-block w-[2px] h-[1em] translate-y-[3px] bg-accent-2 animate-blink" />
    </span>
  );
}
