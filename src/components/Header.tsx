"use client"
import React from 'react';

const Header = () => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-emerald-400 text-white">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8 font-semibold tracking-wider">
          <li>
            <a onClick={() => handleClick('home')} className="cursor-pointer hover:text-emerald-100 transition-colors">
              HOME
            </a>
          </li>
          <li>
            <a onClick={() => handleClick('about')} className="cursor-pointer hover:text-emerald-100 transition-colors">
              ABOUT CEO
            </a>
          </li>
          <li>
            <a onClick={() => handleClick('services')} className="cursor-pointer hover:text-emerald-100 transition-colors">
              SERVICES
            </a>
          </li>
          <li>
            <a onClick={() => handleClick('performances')} className="cursor-pointer hover:text-emerald-100 transition-colors">
              PAST PERFORMANCES
            </a>
          </li>
          <li>
            <a onClick={() => handleClick('contact')} className="cursor-pointer hover:text-emerald-100 transition-colors">
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;
