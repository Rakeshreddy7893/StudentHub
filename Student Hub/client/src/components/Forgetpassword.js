import axios from 'axios'
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Forgetpassword = () => {
    const [email,setEmail] = useState("")
    const [auth,setAuth] = useState(false)

    const submitHandler = e =>{
        e.preventDefault();
        console.log(email)
        axios.post("https://vjitstudentshubserver.cyclic.app/forgetpassword",{email:email}).then(
            res => 
            {
                
                if(res.data !== "user not found"){
                    alert(res.data.message)
                    setAuth(true)
                }
                else{
                    alert(res.data)
                }
            }
        )
        setEmail("")
    }

    if(auth){
        return <Navigate to='/resetpassword' />
    }
    return (
        <div>
            
            <nav className="navbar bg-dark justify-content-left">
            <h1 style={{"marginLeft":"5px"}}>
                <Link to='/'>VJIT'ians Hub</Link>
            </h1> 
            <div className="justify-content-left" >
                <h5 >
                    <Link to="/register" className="btn btn-secondary" style={{margin:"12px"}}>Register</Link>
                    <Link to="/login" className="btn btn-secondary" >Login</Link>&nbsp;&nbsp;
                </h5>
            </div>
            
        </nav>
            
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"100px"}} >Forget password</h1>
                <p className="lead"><b>Verify your mail</b></p>
                <form onSubmit={submitHandler}>
                    <input className="form-control-lg m-1 border" style={{width:"40%"}} type="email"    placeholder="Enter email"    name="email" value={email}   onChange={ e => setEmail(e.target.value) } /><br /><br />
                    <input type="submit" className="btn btn-primary" value="Send" />
                </form>
                <p>
                    Don't have any account? <Link to="/register">Sign Up</Link>
                </p>
                <p>
                    <b>Note : </b>Are You an Alumini? <Link to="/forgetpasswordalumini">Forget Password Alumini</Link>
                </p>
            </section>

        </div>
    )
}

export default Forgetpassword
