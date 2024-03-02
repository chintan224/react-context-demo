import {useContext, useState} from 'react'
import UserContext from './ContextFile'


export default function Component5 (){

    const [count5, setCount5] = useState(1000);
    const data = useContext(UserContext)
    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${data.user} again!`}</h2>
            <h2>{`Count is ${data.count} !`}</h2>
            <button onClick={(() =>data.readComponent5(count5))}>CLick Me</button>
        </>
    )
}