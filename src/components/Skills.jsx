import { useTranslation } from "react-i18next";
export default function Skills() {
    const { t } = useTranslation();
  const skills = ["JavaScript", "React.js", "Node.js", "Chart.js","Python", "GraphQL", "MongoDB", "Docker", "Material UI", "Fluent UI 9", "Bootstrap","CSS","HTML"];
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 
                   text-gray-900 dark:text-white text-center ">{t("skills")}</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <li key={s} className="bg-blue-500 text-white px-4 py-2 rounded-lg">{s}</li>
        ))}
      </ul>
    </section>
  );
}
