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

// import { useEffect, useState } from "react";

// export default function Skills() {
//   const skills = [
//     { name: "Python", level: 100 },
//     { name: "JavaScript", level: 100 },
//     { name: "TypeScript", level: 90 },
//     { name: "React.js", level: 90 },
//     { name: "Node.js", level: 90 },
   
//     { name: "GraphQL", level: 90 },
//     { name: "MongoDB", level: 90 },
//     { name: "Docker", level: 80 },
//     { name: "Context API", level: 90 },
//     { name: "REST APIs", level: 90 },
//     { name: "Postman", level: 90 },
//     { name: "Bootstrap", level: 90 },
//     { name: "CSS", level: 90 },
//     { name: "HTML", level: 90 },
//   ];

//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setStart(true), 200);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="w-full px-4 mx-auto sm:px-6 lg:px-8">
//       <div className="p-4 mx-auto transition-shadow duration-300 bg-white border border-gray-100 shadow-xl mmax-w-3xl lg:max-w-2xl sm:p-6 md:p-6 lg:p-5 dark:bg-gray-800 dark:border-gray-700 rounded-2xl hover:shadow-2xl">

//         <h3 className="mb-6 text-xl font-bold text-center">
//           Technical Skills
//         </h3>

//         <div className="space-y-5">
//           {skills.map((skill) => (
//             <div key={skill.name}>
              
//               <div className="flex justify-between mb-2 text-sm font-medium">
//                 <span>{skill.name}</span>
//                 <span>{skill.level}%</span>
//               </div>

//               <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                
//                 <div
//                   className="h-full origin-left bg-gradient-to-r from-blue-500 to-cyan-500"
//                   style={{
//                     transform: start
//                       ? `scaleX(${skill.level / 100})`
//                       : "scaleX(0)",
//                     transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
//                   }}
//                 />

//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGraphql,
  SiMongodb,
  SiDocker,
  SiPostman,
  SiBootstrap,
  SiCss,
  SiHtml5,
 
} from "react-icons/si";

import { FaServer } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

export default function Skills() {
  const skills = [
    {
      name: "Python (Expert)",
      icon: <SiPython className="text-[#3776AB]" />,
    },
    {
      name: "JavaScript (Expert)",
      icon: <SiJavascript className="text-[#F7DF1E]" />,
    },
    {
      name: "TypeScript (Expert)",
      icon: <SiTypescript className="text-[#3178C6]" />,
    },
    {
      name: "React.js (Expert)",
      icon: <SiReact className="text-[#61DAFB]" />,
    },
    {
      name: "Node.js (Expert)",
      icon: <SiNodedotjs className="text-[#339933]" />,
    },
    {
      name: "GraphQL",
      icon: <SiGraphql className="text-[#E10098]" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-[#47A248]" />,
    },
    {
      name: "Docker",
      icon: <SiDocker className="text-[#2496ED]" />,
    },
    {
      name: "Context API",
      icon: <FaServer className="text-blue-500" />,
    },
    {
      name: "REST APIs",
      icon: <TbApi className="text-cyan-500" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-[#FF6C37]" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-[#7952B3]" />,
    },
    {
      name: "CSS3",
      icon: <SiCss className="text-[#1572B6]" />,
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="text-[#E34F26]" />,
    },
  ];

  return (
    <section className="w-full px-4 py-10 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-5xl p-8 mx-auto bg-white border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 rounded-3xl">

        <h2 className="mb-10 text-3xl font-bold text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                relative
                overflow-hidden
                flex
                flex-col
                items-center
                justify-center
                p-6
                rounded-2xl
                border
                border-gray-200
                dark:border-gray-700
                bg-white/80
                dark:bg-gray-900
                backdrop-blur-md
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:scale-105
                hover:border-blue-400
                hover:shadow-[0_15px_45px_rgba(59,130,246,0.25)]
                cursor-pointer
              "
            >
              {/* Animated Background */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-purple-500/10 group-hover:opacity-100"></div>

              {/* Icon */}
              <div className="relative z-10 text-6xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <p className="relative z-10 mt-5 text-sm font-semibold tracking-wide text-center">
                {skill.name}
              </p>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 transition-all duration-500 scale-x-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 group-hover:scale-x-100"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}