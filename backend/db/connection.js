const mongoose= require("mongoose");
const DB = "mongodb+srv://tusharkushwaha:Tushar@cluster0.se7tl.mongodb.net/aktu_quantum_db?retryWrites=true&w=majority" 

mongoose.connect(DB, {
     useNewUrlParser:true,useUnifiedTopology:true, useCreateIndex:true,useFindAndModify:false
}).then(()=>{
     console.log("Connection succesful");
}).catch(()=>{
     console.log("Error in connection");
})