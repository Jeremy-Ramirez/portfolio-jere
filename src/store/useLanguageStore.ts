import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  translations,
  type Language,
  type TranslationKeys,
} from "@/lib/translations";
import { useEffect, useState } from "react";

interface LanguageStore {
  language: Language;
  t: TranslationKeys;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "en",
      t: translations.en,
      setLanguage: (lang) => set({ language: lang, t: translations[lang] }),
      toggleLanguage: () =>
        set((state) => {
          let newLang: Language;
          if (state.language === "en") {
            newLang = "es";
          } else if (state.language === "es") {
            newLang = "it";
          } else {
            newLang = "en";
          }
          return { language: newLang, t: translations[newLang] };
        }),
    }),
    {
      name: "language-storage-v2", // Changed name to reset old localStorage
      version: 1,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Hook personalizado que previene errores de hidratación
export const useLanguageStoreHydrated = () => {
  const [hydrated, setHydrated] = useState(false);
  const store = useLanguageStore();

  useEffect(() => {
    setHydrated(true);
  }, []);

  // Durante SSR y antes de hidratar, usamos el idioma por defecto
  if (!hydrated) {
    return {
      language: "en" as Language,
      t: translations.en,
      setLanguage: store.setLanguage,
      toggleLanguage: store.toggleLanguage,
    };
  }

  return store;
};
