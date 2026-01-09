"use client";
import React from "react";
import Image from "next/image";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { useLanguageStoreHydrated } from "@/store/useLanguageStore";

export default function Projects() {
  const { t } = useLanguageStoreHydrated();

  const projects = [
    {
      key: "pizza",
      image: "/PizzaProduction.png",
      tech: ["EDA", "Microservices", "Docker", "UPPAAL", "Formal Verification"],
      github: "#",
      live: "#",
    },
    {
      key: "reuse",
      image: "/BlockBasedProgramming.png",
      tech: ["OpenRoberta", "Block-based Programming", "HCI", "User Study"],
      github: "#",
      live: "#",
    },
    {
      key: "impostor",
      image: "/Impostor.png",
      tech: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
      github: "#",
      live: "https://impostor-app-sage.vercel.app/",
    },
    {
      key: "aiFrontend",
      image: "/AIFrontend.png",
      tech: ["Next.js", "React", "Tailwind CSS", "Axios"],
      github: "https://github.com/Jeremy-Ramirez/frontend-AI-guide",
      live: "#",
    },
    {
      key: "aiBackend",
      image: "/AIBackend.png",
      tech: ["FastAPI", "Python", "TensorFlow", "Keras"],
      github: "https://github.com/Jeremy-Ramirez/backend-AI-guide",
      live: "#",
    },
    {
      key: "discordBot",
      image: "/DiscordBot.png",
      tech: ["TypeScript", "Discord.js", "Node.js"],
      github: "https://github.com/Jeremy-Ramirez/botdiscord",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-16  px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-c-beige mb-4">
            {t.projects.title}
          </h2>
          <div className="w-20 h-1  mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.key}
              className=" rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={
                  t.projects.descriptions[
                    project.key as keyof typeof t.projects.descriptions
                  ].title
                }
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold  mb-3">
                  {
                    t.projects.descriptions[
                      project.key as keyof typeof t.projects.descriptions
                    ].title
                  }
                </h3>
                <p className=" mb-4">
                  {
                    t.projects.descriptions[
                      project.key as keyof typeof t.projects.descriptions
                    ].description
                  }
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className=" px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    className="flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={16} />
                    {t.projects.code}
                  </Link>
                  <Link
                    href={project.live}
                    className="flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={16} />
                    {t.projects.liveDemo}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
