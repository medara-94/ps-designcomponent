import { useState, createContext } from "react";

export const ThemeContext = createContext();


function ThemeProvider({startingTheme, children}) {
    const [theme, setTheme] = useState(startingTheme);

    return (
        //{Children} renderizza tutti i componenti figli, quindi nel nostro caso Header e Speakers
        <ThemeContext.Provider value={{setTheme, theme,}}>
            {children} 
        </ThemeContext.Provider>
    );
}

export {ThemeProvider};