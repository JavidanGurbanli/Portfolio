import React from "react";
import "./About.scss";
import MyPhoto from "../../assets/images/CV photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about_container">
        <div className="about_me">
          <div className="about_image">
            <img src={MyPhoto} alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_content-cards">
            <div className="card">
              <FontAwesomeIcon icon={faAward} className="icon" />
              <h3>Experience</h3>
              <p>1 year</p>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faFolderOpen} className="icon" />
              <h3>Projects</h3>
              <p>20+ Completed Projects</p>
            </div>
          </div>
          <div className="about_content-text">
            I'm a frontend developer who is deeply passionate about
            writing clean and efficient code to bring websites to life. My
            expertise spans across the trio of web development - HTML, CSS, and
            JavaScript. I specialize in creating interactive and responsive web
            applications that provide seamless user experiences. JavaScript is my
            playground for making websites dynamic, and I'm particularly adept
            at using modern libraries like React to build complex interfaces
            with ease. With a keen eye for performance optimization and
            cross-browser compatibility, I take pride in delivering code that
            not only works flawlessly but is also maintainable and scalable.
          </div>
          <a href="#">Lets Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
