import React from 'react'
import { NavLink } from 'react-router-dom'


const Header4 = () => {
    return (
        <nav className="navbar bg-skyblue justify-content-center" style={{backgroundColor:"grey"}}>

            
            <li className="nav-link ">
                <NavLink to="/gdsc" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    GDSC
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/dss" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    DSS
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/codechef" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Codechef
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/photography" onClick={()=>localStorage.clear()} style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Photography
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/nss" onClick={()=>localStorage.clear()} style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    NSS
                </NavLink>
            </li>
           

        </nav>
    )
}

export default Header4
