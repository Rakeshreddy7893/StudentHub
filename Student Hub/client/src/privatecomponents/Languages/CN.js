import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../headers/Header'
import LangHeader3 from '../../headers/LangHeader3'
import "../../headers/Lang.css"

const CN = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div >
            <Header />
            <LangHeader3 />
            <div className='container'>
            {/* <h1>step 1:</h1>
            <h3>Use vscode Editor</h3>
            <p><b>Note :</b>please avoid using notepad for coding. use vscode for best experience and easy to debug(find error)</p> */}

            <h1>step 1:</h1>
            <h3>complete Neso Academy's Computer Networks playlist </h3>
            <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch video on CN</a>
            

            <h1>step 2:</h1>
            <h3>complete Gate Smasher's Computer Networks playlist </h3>
            <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch video on CN</a>
            

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

export default CN
