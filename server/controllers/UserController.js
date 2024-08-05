import userModel from "../models/User.js";
import jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt';
import validator from "validator";



const jwtSecret = "mynameissomethingelse";

//login user

export const loginUser = async(req,res) => {
        const {email,password} = req.body;
        try {
            const user = await userModel.findOne({email});

            if(!user){
                res.json({success:false,message:"User Doesn't exist"})
            }

            const isMatch = await bcrypt.compare(password,user.password);

            if(!isMatch){
                return res.json({success:false,message:"Invalid credentials"});
            }

            const token = createTOken(user._id);
            res.json({success:true,token});



        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
        }
}


const createTOken = (id) => {
    return jwt.sign({id},jwtSecret)
}

//register user

export const registerUser = async(req,res) => {
    const{name,email,password} = req.body;
    try {
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exist"})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }

        if(password.length<8){
            return res.json({success:false, message:"Please enter a strong password"})
        }


        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save();
        const token = createTOken(user._id);
        res.json({success:true, token})



    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}