import Link from "next/link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './styles/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="brand-icons">
        <Link legacyBehavior href="https://www.linkedin.com/in/wesmith314">
          <a className="li-icon" target="_blank">
            <LinkedInIcon />
          </a>
        </Link>
        <Link legacyBehavior href="https://github.com/wesmith3">
          <a className="gh-icon" target="_blank">
            <GitHubIcon />
          </a>
        </Link>
        <Link legacyBehavior href="https://medium.com/@wesmith314">
          <a className="m-icon">
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;

