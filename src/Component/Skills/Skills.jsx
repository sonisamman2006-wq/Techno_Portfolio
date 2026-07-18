import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import { SiVite } from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2 className="skills-heading">
        My Skills
      </h2>

      <div className="skills-grid">

        <div className="skill-card">
          <FaReact className="skill-icon react"/>
          <h3>React</h3>
          <p>90%</p>
        </div>

        <div className="skill-card">
          <FaJsSquare className="skill-icon js"/>
          <h3>JavaScript</h3>
          <p>85%</p>
        </div>

        <div className="skill-card">
          <FaHtml5 className="skill-icon html"/>
          <h3>HTML5</h3>
          <p>95%</p>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon css"/>
          <h3>CSS3</h3>
          <p>90%</p>
        </div>

        <div className="skill-card">
          <FaBootstrap className="skill-icon bootstrap"/>
          <h3>Bootstrap</h3>
          <p>85%</p>
        </div>

        <div className="skill-card">
          <SiVite className="skill-icon vite"/>
          <h3>Vite</h3>
          <p>90%</p>
        </div>

        <div className="skill-card">
          <FaGitAlt className="skill-icon git"/>
          <h3>Git</h3>
          <p>80%</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;