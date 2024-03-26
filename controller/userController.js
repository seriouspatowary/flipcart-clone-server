import dotenv from "dotenv"
import User from "../model/userSchema.js"
import jwt from 'jsonwebtoken'

dotenv.config()


const jwtsecret = process.env.JWT_SECRET

export const userLogin = async(req,res)=>{

   let success = false;

   try {

    const username = req.body.username;
    const password = req.body.password;
    

    let user = await User.findOne({username:username,password:password})


    if(!user){

      return res.status(400).json({ errors: "Please try to login with correct credentials" });
    }


  const data = {
     user:{
      id: user.id
     }
  }
   
  const authToken = jwt.sign(data, jwtsecret);
  success = true;

  res.status(201).json({ success, authToken });
  

   } catch (error) {
    res.status(500).json({message:error.message})
   }

}



export const userSignup = async(request,response)=>{
    try {
 
      let existUser =  await User.findOne({email:request.body.email})
 
      if(existUser){
         return response.status(401).json({message:'Username Already Exist'})
      }
     
      const user = request.body;
      const newUser = new User(user);
      await newUser.save();
 
      response.status(200).json({message:user})
    } catch (error) {
     response.status(500).json({message:error.message})
    }
 
 }


export const getUser = async(req,res)=>{
   try {
    let userId = req.user.id;

    const user = await User.findById(userId).select("-password")
    res.send(user)
    
   } catch (error) {
      console.error(error.message)
      res.status(500).send("Internal Server error")
   }

}