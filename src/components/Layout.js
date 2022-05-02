import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../Contexts/ThemeContext";

//La doppia funzione è necessaria perchè quando utilizzo lo useContext, il componente col contesto non è ancora creato e darebbe errore
//Quindi prima lo creo, e poi lo utilizzo

function Layout({startingTheme, children}){
    return (
        //{Children} renderizza tutti i componenti figli, quindi nel nostro caso Header e Speakers
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
        </ThemeProvider>
    )
}

function LayoutNoThemeProvider({children}) {
    
    const {theme} = useContext(ThemeContext);

    return (
        //{Children} renderizza tutti i componenti figli, quindi nel nostro caso Header e Speakers
            <div className={ theme === "light" ? "container-fluid light" : "container-fluid dark" }>
                {children} 
            </div>
    )
}

export default Layout;