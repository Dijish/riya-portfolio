import React from "react";
import { useTranslation } from "react-i18next";
import Cta from "../../atoms/Cta/Cta";
import "./Header.scss";

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li>
              <Cta label={t("About Me")} href="#about-me" styleClass="cta--secondary" />
            </li>
            <li>
              <Cta label={t("Skills")} href="#skills" styleClass="cta--secondary" />
            </li>
            <li>
              <Cta label={t("Experiences")} href="#experiences" styleClass="cta--secondary" />
            </li>
            <li>
              <Cta label={t("CONTACT ME")} href="#contact-me" styleClass="cta--tertiary" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
