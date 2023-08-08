import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/javidangurbanli/" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/JavidanGurbanli" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
      <div className="header_info">
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
          <a>Download CV</a>
          <a>Let's talk</a>
        </div>
      </div>
      <div className="header_scroll-down">
        <p>Scroll Down</p>
      </div>
    </header>
  );
};

export default Header;