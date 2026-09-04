import { useState } from "react";  

export const DarkMode =() => {

  const [darkMode, setDarkMode] = useState(false);

    return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
      }}
    >
      <button
        type="button"
        aria-pressed={darkMode}
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? "Switch to light mode" : "Switch to dark mode"}
      </button>
    </div>
  );
}

