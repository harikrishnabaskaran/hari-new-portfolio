// import { motion } from "framer-motion";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <div className="bg-gray-950 text-white font-sans">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <Hero />
//         <About />
//         <Projects />
//         <Contact />
//         <Footer />
//       </motion.div>
//     </div>
//   );
// }

// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails"; // create this page
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
          <Routes>
            {/* Portfolio Landing Page */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <main className="min-h-screen">
                    <section id="home"><Home /></section>
                    <section id="about"><About /></section>
                    <section id="skills"><Skills /></section>
                    <section id="projects"><Projects /></section>
                    <section id="experience"><Experience /></section>
                    <section id="contact"><Contact /></section>
                  </main>
                  <Footer />
                </>
              }
            />

            {/* Common Project Details Page */}
            <Route path="/project-details" element={<ProjectDetails />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <main className="min-h-screen">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <Footer />
//     </BrowserRouter>
//   );
// }