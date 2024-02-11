
import React,{useEffect, useState} from 'react'
import "../App.css"
import axios from 'axios'
import Header3 from '../headers/Header3'

const Internship = () => {
  
  const [allinternships,setAllinternships] = useState([])
  const [search,setSearch] = useState(null);

  const [presentuser,setpresentuser] = useState("")

   const [data,setData] = useState({
    compName:'',
    compWebsite:'',
    description:'',
    requirements:'',
    mobile:'',
    email:'',
    expDate:'',
    stipend:'',
    applyPage:'',
    role:''
   })

   const {compName,compWebsite,description,requirements,mobile,email,expDate,stipend,applyPage,role} = data

   const changehandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
}

   const internshipsubmithandler = e =>{ 
        e.preventDefault();
        if(compName && compWebsite && description && requirements && mobile && email && expDate && stipend && applyPage && role)
        {
            
            axios.post('https://vjitstudentshubserver.cyclic.app/addinternship',data,{headers : {'x-token' : localStorage.getItem('token')}}).then(
                res =>{ alert(res.data.message); setAllinternships(res.data.update)}
            )

            setData({compName:[''],compWebsite:[''],description:[''],requirements:[''],email:[''],mobile:[''],expDate:[''],stipend:[''],applyPage:[''],role:['']});
        }
        else{
            alert("fill complete details")
        }
    }

  useEffect(()=>{
    axios.get('https://vjitstudentshubserver.cyclic.app/getinternship',{headers : {'x-token' : localStorage.getItem('token')}}).then(
      res => 
      !search ? setAllinternships(res.data) : setAllinternships(res.data.filter(profile => profile.compName.toLowerCase().includes(search.toLowerCase())  | profile.role.toLowerCase().includes(search.toLowerCase()) | profile.requirements.toLowerCase().includes(search.toLowerCase())  )))
      
    

    axios.get('https://vjitstudentshubserver.cyclic.app/getpresentuser',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => 
          setpresentuser(res.data))

  },[search])

  return ( 
    
    <div >
      
      <Header3 />
            
      
      

      <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Internships</h1>
                

            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Browse and connect with Companies <span style={{color:"blue"}}> 🤝 </span></h3>

                    <form className="d-flex" >
                        <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="role / skill / compName" aria-label="Search" />
                        {/* <input className="btn btn-outline-success" type="submit" value="search" /> */}
                    </form>
                    
                </div>
            </nav>

      </section><br />
      <center>
         
      {allinternships.length>=1 ?
      <div className = "row" >
          {allinternships.map((item,index) =>{ 
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
                      <h5 className="card-title" style={{color:"orange"}}><b>{item.compName}</b></h5>
                      
                      {/* <p><b>Company Name : </b>{item.compName}</p> */}
                      <p><b>Website : </b><a href={item.compWebsite} rel="noreferrer" target="_blank">{item.compWebsite}</a></p>
                      <p><b>Description : </b>{item.description}</p>
                      <p><b>Role : </b>{item.role}</p>
                      <p><b>Requirements : </b>{item.requirements}</p>
                      <p><b>Stipend : </b>{item.stipend}</p>
                      <p><b>ExpDate : </b>{item.expDate}</p>
                      <p><b>Mobile : </b>{item.mobile}</p>
                      <p><b>Email : </b>{item.email}</p>
                      <p><b>Apply : </b><a href={item.applyPage} rel="noreferrer" target="_blank">{item.applyPage}</a></p>

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
        <h2 style={{color:"#1C5D99"}}><b>Add Internship:- </b></h2>
            <div className="card bg-light" style={{width:"18rem"}}>
            <form onSubmit={internshipsubmithandler}>
                
                <input className="form-control-lg m-1 border" type="text" placeholder="Company name" name="compName" value={compName} onChange={changehandler} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="Company Website" name="compWebsite" value={compWebsite} onChange={changehandler} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="Description" name="description" value={description} onChange={changehandler} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="Role" name="role" value={role} onChange={changehandler} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="Requirements" name="requirements" value={requirements} onChange={changehandler} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="stipend" name="stipend" value={stipend} onChange={changehandler} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="expire Date" name="expDate" value={expDate} onChange={changehandler} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="mobile" name="mobile" value={mobile} onChange={changehandler} /><br />
                <input className="form-control-lg m-1 border" type="email" placeholder="email" name="email" value={email} onChange={changehandler} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="Apply Link" name="applyPage" value={applyPage} onChange={changehandler} /><br />

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

export default Internship

















