import React from 'react'
import { Navigate } from 'react-router-dom'
import "../../headers/Lang.css"
import Header from '../../headers/Header'
import LangHeader2 from '../../headers/LangHeader2'

const Reactpage = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div>
            <Header />
            <LangHeader2 />
            <div className='container'>
            <h1>step 1:</h1>
            <h3>Use VScode Editor</h3>
            <p><b>Note :</b>please avoid using notepad for coding. For coding React, use Vscode for best experience and easy to debug(find error)</p>
            <h1>step 2:</h1>
            <h3>Roadmap to Reactjs</h3>
            <a href="https://youtu.be/wsTWSVWi8AM" target="_blank" rel="noreferrer" className="btn btn-info">Click here for Roadmap</a>
            <h3>complete Telugu Skillhub Reactjs video series</h3>
            <a href="https://youtube.com/playlist?list=PLWnZ0qt0PImVaDkDbF96dnRGO0_lXVLKf" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch series of React</a>
            <p><b>Note:</b> watch complete videos of this series and take an overview of below page for minor changes in v5 like Switch --) Routes, useHistory --) useNavigate, Redirect --) Navigate </p>
            <h1>step 3:</h1>
            <h3>React upgraded V5 detail page</h3>
            <a href="https://reactrouter.com/docs/en/v6/upgrading/v5" target="_blank" rel="noreferrer" className="btn btn-info">Click here to get into that page</a>
            <p><b>Note:</b> make sure you look this documentation while getting bugs in video series due to change in version</p>
         
            <h1>step 4:</h1>
            <h3>Projects related to Reactjs</h3>
            <a href="https://youtube.com/playlist?list=PLWnZ0qt0PImVah3_dz1ZXjaONqbwWTgDT" target="_blank" rel="noreferrer" className="btn btn-info">Click here for React projects</a>
            <p><b>Note :</b>everyone must practise this all basics projects for better understanding on Reactjs</p>
            <h1>step 5:</h1>
            <h3>complete Venkatesh Mogili (Telugu) Reactjs video series [ It's Optional ]</h3>
            <a href="https://youtube.com/playlist?list=PLyR4MnfgcsQFta_h6w9SylC2ev_DfRVJd" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch series of React</a>
            <p><b>Note:</b> You can skip this series if you dont wanna learn react through Class based components instead of function based components</p>
            <p><b>Note:</b> You are not allowed to use Hooks in class based components</p>


            <h1>step 6:</h1>
            <h3>complete  Codevolution (English) Reactjs video series [ It's Optional ]</h3>
            <a href="https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" target="_blank" rel="noreferrer" className="btn btn-info">Click here to Watch series of React</a>
            <p><b>Note:</b> You can go through This series for english language </p>
            <p><b>Note:</b> mostly recommended is to go for TeluguSkillHub if you are ok with Telugu</p>
{/* 
            <h1>step 7:</h1>
            <h3>practise This  small logical questions</h3>
            <button  className="btn btn-info">Click here to get questions & answers of that 50 questions in github</button>
            <p><b>Note:</b> under construction</p> */}
            
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    
    )
}

export default Reactpage
