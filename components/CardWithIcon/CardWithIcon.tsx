import React from "react";

import { CardWithIconStyle } from "./CardWithIcon.style";

type CardWithIconProps = {
  imagePath: string;
  heading: string;
  description: string;
};

const CardWithIcon = (props: CardWithIconProps) => {
  const { imagePath, heading, description } = props;

  return (
    <CardWithIconStyle>
      <img className="card-icon" src={imagePath} alt="icon" />
      <div>
        <p className="heading">{heading}</p>
        <p className="description">{description}</p>
      </div>
    </CardWithIconStyle>
  );
};

export default CardWithIcon;
