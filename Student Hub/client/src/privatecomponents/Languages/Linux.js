import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../headers/Header'
import LangHeader3 from '../../headers/LangHeader3'
import "../../headers/Lang.css"

const Linux = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div >
            <Header />
            <LangHeader3 />
            <div className='container'>
            
            <h1>step 1:</h1>
            <h3>complete Sundeep saradhi Kanthey channel's Linux Playlist</h3>
            <a href="https://youtube.com/playlist?list=PLLOxZwkBK52DRvS1wKjAHvbOwLmLDl1Io" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch series on linux</a>
           
            <p><b>Note:</b>Make sure you have perfect mentor and team to guide you and support you in learning Linux</p>
{/* 
            <h1>step 2:</h1>
            <h3>practise This  small logical questions</h3>
            <button  className="btn btn-info">Click here to get questions & answers of that 50 questions in github</button>
            <p><b>Note:</b> under construction</p> */}
            
            
            
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </div>
    )
}

export default Linux
