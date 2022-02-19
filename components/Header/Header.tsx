import React from "react";

import { HeaderStyle } from "./Header.style";

const Header = () => {
  return (
    <HeaderStyle>
      <section className="header-wrapper">
        <article className="header-content">
          <h1 className="header-title">
            MEET YOUR AMBITIONS WITH OUR <span>SMART</span> SOLUTIONS
          </h1>
          <p className="header-subtitle">
            <b>imercium</b> is an information technology, consulting, and
            e-commerce solutions IT company that helps enterprises use
            innovation and emerging technologies to digitally transform their
            businesses.
          </p>
        </article>

        <article className="header-visual-wrapper">
          <img
            className="header-visual"
            src="/images/header/visualization.png"
            alt="Header Visual"
          />
        </article>
      </section>
    </HeaderStyle>
  );
};

export default Header;
