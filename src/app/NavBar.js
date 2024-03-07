import React from 'react';
import Link from 'next/link';
import MobileNavbar from './MobileNavBar';
import './styles/navbar.css';

function NavBar() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <nav className="navbar">
          <ul>
            <li className="menu-btn">
              <Link href="/">Home</Link>
            </li>
            <li className="menu-btn">
              <Link href="/about">About</Link>
            </li>
            <li className="menu-btn">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="menu-btn">
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default NavBar;