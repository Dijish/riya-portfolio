import React from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <h1>{t("Riya Haldar")}</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">{t("About")}</a>
            </li>
            <li>
              <a href="#experience">{t("Experience")}</a>
            </li>
            <li>
              <a href="#education">{t("Education")}</a>
            </li>
            <li>
              <a href="#certifications">{t("Certifications")}</a>
            </li>
            <li>
              <a href="#skills">{t("Skills")}</a>
            </li>
            <li>
              <a href="#recommendations">{t("Recommendations")}</a>
            </li>
            <li>
              <a href="#contact">{t("Contact")}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
