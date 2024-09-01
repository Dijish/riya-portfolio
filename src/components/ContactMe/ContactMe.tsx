import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../../atoms/Title/Title";
import "./ContactMe.scss";

const ContactMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact-me" className="contact-me">
      <div className="container">
        <Title text={t("Contact Me")} styleClass="title--secondary" />
        <h3>
          {t("Feel free to reach out to me at ")}
          <a href="mailto:riya-haldar@gmail.com"> riya-haldar@gmail.com </a>
          {t("for any inquiries or collaborations. I'm always open to discussing new opportunities!")}
        </h3>
      </div>
    </section>
  );
};

export default ContactMe;
