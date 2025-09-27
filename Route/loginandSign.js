let express=require("express");
let rout=express.Router();
let controller=require("../Controller/LoginAndSign");
rout.get("/",controller.loginandSign);
rout.post("/SignIn",controller.signIn);
rout.get("/Login",controller.login);
module.exports=rout;