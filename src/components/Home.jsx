import profileImg from "../assets/profilea.png";
import resumePDF from "../assets/HaranGR.pdf"; // place your resume in assets

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center 
             py-20 h-[100vh]
             bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white 
             text-center md:text-left px-6 md:px-16 gap-12 transition-colors duration-500"
    >
      {/* Left Content */}
      
      <div className="md:flex-1 space-y-6">
        <h1 className="text-5xl font-bold">Hi, I'm Haran 👋</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A passionate developer building modern, responsive web apps.
        </p>

        <div className="flex sm:flex-row gap-4 justify-center md:justify-start">
          {/* View Work */}
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 
                       rounded-lg text-white font-medium shadow-md transition"
          >
            View My Work
          </a>

          {/* View Resume (Animated) */}
          <motion.a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-900 
                       dark:bg-gray-200 dark:hover:bg-gray-300 
                       text-white dark:text-black rounded-lg 
                       font-medium shadow-md transition 
                       hover:shadow-blue-500/50"
          >
            View Resume
          </motion.a>
        </div>
      </div>

      {/* Right Content - Geometric Style */}
<div className="md:flex-1 flex justify-center relative">
  <div
    className="w-72 h-72 md:w-96 md:h-96 rounded-full relative flex items-center justify-center"
    style={{
      boxShadow: "0 0 40px rgba(59,130,246,0.6), inset 0 0 20px rgba(59,130,246,0.3)",
    }}
  >
    {/* Profile Image */}
    <img
      src={profileImg}
      alt="Profile"
      className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover"
    />
  </div>
</div>




    </section>
  );
}





// import profileImg from "../assets/profile.jpeg";

// export default function Home() {
//   return (
//     <section
//       id="home"
//       className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen 
//                  bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white 
//                  text-center md:text-left px-6 md:px-16 gap-12 transition-colors duration-500"
//     >
//       {/* Left Content */}
//       <div className="flex-1 space-y-6">
//         <h1 className="text-5xl font-bold">Hi, I'm Haran 👋</h1>
//         <p className="text-lg text-gray-600 dark:text-gray-300">
//           A passionate developer building modern, responsive web apps.
//         </p>
//         <a
//           href="#projects"
//           className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 
//                      rounded-lg text-white font-medium shadow-md transition"
//         >
//           View My Work
//         </a>
//       </div>

//       {/* Right Content - Pop-out Circle */}
//       <div className="flex-1 flex justify-center relative">
//         <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-blue-500 relative overflow-visible flex items-center justify-center">
//           <img
//             src={profileImg}
//             alt="Profile"
//             className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-2xl -translate-y-6"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }



