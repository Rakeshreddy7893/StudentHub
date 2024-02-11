const express = require('express');
const mongoose = require('mongoose');
const users = require('./usermodel')
const aluminimodel = require('./aluminimodel')
const jwt = require('jsonwebtoken');
const middleware = require('./middleware')
const reviewmodel = require('./reviewmodel')
// const descriptionmodel = require('./descriptionmodel');
const cors = require('cors');

// const projectmodel = require('./Projectmodel')
const wantedmodel = require('./wantedmodel')
const contactmodel = require('./contactmodel')
const supportteammodel = require('./supportteammodel')
const studentprojectmodel = require('./studentprojectmodel')
const resourcemodel = require('./resourcemodel')
const teachersmodel = require('./teachersmodel')
const mentorsmodel = require('./mentorsmodel')
const adminbmemodel = require('./adminbmemodel')

const registerloginmodel = require('./registerloginmodel')

const sendEmail = require('./sendmail')
const crypto = require('crypto')


////

const usersbme = require('./usermodel2') 
const seatmodel = require('./seatmodel')
const poster = require('./poster')
const contactmodelbme = require('./contactmodel2')
const supportteammodelbme = require('./supportteammodel2')
const openregistermodel = require('./openregister')
const nexteventmodel = require('./nexteventmodel')
const yearmodel = require('./yearmodel')


const auditoriummodel = require('./auditoriummodel');
const seatmodelC = require('./seatmodelC');
const seatmodelA = require('./seatmodelA')
const seatmodelE = require('./seatmodelE')

const dotenv = require('dotenv');
const Internshipmodel = require('./Internshipmodel');

const app = express();

dotenv.config()
const PORT = process.env.PORT || 5000


// mongoose.connect(process.env.CONNECTION_URL).then(
//     ()=> console.log('Db connected..')
// )

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.CONNECTION_URL);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

app.use(express.json());
app.use(cors({origin:"*"}));


app.get('/',(req,res)=>{
    res.send('Hello to VJIT Students HUB cyclic API 25-12-2022 12:53');
})



app.post('/register',async (req,res) =>{
    try{
        const { fullname,collegeId,branch,email,mobile,github,linkedin,skill,password,confirmpassword } = req.body;
        const exist = await users.findOne({email});
        if(exist){
            return res.status(200).send('user already registered')
        }
        const existId = await users.findOne({collegeId});
        if(existId){
            return res.status(200).send('this collegeID already registered')
        }
        if(password !== confirmpassword){
            return res.status(400).send('password invalid')
        }

        let newUser = new users({
            fullname,collegeId,branch,email,mobile,github,linkedin,skill,password,
            confirmpassword,
            msg:"allow"
        })
        newUser.save();
        return res.status(200).send('User Registered Successfully')
    }
    catch(err){
        console.log(err)
        return res.status(500).send('register Server Error')
    }
})


app.put('/msgblock/:id', async (req,res)=>{
    try{
        
        const updated = await users.findByIdAndUpdate(req.params.id,{
            
            msg : "block"
            
        })
        let myprofile5 = await users.findById(req.params.id);
        
        return res.status(200).json({message:"successfully blocked messages",update:myprofile5});
        
    }
    catch(err){
        console.log(err);
        return res.status(500).send('msgblock Server Error')
    }
})

app.put('/msgallow/:id', async (req,res)=>{
    try{
        
        const updated = await users.findByIdAndUpdate(req.params.id,{
            
            msg : "allow"
            
        })
        let myprofile5 = await users.findById(req.params.id);
        return res.status(200).json({message:"successfully Allows messages",update:myprofile5});
        
    }
    catch(err){
        console.log(err);
        return res.status(500).send('msgallow Server Error')
    }
})

app.post('/aluminiregister',async (req,res) =>{
    try{
        const { fullname,collegeId,branch,email,mobile,github,linkedin,skill,password,confirmpassword,pg,job,bio,project,currentcompany,experience,currentjoblocation,quote } = req.body;
        var exist = await aluminimodel.findOne({email});
        if(!exist){
            exist = await users.findOne({email})
        }
        if(exist){
            return res.status(200).send('user already registered')
        }
        const existId = await aluminimodel.findOne({collegeId});
        if(existId){
            return res.status(200).send('this collegeID already registered')
        }
        if(password !== confirmpassword){
            return res.status(400).send('password invalid')
        }

        let newUser = new aluminimodel({
            fullname,collegeId,branch,email,mobile,github,linkedin,skill,password,confirmpassword,pg,job,bio,project,currentcompany,experience,currentjoblocation,quote
        })
        await newUser.save();

        let allprofiles7 = await aluminimodel.find();
        return res.status(200).json({message:'Alumini Registered Successfully', update : allprofiles7}) 
    }
    catch(err){
        console.log(err)
        return res.status(500).send('aluminiregister Server Error')
    }
})

app.post('/login',async (req,res)=>{
    try{
        const {email,password} = req.body;
        var exist = await users.findOne({email})
        if(!exist){
            exist = await aluminimodel.findOne({email})
        }
        if(!exist){
            return res.status(200).send('User not Exist plz register')
        }
        if(exist.password !== password){
            return res.status(200).send('password invalid')
        }
        let payload = {
            user : {
                id : exist.id
            }
        }
        jwt.sign(payload,'jwtPassword',{expiresIn:360000000},
        (err,token)=>{
            if(err) throw err
            return res.json({token:token,id:exist.collegeId})
        })

    }
    catch(err){
        console.log(err);
        return res.status(500).send('login Server Error')
    }
})

