import React from 'react'
import {

  Code,
  Server,
  Database,
  Cloud,
  Globe,
  Cpu,
  Layers,
  Settings,
  Zap,
} from "lucide-react";



export default function Skills() {



  const skills = [
    { name: "Python", icon: Cpu, color: "text-yellow-500" },
    { name: "TypeScript", icon: Code, color: "text-blue-600" },
    { name: "FastAPI", icon: Code, color: "text-blue-500" },
    { name: "Django", icon: Code, color: "text-blue-500" },
    { name: "React", icon: Code, color: "text-blue-500" },
    { name: "Next.js", icon: Globe, color: "text-black" },
    { name: "Redux", icon: Cpu, color: "text-yellow-500" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "NestJS", icon: Server, color: "text-gray-600" },
    { name: "Jest", icon: Server, color: "text-gray-600" },
    { name: "Cypress", icon: Server, color: "text-gray-600" },
    { name: "Selenium", icon: Server, color: "text-gray-600" },
    { name: "Prefect", icon: Server, color: "text-gray-600" },
    { name: "Express", icon: Server, color: "text-gray-600" },
    { name: "MongoDB", icon: Database, color: "text-green-600" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-700" },
    { name: "Supabase", icon: Database, color: "text-blue-700" },
    { name: "GraphQL", icon: Layers, color: "text-pink-500" },
    { name: "AWS", icon: Cloud, color: "text-orange-500" },
    { name: "Docker", icon: Settings, color: "text-blue-400" },
    { name: "Tailwind", icon: Zap, color: "text-cyan-500" },
    { name: "Jira", icon: Server, color: "text-gray-600" },
    { name: "Confluence", icon: Server, color: "text-gray-600" },
  ];







  return (
          
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <skill.icon
                    className={`text-4xl ${skill.color} mx-auto mb-3 group-hover:scale-110 transition-transform`}
                    size={48}
                  />
                  <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
