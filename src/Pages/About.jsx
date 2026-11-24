import Section from "../Components/Section";
import Reveal from "../Components/Reveal";
import { interest } from "../Data/interest";

export default function About() {
  return (
    <Section id="about" letter="A" title="About me" meta={["time limit: ∞", "memory limit: 256 MB", "input: curiosity", "output: code"]}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-lg leading-relaxed text-zinc-400">
          <p>
            I'm <span className="font-medium text-white">Akhilesh Kumar Yadav</span>, a B.Tech
            Computer Science &amp; Engineering student at the{" "}
            <span className="font-medium text-white">Institute of Engineering and Technology, Lucknow</span>{" "}
            (2023–2027), with a CGPA of <span className="text-accent">8.9/10</span>.
          </p>
          <p>
            I have a strong command of Data Structures and Algorithms — I've solved{" "}
            <span className="text-accent">700+ problems</span> across Codeforces, LeetCode, CodeChef and
            GeeksforGeeks, and compete regularly in global contests with{" "}
            <span className="text-accent">25,000+ participants</span>.
          </p>
          <p>
            On the development side I build AI-integrated, scalable web apps with the MERN stack —
            MongoDB, Express.js, React and Node.js — plus Redis, Socket.IO and the Gemini API.
          </p>
          <p>
            I enjoy learning by doing, whether that's optimising an algorithm or shaving latency off an
            API. I'm looking for software development roles where I can grow, collaborate and ship
            meaningful products.
          </p>
        </Reveal>

        <div>
          <Reveal>
            <h3 className="mb-5 font-mono text-sm uppercase tracking-wider text-zinc-500">
              Interests
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {interest.map((item, i) => (
              <Reveal
                key={item.name}
                delay={i * 60}
                className="group flex items-center gap-3 spot rounded-xl border border-line bg-panel p-4 transition hover:-translate-y-0.5 hover:border-accent/50"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-xl text-accent transition group-hover:bg-accent group-hover:text-ink">
                  <item.icon />
                </span>
                <span className="text-sm font-medium text-zinc-200">{item.name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
