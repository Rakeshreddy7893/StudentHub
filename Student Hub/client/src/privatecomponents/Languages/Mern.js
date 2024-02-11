import React from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../headers/Header'
import LangHeader2 from '../../headers/LangHeader2'
import "../../headers/Lang.css"

const Mern = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div >
            <Header />
            <LangHeader2 />
            <div className='container'>
            <h1>step 1:</h1>
            <h3>Use VScode Editor</h3>
            <p><b>Note :</b>please avoid using notepad for coding. For coding MERN, use Vscode for best experience and easy to debug(find error)</p>
            <h1>step 2:</h1>
            <h3>complete All playlists of Telugu Skillhub Youtube Channel from Beginning to Ending </h3>
            <a href="https://youtube.com/playlist?list=PLWnZ0qt0PImXks6GNhcFhUfYf3DEKUtFy" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch first playlist</a><br /><br />
            <a href="https://youtube.com/playlist?list=PLWnZ0qt0PImWK-UbiKxC-gXi7XCoXsRXs" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch second playlist</a><br /><br />
            <a href="https://youtu.be/sVrqQ8KKVZQ" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch third playlist</a><br /><br />
            <a href="https://youtu.be/ngc9gnGgUdA" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch Fourth playlist</a><br /><br />
            <p><b>Note:</b> Make sure you have glance Idea on Reactjs, Expressjs before starting MERN</p>
            
            {/* <h1>step 3:</h1>
            <h3>practise This  small logical questions</h3>
            <button  className="btn btn-info">Click here to get questions & answers of that 50 questions in github</button>
            <p><b>Note:</b> under construction</p>
             */}
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Mern
