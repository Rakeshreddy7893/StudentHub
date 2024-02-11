import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../headers/Header'
import LangHeader from '../../headers/LangHeader'
import "../../headers/Lang.css"

const Academics = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div >
            <Header />
            <LangHeader />
            <div className='container'>
            
            <h1>step 1:</h1>
            <h3>complete Academics Pdfs of every year and every subject</h3>
            <a href="https://drive.google.com/drive/folders/1yM715W3-Zs6l60Sp-_f0E30TlpupQaJm?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-info">Click here to redirect directly</a>
            <p><b>Note:</b> Do contain textbooks and question bank of every subject</p>

            <p>❤♥ Special thanks to <b>2017-2021 Batch ♥❤</b></p>
            
            </div>
            <br /><br /><br /><br /><br /><br />

        </div>
    )
}

export default Academics
