const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); //for hashing password
// const jwt = require('jsonwebtoken');  // for page authentication

const User = require("../models/userSchema")

router.get('/about',(req,res)=>{
    res.send(`hello from about page from router js`);
});


//using promises method

// router.post('/register',(req,res) =>{

//     const {name,email,phone,work,password,cpassword} = req.body;
//    //validation
//    if(!name || !email || !phone || !work || !password || !cpassword){
//     return res.json({error: "Plz fill the field properly"});
//    }


//    User.findOne({email:email})
//    .then((userExist)=>{
//     if(userExist){
//         return res.json({error:"Email already exist"});
//     }
//     //for new entry of user
//     const user = new User({name:name,email:email,phone:phone,work:work,password:password,cpassword:cpassword})

//     user.save().then(()=>{
//        res.status(201).json({message:"user registered successfully"});
//     }).catch((err)=>{
//         res.status(500).json({error:"failed to register"});

//     }).catch(err =>{
//       console.log(err);
//     })
//    })

//    res.send("my register page");  //it show the data in ur postman body
// })

//using asyn and await method

router.post('/register',async(req,res) =>{

    const {name,email,phone,work,password,cpassword} = req.body;
   //validation
   if(!name || !email || !phone || !work || !password || !cpassword){
    return res.json({error: "Plz fill the field properly"});
   }
   try{
    const userExist = await User.findOne({email:email});
    if(userExist){
        return res.json({error:"Email already exist"});
    }else if(password != cpassword){
        return res.status(422).json({error:"password are not matching"});
    }

    //for new entry of user
    const user = new User({name:name,email:email,phone:phone,work:work,password:password,cpassword:cpassword});
    
    //yha pe
    const userRegister = await user.save();
    if(userRegister){
        res.status(201).json({message:"user registered successfully"});
    }else{
        res.status(500).json({error:"failed to register"});
    }
   }

   catch(err) {
      console.log(err);
   };
})
   //login route here
   router.post('/signin',async (req,res)=>{
    // console.log(req.body);
    // res.json({message:"awesome"})
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:"Plz fill the data"});
        }
        //by the help of USER we check already email exist or not
        const userLogin =await User.findOne({email:email});
            // console.log(userLogin);
            // if(userLogin){
            //     // const isMatch = await bcrypt.compare(password, userLogin.password);

            //     // const token = await userLogin.generateAuthToken(); 

            //     if(!isMatch){
            //         res.status(400).json({error:"Invalid credentials pass"});  //here pass we put externaly to check that actualy password wala error, we can remove pass also
            //     }else{
            //         res.json({message:"user signin successfully"});
            //     }
            //    }else{
            //         res.status(400).json({error:"Invalid credentials"})
                
            // }
            if (userLogin) {
                if (password === userLogin.password) {
                    res.json({ message: "User signed in successfully" });
                } else {
                    res.status(400).json({ error: "Invalid credentials" });
                }
            } else {
                res.status(400).json({ error: "Invalid credentials" });
            }
        

            
     }catch(err){
            console.log(err);
                
            }
    })
module.exports = router;