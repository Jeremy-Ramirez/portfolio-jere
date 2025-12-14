import React from "react";
import Image from "next/image";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
export default function Projects() {
  const projects = [
    {
      title: "Distributed System for I4.0 Pizza Production",
      description:
        "Design and validation of a flexible, distributed architecture for Industry 4.0. Combines Event-Driven and Microservice-Oriented architectures to ensure modularity and real-time processing. Validated through a containerized pizza production testbed and formally verified using UPPAAL.",
      image: "/PizzaProduction.png",
      tech: ["EDA", "Microservices", "Docker", "UPPAAL", "Formal Verification"],
      github: "#",
      live: "#",
    },
    {
      title: "Reuse Assistant: Automated Guidance for End-User Programming",
      description:
        "Development and evaluation of an automated guidance system for OpenRoberta that helps end-users reuse code. The system uses visual highlighting and one-click refactoring to transform duplicate sequences into reusable custom blocks. User study demonstrated 100% adoption rate and high usability scores.",
      image: "/BlockBasedProgramming.png",
      tech: ["OpenRoberta", "Block-based Programming", "HCI", "User Study"],
      github: "#",
      live: "#",
    },
    {
      title: "Impostor",
      description:
        "Real-time multiplayer social deduction game. Players join rooms, receive secret words, and must identify the impostor among them. Features live game state synchronization and interactive voting.",
      image: "/Impostor.png",
      tech: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
      github: "#",
      live: "https://impostor-app-sage.vercel.app/",
    },
  ];
  return (
    <section id="projects" className="py-16  px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-c-beige mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1  mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold  mb-3">{project.title}</h3>
                <p className=" mb-4">{project.description}</p>
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
                  <a href={project.github} className="flex items-center gap-2 ">
                    <FaGithub size={16} />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 ">
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
