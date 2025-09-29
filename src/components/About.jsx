import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 text-center 
                 bg-gray-100 dark:bg-gray-900 
                 transition-colors duration-500"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-3xl md:text-5xl font-bold mb-8 
                   text-gray-900 dark:text-white"
      >
        About Me
      </motion.h2>

      <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed 
                   text-gray-700 dark:text-gray-300 
                   transition-colors duration-500">
        I’m a passionate developer focused on creating interactive and
        responsive web applications. With a strong eye for design and modern
        technologies, I love building projects that make an impact.
      </p>
    </section>
  );
}
