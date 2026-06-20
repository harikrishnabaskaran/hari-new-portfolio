import { useEffect, useState } from "react";
export default function Languages() {
  const languages = [
    {
      name: "English",
      level: 90,
      proficiency: "Professional Working Proficiency",
    },
    {
      name: "German",
      level: 50,
      proficiency: "Pursuing - B1",
    },
  ];

  return (
    <div className="w-full px-4 mx-auto sm:px-6 lg:px-8">
    <div className="p-4 mx-auto transition-shadow duration-300 bg-white border border-gray-100 shadow-xl mmax-w-3xl lg:max-w-2xl sm:p-6 md:p-6 lg:p-5 dark:bg-gray-800 dark:border-gray-700 rounded-2xl hover:shadow-2xl">
       <h3 className="mb-6 text-xl font-bold text-center">
          Languages
        </h3>

      <div className="space-y-6">
        {languages.map((language) => (
          <div key={language.name}>
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-semibold">
                  {language.name}
                </h4>

                <p className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                  {language.proficiency}
                </p>
              </div>

              <span className="font-medium">
                {language.level}%
              </span>
            </div>

            <div className="w-full h-2.5 bg-gray-200 rounded-full">
              <div
                className="h-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-700"
                style={{ width: `${language.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}