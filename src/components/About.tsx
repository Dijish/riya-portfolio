import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>{t("About")}</h2>
        <p>
          {t(
            "Accomplished Bilingual Product Owner and Team Lead with a proven track record in Japanese client management, interpretation, and meticulous quality assurance of client deliverables. Adept in stakeholder engagement and comprehensive project planning, with active involvement in QA and PO initiatives. Holder of a Masters degree from Jawaharlal Nehru University, New Delhi, specializing in Japanese language, literature, and interpretation."
          )}
        </p>
      </div>
    </section>
  );
};

export default About;
