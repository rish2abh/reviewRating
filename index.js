const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("./model/config")
const { response } = require("express");
const app = express();
app.use(express.json())
app.use(bodyParser.json());
const userSchema = require('./model/user_schema')
const user = require("./model/user_schema");


app.get("/", function(req,res){
    res.send("Welcome in JS World")
} )

app.post("/registerUser", async (req,res)=>{
   //  const cruddata = new userSchema(req.body)
    const email = req.body.email;
    const userdata = new userSchema({
        name : req.body.name,
        phoneNumber : req.body.phoneNumber,
        email : req.body.email,
        city : req.body.city,
        state : req.body.state
      
    })
    console.log(req.body.name);
    try{
        const userExists = await user.findOne({ email : req.body.email })
        if (userExists){
            return res.status(400).json({ status : 400 , error: "Email already exit"});
        }

        console.log("inside try");
        const addRes = await userdata.save()
        console.log("after try");
        res.send(addRes)
    } 
    catch(err){
        res.send("Error")
    }
})



app.listen(9000, function(req,res) {
    console.log("Server is running on port no : 9000");
});