import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const themeTogglerStyle = {
    cursor: "pointer"
}

const ThemeToggler = () => {
    const[themeMode, setThemeMode] = useContext(ThemeContext);

    return (
        <div style={themeTogglerStyle} onClick= {()=> {setThemeMode(themeMode === "light" ? "dark" : "light")}}>
            <span title="Switch Theme">
                {themeMode === "light" ? "dark" : "light"}
            </span>
        </div>
    )
}

export default ThemeToggler;