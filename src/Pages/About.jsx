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
            Computer Science student at the{" "}
            <span className="font-medium text-white">
              Institute of Engineering and Technology, Lucknow
            </span>{" "}
            (2023–2027). I have a strong foundation in competitive programming and a growing
            passion for full stack web development.
          </p>
          <p>
            In competitive programming I've solved{" "}
            <span className="text-accent">1000+ problems</span> and taken part in{" "}
            <span className="text-accent">80+ contests</span> across Codeforces, CodeChef,
            LeetCode and AtCoder.
          </p>
          <p>
            On the development side I work with the MERN stack — MongoDB, Express.js, React and
            Node.js — and I've recently started using Next.js to build SEO-friendly, performant
            web applications.
          </p>
          <p>
            I enjoy learning by doing, whether that's optimising an algorithm or building a
            user-centric UI. I'm preparing for software development roles and looking for
            opportunities to grow, collaborate and contribute to meaningful tech.
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
