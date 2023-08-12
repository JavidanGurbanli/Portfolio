import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faCode,
  faLaptopCode,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.scss";

const Nav = () => {
  const sections = [
    { id: "home", icon: faHouse },
    { id: "about", icon: faUser },
    { id: "skills", icon: faCode },
    { id: "portfolio", icon: faLaptopCode },
    { id: "contact", icon: faMessage },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const activeSections = sections.filter((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          return (
            scrollPosition >= offsetTop - windowHeight / 2 &&
            scrollPosition < offsetTop + offsetHeight
          );
        }
        return false;
      });

      if (activeSections.length > 0) {
        setActiveSection(activeSections[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={activeSection === section.id ? "active" : ""}
          >
            <a href={`#${section.id}`}>
              <FontAwesomeIcon icon={section.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
