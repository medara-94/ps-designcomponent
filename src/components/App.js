import Header from "./Header";
import { useState, createContext } from "react";
import Speakers from "./Speakers";

export const ThemeContext = createContext();

function App(){
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{setTheme, theme,}}>
            <div className={ theme === "light" ? "container-fluid light" : "container-fluid dark" }>
                <Header  theme={theme}/>
                <Speakers 
                    theme={theme}
                    setTheme={setTheme}
                />
            </div>
        </ThemeContext.Provider>
    )
}

export default App;