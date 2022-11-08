const bcrypt = require("bcrypt");
const user = require("../model/user_schema");
const userSchema = require("../model/user_schema");

const userSignup = async (req,res)=>{

    console.log(req,res);
    const password = req.body.password
     const email = req.body.email;
     const userdata = new userSchema({
         name : req.body.name,
         password : req.body.password,
         phone : req.body.phone,
         email : req.body.email,
         city : req.body.city,
         state : req.body.state
       
     })
     console.log(req.body.name, password);
     try{
         const userExists = await user.findOne({ email : email })
         if (userExists){
            console.log("222222");
             return res.status(400).json({ status : 400 , error: "Email already exit"});
         }
         const salt = await bcrypt.genSalt(10);
         user.password = await bcrypt.hash(password , salt);
         console.log("3333")
         await user.Save();
        }
        catch(err) {
         res.send("Error")
     }
 }

 module.exports = {
    userSignup
 }
