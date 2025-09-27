let mongoos=require("mongoose");
let travelSchema=new mongoos.Schema({
    TravelerName:{
        type:String,
        require:true
    },
    Location:{
        type:String,
    },
    Price:{
        type:Number
    },
    ContactNumber:{
        type:Number,
        require:true
    },
    Available:{
        type:Boolean,
        require:true
    },
    CarName:{
        type:String,
    },
    Sheet:{
        type:Number
    }
});

module.exports=mongoos.model("Travel",travelSchema);