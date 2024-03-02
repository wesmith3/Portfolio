import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Home from '../public/Home.jpeg'
import About from '../public/About.jpeg'
import Projects from '../public/Projects.jpeg'
import Resume from '../public/Resume.jpeg'
import Blog from '../public/Blog.jpeg'

function NavBar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href="/">
            <Image
            src={Home}
            className="menu-btn"
            alt="Next.js Logo"
            width={50}
            height={50}
            priority
          />
          </Link>
        </li>
        <li>
          <Link href="/about">
          <Image
            src={About}
            className="menu-btn"
            alt="Next.js Logo"
            width={55}
            height={50}
            priority
          />
          </Link>
        </li>
        <li>
          <Link href="/projects">
          <Image
            src={Projects}
            className="menu-btn"
            alt="Next.js Logo"
            width={80}
            height={50}
            priority
          />
          </Link>
        </li>
        <li>
          <Link href="/resume">
          <Image
            src={Resume}
            className="menu-btn"
            alt="Next.js Logo"
            width={70}
            height={50}
            priority
          />
          </Link>
        </li>
        <li>
          <Link href="/blog">
          <Image
            src={Blog}
            className="menu-btn"
            alt="Next.js Logo"
            width={50}
            height={50}
            priority
          />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
