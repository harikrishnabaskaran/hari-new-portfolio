import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

export default function ProjectDetails() {
  const location = useLocation();
  const project = location.state?.project;
  const [selectedImg, setSelectedImg] = useState(null);

  // 👇 Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 dark:text-gray-300">
        <p>No project data found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 
                    text-gray-900 dark:text-white px-6 md:px-20 py-12 transition-colors duration-500">

      {/* Floating Back button */}
      <div className="fixed top-6 right-6 z-50">
        <Link
          to="/"
          className="relative flex items-center bg-blue-500 text-white rounded-full shadow-md 
                     w-12 h-12 overflow-hidden group hover:w-28 transition-all duration-300"
        >
          <span className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center text-l">
            ←
          </span>
          <span className="ml-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back
          </span>
        </Link>
      </div>

      {/* Title + Desc */}
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        {project.desc}{" "}
        {project.hyperlink && (
          <a
            href={project.hyperlink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-500 hover:underline"
          >
            Visit
            <ArrowUpRight size={16} />
          </a>
        )}
      </p>

      {/* Sections with images + points */}
      {project.details.sections.map((section, i) => (
        <div key={i} className="mb-12">
          {/* If section has multiple images → grid */}
          {Array.isArray(section.images) ? (
            <>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {section.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}-${idx + 1}`}
                    className="rounded-xl shadow-lg w-full h-[236px] border border-white object-cover object-top cursor-pointer"
                    onClick={() => setSelectedImg(img)}
                  />
                ))}
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3">
                {section.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </>
          ) : (
            // Default layout (single image + points side by side)
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 flex justify-center">
                <img
                  src={section.image}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="rounded-xl shadow-lg w-full md:w-4/5 lg:w-3/4 mx-auto 
                            h-[236px] border border-white object-cover object-top cursor-pointer"
                  onClick={() => setSelectedImg(section.image)}
                />
              </div>
              <div className="flex-1 flex items-center">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3">
                  {section.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
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
          onClick={() => setSelectedImg(null)} // close when clicking background
        >
          <div
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          >
            <button
              className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80"
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
