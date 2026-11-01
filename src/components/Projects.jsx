import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="px-6 py-20 transition-colors duration-500 md:px-16 bg-gray-50 dark:bg-gray-950"
    >
      <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 md:text-5xl dark:text-white">
        {t("headingproject")}
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 transition-colors duration-500 bg-white shadow-lg rounded-2xl dark:bg-gray-800"
          >
            <img src={p.img} alt={t(p.title)} className="mb-4 rounded-xl" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t(p.title)}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {t(p.desc)}
            </p>

            <Link
              to="/project-details"
              state={{ project: p }}
              className="inline-block px-4 py-2 mt-4 text-white transition bg-blue-500 rounded-full hover:bg-blue-600"
            >
              {t("viewProject")}
            </Link>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}