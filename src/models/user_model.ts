import mongoose,{Schema,model} from "mongoose";

const userModel =new mongoose.Schema({
    
        title:String,
        subtitle:String,
    
    fullName:{
        type:String,
      
    },
    dob:String,
    gender:String,
    weight:Number,
    hieght:Number,
    mobile:String,
    email:{
        type:String,
    },
    password:String,
    confpassword:String


});

const tutModel = mongoose.model('newtutorial',userModel);
export default tutModel;