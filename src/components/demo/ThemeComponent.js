import Text from "./Text";
import { useState } from "react";

const ThemeComponent = () => {
   const [theme,setTheme] = useState('red'); 
   const onClickHandler= () => {
    setTheme(theme === 'red' ? 'blue' : 'red');
   }

    return (<div>
        <Text theme="blue"></Text>
        <h1>{theme}</h1>
        <button onClick={onClickHandler}>Change theme</button>
    </div>)
}

export default ThemeComponent