

import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProjectDetails() {
  const location = useLocation();
  const project = location.state?.project;
  const [selectedImg, setSelectedImg] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700 dark:text-gray-300">
        <p>No project data found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-12 text-gray-900 transition-colors duration-500 bg-gray-100 dark:bg-gray-900 dark:text-white md:px-20">

      <div className="fixed z-50 top-6 right-6">
        <Link
          to="/"
          className="relative flex items-center w-12 h-12 overflow-hidden text-white transition-all duration-300 bg-blue-500 rounded-full shadow-md group hover:w-28"
        >
          <span className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 text-l">
            ←
          </span>
          <span className="transition-opacity duration-300 opacity-0 ml-14 group-hover:opacity-100 whitespace-nowrap">
            {t("Back")}
          </span>
        </Link>
      </div>

      <h1 className="mb-4 text-4xl font-bold">
        {t(project.title)}
      </h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        {t(project.desc)}
        {project.hyperlink && (
          <a
            href={project.hyperlink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-500 hover:underline"
          >
            {t("Visit")}
            <ArrowUpRight size={16} />
          </a>
        )}
      </p>

      {/* Sections with images + points */}
      {project?.details?.sections?.map((section, i) => (
        <div key={i} className="mb-12">
          {Array.isArray(section.images) ? (
            <>
              <div className="grid gap-6 mb-6 md:grid-cols-3">
                {section.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${t(project.title)} screenshot ${i + 1}-${idx + 1}`}
                    className="rounded-xl shadow-lg w-full h-[236px] border border-white object-cover object-top cursor-pointer"
                    onClick={() => setSelectedImg(img)}
                  />
                ))}
              </div>
              <ul className="space-y-3 list-disc list-inside">
                {section.points?.map((point, j) => (
                  <li key={j}>{t(point)}</li>
                ))}
              </ul>
            </>
          ) : (
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex justify-center flex-1">
                <img
                  src={section.image}
                  alt={`${t(project.title)} screenshot ${i + 1}`}
                  className="rounded-xl shadow-lg w-full md:w-4/5 lg:w-3/4 mx-auto 
                             h-[236px] border border-white object-cover object-top cursor-pointer"
                  onClick={() => setSelectedImg(section.image)}
                />
              </div>
             <div className="flex items-center flex-1">
  <ul className="space-y-3 list-disc list-inside">
    {section.points?.map((point, j) => {
      console.log("Point index:", j);
      console.log("Translation key:", point);
      console.log("Translated text:", t(point));

      return (
        <li key={j}>{t(point)}</li>
      );
    })}
  </ul>
</div>
            </div>
          )}
        </div>
      ))}

      {/* Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute p-2 text-white rounded-full top-2 right-2 bg-black/60 hover:bg-black/80"
              onClick={() => setSelectedImg(null)}
            >
              <X size={20} />
            </button>
            <img
              src={selectedImg}
              alt="Full Preview"
              className="rounded-xl max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
