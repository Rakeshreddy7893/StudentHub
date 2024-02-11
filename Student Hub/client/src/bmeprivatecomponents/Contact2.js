import React,{useEffect, useState} from 'react'
import Header2 from '../headers/Header2'
import axios from 'axios'

const Contact2 = () => {

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

    const [presentuser,setpresentuser] = useState("")

    const [supportteam,setSupportteam] = useState([])

    const {problem} = info

    const changeHandler = e =>{
        setInfo({...info,[e.target.name]:e.target.value})
    }

    const problemHandler = e =>{
        e.preventDefault();
        if( problem.length>5 ){
            axios.post('https://vjitstudentshubserver.cyclic.app/addquerybme',info,{
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
            axios.post('https://vjitstudentshubserver.cyclic.app/addsupportteambme',contact,{
                    headers : {
                        'x-token' : localStorage.getItem('token')
                    }
                }).then(res => alert(res.data))

            setContact({name:[''],clgid:[''],position:[''],mobile:[''],email:['']});
        }else{
            alert("please fill valid form");
        }
        
    }
    useEffect(()=>{

        axios.get('https://vjitstudentshubserver.cyclic.app/getsupportteambme',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setSupportteam(res.data))

        axios.get('https://vjitstudentshubserver.cyclic.app/getpresentuserbme',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setpresentuser(res.data))

    },[])

    return (
        <div>
            <Header2 />
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Supporting Team</h1>
                <p className="lead">
                    Contact us for any queries
                </p>


                <div className="profiles ">

                    {supportteam.length>=1 ? 
                    <div>
                     {supportteam.map( (profile,index) => 
                        <div className="profile bg-light card " key={index} style={{margin:"20px",boxShadow: "10px 10px 5px lightblue"}}>
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
                        )}
                    </div>
                    : <h2>Loading...</h2>
                    }
                    
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
                </div>
                    :
                null}

                <br /><br /><br /><br />


            </section>
        </div>
    )
}

export default Contact2
