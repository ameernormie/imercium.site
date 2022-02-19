import React from "react";
import type { AppProps } from "next/app";

import StyledThemeProvider from "../theme/StyledThemeProvider";
import { Footer, Navbar } from "../components";
import { navItems } from "../mockData/navItems";
import { BaseStyle } from "../styles/Base.style";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider>
      <BaseStyle />
      <Navbar navItems={navItems} />
      <Component {...pageProps} />
      <Footer />
    </StyledThemeProvider>
  );
}

export default MyApp;
