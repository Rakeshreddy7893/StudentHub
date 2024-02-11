import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

import Forgetpassword from './components/Forgetpassword'
import Resetpassword from './components/Resetpassword'



import Dashboard from './privatecomponents/Dashboard'
import Myprofile from './privatecomponents/Myprofile'
import Indprofile from './privatecomponents/Indprofile'
import Languages from './privatecomponents/Languages'
import Java from "./privatecomponents/Languages/Java"
import Python from './privatecomponents/Languages/Python'
import Javascript from './privatecomponents/Languages/Javascript'
import Contact from "./privatecomponents/Contact"
import Project from "./privatecomponents/Project"
import Requirements from "./privatecomponents/Requirements"
import Resources from './privatecomponents/Resources'

import Trending from './privatecomponents/Trending'
import Youtube from './privatecomponents/Youtube'
import Nss from './privatecomponents/Nss'
import Clubs from './privatecomponents/Clubs'
import Canteen from './privatecomponents/Canteen'


import Gdsc from './privatecomponents/Gdsc'
import Dss from './privatecomponents/Dss'
import Codechef from './privatecomponents/Codechef'
import Photography from './privatecomponents/Photography'


import Alumini from './privatecomponents/Alumini'
import Aluminiprofile from './privatecomponents/Aluminiprofile'

import Internship from './privatecomponents/Internship'
import CLanguage from './privatecomponents/Languages/CLanguage'
import Html from './privatecomponents/Languages/HTML'
import Reactpage from './privatecomponents/Languages/React'
import Express from './privatecomponents/Languages/Express'
import Mern from './privatecomponents/Languages/Mern'
import Next from './privatecomponents/Languages/Next'
import ReactNative from './privatecomponents/Languages/ReactNative'

import Mentors from './privatecomponents/Mentors'
import Teachers from './privatecomponents/Teachers'

//

import Login2 from './bmecomponents/Login2'
import Register2 from './bmecomponents/Register2'
import Home2 from './bmecomponents/Home2'
import Admin2 from './bmecomponents/Admin2'


import Dashboard2 from './bmeprivatecomponents/Dashboard2'
import Profile2 from './bmeprivatecomponents/Profile2'
import Contact2 from './bmeprivatecomponents/Contact2'
import Indprofile2 from './bmeprivatecomponents/Indprofile2'

import Forgetpasswordalumini from './bmecomponents/Forgetpasswordalumini'
import Resetpasswordalumini from './bmecomponents/Resetpasswordalumini'
import DS from './privatecomponents/Languages/DS'
import CPP from './privatecomponents/Languages/CPP'
import Github from './privatecomponents/Languages/Github'
import Linkedin from './privatecomponents/Languages/Linkedin'
import Hackerrank from './privatecomponents/Languages/Hackerrank'
import Codechef2 from './privatecomponents/Languages/Codechef2'
import Flask from './privatecomponents/Languages/Flask'
import Django from './privatecomponents/Languages/Django'
import Mysql from './privatecomponents/Languages/MySQL'
import ML from './privatecomponents/Languages/MachineLearning'
import Academics from './privatecomponents/Languages/Academics'
import Nodejs from './privatecomponents/Languages/Nodejs'
import Numpy from './privatecomponents/Languages/Numpy'
import Pandas from './privatecomponents/Languages/Pandas'
import Linux from './privatecomponents/Languages/Linux'
import OS from './privatecomponents/Languages/OS'
import CN from './privatecomponents/Languages/CN'
import Databases from './privatecomponents/Languages/Databases'
import MongoDB from './privatecomponents/Languages/MongoDB'
import Mssql from './privatecomponents/Languages/Mssql'
import Firebase from './privatecomponents/Languages/Firebase'
import Placements from './privatecomponents/Placements'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/languages' exact element={<Languages />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/project' exact element={<Project />} />
        <Route path='/requirements' exact element={<Requirements />} />

        <Route path='/python' exact element={<Python />} />
        <Route path='/java' exact element={<Java />} />
        <Route path='/javascript' exact element={<Javascript />} />
        <Route path="/cLanguage" exact element={<CLanguage />} />
        <Route path="/placements" exact element={<Placements />} />
        <Route path="/html" exact element={<Html />} />
        <Route path="/ds" exact element={<DS />} />
        <Route path="/cpp" exact element={<CPP />} />
        <Route path="/github" exact element={<Github />} />
        <Route path="/linkedin" exact element={<Linkedin />} />
        <Route path="/hackerrank" exact element={<Hackerrank />} />
        <Route path="/codechef2" exact element={<Codechef2 />} />
        <Route path="/flask" exact element={<Flask />} />
        <Route path="/django" exact element={<Django />} />
        <Route path="/mysql" exact element={<Mysql />} />
        <Route path="/machineLearning" exact element={<ML />} />
        <Route path="/academics" exact element={<Academics />} />

        <Route path="/reactjs" exact element={<Reactpage />} />
        <Route path="/expressjs" exact element={<Express />}  />
        <Route path='/mern' exact element={<Mern />} />
        <Route path='/nextjs' exact element={<Next />} />
        <Route path="/reactnative" exact element={<ReactNative />} />
        <Route path='/nodejs' exact element={<Nodejs />} />
        <Route path="/numpy" exact element={<Numpy />} />
        <Route path="/pandas" exact element={<Pandas />} />
        <Route path="/linux" exact element={<Linux />} />
        <Route path="/os" exact element={<OS />} />
        <Route path="/cn" exact element={<CN />} />

        <Route path="/databases" exact element={<Databases />} />
        <Route path="/mongodb" exact element={<MongoDB />} />
        <Route path="/mssql" exact element={<Mssql />} />
        <Route path="/firebase" exact element={<Firebase />} />


        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path='/myprofile' exact element={<Myprofile />} />
        <Route path='/aluminiprofile' exact element={<Aluminiprofile />} />
        <Route path='/resources' exact element={<Resources />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/indprofile/:id' exact element={<Indprofile />} />
        <Route path='/indprofile2/:id' exact element={<Indprofile2 />} />


        <Route path='/forgetpassword' exact element={<Forgetpassword />} />
        <Route path='/resetpassword' exact element={<Resetpassword />} />

        <Route path='/forgetpasswordalumini' exact element={<Forgetpasswordalumini />} />
        <Route path='/resetpasswordalumini' exact element={<Resetpasswordalumini />} />


        <Route path='/trending' exact element={<Trending />} />
        <Route path='/Nss' exact element={<Nss />} />
        <Route path='/clubs' exact element={<Clubs />} />
        <Route path='/youtube' exact element={<Youtube />} />
        <Route path='/canteen' exact element={<Canteen />} />

        <Route path='/internship' exact element={<Internship />} />


        <Route path='/gdsc' exact element={<Gdsc />} />
        <Route path='/dss' exact element={<Dss />} />
        <Route path='/codechef' exact element={<Codechef />} />
        <Route path='/photography' exact element={<Photography />} />

        <Route path='/alumini' exact element={<Alumini />} />
        <Route path='/teachers' exact element={<Teachers />} />
        <Route path='/mentors' exact element={<Mentors />} />


        <Route path='/bme' exact element={<Home2 />} />
        <Route path='/admin2' exact element={<Admin2 />} />
        <Route path='/login2' exact element={<Login2 />} />
        <Route path='/register2' exact element={<Register2 />} />
        <Route path='/dashboard2' exact element={<Dashboard2 />} />
        <Route path='/profile2' exact element={<Profile2 />} />
        <Route path='/contact2' exact element={<Contact2 />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