app.get('/allprofiles',middleware,async (req,res) =>{
    try{
        let allprofiles = await users.find();
        return res.json(allprofiles);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('allprofiles Server Error')
    }
})

app.get('/allaluminis',middleware,async (req,res) =>{
    try{
        let allprofiles = await aluminimodel.find();
        return res.json(allprofiles);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('allaluminis Server Error')
    }
})

app.get('/myprofile',middleware, async (req,res)=>{
    try{
        var myprofile = await users.findById(req.user.id);
        if(!myprofile)
        {
            myprofile = await aluminimodel.findById(req.user.id);
        }
        return res.json(myprofile);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('myprofile Server Error')
    }
})

app.get('/indprofilee/:id',middleware, async (req,res)=>{
    try{
        let indprofile = await users.findById(req.params.id);
        return res.json(indprofile);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('myprofile Server Error')
    }
})

app.get('/indprofilee2/:id',middleware, async (req,res)=>{
    try{
        let indprofile = await aluminimodel.findById(req.params.id);
        return res.json(indprofile);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('indprofilee2 Server Error')
    }
})

app.put('/updatemyprofile/:id',middleware,async (req,res)=>{
    try{
        const {newSkill} = req.body
        const updated = await users.findByIdAndUpdate(req.params.id,{
            
            skill : newSkill || "c",
            
        })
        var myprofile8 = await users.findById(req.user.id);
        return res.status(200).json({message:"successfully updated new skill",update:myprofile8});
    }
    catch(err){
        console.log(err);
        return res.status(500).send('updatemyprofile Server Error')
    }
})




app.put('/updatemygithub/:id',middleware, async (req,res)=>{
    try{
        const {newgithub} = req.body
        const updated = await users.findByIdAndUpdate(req.params.id,{
            
            github : newgithub || "-",
            
        })
        let myprofile9 = await users.findById(req.user.id);
        return res.status(200).json({message:"successfully Added github",update:myprofile9});
        
    }
    catch(err){
        console.log(err);
        return res.status(500).send('updatemygithub Server Error')
    }
})


app.put('/updatemylinkedin/:id',middleware, async (req,res)=>{
    try{
        const {newlinkedin} = req.body;
        const updated = await users.findByIdAndUpdate(req.params.id,{
            
            linkedin : newlinkedin || "-",
            
        })
        let myprofile9 = await users.findById(req.user.id);
        return res.status(200).json({message:"successfully Added linkedin ",update:myprofile9});
        
    }
    catch(err){
        console.log(err);
        return res.status(500).send('updatemylinkedi  Server Error')
    }
})





app.put('/updatemyproject/:id',middleware, async (req,res)=>{
    try{
        const {project} = req.body
        const updated = await users.findByIdAndUpdate(req.params.id,{
            
            project : project || "-",
            
        })
        let myprofile9 = await users.findById(req.user.id);
        return res.status(200).json({message:"successfully updated project",update:myprofile9});
    }
    catch(err){
        console.log(err);
        return res.status(500).send('updatemyproject Server Error')
    }
})



app.put('/updatemydescription/:id',middleware, async (req,res)=>{
    try{
        const {description} = req.body
        const updated = await users.findByIdAndUpdate(req.params.id,{
            
            description : description || "-",
            
        })
        let myprofile9 = await users.findById(req.user.id);
        return res.status(200).json({message:"successfully updated bio",update:myprofile9});
    }
    catch(err){
        console.log(err);
        return res.status(500).send('updatemydescription Server Error')
    }
})








app.post('/addreview',middleware,async (req,res)=>{
    try{
        const {messageReceiver,message} = req.body;
        var exist = await users.findById(req.user.id)
        if(!exist){
            exist = await aluminimodel.findById(req.user.id)
        }
        const newReview = new reviewmodel({
            messageSender : exist.email,
            messageSenderId : exist._id,
            messageSenderclgId : exist.collegeId,
            messageReceiver,
            message
        })
        newReview.save();
        return res.status(200).send('Message Sent successfully')
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addreview Server Error')
    }
})






app.post('/addstudentproject',middleware,async(req,res)=>{
    try{
        const {name,clgid,category,projecttitle,projectdescription,github,video,website} = req.body;
        
        const newstudentproject = new studentprojectmodel({
            name,
            clgid,
            category,
            projecttitle,
            projectdescription,
            github,
            video,
            website
        })
        await newstudentproject.save();
        let projectts = await studentprojectmodel.find();
        return res.status(200).json({message:'project saved successfully',update:projectts})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addproject Server Error ')
    }
})

app.get('/getstudentproject',middleware,async(req,res)=>{
    try{
        let projectts = await studentprojectmodel.find();
        if(projectts.length>=1){
            return res.status(200).json(projectts);
        }
        else{
            return res.status(200).json([]);
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).send('getproject Server Error')
    }
})








// let descrip = await descriptionmodel.find();
//         let userdescrip = descrip.filter(desc => desc.profileemail.toString() === req.user.email.toString())
//         return res.status(200).json(userdescrip);

// const demo = [{
//     profileId: '1',
//     description:"No description added yet"

// }]

