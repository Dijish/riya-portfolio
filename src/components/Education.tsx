import React from "react";
import { useTranslation } from "react-i18next";

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>{t("Education")}</h2>
        <div className="education-item">
          <h3>{t("Master's degree, Japanese Language and Literature")}</h3>
          <h4>{t("Jawaharlal Nehru University")}</h4>
          <p>{t("2018 - 2020")}</p>
        </div>
        <div className="education-item">
          <h3>
            {t("Bachelor of Arts - BA, Japanese Language and Literature")}
          </h3>
          <h4>{t("Jawaharlal Nehru University")}</h4>
          <p>{t("2015 - 2018")}</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
