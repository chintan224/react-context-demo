import Text from "./Text";
import { useState } from "react";
import ThemeContext from "./ThemeContext";
import Header from "./header";
import Main from "./ThemeInvoker";

const ThemeComponent = () => {
    const themeHook = useState("light")

    return (
        <ThemeContext.Provider value={themeHook}>
            <div>
                <Header />
                <Main />
            </div>
        </ThemeContext.Provider>
    )

}

export default ThemeComponent