// app.get('/getdescription',middleware,async(req,res)=>{
//     try{
//         let descrip = await descriptionmodel.find();
//         let userdescrip = descrip.filter(desc => desc.profileId === req.user.id)
//         // console.log(userdescrip);
//         // console.log(demo);
//         if(userdescrip.length>=1){
//             return res.status(200).json(userdescrip);
//         }
//         else{
//             return res.status(200).json(demo);
//         }

//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).send('getdescription Server Error')
//     }
// })


// app.get('/getdescription2/:id',middleware,async(req,res)=>{
//     try{
//         let descrip = await descriptionmodel.find();
//         let userdescrip = descrip.filter(desc => desc.profileId === req.params.id)
//         // console.log(userdescrip);
//         // console.log(demo);
//         if(userdescrip.length>=1){
//             return res.status(200).json(userdescrip);
//         }
//         else{
//             return res.status(200).json(demo);
//         }

//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).send('getdescription Server Error')
//     }
// })






app.post('/addsupportteam',middleware,async(req,res)=>{
    try{
        const {name,clgid,position,mobile,email} = req.body;
        
        const newsupportteam = new supportteammodel({
            name,
            clgid,
            position,
            mobile,
            email
        })
        await newsupportteam.save();
        let exist = await supportteammodel.find();
        return res.status(200).send({message:'team member saved successfully',update:exist})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addsupportteam Server Error ')
    }
})

app.get('/getsupportteam',middleware,async(req,res)=>{
    try{
        let exist = await supportteammodel.find();
        if(exist.length>=1){
            return res.status(200).json(exist);
        }
        else{
            return res.status(200).json(sample);
        }

    }
    catch(err){
        console.log(err);
        return res.status(500).send('getproject Server Error')
    }
})



app.post('/newadminbme',async(req,res)=>{
    try{
        const {email,password} = req.body;
        
        const newadmin = new adminbmemodel({
            email,
            password
        })
        await newadmin.save();
        return res.status(200).send('New Admin saved successfully')
    }
    catch(err){
        console.log(err);
        return res.status(500).send('New Adminbme Server Error ')
    }
})


app.post('/verifyadminbme',async (req,res)=>{
    try{
        const {email,password} = req.body;
        var exist = await adminbmemodel.findOne({email})
        if(!exist){
            return res.status(200).send('Invalid info')
        }
        if(exist.password !== password){
            return res.status(200).send('Incorrect Password')
        }
        else{
            return res.status(200).send('success')
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).send('verify Adminbme Server Error ')
    }
})

app.get('/getpresentuser',middleware,async(req,res)=>{
    try{
        var exist = await users.findById(req.user.id)
        if(!exist){
            exist = await aluminimodel.findById(req.user.id)
        }
        return res.status(200).json(exist.collegeId);

    }
    catch(err){
        console.log(err);
        return res.status(500).send('getpresentuser Server Error')
    }
})



// app.post('/addproject',middleware,async(req,res)=>{
//     try{
//         const {project} = req.body;
//         const exist = await users.findById(req.user.id)
//         const newproject = new projectmodel({
//             profileId : exist.id,
//             project
//         })
//         await newproject.save();
//         return res.status(200).send('project saved successfully')
//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).send('addproject Server Error')
//     }
// })


// const sample = [{
//     profileId: '1',
//     project:"No project added yet"

// }]

// app.get('/getproject',middleware,async(req,res)=>{
//     try{
//         let projectts = await projectmodel.find();
//         let userprojectt = projectts.filter(proj => proj.profileId === req.user.id)
//         // console.log(userprojectt);
//         // console.log(sample);
//         if(userprojectt.length>=1){
//             return res.status(200).json(userprojectt);
//         }
//         else{
//             return res.status(200).json(sample);
//         }

//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).send('getproject Server Error')
//     }
// })


// app.get('/getproject2/:id',middleware,async(req,res)=>{
//     try{
//         let projectts = await projectmodel.find();
//         let userprojectt = projectts.filter(projj => projj.profileId === req.params.id)
//         // console.log(userprojectt);
//         // console.log(sample);
        
//         if(userprojectt.length>=1){
//             return res.status(200).json(userprojectt);
//         }
//         else{
//             return res.status(200).json(sample);
//         }

//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).send('getproject Server Error')
//     }
// })










app.post('/addrequirements',middleware,async(req,res)=>{
    try{
        const {skillsreq,theme} = req.body;
        const exist = await users.findById(req.user.id)
        const newwanted = new wantedmodel({
            userid : exist.id,
            clgid : exist.collegeId,
            name : exist.fullname,
            skillsreq,
            theme
        })
        await newwanted.save();
        let allreq = await wantedmodel.find();
        return res.status(200).json({message:'requirements added successfully',update:allreq})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('requirements Server Error')
    }
})

app.get('/getrequirements',middleware,async (req,res) =>{
    try{
        let allreq = await wantedmodel.find();
        return res.json(allreq);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('allprofiles Server Error')
    }
})


app.delete('/deleterequirement/:id',middleware,async(req,res) => {
    try{
        await wantedmodel.findByIdAndDelete(req.params.id)
        let allreq = await wantedmodel.find();
        return res.status(200).json({message:'requirements deleted successfully',update:allreq})
        
    }
    catch(err){
        console.log(err)
        return res.status(500).send('deleterequirement Server Error')
    }
})





