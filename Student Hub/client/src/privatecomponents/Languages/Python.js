import React from 'react'
import { Navigate } from 'react-router-dom'
import "../../headers/Lang.css"
import Header from '../../headers/Header'
import LangHeader from '../../headers/LangHeader'

const Python = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div>
            <Header />
            <LangHeader />
            <div className='container'>
            <h1>step 1:</h1>
            <h3>Use pycharm / VScode Editor</h3>
            <p><b>Note :</b>please avoid using notepad for coding. For coding python, use Pycharm/Vscode for best experience and easy to debug(find error)</p>
            <h1>step 2:</h1>
            <h3>complete Telusko (navin reddy) python video series</h3>
            <a href="https://youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch series of python</a>
            <p><b>Note:</b> watch only first 71 videos of this series</p>
            <h1>step 3:</h1>
            <h3>practise This 50 small logical questions</h3>
            <a href="https://github.com/vjitsuc/python-logical" target="_blank" rel="noreferrer" className="btn btn-info">Click here to get questions & answers of that 50 questions in github</a>
            <p><b>Note:</b> Under Construction</p>
            <h1>step 4:</h1>
            <h3>practise This 50 small debuging questions</h3>
            <a href="https://github.com/vjitsuc/python-debugging" target="_blank" rel="noreferrer" className="btn btn-info">Click here to get questions & answers of that 50 questions in github</a>
            <p><b>Note:</b> Under Construction</p>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    
    )
}

export default Python
