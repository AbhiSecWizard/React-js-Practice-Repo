import { createContext, useContext, useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) =>
      prevTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkLight = () => {
  const { theme, handleToggle } = useContext(ThemeContext);

  return (
    <div
      className={`h-[400px] w-[300px] ${
        theme === "dark"
          ? "bg-black text-red-800"
          : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl">
        Card Head{" "}
        <button className="px-3 py-2" onClick={handleToggle}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </div>
  );
};