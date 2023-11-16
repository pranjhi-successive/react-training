import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider=({ children })=> {
  const [currentLanguage, setCurrentLanguage] = useState("ENGLISH");

  const switchLanguage = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage=()=> {
  return useContext(LanguageContext);
}
