import { useState } from "react";

export default function Home(props) {

    const [count, setcount] = useState(0)
    /* const [name, setname] = useState("");
    const [password, setPassword] = useState(""); */
    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) =>{
        //console.log(e.target);
        const name = e.target.name;
        const value = e.target.value;
        //console.log(name,value);
        setState((prev)=>{
            return({...prev,[name]:value})
        })
       
    };
    function increment() {
        console.log("increment");
        setcount(count+1)
    }

    console.log(state);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <form>
                <h1>login</h1>
                <label>name</label><input type="text" name="username" htmlFor="name"  onChange={handleChange} />
                <label>Password</label><input type="password" name="password" htmlFor="Password"  onChange={handleChange}/>
                <button type="submit" >Login</button>
            </form>
        </div>
    )
    
}