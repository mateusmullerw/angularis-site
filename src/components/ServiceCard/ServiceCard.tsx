import React from "react";
import "./ServiceCard.scss";

interface IServiceCardProps {
  title: string;
  description: string;
  icon: Function;
}

const ServiceCard = (props: IServiceCardProps) => {
  const { title, description, icon } = props;
  return (
    <div className="service-card">
      <div className="service-card__icon">{icon()}</div>
      <div className="service-card__content">
        <h4 className="service-card__title">{title}</h4>
        <p className="body--2 service-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
