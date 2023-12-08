import { createContext, useContext, useState } from "react";


const Theme_Context = createContext();

const ThemeProvider = ({children}) => {
const [isDarkMode,setIsDarkMode] = useState(false);

const toggleTheme = ()=> {
    setIsDarkMode((prevMode) => !prevMode)
};

return (
    <Theme_Context.Provider value={{isDarkMode,toggleTheme}}>
        {children}
    </Theme_Context.Provider>
);
};


const useTheme = () => {
    return useContext(Theme_Context);
}

export default {useTheme,ThemeProvider}