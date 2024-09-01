import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
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
        <Experiences />
        <ContactMe />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
