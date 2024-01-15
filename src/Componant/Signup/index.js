import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {SignUp} from "../../Config/FireBase";


function Signup() {
    const navigate = useNavigate();

    const [fullname, setFullName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const register = ()=>{
        SignUp({email , password , age , fullname})
    } 

    return (
        <div>
            <h2>Signup</h2>

            <input placeholder="Fullname" onChange={(e) => setFullName(e.target.value)}  />
            <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
            <input placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Enter PAssword"  onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={register}  >Signup</button>
         


            <p>
                Already have an account.
                <span onClick={()=> navigate('/Login')} >login</span>
            </p>


        </div>
    )

}

export default Signup;