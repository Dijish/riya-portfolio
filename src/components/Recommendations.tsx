import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Recommendations: React.FC = () => {
  const { t } = useTranslation();
  const [recommendations, setRecommendations] = useState([]);

  // useEffect(() => {
  //   // Fetch recommendations from LinkedIn API
  //   axios
  //     .get("/api/linkedin/recommendations")
  //     .then((response) => {
  //       setRecommendations(response.data.recommendations);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching recommendations:", error);
  //     });
  // }, []);

  return (
    <section id="recommendations" className="recommendations">
      <div className="container">
        <h2>{t("Recommendations")}</h2>
        {recommendations.map((recommendation: any, index: number) => (
          <div key={index} className="recommendation">
            <img
              src={recommendation.recommender.avatar}
              alt={recommendation.recommender.name}
            />
            <div className="content">
              <h3>{recommendation.recommender.name}</h3>
              <p>{recommendation.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
