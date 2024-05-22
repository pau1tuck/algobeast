import React, { createContext, useState, useContext } from 'react';

// Create the context
const ThemeContext = createContext();

// Export the provider as a functional component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
// Custom hook to use the context
export const useTheme = () => useContext(ThemeContext);
