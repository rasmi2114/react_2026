import {  useEffect, useState } from "react";  

export const DarkMode =() => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("Dark mode:", darkMode);
  }, [darkMode]);

  const handleDarkMode = () => {
    //setDarkMode((isDarkMode) => !isDarkMode);
    if(darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  return (
    <div style={{ backgroundColor: darkMode ? "black" : "white" }}>
      <button onClick={handleDarkMode}>
        Black Background
      </button>
    </div>
  );
}

