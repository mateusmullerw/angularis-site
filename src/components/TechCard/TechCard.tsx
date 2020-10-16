import React from "react";
import "./TechCard.scss";

interface ITechCardProps {
  title: string;
  description: string;
  icon: string;
}

const TechCard = (props: ITechCardProps) => {
  const { title, description, icon } = props;
  return (
    <div className="tech-card">
      <div className="tech-card__icon">
        <img src={icon} alt="" />
      </div>
      <div className="tech-card__content">
        <h4 className="tech-card__title">{title}</h4>
        <p className="body--2 tech-card__description">{description}</p>
      </div>
    </div>
  );
};

export default TechCard;
