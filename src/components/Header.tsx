"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setShowAboutCeo } = useAppContext();

  const handleClick = (id: string) => {
    if (id === 'about') {
      setShowAboutCeo(true);
    } else {
      setShowAboutCeo(false);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT CEO' },
    { id: 'services', label: 'SERVICES' },
    { id: 'performances', label: 'PAST PERFORMANCES' },
    { id: 'contact', label: 'CONTACT US' },
  ];

  return (
    <header className="bg-emerald-400 text-white relative">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          TLCCS
        </div>

        <ul className="hidden md:flex justify-center space-x-8 font-semibold tracking-wider">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                onClick={() => handleClick(item.id)}
                className="cursor-pointer hover:text-emerald-100 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>


        <div className="md:hidden">

          <button
            onClick={toggleMenu}
            className="relative z-50 p-2 focus:outline-none focus:ring-2 focus:ring-emerald-200 rounded-md transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
                  }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
                  }`}
              />
            </div>
          </button>

          <div
            className={`fixed inset-0 bg-gray-600  bg-opacity-10 z-30 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            onClick={() => setIsMenuOpen(false)}
          />

          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-emerald-400 z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="pt-20 px-6">
              <ul className="space-y-6">
                {menuItems.map((item, index) => (
                  <li
                    key={item.id}
                    className={`transform transition-all duration-300 delay-${index * 100} ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                      }`}
                  >
                    <a
                      onClick={() => handleClick(item.id)}
                      className="block py-3 px-4 text-lg font-semibold tracking-wider cursor-pointer hover:text-emerald-100 hover:bg-emerald-500 rounded-md transition-all duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
