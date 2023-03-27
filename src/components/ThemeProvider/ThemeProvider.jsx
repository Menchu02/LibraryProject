import React, { useState } from 'react';
import { useContext } from 'react';

export const ThemeContext = React.createContext();

export const ThemeUpDateContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useUpDateContext = () => {
  return useContext(ThemeUpDateContext);
};

export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toogleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpDateContext.Provider value={toogleTheme}>
        {children}
      </ThemeUpDateContext.Provider>
    </ThemeContext.Provider>
  );
}
