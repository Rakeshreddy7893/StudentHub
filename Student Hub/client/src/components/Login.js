import React,{useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'


const Login = () => {
    const [auth,setAuth] = useState(false)
    const [auth2,setAuth2] = useState(false)
    const [data,seData] = useState({
        email : '',
        password : '',
    })
    const {email,password} = data
    const changeHandler = e =>{
        seData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('https://vjitstudentshubserver.cyclic.app/login',data).then(
            res => { 
                
                
                if(res.data.token)
                    {
                        localStorage.setItem('token',res.data.token);
                        if(res.data.id[0]==='A'){
                            setAuth2(true)
                        }else{
                            setAuth(true)
                        }
                        
                    }
                else{
                        alert(res.data);
                }}
            )
    }
                                                                                //2 if(localStorage.getItem('token')){
                                                                                //2     return <Redirect to='/dashboard' />
                                                                                //2 }

    if(auth){
        return <Navigate to='/myprofile' />
    }
    if(auth2){
        return <Navigate to='/aluminiprofile' />
    }

    return (

           
        <div className='con' >
        <nav className="navbar bg-dark justify-content-left">
            <h1 className='heading' style={{"marginLeft":"5px"}}>
                <Link to='/'>VJIT'ians Hub</Link>
            </h1>
            <div className="justify-content-left" >
                <h5 >
                    <Link to="/register" className="btn btn-secondary" style={{margin:"12px"}}>Register</Link>
                    <Link to="/login" className="btn btn-secondary" style={{marginRight:"10px"}} >Login</Link>&nbsp;&nbsp;
                </h5>
            </div>
            
        </nav>
        <div  className='box'>             
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"100px","marginBottom":"1rem"  }} >Sign In</h1>
                <p className="lead" style={{"paddingBottom":"1rem"}}><b>Sign into Your Account</b></p>
                <form onSubmit={submitHandler}>
                    <input className="form-control-lg m-1 border" style={{width:"50%"}} type="email"    placeholder="Enter email"    name="email" value={email}   onChange={changeHandler} /><br /><br />
                    <input className="form-control-lg m-1 border" style={{width:"50%"}} type="password" placeholder="Enter password" name="password" value={password} onChange={changeHandler} /><br /><br />
                    <input type="submit" className="btn btn-primary" value="login"  style={{"marginBottom":"1rem"}} />
                </form>
                <p>
                    Don't know password? <Link to="/forgetpassword">Forget Password</Link>
                </p>
                <p className='bottom' style={{"marginBottom":"2rem"}}>
                    Don't have any account? <Link to="/register">Sign Up</Link>
                </p>
            </section>
            </div>
        </div>

    )  
}

export default Login
 