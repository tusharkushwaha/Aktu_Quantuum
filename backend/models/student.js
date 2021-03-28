const mongoose= require("mongoose")

const studentSchemea = new mongoose.Schema({
       name:{
            type: String,
            required:true,
            
       },
       date:{
            type:Number,
            min:18,
            required:true
       },
       email:{
            type:String,
            required:true,
            unique:true
            
       },
       password:{
            type:String,
            requred:true,
            unique:true
       }

})
const Student = new mongoose.model("User", studentSchemea)
module.exports=Student