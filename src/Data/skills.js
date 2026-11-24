import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaGitAlt, FaLinux, FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiPostman,
  SiFirebase,
  SiCplusplus,
  SiC,
  SiPython,
  SiNextdotjs,
  SiSublimetext,
  SiMysql,
} from "react-icons/si";

export const skills = {
  Languages: [
    { name: "C++", icon: SiCplusplus, color: "#60a5fa" },
    { name: "C", icon: SiC, color: "#93c5fd" },
    { name: "Python", icon: SiPython, color: "#fde047" },
    { name: "Java", icon: FaJava, color: "#f87171" },
    { name: "JavaScript", icon: FaJsSquare, color: "#facc15" },
    { name: "HTML5", icon: FaHtml5, color: "#f97316" },
    { name: "CSS3", icon: FaCss3Alt, color: "#3b82f6" },
  ],
  Frameworks: [
    { name: "React", icon: FaReact, color: "#22d3ee" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Node.js", icon: FaNodeJs, color: "#22c55e" },
    { name: "Express.js", icon: SiExpress, color: "#d4d4d8" },
  ],
  Technologies: [
    { name: "MongoDB", icon: SiMongodb, color: "#22c55e" },
    { name: "MySQL", icon: SiMysql, color: "#60a5fa" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#2dd4bf" },
    { name: "Firebase", icon: SiFirebase, color: "#facc15" },
    { name: "Redux", icon: SiRedux, color: "#a855f7" },
    { name: "Linux", icon: FaLinux, color: "#ffffff" },
  ],
  Tools: [
    { name: "Git", icon: FaGitAlt, color: "#fb923c" },
    { name: "GitHub", icon: FaGithub, color: "#ffffff" },
    { name: "VS Code", icon: VscVscode, color: "#60a5fa" },
    { name: "Postman", icon: SiPostman, color: "#f97316" },
    { name: "Sublime Text", icon: SiSublimetext, color: "#facc15" },
  ],
};
