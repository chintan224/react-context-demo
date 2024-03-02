import { useContext } from "react";
import UserContext from "./ContextFile";


export default function C5() {
    const data = useContext(UserContext);
    return (
        <div>
            <h1>Component 5. Hello {data.user}</h1>
            <h1>Counter {data.counter}</h1>
            <button onClick={data.toggleUserName}>Change User</button>
        </div>
    )
}