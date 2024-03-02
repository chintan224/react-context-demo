import { useState } from "react";
import Text from "./Text";
import ThemeContext from "./ThemeContext";
import Header from "./Header";
import ThemeInvoker from "./ThemeInvoker";

const ThemeComponent = () => {
   const themehook = useState("light");

    return (
        <ThemeContext.Provider value={themehook}>
            <div>
                <Header/>
                <ThemeInvoker/>
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeComponent;