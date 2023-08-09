import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
import "./Header.scss";
import MyCv from "../../assets/files/Javidan Gurbanli.pdf";

const Header = () => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight});
  };
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
          <a href={MyCv} download>Download CV</a>
          <a href="#">Let's talk</a>
        </div>
      </div>
      <div className="header_scroll-down" onClick={scrollToBottom}>
        <p>Scroll Down</p>
      </div>
    </header>
  );
};

export default Header;
