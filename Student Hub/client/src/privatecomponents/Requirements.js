import React, { useEffect,useState } from 'react'
import Header from '../headers/Header'
import axios from "axios"
import moment from "moment"


const Contact = () => {
    const [search,setSearch] = useState(null);
    const [presentuser,setpresentuser] = useState("")
    const [data,setData] = useState([])
    const [info,setInfo] = useState({
        skillsreq : '',
        theme : '' 
    })

    const {skillsreq,theme} = info

    const changeHandler = e =>{
        setInfo({...info,[e.target.name]:e.target.value})
    }

    const reqHandler = e =>{
        e.preventDefault();
        if( skillsreq && theme.length>9){
            axios.post('https://vjitstudentshubserver.cyclic.app/addrequirements',info,{
                    headers : {
                        'x-token' : localStorage.getItem('token')
                    }
                }).then(res =>{ alert(res.data.message); setData(res.data.update)})
 
            setInfo({skillsreq:[''],theme:['']});

            
        }
        else{
            alert("give two valid inputs and make sure, Theme should be more than 10 characters")
        }
        
    }

    const deleterequirement = id =>
    {
        axios.delete(`https://vjitstudentshubserver.cyclic.app/deleterequirement/${id}`,{headers : {'x-token' : localStorage.getItem('token')}}).then(
            res =>{ alert(res.data.message); setData(res.data.update)}
        )

        
    }

    useEffect(()=>{
        axios.get('https://vjitstudentshubserver.cyclic.app/getrequirements',{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res => 
                !search ? setData(res.data) : setData(res.data.filter(profile => profile.clgid.includes(search.toUpperCase()) | profile.skillsreq.toLowerCase().includes(search.toLowerCase()) | profile.name.toLowerCase().includes(search.toLowerCase()))))

        axios.get('https://vjitstudentshubserver.cyclic.app/getpresentuser',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setpresentuser(res.data))
    },[search])


    return (
        <div>
            <Header />
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Searching for Team?</h1>
                
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Give your requirements and theme of your project <span style={{color:"blue"}}> ⌨ </span></h3>

                    <form className="d-flex"  >
                        <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="clgId / skill / SName" aria-label="Search" />
                        {/* <input className="btn btn-outline-success" type="submit" value="search" /> */}
                    </form>
                    
                </div>
            </nav>


                <div className="profiles ">

                    { data.length>1 ? 
                    data.map((profile,index) => 
                        <div className="profile bg-light card " key={index} style={{"margin":"15px",boxShadow: "10px 10px 5px lightblue"}}>
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
                                <p><b>Requirements : </b>{profile.skillsreq}</p>
                                <p><b>Theme : </b>{profile.theme}</p>
                                {profile.date ? <div><p><b>Time :</b>{moment(profile.date).fromNow()}</p></div> : null}

                                { presentuser.toString() === profile.clgid.toString() ? <div><button className='btn btn-danger' onClick={()=>deleterequirement(profile._id)}>Delete</button><br /><br /></div> : null}
                                
                            </div>
                            
                        </center>
                        </div>
                        )
                    : <p>Loading...</p>}
                    
                </div><br /><br />
                
                { presentuser[0] !== "A" ?

                
                <div>
                    <center>
                    <h2 style={{color:"purple"}}>Add your Requirements and Theme :</h2>
                    <form onSubmit={reqHandler}>

                        <input type="text" className="form-control-lg m-1 border" placeholder="Requirements" name="skillsreq" onChange={changeHandler} value={skillsreq} /><br />
                        <input type="text" className="form-control-lg m-1 border" placeholder="Theme" name="theme" onChange={changeHandler} value={theme} /> <br /><br />
                        <input type="submit" className="byn btn-success" placeholder="submit" />

                    </form>
                    <br /><br />
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
