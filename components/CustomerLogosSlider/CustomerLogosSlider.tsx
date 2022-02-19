import React from "react";

import "flickity/dist/flickity.min.css";
import {
  CustomerLogosSliderStyle,
  ImageCarouselStyle,
} from "./CustomerLogosSlider.style";

const ImageCarousel = ({ options = {} }: any) => {
  const flickityOptions = {
    wrapAround: true,
    pageDots: false,
    initialIndex: 2,
    ...options,
  };

  return (
    <ImageCarouselStyle
      options={flickityOptions}
      // takes flickity options
    >
      <img className="image" src="/images/header/slider-image1.png" />
      <img className="image" src="/images/header/slider-image2.png" />
      <img className="image" src="/images/header/slider-image3.png" />
      <img className="image" src="/images/header/slider-image4.png" />
    </ImageCarouselStyle>
  );
};

const CustomerLogosSlider = () => {
  return (
    <CustomerLogosSliderStyle>
      <div className="wrapper">
        <section className="left-wrapper">
          <h3>Trusted By The World&apos;s Best Companies</h3>
          <p>We have provided top notch services to our customers.</p>
        </section>

        <ImageCarousel />
      </div>
    </CustomerLogosSliderStyle>
  );
};
export default CustomerLogosSlider;
