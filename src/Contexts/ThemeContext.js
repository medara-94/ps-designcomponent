import { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();


function ThemeProvider({startingTheme, children}) {
    //Uso le {} e non le [] come negli useState perchè il return del componente useTheme è un oggetto
    const {theme, setTheme} = useTheme(startingTheme);

    return (
        //{Children} renderizza tutti i componenti figli, quindi nel nostro caso Header e Speakers
        <ThemeContext.Provider value={{setTheme, theme,}}>
            {children} 
        </ThemeContext.Provider>
    );
}

export {ThemeProvider};