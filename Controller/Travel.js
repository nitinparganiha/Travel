let mongoos=require("mongoose");
let Travel=require("../Model/Travel");

exports.add=async(req,resp)=>{
    try{
let TravelerName=req.body.TravelerName;
let Location=req.body.Location;
let Price=req.body.Price;
let ContactNumber=req.body.ContactNumber;
let Available=req.body.Available;
let CarName=req.body.CarName;
let Sheet=req.body.Sheet;

let travel=await Travel.create({
    TravelerName,
    Location,
    Price,
    ContactNumber,
    Available,
    CarName,
    Sheet
});
    if(travel){
        resp.send("Add Successfull")
    }else{
          resp.send("Please fill all details");
    }
}catch{
        resp.send("Please try again");
    }
}

exports.find=async (req,resp)=>{
    try{
    let travel=await Travel.find();
    if(travel){
        resp.send(travel);
    }else{
        resp.send("Empty");
    }
    resp.send("I am from find");
    }catch{
        resp.send("Hey... Look at just one min..");
    }
}
exports.delete=(req,resp)=>{
resp.send("I am from delete");
}
exports.edit=async(req,resp)=>{
    try{
    let ContactNumber=req.body.ContactNumber;
    let TravelerName=req.body.TravelerName;
    let CarName=req.body.CarName;
    let Available=req.body.Available;
    let Price=req.body.Price;
    let Location=req.body.Location;
    let Sheet=req.body.Sheet;
        let update=await Travel.findOneAndUpdate(
        {TravelerName},
        {$set:
            {
            Location,
            Price,
            ContactNumber,
            Available,
            CarName,
            Sheet
            }
        },
        {new:true});

        if(update){
            resp.send("Update Successfull");
        }else{
            resp.send("Please try once again");
        }
    resp.send("I am from edit");
    }catch{
        resp.send("Please try again");
    }
}