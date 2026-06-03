import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaSchool, FaUserGraduate } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import '../css/global.css';

export default function Education() {
  const { t } = useTranslation();

  const cardStyle = {
    background: "#2196f3",
    color: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    borderRadius: "6px",
    padding: "20px",
  };

  const iconStyle = {
    background: "#2196f3",
    color: "#fff",
  };

  const entries = [
    {
      date: "03/2026 – 04/2028",
      icon: <FaUserGraduate size={18} />,
      title: "education3",
      university: "university3",
      course: "course3",
    },
    {
      date: "05/2020 – 04/2024",
      icon: <FaGraduationCap size={18} />,
      title: "education2",
      university: "university2",
      course: "course2",
    },
    {
      date: "04/2019 – 03/2020",
      icon: <FaSchool size={18} />,
      title: "education1",
      university: "university1",
      course: "course1",
    },
  ];

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-8
                     text-gray-900 dark:text-white text-center">
        {t("Educationheading")}
      </h2>
<style>{`
  .vertical-timeline {
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
  }

  .vertical-timeline::before {
    left: 19px !important;
    width: 2px !important;
  }

  .vertical-timeline-element-icon {
    left: 0 !important;
    margin-left: 0 !important;
    width: 40px !important;
    height: 40px !important;
    box-shadow: none !important;
  }

  .vertical-timeline-element-content {
    margin-left: 60px !important;
    width: calc(100% - 60px) !important;
    max-width: none !important;
    box-shadow: none !important;
  }

  .vertical-timeline-element-content-arrow {
    border-right: 7px solid #2196f3 !important;
    border-left: none !important;
    left: -7px !important;
    right: auto !important;
    top: 12px !important;
  }

  .vertical-timeline-element-date {
    display: none !important;
  }

  /* Mobile only */
  @media (max-width: 768px) {
    .vertical-timeline-element-content {
      margin-left: 0px !important;
      width: calc(100% - 10px) !important;
    }
  }

}
`}</style>

      <VerticalTimeline layout="1-column-left" lineColor="#e5e7eb">
        {entries.map((e, i) => (
          <VerticalTimelineElement
            key={i}
            contentStyle={cardStyle}
            contentArrowStyle={{ borderRight: "7px solid #2196f3" }}
            iconStyle={iconStyle}
            icon={e.icon}
          >
            <p className="text-xs opacity-80 mb-1">{e.date}</p>
            <h3 className="text-lg font-semibold">{t(e.title)}</h3>
            <h4 className="text-sm opacity-90 mb-2">{t(e.university)}</h4>
            <p className="text-sm opacity-90">{t(e.course)}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}