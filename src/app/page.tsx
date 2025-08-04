"use client";
import { useState } from "react";
import Image from "next/image";

import {
  Mail,
  Download,
  Menu,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              {"<JereRami />"}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 border border-red-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex justify-center gap-5 ">
            <div className="mb-8 mt-20">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Profile"
                alt="John Doe"
                width={200}
                height={200}
                className="rounded-full mx-auto border-4 border-gray-200"
              />
            </div>
            <div className="mt-20">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-blue-600">Jeremy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Computer Science Engineer and Full Stack Developer passionate
                about creating scalable web applications and solving complex
                problems with modern technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </button>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub size={24}/>

                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                   <FaLinkedin size={24}/>

                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaSquareXTwitter size={24}/>

                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate full-stack developer with over 5 years of
                experience building web applications. I love turning complex
                problems into simple, beautiful designs and creating seamless
                user experiences.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My expertise spans across modern frontend frameworks like React
                and Next.js, backend technologies including Node.js and Python,
                and cloud platforms like AWS. I'm always eager to learn new
                technologies and take on challenging projects.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                  <p className="text-gray-600">
                    React, Next.js, TypeScript, Tailwind CSS
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                  <p className="text-gray-600">
                    Node.js, Python, Express, GraphQL
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Database</h4>
                  <p className="text-gray-600">MongoDB, PostgreSQL, Redis</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Cloud & Tools
                  </h4>
                  <p className="text-gray-600">AWS, Docker, Git, CI/CD</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Developer workspace"
                alt="Developer workspace"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Experiences />
      <Skills />
      <Projects />
      <Education />
      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gray-900 text-white px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {"Let's Work Together"}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {
                "I'm always interested in new opportunities and exciting projects. Let's connect!"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-400 text-xl" size={20} />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-blue-400 text-xl" size={20} />
                  <span>linkedin.com/in/johndoe</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaGithub className="text-blue-400 text-xl" size={20} />
                  <span>github.com/johndoe</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none resize-none text-white placeholder-gray-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
