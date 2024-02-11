import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../headers/Header'
import LangHeader3 from '../../headers/LangHeader3'
import "../../headers/Lang.css"

const Flask = () => {
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

            <h3>complete python life's Flask Playlist</h3>
            <a href="https://youtu.be/oQWkuJhSMCQ" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch series on flask</a>
            <p><b>Note:</b> Make sure you glance idea on python</p>

            <h3>complete code with harry's Flask Playlist</h3>
            <a href="https://youtube.com/playlist?list=PLu0W_9lII9agAiWp6Y41ueUKx1VcTRxmf" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch series on flask</a><br /><br />
            
            
            <h3>complete edureka's Flask Playlist [ it's Optional ]</h3>
            <a href="https://youtu.be/lj4I_CvBnt0" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch series on flask</a>
            <p><b>Note:</b> You can skip this playlist , it is optional</p>
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

export default Flask
