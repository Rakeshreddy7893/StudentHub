import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../headers/Header'
import LangHeader from '../headers/LangHeader'
import "../headers/Lang.css"

const Placements = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div >
            <Header />
            <LangHeader />
            <div className='container'>
            <br /><br />
            <h1>step 1:</h1>
            <h3>Java Theory : </h3>
            <a href='https://drive.google.com/drive/folders/1rduyrfk6iBHpHDwT0RGmyHuy_RP077RD?usp=sharing' rel="noreferrer" target="_blank"  >Click here</a><br /><br />
            <h1>step 2:</h1>
            <h3>Java Coding : </h3>
            <a href='https://drive.google.com/drive/folders/1nCzBaCDDQx7NNI_NgjFKKKBQu-1u2GY0' rel="noreferrer" target="_blank"  >Click here</a><br /><br />
            <h1>step 3:</h1>
            <h3>DBMS questions : </h3>
            <a href='https://docs.google.com/document/d/158XdtRFHR3bOFlVv45xUw6dzklyT5mVf/edit' rel="noreferrer" target="_blank"  >Click here</a><br /><br />
            <h1>step 4:</h1>
            <h3>SQL theory questions : </h3>
            <a href='https://docs.google.com/document/d/1PW2Q-zZF-WBPPTyoXECvs-5f8kKyICi6/edit' rel="noreferrer" target="_blank"  >Click here</a>
            <h3>SQL commands : </h3>
            <a href='https://docs.google.com/document/d/1ybo6Gb7ygIz-7vDLg2kjpkhTgAfHM-2p/edit' rel="noreferrer" target="_blank"  >Click here</a><br /><br />
            
            <h1>step 5:</h1>
            <h3>Operating Systems questions : </h3>
            <a href='https://docs.google.com/document/d/1RZUySAt0ciRZ9xKE6alH65WKlXiL9PTQ/edit' rel="noreferrer" target="_blank"  >Click here</a><br /><br />
            <h1>step 6:</h1>
            <h3>Computer networking questions : </h3>
            <a href='https://docs.google.com/document/d/19d7E7IDyAJ7qEcONH1fJQEKbn96IZNGl/edit' rel="noreferrer" target="_blank"  >Click here</a><br /><br />
            
            <h1>step 7:</h1>
            <h3>HR questions : </h3>
            <a href='https://docs.google.com/document/d/1vdELmP1AOkQoy5QQ6Oi8XrImjac7tIkc/edit' rel="noreferrer" target="_blank"  >Click here</a>
            
            
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </div>
    )
}

export default Placements
