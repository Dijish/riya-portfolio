import React from "react";
import { useTranslation } from "react-i18next";
import Cta from "../../atoms/Cta/Cta";
import Ssn from "../../atoms/Ssn/Ssn";
import { buildIcon } from "../../builder/buildIcons";
import "./Footer.scss";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__back-to-top">
                    {buildIcon('go-up')}
                    <Cta label={t("BACK TO TOP")} styleClass="cta--secondary" href="#hero" target="_self" />
                </div>
                <ul className="footer__ssn">
                    <li>
                        <Ssn
                            type="linkedin"
                            href="https://www.linkedin.com/in/riya-haldar-b688898b/"
                            styleClass="ssn--secondary"
                        />
                    </li>
                    <li>
                        <Ssn
                            type="facebook"
                            href="https://www.facebook.com/riya.haldar.73"
                            styleClass="ssn--secondary"
                        />
                    </li>
                </ul>
                <p>@2024 Dijish U K {t("All Rights Reserved.")}</p>
            </div>
        </footer>
    );
};

export default Footer;