import React from 'react'

export default function Education() {

      const education = [
    {
      degree: "Master of Science in Engineering-Software Engineering",
      institution: "University of Southern Denmark, SDU",
      period: "2025 - 2027",
      description:
        "Currently pursuing a Master's degree in Software Engineering, focusing on advanced software development methodologies and technologies.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Escuela Superior Politécnica del Litoral",
      period: "2017 - 2023",
      description:
        "Capstone project focused on developing a full-stack web application using React, React Native, Django, Postgresql. ",
    },
  ];
  return (
         
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {education.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.degree}
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      {exp.institution}
                    </p>
                  </div>
                  <span className="text-gray-500 font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}
