import React from 'react'
import { Navigate } from 'react-router-dom'
import "../../headers/Lang.css"
import Header from '../../headers/Header'
import LangHeader2 from '../../headers/LangHeader2'

const Next = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div>
            <Header />
            <LangHeader2 />
            <div className='container'>
            <br />
            <h3><b>Note : </b>Make sure You Start NextJS, Only after the Completion of Reactjs</h3>
            <h1>step 1:</h1>
            <h3>Use VScode Editor</h3>
            <p><b>Note :</b>please avoid using notepad for coding. For coding Nextjs, use Vscode for best experience and easy to debug(find error)</p>
            <h1>step 2:</h1>
            <h3>complete Codevolution's Nextjs video series</h3>
            <a href="https://youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch series of Nextjs </a>
            <p><b>Note:</b>Make sure You Start Nextjs Only After Reactjs</p>
{/* 
            <h1>step 3:</h1>
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

export default Next
