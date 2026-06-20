import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Menu, X } from "lucide-react";
import { GB, DE } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";

import i18n from "i18next";
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-4 text-gray-900 transition-colors duration-500 bg-white shadow-lg dark:bg-gray-900 dark:text-white">
   
  
      

 <div className="flex items-center gap-3 md:hidden">
      <button
        className="text-2xl md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={28} />
      </button>
  {/* English */}
  <button
    onClick={() => {
      i18n.changeLanguage("en");
      setIsOpen(false);
    }}
    className="w-6 h-4 transition hover:scale-110"
    aria-label="English"
  >
    <GB className="w-full h-full rounded-sm" />
  </button>

  {/* German */}
  <button
    onClick={() => {
      i18n.changeLanguage("de");
      setIsOpen(false);
    }}
    className="w-6 h-4 transition hover:scale-110"
    aria-label="Deutsch"
  >
    <DE className="w-full h-full rounded-sm" />
  </button>
</div>

    
  <h1 className="text-xl font-bold">
  <a href="#home">Hari Krishna</a>
</h1>
      

      {/* Desktop Nav Links */}
      <ul className="hidden gap-6 ml-12 md:flex">
        <li><a href="#home" className="hover:text-blue-500">  {t("Home")}</a></li>
        <li><a href="#about" className="hover:text-blue-500">{t("About")}</a></li>
        <li><a href="#skills" className="hover:text-blue-500">{t("Skills")}</a></li>
         <li><a href="#languages" className="hover:text-blue-500">{t("Languages")}</a></li>
        <li><a href="#projects" className="hover:text-blue-500">{t("Projects")}</a></li>
        <li><a href="#experience" className="hover:text-blue-500">{t("Experience")}</a></li>
        <li><a href="#education" className="hover:text-blue-500">{t("Education")}</a></li>
        <li><a href="#contact" className="hover:text-blue-500">{t("Contact")}</a></li>
      </ul>
      
      <div className="items-center hidden gap-4 ml-auto md:flex">
<div className="flex items-center gap-3 ml-4">
  {/* English */}
  <button
    onClick={() => i18n.changeLanguage("en")}
    className="transition w-7 h-7 hover:scale-110"
    aria-label="English"
  >
    <GB className="w-full h-full rounded-sm" />
  </button>

  {/* German */}
  <button
    onClick={() => i18n.changeLanguage("de")}
    className="transition w-7 h-7 hover:scale-110"
    aria-label="Deutsch"
  >
    <DE className="w-full h-full rounded-sm" />
  </button>
</div>


   <button
    onClick={toggleTheme}
    className={`w-16 h-8 flex items-center rounded-full transition-colors duration-500 
      ${theme === "dark" ? "bg-blue-600" : "bg-gray-400"}`}
  >
    <span
      className={`w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-md transform transition-transform duration-500 text-sm
        ${theme === "dark" ? "translate-x-8" : "translate-x-1"}`}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </span>
  </button>
      </div>

    
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-500 md:hidden z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
  
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col items-center gap-6 py-6">
          <li><a onClick={() => setIsOpen(false)} href="#home" className="text-lg hover:text-blue-500">Home</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#about" className="text-lg hover:text-blue-500">About</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#skills" className="text-lg hover:text-blue-500">Skills</a></li>
           <li><a onClick={() => setIsOpen(false)} href="#languages" className="text-lg hover:text-blue-500">Languages</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#projects" className="text-lg hover:text-blue-500">Projects</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#experience" className="text-lg hover:text-blue-500">Experience</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#contact" className="text-lg hover:text-blue-500">Contact</a></li>

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
