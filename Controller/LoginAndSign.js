let express=require("express");
let Users=require('../Model/user');
let jwt =require("jsonwebtoken");
const bcrypt=require("bcrypt");
require("dotenv").config({path:"./config.env"});

exports.loginandSign=(req,resp)=>{
    resp.json({name:"Yogita"})
console.log("Hii  i am from /");
}

exports.login=async(req,resp)=>{
  console.log("Login");
  try{
  let jwtsectretkey=process.env.JWT_SECRET;
  // console.log(jwtsectretkey);
  let UserName=req.body.UserName;
  let Password=req.body.Password;
  let obj={UserName:UserName,Password:Password}
  let find=await Users.find({UserName,Password});
  // console.log(find);
  if(find.length!=0){
    let jwtl=jwt.sign(
      {UserName:find.UserName},
      jwtsectretkey,
      {expiresIn:"1h"}
    )
    resp.json({
      message:"login Successfull",
      token:jwtl
    });
  }else{
    resp.send("Please Register First");
  }
  }catch{
    resp.send("Once again please");
  }
}

exports.signIn = async (req, resp) => {
  try {
    console.log(req.body);
    console.log(req.body.Address);

    // Destructure values from request body
    // let { userName, Password, Adress, ContactNo } = req.body;
    let UserName=req.body.UserName;
    let Password=req.body.Password;
    let Address=req.body.Address;
    let ContactNumber=req.body.ContactNumber;
 console.log(req.body.ContactNumber);
    // Validation
    if (!UserName || !Password || !Address || !ContactNumber) {
      return resp.status(400).send("Please fill all the details");
    }

    // Insert into MongoDB
    let user = await Users.create({
      UserName,
      Password,
      Address,
      ContactNumber
    });

    return resp.status(201).json(user); // Respond with created user
  } catch (err) {
    console.error(err);
    return resp.status(500).send("Something went wrong");
  }
}

