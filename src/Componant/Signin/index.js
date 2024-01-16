import { useState } from "react"
import { login } from "../../Config/FireBase"
import { useNavigate } from "react-router-dom"




function Signin() {
    const navigate = useNavigate()
const [email, setEmail]= useState()
const[ password, setPassword]= useState()

const Login = async () =>{
    await login({email, password}).then((res) => {
        console.log("🚀 ~ awaitlogin ~ res:", res)
        if(res && res.user){
            navigate('/')
        }
    	
    }).catch(err => {
        console.log("🚀 ~ awaitlogin ~ err:", err)
     
        
    })
}

return(
    <div>
        <h1>login</h1>
<input onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
<input onChange={(e)=>setPassword(e.target.value)}type="password"  placeholder="Password" />
<br/>
<button onClick={Login} >Login</button>
 <p>
    dont you have account. 
    <span onClick={()=>navigate('/register')} >click here</span>
 </p>
        
    </div>
)

}

export default Signin