let mongoos=require("mongoose");

let UserSchema=new mongoos.Schema({
    UserName: {
        type:String,
        require:true
    },
    Password: {
        type:String,
        require:true
        },
    Address:{
        type:String,
        require:true
    },
    ContactNumber: {
        type:Number
    }
});
module.exports = mongoos.model("User", UserSchema);


