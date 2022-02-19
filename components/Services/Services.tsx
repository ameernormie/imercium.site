import React from "react";

import { ServicesStyle } from "./Services.style";
import { CardWithIcon } from "../CardWithIcon";

const Services = () => {
  return (
    <ServicesStyle>
      <section className="services-wrapper">
        <img width={400} height={400} src="/images/imercium-services.png" />
        <div className="icons-wrapper">
          <CardWithIcon
            heading="E-commerce Development"
            description="Simplify shopping experience for your customers and unlock more revenue"
            imagePath="/images/icons/e-commerce.png"
          />
          <CardWithIcon
            heading="Web Applications"
            description="Design effective products with elegant interfaces and delightful user experiences"
            imagePath="/images/icons/web-development.png"
          />
          <CardWithIcon
            heading="Mobile App Development"
            description="From concept to design to development, trust us to create powerful mobile apps."
            imagePath="/images/icons/mobile-development.png"
          />
          <CardWithIcon
            description="Developing high impact products that are secure, scalable, meaningful and powerful."
            heading="Custom Software Development"
            imagePath="/images/icons/custom-development.png"
          />
        </div>
      </section>
    </ServicesStyle>
  );
};

export default Services;
