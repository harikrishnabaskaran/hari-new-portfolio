import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export default function About() {
    const { t } = useTranslation();
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
       {t("aboutme")}
      </motion.h2>

      <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed 
                   text-gray-700 dark:text-gray-300 
                   transition-colors duration-500">
     {t("aboutmepara")}
      </p>
    </section>
  );
}