app.post('/addquery',middleware,async(req,res)=>{
    try{
        const {problem} = req.body;
        var exist = await users.findById(req.user.id)
        if(!exist){
            exist = await aluminimodel.findById(req.user.id)
        }
        const newquery = new contactmodel({
            userid : exist.id,
            username : exist.fullname,
            clgid : exist.collegeId,
            problem
        })
        await newquery.save();
        return res.status(200).send('your problem sent successfully')
    }
    catch(err){
        console.log(err);
        return res.status(500).send('requirements Server Error')
    }
})


app.get('/getquery',middleware,async(req,res) => {
    try{
        let allqueries = await contactmodel.find();
        return res.json(allqueries);
    }
    catch{
        console.log(err);
        return res.status(500).send('getquery Server Error')
    }
})


app.delete('/deletequery/:id',middleware,async(req,res) => {
    try{
        await contactmodel.findByIdAndDelete(req.params.id)
        let allqueries = await contactmodel.find();
        return res.status(200).json({message:'query deleted successfully',update:allqueries})
    }
    catch(err){
        console.log(err)
    }
})



app.post('/addresource',middleware,async(req,res)=>{
    try{
        const {Rname,Resourcedescription,weburl,pic} = req.body;
        // const exist = await users.findById(req.user.id)
        const newresource = new resourcemodel({
            Rname,
            Resourcedescription,
            weburl,
            pic
        })
        await newresource.save();
        let allresources = await resourcemodel.find();
        return res.status(200).json({message:'new resource added successfully',update:allresources})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('add resourceServer Error')
    }
})


app.get('/getresource',middleware,async(req,res)=>{
    try{
        let allresources = await resourcemodel.find();
        return res.json(allresources);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('get resource Server Error')
    }
})



app.post('/addmentor',middleware,async(req,res)=>{
    try{
        const {mentorname,clgId,dept,mobile,email,domains,expert} = req.body;
        
        const newmentor = new mentorsmodel({
            mentorname,
            clgId,
            dept,
            mobile,
            email,
            domains,
            expert
        })
        await newmentor.save();
        let allmentors = await mentorsmodel.find();
        return res.status(200).json({message:'new mentor added successfully',update:allmentors})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('add mentor Server Error')
    }
})


app.get('/getmentors',middleware,async(req,res)=>{
    try{
        let allmentors = await mentorsmodel.find();
        return res.json(allmentors);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('get mentor Server Error')
    }
})

app.post('/addinternship',middleware,async(req,res)=>{
    try{
        const {compName,compWebsite,description,requirements,mobile,email,expDate,stipend,applyPage,role} = req.body;
        
        const newinternship = new Internshipmodel({
            compName,compWebsite,description,requirements,mobile,email,expDate,stipend,applyPage,role
        })
        await newinternship.save();
        let allinternships = await Internshipmodel.find();
        return res.status(200).json({message:'new Internship added successfully',update:allinternships})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('add internship Server Error')
    }
})

app.get('/getinternship',middleware,async(req,res)=>{
    try{
        let allinternships = await Internshipmodel.find();
        return res.json(allinternships);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('get internship Server Error')
    }
})



app.get('/myreview',middleware,async (req,res)=>{
    try{
        let allreviews = await reviewmodel.find();
        let myreviews = allreviews.filter(review => review.messageReceiver.toString() === req.user.id.toString());
        return res.status(200).json(myreviews)
    }
    catch(err){
        console.log(err);
        return res.status(500).send('myreview Server Error')
    }
})



app.delete('/deletereview/:id',middleware,async(req,res) => {
    try{
        await reviewmodel.findByIdAndDelete(req.params.id)

        let allreviews = await reviewmodel.find();
        let myreviews = allreviews.filter(review => review.messageReceiver.toString() === req.user.id.toString());

        return res.status(200).json({message:"Message deleted successfully",update:myreviews})
    }
    catch(err){
        console.log(err)
    }
})


app.delete('/delete/:id',middleware,async(req,res) => {
    try{
        await users.findByIdAndDelete(req.params.id)
        return res.status(200).send('deleted successfully')
    }
    catch(err){
        console.log(err)
    }
})


// app.delete('/deletedescription/:id',async(req,res) => {
//     try{
//         let descripdelete = await descriptionmodel.find();
//         let userdescrip = descripdelete.filter(descr => descr.profileId === req.params.id)
//         // console.log("hiiii")
//         let len = userdescrip.length
//         if(len>=1){
//             // console.log(userdescrip[len-1].id);
//             await descriptionmodel.findByIdAndDelete(userdescrip[len-1].id)
//             return res.status(200).send('deleted successfully')
//         }
//         else{
//             return res.status(200).send('Their is noting to delete')
//         }
//     }
//     catch(err){
//         console.log(err)
//     }
// })




