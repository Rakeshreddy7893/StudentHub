import React,{useState,useEffect} from 'react'
import { Navigate,useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../headers/Header';

const Indprofile = () => {
    const {id}=  useParams()
    const [message,setMessage] = useState("");
    const [messageSender,setMessageSender] = useState("");
    const [iprofile,setIprofile] = useState(null)
   

    useEffect(()=>{

        axios.get(`https://vjitstudentshubserver.cyclic.app/indprofilee/${id}`,{headers : {'x-token' : localStorage.getItem('token')}}).then(
            res => setIprofile(res.data)
        )
        
        axios.get('https://vjitstudentshubserver.cyclic.app/myprofile',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setMessageSender(res.data.email))

    },[id])


    const submitHandler = e =>{
        e.preventDefault()
        console.log(messageSender,id,message)
        let review = {
            messageSender,
            messageReceiver:id,
            message,
        }
        if(message){
            axios.post('https://vjitstudentshubserver.cyclic.app/addreview',review,{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res => alert(res.data))
            
        }
        else{
            alert("please enter some message")
        }
        setMessage("")
    }

    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
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
                            <h2 style={{"color":"orange"}}><b>{iprofile.fullname}</b></h2>
                            <h3>{iprofile.email}</h3>
                            <h4>{iprofile.collegeId}</h4>
                            <h5><b>branch : </b>{iprofile.branch}</h5>
                            <p><b>Mobile : </b>{iprofile.mobile}</p>
                        </div>
                
                        {iprofile.github!=="-" ? <div><b>Github : </b><a href={iprofile.github} rel="noreferrer"  target="_blank">{iprofile.github}</a></div> : null}
                        {iprofile.linkedin!=="-" ? <div><b>Linkedin : </b><a href={iprofile.linkedin} rel="noreferrer"  target="_blank">{iprofile.linkedin}</a></div> : null}
                            
                          
                            <p>VJIT - Student</p>
                            <h4><u>Skills</u>:-</h4>

                            <ul>
                                {iprofile.skill.split(",").map((skills,index) => {
                                    return <li className="text-primary" key={index} style={{ listStyleType: "none", marginLeft: "-30px" }}>{skills}</li>;
                                }
                                    )}
                            </ul>

                            
                        
                            <div className="card" style={{"width":"80%",boxShadow: "10px 10px 5px lightblue"}}><br />
                            <h1>Projects:-</h1>
                                <center>
                                    <div className="card" style={{"width":"85%",borderRadius:"10px"}}><br />
                                        
                                    {iprofile.project ?  

                                        // <ul>
                                        // {iprofile.project.split(",").map((skills,index) => {
                                        //     return <li key={index} className="text-primary" style={{ listStyleType: "none", marginLeft: "-30px" }}>{skills}</li>;
                                        // }
                                        //     )}

                                        // </ul>
                                        <pre>{iprofile.project}</pre>

                                        : <p>No project Added Yet</p> }
                                    </div>
                                    <br />
                                </center>
                            </div>
                            <br />
                            
                        
                            <div className="card" style={{"width":"80%",boxShadow: "10px 10px 5px lightblue"}}><br />
                            {/* description === Bio */}
                            <h1>Bio :-</h1>
                                <center>
                                    <div className="card" style={{"width":"85%",borderRadius:"10px"}}><br />
                                    {iprofile.description ?   <pre>{iprofile.description}</pre> : <p>No Bio Added Yet</p> }
                                        
                                    </div>
                                    <br />
                                </center>
                            </div>

                            <br />

                            <br />


                            {iprofile.msg  ?
                            
                            <div>

                            { iprofile.msg === "allow" ?

                            <div>

                            <center>
                                        <div className="  card" style={{"width":"20rem",textAlign:"center",boxShadow: "10px 10px 5px lightblue"}}><br />
                                            <h4>Enter Your Message:</h4>
                                            <form onSubmit={submitHandler}>
                                                {/* <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Message to this profile holder" /><br /><br /> */}
                                                <textarea style={{"width":"15rem"}} value={message} placeholder="Enter Message to This Profile" onChange={(e)=> setMessage(e.target.value)}  rows="2" cols="50">
                                                    
                                                </textarea><br />
                                                <input type="submit" className="btn btn-primary" value="send message" /><br /><br />
                                            </form>
                                        </div>
                                        <br /><br /><br /><br /><br />
                            </center>
                            </div>
                            :
                            null}

                            </div>
                            :
                            <div>

                            <center>
                                        <div className="  card" style={{"width":"20rem",textAlign:"center",boxShadow: "10px 10px 5px lightblue"}}><br />
                                            <h4>Enter Your Message:</h4>
                                            <form onSubmit={submitHandler}>
                                                {/* <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Message to this profile holder" /><br /><br /> */}
                                                <textarea style={{"width":"15rem"}} value={message} placeholder="Enter Message to This Profile" onChange={(e)=> setMessage(e.target.value)}  rows="2" cols="50">
                                                    
                                                </textarea><br />
                                                <input type="submit" className="btn btn-primary" value="send message" /><br /><br />
                                            </form>
                                        </div>
                                        <br /><br /><br /><br /><br />
                            </center>

                            </div>
                            
                            }
                        
                </center>
                
            </div>
            

</div>}
        </div>
    )
}

export default Indprofile
