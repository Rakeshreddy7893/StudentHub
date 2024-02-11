import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link,Navigate } from 'react-router-dom'

import Logo from '../components/Logo'

const Home2 = () => {

    const [picture,setPicture] = useState([])
    useEffect(()=>{
        axios.get('https://vjitstudentshubserver.cyclic.app/getposter').then(
            res => { res.data.length>=1 ? setPicture(res.data[res.data.length-1].pic) : setPicture() }
        )
    })

    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div>
            <center>

                <Logo />
                
                <section  style={{"marginTop":"10px"}}>
                    
                        <h1 style={{color:"#FF1B1C"}}><b>-: BOOK MY EVENT :-</b></h1>
                        
                        <p ><b>
                            create a student profile and select your seat for Event
                        </b></p>
                        <img src={picture} alt="Add Poster of the event" width="800px" height="500px" /><br /><br />
                        
                        <Link to='/register2' className="btn btn-primary">Signup</Link>&nbsp;&nbsp;&nbsp;
                        <Link to='/login2' className="btn btn-success">SignIn</Link>&nbsp;&nbsp;&nbsp;
                        <Link to='/admin2' className="btn btn-info">Admin</Link><br /><br /><br /><br />
                        <br /><br /><br />
                        <Link to='/login' onClick={() => localStorage.clear() } className="btn btn-secondary">Logout</Link><br /><br />
                </section>
            </center>
        </div>
        
    )
}

export default Home2
