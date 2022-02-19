import React from "react";

import { HeadingWithDescriptionStyle } from "./HeadingWithDescription.style";

type HeadingWithDescriptionProps = {
  heading: string;
  subheading?: string;
  description: string | React.ReactNode;
};

const HeadingWithDescription = (props: HeadingWithDescriptionProps) => {
  const { heading, subheading, description } = props;

  return (
    <HeadingWithDescriptionStyle>
      {subheading && <p className="subheading">{subheading}</p>}

      <h2 className="heading">{heading}</h2>
      <p className="description">{description}</p>
    </HeadingWithDescriptionStyle>
  );
};

export default HeadingWithDescription;
