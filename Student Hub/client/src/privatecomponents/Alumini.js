import React,{useState,useEffect} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import Header3 from "../headers/Header3"

const Alumini = () => {
    const [search,setSearch] = useState(null);
    const [data,setData] = useState ([]);
  
    const [presentuser,setpresentuser] = useState("")
    
    const [aluminidata,setAluminidata] = useState({
        fullname:"",
        email:"",
        collegeId:"",
        mobile:"",
        skill:"",
        branch:"",
        job:"---",
        currentjoblocation:"---",
        currentcompany:"---",
        password:"",
        confirmpassword:""
    })  

    const {fullname,collegeId,email,mobile,skill,branch,job,currentcompany,currentjoblocation,password,confirmpassword} = aluminidata
    
    useEffect(()=>{

        axios.get('https://vjitstudentshubserver.cyclic.app/allaluminis',{headers : {'x-token' : localStorage.getItem('token')}}).then(res => 
                !search ? setData(res.data) : setData(res.data.filter(profile => profile.collegeId.includes(search.toUpperCase()) | profile.skill.toLowerCase().includes(search.toLowerCase()) | profile.job.toLowerCase().includes(search.toLowerCase())  |  profile.currentcompany.toLowerCase().includes(search.toLowerCase()) |  profile.currentjoblocation.toLowerCase().includes(search.toLowerCase()) | profile.branch.includes(search.toUpperCase()))))
        
        axios.get('https://vjitstudentshubserver.cyclic.app/getpresentuser',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setpresentuser(res.data))

    },[search])

    

    const aluminichangeHandler = e =>{
        setAluminidata({...aluminidata,[e.target.name]:e.target.value})
    }

    const aluminisubmithandler = e =>{
        e.preventDefault();
        if(collegeId && email && fullname && mobile && skill && branch && password && confirmpassword )
        {
            axios.post("https://vjitstudentshubserver.cyclic.app/aluminiregister",aluminidata).then(
                res => { console.log(res.data.update); alert(res.data.message); }
            )  
            
            setAluminidata({...aluminidata,fullname:[''],collegeId:[''],email:[''],mobile:[''],branch:[''],password:[''],confirmpassword:[''],skill:['']});
        }
        else{
            alert("please fill valid info")
        }
    }
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    



    const searchHandler = e =>{
        e.preventDefault();
        console.log(search);
        axios.get('https://vjitstudentshubserver.cyclic.app/allaluminis').then(res => 
                !search ? console.log(res.data) : console.log(res.data.filter(profile => profile.collegeId===search | profile.email.toLowerCase()===search | profile.branch.toUpperCase()===search)))
                
    }

    
    
    return (
        <div>
            <Header3 />
            
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Alumini's Hub</h1>
                

            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Browse and connect with Alumini <span style={{color:"blue"}}> 🤝 </span></h3>

                    <form className="d-flex" onSubmit={searchHandler} >
                        <input className="form-control me-2" type="text" onChange={e => setSearch(e.target.value)} placeholder="clgId /comp /skill /branch" aria-label="Search" />
                        <input className="btn btn-outline-success" type="submit" value="search" />
                    </form>
                    
                </div>
            </nav>


                <div className="profiles ">
                <div className = "row" >
                    {data.length>=1 ? 
                    data.map((profile,index) => 
                        <div className='col-md-4' key={index}>
                        <div className="profile bg-light card " style={{"margin":"10px","width": "20rem",boxShadow: "10px 10px 5px lightblue"}}>
                        <center>
                            <img 
                                className="round-img"
                                src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                                height="100" width="150"
                                alt="userPhoto"
                            />
                            <div>
                                <h2 style={{"color":"green"}}>{profile.fullname}</h2>
                                <h3>{profile.collegeId}</h3>
                                <h4>{profile.branch}</h4>
                                {profile.pg ? <p>{profile.pg}</p>: <p>---</p>}
                                {profile.job ? <p>{profile.job}</p>: <p>---</p>}
                                {profile.currentcompany ? <p>{profile.currentcompany}</p>: <p>---</p>}
                                {profile.currentjoblocation ? <p>{profile.currentjoblocation}</p>: <p>---</p>}
                                
                                {/* <p>{profile.mobile}</p>*/}
                                <Link to={`/indprofile2/${profile._id}`} className="btn btn-primary">View Profile</Link>
                            </div>

                            <ul>
                                {profile.skill.split(",").map((skill,index) => <li key={index} className="text-primary" style={{listStyleType:"none",marginLeft:"-30px"}}>{skill}</li>
                                    )}
                                
                            </ul>
                        </center>
                        </div>
                        </div>
                        )
                    : <h4>Loading...</h4>}
                </div>
                </div>
                <br /><br />


                
                    {presentuser === "19911A1234" ?
                    <div>
                        <center>
                            <h1>Add New Alumini profile </h1>
                        <form onSubmit={aluminisubmithandler}>
                            <input type="text" className="form-control-lg m-1 border" value={fullname} name="fullname" placeholder="fullname" onChange={aluminichangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={collegeId} name="collegeId" placeholder="collegeId [A-]" onChange={aluminichangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={branch} name="branch" placeholder="branch" onChange={aluminichangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={email} name="email" placeholder="Email" onChange={aluminichangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={mobile} name="mobile" placeholder="Mobile" onChange={aluminichangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={skill} name="skill" placeholder="skills" onChange={aluminichangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={job} name="job" placeholder="job" onChange={aluminichangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={currentcompany} name="currentcompany" placeholder="current Company" onChange={aluminichangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={currentjoblocation} name="currentjoblocation" placeholder="current  Job Location" onChange={aluminichangeHandler} /><br />
                            <input type="password" className="form-control-lg m-1 border" value={password} name="password" placeholder="password" onChange={aluminichangeHandler} /><br />
                            <input type="password" className="form-control-lg m-1 border" value={confirmpassword} name="confirmpassword" placeholder="confirmpassword" onChange={aluminichangeHandler} /><br />
                            <input type="submit" className="btn btn-primary" value="submit" /><br /><br />
                        </form>
                        </center>
                    </div>
                    :
                    null
                    }

                    <br /><br /><br /><br /><br /><br /><br />
                

            </section>

    

        </div>
    )
}

export default Alumini
