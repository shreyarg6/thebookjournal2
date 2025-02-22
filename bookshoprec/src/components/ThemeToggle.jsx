import { useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <button
      className="mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600"
      onClick={toggleTheme}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
