import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Logo from './Logo'

const Home = () => {
    return (
        <div className='img'>
            <center>

             <Logo /> 
                
                {/* <nav className="navbar bg-dark justify-content-left">
                    <h1 style={{"marginLeft":"5px"}}>
                        <Link to='/'>VJIT Linkedin</Link>
                    </h1>
                    <div className="justify-content-left" >
                        <h5 >
                            <Link to="/register" className="btn btn-secondary" style={{margin:"12px"}}>Register</Link>
                            <Link to="/login" className="btn btn-secondary" >Login</Link>&nbsp;&nbsp;
                        </h5>
                    </div>  
                    
                </nav> */}
                <div className='hom'>
                <section  style={{"marginTop":"170px"}}>
                    
                        <h1  className='home-heading' style={{"paddingTop":"2rem"}} >VJIT Students Hub</h1>
                        <p>
                            create a student profile and find your project patners
                        </p>
                        
                        <Link to='/register' className="btn btn-primary">Signup</Link>&nbsp;&nbsp;&nbsp;
                        <Link to='/login' className="btn btn-success">SignIn</Link>
                    
                 </section>
                </div>
            </center>
        </div>
        
    )
}

export default Home
