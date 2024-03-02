import {useState, useContext} from 'react'
import Component2 from './Component2'
import UserContext from './ContextFile';


export default function Component1() {

   // const UserContext = createContext();
    const [user, setNewUser] = useState("Chintan Desai")
    const [count, setCount] = useState(0)

    const [count5, setCount5] = useState(0)

    const togglleUserHandle=() => {
        setNewUser("New User")
    }

    const increaseCount = () => {
        setCount(count+1);
    }

    const readComponent5 = (count5) => {
        setCount5(count5)
    }



    return (
        <>
            <UserContext.Provider value={{user, count, readComponent5}}>
                <h1>Hello {user}</h1>
                <h2>from COmponent 5 {`Hello ${count5} again!`}</h2>
                <button onClick={togglleUserHandle}>Click Me</button>
                <button onClick={increaseCount}>Click Me</button>
                <Component2/>
            </UserContext.Provider>
        </>
    )
}