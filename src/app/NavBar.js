import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Home from '../public/Home.jpeg'
import Home from '../public/Home.jpeg'
import Home from '../public/Home.jpeg'

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
            width={100}
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
            width={100}
            height={50}
            priority
          />
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
          <Image
            src={Portfolio}
            className="menu-btn"
            alt="Next.js Logo"
            width={100}
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
