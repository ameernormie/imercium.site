import type { NextPage } from "next";
import React from "react";

import {
  AboutUs,
  Header,
  SectionWrapper,
  Services,
  CustomerLogosSlider,
  ContactUsForm,
} from "../../components";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <div id="home" />
        <Header />

        <div id="about" />
        <AboutUs />

        {/* Update in future */}
        {/* <CustomerLogosSlider /> */}

        <SectionWrapper
          id="services"
          type="dark"
          heading="OUR SERVICES"
          subheading="Our software development services provide personalized solutions that effectively targets your audience."
        >
          <Services />
        </SectionWrapper>
        <SectionWrapper
          id="contact"
          heading="CONTACT US"
          subheading="We are not far away. You can contact any time for any query or quote, We will respond without delay."
        >
          <ContactUsForm />
        </SectionWrapper>
      </main>
    </div>
  );
};

export default Home;
