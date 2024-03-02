import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeTogglerStyle = {
    cursor: "pointer"
}

const ThemeToggler = () => {
    const [themeMode,setThemeMode] = useContext(ThemeContext);
    return (
        <div style={ThemeTogglerStyle} onClick={()=>setThemeMode(themeMode === 'light' ? 'dark' : 'light')}>
            <span title="swithc theme">
                {themeMode === 'light' ? 'Dark' : 'Light'}
            </span>
        </div>
    )
}

export default ThemeToggler;