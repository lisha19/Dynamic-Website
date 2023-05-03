const express = require("express");
// const path = require("path");
const path = require("path");
require("./db/conn");

const User= require("./models/usermessage")
const hbs = require("hbs");
const { registerPartials } = require("hbs");

const bodyParser=require("body-parser");
const app = express();
const port = process.env.PORT ||5000;
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "views"));





const staticpath = path.join(__dirname, "../public");
const templatespath =  path.join(__dirname, "../templates");
const partialspath=  path.join(__dirname, "../templates/partials");
app.use(express.static(path.join(__dirname, '../public')));



app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

// / app.get(path , callback)
// "/" mean homepage

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath));
// const staticpath =  path.join(__dirname, "../public");
app.set("view engine","hbs");
app.set("views",templatespath);
hbs.registerPartials(partialspath);
// hbs.registerPartials(path.join(__dirname, "../templates/partials"));
;

app.get("/page",(req,res)=>{
    console.log("BC");
    res.render("views/index");
  
})
app.get("/contact",(req,res)=>{
    console.log("BC");
    res.render("views/contact");
  
})
app.post("/contact",async(req,res)=>{
try{
res.send(req.body);
}catch(error){
    res.status(500).send(error);
}
})
app.listen(port,()=>{
    console.log('serverver running');
})

// http://localhost:5000/page