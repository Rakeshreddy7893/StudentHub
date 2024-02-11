import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../headers/Header'
import LangHeader from '../../headers/LangHeader'
import "../../headers/Lang.css"

const CPP = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div >
            <Header />
            <LangHeader />
            <div className='container'>
            <h1>step 1:</h1>
            <h3>Use VScode Editor</h3>
            <p><b>Note :</b>please avoid using notepad for coding. For coding C Language, use Dev C++ for best experience and easy to debug(find error)</p>

            <h1>step 2:</h1>
           
            
            <h3>complete Apna College playlist of C++ Language and C++ Data Structures</h3>
            <a href="https://youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch complete series of C++ Language and C++ DS</a>
            <p><b>Note:</b>Make sure you complete first 110 videos in the series</p>

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

export default CPP
