import React from 'react';  
import { useTranslation } from 'react-i18next';  
  
const Experience: React.FC = () => {  
  const { t } = useTranslation();  
  
  return (  
    <section id="experience" className="experience">  
      <div className="container">  
        <h2>{t('Experience')}</h2>  
        <div className="job">  
          <h3>{t('Product Owner')}</h3>  
          <h4>{t('Adobe')}</h4>  
          <p>{t('March 2023 - Present')}</p>  
          <p>{t('Bengaluru, Karnataka, India')}</p>  
          <ul>  
            <li>{t('Supporting and managing Agile development projects while overseeing offshore teams.')}</li>  
            <li>{t('Fluent in Japanese with speaking and writing skills certified at JLPT N1 level.')}</li>  
            <li>{t('Defining Product Vision to set long-term direction and goals for the product.')}</li>  
            <li>{t('Prioritizing and refining the Product Backlog, including features, enhancements, and bug fixes for the development team.')}</li>  
            <li>{t('Writing detailed User Stories from an end-user perspective to guide development.')}</li>  
            <li>{t('Acting as a liaison between stakeholders and the development team to ensure alignment with business needs.')}</li>  
            <li>{t('Collaborating with the development team to plan and execute sprints for timely product delivery.')}</li>  
            <li>{t('Proficient problem-solving skills utilized in resolving issues swiftly, particularly when working closely with onshore teams.')}</li>  
            <li>{t('Demonstrated expertise in team building and management, including virtual team coordination.')}</li>  
            <li>{t('Specializing in client-facing project management and delivering enterprise-scale web applications.')}</li>  
          </ul>  
        </div>
      </div>  
    </section>  
  );  
};  
  
export default Experience;  
