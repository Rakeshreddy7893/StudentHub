import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../headers/Header'
import LangHeader3 from '../../headers/LangHeader3'
import "../../headers/Lang.css"
import DBHeader from '../../headers/DBheader'

const Firebase = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div >
            <Header />
            <LangHeader3 />
            <DBHeader />
            <div className='container'>
            
             
            <h1>step 1:</h1>
            <h3>complete freeCodeCamp.org's Firebase 4hr video</h3>
            <a href="https://youtu.be/fgdpvwEWJ9M" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch complete video of Firebase</a>
            <p><b>Note :</b>You can skip the portion of firebase with vanilla javascript and Angular 13 inside the video</p>

            
            <h1>step 2:</h1>
            <h3>A Basic CRUD Operations project using firebase </h3>
            <a href="https://youtu.be/zEdI9L1MZU8" target="_blank" rel="noreferrer" className="btn btn-info">Click here for project</a>


            <h1>step 3:</h1>
            <h3>prefer tutorials point documentation for better understanding on Firebase </h3>
            <a href="https://www.tutorialspoint.com/firebase/firebase_data.htm" target="_blank" rel="noreferrer" className="btn btn-info">Click here to redirect to tutorialspoint</a>

            {/* <h1>step 3:</h1>
            <h3>practise This  small logical questions</h3>
            <button  className="btn btn-info">Click here to get questions & answers of that 50 questions in github</button>
            <p><b>Note:</b> under construction</p> */}
          
            </div>
            
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </div>
    )
}

export default Firebase
