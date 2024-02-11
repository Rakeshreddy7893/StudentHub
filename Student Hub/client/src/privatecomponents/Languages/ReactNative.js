import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../headers/Header'
import LangHeader2 from '../../headers/LangHeader2'
import "../../headers/Lang.css"

const ReactNative = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div >
            <Header />
            <LangHeader2 />
            <div className='container'>
                <br />
                <h3><b>Note : </b>Make sure You Start React Native, Only after the Completion of Reactjs</h3>
            <h1>step 1:</h1>
            <h3>Use Vscode Editor</h3>
            <p><b>Note :</b>please avoid using notepad for coding. For coding Expressjs, use Eclipse for best experience and easy to debug(find error)</p>
            <h1>step 2:</h1>
            <h3>complete Venkatesh mogili (Telugu) React Native video series </h3>
            <a href="https://youtube.com/playlist?list=PLyR4MnfgcsQHMI8QeA9Z9dVUvcqVpCVrj" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch complete videos of ReactNative</a>
            <p><b>Note:</b> Make sure you have glance idea on react before starting React Native</p>
           
            <h3>complete The Net Ninja (English) React Native video series </h3>
            <a href="https://youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch complete videos of ReactNative</a>

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

export default ReactNative
