import express from 'express';
import path from 'path';
// import {User} from './mongo.js';
import {registeruser} from './mongo.js';
const app=express();
app.use(express.static(path.join(path.resolve(),'public')));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.render("index");
});
app.post("/login", async (req,res)=>{
    console.log(req.body);
    const {Email, Password}=req.body;
    const ss=await new User({Email,Password}).save();
})

app.post("/register",async (req,res)=>{
    console.log(req.body);
    const {Username, Email, Password}=req.body;
    const ss=await new registeruser({Username, Email, Password}).save();
})

app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("running");
    }

});
