import { useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <button onClick={toggleTheme}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
