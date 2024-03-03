import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faPython, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";

import "./styles/techstack.css";

export default function TechStack() {
  return (
    <div class="tech-stack">
      <h1 className="tech-title">Tech Stack</h1>
      <div class="tech-icons" data-tooltip="JavaScript">
        <FontAwesomeIcon icon={faSquareJs} className="js-icon" data-tooltip="JavaScript" />
        <FontAwesomeIcon icon={faReact} className="react-icon" />
        <FontAwesomeIcon icon={faPython} className="python-icon" />
        <FontAwesomeIcon icon={faCss3} className="css-icon" />
        <FontAwesomeIcon icon={faHtml5} className="html-icon" />
      </div>
    </div>
  );
}
