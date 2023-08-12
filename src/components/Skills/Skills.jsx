import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUserPen } from "@fortawesome/free-solid-svg-icons";
const Skills = () => {
  return (
    <section id="skills">
      <h2 data-aos="fade-up">Skills</h2>
      <div className="skills_cards">
        <div className="card" data-aos="fade-up-right">
          <h3>Front-end Development</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCode} className="icon" /> HTML
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className="icon" /> CSS
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className="icon" /> SCSS
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className="icon" /> Bootstrap
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className="icon" /> Tailwind CSS
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className="icon" /> JavaScript
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className="icon" /> React
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className="icon" /> Redux
            </li>
          </ul>
        </div>
        <div className="card" data-aos="fade-up-left">
          <h3>Soft Skills</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faUserPen} className="icon" />
              Communication
            </li>
            <li>
              <FontAwesomeIcon icon={faUserPen} className="icon" /> Teamwork
            </li>
            <li>
              <FontAwesomeIcon icon={faUserPen} className="icon" /> Problem
              Solving
            </li>
            <li>
              <FontAwesomeIcon icon={faUserPen} className="icon" /> Adaptability
            </li>
            <li>
              <FontAwesomeIcon icon={faUserPen} className="icon" /> Time
              Management
            </li>
            <li>
              <FontAwesomeIcon icon={faUserPen} className="icon" /> Patience
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
