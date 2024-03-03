import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="brand-icons">
        <FontAwesomeIcon className="li-icon" icon={faLinkedin} />
        <FontAwesomeIcon className="gh-icon" icon={faGithub} />
        <FontAwesomeIcon className="m-icon" icon={faMedium} />
      </div>
    </div>
  );
}

export default Footer;
