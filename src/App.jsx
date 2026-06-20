

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails"; // create this page
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="text-black transition-colors duration-500 bg-white dark:bg-gray-900 dark:text-white">
          <Routes>
            {/* Portfolio Landing Page */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <main className="min-h-screen">
                    <section className="py-0 mx-auto " id="home"><Home /></section>
                    <section className="py-0 mx-auto "  id="about"><About /></section>
                    <section className="py-5 mx-auto " id="skills"><Skills /></section>
                    <section className="py-5 mx-auto " id="languages"><Languages /></section>
                    <section className="mx-auto py-7 "id="projects"><Projects /></section>
                    <section className="mx-auto py-7 "id="experience"><Experience /></section>
                    <section className="mx-auto py-7 "id="education"><Education/></section>
                    <section className="mx-auto py-7 "id="contact"><Contact /></section>

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

