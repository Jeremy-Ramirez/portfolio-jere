"use client";
import { useLanguageStoreHydrated } from "@/store/useLanguageStore";
import { useState, useRef, useEffect } from "react";
import type { Language } from "@/lib/translations";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguageStoreHydrated();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en" as Language, label: "English", flag: "🇺🇸" },
    { code: "es" as Language, label: "Español", flag: "🇪🇸" },
    { code: "it" as Language, label: "Italiano", flag: "🇮🇹" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-md"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        {/* <span className="text-lg">{currentLanguage?.flag}</span> */}
        <span className="text-sm font-semibold">
          {currentLanguage?.code.toUpperCase()}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 animate-fadeIn">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                language === lang.code ? "bg-green-50" : ""
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">
                  {lang.label}
                </span>
                {/* <span className="text-xs text-gray-500">
                  {lang.code.toUpperCase()}
                </span> */}
              </div>
              {language === lang.code && (
                <svg
                  className="ml-auto w-5 h-5 text-green-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
