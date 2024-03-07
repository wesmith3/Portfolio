import React, { useState } from 'react';
import Link from 'next/link';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mobile-nav">
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; Menu
      </button>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/resume" onClick={toggleMenu}>
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;