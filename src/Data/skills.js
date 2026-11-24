import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaGitAlt, FaLinux, FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiCplusplus,
  SiPython,
  SiRedis,
  SiMongoose,
  SiLatex,
  SiSocketdotio,
} from "react-icons/si";
import { TbBinaryTree, TbBox, TbServer2, TbNetwork, TbTable } from "react-icons/tb";

export const skills = {
  Languages: [
    { name: "C / C++", icon: SiCplusplus, color: "#60a5fa" },
    { name: "JavaScript", icon: FaJsSquare, color: "#facc15" },
    { name: "Python", icon: SiPython, color: "#fde047" },
    { name: "SQL", icon: FaDatabase, color: "#93c5fd" },
    { name: "HTML5", icon: FaHtml5, color: "#f97316" },
    { name: "CSS3", icon: FaCss3Alt, color: "#3b82f6" },
  ],
  Frameworks: [
    { name: "React", icon: FaReact, color: "#22d3ee" },
    { name: "Node.js", icon: FaNodeJs, color: "#22c55e" },
    { name: "Express.js", icon: SiExpress, color: "#d4d4d8" },
    { name: "Mongoose", icon: SiMongoose, color: "#f87171" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#2dd4bf" },
    { name: "Socket.IO", icon: SiSocketdotio, color: "#ffffff" },
  ],
  Tools: [
    { name: "Git", icon: FaGitAlt, color: "#fb923c" },
    { name: "GitHub", icon: FaGithub, color: "#ffffff" },
    { name: "MongoDB", icon: SiMongodb, color: "#22c55e" },
    { name: "Redis", icon: SiRedis, color: "#ef4444" },
    { name: "VS Code", icon: VscVscode, color: "#60a5fa" },
    { name: "Postman", icon: SiPostman, color: "#f97316" },
    { name: "Linux", icon: FaLinux, color: "#ffffff" },
    { name: "LaTeX", icon: SiLatex, color: "#d4d4d8" },
  ],
  Core: [
    { name: "Data Structures & Algorithms", icon: TbBinaryTree, color: "#d4ff3f" },
    { name: "OOP", icon: TbBox, color: "#a78bfa" },
    { name: "DBMS", icon: TbTable, color: "#93c5fd" },
    { name: "Operating Systems", icon: TbServer2, color: "#fb923c" },
    { name: "Computer Networks", icon: TbNetwork, color: "#2dd4bf" },
  ],
};
