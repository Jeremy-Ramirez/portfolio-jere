import React from 'react'
import Image from "next/image";

import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Download,
  Menu,
  X,
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
export default function Projects() {
      const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500&text=E-Commerce Platform",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application built with Next.js and PostgreSQL. Real-time updates with Socket.io and drag-and-drop functionality.",
      image: "/placeholder.svg?height=300&width=500&text=Task Management App",
      tech: ["Next.js", "PostgreSQL", "Socket.io", "Tailwind"],
      github: "#",
      live: "#",
    },
    {
      title: "AI Chat Application",
      description:
        "Real-time chat application with AI integration using OpenAI API. Built with React, Express, and WebSocket for instant messaging.",
      image: "/placeholder.svg?height=300&width=500&text=AI Chat Application",
      tech: ["React", "Express", "OpenAI", "WebSocket"],
      github: "#",
      live: "#",
    },
  ];
  return (
         
      <section id="projects" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
