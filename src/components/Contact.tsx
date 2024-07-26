import React from "react";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>{t("Contact")}</h2>
        <form
          action={`mailto:${t("riyahaldart@gmail.com")}`}
          method="post"
          encType="text/plain"
        >
          <div className="form-group">
            <label htmlFor="name">{t("Name")}</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t("Email")}</label>
            <input type="email" id="email" name="email" required />
          </div>
          <button type="submit">{t("Send")}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
