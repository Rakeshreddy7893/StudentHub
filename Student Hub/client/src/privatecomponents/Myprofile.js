import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Header from '../headers/Header';
import "./Myprofile.css"

const Myprofile = () => {
    const [data,setData] = useState (null);
    const [review,setReview] = useState([])
    
    const [m,setM] = useState(0);
    const [n,setN] = useState(0);
    const [s,setS] = useState(0);
    const [e,setE] = useState(0);
    const [p,setP] = useState(0);
    const [c,setC] = useState(0);
    const [t,setT] = useState(0);
    
    
    const [newskill,setNewskill] = useState("")
    const [description,setDescription] = useState("")
    const [project,setProject] = useState("")
    const [newgithub,setNewgithub] = useState("")
    const [newlinkedin,setNewlinkedin] = useState("")
    

    var x="https://studentshubvjit2.netlify.app/indprofile/"
    var y="https://studentshubvjit2.netlify.app/indprofile2/"

    useEffect(()=>{
        axios.get('https://vjitstudentshubserver.cyclic.app/myprofile',{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res => {
                setData(res.data);
                setProject(res.data.project ? res.data.project : "");
                setDescription(res.data.description ? res.data.description : "");
                setNewskill(res.data.skill)
            })

        

        axios.get('https://vjitstudentshubserver.cyclic.app/myreview',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(response => setReview(response.data))

    },[])


    const deletereviewhandler = id =>{
        axios.delete(`https://vjitstudentshubserver.cyclic.app/deletereview/${id}`,{headers : {'x-token' : localStorage.getItem('token')}}).then(
          arr =>{ alert(arr.data.message); setReview(arr.data.update) }
        )
    }

    const deleteHandler = id =>{
        axios.delete(`https://vjitstudentshubserver.cyclic.app/delete/${id}`,{headers : {'x-token' : localStorage.getItem('token')}}).then(
          arr => alert(arr.data)          
        )
        setT(1);
    }

    const mHandler = () =>{
        if(m === 0){
            setM(1)
        }
        if(m === 1){
            setM(0)
        }
    }

    const nHandler = () =>{
        if(n === 0){
            setN(1)
        }
        if(n === 1){
            setN(0)
        }
    }

    const sHandler = () =>{
        if(s === 0){
            setS(1)
        }
        if(s === 1){
            setS(0)
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

    const pHandler = () =>{
        if(p === 0){
            setP(1)
        }
        if(p === 1){
            setP(0)
        }
    }

    const CHandler = () =>{
        if(c === 0){
            setC(1)
        }
        if(c === 1){
            setC(0)
        }
    }


    const githubhandler = e =>{
        e.preventDefault();
        console.log("hiii")
        if(newgithub.substr(0,19) === "https://github.com/" || newgithub.substr(0,19) === "https://Github.com/")
        {
            axios.put(`https://vjitstudentshubserver.cyclic.app/updatemygithub/${data._id}`,{newgithub:newgithub},{headers : {'x-token' : localStorage.getItem('token')}}).then(
                response => {alert(response.data); }
            )
            setNewgithub("")
        }
        else{
            alert('invalid github link plz make sure link starts with https')
        }
    }
  
    const linkedinhandler = e =>{
        e.preventDefault();
        
        if(newlinkedin.substr(0,25) === "https://www.linkedin.com/" )
        {
            
                axios.put(`https://vjitstudentshubserver.cyclic.app/updatemylinkedin/${data._id}`,{newlinkedin:newlinkedin},{headers : {'x-token' : localStorage.getItem('token')}}).then(
                response => {alert(response.data); }
            )
            
        }
        else{
            alert('invalid Linkedin link plz make sure link starts with https')
        }
    }

    const skillsubmithandler = e  =>{
        e.preventDefault();
        
        if(newskill){
            console.log("loop")
            console.log(data._id,newskill)

            axios.put(`https://vjitstudentshubserver.cyclic.app/updatemyprofile/${data._id}`,{newSkill:newskill},{headers : {'x-token' : localStorage.getItem('token')}}).then(
            response => {alert(response.data.message); setData(response.data.update)}
        );
        }
        setNewskill("")
        
    }

    
    const descriptionsubmithandler = e  =>{
        e.preventDefault();

        if(description){
            axios.put(`https://vjitstudentshubserver.cyclic.app/updatemydescription/${data._id}`,{ description:description },{headers : {'x-token' : localStorage.getItem('token')}}).then(
            response => {alert(response.data.message); setData(response.data.update)}
            );
        }
        else{
            alert("Please Enter some content")
        }
        
        setDescription("")
    }


    const projectsubmithandler = e  =>{
        e.preventDefault();

        if(project){
            axios.put(`https://vjitstudentshubserver.cyclic.app/updatemyproject/${data._id}`,{ project:project },{headers : {'x-token' : localStorage.getItem('token')}}).then(
                response => {alert(response.data.message); setData(response.data.update)}
            );
        }
        else{
            alert("Please Enter some content")
        }
        setProject("")
    }

    const msgBHandler = index =>
    {
      
        
        axios.put(`https://vjitstudentshubserver.cyclic.app/msgblock/${index}`).then(
            response => {
            alert(response.data.message); setData(response.data.update)}
        ).catch(error => console.log(error))

        
        
        
    }

    const msgAHandler = index =>
    {
        
        axios.put(`https://vjitstudentshubserver.cyclic.app/msgallow/${index}`).then(
            response => {alert(response.data.message); setData(response.data.update)}
        ).catch(error => console.log(error))
       

    }


    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    
    return (
        <div>
            <Header />

            {data ?
            <div className="profile bg-light card " style={{"margin":"10px"}}>
                <center>
                        <img 
                            className="round-img"
                            src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                            height="250" width="450"
                            alt="userPhoto"
                        />  
                        <div>
                            <h2 style={{"color":"orange"}}><b>{data.fullname}</b></h2>
                            <h3>{data.collegeId}</h3>
                            <h4>{data.branch}</h4>
                            <p>{data.email}</p>
                            <p><b>Mobile : </b>{data.mobile}</p>
                            {data.github!=="-" ? <div><b>Github : </b><a href={data.github} rel="noreferrer" target="_blank">{data.github}</a></div> 
                            : 
                            <div>
                                <button className="btn btn-primary" onClick={()=>mHandler()}>Add Github</button><br /><br />
                                { m === 1 ? 
                                    <div>
                                        <form onSubmit={githubhandler}>
                                        <small>https://github.com/ is must at starting</small><br />
                                            <small><b>Example :</b> https://github.com/tharunkarnekota</small><br />
                                            
                                            <input type="text" placeholder="Enter your github link" name="newgithub" value={newgithub} onChange={e => setNewgithub(e.target.value) } />&nbsp;&nbsp;
                                            <input type="submit" className="btn btn-success" value="submit" />
                                        </form>
                                    </div>
                                    :
                                    null}
                            </div>}
                            {data.linkedin!=="-" ? <div><b>Linkedin : </b><a href={data.linkedin} rel="noreferrer" target="_blank">{data.linkedin}</a></div> 
                            : 
                            <div>
                                <br />
                                <button className="btn btn-primary" onClick={()=>nHandler()}>Add Linkedin</button><br /><br />
                                { n === 1 ? 
                                    <div>
                                        <form onSubmit={linkedinhandler}>
                                        <small>https://www.linkedin.com/ is must at starting</small><br />
                                            <small><b>Example :</b> https://www.linkedin.com/in/tharun-karnekota/</small><br />
                                            <input type="text" placeholder="Enter your linkedin link" name="newlinkedin" value={newlinkedin} onChange={e => setNewlinkedin(e.target.value) } />&nbsp;&nbsp;
                                            <input type="submit" className="btn btn-success" value="submit" />
                                        </form>
                                    </div>
                                    :
                                    null}
                            </div>}
                            <p>India</p>
                            <h4><u>Skills</u>:-</h4>
                        </div>

                        <ul>
                            {data.skill.split(",").map((skills,index) => {
                                return <li key={index} className="text-primary" style={{ listStyleType: "none", marginLeft: "-30px" }}>{skills}</li>;
                            }
                                )}
                            
                        </ul>



                                 <center>
                                    <center>
                                    <div>
                                        <button className="btn btn-success" onClick={()=>  sHandler() }> Edit </button> <br /><br />
                                    </div>
                                    </center>
                                    
                                    { s === 1 ? <div> 
                                            <small>seperate skills with comma(,)</small>
                                            <form onSubmit={skillsubmithandler}>
                                                <input type="text" placeholder="Enter your complete skills" value={newskill} onChange={(e)=> setNewskill(e.target.value)} />&nbsp;
                                                <input type="submit" value="submit" className="btn btn-primary" />
                                            </form><br />
                                        </div> 
                                        : null }
                                </center>


                        

                                <div className="card" style={{"width":"80%",boxShadow: "10px 10px 5px lightblue"}}><br />
                                {/* description === Bio */}
                            <h1>Bio:-</h1>
                            <center>
                                <div className="card" style={{"width":"85%",borderRadius:"10px"}}><br />
                                    {data.description ?   <pre>{data.description}</pre> : <p>No Bio Added Yet</p> }
                                </div>
                                <br />

                                <center>
                                    <center>
                                    { !data.description ? <div><button className="btn btn-success" onClick={()=>  eHandler() }> Add Bio </button> <br /><br /></div> : <div><button className="btn btn-success" onClick={()=>  eHandler() }> Edit </button> <br /><br /></div> }
                                    </center>
                                    
                                    { e ===1 ? <div> 
                                            <form onSubmit={descriptionsubmithandler}>
                                                {/* <input type="text" placeholder="Enter your Bio" value={description} onChange={(e)=> setDescription(e.target.value)} />&nbsp; */}

                                                <textarea className='textareaa' placeholder="Enter your Bio" value={description} onChange={(e)=> setDescription(e.target.value)}  rows="3" cols="50">
                                                    
                                                </textarea><br />
                                                <input type="submit" value="submit" className="btn btn-primary" />
                                            </form><br />
                                        </div> 
                                        : null }
                                </center>
                            </center>
                        </div><br />



                        

                            
                            
                        <div className="card" style={{"width":"80%",boxShadow: "10px 10px 5px lightblue"}}><br />
                            <h1>Projects:-</h1>
                            <center>
                                <div className="card" style={{"width":"85%",borderRadius:"10px"}}><br />
                                    {data.project ?  

                                        <pre>{data.project}</pre>
                                    
                                    : <p>No project Added Yet</p> }


                                    
                                </div>
                                <br />

                                <center>
                                    <center>
                                    { !data.project ? <div><button className="btn btn-success" onClick={()=>  pHandler() }> Add project </button> <br /><br /></div> : <div><button className="btn btn-success" onClick={()=>  pHandler() }> Edit </button> <br /><br /></div> }
                                    </center>
                                    
                                    { p ===1 ? <div> 
                                            <form onSubmit={projectsubmithandler}>
                                                {/* <input type="textarea" placeholder="Enter your project" rows="4" cols="50" value={project} onChange={(e)=> setProject(e.target.value)} />&nbsp; */}
                                                <textarea className='textareaa' value={project} placeholder="Enter your projects info" onChange={(e)=> setProject(e.target.value)}  rows="3" cols="50">
                                                    
                                                </textarea><br />
                                                <input type="submit" value="submit" className="btn btn-primary" />
                                            </form><br />
                                        </div> 
                                        : null }
                                </center>
                            </center>
                        </div><br />


                    </center>




                        <br /><br />
                    <center>
                        <div className="card msg" style={{"width":"80%",boxShadow: "10px 10px 5px lightblue"}}><br />
                        <center>
                            <h2 style={{"color":"palevioletred"}}>Messages From Friends:-</h2><br />
                            </center>
                            {review.length>=1 ?
                                review.map((review,index) =>
                                <div key={index}>
                                    <center>
                                        <div className="card " style={{"width":"85%",textAlign:"center",display:'flex',flexDirection:'row',padding:"15px",overflow: 'auto',boxShadow: "2px 2px 0.5px  black"}}>
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
                                            {review.date ? <div><p><b>Date:</b>{review.date.slice(0,10)}</p></div>: null}
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
                        </center>

                        { data.msg ? 
                        <div>
                        <br />
                        <center>
                            { data.msg === "allow"  ? <div>Not intersted to get messages from others - <button className="btn btn-danger" onClick={()=>  msgBHandler(data._id) }>Block Messages</button><br /><br /></div> : <div>willing to get messages from others - <button className="btn btn-success" onClick={()=>  msgAHandler(data._id) }>Allow Messages</button><br /><br /></div> }
                        </center>
                        </div >

                            :

                            null
                        }
                
            </div>
            :
            <h3 style={{textAlign:"center"}}>Loading...</h3>
            }


            <br />
            <center>
                <button className="btn btn-danger" onClick={()=>  CHandler() }>Delete my Account</button><br /><br />
            </center>

            <center>
                {c === 1 && <div><p><b>Are you sure?</b></p> <button className="btn btn-danger" onClick={()=>  deleteHandler(data._id) }>yes</button> &nbsp;&nbsp; <button className="btn btn-success" onClick={()=> setC(0) }>No</button></div> } <br />
            </center>

            <br /><br /><br /><br /><br />

            { t===1 && <Navigate to='/login' /> }
        </div>
    )
}

export default Myprofile
