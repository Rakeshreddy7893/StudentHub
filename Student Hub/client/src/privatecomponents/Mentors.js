import React,{useEffect, useState} from 'react'
import "../App.css"
import axios from 'axios'
import Header from '../headers/Header'

const Mentors = () => {
  
  const [allmentors,setAllmentors] = useState([])

  const [presentuser,setpresentuser] = useState("")

   const [data,setData] = useState({
       mentorname : '',
       clgId:"",
       dept:"",
       mobile:"",
       email:"",
       domains:"",
       expert:""
   })

   const {mentorname,clgId,dept,mobile,email,domains,expert} = data

   const mentorchangehandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
}

   const mentorsubmithandler = e =>{ 
        e.preventDefault();
        if(mentorname && clgId && dept && mobile && email && domains &&expert)
        {
            
            axios.post('https://vjitstudentshubserver.cyclic.app/addmentor',data,{headers : {'x-token' : localStorage.getItem('token')}}).then(
                res => {alert(res.data.message); setAllmentors(res.data.update) }
            )

            setData({mentorname:[''],clgId:[''],dept:[''],mobile:[''],email:[''],domains:[''],expert:['']});
        }
        else{
            alert("fill complete details")
        }
    }

  useEffect(()=>{
    axios.get('https://vjitstudentshubserver.cyclic.app/getmentors',{headers : {'x-token' : localStorage.getItem('token')}}).then(
      res => setAllmentors(res.data)
    )

    axios.get('https://vjitstudentshubserver.cyclic.app/getpresentuser',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setpresentuser(res.data))

  },[])

  return ( 
    
    <div >
      
      <Header />
            
      <center>
        <h2 style={{alignItems:"center"}}><b>-: Students Mentors :-</b></h2></center><br /><br />
      <center>
         
      {allmentors.length>=1 ?
      <div className = "row" >
          {allmentors.map((item,index) =>{ 
              return(
                
                  <div className = "col-md-4 sizee col movement" key={index} >
                  <div className="card" style={{"width": "18rem"}} >
                      <center>
                  <img 
                                className="round-img"
                                src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                                height="100" width="150"
                                alt="userPhoto"
                            />
                  <div className="card-body">
                      <h5 className="card-title" style={{color:"orange"}}><b>{item.mentorname}</b></h5>
                      <p>{item.clgId}</p>
                      <p>{item.dept}</p>
                      <p>{item.mobile}</p>
                      <p>{item.email}</p>
                      <p><b>Domains: </b>{item.domains}</p>
                      <p><b>Expert: </b>{item.expert}</p>

                  </div>
                  </center>
                  </div>
                  </div>

              )})}
      </div> 
      :
      <h4>Loading...</h4>
              }
      <br />

      { presentuser === "19911A1234" ? 
        <div>
        <h2 style={{color:"#1C5D99"}}><b>Add Mentor:- </b></h2>
            <div className="card bg-light" style={{width:"18rem"}}>
            <form onSubmit={mentorsubmithandler}>
                
                <input className="form-control-lg m-1 border" type="text" placeholder="Mentor name" name="mentorname" value={mentorname} onChange={mentorchangehandler} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="college ID" name="clgId" value={clgId} onChange={mentorchangehandler} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="Department" name="dept" value={dept} onChange={mentorchangehandler} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="mobile" name="mobile" value={mobile} onChange={mentorchangehandler} /><br />
                <input className="form-control-lg m-1 border" type="email" placeholder="email" name="email" value={email} onChange={mentorchangehandler} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="Domains" name="domains" value={domains} onChange={mentorchangehandler} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="Expert" name="expert" value={expert} onChange={mentorchangehandler} /><br /><br />

                <input type="submit" className='btn btn-primary' value="submit" /><br /><br />
            </form>
            </div>
        </div>
        :
        null}

      </center>

     <br /><br /><br /><br /><br /><br />

    </div>
  )
}

export default Mentors

















