import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cta from "../../atoms/Cta/Cta";
import { buildIcon } from "../../builder/buildIcons";
import "./Header.scss";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isSticky = (_e: any) => {
    const scrollTop = window.scrollY;
    scrollTop >= 500 ? document.body.classList.add('is-sticky') : document.body.classList.remove('is-sticky');
  };

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });


  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);
  return (
    <header className={`header ${isMenuOpen ? 'header--menu-open' : ''}`}>
      <div className="header-container">
        <div className="container">
          <div className="header__menu" onClick={() => setIsMenuOpen(true)}>
            {buildIcon('hamburger')}
          </div>
          <div className="header__close" onClick={() => setIsMenuOpen(false)}>
            {buildIcon('close')}
          </div>
          <nav>
            <ul>
              <li>
                <Cta label={t("About Me")} href="#about-me" styleClass="cta--secondary" onClick={() => setIsMenuOpen(false)} target="_self" />
              </li>
              <li>
                <Cta label={t("Skills")} href="#skills" styleClass="cta--secondary" onClick={() => setIsMenuOpen(false)} target="_self" />
              </li>
              <li>
                <Cta label={t("Experiences")} href="#experiences" styleClass="cta--secondary" onClick={() => setIsMenuOpen(false)} target="_self" />
              </li>
              <li className="header__contact-me">
                <Cta label={t("CONTACT ME")} href="#contact-me" styleClass="cta--tertiary" onClick={() => setIsMenuOpen(false)} target="_self" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
