import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import "./Header.scss";
import MyCv from "../../assets/files/Javidan Gurbanli.pdf";
import { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="home">
      <ul data-aos="fade-up">
        <li>
          <a
            href="https://www.linkedin.com/in/javidangurbanli/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/JavidanGurbanli"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
      <div className="header_info" data-aos="fade-up">
        <p>Hello I'm</p>
        <h2>
          <Typewriter
            options={{
              strings: ["Javidan Gurbanli"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <h4>Front-end Developer</h4>
        <div className="header_info-links">
          <a href={MyCv} download>
            Download CV
          </a>
          <a href="#contact">Let's talk</a>
        </div>
      </div>
      <div className="header_scroll-down" data-aos="fade-up">
        <a href="#contact">Scroll Down</a>
      </div>
      <button
        className={`toTop ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} bounce />
      </button>
    </header>
  );
};

export default Header;
