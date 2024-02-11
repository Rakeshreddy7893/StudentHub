import React from 'react'
import { Navigate } from 'react-router-dom'
import "../../headers/Lang.css"
import Header from '../../headers/Header'
import LangHeader2 from '../../headers/LangHeader2'

const Html = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div>
            <Header />
            <LangHeader2 />
            <div className="container">
            <h1>step 1:</h1>
            <h3>Use VScode Editor</h3>
            <p><b>Note :</b>please avoid using notepad for coding. For coding HTML, use Vscode for best experience and easy to debug(find error)</p>
            <h1>step 2:</h1>
            <h3>complete EJ Media Tutorial of HTML </h3>
            <a href="https://youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch complete video series of HTML</a>
            <p><b>Note:</b> Make sure you complete all videos in these series Before starting HTML 5 which is mostly similar but little advanced</p>
            <h3>complete Apna College 2hr video of HTML 5</h3>
            <a href="https://youtu.be/HcOc7P5BMi4" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch complete beginner video series of HTML 5</a>
            <h1>step 3:</h1>
            <h3>prefer w3schools documentation for better understanding on HTML </h3>
            <a href="https://www.w3schools.com/html/html_basic.asp" target="_blank" rel="noreferrer" className="btn btn-info">Click here to redirect to w3schools</a>
            <p><b>Note:</b>go through all of them once and mark important points and features in your running notes</p>
            <h1>--------------------------------------------------</h1>
            <h1>step 4:</h1>
            <h3>complete EJ Media Tutorial of CSS</h3>
            <a href="https://youtube.com/playlist?list=PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch complete video series of CSS</a>
            <p><b>Note:</b> Make sure you complete all videos in the series </p>
            <h1>step 5:</h1>
            <h3>prefer w3schools documentation for better understanding on css </h3>
            <a href="https://www.w3schools.com/css/css_howto.asp" target="_blank" rel="noreferrer" className="btn btn-info">Click here to redirect to w3schools</a>
            <p><b>Note:</b> make sure you only study upto 34 options from CSS HOME to CSS image gallery[left side] for beginner level and beyond it was not much important for student perspective</p>
            
            {/* <h1>step 6:</h1>
            <h3>Complete this basic small logical questions</h3>
            <a href="https://github.com/vjitsuc/html-logical" target="_blank" rel="noreferrer" className="btn btn-info">Click here to get questions & answers of that 50 questions in github</a>
            <p><b>Note:</b> under construction </p> */}
            
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Html

