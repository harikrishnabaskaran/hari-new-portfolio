// import { useTranslation } from "react-i18next";
// export default function Skills() {
//     const { t } = useTranslation();
//   const skills = ["Python","JavaScript","TypeScript", "React.js", "Node.js", "Chart.js", "GraphQL", "MongoDB", "Docker", "Material UI", "Fluent UI 9", "Git", "GitHub", "Bitbucket", "Gitlab", "Context-API", "REST APIs", "Postman", "MobaXterm", "JSDoc", "Bootstrap","CSS","HTML"];
//   return (
//     <section className="max-w-4xl p-8 mx-auto">
//       <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 md:text-5xl dark:text-white ">{t("skills")}</h2>
//       <ul className="flex flex-wrap gap-3">
//         {skills.map((s) => (
//           <li key={s} className="px-4 py-2 text-white bg-blue-500 rounded-lg">{s}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }

import { useEffect, useState } from "react";

export default function Skills() {
  const skills = [
    { name: "Python", level: 100 },
    { name: "JavaScript", level: 100 },
    { name: "TypeScript", level: 90 },
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 90 },
    // { name: "Chart.js", level: 100 },
    { name: "GraphQL", level: 90 },
    { name: "MongoDB", level: 90 },
    { name: "Docker", level: 80 },
    // { name: "Material UI", level: 100 },
    // { name: "Fluent UI 9", level: 100 },
    // { name: "Git", level: 100 },
    // { name: "GitHub", level: 100 },
    // { name: "Bitbucket", level: 100 },
    // { name: "GitLab", level: 100 },
    { name: "Context API", level: 90 },
    { name: "REST APIs", level: 90 },
    { name: "Postman", level: 90 },
    // { name: "MobaXterm", level: 75 },
    // { name: "JSDoc", level: 85 },
    { name: "Bootstrap", level: 90 },
    { name: "CSS", level: 90 },
    { name: "HTML", level: 90 },
  ];

  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full px-4 mx-auto sm:px-6 lg:px-8">
      <div className="p-4 mx-auto transition-shadow duration-300 bg-white border border-gray-100 shadow-xl mmax-w-3xl lg:max-w-2xl sm:p-6 md:p-6 lg:p-5 dark:bg-gray-800 dark:border-gray-700 rounded-2xl hover:shadow-2xl">

        <h3 className="mb-6 text-xl font-bold text-center">
          Technical Skills
        </h3>

        <div className="space-y-5">
          {skills.map((skill) => (
            <div key={skill.name}>
              
              <div className="flex justify-between mb-2 text-sm font-medium">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                
                <div
                  className="h-full origin-left bg-gradient-to-r from-blue-500 to-cyan-500"
                  style={{
                    transform: start
                      ? `scaleX(${skill.level / 100})`
                      : "scaleX(0)",
                    transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
