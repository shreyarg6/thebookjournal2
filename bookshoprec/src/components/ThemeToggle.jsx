import React from "react";
import { useAppContext } from "../App";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <button onClick={toggleTheme} className={`theme-toggle ${theme}`}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
