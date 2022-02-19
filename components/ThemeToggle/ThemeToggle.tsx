import classNames from "classnames";
import React from "react";

import { useThemeContext } from "../../theme/StyledThemeProvider";
import { ThemeToggleStyle } from "./ThemeToggle.style";

const ThemeToggle = () => {
  const { themeType, toggleTheme } = useThemeContext();

  return (
    <ThemeToggleStyle className={classNames({ dark: themeType === "dark" })}>
      <input
        type="checkbox"
        className="checkbox"
        onChange={() => toggleTheme()}
      />
      <label className="label">
        <img src="/images/navbar/moon.png" className="icon" alt="moon" />
        <img src="/images/navbar/sun.png" className="icon" alt="sun" />
        <div className="ball" />
      </label>
    </ThemeToggleStyle>
  );
};

export default ThemeToggle;
