import React from 'react'
import Link from "next/link";
import './styles/navbar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <ul>
        <li className='menu-btn'>
          <Link href="/" >
          Home
          </Link>t./m
        </li>
        <li className='menu-btn'>
          <Link href="/about">
          About
          </Link>
        </li>
        <li className='menu-btn'>
          <Link href="/projects">
          Projects
          </Link>
        </li>
        <li className='menu-btn'>
          <Link href="/resume">
          Resume
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
