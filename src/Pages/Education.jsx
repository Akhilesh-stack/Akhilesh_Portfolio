import { FaUniversity, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const educationDetails = [
  {
    level: "Bachelor of Technology",
    name: "Institute of Engineering and Technology, Lucknow",
    field: "Computer Science & Engineering",
    address: "Sitapur Road, Lucknow, Uttar Pradesh",
    year: "2023 – 2027",
    grade: "8.9",
  },
];

export default function Education() {
  return (
    <Section id="education" letter="B" title="Education" meta={["2023 – 2027", "B.Tech CSE", "IET Lucknow"]}>
      <div className="space-y-6">
        {educationDetails.map((edu) => (
          <Reveal
            key={edu.name}
            className="spot overflow-hidden rounded-2xl border border-line bg-panel p-6 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent/10 text-2xl text-accent">
                  <FaUniversity />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    {edu.level}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
                    {edu.name}
                  </h3>
                  <p className="mt-1 text-zinc-300">{edu.field}</p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-500">
                    <span className="inline-flex items-center gap-1.5">
                      <FaMapMarkerAlt /> {edu.address}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FaCalendarAlt /> {edu.year}
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-line bg-ink px-6 py-4 text-center md:text-right">
                <p className="font-display text-4xl font-bold text-white">{edu.grade}</p>
                <p className="text-xs uppercase tracking-wider text-zinc-500">CGPA</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
