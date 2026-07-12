import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import RecruiterSnapshot from "./components/sections/RecruiterSnapshot";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Timeline from "./components/sections/Timeline";
import CodingProfiles from "./components/sections/CodingProfiles";
import Publication from "./components/sections/Publication";
import VerifiedLearning from "./components/sections/VerifiedLearning";
import EngineeringCapabilities from "./components/sections/EngineeringCapabilities";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import SectionScrollControl from "./components/layout/SectionScrollControl";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
   <div
  className={`
    ${theme}
    min-h-screen
    scroll-smooth
    bg-white
    text-black
    dark:bg-[#0A0A0F]
    dark:text-white
    transition-colors
    duration-500
  `}
>
      <Navbar
        theme={theme}
        setTheme={setTheme}
      />

      <SectionScrollControl />

      <Hero />
      <RecruiterSnapshot />
      <Projects />
      <Skills />
      <Timeline />
      <CodingProfiles />
      <Publication />
      <VerifiedLearning />
      <EngineeringCapabilities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
