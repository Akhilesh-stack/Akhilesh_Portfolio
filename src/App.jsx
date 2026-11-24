import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
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

  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
