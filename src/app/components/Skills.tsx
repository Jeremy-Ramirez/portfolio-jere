"use client";
import { FaPython, FaDocker, FaAws } from "react-icons/fa";
import { useLanguageStoreHydrated } from "@/store/useLanguageStore";
import {
  SiTypescript,
  SiFastapi,
  SiFlask,
  SiReact,
  SiNestjs,
  SiJest,
  SiCypress,
  SiSelenium,
  SiPrefect,
  SiJira,
  SiConfluence,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiGraphql,
  SiExpress,
  SiTailwindcss,
  SiOpenai,
  SiClaude,
  SiGooglegemini,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function Skills() {
  const { t } = useLanguageStoreHydrated();
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "text-blue-400" },
        { name: "Next.js", icon: RiNextjsFill, color: "text-black" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-blue-400" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: FaPython, color: "text-yellow-600" },
        { name: "FastAPI", icon: SiFastapi, color: "text-teal-600" },
        { name: "Flask", icon: SiFlask, color: "text-gray-700" },
        { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
        { name: "Express", icon: SiExpress, color: "text-gray-600" },
      ],
    },
    {
      title: "Database & API",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
        { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: FaAws, color: "text-orange-500" },
        { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      ],
    },
    {
      title: "Tools & Testing",
      skills: [
        { name: "Jest", icon: SiJest, color: "text-red-700" },
        { name: "Cypress", icon: SiCypress, color: "text-teal-600" },
        { name: "Selenium", icon: SiSelenium, color: "text-green-600" },
        { name: "Prefect", icon: SiPrefect, color: "text-blue-600" },
        { name: "Jira", icon: SiJira, color: "text-blue-600" },
        { name: "Confluence", icon: SiConfluence, color: "text-blue-500" },
      ],
    },
    {
      title: "AI Agents",
      skills: [
        { name: "Gemini", icon: SiGooglegemini, color: "text-blue-500" },
        { name: "GPT", icon: SiOpenai, color: "text-green-600" },
        { name: "Claude", icon: SiClaude, color: "text-orange-600" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tech Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-bold  mb-8 text-center md:text-left border-l-4  pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {category.skills.map((skill, index) => (
                  <div key={index} className="text-center group">
                    <div className="rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer  h-full flex flex-col items-center justify-center">
                      <skill.icon
                        className={`text-4xl ${skill.color} mb-3 group-hover:scale-110 transition-transform`}
                        size={48}
                      />
                      <h3 className="font-semibold ">{skill.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
