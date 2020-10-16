import React from "react";
import "./TeamCard.scss";

interface ITeamCardProps {
  name: string;
  position: Array<string>;
  picture: string;
}

const TeamCard = (props: ITeamCardProps) => {
  const { name, position, picture } = props;
  return (
    <div className="team-card">
      <div className="team-card__picture">
        <img src={picture} alt="" />
      </div>
      <div className="team-card__content">
        <p className="subtitle--2 team-card__name">{name}</p>
        {position.map((pos, index) => {
          return (
            <p key={index} className="body--2 team-card__position">
              {pos}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TeamCard;
