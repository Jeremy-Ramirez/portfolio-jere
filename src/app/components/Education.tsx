"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { useLanguageStoreHydrated } from "@/store/useLanguageStore";

export default function Education() {
  const { t } = useLanguageStoreHydrated();
  const education = [
    {
      degree: "Master of Science in Engineering-Software Engineering",
      institution: "University of Southern Denmark, SDU. Denmark",
      period: "2025 - Present",
      description: "Specialization: Next Generation Software Development.",
      courses: [
        "End-User Development",
        "Advanced Software Architecture and Analysis",
        "Model-based Software Development",
        "Software Technologies for Internet of Things",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Escuela Superior Politécnica del Litoral. Ecuador",
      period: "2017 - 2023",
      description: "",
    },
  ];
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            {t.education.title}
          </h2>
          <div className="w-20 h-1  mx-auto"></div>
        </div>
        <div className="relative border-l-2 border-green-700/20 ml-3 md:ml-6 space-y-12 py-4">
          {education.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-5 h-5 rounded-full border-4 border-white bg-green-700 shadow-sm group-hover:scale-110 transition-transform"></div>

              {/* Content */}
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                    {exp.degree}
                  </h3>
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-green-800 bg-green-100 rounded-full mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4 text-green-700 font-semibold">
                  <FaGraduationCap size={18} />
                  <span>{exp.institution}</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  {exp.description}
                </p>
                {exp.courses && (
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {exp.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
