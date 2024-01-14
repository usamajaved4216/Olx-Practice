import { useState } from "react";
import login from "../../Config/FireBase";

function LOGIN() {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const SignIn = ()=>{
        login ({email, password})
    }

    return(
<div>
    <h1>Login SignUp Page</h1>
    <input onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Email" />
    <input onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" /><br/>
    <button onClick={login} >Login</button>
</div>
    )
}

export default LOGIN;



    
