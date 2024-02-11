import React,{useEffect, useState} from 'react'
import '../App.css'
import axios from 'axios'

import Header3 from '../headers/Header3'

const Resources = () => {
  const [selectedFiles,setSelectedfiles] = useState([])
  const [allresources,setAllresources] = useState([])

  const fileHandler = (e) =>{
    // console.log(e);
    console.log(e.target.files);
    // this.setState({selectedFiles:e.target.files})
    setSelectedfiles(e.target.files)
   }
   const [resourcename,setResourcename] = useState("");
   const [rdescription,setRdescriptionn] = useState("")
   const [appurl,setAppurl] = useState("")
   const [presentuser,setpresentuser] = useState("")

const fileUpload = () =>{  

    if(resourcename && rdescription && appurl){
      for(let i=0;i<selectedFiles.length;i++){
        let formData = new FormData()
        formData.append('file',selectedFiles[i]);
        formData.append('upload_preset','bvfppdbk');
        axios.post('https://api.cloudinary.com/v1_1/drnndbow7/image/upload',formData).then(res =>{
          
          axios.post('https://vjitstudentshubserver.cyclic.app/addresource',{Rname:resourcename,Resourcedescription:rdescription,weburl:appurl,pic:res.data.url},{headers : {'x-token' : localStorage.getItem('token')}}).then(res =>{ console.log(res.data); setAllresources(res.data.update)  });
          alert("Successfully resource Added");
          
        })
      }
      setResourcename("");
      setRdescriptionn("");
      setAppurl("");
    }
    else{
      alert("give valid inputs")
    }
  }

  useEffect(()=>{
    
    axios.get('https://vjitstudentshubserver.cyclic.app/getresource',{headers : {'x-token' : localStorage.getItem('token')}}).then(
      res => setAllresources(res.data)
    )

    axios.get('https://vjitstudentshubserver.cyclic.app/getpresentuser',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setpresentuser(res.data))
  },[])

  return ( 
    
    <div >
      
      <Header3 />
            
      <center>
        <h2 style={{alignItems:"center"}}><b>-: Students Resources :-</b></h2></center><br /><br />
      <center>

       {allresources.length ?  
      <div className = "row" >
          {allresources.map((item,index) =>{ 
              return(
                
                  <div className = "col-md-4 sizee col movement" key={index} >
                  <div className="card" style={{"width": "18rem"}} >
                  <img src={item.pic} style={{border:"3px solid grey"}} height="300px" width="300px" className="card-img-top" alt="img" />
                  <div className="card-body">
                      <h5 className="card-title"><b>{item.Rname}</b></h5>
                      <p>{item.Resourcedescription}</p>
                      <a href={item.weburl} rel="noreferrer" target="_blank" ><button className="btn btn-primary">Click here for more info</button></a>

                  </div>
                  </div>
                  </div>

              )})}
      </div> 
      :
      <h3>Loading...</h3>

      }
      <br />

      { presentuser === "19911A1234" ? 
        <div>
        <h2 style={{color:"#1C5D99"}}><b>Add Resources:- </b></h2>
            <div className="card bg-light" style={{width:"18rem"}}>
            <form className="fileupload">
                <input type="file"  className="inputfile" onChange={fileHandler}/><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="resource name" name="resourcename" value={resourcename} onChange={e => setResourcename(e.target.value)} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="resource description" name="rdescription" value={rdescription} onChange={e => setRdescriptionn(e.target.value)} /><br />
                <input className="form-control-lg m-1 border" type="text" placeholder="website URL" name="appurl" value={appurl} onChange={e => setAppurl(e.target.value)} /><br />
                <input type="button" className="btn btn-primary" onClick={fileUpload} value='upload' />
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

export default Resources

















