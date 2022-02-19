import React from "react";

import { InnerPageHeaderStyle } from "./InnerPageHeader.style";

type InnerPageHeaderProps = {
  slogan: string;
  image: string;
};

const InnerPageHeader = (props: InnerPageHeaderProps) => {
  const { slogan, image } = props;

  return (
    <InnerPageHeaderStyle image={image}>
      <h2 className="slogan">{slogan}</h2>
    </InnerPageHeaderStyle>
  );
};

export default InnerPageHeader;
