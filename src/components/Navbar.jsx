import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 flex justify-between items-center shadow-lg z-50 transition-colors duration-500">
      {/* Mobile Hamburger Button (LEFT) */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Logo */}
      <h1 className="text-xl font-bold">Haran</h1>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-6">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>

      {/* Toggle Switch with icons (Desktop only) */}
      <button
        onClick={toggleTheme}
        className={`ml-6 w-16 h-8 hidden md:flex items-center rounded-full transition-colors duration-500 
          ${theme === "dark" ? "bg-blue-600" : "bg-gray-400"}`}
      >
        <span
          className={`w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-md transform transition-transform duration-500 text-sm
            ${theme === "dark" ? "translate-x-8" : "translate-x-1"}`}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </span>
      </button>

      {/* Mobile Menu (Sliding from Left) */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-500 md:hidden z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col items-center gap-6 py-6">
          <li><a onClick={() => setIsOpen(false)} href="#home" className="hover:text-blue-500 text-lg">Home</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#about" className="hover:text-blue-500 text-lg">About</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#skills" className="hover:text-blue-500 text-lg">Skills</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#projects" className="hover:text-blue-500 text-lg">Projects</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#experience" className="hover:text-blue-500 text-lg">Experience</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#contact" className="hover:text-blue-500 text-lg">Contact</a></li>

          {/* Theme toggle inside mobile menu */}
          <button
            onClick={() => { toggleTheme(); setIsOpen(false); }}
            className={`mt-6 w-16 h-8 flex items-center rounded-full transition-colors duration-500 
              ${theme === "dark" ? "bg-blue-600" : "bg-gray-400"}`}
          >
            <span
              className={`w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-md transform transition-transform duration-500 text-sm
                ${theme === "dark" ? "translate-x-8" : "translate-x-1"}`}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
          </button>
        </ul>
      </div>
    </nav>
  );
}
