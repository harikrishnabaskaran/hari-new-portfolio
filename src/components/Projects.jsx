import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 
                 bg-gray-50 dark:bg-gray-950 
                 transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 
                     text-gray-900 dark:text-white">
        {t("headingproject")}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg 
                       bg-white dark:bg-gray-800 
                       transition-colors duration-500"
          >
            <img src={p.img} alt={t(p.title)} className="rounded-xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t(p.title)}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {t(p.desc)}
            </p>

            <Link
              to="/project-details"
              state={{ project: p }}
              className="inline-block mt-4 px-4 py-2 
                         bg-blue-500 hover:bg-blue-600 
                         text-white rounded-full transition"
            >
              {t("viewProject")}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}