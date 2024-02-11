import React,{useState,useEffect} from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../headers/Header';


const Aluminiprofile = () => {

    const [iprofile,setIprofile] = useState(null)

    var x="https://studentshubvjit2.netlify.app/indprofile/"
    var y="https://studentshubvjit2.netlify.app/indprofile2/"

    const [a,setA] = useState(0);
    const [pg,setPg] = useState("")

    const [b,setB] = useState(0);
    const [experience,setExperience] = useState("")  

    const [c,setC] = useState(0);
    const [project,setProject] = useState("")

    const [d,setD] = useState(0);
    const [bio,setBio] = useState("")

    const [e,setE] = useState(0);
    const [quote,setQuote] = useState("")

    const [f,setF] = useState(0);
    const [skill,setSkill] = useState("")

    const [g,setG] = useState(0);
    const [jobdata,setJobdata] = useState({
        job:"",
        currentcompany: "",
        currentjoblocation : ""
    })
    
    const {job,currentcompany,currentjoblocation} = jobdata

    const [h,setH] = useState(0);
    const [mobile,setMobile] = useState("")

    const [i,setI] = useState(0);
    const [github,setGithub] = useState("")

    const [j,setJ] = useState(0);
    const [linkedin,setLinkedin] = useState("")

    const [review,setReview] = useState([])

    useEffect(()=>{
        
        axios.get('https://vjitstudentshubserver.cyclic.app/myprofile',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res =>{
            setIprofile(res.data);
            setQuote(res.data.quote ? res.data.quote : "");
            setBio(res.data.bio ? res.data.bio : "");
            setExperience(res.data.experience ? res.data.experience : "")
            setProject(res.data.project ? res.data.project : "")
            setSkill(res.data.skill)
        })

        axios.get('https://vjitstudentshubserver.cyclic.app/myreview',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(response => setReview(response.data))

    },[])


    

    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    
    const aHandler = () =>{
        if(a === 0){
            setA(1)
        }
        if(a === 1){
            setA(0)
        }
    }

    const pgHandler = e  =>{
        e.preventDefault();
        if(pg){
            axios.put(`https://vjitstudentshubserver.cyclic.app/addpgA/${iprofile._id}`,{ pg:pg },{headers : {'x-token' : localStorage.getItem('token')}}).then(
                response => {alert(response.data.message); setIprofile(response.data.update)}
            );
            setPg("")
        }
        else{
            alert("Enter Your Post Graduation Details")
        }
    }

    const bHandler = () =>{
        if(b === 0){
            setB(1)
        }
        if(b === 1){
            setB(0)
        }
    }

    const expHandler = e  =>{
        e.preventDefault();
        if(experience){
            axios.put(`https://vjitstudentshubserver.cyclic.app/addexpA/${iprofile._id}`,{ experience:experience },{headers : {'x-token' : localStorage.getItem('token')}}).then(
                response => {alert(response.data.message); setIprofile(response.data.update)}
            );
            setExperience("")
        }
        else{
            alert("Enter your Experience")
        }
    }

    const cHandler = () =>{
        if(c === 0){
            setC(1)
        }
        if(c === 1){
            setC(0)
        }
    }

    const projectHandler = e  =>{
        e.preventDefault();
        if(project){
            axios.put(`https://vjitstudentshubserver.cyclic.app/addprojectA/${iprofile._id}`,{ project:project },{headers : {'x-token' : localStorage.getItem('token')}}).then(
                response => {alert(response.data.message); setIprofile(response.data.update)}
            );
            setProject("")
        }
        else{
            alert("Enter your project")
        }
    }

    const dHandler = () =>{
        if(d === 0){
            setD(1)
        }
        if(d === 1){
            setD(0)
        }
    }

    const bioHandler = e  =>{
        e.preventDefault();
        if(bio){
            axios.put(`https://vjitstudentshubserver.cyclic.app/addbioA/${iprofile._id}`,{ bio:bio },{headers : {'x-token' : localStorage.getItem('token')}}).then(
                response => {alert(response.data.message); setIprofile(response.data.update)}
            );
            setBio("")
        }
        else{
            alert("Enter your bio")
        }
    }

    const eHandler = () =>{
        if(e === 0){
            setE(1)
        }
        if(e === 1){
            setE(0)
        }
    }

    const quoteHandler = e  =>{
        e.preventDefault();
        if(quote){
        axios.put(`https://vjitstudentshubserver.cyclic.app/addquoteA/${iprofile._id}`,{ quote:quote },{headers : {'x-token' : localStorage.getItem('token')}}).then(
            response => {alert(response.data.message); setIprofile(response.data.update)}
        );
        setQuote("")
        }
        else{
            alert("Enter your quote")
        }
    }

    const fHandler = () =>{
        if(f === 0){
            setF(1)
        }
        if(f === 1){
            setF(0)
        }
    }

    const skillHandler = e  =>{
        e.preventDefault();
        if(skill){
        axios.put(`https://vjitstudentshubserver.cyclic.app/addskillA/${iprofile._id}`,{ skill:skill },{headers : {'x-token' : localStorage.getItem('token')}}).then(
            response => {alert(response.data.message); setIprofile(response.data.update)}
        );
        setSkill("")
        }
        else{
            alert("Enter your Skills")
        }
    }

    const gHandler = () =>{
        if(g === 0){
            setG(1)
        }
        if(g === 1){
            setG(0)
        }
    }

    const jobchangeHandler = e =>{
        setJobdata({...jobdata,[e.target.name]:e.target.value})
    }

    const jobHandler = e  =>{
        e.preventDefault();
        if(job && currentcompany && currentjoblocation)
        {
            axios.put(`https://vjitstudentshubserver.cyclic.app/addjobA/${iprofile._id}`,jobdata,{headers : {'x-token' : localStorage.getItem('token')}}).then(
                response => {alert(response.data.message); setIprofile(response.data.update)}
            );
            setJobdata({job:[''],currentcompany:[''],currentjoblocation:['']});
        }
        else{
            alert("Fill Complete Inputs")
        }
        
    }

    const hHandler = () =>{
        if(h === 0){
            setH(1)
        }
        if(h === 1){
            setH(0)
        }
    }

    const mobileHandler = e  =>{
        e.preventDefault();
        if(mobile.length===10){
        axios.put(`https://vjitstudentshubserver.cyclic.app/addmobileA/${iprofile._id}`,{ mobile:mobile },{headers : {'x-token' : localStorage.getItem('token')}}).then(
            response => {alert(response.data.message); setIprofile(response.data.update)}
        );
        setMobile("")
        }
        else{
            alert("Please Enter Valid Mobile nUmber")
        }
    }

    const iHandler = () =>{
        if(i === 0){
            setI(1)
        }
        if(i === 1){
            setI(0)
        }
    }

    const githubHandler = e  =>{
        e.preventDefault();
        if(github.length>=20){
        axios.put(`https://vjitstudentshubserver.cyclic.app/addgithubA/${iprofile._id}`,{ github:github },{headers : {'x-token' : localStorage.getItem('token')}}).then(
            response => {alert(response.data.message); setIprofile(response.data.update)}
        );
        setGithub("")
        }
        else{
            alert("Please Enter Valid github link")
        }
    }

    const jHandler = () =>{
        if(j === 0){
            setJ(1)
        }
        if(j === 1){
            setJ(0)
        }
    }

    const linkedinHandler = e  =>{
        e.preventDefault();
        if(linkedin.length>=20){
        axios.put(`https://vjitstudentshubserver.cyclic.app/addlinkedinA/${iprofile._id}`,{ linkedin:linkedin },{headers : {'x-token' : localStorage.getItem('token')}}).then(
            response => {alert(response.data.message); setIprofile(response.data.update)}
        );
        setLinkedin("")
        }
        else{
            alert("Please Enter Valid Linkedin link")
        }
    }

    const deletereviewhandler = id =>{
        axios.delete(`https://vjitstudentshubserver.cyclic.app/deletereview/${id}`,{headers : {'x-token' : localStorage.getItem('token')}}).then(
            response => {alert(response.data.message); setReview(response.data.update)}
        )
    }
    
    return (
        <div>
             <Header />
             { iprofile && <div>
            
            <div className="profile bg-light card " style={{"margin":"10px"}}>
                <center>
                        <img 
                            className="round-img"
                            src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                            height="250" width="450"
                            alt="pix"
                        />
                        <div>
                            <h2 style={{"color":"orange"}}>{iprofile.fullname}</h2>
                            <h3>{iprofile.email}</h3>
                            <h4>{iprofile.collegeId}</h4>
                            <h5><b>branch : </b>{iprofile.branch}</h5>
                            <p><b>Mobile : </b>{iprofile.mobile}</p>
                            <div>
                                <button className="btn btn-success" onClick={()=>hHandler()}>Edit Mobile Num</button><br /><br />
                                { h === 1 ? 
                                    <div>
                                        <form onSubmit={mobileHandler}>
                                            <input type="text" className="form-control-lg m-1 border" placeholder="Your new Mobile Number" name="mobile" value={mobile} onChange={e => setMobile(e.target.value) } />&nbsp;&nbsp;
                                            <input type="submit" className="btn btn-primary" value="submit" />
                                        </form>
                                        <br />
                                    </div>
                                    :
                                    null}
                            </div>



                            {iprofile.pg ? <div><b>Post Graduation : </b>{iprofile.pg}
                            <br />
                            <div>
                                <button className="btn btn-success" onClick={()=>aHandler()}>Edit PG</button><br /><br />
                                { a === 1 ? 
                                    <div>
                                        <form onSubmit={pgHandler}>
                                            <input type="text" placeholder="Your PostGraduation" name="pg" value={pg} onChange={e => setPg(e.target.value) } />&nbsp;&nbsp;
                                            <input type="submit" className="btn btn-primary" value="submit" />
                                        </form>
                                    </div>
                                    :
                                    null}
                            </div>
                            </div> 
                            : 
                            <div>
                                <button className="btn btn-success" onClick={()=>aHandler()}>Add PG</button><br /><br />
                                { a === 1 ? 
                                    <div>
                                        <form onSubmit={pgHandler}>
                                            <input type="text" placeholder="Your PostGraduation" name="pg" value={pg} onChange={e => setPg(e.target.value) } />&nbsp;&nbsp;
                                            <input type="submit" className="btn btn-primary" value="submit" />
                                        </form>
                                        <br />
                                    </div>
                                    :
                                    null}
                            </div>}


                            {iprofile.job ? <div><b>Job : </b>{iprofile.job}</div> : null}
                            {iprofile.currentcompany ? <div><b>current Company : </b>{iprofile.currentcompany}</div> : null}
                            {iprofile.currentjoblocation ? <div><b>Current Job Location : </b>{iprofile.currentjoblocation}</div> : null}

                            {(!iprofile.job && !iprofile.currentcompany && !iprofile.currentjoblocation) ? 
                                    <div>
                                        <button className="btn btn-success" onClick={()=>gHandler()}>Add Your Job Details</button><br /><br />
                                        { g === 1 ? 
                                            <div>
                                                <form onSubmit={jobHandler}>
                                                    <input type="text" className="form-control-lg m-1 border" placeholder="Job" name="job" value={job} onChange={jobchangeHandler } /><br />
                                                    <input type="text" className="form-control-lg m-1 border" placeholder="Current Company" name="currentcompany" value={currentcompany} onChange={jobchangeHandler } /><br />
                                                    <input type="text" className="form-control-lg m-1 border" placeholder="Current Job Location" name="currentjoblocation" value={currentjoblocation} onChange={jobchangeHandler } /><br />
                                                    <input type="submit" className="btn btn-primary" value="submit" />
                                                </form><br />
                                            </div>
                                            :
                                            null}
                                    </div>
                                        :
                                    <div>
                                        <button className="btn btn-success" onClick={()=>gHandler()}>Edit Job Details</button><br /><br />
                                        { g === 1 ? 
                                            <div>
                                                <form onSubmit={jobHandler}>
                                                    <input type="text" className="form-control-lg m-1 border" placeholder="Job" name="job" value={job} onChange={jobchangeHandler } /><br />
                                                    <input type="text" className="form-control-lg m-1 border" placeholder="Current Company" name="currentcompany" value={currentcompany} onChange={jobchangeHandler } /><br />
                                                    <input type="text" className="form-control-lg m-1 border" placeholder="Current Job Location" name="currentjoblocation" value={currentjoblocation} onChange={jobchangeHandler } /><br />
                                                    <input type="submit" className="btn btn-primary" value="submit" />
                                                </form><br />
                                            </div>
                                            :
                                            null}
                                    </div>}
                        </div><br />
                        
                        {iprofile.github ? <div><b>Github : </b><a href={iprofile.github} rel="noreferrer" target="_blank">{iprofile.github}</a>
                        <br />
                        
                                        <div>
                                                <button className="btn btn-success" onClick={()=>iHandler()}>Edit Github</button><br /><br />
                                                { i === 1 ? 
                                                    <div>
                                                        <form onSubmit={githubHandler}>
                                                            <input type="text" className="form-control-lg m-1 border" placeholder="Your Github" name="github" value={github} onChange={e => setGithub(e.target.value) } />&nbsp;&nbsp;
                                                            <input type="submit" className="btn btn-primary" value="submit" />
                                                        </form>
                                                    </div>
                                                    :
                                                    null}
                                            </div>

                                            </div>
                                            :
                                            <div>
                                                <button className="btn btn-success" onClick={()=>iHandler()}>Add Github</button><br /><br />
                                                { i === 1 ? 
                                                    <div>
                                                        <form onSubmit={githubHandler}>
                                                            <input type="text" className="form-control-lg m-1 border" placeholder="Your Github" name="github" value={github} onChange={e => setGithub(e.target.value) } />&nbsp;&nbsp;
                                                            <input type="submit" className="btn btn-primary" value="submit" />
                                                        </form>
                                                        <br />
                                                    </div>
                                                    :
                                                    null}
                                            </div>}

                        {iprofile.linkedin ? <div><b>Linkedin : </b><a href={iprofile.linkedin} rel="noreferrer" target="_blank">{iprofile.linkedin}</a><br />
                                        <div>
                                                <button className="btn btn-success" onClick={()=>jHandler()}>Edit Linkedin</button><br /><br />
                                                { j === 1 ? 
                                                    <div>
                                                        <form onSubmit={linkedinHandler}>
                                                            <input type="text" className="form-control-lg m-1 border" placeholder="Your Linkedin" name="linkedin" value={linkedin} onChange={e => setLinkedin(e.target.value) } />&nbsp;&nbsp;
                                                            <input type="submit" className="btn btn-primary" value="submit" />
                                                        </form>
                                                        <br />
                                                    </div>
                                                    :
                                                    null}
                                            </div>

                                            </div>
                                            :
                                            <div>
                                                <button className="btn btn-success" onClick={()=>jHandler()}>Add Linkedin</button><br /><br />
                                                { j === 1 ? 
                                                    <div>
                                                        <form onSubmit={linkedinHandler}>
                                                            <input type="text" className="form-control-lg m-1 border" placeholder="Your Linkedin" name="linkedin" value={linkedin} onChange={e => setLinkedin(e.target.value) } />&nbsp;&nbsp;
                                                            <input type="submit" className="btn btn-primary" value="submit" />
                                                        </form>
                                                    </div>
                                                    :
                                                    null}
                                            </div>}
                            
                          
                            <p>VJIT - Student</p>
                            <h4><u>Skills</u>:-</h4>

                            <ul>
                                {iprofile.skill.split(",").map((skills,index) => {
                                    return <li key={index} className="text-primary" style={{ listStyleType: "none", marginLeft: "-30px" }}>{skills}</li>;
                                }
                                    )}
                            </ul>
                            <div>
                                <button className="btn btn-success" onClick={()=>fHandler()}>Edit skills</button><br /><br />
                                { f === 1 ? 
                                    <div>
                                        <form onSubmit={skillHandler}>
                                            <input type="text" className="form-control-lg m-1 border" placeholder="Your skills" name="skill" value={skill} onChange={e => setSkill(e.target.value) } />&nbsp;&nbsp;
                                            <input type="submit" className="btn btn-primary" value="submit" />
                                        </form>
                                        <br />
                                    </div>
                                    :
                                    null}
                            </div>


                            <div className="card" style={{"width":"80%",boxShadow: "10px 10px 5px lightblue"}}><br />
                            <h1>Experience:-</h1>
                                <center>
                                    <div className="card" style={{"width":"85%",borderRadius:"10px"}}><br />
                                        {iprofile.experience ? <div>
                                            {/* <ul>
                                                {iprofile.experience.split(",").map((skills,index) => {
                                                    return <li key={index} className="text-primary" style={{ listStyleType: "none", marginLeft: "-30px",color:"black" }}>{skills}</li>;
                                                }
                                                    )}
                                            </ul> */}
                                            <pre>{iprofile.experience}</pre>

                                            <div>
                                                <button className="btn btn-success" onClick={()=>bHandler()}>Edit Experience</button><br /><br />
                                                { b === 1 ? 
                                                    <div>
                                                        <form onSubmit={expHandler}>
                                                            {/* <input type="text" className="form-control-lg m-1 border" placeholder="Your Experience" name="experience" value={experience} onChange={e => setExperience(e.target.value) } />&nbsp;&nbsp; */}
                                                            <textarea className='textareaa' placeholder="Enter your experience info" value={experience} onChange={(e)=> setExperience(e.target.value)}  rows="3" cols="50">
                                                    
                                                            </textarea><br />
                                                            <input type="submit" className="btn btn-primary" value="submit" />
                                                        </form><br />
                                                    </div>
                                                    :
                                                    null}
                                            </div>

                                            </div>
                                            :
                                            <div>
                                                <button className="btn btn-success" onClick={()=>bHandler()}>Add Experience</button><br /><br />
                                                { b === 1 ? 
                                                    <div>
                                                        <form onSubmit={expHandler}>
                                                            {/* <input type="text" className="form-control-lg m-1 border" placeholder="Your PostGraduation" name="experience" value={experience} onChange={e => setExperience(e.target.value) } />&nbsp;&nbsp; */}
                                                            <textarea className='textareaa' placeholder="Enter your experience info" value={experience} onChange={(e)=> setExperience(e.target.value)}  rows="3" cols="50">
                                                    
                                                            </textarea><br />
                                                            <input type="submit" className="btn btn-primary" value="submit" />
                                                        </form><br />
                                                    </div>
                                                    :
                                                    null}
                                            </div>
                                        }
                                    </div>
                                    <br />
                                </center>
                            </div>
                            <br />
                            
                        
                            <div className="card" style={{"width":"80%",boxShadow: "10px 10px 5px lightblue"}}><br />
                            <h1>Projects:-</h1>
                                <center>
                                    <div className="card" style={{"width":"85%",borderRadius:"10px"}}><br />
                                        {iprofile.project ? <div>
                                            {/* <ul>
                                                {iprofile.project.split(",").map((skills,index) => {
                                                    return <li key={index} className="text-primary" style={{ listStyleType: "none", marginLeft: "-30px",color:"black" }}>{skills}</li>;
                                                }
                                                    )}
                                            </ul> */}
                                            <pre>{iprofile.project}</pre>
                                            <div>
                                                <button className="btn btn-success" onClick={()=>cHandler()}>Edit Projects</button><br /><br />
                                                { c === 1 ? 
                                                    <div>
                                                        <form onSubmit={projectHandler}>
                                                            {/* <input type="text" className="form-control-lg m-1 border" placeholder="Your Projects" name="project" value={project} onChange={e => setProject(e.target.value) } />&nbsp;&nbsp; */}
                                                            <textarea className='textareaa' placeholder="Enter your projects info" value={project} onChange={(e)=> setProject(e.target.value)}  rows="3" cols="50">
                                                    
                                                            </textarea><br />
                                                            <input type="submit" className="btn btn-primary" value="submit" />
                                                        </form><br />
                                                    </div>
                                                    :
                                                    null}
                                            </div>

                                            </div>
                                            :
                                            <div>
                                                <button className="btn btn-success" onClick={()=>cHandler()}>Add Projects</button><br /><br />
                                                { c === 1 ? 
                                                    <div>
                                                        <form onSubmit={projectHandler}>
                                                            {/* <input type="text" className="form-control-lg m-1 border" placeholder="Your Projects" name="project" value={project} onChange={e => setProject(e.target.value) } />&nbsp;&nbsp; */}
                                                            <textarea className='textareaa' placeholder="Enter your projects info" value={project} onChange={(e)=> setProject(e.target.value)}  rows="3" cols="50">
                                                    
                                                            </textarea><br />
                                                            <input type="submit" className="btn btn-primary" value="submit" />
                                                        </form><br />
                                                    </div>
                                                    :
                                                    null}
                                            </div>
                                        }
                                    </div>
                                    <br />
                                </center>
                            </div>
                            <br />
                            
                        
                            <div className="card" style={{"width":"80%",boxShadow: "10px 10px 5px lightblue"}}><br />
                            <h1>Bio:-</h1>
                                <center>
                                    <div className="card" style={{"width":"85%",borderRadius:"10px"}}><br />
                                    {iprofile.bio ?
                                        <div>
                                            <pre>{iprofile.bio}</pre>
                                            <div>
                                                <button className="btn btn-success" onClick={()=>dHandler()}>Edit Bio</button><br /><br />
                                                { d === 1 ? 
                                                    <div>
                                                        <form onSubmit={bioHandler}>
                                                            {/* <input type="text" className="form-control-lg m-1 border" placeholder="Your Bio" name="bio" value={bio} onChange={e => setBio(e.target.value) } />&nbsp;&nbsp; */}
                                                            <textarea className='textareaa' placeholder="Enter your bio" value={bio} onChange={(e)=> setBio(e.target.value)}  rows="3" cols="50">
                                                    
                                                            </textarea><br />
                                                            <input type="submit" className="btn btn-primary" value="submit" />
                                                        </form><br />
                                                    </div>
                                                    :
                                                    null}
                                            </div>

                                        </div>
                                            :
                                            <div>
                                                <button className="btn btn-success" onClick={()=>dHandler()}>Add Bio</button><br /><br />
                                                { d === 1 ? 
                                                    <div>
                                                        <form onSubmit={bioHandler}>
                                                            {/* <input type="text" className="form-control-lg m-1 border" placeholder="Your Bio" name="bio" value={bio} onChange={e => setBio(e.target.value) } />&nbsp;&nbsp; */}
                                                            <textarea className='textareaa' placeholder="Enter your bio" value={bio} onChange={(e)=> setBio(e.target.value)}  rows="3" cols="50">
                                                    
                                                            </textarea><br />
                                                            <input type="submit" className="btn btn-primary" value="submit" />
                                                        </form><br />
                                                    </div>
                                                    :
                                                    null}
                                            </div>
                                    }
                                        
                                    </div>
                                    <br />
                                </center>
                            </div>

                            <br />




                            
                            <div className="card" style={{"width":"80%",boxShadow: "10px 10px 5px lightblue"}}><br />
                            <h1>Quote:-</h1>
                                <center>
                                    <div className="card" style={{"width":"85%",borderRadius:"10px"}}><br />
                                    {iprofile.quote ?
                                        <div>
                                            <pre>{iprofile.quote}</pre>
                                            <div>
                                                <button className="btn btn-success" onClick={()=>eHandler()}>Edit Quote</button><br /><br />
                                                { e === 1 ? 
                                                    <div>
                                                        <form onSubmit={quoteHandler}>
                                                            {/* <input type="text" className="form-control-lg m-1 border" placeholder="best Quote" name="quote" value={quote} onChange={e => setQuote(e.target.value) } />&nbsp;&nbsp; */}
                                                            <textarea className='textareaa' placeholder="Enter your best Quote" value={quote} onChange={(e)=> setQuote(e.target.value)}  rows="3" cols="50">
                                                    
                                                            </textarea><br />
                                                            <input type="submit" className="btn btn-primary" value="submit" />
                                                        </form><br />
                                                    </div>
                                                    :
                                                    null}
                                            </div>

                                        </div>
                                            :
                                            <div>
                                                <button className="btn btn-success" onClick={()=>eHandler()}>Add Quote</button><br /><br />
                                                { e === 1 ? 
                                                    <div>
                                                        <form onSubmit={quoteHandler}>
                                                            {/* <input type="text" className="form-control-lg m-1 border" placeholder="best Quote" name="quote" value={quote} onChange={e => setQuote(e.target.value) } />&nbsp;&nbsp; */}
                                                            <textarea className='textareaa' placeholder="Enter your best Quote" value={quote} onChange={(e)=> setQuote(e.target.value)}  rows="3" cols="50">
                                                    
                                                            </textarea><br />
                                                            <input type="submit" className="btn btn-primary" value="submit" />
                                                        </form><br />
                                                    </div>
                                                    :
                                                    null}
                                            </div>
                                    }
                                        
                                    </div>
                                    <br />
                                </center>
                            </div>

                            <br />
                            <br /><br />

                        <div className="card" style={{"width":"80%",boxShadow: "10px 10px 5px lightblue"}}><br />
                            <h2 style={{"color":"palevioletred"}}>Messages From Friends:-</h2><br />

                            {review.length>=1 ?
                                review.map((review,index) =>
                                <div key={index}>
                                    <center>
                                        <div className="card " style={{"width":"85%",textAlign:"center",display:'flex',flexDirection:'row',padding:"15px",overflow: 'auto'}}>
                                            <div style={{width:"90%",alignItems:"center"}}>
                                            {review.messageSenderclgId ?
                                            <div>
                                                {review.messageSenderclgId.length === 10 ? 
                                                    <div>
                                                    {review.messageSenderId ? <div><a href={x+review.messageSenderId}><h4 >{review.messageSender}</h4> </a></div>
                                                        :
                                                    <h4 >{review.messageSender}</h4> }
                                                    </div>
                                                    :
                                                    <div>
                                                    {review.messageSenderId ? <div><a href={y+review.messageSenderId}><h4 >{review.messageSender}</h4> </a></div>
                                                        :
                                                    <h4 >{review.messageSender}</h4> }
                                                    </div>}
                                            </div>
                                            :
                                            <h4 >{review.messageSender}</h4> }
                                            <pre >{review.message}</pre>
                                            </div>
                                            <div style={{width:"10%",alignItems:"center",marginTop:'10px'}}>
                                                <button className="btn btn-danger" onClick={()=>deletereviewhandler(review._id)}>X</button>
                                            </div>

                                        </div>
                                        <br />
                                    </center>
                                </div>
                                    )
                            :
                                <p>No Message received yet</p>
                            }
                            
                        </div><br />
                            
                            <br />
                           
                        
                </center>
                
            </div>
            

</div>}
        </div>
    )
}

export default Aluminiprofile
