import { createContext, useEffect, useState } from "react";

// create a context
const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

// create a provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // This effect runs whenever the `theme` state changes
  useEffect(() => {
    const root = window.document.documentElement;

    // remove old theme class
    root.classList.remove("light", "dark");

    // add new theme class
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
