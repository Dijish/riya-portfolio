import React from "react";
import { useTranslation } from "react-i18next";
import AdobeLogo from "../../assets/images/adobe_logo.jpeg";
import ConcentrixLogo from "../../assets/images/concentrix_logo.jpeg";
import HCLLogo from "../../assets/images/hcltech_logo.jpeg";
import Title from "../../atoms/Title/Title";
import { Experience } from "../../molecules/Experience/Experience";
import "./Experiences.scss";

const Experiences: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experiences" className="experiences">
      <div className="container">
        <Title text={t("Experiences")} styleClass="title--secondary" />

        <div className="experiences__main">
          <Experience
            role={t("PRODUCT OWNER")}
            company={t("Adobe . Full-time")}
            duration={t("Mar 2023 - Present · 1 yr 7 mos")}
            location={t("Bengaluru, Karnataka, India")}
            image={AdobeLogo}
            description={t("In my role, I led Agile development projects, effectively managing offshore teams and ensuring the timely delivery of enterprise-scale web applications. My fluency in Japanese (certified at JLPT N1 level) allowed me to bridge communication between stakeholders and development teams, ensuring alignment with business needs. I was responsible for defining the product vision, setting long-term goals, and prioritizing the product backlog to guide the development process. By writing detailed user stories from the end-user perspective, I helped steer the team toward successful project outcomes. My expertise in client-facing project management, combined with strong problem-solving skills, facilitated efficient onshore-offshore collaboration and seamless virtual team coordination.")}
          />

          <Experience
            role={t("SENIOR EXECUTIVE")}
            company={t("HCL Technologies · Full-time")}
            duration={t("Aug 2021 - Mar 2023 · 1 yr 8 mos")}
            location={t("Bengaluru, Karnataka, India")}
            image={HCLLogo}
            description={t("In this role, I managed work schedules to meet deadlines while handling end-to-end communication with Japanese clients. I coordinated with key international stakeholders from Japan, North America, China, and India to define project requirements and delivery timelines. My responsibilities included translating technical documents between Japanese and English, ensuring accuracy in high-level documents, and providing interpretation during client visits and teleconferences. Additionally, I translated emails and specifications from English to Japanese and conducted language training for engineers to enhance their proficiency. Throughout, I maintained a focus on meeting deadlines and delivering quality results.")}
          />

          <Experience
            role={t("SENIOR PROJECT COORDINATOR")}
            company={t("Concentrix · Full-time")}
            duration={t("Aug 2020 - Aug 2021 · 1 yr 1 mo")}
            location={t("Chennai, Tamil Nadu, India")}
            image={ConcentrixLogo}
            description={t("In this role, I specialized in translating technical documents between Japanese and English and provided interpretation between Japanese and Indian engineers. I handled both system and malware cases, assisting in finding effective solutions. My responsibilities also included content review, ensuring the quality of translated Japanese and English texts. I regularly managed daily meetings with Japanese clients and communicated with Japanese field engineers to address issues, equipment changes, and follow-up actions. Additionally, I provided solutions to customers using Japanese email formats, conducted training for newcomers, and participated in interview shooting.")}
          />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
