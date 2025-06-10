import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggleButton = () => {
  // Get both the current theme and the function to change it
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 font-semibold rounded-lg shadow-md transition-colors duration-300
                 bg-zinc-800 text-white
                 dark:bg-white dark:text-zinc-800"
      >
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>
    </>
  );
};

export default ThemeToggleButton;
