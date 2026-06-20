// export default function Experience() {
//   return (
//     <section className="max-w-4xl p-8 mx-auto">
//       <h2 className="mb-4 text-3xl font-bold">Experience</h2>
//       <div className="space-y-4">
//         <div>
//           <h3 className="text-xl font-semibold">Software Engineer @ Shop The World E-Commerce Private Limited </h3>
//           <p className="text-gray-600">Sep 2024 - Sep 2025</p>
//         </div>
      
//       </div>
//     </section>
//   );
// }


import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserCog, FaCode, FaLaptopCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import '../css/global.css'
export default function Experience() {
  const { t } = useTranslation();

  return (
    <section className="max-w-5xl p-8 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 md:text-5xl dark:text-white">
        {t("experience")}
      </h2>
  <VerticalTimeline
  layout="1-column-left"
  lineColor="#e5e7eb"
>
  {/* Freelancer */}
  <VerticalTimelineElement
    position="left"
    date="Oct 2025 - Mar 2026"
    contentStyle={{
      background: "#2196f3",
      color: "#fff",
      width: "100%",
      maxWidth: "100%",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      borderRadius: "6px",
      padding: "20px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid #2196f3",
    }}
    iconStyle={{
      background: "#2196f3",
      color: "#fff",
    }}
    icon={<FaUserCog size={18} />}
  >
    <h3 className="text-lg font-bold">
      {t("roleFreelancer")}
    </h3>
    <h4 className="mb-2 font-bold text-md opacity-90">
      {t("company1")}
    </h4>

    <ul className="space-y-1 list-disc list-inside text-md">
      <li>{t("bullet1")}</li>
      <li>{t("bullet2")}</li>
      <li>{t("bullet3")}</li>
      <li>{t("bullet4")}</li>
    </ul>

    <p className="text-lg font-bold">
     Skills: React.js, Python, MongoDB, Postman API, MaterialUI, CSS, HTML
    </p>
  </VerticalTimelineElement>

  {/* Software Engineer */}
  <VerticalTimelineElement
    position="left"
    date="Jun 2024 - Sep 2025"
    contentStyle={{
      background: "#2196f3",
      color: "#fff",
      width: "100%",
      maxWidth: "100%",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      borderRadius: "6px",
      padding: "20px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid #2196f3",
    }}
    iconStyle={{
      background: "#2196f3",
      color: "#fff",
    }}
    icon={<FaCode size={18} />}
  >
    <h3 className="text-lg font-bold">
      {t("roleSoftwareEngineer")}
    </h3>
    <h4 className="mb-2 font-bold text-md opacity-90">
      {t("company2")}
    </h4>

    <ul className="space-y-1 list-disc list-inside text-md">
      <li>{t("bullet5")}</li>
      <li>{t("bullet6")}</li>
      <li>{t("bullet7")}</li>
    </ul>
  <p className="text-lg font-bold">
     Skills: React.js, Next.js, Node.js, Javascript, Python, MongoDB, GraphQL, Docker, MobaXterm, CSS, HTML
    </p>

  </VerticalTimelineElement>

  {/* Trainee */}

  
  <VerticalTimelineElement
    position="left"
    date="Mar 2024 - May 2024"
    contentStyle={{
      background: "#2196f3",
      color: "#fff",
      width: "100%",
      maxWidth: "100%",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      borderRadius: "6px",
      padding: "20px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid #2196f3",
    }}
    iconStyle={{
      background: "#2196f3",
      color: "#fff",
    }}
    icon={<FaLaptopCode size={18} />}
  >
    <h3 className="text-lg font-bold">
      {t("roleTraineeSoftwareEngineer")}
    </h3>
    <h4 className="mb-2 font-bold text-md opacity-90">
      {t("company3")}
    </h4>

    <ul className="space-y-1 list-disc list-inside text-md">
      <li>{t("bullet8")}</li>
      <li>{t("bullet9")}</li>
      <li>{t("bullet10")}</li>
      <li>{t("bullet11")}</li>
    </ul>
 <p className="text-lg font-bold">
     Skills: React.js, Javascript, REST API, MongoDB, GraphQL, CSS, HTML
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
   
    </section>
  );
}
