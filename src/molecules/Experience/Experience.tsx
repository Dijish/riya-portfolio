import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Experience.scss';

export interface ExperienceProps {
    role: string;
    company: string;
    duration: string;
    location: string;
    image: string;
    description: string;
}

export const Experience = ({
    role,
    company,
    duration,
    location,
    image,
    description
}: ExperienceProps) => {
    const [showAll, setShowAll] = useState(false);
    const MAX_DESCRIPTION_LENGTH = 150;
    const { t } = useTranslation();

    return (
        <div className="experience">
            <div className="experience__image">
                <img src={image} alt={company} />
            </div>
            <div className="experience__content">
                <h3>{role}</h3>
                <h4>{company}</h4>
                <p>{duration}</p>
                <p>{location}</p>
                
                {description.length > MAX_DESCRIPTION_LENGTH && !showAll ? (
                    <p className="experience__description">
                        {description.slice(0, MAX_DESCRIPTION_LENGTH)}...
                        <button className="experience__more" onClick={() => setShowAll(true)}>{t("See More")}</button>
                    </p>
                ) : (
                    <p className="experience__description">{description}</p>
                )}
            </div>
        </div>
    );
};
    