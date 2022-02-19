import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme";

type StyledThemeProviderProps = {
  children: any;
};

type ThemeContextType = {
  themeType: "dark" | "light";
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeType: "light",
  toggleTheme: () => undefined,
});
export const useThemeContext = () => useContext(ThemeContext);

export default function StyledThemeProvider(props: StyledThemeProviderProps) {
  const { children } = props;

  const [themeType, setThemeType] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setThemeType(themeType === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ themeType, toggleTheme }}>
      <ThemeProvider theme={theme[themeType]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
