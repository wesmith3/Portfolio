import Link from "next/link";
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
      <Link legacyBehavior href="https://www.linkedin.com/in/wesmith314">
    <a><FontAwesomeIcon className="li-icon" icon={faLinkedin} /></a>
</Link>
        <Link href="https://github.com/wesmith3">
            <FontAwesomeIcon className="gh-icon" icon={faGithub} />
        </Link>
        <Link href="https://medium.com/@wesmith314">
            <FontAwesomeIcon className="m-icon" icon={faMedium} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
