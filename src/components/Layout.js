import { useState, createContext } from "react";

export const ThemeContext = createContext();

function Layout({startingTheme, children}) {
    const [theme, setTheme] = useState(startingTheme);

    return (
        //{Children} renderizza tutti i componenti figli, quindi nel nostro caso Header e Speakers
        <ThemeContext.Provider value={{setTheme, theme,}}>
            <div className={ theme === "light" ? "container-fluid light" : "container-fluid dark" }>
                {children} 
            </div>
        </ThemeContext.Provider>
    )
}

export default Layout;