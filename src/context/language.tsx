import { createContext, useState, PropsWithChildren } from "react";
import { languageOptions, dictionaryList } from "../translation";

enum Languages {
  ptbr = "Português",
  en = "English",
}

type LanguagesType = "ptbr" | "en";

interface ILanguageContext {
  language: LanguagesType;
  dictionary: object;
  changeLanguage: (selected: LanguagesType) => void;
  selectedLanguage: Languages;
}

export const LanguageContext = createContext<Partial<ILanguageContext>>({
  language: "ptbr",
  dictionary: dictionaryList.ptbr,
});

export function LanguageProvider({ children }: PropsWithChildren) {
  const defaultLanguage = window.localStorage.getItem("lang") as LanguagesType;
  const [language, setLanguage] = useState<LanguagesType>(
    defaultLanguage || "ptbr"
  );

  const provider = {
    language,
    dictionary: dictionaryList[language],
    changeLanguage: (selected: LanguagesType) => {
      const updatedLanguage = languageOptions[selected] ? selected : "ptbr";
      setLanguage(updatedLanguage);
      window.localStorage.setItem("lang", updatedLanguage);
    },
    selectedLanguage: Languages[language],
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}
