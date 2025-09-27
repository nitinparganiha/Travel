const server=require('express');
const port=require('dotenv');
const yog=server();
let user=require('./Route/loginandSign');
let travel=require('./Route/Travel');
let dotenv=require("dotenv");
dotenv.config({path:'./config'});
let mongoos=require("mongoose");

yog.use(server.json());
yog.use(server.urlencoded({ extended: true }));

mongoos.connect("mongodb://127.0.0.1:27017/admin",{
     useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));


yog.use("/",user);
yog.use("/travel",travel);
yog.listen(3000,()=>{
    console.log("Running");
});


