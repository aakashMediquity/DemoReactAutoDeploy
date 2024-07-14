import { useState,useEffect } from "react";
const User = ({name ,location}) =>{
    const [count,setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(()=>{setCount(4)},[])
    // setCount(4);
    return (
    < div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
        <h1>Count ={ count}</h1>
        <h1>Count1 ={count2}</h1>
        <h2>Name {name}</h2>
        <h3>Location :{location}</h3>
        <h4>phone</h4>

    </div>
    )
}

export default User ;