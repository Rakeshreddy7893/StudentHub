import React from 'react'
import { NavLink } from 'react-router-dom'


const DBHeader = () => {
    return (
        <div>
            <nav className="navbar bg-dark justify-content-center" style={{backgroundColor:"grey"}}>

            

            <li className="nav-link ">
                <NavLink to="/mysql" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    MySQL
                </NavLink>
            </li>
            
            
            <li className="nav-link ">
                <NavLink to="/mongoDB" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    mongoDB
                </NavLink>
            </li>

            <li className="nav-link ">
                <NavLink to="/mssql" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    MS SQL / SQL Server
                </NavLink>
            </li>

            <li className="nav-link ">
                <NavLink to="/firebase" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Firebase
                </NavLink>
            </li>

            
            
            
            </nav>
        </div>
    )
}

export default DBHeader
