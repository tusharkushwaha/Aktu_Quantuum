const express = require("express");
const app = express();
const hbs = require("hbs")
const port = process.env.PORT || 8000;
const path = require("path");
const mongo = require("./db/connection")
const dotenv= require("dotenv");


const static_path= path.join(__dirname,"/public")
const hbs_views_path= path.join(__dirname,"/templates/views")
const partial_path= path.join(__dirname,"/templates/partials")
const Student = require("./models/student.js")
// dotenv.config({path:"./config.env"})

app.use(express.static(static_path))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'hbs');
app.set("views",hbs_views_path);

hbs.registerPartials(partial_path);

app.get("/",(req,res)=>{
     res.render("index")
})
app.get("/about",(req,res)=>{
     res.render("about")
})
app.get("/courses",(req,res)=>{
     res.render("courses")
})
app.get("/supportus",(req,res)=>{
     res.render("supportus")
})
app.get("/owner",(req,res)=>{
     res.render("owner")
})
app.get("/login",(req,res)=>{
     res.render("login")
})
app.get("/create_account",(req,res)=>{
     res.render("create_account")
})
app.post("/register",(req,res)=> {
     const student = new Student(req.body);
     
     student.save()
     .then((result)=>{
         
          res.redirect("/login")
          console.log("success");
     }).catch((err)=>{
          
          res.redirect("/create_account")
          console.log("failed");
          console.log(err     );
     })
      
})
app.get("*",(req,res)=>{
     res.render("error404")
})
app.listen(port,()=>{
     console.log(`your server is active at the port ${port}`);
})







