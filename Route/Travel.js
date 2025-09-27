let express=require("express");
let travel=require("../Controller/Travel");
let route=express.Router();

route.post("/add",travel.add);
route.get("/find",travel.find);
route.delete("/delete",travel.delete);
route.put("/edit",travel.edit);

module.exports=route;