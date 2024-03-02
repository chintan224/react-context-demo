import { useState } from "react";
import C2 from './c2';
import UserContext from "./ContextFile";

const C1 = () => {
    const [user,setUser] = useState('Sachin');
    const [counter,setCounter] = useState(0);

    const toggleUserName = () => {
        setUser('Anupam');
    }

    return (
        <UserContext.Provider value={{user,counter,toggleUserName}}>
            <h1>Hello {user}</h1>
            <button onClick={toggleUserName}>Change User</button>
            <button onClick={() => setCounter(counter+1)}>Increase Counter</button>
            <C2/>
        </UserContext.Provider>
    )
}

export default C1;