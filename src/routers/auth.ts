import express,{Request,Response } from "express";
const router = express.Router();
import tutModel from "../models/user_model";
import {body,validationResult} from 'express-validator';


///router:-1

router.post('/register',[
    body('fullName','Enter Valid Name').isLength({min:3}),
    body('email','Enter Valid Email').isEmail(),
    body('password','Enter Valid Password').isLength({max:8})
], async(req:Request,resp:Response)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return resp.status(400).json({ errors: errors.array() });
        // res.customError(404, 'Not Found', { additionalInfo: 'some details' });
       
       
    }
  try {
    let user = await tutModel.findOne({email:req.body.email});
    if(user){
        return resp.status(400).json({ errors: "Sorry a user with email already exists" });
     
    }
     user = await tutModel.create({
        title:req.body.title,
        subtitle:req.body.subtitle,
        fullName:req.body.fullName,
        dob:req.body.dob,
        gender:req.body.dob,
        weight:req.body.weight,
        hieght:req.body.hieght,
        mobile:req.body.mobile,
        email:req.body.email,
        password:req.body.password,
        confpassword:req.body.confpassword

     });

     resp.success('registration sucessfull', user);
    // let result = await data.save();
    // resp.json({'data':user});
    
  } catch (error) {
    // console.error(error.message);
    resp.status(500).send("some error is occers");
  }
})

export default router;