import React from 'react'
import { NavLink } from 'react-router-dom'


const Header2 = () => {
    return (
        <nav className="navbar bg-dark justify-content-center" style={{backgroundColor:"grey"}}>

            
            <li className="nav-link ">
                <NavLink to="/Dashboard2" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Dashboard
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/profile2" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Profile
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/contact2" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    contact us
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/login" onClick={()=>localStorage.clear()} style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Logout
                </NavLink>
            </li>
           

        </nav>
    )
}

export default Header2
