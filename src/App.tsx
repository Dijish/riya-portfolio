import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Recommendations from "./components/Recommendations";
import Skills from "./components/Skills/Skills";

const App: React.FC = () => {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    // Set default language based on user's location
    const userLang = navigator.language;
    if (userLang.includes("ja")) {
      i18n.changeLanguage("jp");
    } else if (userLang.includes("hi")) {
      i18n.changeLanguage("hi");
    } else if (userLang.includes("bn")) {
      i18n.changeLanguage("bn");
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Recommendations />
        <Contact />
      </div>
    </Router>
  );
};

export default App;