app.post('/forgetpassword',async(req,res,next)=>{
    //checking if atleast the users exists or not
    const tuser= await users.findOne({email:req.body.email});

    if(!tuser){
        return res.status(200).send('user not found')
    }

    // get resetpassword token
    const resetToken= tuser.getResetPassword();
    // console.log(resetToken);
    await tuser.save({validateBeforeSave: false});

    //actual link is http://localhost/api/v1/passwordreset/${resetToken} as local host and http requests
    //can change we use req._
    const resetpasswordURL=`${resetToken}`;
    const resetpasswordMessage = `your's Students Hub reset password verification code is \n\n ${resetpasswordURL} \n\n if u have not
    requested this email, please ignore`;

    try{
        await sendEmail({
            //we will send a object with 3 key value pairs here
            email:tuser.email,
            subject:"Students Hub password Recovery",
            resetpasswordMessage,
        });
        res.status(200).json({
            success:true,
            message:`Email sent to ${tuser.email} successfully`,
        })
    }
    catch(err){
        tuser.resetPasswordToken= undefined;
        tuser.resetPasswordExpire= undefined;
        await tuser.save({validateBeforeSave: false});

        return  res.status(200).send(err.message);
    }
}
)



//reset password using forgot password
app.post('/resetpassword/:token',async(req,res,next)=>{
    const resetPasswordToken= crypto.createHash("sha256").update(req.params.token).digest("hex");

    const tuser = await users.findOne({
        resetPasswordToken,
        resetPasswordExpire:{ $gt:Date.now()},
    })

    if(!tuser){
        return res.status(200).send('password reset token is invalid or expired')
       
    }

    if(req.body.password !== req.body.confirmpassword){
        return res.status(200).send('password did not match')
    }

    tuser.password = req.body.password;
    tuser.confirmpassword = req.body.password;
    tuser.resetPasswordToken= undefined;
    tuser.resetPasswordExpire= undefined;

    await tuser.save();

    return  res.status(200).send("password changed successfully");

})





app.post('/forgetpasswordalumini',async(req,res,next)=>{
    //checking if atleast the users exists or not
    const tuser= await aluminimodel.findOne({email:req.body.email});

    if(!tuser){
        return res.status(200).send('user not found')
    }

    // get resetpassword token
    const resetToken= tuser.getResetPassword();
    // console.log(resetToken);
    await tuser.save({validateBeforeSave: false});

    //actual link is http://localhost/api/v1/passwordreset/${resetToken} as local host and http requests
    //can change we use req._
    const resetpasswordURL=`${resetToken}`;
    const resetpasswordMessage = `your's Students Hub reset password verification code is \n\n ${resetpasswordURL} \n\n if u have not
    requested this email, please ignore`;

    try{
        await sendEmail({
            //we will send a object with 3 key value pairs here
            email:tuser.email,
            subject:"Students Hub password Recovery",
            resetpasswordMessage,
        });
        res.status(200).json({
            success:true,
            message:`Email sent to ${tuser.email} successfully`,
        })
    }
    catch(err){
        tuser.resetPasswordToken= undefined;
        tuser.resetPasswordExpire= undefined;
        await tuser.save({validateBeforeSave: false});

        return  res.status(200).send(err.message);
    }
}
)




//reset password using forgot password
app.post('/resetpasswordalumini/:token',async(req,res,next)=>{
    const resetPasswordToken= crypto.createHash("sha256").update(req.params.token).digest("hex");

    const tuser = await aluminimodel.findOne({
        resetPasswordToken,
        resetPasswordExpire:{ $gt:Date.now()},
    }) 

    if(!tuser){
        return res.status(200).send('password reset token is invalid or expired')
       
    }

    if(req.body.password !== req.body.confirmpassword){
        return res.status(200).send('password did not match')
    }

    tuser.password = req.body.password;
    tuser.confirmpassword = req.body.password;
    tuser.resetPasswordToken= undefined;
    tuser.resetPasswordExpire= undefined;

    await tuser.save();

    return  res.status(200).send("Alumini password changed successfully");

})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////












app.post('/registerbme',async (req,res) =>{
    try{
        const { fullname,collegeId,branch,email,mobile,password,confirmpassword } = req.body;
        const exist = await usersbme.findOne({email});
        if(exist){
            return res.status(200).send('user already registered')
        }
        const existId = await usersbme.findOne({collegeId});
        if(existId){
            return res.status(200).send('this collegeID already registered')
        }
        if(password !== confirmpassword){
            return res.status(400).send('password invalid')
        }

        let newUser = new usersbme({
            fullname,collegeId,branch,email,mobile,password,confirmpassword
        })
        newUser.save();
        return res.status(200).send('User Registered Successfully')
    }
    catch(err){
        console.log(err)
        return res.status(500).send('register Server Error')
    }
})


