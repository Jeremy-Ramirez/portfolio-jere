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

import {
  Projects,
  Skills,
  Experiences,
  Education,
  Footer,
  LanguageToggle,
} from "./components";
import { Contact } from "./components/Contact";
import Link from "next/link";
import { useLanguageStoreHydrated } from "@/store/useLanguageStore";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useLanguageStoreHydrated(); // get translation state from store

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { title: t.nav.about, href: "#about" },
    { title: t.nav.education, href: "#education" },
    { title: t.nav.projects, href: "#projects" },
    { title: t.nav.skills, href: "#skills" },
    { title: t.nav.experience, href: "#experience" },
    { title: t.nav.contact, href: "#contact" },
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
            <div className="hidden md:flex space-x-8 items-center">
              {menuItems.map((item) => (
                <a key={item.href} href={item.href} className="">
                  {item.title}
                </a>
              ))}
              <LanguageToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageToggle />
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
                  key={item.href}
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
                {t.hero.greeting} <br />
                {t.hero.name} <span className="text-red-700">Jere</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold  mb-4">
                Full Stack Developer & Engineer
              </h2>
              <p className="text-lg mb-8 max-w-2xl leading-relaxed">
                {t.hero.description}
              </p>

              <div className="flex flex-wrap gap-4">
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
                  <Link href={`#${t.nav.contact.toLowerCase()}`} className="">
                    <FaEnvelope size={24} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-center relative">
              <div className="relative w-[300px] h-[600px] overflow-hidden rounded-xl shadow-2xl">
                {/* Base Image - Always visible */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/Jere.jpeg"
                    alt="Jeremy Ramirez"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Hero Image - Slides up */}
                <div
                  className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
                    isFlipped
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                  }}
                >
                  <Image
                    src="/JereHero.png"
                    alt="Jeremy Ramirez - Hero Mode"
                    fill
                    className="object-cover"
                  />
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isFlipped ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 via-transparent to-transparent blur-xl"></div>
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
