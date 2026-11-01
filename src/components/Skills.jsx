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

import {
  FaServer,
  FaBrain,
  FaNetworkWired,
  FaRobot,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

import { TbApi } from "react-icons/tb";




export default function Skills() {
const skills = [
  // AI & LLM Technologies
  {
    name: "LLM Integration",
    icon: <FaBrain className="text-[#8B5CF6]" />,
  },
  {
    name: "Retrieval-Augmented Generation (RAG)",
    icon: <FaNetworkWired className="text-[#06B6D4]" />,
  },
  {
    name: "Agentic AI",
    icon: <FaRobot className="text-[#10B981]" />,
  },
  {
    name: "Vector Databases",
    icon: <FaDatabase className="text-[#F59E0B]" />,
  },
  {
    name: "AI Tool Calling",
    icon: <FaTools className="text-[#EC4899]" />,
  },

  // Programming Languages
  {
    name: "Python (Intermediate)",
    icon: <SiPython className="text-[#3776AB]" />,
  },
  {
    name: "JavaScript (Intermediate)",
    icon: <SiJavascript className="text-[#F7DF1E]" />,
  },
  {
    name: "TypeScript (Intermediate)",
    icon: <SiTypescript className="text-[#3178C6]" />,
  },

  // Frameworks & Libraries
  {
    name: "React.js (Intermediate)",
    icon: <SiReact className="text-[#61DAFB]" />,
  },
  {
    name: "Node.js (Intermediate)",
    icon: <SiNodedotjs className="text-[#339933]" />,
  },
  {
    name: "Context API",
    icon: <FaServer className="text-blue-500" />,
  },

  // Backend & Databases
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248]" />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="text-[#E10098]" />,
  },
  {
    name: "REST APIs",
    icon: <TbApi className="text-cyan-500" />,
  },

  // Development Tools
  {
    name: "Docker",
    icon: <SiDocker className="text-[#2496ED]" />,
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-[#FF6C37]" />,
  },

  // Web Technologies
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-[#E34F26]" />,
  },
  {
    name: "CSS3",
    icon: <SiCss className="text-[#1572B6]" />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-[#7952B3]" />,
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