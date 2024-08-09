import React from "react";
import { useTranslation } from "react-i18next";
import riyaImage from "../../assets/images/riya-3.png";
import Cta from "../../atoms/Cta/Cta";
import Label from "../../atoms/Label/Label";
import Ssn from "../../atoms/Ssn/Ssn";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Title from "../../atoms/Title/Title";
import "./Hero.scss";

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <div className="hero__left-content">
            <Label text={t("Hi, I am")} styleClass="label--primary" />
            <Title text={t("Riya Haldar")} styleClass="title--primary" />
            <SubTitle text={t("Bilingual Product Owner and QA")} />
            <div className="hero__languages">
              <p>{t('Language proficiency in:')}</p>
              <ul>
                <li>
                  <Cta
                    label={t("Japanese")}
                    onClick={() => changeLanguage("jp")}
                  />
                </li>
                <li>
                  <Cta
                    label={t("English")}
                    onClick={() => changeLanguage("en")}
                  />
                </li>
                <li>
                  <Cta label={t("Hindi")} onClick={() => changeLanguage("hi")} />
                </li>
                <li>
                  <Cta
                    label={t("Bengali")}
                    onClick={() => changeLanguage("bn")}
                  />
                </li>
              </ul>
            </div>

            <ul className="hero__ssn">
              <li>
                <Ssn
                  type="linkedin"
                  href="https://www.linkedin.com/in/riya-haldar-b688898b/"
                />
              </li>
              <li>
                <Ssn
                  type="facebook"
                  href="https://www.facebook.com/riya.haldar.73"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="hero__right">
          <img src={riyaImage} alt="Riya Haldar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
