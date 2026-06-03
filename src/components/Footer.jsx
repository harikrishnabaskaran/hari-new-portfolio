import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="flex justify-between items-center py-4 px-6 mt-10 
                 bg-gray-200 dark:bg-gray-800 
                 text-gray-700 dark:text-gray-400 
                 transition-colors duration-500"
    >
      {/* Social Icons (Left Corner) */}
      <div className="flex gap-4">
        <a
          href="https://github.com/harikrishnabaskaran"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/harikrishna-baskaran-1a9022211/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Copyright (Center) */}
      <p className="text-sm">
        © {new Date().getFullYear()} Hari Krishna. All Rights Reserved.
      </p>

      {/* Empty div for spacing right side */}
      <div className="w-6"></div>
    </footer>
  );
}
