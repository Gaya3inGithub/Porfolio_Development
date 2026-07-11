import { useEffect, useLayoutEffect, useState } from "react";

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

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    let restoreScrollBehaviorFrame: number | undefined;

    const resetToHome = () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);

      if (restoreScrollBehaviorFrame) {
        window.cancelAnimationFrame(restoreScrollBehaviorFrame);
      }

      restoreScrollBehaviorFrame = window.requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
      });
    };

    window.history.scrollRestoration = "manual";

    if (window.location.hash !== "#home") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}#home`,
      );
    }

    resetToHome();

    window.addEventListener("pageshow", resetToHome);
    window.addEventListener("load", resetToHome, { once: true });

    return () => {
      if (restoreScrollBehaviorFrame) {
        window.cancelAnimationFrame(restoreScrollBehaviorFrame);
      }
      window.removeEventListener("pageshow", resetToHome);
      window.removeEventListener("load", resetToHome);
      window.history.scrollRestoration = previousRestoration;
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

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
