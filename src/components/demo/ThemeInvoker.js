import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import AppTheme from "./Color";

const ThemeInvoker = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return (
        <main style={{
            padding:"1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`
        }}>
            <h1>Heading 1</h1>
            <p>This is a paragraph</p>
            <button>Button</button>
        </main>
    )
}

export default ThemeInvoker;