import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
  isActive
    ? "text-violet-600 dark:text-violet-400 font-semibold"
    : "text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition";

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="text-xl font-bold text-violet-400">
            Portfolio
          </div>

          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/skills" className={linkClass}>Skills</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          <DarkModeToggle />

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-7 h-7 text-gray-700" />
            ) : (
              <Bars3Icon className="w-7 h-7 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-3 space-y-2">
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink to="/skills" className={linkClass} onClick={() => setIsOpen(false)}>
              Skills
            </NavLink>
            <NavLink to="/projects" className={linkClass} onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
