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
            
            
            {/* <li className="nav-link">
                <NavLink to="/mysql" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                   Mysql
                </NavLink>
            </li> */}
            <li className="nav-link">
                <NavLink to="/databases" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                   Databases
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/flask" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                   Flask
                </NavLink>
            </li>
            
            <li className="nav-link">
                <NavLink to="/django" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                   Django
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/numpy" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                   Numpy
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/pandas" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                   Pandas
                </NavLink>
            </li>
            
            <li className="nav-link">
                <NavLink to="/machinelearning" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                   Machine Learning
                </NavLink>
            </li>

            <li className="nav-link">
                <NavLink to="/linux" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                   Linux
                </NavLink>
            </li>

            <li className="nav-link">
                <NavLink to="/os" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                   OS
                </NavLink>
            </li>


            <li className="nav-link">
                <NavLink to="/cn" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                   CN
                </NavLink>
            </li>

            
           
            
            
            </nav>
        </div>
    )
}

export default LangHeader2
