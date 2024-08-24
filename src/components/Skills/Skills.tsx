import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../../atoms/Title/Title";
import IconItem from "../../molecules/IconItem/IconItem";
import "./Skills.scss";

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills">
      <div className="container">
        <Title text={t("Skills")} styleClass="title--secondary" />
        <div className="skills__content">
          <IconItem 
            icon="bilingual" 
            title={t("BILINGUAL")} 
            description={t("I am skilled in both Japanese and English, enabling effective bilingual communication across diverse contexts. Additionally, I have proficiency in Bengali and Hindi, further enhancing my ability to connect with a broader audience.")} 
          />

          <IconItem 
            icon="PO" 
            title={t("PRODUCT OWNER")} 
            description={t("As a Product Owner, I've successfully led multiple projects, translating business goals into actionable strategies and delivering high-quality products.")} 
          />

          <IconItem 
            icon="qa" 
            title={t("QUALITY ANALYST")} 
            description={t("As a QA professional, I've ensured the quality and reliability of multiple projects by designing and executing comprehensive test plans.")} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
