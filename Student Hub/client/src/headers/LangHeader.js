import React from 'react'
import { NavLink } from 'react-router-dom'


const LangHeader = () => {
    return (
        <div>
            <nav className="navbar bg-skyblue justify-content-center" style={{backgroundColor:"grey"}}>

            <li className="nav-link">
                <NavLink to="/academics" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Academics
                </NavLink>
            </li>

            <li className="nav-link">
                <NavLink to="/placements" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Placements
                </NavLink>
            </li>

            <li className="nav-link ">
                <NavLink to="/cLanguage" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    C Lang
                </NavLink>
            </li>
            
            <li className="nav-link ">
                <NavLink to="/python" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Python
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/java" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Java
                </NavLink>
            </li>

            <li className="nav-link ">
                <NavLink to="/github" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Github
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/linkedin" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    linkedin
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/hackerrank" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    hackerrank
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/codechef2" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                   Codechef
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/ds" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    DS
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/cpp" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    CPP
                </NavLink>
            </li>
            
            
            
            <li className="nav-link">
                <NavLink to="/html" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    More...
                </NavLink>
            </li>
            
            </nav>
        </div>
    )
}

export default LangHeader
