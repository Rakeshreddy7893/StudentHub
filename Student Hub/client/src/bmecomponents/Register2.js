import React,{useEffect, useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'

const Register2 = () => {
    const [data,seData] = useState({
        fullname : '',
        collegeId : '',
        branch : '',
        email : '',
        mobile : '',
        password : '',
        confirmpassword : ''
    })

    const [batchs,setBatchs] = useState([])
    
    const [x,setX] = useState(0);
    const [k,setK] = useState(0);
    const [nexteventdata,setNexteventdata] = useState("")
    const {fullname,collegeId,branch,email,mobile,password,confirmpassword} = data
    const changeHandler = e =>{ 
        seData({...data,[e.target.name]:e.target.value})
    }
    // const changeHandler2 = e =>{
    //     seData({...data,[e.target.name]:e.target.value.toUpperCase()})
    // }
    const Handler = e =>{
        seData({...data,[e.target.name]:e.target.value})
    }

    const check_roll = (roll_no,branch) => {

        var x;
        if(branch==="CIVIL"){
            let pattern = /^[2][0-9][9][1][1][A][0][1][\d|\w]\d$/g;
            x = false;
            x =  pattern.test(roll_no);
            if(!x){
                pattern = /^[2][0-9][9][1][5][A][0][1][0-1][0-9]$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][1][A][0][1][\d|\w]\d$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][5][A][0][1][0-1][0-9]$/g;
                x = pattern.test(roll_no);
            }
            if(x){
                return true;
            }
            else{
                return false;
            }
        }
        else if(branch==="EEE"){
            let pattern = /^[2][0-9][9][1][1][A][0][2][\d|\w]\d$/g;
            x = false;
            x =  pattern.test(roll_no);
            if(!x){
                pattern = /^[2][0-9][9][1][5][A][0][2][0-1][0-9]$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][1][A][0][2][\d|\w]\d$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][5][A][0][2][0-1][0-9]$/g;
                x = pattern.test(roll_no);
            }
            if(x){
                return true;
            }
            else{
                return false;
            }
        }
        else if(branch==="MECH"){
            let pattern = /^[2][0-9][9][1][1][A][0][3][\d|\w]\d$/g;
            x = false;
            x =  pattern.test(roll_no);
            if(!x){
                pattern = /^[2][0-9][9][1][5][A][0][3][0-1][0-9]$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][1][A][0][3][\d|\w]\d$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][5][A][0][3][0-1][0-9]$/g;
                x = pattern.test(roll_no);
            }
            if(x){
                return true;
            }
            else{
                return false;
            }
        }
        else if(branch==="ECE"){
            let pattern = /^[2][0-9][9][1][1][A][0][4][\d|\w]\d$/g;
            x = false;
            x =  pattern.test(roll_no);
            if(!x){
                pattern = /^[2][0-9][9][1][5][A][0][4][0-1][0-9]$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][1][A][0][4][\d|\w]\d$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][5][A][0][4][0-1][0-9]$/g;
                x = pattern.test(roll_no);
            }
            if(x){
                return true;
            }
            else{
                return false;
            }
        }
        else if(branch==="CSE"){
            let pattern = /^[2][0-9][9][1][1][A][0][5][\d|\w]\d$/g;
            x = false;
            x =  pattern.test(roll_no);
            if(!x){
                pattern = /^[2][0-9][9][1][5][A][0][5][0-1][0-9]$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][1][A][0][5][\d|\w]\d$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][5][A][0][5][0-1][0-9]$/g;
                x = pattern.test(roll_no);
            }
            if(x){
                return true;
            }
            else{
                return false;
            }
        }
        else if(branch==="IT"){
            let pattern = /^[2][0-9][9][1][1][A][1][2][\d|\w]\d$/g;
            x = false;
            x =  pattern.test(roll_no);
            if(!x){
                pattern = /^[2][0-9][9][1][5][A][1][2][0-1][0-9]$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][1][A][1][2][\d|\w]\d$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][5][A][1][2][0-1][0-9]$/g;
                x = pattern.test(roll_no);
            }
            if(x){
                return true;
            }
            else{
                return false;
            }
        }
        else if(branch==="AIE"){
            let pattern = /^[2][0-9][9][1][1][A][3][5][\d|\w]\d$/g;
            x = false;
            x =  pattern.test(roll_no);
            if(!x){
                pattern = /^[2][0-9][9][1][5][A][3][5][0-1][0-9]$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][1][A][3][5][\d|\w]\d$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][5][A][3][5][0-1][0-9]$/g;
                x = pattern.test(roll_no);
            }
            if(x){
                return true;
            }
            else{
                return false;
            }
        }
        else if(branch==="CSEDS"){
            let pattern = /^[2][0-9][9][1][1][A][6][7][\d|\w]\d$/g;
            x = false;
            x =  pattern.test(roll_no);
            if(!x){
                pattern = /^[2][0-9][9][1][5][A][6][7][0-1][0-9]$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][1][A][6][7][\d|\w]\d$/g;
                x =  pattern.test(roll_no);
            }
            if(!x){
                pattern = /^[1][8-9][9][1][5][A][6][7][0-1][0-9]$/g;
                x = pattern.test(roll_no);
            }
            if(x){
                return true;
            }
            else{
                return false;
            }
    
        }
    
    }

   

    const submitHandler = e =>{
        e.preventDefault(); 
        
        if(batchs.length >=1){
            
            var pp = batchs[0].year1.toString()
            var qq = batchs[0].year2.toString()
            var rr = batchs[0].year3.toString()
            var ss = batchs[0].year4.toString()
            var jj = Number(pp) + 1
            var kk = Number(qq) + 1
            var ll = Number(rr) + 1
            var mm = Number(ss) + 1
            console.log(jj,kk,ll,mm)
            var aa = jj + "915A"
            var bb = kk + "915A"
            var cc = ll + "915A"
            var dd = mm + "915A"
            console.log(aa)

            var ee = pp + "915A"
            var ff = qq + "915A"
            var gg = rr + "915A"
            var hh = ss + "915A"
            console.log(ee)
            console.log(collegeId.substr(0,6))
            if(((collegeId.substr(0,2) === pp) && (collegeId.substr(0,6) !== ee)) || ((collegeId.substr(0,2) === qq)&& (collegeId.substr(0,6) !== ff)) || ((collegeId.substr(0,2) === rr)&& (collegeId.substr(0,6) !== gg)) || ((collegeId.substr(0,2) === ss)&& (collegeId.substr(0,6) !== hh)) || (collegeId.substr(0,6) === aa ) || (collegeId.substr(0,6) === bb ) ||(collegeId.substr(0,6) === cc ) ||(collegeId.substr(0,6) === dd ) )
            {
                if(password.length>5 && mobile.length===10){
                    if(fullname && email ){
                        if(password===confirmpassword){
                            if(collegeId && branch && collegeId.length===10){
                                
                                    if(check_roll(collegeId,branch)){
                                        
                                        axios.post('https://vjitstudentshubserver.cyclic.app/registerbme',data,{
                                        headers : {
                                            'x-token' : localStorage.getItem('token')
                                        }
                                        }).then(res =>{ setX(x+1);
                                                        alert(res.data);
                                                        console.log(x) 
                                                    })
                                    }
                                    else{
                                        alert("please choose correct branch respective to your ID")
                                    }
        
                            }
                            else{
                                alert("Please give valid inputs to branch and collegeId")
                            }
        
                        }
                        else{
                            alert("password and confirm password doesnt match")
                        }
                    }
                    else{
                        alert("Please fill the complete form with valid details")
                    }
                }
                else{
                    alert("please use min 6 characters for password and 10 digits for mobile")
                }
                 
            }
            else{
                alert("Sorry your batch is not allowed for this event")
            }
            
            
        }
        else{
            alert("Sorry,Admin had not specified Batches for registration ,plz contact admin to solve this problem")
        }
    }


    useEffect(()=>{
        axios.get('https://vjitstudentshubserver.cyclic.app/getopenregister').then(
            res => {
                if(res.data.length >=1){
                    setK(1);
                }
            }
        )

        axios.get('https://vjitstudentshubserver.cyclic.app/getnextevent').then(
            res => {
                if(res.data.length>=1){
                    setNexteventdata(res.data[0].nextevent)
                }
            }
        )

        axios.get('https://vjitstudentshubserver.cyclic.app/getyears').then(
            res => {
                if(res.data.length>=1){
                    setBatchs(res.data)
                }  
            }
        )

        axios.get('https://vjitstudentshubserver.cyclic.app/getpresentuser',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(
            res => {
                console.log(res.data)
                
                seData({...data,collegeId:res.data})
                
            }
        )


    },[data])

    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div>
            <nav className="navbar bg-dark justify-content-left">
                <h1 style={{"marginLeft":"5px"}}>
                    <Link to='/bme'>VJIT Book My Event</Link>
                </h1>
                <div className="justify-content-left" >
                    <h5 >
                        <Link to="/register2" className="btn btn-secondary" style={{margin:"12px"}}>Register</Link>
                        <Link to="/login2" className="btn btn-secondary" >Login</Link>&nbsp;&nbsp;
                    </h5>
                </div>
            </nav>

            { k === 1 ? <div>
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"30px"}}>Sign Up</h1>
                <p className="lead"><b> Create your Account</b></p>
                <form onSubmit={submitHandler}>
                    <input style={{width:"41%"}} type="text"             placeholder="Name*"            onChange={changeHandler} value={fullname} name="fullname" /><br /><br />
                    <input style={{width:"41%"}} type="text"             placeholder="collegeId*"        value={collegeId} name="collegeId" readOnly /><br /><br />
                    <div style={{"textAlign":"left","border": "1px solid black","padding":"1px",width:"41%"}}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                Branch
                                </h4>
                                <div onChange={Handler}>
                                    <input type="radio" value="AIE" name="branch" /> <span>AIE</span> &nbsp;&nbsp;
                                    <input type="radio" value="IT" name="branch" /> <span>IT</span> &nbsp;&nbsp;
                                    <input type="radio" value="CSE" name="branch" /> <span>CSE</span> &nbsp;&nbsp;
                                    <input type="radio" value="CSEDS" name="branch" /> <span>CSEDS</span> &nbsp;&nbsp;
                                    <input type="radio" value="ECE" name="branch" /> <span>ECE</span> &nbsp;&nbsp;
                                    <input type="radio" value="EEE" name="branch" /> <span>EEE</span> &nbsp;&nbsp;
                                    <input type="radio" value="CIVIL" name="branch" /> <span>CIVIL</span> &nbsp;
                                    <input type="radio" value="MECH" name="branch" /> <span>MECH</span> &nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                    </div><br />
                    <input style={{width:"41%"}} type="email"            placeholder="Email Address*"   onChange={changeHandler} value={email} name="email" /><br /><br />
                    <input style={{width:"41%"}} type="text"             placeholder="mobile*"          onChange={changeHandler} value={mobile} name="mobile" /><br /><br />
                    <input style={{width:"41%"}} type="password"         placeholder="password*"         onChange={changeHandler} value={password} name="password" /><br /><br />
                    <input style={{width:"41%"}} type="confirmpassword"  placeholder="confirm password*" onChange={changeHandler} value={confirmpassword} name="confirmpassword" /><br /><br />

                    <input type="submit" className="btn btn-primary" value="Register" />
                </form>
                <p>
                    Already have an Account? <Link to="/login2">Sign in</Link>
                </p>
            </section>
            </div>
            :
            <div>
                <center>
                    <h2 style={{color:"orange"}}><b>Event Info :-  </b></h2>
                    <h3>{nexteventdata}</h3>
                </center>
            </div>}

            {x===1 ? <Navigate to="/login2" /> : null}
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Register2
