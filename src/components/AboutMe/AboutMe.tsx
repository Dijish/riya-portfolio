import React from "react";
import { useTranslation } from "react-i18next";
import Cta from "../../atoms/Cta/Cta";
import Divider from "../../atoms/Divider/Divider";
import Title from "../../atoms/Title/Title";
import "./AboutMe.scss";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about-me" className="about-me">
      <div className="container">
        <Title text={t("About Me")} styleClass="title--secondary" />
        <p>
          {t(
            "Accomplished Bilingual Product Owner and Team Lead with a proven track record in Japanese client management, interpretation, and meticulous quality assurance of client deliverables. Adept in stakeholder engagement and comprehensive project planning, with active involvement in QA and PO initiatives. Holder of a Masters degree from Jawaharlal Nehru University, New Delhi, specializing in Japanese language, literature, and interpretation."
          )}
        </p>
        <Cta label={t("Explore")} href="https://www.linkedin.com/in/riya-haldar-b688898b/" styleClass="cta--primary" />
        <Divider />
      </div>
    </section>
  );
};

export default AboutMe;