app.post('/loginbme',async (req,res)=>{
    try{
        const {email,password} = req.body;
        const exist = await usersbme.findOne({email})
        if(!exist){
            return res.status(200).send('User not Exist plz register')
        }
        if(exist.password !== password){
            return res.status(200).send('password invalid')
        }
        let payload = {
            user : {
                id : exist.id
            }
        }
        jwt.sign(payload,'jwtPassword',{expiresIn:360000000},
        (err,token)=>{
            if(err) throw err
            return res.json({token})
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).send('login Server Error')
    }
})


app.post('/addUserA',async(req,res) =>{
    const {clgId,namee,password,seatno} = req.body;
    try{
        const newUser = new seatmodelA({
            clgId,
            namee,
            password,
            seatno
        })
        await newUser.save();
        return res.json("suceessfully seat allocated")
    }
    catch(err){
        console.log(err)
    }
})


app.get('/getuserA',async(req,res)=>{
    try{
        let seats = await seatmodelA.find();
        return res.status(200).json(seats);
    }
    catch(err){
        console.log(err);
        return res.send("getuser server error")
    }
})



app.post('/addUserC',async(req,res) =>{
    const {clgId,namee,password,seatno} = req.body;
    try{
        const newUser = new seatmodelC({
            clgId,
            namee,
            password,
            seatno
        })
        await newUser.save();
        return res.json("suceessfully seat allocated")
    }
    catch(err){
        console.log(err)
    }
})



app.get('/getuserC',async(req,res)=>{
    try{
        
        let seats = await seatmodelC.find();
        return res.status(200).json(seats);
    }
    catch(err){
        console.log(err);
        return res.send("getuser server error")
    }
})




app.post('/addUserE',async(req,res) =>{
    const {clgId,namee,password,seatno} = req.body;
    try{
        const newUser = new seatmodelE({
            clgId,
            namee,
            password,
            seatno
        })
        await newUser.save();
        return res.json("suceessfully seat allocated")
    }
    catch(err){
        console.log(err)
    }
})



app.get('/getuserE',async(req,res)=>{
    try{
        
        let seats = await seatmodelE.find();
        return res.status(200).json(seats);
    }
    catch(err){
        console.log(err);
        return res.send("getuser server error")
    }
})



app.post('/addposter',async(req,res) =>{
    const {pic} = req.body; 
    try{
        const newPoster = new poster({
            pic
        })
        await newPoster.save();
        return res.json("suceessfully poster Updated")
    }
    catch(err){
        console.log(err)
    }
})


app.get('/getposter',async(req,res)=>{
    try{
        return res.json(await poster.find())
    }
    catch(err){
        console.log(err);
        return res.send("getposter server error")
    }
})



app.get('/myprofilebme',middleware, async (req,res)=>{
    try{
        let myprofile = await usersbme.findById(req.user.id);
        return res.json(myprofile);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('myprofile Server Error')
    }
})






app.post('/addsupportteambme',middleware,async(req,res)=>{
    try{
        const {name,clgid,position,mobile,email} = req.body;
        
        const newsupportteam = new supportteammodelbme({
            name,
            clgid,
            position,
            mobile,
            email
        })
        await newsupportteam.save();
        return res.status(200).send('team member saved successfully')
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addsupportteam Server Error ')
    }
})

app.get('/getsupportteambme',async(req,res)=>{
    try{
        let projectts = await supportteammodelbme.find();
        if(projectts.length>=1){
            return res.status(200).json(projectts);
        }
        else{
            return res.status(200).json(projectts);
        }

    }
    catch(err){
        console.log(err);
        return res.status(500).send('getproject Server Error')
    }
})







app.post('/addauditorium',async(req,res)=>{
    try{
        const {a1,a2,a3} = req.body;
        
        const newauditorium = new auditoriummodel({
            a1,
            a2,
            a3
        })
        await newauditorium.save();
        let allauditoriums2 = await auditoriummodel.find()
        return res.status(200).json({message:'Auditorium Added successfully',update:allauditoriums2})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('auditorium Server Error')
    }
})


app.get('/getauditorium',async(req,res)=>{
    try{
        const allauditoriums = await auditoriummodel.find()
        return res.status(200).json(allauditoriums);

    }
    catch(err){
        console.log(err);
        return res.status(500).send('getauditorium Server Error')
    }
})

app.put('/updateauditorium/:id',async(req,res)=>{
    try{
        const {a1,a2,a3} = req.body;
        const updated = await auditoriummodel.findByIdAndUpdate(req.params.id,{
            
            a1 : a1 || "-",
            a2 : a2 || "-",
            a3 : a3 || "-",
            
        })
        return res.status(200).send("Updated Auditorium succesfully");
    }
    catch(err){
        console.log(err);
        return res.status(500).send('updateauditorium Server Error')
    }
})



app.delete('/deleteauditorium/:id',async(req,res) => {
    try{
        const deletedproblem = await auditoriummodel.findByIdAndDelete(req.params.id)
        let allauditoriums2 = await auditoriummodel.find()
        return res.status(200).json({message:'deleted Auditoriums successfully',update:allauditoriums2})
    }
    catch(err){
        console.log(err)
    }
})







app.put('/updatesupportteambme/:id/:position',middleware,async(req,res)=>{
    try{
        const updated = await supportteammodelbme.findByIdAndUpdate(req.params.id,{
            
            position : req.params.position || "leader",
            
        })
        return res.status(200).json(updated);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('updatesupportteam Server Error')
    }
})



app.put('/updatesupportteambme/:id',middleware,async(req,res)=>{
    try{

        const updated = await supportteammodelbme.findByIdAndUpdate(req.params.id,{
            name : req.body.name || "rock star",
            clgid : req.body.clgid || "19911A0000",
            position : req.body.position || "leader",
            mobile : req.body.mobile || "1234512345",
            email : req.body.email || "t@gmail.com"
        })

        return res.status(200).json(updated);

    }
    catch(err){
        console.log(err);
        return res.status(500).send('updatesupportteam Server Error')
    }
})




app.get('/getpresentuserbme',middleware,async(req,res)=>{
    try{
        const exist = await usersbme.findById(req.user.id)
        return res.status(200).json(exist.collegeId);

    }
    catch(err){
        console.log(err);
        return res.status(500).send('getpresentuser Server Error')
    }
})



app.post('/addnextevent',async(req,res)=>{
    try{
        const {nextevent} = req.body; 
        const newnextevent = new nexteventmodel({
            nextevent
        })
        await newnextevent.save();
        let exist2 = await nexteventmodel.find()
        return res.status(200).json({message:'next event updated successfully',update:exist2})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addnextevent Server Error')
    }
})

app.get('/getnextevent',async(req,res)=>{
    try{
        const exist = await nexteventmodel.find()
        return res.status(200).json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('getnextevent Server Error')
    }
})

app.put('/updatenextevent/:id/:nextevent',async(req,res)=>{
    try{
        const updated = await nexteventmodel.findByIdAndUpdate(req.params.id,{
            
            nextevent : req.params.nextevent || "No Events",
            
        })
        let exist2 = await nexteventmodel.find()
        return res.status(200).json({message:"Updated next event succesfully",update:exist2});
    }
    catch(err){
        console.log(err);
        return res.status(500).send('closeregister Server Error')
    }
})




app.post('/addyears',async(req,res)=>{
    try{
        const {year1,year2,year3,year4} = req.body; 
        const newyear = new yearmodel({
            year1,
            year2,
            year3,
            year4
        })
        await newyear.save();
        let exist2 = await yearmodel.find()
        return res.status(200).json({message:'batches updated successfully',update:exist2})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addyears Server Error')
    }
})


app.get('/getyears',async(req,res)=>{
    try{
        const exist = await yearmodel.find()
        
        return res.status(200).json(exist);
        
    }
    catch(err){
        console.log(err);
        return res.status(500).send('getyears server error')
    }
})


app.put('/updateyears/:id',async(req,res)=>{
    try{
        const {year1,year2,year3,year4} = req.body;
        const updated = await yearmodel.findByIdAndUpdate(req.params.id,{
            
            year1 : year1 || "-",
            year2 : year2 || "-",
            year3 : year3 || "-",
            year4 : year4 || "-"
            
        })
        return res.status(200).send("Updated years succesfully");
    }
    catch(err){
        console.log(err);
        return res.status(500).send('closeregister Server Error')
    }
})


app.delete('/deleteyears/:id',async(req,res) => {
    try{
        const deletedyears = await yearmodel.findByIdAndDelete(req.params.id)
        let exist2 = await yearmodel.find()
        return res.status(200).json({message:'deleted successfully',update:exist2})
    }
    catch(err){
        console.log(err)
    } 
})





app.post('/addopenregister',async(req,res)=>{
    try{
        const {dummy} = req.body; 
        const newopenregister = new openregistermodel({
            dummy
        })
        await newopenregister.save();
        let exist2 = await openregistermodel.find()
        return res.status(200).json({message:'registration opened successfully',update:exist2})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addopenregister Server Error')
    }
})

app.get('/getopenregister',async(req,res)=>{
    try{
        const exist = await openregistermodel.find()
        return res.status(200).json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('getopenregister Server Error')
    }
})



app.delete('/deletecloseregister/:id',async(req,res) => {
    try{
        const deletedregister = await openregistermodel.findByIdAndDelete(req.params.id)
        let exist2 = await openregistermodel.find()
        return res.status(200).json({message:'closed registration successfully',update:exist2})
    }
    catch(err){
        console.log(err)
    }
})






app.post('/addquerybme',middleware,async(req,res)=>{
    try{
        const {problem} = req.body;
        const exist = await usersbme.findById(req.user.id)
        const newquery = new contactmodelbme({
            userid : exist.id,
            username : exist.fullname,
            clgid : exist.collegeId,
            problem
        })
        await newquery.save();
        return res.status(200).send('your problem sent successfully')
    }
    catch(err){
        console.log(err);
        return res.status(500).send('requirements Server Error')
    }
})

app.get('/getquerybme',async(req,res)=>{
    try{
        const allproblems = await contactmodelbme.find()
        return res.status(200).json(allproblems);

    }
    catch(err){
        console.log(err);
        return res.status(500).send('requirements Server Error')
    }
})


app.delete('/deleteproblembme/:id',async(req,res) => {
    try{
        const deletedproblem = await contactmodelbme.findByIdAndDelete(req.params.id)
        let allproblems2 = await contactmodelbme.find()
        return res.status(200).json({message:'deleted successfully',update:allproblems2})
    }
    catch(err){
        console.log(err)
    }
})



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


app.put('/addgithubA/:id',middleware,async (req,res) =>{
    try{
        const {github} = req.body; 
        const updated = await aluminimodel.findByIdAndUpdate(req.params.id,{
            
            github : github || "-",
            
        })
        let myprofile = await aluminimodel.findById(req.user.id);
        return res.status(200).json({message:'Github updated successfully',update:myprofile})
        
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addgithubA Server Error')
    }
})

app.put('/addlinkedinA/:id',middleware,async (req,res) =>{
    try{
        const {linkedin} = req.body; 
        const updated = await aluminimodel.findByIdAndUpdate(req.params.id,{
            
            linkedin : linkedin || "-",
            
        })
        let myprofile = await aluminimodel.findById(req.user.id);
        return res.status(200).json({message:'linkedin updated successfully',update:myprofile})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addlinkedinA Server Error')
    }
})

app.put('/addpgA/:id',middleware,async (req,res) =>{
    try{
        const {pg} = req.body; 
        const updated = await aluminimodel.findByIdAndUpdate(req.params.id,{
            
            pg : pg || "-",
            
        })
        let myprofile = await aluminimodel.findById(req.user.id);
        return res.status(200).json({message:'Post Graduation updated successfully',update:myprofile})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addpgA Server Error')
    }
})

app.put('/addbioA/:id',middleware,async (req,res) =>{
    try{
        const {bio} = req.body; 
        const updated = await aluminimodel.findByIdAndUpdate(req.params.id,{
            
            bio : bio || "-",
            
        })
        let myprofile = await aluminimodel.findById(req.user.id);
        return res.status(200).json({message:'bio updated successfully',update:myprofile})
        
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addbioA Server Error')
    }
})

app.put('/addprojectA/:id',middleware,async (req,res) =>{
    try{
        const {project} = req.body; 
        const updated = await aluminimodel.findByIdAndUpdate(req.params.id,{
            
            project : project || "-",
            
        })
        let myprofile = await aluminimodel.findById(req.user.id);
        return res.status(200).json({message:'Project updated successfully',update:myprofile})
        
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addprojectA Server Error')
    }
})

app.put('/addexpA/:id',middleware,async (req,res) =>{
    try{
        const {experience} = req.body; 
        const updated = await aluminimodel.findByIdAndUpdate(req.params.id,{
            
            experience : experience || "-",
            
        })
        let myprofile = await aluminimodel.findById(req.user.id);
        return res.status(200).json({message:'experience updated successfully',update:myprofile})
        
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addexperienceA Server Error')
    }
})

app.put('/addskillA/:id',middleware,async (req,res) =>{
    try{
        const {skill} = req.body; 
        const updated = await aluminimodel.findByIdAndUpdate(req.params.id,{
            
            skill : skill || "-",
            
        })
        let myprofile = await aluminimodel.findById(req.user.id);
        return res.status(200).json({message:'skills updated successfully',update:myprofile})
        
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addexperienceA Server Error')
    }
})

app.put('/addmobileA/:id',middleware,async (req,res) =>{
    try{
        const {mobile} = req.body; 
        const updated = await aluminimodel.findByIdAndUpdate(req.params.id,{
            
            mobile : mobile || "-",
            
        })
        let myprofile = await aluminimodel.findById(req.user.id);
        return res.status(200).json({message:'mobile number updated successfully',update:myprofile})
        
    }
    catch(err){
        console.log(err);

        return res.status(500).send('addmobileA Server Error')
    }
})

app.put('/addquoteA/:id',middleware,async (req,res) =>{
    try{
        const {quote} = req.body; 
        
        const updated = await aluminimodel.findByIdAndUpdate(req.params.id,{
            
            quote : quote || "-",
            
        })
        let myprofile = await aluminimodel.findById(req.user.id);
        return res.status(200).json({message:'quote updated successfully',update:myprofile})
      
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addquoteA Server Error')
    }
})

app.put('/addjobA/:id',middleware,async (req,res) =>{
    try{
        const {job,currentcompany,currentjoblocation} = req.body; 
        const updated = await aluminimodel.findByIdAndUpdate(req.params.id,{
            
            job : job || "-",
            currentcompany : currentcompany || "-",
            currentjoblocation : currentjoblocation || "-"
            
        })

        let myprofile = await aluminimodel.findById(req.user.id);
        return res.status(200).json({message:'job company location updated successfully',update:myprofile})
        
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addJCLA Server Error')
    }
})





app.post('/addteacher',middleware,async(req,res)=>{
    try{
        const {teacherName,
                teacherDepartment,
                teacherRole,
                teacherqualification,
                teachermob,
                teacheremail,
                teachersub  } = req.body;
        
        const newteacher = new teachersmodel({
            teacherName,
            teacherDepartment,
            teacherRole,
            teacherqualification,
            teachermob,
            teacheremail,
            teachersub 
        })
        await newteacher.save();
        const exist = await teachersmodel.find()
        return res.status(200).json({message:'New Teacher Added successfully',update:exist})
    }
    catch(err){
        console.log(err);
        return res.status(500).send('New Teacher Server Error')
    }
})

app.get('/getAllTeachers',middleware,async(req,res)=>{
    try{
        const exist = await teachersmodel.find()
        return res.status(200).json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('getAllTeachers Server Error')
    }
})



app.post('/addregisterlogin',middleware,async(req,res)=>{
    try{
        const {username,password} = req.body;
        
        const newdata = new registerloginmodel({
            username,
            password
        })
        await newdata.save();
        return res.status(200).send('registerLogin Details saved successfully')
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addregisterlogin Server Error ')
    }
})

app.get('/getregisterlogin',middleware,async(req,res)=>{
    try{
        const exist = await registerloginmodel.find()
        return res.status(200).json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('getregisterlogin Server Error')
    }
})

app.post('/verifyregisterlogin',async(req,res)=>{
    try{
        const {username,passwordv} = req.body;
        const exist = await registerloginmodel.findOne({username});
        if(!exist)
        {
            return res.status(200).send('failure')
        }
        if(exist.password !== passwordv)
        {
            return res.status(200).send('failure') 
        }
        if(exist.password === passwordv)
        {
            return res.status(200).send('success') 
        }
        
    }
    catch(err){
        console.log(err);
        return res.status(500).send('addregisterlogin Server Error ')
    }
})


// app.listen(PORT,()=> console.log('Server is Running..'))

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server is running");
    })
})