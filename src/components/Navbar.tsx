import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-gray-300 z-50">
      <div>
        <h1 className="text-2xl font-bold text-secondary">Portfolio</h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="nav-link">
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="nav-link">
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="nav-link">
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="nav-link">
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className="nav-link">
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl nav-link">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="py-6 text-4xl nav-link">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="py-6 text-4xl nav-link">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="py-6 text-4xl nav-link">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className="py-6 text-4xl nav-link">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;