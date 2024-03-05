import "./page.css";
import EmailIcon from '@mui/icons-material/Email';

export default function About() {
  return (
    <main>
      <h2 className="abt-title">About Me</h2>
      <h4 className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor,
        libero nec tincidunt fringilla, nunc justo convallis risus, ut volutpat
        elit nulla eget tortor. Quisque condimentum quam vitae massa luctus,
        vitae sagittis purus vestibulum. Integer non ligula sed dolor aliquam
        congue. Sed nec ligula eget libero malesuada ultrices. Integer id mi
        eget quam fringilla posuere. Sed sed nibh vitae tortor viverra
        malesuada. Curabitur ultrices nunc quis nisi eleifend bibendum. Sed nec
        risus nec turpis eleifend tempor vitae vel lorem.
      </h4>
      <div className="email-container">
        <EmailIcon className="email-icon" fontSize="large"/>
        <h4 className="email">wesmith314@gmail.com</h4>
      </div>
    </main>
  );
}
