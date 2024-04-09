/** @format */

import { useCallback, useEffect, useRef, useState } from "react";
import WelcomePage from "./assets/Slides/WelcomePage2";
import University from "./assets/Slides/University";
import TwodayInternship from "./assets/Slides/TwodayInternship";
import MySkills from "./assets/Slides/MySkills";
import Kongsberg from "./assets/Slides/KongsbergInternship";
import ContactDetails from "./assets/Slides/ContactDetails";
import CyberpunkGamingGear from "./assets/Slides/CyberPunkGamingGear";
import BlastThroughHistory from "./assets/Slides/BlastThroughHistory";

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [bgColor, setBgColor] = useState("#fff");
  const [txtColor, setTxtColor] = useState("rgb(0, 6, 109)");
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      const { scrollTop, offsetHeight } = container;
      const currentScrollPosition = scrollTop + offsetHeight / 2;
      let targetSectionIndex = Math.floor(currentScrollPosition / offsetHeight);
      const scrollThreshold = offsetHeight / 2;

      if (
        Math.abs(scrollTop - targetSectionIndex * offsetHeight) >
        scrollThreshold
      ) {
        targetSectionIndex =
          scrollTop > currentSectionIndex * offsetHeight
            ? targetSectionIndex + 1
            : targetSectionIndex - 1;
      }

      targetSectionIndex = Math.max(
        0,
        Math.min(sectionRefs.current.length - 1, targetSectionIndex)
      );

      if (currentSectionIndex !== targetSectionIndex) {
        setCurrentSectionIndex(targetSectionIndex);
        const targetSection = sectionRefs.current[targetSectionIndex];
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }

        const sectionColors = [
          { bg: "#040811", txt: "#ffffff" },
          { bg: "#0b2239", txt: "#ffffff" },
          { bg: "#000000", txt: "#ffffff" },
          { bg: "#002156", txt: "#ffffff" },
          { bg: "#430d5d", txt: "#ffffff" },
          { bg: "#1c1736", txt: "#ffffff" },
          { bg: "#171717", txt: "#ffffff" },
          { bg: "#171717", txt: "#ffffff" },
        ];

        const { bg, txt } = sectionColors[targetSectionIndex] || {
          bg: "#f9f9f9",
          txt: "#000000",
        };
        setBgColor(bg);
        setTxtColor(txt);
      }
    }
  }, [currentSectionIndex]); // Dependency included here

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: false });
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]); // Updated dependency array to handleScroll

  useEffect(() => {
    const section = sectionRefs.current[currentSectionIndex];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentSectionIndex]);

  const sections = [
    WelcomePage,
    University,
    TwodayInternship,
    Kongsberg,
    CyberpunkGamingGear,
    BlastThroughHistory,
    MySkills,
    ContactDetails,
  ];

  return (
    <div
      className="cv-container"
      ref={containerRef}
      style={{
        backgroundColor: bgColor,
        color: txtColor,
        transition: "background-color 1s",
      }}
    >
      {sections.map((Component, index) => (
        <section
          key={Component.name}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`cv-section ${Component.name.toLowerCase()}`}
        >
          <Component />
        </section>
      ))}
    </div>
  );
}

export default App;
