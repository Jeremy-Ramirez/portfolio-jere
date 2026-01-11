"use client";
import React from "react";
import { useLanguageStoreHydrated } from "@/store/useLanguageStore";

export default function Experiences() {
  const { t } = useLanguageStoreHydrated();

  // Get experiences from translation store
  const experiences = t?.experience?.positions || [];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            {t.experience.title}
          </h2>
          <div className="w-20 h-1 mx-auto"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-l-4 border-r border-green-700 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold ">{exp.title}</h3>
                  <p className=" font-semibold">{exp.company}</p>
                </div>
                <span className=" font-medium">{exp.period}</span>
              </div>
              {exp.tasks && exp.tasks.length > 0 ? (
                <ul className="list-disc pl-5 mb-4 ">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
