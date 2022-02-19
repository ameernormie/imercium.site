import React from "react";

import { SectionWrapperStyle } from "./SectionWrapper.style";

type SectionWrapperProps = {
  heading: string;
  subheading: string;
  children: React.ReactChild;
  type?: "light" | "dark";
  id?: string;
};

const SectionWrapper = (props: SectionWrapperProps) => {
  const { heading, subheading, children, type = "light", id } = props;
  return (
    <SectionWrapperStyle type={type} id={id}>
      <h2 className="section-heading">{heading}</h2>
      <p className="section-subheading">{subheading}</p>

      {children}
    </SectionWrapperStyle>
  );
};

export default SectionWrapper;
