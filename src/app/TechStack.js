import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faPython, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";

import "./styles/techstack.css";

export default function TechStack() {
  return (
    <div class="tech-stack">
      <h1 className="tech-title">Tech Stack</h1>
      <div class="tech-icons" data-tooltip="JavaScript">
        <FontAwesomeIcon icon={faSquareJs} className="js-icon" data-tooltip="JavaScript" />
        <FontAwesomeIcon icon={faReact} className="react-icon" data-tooltip="React JS" />
        <FontAwesomeIcon icon={faPython} className="python-icon" data-tooltip="Python" />
        <FontAwesomeIcon icon={faCss3} className="css-icon" data-tooltip="CSS 3" />
        <FontAwesomeIcon icon={faHtml5} className="html-icon" data-tooltip="HTML 5" />
      </div>
    </div>
  );
}
