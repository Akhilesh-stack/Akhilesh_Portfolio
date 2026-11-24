import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Marquee from "./Components/Marquee";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import CompetitiveProgramming from "./Pages/CompetitiveProgramming";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

function App() {
  const { pathname } = useLocation();

  // Old multi-page URLs (/About, /Projects, ...) scroll to the matching section
  useEffect(() => {
    const id = pathname.replace(/^\/+/, "").toLowerCase();
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [pathname]);

  // Feed pointer position to every .spot card for the spotlight effect
  useEffect(() => {
    const onMove = (e) => {
      document.querySelectorAll(".spot").forEach((el) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Marquee />
        <About />
        <Education />
        <Projects />
        <CompetitiveProgramming />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
