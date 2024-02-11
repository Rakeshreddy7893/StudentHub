import React from 'react'
import { Navigate } from 'react-router-dom'

import Header from '../../headers/Header'
import LangHeader2 from '../../headers/LangHeader2'
import "../../headers/Lang.css"

const Nodejs = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div >
            <Header />
            <LangHeader2 />
            <div className='container'>
            <h1>step 1:</h1>
            <h3>Use VScode Editor</h3>
            <p><b>Note :</b>please avoid using notepad for coding. For coding Expressjs, use Eclipse for best experience and easy to debug(find error)</p>
            <h1>step 2:</h1>
            <h3>complete Telugu Skillhub channel's 1 hr video </h3>
            <a href="https://youtu.be/MY2Vxtfn5Tw" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch complete video of Nodejs</a>
            <p><b>Note:</b> Try to get Glance Idea to ahead for complete basic MERN Appilications</p>
           
           <h3>Complete Telusko channel's 1 hr video</h3>
           <a href="https://youtu.be/vJEO57B05Sg" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch complete video of Nodejs</a>

{/* 
            <h1>step 3:</h1>
            <h3>practise This  small logical questions</h3>
            <button  className="btn btn-info">Click here to get questions & answers of that 50 questions in github</button>
            <p><b>Note:</b> under construction</p>
             */}
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </div>
    )
}

export default Nodejs
