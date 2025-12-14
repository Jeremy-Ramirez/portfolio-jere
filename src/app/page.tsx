"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import {
  FaEnvelope,
  FaDownload,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { Projects, Skills, Experiences, Education, Footer } from "./components";
import { Contact } from "./components/Contact";
import Link from "next/link";
import { ContactForm } from "./components/ContactForm";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Experience", href: "#education" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen ">
      <nav className="fixed top-0 w-full  backdrop-blur-sm z-50 border-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold ">
              {"<"}
              <span className="text-green-700">Jere</span>
              <span className="text-red-700">Rami</span>
              {" />"}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a key={item.title} href={item.href} className="">
                  {item.title}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="cursor-pointer hover:scale-110 transition-transform p-2 text-gray-800"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col space-y-4 py-4 px-6">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-800 hover:text-green-700 transition-colors font-medium border-b border-gray-100 pb-2 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-green-700 mb-6 leading-tight">
                Hi! <br />
                <span className="">
                  I'm <span className="text-red-700">Jere</span>
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold  mb-4">
                Full Stack Developer & Engineer
              </h2>
              <p className="text-lg mb-8 max-w-2xl leading-relaxed">
                Computer Science Engineer passionate about creating scalable web
                applications and solving complex problems. I take great pleasure
                in conceptualizing and bringing to life visually stunning
                products.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className=" text-white px-8 py-3 rounded-lg  transition-colors flex items-center gap-2">
                  <FaDownload size={20} />
                  Download Resume
                </button>
                <div className="flex gap-4 items-center px-4">
                  <Link
                    href={"https://github.com/Jeremy-Ramirez"}
                    rel="noopener noreferrer"
                    target="_blank"
                    className=""
                  >
                    <FaGithub size={24} />
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/jeremy-ramirezg/"}
                    rel="noopener noreferrer"
                    target="_blank"
                    className=""
                  >
                    <FaLinkedin size={24} />
                  </Link>
                  <Link
                    href={"mailto:jeremyramirezg@gmail.com"}
                    rel="noopener noreferrer"
                    target="_blank"
                    className=""
                  >
                    <FaEnvelope size={24} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-center relative">
              <div className="group w-[300px] h-[600px] [perspective:1000px]">
                <div
                  className={`relative w-full h-full transition-all duration-1000 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] cursor-pointer ">
                    <Image
                      src="/JereHero.png"
                      alt="Jeremy Ramirez"
                      fill
                      className="object-cover rounded-xl border-4  shadow-xl"
                      priority
                    />
                  </div>
                  {/* Back Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <Image
                      src="/Jere.jpeg"
                      alt="Jeremy Ramirez"
                      fill
                      className="object-cover rounded-xl border-4 border-gray-100 shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education */}
      <Education />

      {/* Projects */}
      <Projects />

      {/* Skills */}
      <Skills />

      {/* Experience */}
      <Experiences />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
