import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const changeMode = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
