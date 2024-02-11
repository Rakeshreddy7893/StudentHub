import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../headers/Header'
import LangHeader3 from '../../headers/LangHeader3'
import "../../headers/Lang.css"

const Django = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div >
            <Header />
            <LangHeader3 />
            <div className='container'>
           <br />
            <h4><b>Note :</b>please do prefer to go for Reactjs,expressjs,mongodb,nodejs,nextjs for web Developement </h4>

            <h1>step 1:</h1>
            <h3>Use vscode Editor</h3>
            <p><b>Note :</b>please avoid using notepad for coding. use vscode for best experience and easy to debug(find error)</p>

            <h1>step 2:</h1>
            <h3>complete code with harry's Django Playlist</h3>
            <a href="https://youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch series on django</a>
            <p><b>Note:</b> Make sure you glance idea on python</p>

            <h3>complete Telusko's Django Playlist</h3>
            <a href="https://youtube.com/playlist?list=PLsyeobzWxl7r2ukVgTqIQcl-1T0C2mzau" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch series on django</a>
            
            
{/* 
            <h1>step 3:</h1>
            <h3>practise This  small logical questions</h3>
            <button  className="btn btn-info">Click here to get questions & answers of that 50 questions in github</button>
            <p><b>Note:</b> under construction</p> */}
            

            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </div>
    )
}

export default Django
