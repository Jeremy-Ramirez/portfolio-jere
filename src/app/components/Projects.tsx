"use client";
import React, { useState } from "react";
import Image from "next/image";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { useLanguageStoreHydrated } from "@/store/useLanguageStore";
import ImageSlider from "./ImageSlider";

export default function Projects() {
  const { t } = useLanguageStoreHydrated();
  const [sliderOpen, setSliderOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const projects = [
    {
      key: "pizza",
      image: "/PizzaProduction.png",
      images: ["/PizzaProduction.png", "/BlockBasedProgramming.png"], // Add more images here
      tech: ["EDA", "Microservices", "Docker", "UPPAAL", "Formal Verification"],
      github: "#",
      live: "#",
    },
    {
      key: "reuse",
      image: "/BlockBasedProgramming.png",
      images: ["/BlockBasedProgramming.png"], // Add more images here
      tech: ["OpenRoberta", "Block-based Programming", "HCI", "User Study"],
      github: "#",
      live: "#",
    },
    {
      key: "impostor",
      image: "/Impostor.png",
      images: ["/Impostor.png"], // Add more images here
      tech: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
      github: "#",
      live: "https://impostor-app-sage.vercel.app/",
    },
    {
      key: "AIMuseum",
      image: "/AIFrontend.png",
      images: ["/AIFrontend.png", "/AIBackend.png"], // Add more images here
      tech: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "TensorFlow",
        "Keras",
      ],
      github: "https://github.com/Jeremy-Ramirez/frontend-AI-guide",
      githubBackend: "https://github.com/Jeremy-Ramirez/backend-AI-guide",
      live: "#",
    },
    {
      key: "discordBot",
      image: "/DiscordBot.png",
      images: ["/DiscordBot.png"], // Add more images here
      tech: ["TypeScript", "Discord.js", "Node.js"],
      github: "https://github.com/Jeremy-Ramirez/botdiscord",
      live: "#",
    },
    {
      key: "taskManager",
      image: "/DiscordBot.png",
      images: ["/DiscordBot.png"], // Add more images here
      tech: [
        "Next.js",
        "Material-UI",
        "TypeScript",
        "NestJS",
        "AWS Cognito",
        "AWS Lambda",
        "PostgreSQL",
        "Docker",
      ],
      github: "https://github.com/Jeremy-Ramirez/TaskManagementApp-Frontend",
      githubBackend:
        "https://github.com/Jeremy-Ramirez/TaskManagementApp-Backend",
      live: "#",
    },
  ];

  const openSlider = (projectIndex: number, imageIndex: number = 0) => {
    setSelectedProject(projectIndex);
    setSelectedImageIndex(imageIndex);
    setSliderOpen(true);
  };

  const closeSlider = () => {
    setSliderOpen(false);
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  // Helper function to safely get project title and description
  const getProjectTranslation = (projectKey: string) => {
    if (!t || !t.projects || !t.projects.descriptions) {
      return { title: projectKey, description: "" };
    }

    const description =
      t.projects.descriptions[
        projectKey as keyof typeof t.projects.descriptions
      ];

    return {
      title: description?.title || projectKey,
      description: description?.description || "",
    };
  };

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
          {projects.map((project, projectIndex) => (
            <div
              key={project.key}
              className=" rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div
                className="cursor-pointer relative group overflow-hidden"
                onClick={() => openSlider(projectIndex, 0)}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={
                    t.projects.descriptions[
                      project.key as keyof typeof t.projects.descriptions
                    ]?.title || project.key
                  }
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                    Ver imágenes
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold  mb-3">
                  {t?.projects?.descriptions?.[
                    project.key as keyof typeof t.projects.descriptions
                  ]?.title || project.key}
                </h3>
                <p className=" mb-4">
                  {t?.projects?.descriptions?.[
                    project.key as keyof typeof t.projects.descriptions
                  ]?.description || ""}
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
                <div className="flex gap-4 flex-wrap">
                  <Link
                    href={project.github}
                    className="flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={16} />
                    {t.projects.code}
                  </Link>
                  {"githubBackend" in project && project.githubBackend && (
                    <Link
                      href={project.githubBackend}
                      className="flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={16} />
                      Backend
                    </Link>
                  )}
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

      {/* Image Slider Modal */}
      {sliderOpen && selectedProject !== null && (
        <ImageSlider
          images={projects[selectedProject].images}
          currentIndex={selectedImageIndex}
          onClose={closeSlider}
          projectTitle={
            t.projects.descriptions[
              projects[selectedProject]
                .key as keyof typeof t.projects.descriptions
            ]?.title || projects[selectedProject].key
          }
        />
      )}
    </section>
  );
}
