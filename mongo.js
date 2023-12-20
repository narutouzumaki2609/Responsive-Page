import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/myapp");

const userinfo=new mongoose.Schema({
    Email:String,
    Password:String
});

const registering=new mongoose.Schema({
    Username: String,
    Email: String,
    Password: String
});
const registeruser=new mongoose.model("registeruser",registering);
const User=new mongoose.model("User",userinfo);

module.exports={
    // User,
    registeruser
};

