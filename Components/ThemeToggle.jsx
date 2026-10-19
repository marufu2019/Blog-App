"use client";
import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-11 h-11 sm:w-[52px] sm:h-[52px] border border-black dark:border-white shadow-[-7px_7px_0px_#000] dark:shadow-[-7px_7px_0px_#fff]
       bg-white dark:bg-black text-black dark:text-white
       flex items-center justify-center cursor-pointer hover:scale-95 transition-all"
    >
      {" "}
      {theme === "light" ? "🌙" : "☀"}
    </button>
  );
};

export default ThemeToggle;
