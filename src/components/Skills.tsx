import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     // Fetch skills from LinkedIn API
//     axios
//       .get("/api/linkedin/skills")
//       .then((response) => {
//         setSkills(response.data.skills);
//       })
//       .catch((error) => {
//         console.error("Error fetching skills:", error);
//       });
//   }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>{t("Skills")}</h2>
        <ul>
          {skills.map((skill: any, index: number) => (
            <li key={index}>
              {skill.name} ({skill.endorsements})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
