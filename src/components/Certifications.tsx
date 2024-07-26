import React from "react";
import { useTranslation } from "react-i18next";

const Certifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2>{t("Certifications")}</h2>
        <ul>
          <li>
            {t("Agile Product Owner Role: Foundations - LinkedIn (March 2023)")}
          </li>
          <li>{t("Effective Leadership - HP Life E-Learning (May 2021)")}</li>
          <li>{t("Become a Data Analyst - LinkedIn (April 2021)")}</li>
          <li>
            {t("IT for Business Success - HP Life E-Learning (April 2021)")}
          </li>
          <li>{t("Power BI Essential Training - LinkedIn (March 2021)")}</li>
          <li>{t("Learning Data Analytics - LinkedIn (November 2020)")}</li>
          <li>{t("JLPT N2 - The Japan Foundation (July 2019)")}</li>
          <li>{t("JLPT N3 - The Japan Foundation (December 2017)")}</li>
          <li>{t("JLPT N4 - The Japan Foundation (July 2016)")}</li>
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
