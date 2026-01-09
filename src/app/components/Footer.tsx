"use client";
import React from "react";
import { useLanguageStoreHydrated } from "@/store/useLanguageStore";

export default function Footer() {
  const { t } = useLanguageStoreHydrated();

  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-white py-8 px-4 sm:px-6 lg:px-8  ">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-400">
          © {currentYear} Jeremy Ramirez Galeotti. Computer Science Engineer,{" "}
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
