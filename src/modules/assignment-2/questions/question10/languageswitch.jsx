import React from "react";
import { useLanguage } from "./languagecontext";

export const  LanguageSwitcher=() =>{
  const {  switchLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => switchLanguage("ENGLISH")}>English</button>
      <button onClick={() => switchLanguage("SPANISH")}>Spanish</button>
    </div>
  );
}

export const Content=()=> {
  const { currentLanguage } = useLanguage();

  const content = {
    ENGLISH: "Hello, Welcome to React",
    SPANISH: "Hola, Bienvenido a React",
  };
  <p> currentLanguage: ${currentLanguage}</p>;
  return (
    <p>
      Current Language:{currentLanguage} <br></br>
      {content[currentLanguage]}
    </p>
  );
}
