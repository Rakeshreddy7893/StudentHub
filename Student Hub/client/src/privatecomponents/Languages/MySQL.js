import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../headers/Header'
import LangHeader3 from '../../headers/LangHeader3'
import "../../headers/Lang.css"
import DBHeader from '../../headers/DBheader'

const Mysql = () => {
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
            <h3>complete Amit Think's mysql 3hr video</h3>
            <a href="https://youtu.be/fFgdnS1laA0" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch complete video of mysql</a>
            <p><b>Note :</b> Every One has to must watch this video</p>


            <h1>step 2:</h1>
            <h3>prefer w3schools documentation for better understanding on sql </h3>
            <a href="https://www.w3schools.com/mysql/mysql_sql.asp" target="_blank" rel="noreferrer" className="btn btn-info">Click here to redirect to w3schools</a>

            {/* <h1>step 3:</h1>
            <h3>practise This  small logical questions</h3>
            <button  className="btn btn-info">Click here to get questions & answers of that 50 questions in github</button>
            <p><b>Note:</b> under construction</p> */}
          
            </div>
            
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </div>
    )
}

export default Mysql
