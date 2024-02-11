import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../headers/Header'
import LangHeader2 from '../../headers/LangHeader2'
import "../../headers/Lang.css"

const Express = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div >
            <Header />
            <LangHeader2 />
            <div className='container'>
            <br />
            <h3><b>Note : </b>Make sure You Start ExpressJS, Only after the Completion of Nodejs</h3>
            <h1>step 1:</h1>
            <h3>Use Vscode Editor</h3>
            <p><b>Note :</b>please avoid using notepad for coding. For coding Expressjs, use Eclipse for best experience and easy to debug(find error)</p>
            <h1>step 2:</h1>
            <h3>complete Telugu Skillhub 1 hr video </h3>
            <a href="https://youtu.be/_jgN80P6YII" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch complete video of Expressjs</a>
            <p><b>Note:</b> Try to get Glance Idea to ahead for complete basic MERN Appilications</p>
            <h1>step 3:</h1>
           <h3>Complete this video For better Understanding on API</h3>
           <a href="https://youtu.be/cOY_4JrtT20" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch complete video on API</a>

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

export default Express
