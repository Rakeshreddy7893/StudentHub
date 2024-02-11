import React from 'react'
import { NavLink } from 'react-router-dom'


const LangHeader2 = () => {
    return (
        <div>
            <nav className="navbar bg-skyblue justify-content-center" style={{backgroundColor:"grey"}}>

            <li className="nav-link ">
                <NavLink to="/cLanguage" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    ~ Back
                </NavLink>
            </li>

            <li className="nav-link">
                <NavLink to="/html" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    HTML/CSS
                </NavLink>
            </li>

            <li className="nav-link">
                <NavLink to="/javascript" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Javascript
                </NavLink>
            </li>
            
            <li className="nav-link">
                <NavLink to="/reactjs" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Reactjs
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/nodejs" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Nodejs
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/expressjs" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Expressjs
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/mern" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    MERN
                </NavLink>
            </li>
            
            
            <li className="nav-link">
                <NavLink to="/nextjs" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Nextjs
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/reactnative" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    React native
                </NavLink>
            </li>
            
            <li className="nav-link">
                <NavLink to="/databases" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    More...
                </NavLink>
            </li>
           
            
            
            </nav>
        </div>
    )
}

export default LangHeader2
