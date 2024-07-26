import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";
import "./App.scss";

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
        <Hero />
        {/* <Header /> */}
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Recommendations />
        <Contact />
      </div>
    </Router>
  );
};

export default App;
