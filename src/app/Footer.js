import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import './styles/footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="brand-icons">
        <FontAwesomeIcon className="li-icon" icon={faLinkedin}>
        <Link href="https://www.linkedin.com/in/wesmith314"/>
        </FontAwesomeIcon>
        <FontAwesomeIcon className="gh-icon" icon={faGithub}>
        <Link href="https://github.com/wesmith3"/>
        </FontAwesomeIcon>
        <FontAwesomeIcon className="m-icon" icon={faMedium}>
        <Link href="https://medium.com/@wesmith314"/>
        </FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Footer;
