import "./page.css";
import EmailIcon from "@mui/icons-material/Email";

export default function About() {
  return (
    <main>
      <h2 className="abt-title">About Me</h2>
      <h4 className="paragraph">
        Hey there! I&apos;m Wesley, a Software Engineering grad from Flatiron
        School. With over a decade of experience in various industries,
        I&apos;ve built up a versatile skill set that helps me tackle any
        challenge that comes my way. I&apos;m all about tech and love solving
        problems, which is why I&apos;m excited to dive headfirst into the tech
        world. I&apos;ve noticed a common issue in my past roles—slow, buggy
        software holding back progress. That&apos;s why I&apos;m determined to
        develop web apps that make people&apos;s lives easier.
      </h4>
      <h4 className="paragraph-two">
        Outside of work, I&apos;m a passionate filmmaker and film photographer.
        I think my creative side really complements my tech skills, giving me a
        unique perspective on problem-solving. So, whether you&apos;re into tech
        or creative arts, I&apos;m always up for connecting and exploring new
        opportunities together. Let&apos;s make something awesome!
      </h4>
      <div className="email-container">
      <h2 className="contact">Contact</h2>
        <EmailIcon className="email-icon" fontSize="medium" />
        <h4 className="email">wesmith314@gmail.com</h4>
      </div>
    </main>
  );
}
