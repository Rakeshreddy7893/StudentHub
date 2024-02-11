import React, { useEffect, useState } from 'react'
import Header from '../headers/Header'
// import Projects from "./Projects.json"
import {Link} from "react-router-dom"
import axios from 'axios'

const Project = () => {
    const [search,setSearch] = useState(null);

    const [studentprojects,setStudentprojects] = useState([])

    const [presentuser,setpresentuser] = useState("")

    const [studentproject,setStudentproject] = useState({
        name:"",
        clgid:"",
        category: "",
        projecttitle:"",
        projectdescription:"",
        github:"",
        video:"",
        website:""
    })
    const {name,clgid,category,projecttitle,projectdescription,github,video,website} = studentproject
    const projectchangeHandler = e =>{
        setStudentproject({...studentproject,[e.target.name]:e.target.value})
    }


    const projectsubmithandler = e =>{ 
        e.preventDefault();
        if(name && clgid && projecttitle && projectdescription)
        {
            if(github===""){
                studentproject.github = "-"
            }
            if(video===""){
                studentproject.video = "-"
            }
            if(website===""){
                studentproject.website = "-"
            }

            axios.post('https://vjitstudentshubserver.cyclic.app/addstudentproject',studentproject,{
                    headers : {
                        'x-token' : localStorage.getItem('token')
                    }
                }).then(res => {alert(res.data.message); setStudentprojects(res.data.update)})

            setStudentproject({name:[''],clgid:[''],projecttitle:[''],category:[''],projectdescription:[''],github:[''],video:[''],website:['']});
        }
        else{
            alert("fill complete details")
        }
    }

    useEffect(()=>{

        axios.get('https://vjitstudentshubserver.cyclic.app/getstudentproject',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => 
            !search ? setStudentprojects(res.data) : setStudentprojects(res.data.filter(profile => profile.clgid.includes(search.toUpperCase()) | profile.projecttitle.toLowerCase().includes(search.toLowerCase()) | profile.category.toLowerCase().includes(search.toLowerCase()) | profile.name.toLowerCase().includes(search.toLowerCase()))))

        axios.get('https://vjitstudentshubserver.cyclic.app/getpresentuser',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setpresentuser(res.data))

    },[search])

    

    return (
        <div>
            <Header />
            <section className="container" >
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Students Projects</h1>
                
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Innovations from VJIT <span style={{color:"blue"}}> 🔧 </span></h3>

                    <form className="d-flex"  >
                        <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="clgId / Project / SName" aria-label="Search" />
                        {/* <input className="btn btn-outline-success" type="submit" value="search" /> */}
                    </form>
                    
                </div>
            </nav>

                <div className="profiles " >

                    {studentprojects.length>=1 ? 
                    studentprojects.map((profile,index) => 
                        <div className="profile bg-light card " style={{"margin":"15px",padding:"20px",boxShadow: "10px 10px 5px lightblue"}} key={index}>
                        <center>
                            <img 
                                className="round-img"
                                src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                                height="250" width="400"
                                alt="userPhoto"
                            />
                            <div>
                                <h2 style={{"color":"green"}}>{profile.name}</h2>
                                <h4>{profile.clgid}</h4>
                                {profile.date ? <div><p><b>Date:</b>{profile.date.slice(0,10)}</p></div>: null}
                                <p><b>category : </b>{profile.category}</p>
                                <h4><b>Project {index+1} : </b>{profile.projecttitle}</h4>
                                <p><b>Description : </b>{profile.projectdescription}</p>
                                {profile.github!=="-" ? <div><b>github : </b><a href={profile.github} rel="noreferrer" target="_blank">{profile.github}</a><br /></div> : null}
                                {profile.video!=='-' ? <div><b>video : </b><a href={profile.video} rel="noreferrer" target="_blank">{profile.video}</a><br /></div> : null}
                                {profile.website!=='-' ? <div><b>website : </b><a href={profile.website} rel="noreferrer" target="_blank">{profile.website}</a><br /></div> : null}
                                
                            </div>
                            
                        </center>
                        </div>
                        )
                    : <p>Loading...</p>}
                    
                </div>


            </section>
            <br /><br />
            <center><h4><b>Note : </b><span>Contact </span>
            <Link to="/contact" >
                 Support Team 
            </Link>
               <span> to post your projects</span></h4></center>
            <br /><br />

            {/* <br /><br />
            <center><p><b>Note : </b>Contact 
            <a href="/contact">
                Support Team
            </a>
              to post your projects</p></center>
            <br /><br /> */}


            {presentuser === "19911A1234" ?
                <div>
                    <center>
                        <h1>Add New student Project </h1>
                    <form onSubmit={projectsubmithandler}>
                        <input type="text" className="form-control-lg m-1 border" value={name} name="name" placeholder="name" onChange={projectchangeHandler} /><br />
                        <input type="text" className="form-control-lg m-1 border" value={clgid} name="clgid" placeholder="clgId" onChange={projectchangeHandler} /><br />
                        <input type="text" className="form-control-lg m-1 border" value={category} name="category" placeholder="category" onChange={projectchangeHandler} /><br />
                        <input type="text" className="form-control-lg m-1 border" value={projecttitle} name="projecttitle" placeholder="project Title" onChange={projectchangeHandler} /><br />
                        <input type="text" className="form-control-lg m-1 border" value={projectdescription} name="projectdescription" placeholder="project Description" onChange={projectchangeHandler} /><br />
                        <input type="text" className="form-control-lg m-1 border" value={github} name="github" placeholder="github" onChange={projectchangeHandler} /><br />
                        <input type="text" className="form-control-lg m-1 border" value={video} name="video" placeholder="video" onChange={projectchangeHandler} /><br />
                        <input type="text" className="form-control-lg m-1 border" value={website} name="website" placeholder="website" onChange={projectchangeHandler} /><br />
                        <input type="submit" className="btn btn-primary" value="submit" /><br /><br />
                    </form>
                    </center>
                </div>
                    :  
                null}

<br /><br /><br /><br /><br />
        </div>
    )
}

export default Project
