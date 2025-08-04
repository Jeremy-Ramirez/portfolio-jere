import React from 'react'

export default function Experiences() {

 const experiences = [
    {
      title: "Software Specialist / Senior Full Stack Developer",
      company: "Telconet LATAM",
      period: "2023 - Present",
      tasks: [
        "Led development of scalable web applications using NextJS, Typescript, FastAPI, Redis, Docker, Aws, Postgresql, Exasol.",
        "Implemented web scrapping for downloading Tableau reports, streamlining process and reducing manual intervention by 90% using Python, Selenium, Prefect 2.0.",
        "Mentored junior developers and improved system performance by 40%.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Laboratorios ASIMED",
      period: "2021 - 2023",
      tasks: [
        "Developed a medical report management web app using GraphQL, Hasura, Sveltekit, Fastify, Typescript and hexagonal architecture, decreasing report generation time by 50%",
        "Integrated the Meta Conversions API SDK to stream server-side conversion events, boosting marketing-attribution accuracy by 25 % while remaining compliant with privacy constraints.",
        "Maintained and optimized existing applications, ensuring high performance and responsiveness.",
      ],
    },
    {
      title: "Reservoir Performance Intern (Software)",
      company: "Schlumberger",
      period: "2020 - 2021",
      tasks: [
        "Automated data extraction pipelines with Python & Pandas, reducing manual entry errors by 25%. ",
      ],
    },
    {
      title: "Full Stack Developer ",
      company: "Hangaroa",
      period: "2019 - 2020",
      tasks: [
        "Built a job matching portal (Angular, Django, MySQL) serving 100+ monthly users.",
        "optimised queries to cut load times by 30%.",
        "Implemented RBAC and OAuth2 security.",
      ],
    },
  ];




  return (
        
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium">
                    {exp.period}
                  </span>
                </div>
                {exp.tasks && exp.tasks.length > 0 ? (
                  <ul className="list-disc pl-5 mb-4 text-gray-600">
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
  )
}
