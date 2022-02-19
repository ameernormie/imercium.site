import React from "react";

import { Card, HeadingWithDescription } from "..";
import { Divider } from "../../styles/Common.style";
import { AboutUsStyle, IconWithDescriptionStyle } from "./AboutUs.style";

const IconWithDescription = ({ description }: { description: string }) => {
  return (
    <IconWithDescriptionStyle>
      <img src="/images/icons/tick-filled-icon.png" className="tick-icon" />
      <p className="description">{description}</p>
    </IconWithDescriptionStyle>
  );
};

const AboutUs = () => {
  return (
    <AboutUsStyle>
      <div className="about-us-wrapper">
        <div>
          <HeadingWithDescription
            heading="Who We are"
            subheading="OUR STORY"
            description="imercium is a e-commerce and custom software solutions providers. We help E-commerce stores to improve the shopping experience of their customers. We help startups to build their brand from ground up. We provide web and mobile application solutions to our clients."
          />
          <Divider />
          <h3 className="about-us-heading">Why Choose Us</h3>
          <IconWithDescription description="Maximize conversion without changing platform" />
          <IconWithDescription description="Flows for your audience" />
          <IconWithDescription description="On-time delivery" />
          <IconWithDescription description="Personalized platform integrations" />
          <IconWithDescription description="Scalable web apps" />
          <IconWithDescription description="You drive the process" />
        </div>

        <div className="cards-wrapper">
          <Card
            type="dark"
            className="card-1"
            icon="/images/icons/ux.png"
            heading="User Experience"
            description="Modernize User experience for your customers. A seamless flow of your platform that your customer appreciates."
          />
          <Card
            type="light"
            className="card-3"
            icon="/images/icons/innovation.png"
            heading="Innovation"
            description="There is an influx of customers moving towards Online Experience. We need to innovate our platform for them to have a seamless conversion."
          />
        </div>

        <div className="cards-wrapper">
          <Card
            type="light"
            className="card-2"
            icon="/images/icons/automation.png"
            heading="Automation"
            description="Ensure quality upstream with effective QA services and test automation."
          />
          <Card
            type="dark"
            className="card-4"
            icon="/images/icons/customization.png"
            heading="Customization"
            description="We believe brands should have the ability to create and customize powerful e-commerce experiences, across all channels."
          />
        </div>
      </div>
    </AboutUsStyle>
  );
};

export default AboutUs;
