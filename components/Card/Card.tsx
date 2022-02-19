import React from "react";

import { CardStyle } from "./Card.style";

type CardProps = {
  icon: React.ReactNode | string;
  heading: string;
  description: string;
  className?: string;
  type?: "light" | "dark";
};

const Card = (props: CardProps) => {
  const { icon, heading, description, className, type = "light" } = props;

  return (
    <CardStyle className={className} type={type}>
      {typeof icon === "string" ? (
        <img className="card-icon" src={icon} alt="icon" />
      ) : (
        icon
      )}
      <h3 className="card-heading">{heading}</h3>
      <p className="card-description">{description}</p>
    </CardStyle>
  );
};

export default Card;
