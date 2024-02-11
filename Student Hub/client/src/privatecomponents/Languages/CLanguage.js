import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../headers/Header'
import LangHeader from '../../headers/LangHeader'
import "../../headers/Lang.css"

const CLanguage = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div >
            <Header />
            <LangHeader />
            <div className='container'>
            <h1>step 1:</h1>
            <h3>Use DevC++ Editor</h3>
            <p><b>Note :</b>please avoid using notepad for coding. For coding C Language, use Dev C++ for best experience and easy to debug(find error)</p>
            
            <h1>step 2:</h1>
            <h3>complete Apna College 10hr Video of C Language [ Mandatory* ] </h3>
            <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch 10hr video of C Language</a>
            <p><b>Note:</b>It would better to watch this video atleast once for further better understanding in C</p>

            <h1>step 3:</h1>
            <h3>complete Neso Academy playlist of C Language </h3>
            <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch complete series of C Language</a>
            <p><b>Note:</b>Make sure you complete all the videos atleast once in the series for basic Idea and for Strong basement</p>

            {/* <h1>step 3:</h1>
            <h3>practise This  small logical questions</h3>
            <button  className="btn btn-info">Click here to get questions & answers of that 50 questions in github</button>
            <p><b>Note:</b> under construction</p>
            <h1>step 4:</h1>
            <h3>practise This  small debuging questions</h3>
            <button  className="btn btn-info">Click here to get questions & answers of that 50 questions in github</button>
            <p><b>Note:</b> under construction</p> */}
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </div>
    )
}

export default CLanguage
