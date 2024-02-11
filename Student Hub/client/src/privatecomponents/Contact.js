import React,{useEffect, useState} from 'react'
import Header3 from '../headers/Header3'
import moment from 'moment'

import axios from 'axios'

const Contact = () => {

    const [info,setInfo] = useState({
        problem : ''  
    })

    const [contact,setContact] = useState({
        name:"",
        clgid:"",
        position:"",
        mobile:"",
        email:""
    })
    const {name,clgid,position,mobile,email} = contact
    const contactchangeHandler = e =>{
        setContact({...contact,[e.target.name]:e.target.value})
    }

    const [query,setQuery] = useState([])

    const [presentuser,setpresentuser] = useState("")

    const [supportteam,setSupportteam] = useState([])

    const {problem} = info

    const changeHandler = e =>{
        setInfo({...info,[e.target.name]:e.target.value})
    }

    const problemHandler = e =>{
        e.preventDefault();
        if( problem.length>5 ){
            axios.post('https://vjitstudentshubserver.cyclic.app/addquery',info,{
                    headers : {
                        'x-token' : localStorage.getItem('token')
                    }
                }).then(res => alert(res.data))

            setInfo({problem:['']});
        }else{
            alert("make sure,Problem should be more than 5 characters");
        }
        
    }

    const contactsubmithandler = e =>{  
        e.preventDefault();
        if(name && clgid && position && mobile && email)
        {
            axios.post('https://vjitstudentshubserver.cyclic.app/addsupportteam',contact,{
                    headers : {
                        'x-token' : localStorage.getItem('token')
                    }
                }).then(res =>{ alert(res.data.message); setSupportteam(res.data.update)})

            setContact({name:[''],clgid:[''],position:[''],mobile:[''],email:['']});
        }else{
            alert("please fill valid form");
        }
        
    }

    const deletequery = id =>{
        axios.delete(`https://vjitstudentshubserver.cyclic.app/deletequery/${id}`,{headers : {'x-token' : localStorage.getItem('token')}}).then(
            res => { alert(res.data.message); setQuery(res.data.update)}
        )
    }
    useEffect(()=>{

        axios.get('https://vjitstudentshubserver.cyclic.app/getsupportteam',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setSupportteam(res.data))

        axios.get('https://vjitstudentshubserver.cyclic.app/getpresentuser',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setpresentuser(res.data))

        axios.get('https://vjitstudentshubserver.cyclic.app/getquery',{headers : {'x-token' : localStorage.getItem('token')}}).then(
            res => setQuery(res.data)
            )

    },[])

    return (
        <div>
            <Header3 />
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Supporting Team</h1>
                <p className="lead">
                    Contact us for any queries
                </p>


                <div className="profiles ">

                    {supportteam.length>=1 ? 
                     supportteam.map( (profile,index) => 
                        <div className="profile bg-light card " key={index} style={{"margin":"20px",boxShadow: "10px 10px 5px lightblue"}}>
                        <center>
                            <img 
                                className="round-img"
                                src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                                height="250" width="400"
                                alt="userPhoto"
                            />
                            <div>
                                <h2 style={{"color":"green"}}>{profile.name}</h2>
                                <h3>{profile.clgid}</h3>
                                <h4>{profile.position}</h4>
                                <p><b>Mobile : </b>{profile.mobile}</p>
                                <p><b>Email : </b>{profile.email}</p>
                                
                            </div>
                            
                        </center>
                        </div>
                        )
                    : <h4>Loading...</h4>}
                    
                </div>
                <br /><br />
                
                <center>
                    <h2 style={{color:"purple"}}>Give your problem , we will sort it out for you : </h2>
                    <form onSubmit={problemHandler}>

                        <input type="text" className="form-control-lg m-1 border" placeholder="Problem" name="problem" onChange={changeHandler} value={problem} /><br /><br />
                        <input type="submit" className="byn btn-success" placeholder="submit" />

                    </form>
                    <br /><br />
                </center>

                <br /><br />

                {presentuser === "19911A1234" ?
                <div>
                    <center>
                        <h1>Add New Member to Support team </h1>
                    <form onSubmit={contactsubmithandler}>
                        <input type="text" className="form-control-lg m-1 border" value={name} name="name" placeholder="name" onChange={contactchangeHandler} /><br />
                        <input type="text" className="form-control-lg m-1 border" value={clgid} name="clgid" placeholder="clgId" onChange={contactchangeHandler} /><br />
                        <input type="text" className="form-control-lg m-1 border" value={position} name="position" placeholder="Position" onChange={contactchangeHandler} /><br />
                        <input type="text" className="form-control-lg m-1 border" value={mobile} name="mobile" placeholder="mobile" onChange={contactchangeHandler} /><br />
                        <input type="text" className="form-control-lg m-1 border" value={email} name="email" placeholder="email" onChange={contactchangeHandler} /><br />
                        <input type="submit" className="btn btn-primary" value="submit" /><br /><br />
                    </form>
                    </center>
                        <br /><br />
                        <center>
                    <h2 style={{color:"Brown"}}>Student Queries and Problems :</h2>
                    <div>
                    {query.map( (profile,index) => 
                        <div className="profile bg-light card " key={index} style={{"margin":"10px"}}>
                        <center>
                            
                            <div>
                                
                                <h5><b>collegeID : </b>{profile.clgid}</h5>
                                <h5><b>Student Name : </b>{profile.username}</h5>
                                <h5><b>Problem : </b>{profile.problem}</h5>
                                {profile.date ? <div><p><b>Time :</b>{moment(profile.date).fromNow()}</p></div> : null}
                                
                                <button className="btn btn-danger" onClick={() => deletequery(profile._id)}>Delete</button><br /><br />
                                
                            </div>
                            
                        </center>
                        </div>
                        )}
                    </div>
                    </center>
                </div>
                    :
                null}

                
<br /><br /><br /><br /><br />
  
            </section>
        </div>
    )
}

export default Contact
