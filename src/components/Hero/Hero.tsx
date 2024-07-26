import React from "react";
import { useTranslation } from "react-i18next";
import riyaImage from "../../assets/images/riya.jpg";
import "./Hero.scss";
import Header from "../Header";
import Label from "../../atoms/Label/Label";
import Title from "../../atoms/Title/Title";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Cta from "../../atoms/Cta/Cta";
import Ssn from "../../atoms/Ssn/Ssn";

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section className="hero">
      <div className="hero__container">
        {/* <Header /> */}
        <Label text={t("Hi, I am")} styleClass="label--primary" />
        <Title text={t("Riya Haldar")} styleClass="title--primary" />
        <SubTitle text={t("Bilingual Product Owner and QA")}/>
        <div className="hero__languages">
          <ul>
            <li><Cta label={t("Japanese")} onClick={() => changeLanguage("jp")} /></li>
            <li><Cta label={t("English")} onClick={() => changeLanguage("en")} /></li>
            <li><Cta label={t("Hindi")} onClick={() => changeLanguage("hi")} /></li>
            <li><Cta label={t("Bengali")} onClick={() => changeLanguage("bn")} /></li>
          </ul>
        </div>

        <ul className="hero__ssn">
          <li><Ssn type="linkedin" href="https://www.linkedin.com/in/riya-haldar-b688898b/" /></li>
          <li><Ssn type="facebook" href="https://www.facebook.com/riya.haldar.73" /></li>
        </ul>
        <img src={riyaImage} alt="Riya Haldar" />
      </div>
    </section>
  );
};

export default Hero;
